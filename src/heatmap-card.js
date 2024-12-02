/*
    * General code layout *

    There are three routines whose quirks drive the overall design and quirks:
      - render(): Displays the actual card contents. Called infrequently. All
                  HTML templating is captured in this and related routines.

      - set hass(): Called by HA's UI rather frequently, so we make sure to
                    cache aggressively. On load (rendering our tag) + after
                    config changes, we're:
                      - Calling populate_meta()
                        to setup some values based on the HA configuration + our
                        card configuration, with defaults as applicable.
                      - Fetch the data to drive the heatmap from Long Term Storage.

      - setConfig(): Called by HA's UI when the card is first displayed
                     and again when the config changes. Note that it's called
                     *before* set hass(), meaning we can't use the hass object
                     to validate our config, annoyingly enough.
*/

/*
    Use lit from Home Assistant rather than by sourcing it externally.
    This is not recommended practice (per HA blog entry, below), but it
    does seem to make some sense. Will deal with external sourcing
    if we run into trouble later on.

    Reference: https://developers.home-assistant.io/blog/2021/05/19/lit-2.0/
*/

const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

import { HeatmapScales } from './heatmap-scales.js';

export class HeatmapCard extends LitElement {
    last_render_ts = 0;
    scales = new HeatmapScales();
    static get properties() {
        return {
            hass: {},
            config: {},
            grid: [],
            grid_status: undefined,
            meta: {},
            tooltipOpen: false,
            selected_element_data: ''
        };
    }

    render() {
        // We may be trying to render before we've received the recorder data.
        if (this.grid === undefined) { this.grid = []; }
        return html`
            <ha-card header="${this.meta.title}" id="card">
                <div class="card-content">
                    <table>
                        <thead>
                            <tr class="hr${this.myhass.locale.time_format}">
                                <th class="hm-row-title">${this.myhass.localize('ui.dialogs.helper_settings.input_datetime.date')}</th>
                                ${this.date_table_headers()}
                            </tr>
                        </thead>
                        <tbody>
                    ${this.grid.map((entry, row) =>
                        html`<tr>
                            <td class="hm-row-title">${entry.date}</td>
                            ${entry.vals.map((util, idx) => {
                                var css_class="hm-box";
                                var r = util;
                                if (r === null) { css_class += " null"; }
                                if (this.meta.scale.type === 'relative') {
                                    const diff = this.meta.data.max - this.meta.data.min
                                    r = (util - this.meta.data.min) / diff;
                                    if (r < 0) { r = 0 };
                                    if (r > 1) { r = 1 };
                                }
                                const col = this.meta.scale.gradient(r);
                                return html`<td @click="${this.toggle_tooltip}" class="${css_class}" data-val="${util}" data-row="${row}" data-col="${idx}" style="color: ${col}"></td>`
                            })}
                        </tr>`
                    )}
                        </tbody>
                    </table>
                    ${this.render_status()}
                    ${this.render_legend()}
                    ${this.render_tooltip()}
                </div>
            </ha-card>
        `;
    }

    /* Deal with 24h vs 12h time */
    date_table_headers() {
        if (this.myhass.locale.time_format === '12') {
            return html`
                <th>12<br/>AM</th><th>·</th><th>·</th><th>·</th><th>4<br/>AM</th><th>·</th><th>·</th><th>·</th>
                <th>8<br/>AM</th><th>·</th><th>·</th><th>·</th><th>12<br/>PM</th><th>·</th><th>·</th><th>·</th>
                <th>4<br/>PM</th><th>·</th><th>·</th><th>·</th><th>8<br/>PM</th><th>·</th><th>·</th><th>11<br/>PM</th>
            `            
        } else {
            return html`
                <th>00</th><th>·</th><th>·</th><th>·</th><th>04</th><th>·</th><th>·</th><th>·</th>
                <th>08</th><th>·</th><th>·</th><th>·</th><th>12</th><th>·</th><th>·</th><th>·</th>
                <th>16</th><th>·</th><th>·</th><th>·</th><th>20</th><th>·</th><th>·</th><th>23</th>
            `
        }
    }

    render_status() {
        if (this.grid_status) {
            return html`<h3>${this.grid_status}</h3>`
        }
    }

    render_legend() {
        if (this.config.display.legend === false) {
            return;
        }
        const ticks = this.legend_scale(this.meta.scale);
        return html`
            <div class="legend-container">
                <div id="legend" style="background: linear-gradient(90deg, ${this.meta.scale.css})"></div>
                <div class="tick-container">
                    ${ticks.map((tick) => html`
                        <div class="legend-tick" style="left: ${tick[0]}%;"">
                            <div class="caption">${tick[1]} ${this.meta.scale.unit}</div>
                        </div>
                        <span class="legend-shadow">${tick[1]} ${this.meta.scale.unit}</span>`
                    )}
                </div>
            </div>
        `
    }

