import builtin_scales from './scales.json';
import device_classes from './device_classes.json';
import chroma from '../lib/chroma.js';

/*
    Laying off pressure conversion for now, it gets messy quickly. See comment
    in heatmap-card, get_recorder().
*/
const conversions = {
    'temperature': {
        '°C': {
            '°F': (val) => parseInt((val * 1.8) + 32)
        },
        '°F': {
            '°C': (val) => parseInt((val - 32) / 1.8)
        }
    }
}

/*
    Handles scale management.

    - scales.json are generated from the scales/*.yaml files.
    - get_scale() is your typical entrypoint.
    - get_by() to find scales matching an attribute, typically type or device_class.
    - defaults_for() to find the default scale for a given device_class.
*/
export class HeatmapScales {
    // Expects the unit_system object from hass frontend
    constructor() {
        this.default_scale = 'iron red';
        this.scale_by_key = {};
        for (const scale of builtin_scales) {
            this.scale_by_key[scale.key] = scale;
        }
    }

    /*
        Returns a rendered scale, either a builtin one (if passed a string)
        or a custom scale (if passed an object).
    */
    get_scale(config, device_class = '', unit_system = {}) {
        if (config === undefined) { config = this.default_scale; }
        if (typeof(config) === 'string') {
            return this.generate_scale(this.scale_by_key[config], device_class, unit_system);
        }
        /*
            If we use a custom scale, strip the `docs` key
            as we'll be rendering it in the UI verbatim
        */
        var scale = this.generate_scale(config, device_class, unit_system);
        delete scale.docs;
        return scale;
    }

    /*
        Create the chromajs object + CSS gradient for the scale.

        We're also doing unit conversion if required; the way this works is that
        we adjust the scale if we need to (frontend unit config differs from
        scale unit config) and we know how to perform the conversion. This is a
        bit more heavy-handed than I'd like, but the alternatives seem messier.

        No caching done on the output, would need to reconsider that decision
        if the function becomes more expensive. Does get a bit messy since we're
        converting units on the fly.
    */
    generate_scale(config, device_class = undefined, unit_system = {}) {
        // Custom scales have been observed to be immutable in Home Assistant 2024.11, requiring to be cloned to be modified
        const steps = JSON.parse(JSON.stringify(config.steps));
        const colors = [];
        const domains = [];
        let unit = config.unit;
        
        // Default conversion function: Do nothing
        let conversion_fn = (val) => val;
        
        // dc_domain = the key in the unit_system object that is relevant
        // for the given device class.
        // TODO: See if this can be simplified. It's a bit more code than
        // I'd like for what it does.
        if (config.unit && device_class && unit_system) {
            const dc_domain = device_classes[device_class].unit_system;
            const us_unit = unit_system[dc_domain];
            if (dc_domain &&
                us_unit &&
                config.unit !== us_unit &&
                conversions[dc_domain] &&
                conversions[dc_domain][config.unit] && 
                conversions[dc_domain][config.unit][us_unit]) {
                    unit = us_unit;
                    conversion_fn = conversions[dc_domain][config.unit][us_unit]
            }
        }
        
        for (const step of steps) {
            colors.push(step.color);
            if ('value' in step) {
                step.value = conversion_fn(step.value)
                domains.push(step.value)
            }
        }
        
        let gradient;
        if (domains.length > 0 && domains.length === colors.length) {
            gradient = chroma.scale(colors).domain(domains);
        } else {
            gradient = chroma.scale(colors);
        }
        
        return {
            'gradient': gradient,
            'type': config.type ?? 'relative',
            'name': config.name,
            'key': config.key,
            'steps': steps,
            'unit': unit,
            'docs': config.documentation,
            'css': this.legend_css_by_gradient(gradient)
        }
    }

    /*
        Generate CSS for a gradient. There would be cleaner ways to go about this
        than generating a 21 step gradient every time; not sure if it can be safely
        optimized.
     */
    legend_css_by_gradient(gradient) {
        var fragment = [];
        for (const [idx, color] of gradient.colors(21).entries()) {
            fragment.push(`${color} ${idx * 5}%`);
        }
        return fragment.join(', ');
    }

    /*
        Return the default scale name for the given device class. If none
        defined, return the global default (iron red)
    */
    defaults_for(device_class) {
        if (device_class in device_classes && 'default' in device_classes[device_class]) {
            return device_classes[device_class].default;
        } else {
            return this.default_scale;
        }
    }

    /*
        Fetch scale by attribute, typically type or device_class.
    */
    get_by(field, value) {
        var out = builtin_scales.filter(scale => scale[field] === value);
        return out.map(scale => this.get_scale(scale));
    }
}