    render_tooltip() {
        var content = '';
        if (this.selected_element_data) {
            // Todo: See if we can use the precision from the entity here.
            const date = this.grid[this.selected_element_data.row]?.date;
            const hr = parseInt(this.selected_element_data.col);
            var from = new Date('2022-03-20 00:00:00').setHours(hr);
            var to = new Date('2022-03-20 00:00:00').setHours(hr + 1);
            var rendered_value;
            // selected_val is read via the data-val attribute in the DOM. The way it's set via Lit,
            // null translates into ''.
            if (this.selected_element_data.val === '') {
                rendered_value = this.myhass.localize('ui.components.data-table.no-data'); // "No data"
            } else {
                const val = +(parseFloat(this.selected_element_data.val).toFixed(2));
                rendered_value = `${val} ${this.meta.scale.unit || this.meta.unit_of_measurement}`;
            }
            var time_format = new Intl.DateTimeFormat('sv-SE', {'hour': 'numeric', 'minute': 'numeric'});
            if (this.myhass.locale.time_format == '12') {
                time_format = new Intl.DateTimeFormat('en-US', {'hour': 'numeric'});
            }
            content = html`<div class="meta">${date} ${time_format.format(from)} - ${time_format.format(to)}</div><div class="value">${rendered_value}</div>`;
        }
        return html`
            <div id="tooltip" class="${this.tooltipOpen ? 'active' : 'hidden'}">${content}</div>
        `
    }

    legend_scale(scale) {
        /*
            Figure out how to space the markings in the legend. There's some room for improvement
            in that we could snap this to more human friendly values such as integers, .5 and
            similar.
        */
        var ticks = [];
        if (scale.type === 'relative') {
            // Figure out our own steps, this scale ranges from 0-1.
            var diff = this.meta.data.max - this.meta.data.min;
            for (var i = 0; i <= 5; i++) {
                ticks.push(
                    [
                        i * 20,
                        +(Number(this.meta.data.min + (diff / 5) * i).toFixed(2))
                    ]
                )}
        } else {
            // This scale has steps defined in the scale. Use them.
            var min = scale.steps[0].value;
            var max = scale.steps[scale.steps.length - 1].value;
            var span = max - min;
            for (const entry of scale.steps) {
                ticks.push([
                    ((entry.value - min) / span) * 100,
                    entry.value
                ])
            }
        }
        return ticks;
    }

    /* Todo: research precision in data, how to use (abs. temp) */
    toggle_tooltip(e) {
        const oldSelection = this.renderRoot.querySelector("#selected");
        const card = this.renderRoot.querySelector("#card");
        const tooltip = this.renderRoot.querySelector("#tooltip");
        const target = e.target;
        if (oldSelection) {
            oldSelection.removeAttribute('id');
            if (oldSelection === e.target) {
                this.tooltipOpen = false;
                return;
            }
        }
        this.tooltipOpen = true;
        target.id = 'selected';
        /*
            Todo:
              - Improved handling when we're close to the page edges.
              - Fewer assumptions about the size of the tooltip.
        */
        var rect = target.getBoundingClientRect();
        var cardRect = card.getBoundingClientRect();
        var top = rect.top - cardRect.top;
        var left = rect.left - cardRect.left;
        tooltip.style.top = (top - 50 - rect.height).toString() + "px";
        tooltip.style.left = (left - (rect.width / 2) - 70) .toString() + "px";
        this.selected_element_data = target.dataset;
    }

    /*
        Whenever the state changes, a new `hass` object is set. We fetch some metadata
        the first time over but generally don't want to update frequently.
    */
    set hass(hass) {
        if (Date.now() - this.last_render_ts < 10 * 60 * 1000) {
            return;
        }
        this.myhass = hass;
        this.meta = this.populate_meta(hass);
        var consumers = [this.config.entity];
        this.get_recorder(consumers, this.config.days);
        
        this.last_render_ts = Date.now();
    }

    /*
        Pull data from Recorder/LTS.

        Notable gotcha: We do have a `pressure` unit defined in the unit_system
        structure; it'll default to Pa or Psi respectively for metric/us.

        However, pretty much every integration that deals with atmospheric
        pressure will present as device_class `pressure` instead. Thus, if we
        use the unit_system value, we'll end up with a scale that'll be bogus
        for atmo pressure use cases.

        Ideally integrations would use class atmospheric_pressure instead, but
        I'm guessing we're looking at an imperfect world for a good long while
        yet. On top of that, atmospheric pressure doesn't make a ton of sense
        for heatmaps of hourly data.

        tl;dr - even though we _do_ have a unit_system value for pressure, we
        shouldn't send it. It'll bring more pain than benefit.
    */
    get_recorder(consumers, days) {
        const now = new Date();
        this.grid_status = undefined;
        var startTime = new Date(now - (days * 86400000))
        startTime.setHours(23, 0, 0);
        this.myhass.callWS({
            'type': 'recorder/statistics_during_period',
            'statistic_ids': consumers,
            "period":"hour",
            "units": {
                "energy":"kWh",
                "temperature": this.myhass.config.unit_system.temperature
            },
            "start_time": startTime.toISOString(),
            "types":["sum", "mean"]
        }).then(recorderResponse => {
            /* Todo: Intermediate grouping step for supporting multiple entities */
            for (const consumer of consumers) {
                const consumerData = recorderResponse[consumer];
                if (consumerData === undefined) {
                    this.grid = [];
                    this.grid_status = this.myhass.localize('ui.components.data-table.no-data');
                    continue;
                }
                switch (this.meta.state_class) {
                    case 'measurement':
                        this.grid = this.calculate_measurement_values(consumerData);
                        break;
                    case 'total':
                    case 'total_increasing':
                        this.grid = this.calculate_increasing_values(consumerData);
                        break;
                    default:
                        throw new Error(`Unknown state_class defined (${this.meta['state_class']} for ${consumer}.`);
                }
            }
            if (this.config.data.max === undefined || this.config.data.max === 'auto') {
                this.meta.data.max = this.max_from(this.grid)
            }
            if (this.config.data.min === undefined || this.config.data.min === 'auto') {
                this.meta.data.min = this.min_from(this.grid)
            }
        });
    }

    // Todo: Refactor at some point, lots of copying for no good reason
    max_from(grid) {
        var vals = [];
        for (const entry of grid) {
            vals = vals.concat(entry.vals);
        }
        return Math.max(...vals);
    }

    // Todo: Refactor at some point, lots of copying for no good reason
    min_from(grid) {
        var vals = [];
        for (const entry of grid) {
            vals = vals.concat(entry.vals);
        }
        return Math.min(...vals);
    }

    // Todo: cleanup and comment.
    calculate_measurement_values(consumerData) {
        var grid = [];
        var gridTemp = [];
        var prevDate = null;
        var hour;
        for (const entry of consumerData) {
            const start = new Date(entry.start);
            hour = start.getHours();
            const dateRep = start.toLocaleDateString(this.meta.language, {month: 'short', day: '2-digit'});

            if (dateRep !== prevDate && prevDate !== null) {
                gridTemp = Array(24).fill(null);
                grid.push({'date': dateRep, 'nativeDate': start, 'vals': gridTemp});
            }
            gridTemp[hour] = entry.mean;
            prevDate = dateRep;
        }
        /*
            For the last date in the series, remove any entries that we didn't get from
            Home Assistant. This would typically be hours set in the future.
        */
        gridTemp.splice(hour + 1);
        return grid.reverse();
    }

    // Todo: cleanup and comment.
    /*
        Notable difference vs. calculate_measurement_values() - we fill missing values with 0 rather
        than null. For measurement values, we want to highlight gaps. For total_increasing ones, gaps
        are common with PV inverters, and it makes more sense to show this as 0 rather than potentially
        a lot of gaps in the graph that are really zero values.

        While this is something that the inverter integrations should be handling, it's an imperfect
        world.

        Will likely make this configurable at some point.
    */
    calculate_increasing_values(consumerData) {
        var grid = [];
        var prev = null;
        var gridTemp = [];
        var prevDate = null; 
        var hour;
        for (const entry of consumerData) {
            const start = new Date(entry.start);
            hour = start.getHours();
            const dateRep = start.toLocaleDateString(this.meta.language, {month: 'short', day: '2-digit'});

            if (dateRep !== prevDate && prev !== null) {
                gridTemp = Array(24).fill(0);
                grid.push({'date': dateRep, 'nativeDate': start, 'vals': gridTemp});
            }
            if (prev !== null) {
                var util = (entry.sum - prev).toFixed(2);
                gridTemp[hour] = util
            }
            prev = entry.sum;
            prevDate = dateRep;
        }
        /*
            For the last date in the series, remove any entries that we didn't get from
            Home Assistant. This would typically be hours set in the future.
        */
        gridTemp.splice(hour + 1);
        return grid.reverse();
    }

    populate_meta(hass) {
        const consumerAttributes = hass.states[this.config.entity].attributes;
        const device_class = (consumerAttributes.device_class ?? this.config.device_class);
        var meta = {
            'unit_of_measurement': consumerAttributes.unit_of_measurement,
            'state_class': consumerAttributes.state_class,
            'device_class': device_class,
            'language': hass.selectedLanguage ?? hass.language ?? 'en',
            'scale': this.scales.get_scale(
                (this.config.scale ?? this.scales.defaults_for(device_class)),
                device_class,
                this.myhass.config.unit_system
            ),
            'title': (this.config.title ?? (this.config.title === null ? undefined : consumerAttributes.friendly_name)),
            'data': {
                'max': this.config.data.max,
                'min': this.config.data.min
            },
        };
        return meta;
    }

    /*
        The user supplied configuration. Throw an exception and Home Assistant
        will render an error card. No access to the hass object at this point
        sadly; it'd simplify things a bit. Some of the config error checking
        code can be found in render() instead.
    */
    setConfig(config) {
        if (!config.entity) {
            throw new Error("You need to define an entity");
        }
        if (config.days && config.days <= 0) {
            throw new Error("`days` need to be 1 or higher");
        }
        this.config = {
            'title': config.title,
            'days': (config.days ?? 21),
            'entity': config.entity,
            'scale': config.scale,
            'data': (config.data ?? {}),
            'display': (config.display ?? {})
        };
        if (this.config.data.max !== undefined && 
            (this.config.data.max !== 'auto' && 
            typeof(this.config.data.max) !== 'number')
        ) {
            throw new Error("`data.max` need to be either `auto` or a number");
        }
        if (this.config.data.min !== undefined && 
            (this.config.data.min !== 'auto' && 
            typeof(this.config.data.min) !== 'number')
        ) {
            throw new Error("`data.min` need to be either `auto` or a number");
        }
        
        this.last_render_ts = 0;
    }
  
    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        if (!this.config.days) {
            return 1;
        } else {
            return (1 + Math.ceil(this.config.days / 6));
        }
    }

    static styles = css`
            /* Heatmap table */
            table {
                border: none;
                border-spacing: 0px;
                table-layout:fixed;
                width: 100%;
                pointer-events: none;
                user-drag: none;
                user-select: none;
                color: var(--secondary-text-color);
            }
            th {
                position:relative;
                font-weight: normal;
                vertical-align: bottom;
            }
            th:not(.hm-row-title) {
                text-align: center;
                white-space: nowrap;
            }
            /* Used for 12hr displays; we need space for two lines */
            tr.hr12 th:not(.hm-row-title) {
                font-size: 70%;
            }
            tr {
                line-height: 1.1;
                overflow: hidden;
                font-size: 90%;
            }
            .hm-row-title {
                text-align: left;
                max-height: 20px;
                min-width: 50px;
                width: 50px;
            }
            .hm-box {
                background-color: currentcolor;
                pointer-events: auto;
            }
            #selected {
                outline: 6px currentcolor solid;
                z-index: 2;
                margin: 3px;
                position: relative;
                box-shadow: 0px 0px 0px 7px rgba(0,0,0,1), 0px 0px 0px 8px rgba(255,255,255,1);
            }

            /* Legend */
            .legend-container {
                margin-top: 20px;
                width: 80%;
                margin-left: auto;
                margin-right: 5%;
                position: relative;

            }
            .tick-container {
                position: relative:
                left: -10px;
            }
            #legend {
                height: 10px;
                outline-style: solid;
                outline-width: 1px;
                /*
                    Background is set via the style attribute in the object while rendering,
                    as lit-element and CSS templating is a bit of a PITA.
                */
            }

            .legend-tick {
                position: absolute;
                top: 10px;
                height: 10px;
                vertical-align: bottom;
                border-left-style: solid;
                border-left-width: 1px;
                white-space: nowrap;
                text-align: right;
                opacity: 0.7;
            }

            .legend-container .caption {
                position: relative;
                top: -15px;
                transform: translateY(100%) rotate(90deg);
                transform-origin: center left;
                font-size: 80%;
                text-align: left;
            }

            /*
                We use a non-visible shadow copy of the tick captions
                to get a height for the element. As the ticks themselves
                are position: absolute'd, we can't use their height for
                this purpose without some JS kludging.
            */
            span.legend-shadow {
                margin-top: 15px;
                position: relative;
                border-color: red;
                border-style: solid;
                writing-mode: vertical-rl;
                transform-origin: bottom left;
                font-size: 80%;
                line-height: 0.2;
                visibility: hidden;
            }

            /* Detail view */
            #tooltip {
                display: none;
                z-index: 1;
                position: absolute;
                padding: 6px;
                border-radius: 4px;
                background: var(--ha-card-background, var(--card-background-color, white) );
                border-color: currentcolor;
                border-width: 1px;
                border-style: solid;
                white-space: nowrap;
            }
            #tooltip.active {
                display: block;
            }
            #tooltip div.meta {
                font-size: 90%;
            }
            #tooltip div.value {
                font-size: 120%;
            }
        `;

    static getConfigElement() {
        return document.createElement("heatmap-card-editor");
      }
}
