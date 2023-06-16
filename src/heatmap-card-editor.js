const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

import { HeatmapScales } from './heatmap-scales.js';
import device_classes from './device_classes.json';

/*
    This editor uses the somewhat rawer HA elements rather than ha-form. This makes it
    more complex and low level than is ideal, but it seemed the lesser evil for the sake
    of making the UI a bit more automagical. Tabs seemed to be of the essence.

    * General code layout *

      - render(): Displays the actual card contents. Called infrequently. All
                  HTML templating is captured in this and related routines. We
                  also do some config checking here and render errors if we
                  detect that we're inside of the card editor; this is fugly, but
                  as we don't have access to the hass object in setConfig(), this
                  seemed like a necessary evil.

                  Calls a lot of section specific render helper functions.

      - setConfig(): As opposed to in the card view (non-editor), we don't
                     bother with a lot of config validation.

    * The editor view *

    - Hide most fields until we've got `entity` picked out; without the entity,
      we have a hard time suggesting scales, hide until we can show something.

    - Unless the entity comes with a `device_class` attached to it, ask the user
      for the device class. Ideally they'd set it in the entity config in HA
      instead. May at some point change the behavior of this card to mandate
      that over accepting an override in the card config.

    - Based on the device class, suggest a scale. We split them into absolute
      scales for things like VOC, Carbon Dioxide and similar and relative scales
      for f.x power generation, energy usage. Additionally, the user can supply
      a custom scale of either kind. These three options (abs, rel, custom) go
      into corresponding tabs.

    - The relative tab has inputs for max/min values in the input data; will
      either be supplied by the user or inferred from the data.

    - There's a `Card elements` section for showing/hiding/customizing card
      elements beyond the heatmap itself. Largely unused for now.


*/

/*
    This is a bit of a hack to avoid having to import lit-unsafe-html,
    which would by itself necessitate loading all of lit. It may or may
    not be the lesser evil; kill it off if I ever refactor to import
    lit properly.
*/
function unsafe_html(text) {
    var spoof = [text];
    spoof.raw = true;
    return html(spoof)
}

export class HeatmapCardEditor extends LitElement {
    scales = new HeatmapScales();

    static get properties() {
        return {
            _config: {},
            active_tab: undefined,
            entity: undefined,
            device_class: undefined,
            scale: undefined
        };
    }

    set hass(hass) {
        this.myhass = hass;
    }

    async setConfig(config) {
        this._config = config;
        // Ensure that the entity picker element is available to us before we render.
        // https://github.com/thomasloven/hass-config/wiki/PreLoading-Lovelace-Elements
        var helpers = await loadCardHelpers();
        if (!customElements.get("ha-entity-picker")) {
            const entities_card = await helpers.createCardElement({type: "entities", entities: []});
            await entities_card.constructor.getConfigElement();
        }

        this.entity = this.myhass.states[this._config.entity];
        this.device_class = (this.entity && this.entity.attributes.device_class) ?? this._config.device_class;
        this.scale = this.scales.get_scale(this._config.scale)
        this.smoothing = this._config.smoothing ?? 'false';
        this.high_res = this._config.high_res ?? 'false';

        /* Once we have a scale, set the currently active tab to whatever matches it. */
        if (this.active_tab === undefined && this._config.scale) {
            this.active_tab = this.tab_from_scale(this._config.scale);
        }
    }

    /* Set the currently active tab */
    tab_from_scale(scale) {
        if (typeof(scale) === 'object') {
            return 2; // Custom tab
        }
        const config = this.scales.get_scale(scale);
        if (config.type === 'relative') {
            return 1; // Relative tab
        } else {
            return 0; // Absolute tab
        }
    }

    /* We'll only display this element if the entity doesn't present a device_class */
    render_device_class_picker() {
        const dc_list = Object.keys(device_classes).map(function(dc) {
            return {
                'label': dc,
                'value': dc
            }
        })
        if (this.entity && !(this.entity.attributes.device_class)) {
            return html`
                <ha-combo-box
                    .label=${"Device class"}
                    .hass=${this.myhass}
                    .configValue=${"device_class"}
                    .items=${dc_list}
                    .value=${this._config.device_class ?? ""}
                    .allowCustomValue=${false}
                    .helper=${"What device_class best represents this entity?"}
                ></ha-combo-box>
            `
        }
    }

    /*
        Doc rendering function. We'll strip the `docs` key
        from any custom scale, so the text here should
        be safe to render verbatim as HTML / only ever originate
        from our repo.
    */
    render_scale_docs(scale_type) {
        if (this.scale === undefined) { return }
        var license_block;
        /*
            The scale_type check here is so that we don't render relative
            scale info when switching to the absolute scale tab and vice
            versa.
        */
        if (this.scale.docs === undefined ||
            this.scale.type !== scale_type) {
                return
        }
        if (this.scale.docs?.license) {
            license_block = html`
                <h4>Scale license</h4>
                <p>
                    This scale is licensed separately from the heatmap card
                    under <a href="${this.scale.docs.license.url}" target="_blank">${this.scale.docs.license.name}</a>.
                </p>
            `
        }
        return html`
            <div class="scale-docs">
                <h3>About this scale</h3>
                ${unsafe_html(this.scale.docs?.text)}
                ${license_block}
            </div>
        `
    }

    render_tab_bar() {
        if (!(this.device_class)) { return; }
        /* This does seem a bit raw/ugly, there is probably some better approach */
        const tab_switcher = (ev) => {
            for (const elt of this.renderRoot.querySelectorAll(".scale-picker-content")) {
                elt.style.display = "none";
            }
            this.renderRoot.querySelector(`#tab-idx-${ev.detail.index}`).style.display = "block";
        }
        return html`
            <mwc-tab-bar
                @MDCTabBar:activated=${tab_switcher}
                .activeIndex=${this.active_tab ?? 0}
            >
                <mwc-tab label="Absolute"></mwc-tab>
                <mwc-tab label="Relative"></mwc-tab>
                <mwc-tab label="Custom"></mwc-tab>
            </mwc-tab-bar>
            <div class="scale-picker-content" id="tab-idx-0">
                ${this.render_absolute_scale_picker()}
                ${this.render_scale_docs('absolute')}
            </div>
            <div class="scale-picker-content" id="tab-idx-1">
                ${this.render_relative_scale_picker()}
                ${this.render_scale_docs('relative')}
            </div>
            <div class="scale-picker-content" id="tab-idx-2">
                <h3>Custom scale</h3>
                <p>There's no GUI support for setting a custom scale; use the code editor.</p>
                <p>See <a href="https://github.com/kandsten/ha-heatmap-card#custom-color-scales">
                the card README</a> for the config reference.</p>
            </div>
        `
    }

    render_absolute_scale_picker() {
        var scale_picker;
        const scales = this.scales.get_by('device_class', this.device_class);
        if (typeof(this._config.scale) === 'object') {
            scale_picker = html`Using a custom scale, picker disabled`;
        } else if (scales.length === 0) {
            scale_picker = html`There are no predefined scales for this device class`;
        } else {
            scale_picker = html`
                ${scales.map((scale) => html`
                    <ha-formfield .label=${scale.name} @change=${this.update_field}>
                        <ha-radio
                            .checked=${scale.key === this._config.scale}
                            .value=${scale.key}
                            .configValue=${"scale"}
                        ></ha-radio>
                    </ha-formfield><br>
                `)}
            `
        }
        return html`
            <div>
                <h3>Scales for this device class</h3>
                ${scale_picker}
            </div>
        `
    }

    /*
        Dropdown (combobox) picker + min/max input widgets. Busy part of the
        code.
    */
    render_relative_scale_picker() {
        var scale_picker;
        var scales = this.scales.get_by('type', 'relative').map(function(scale) { return {
            label: scale.name,
            value: scale.key,
            css: scale.css
        }});

        if (typeof(this._config.scale) === 'object') {
            scale_picker = html`Using a custom scale, picker disabled`;
        } else {
            var box_renderer = item => html`
            <ha-list-item>
                <div style="display: inline-block; margin-right: 15px; width: 120px; height: 12px; background: linear-gradient(90deg, ${item.css});"></div> ${item.label}
            </ha-list-item>`;
            scale_picker = html`
                <ha-combo-box
                    .label=${"Scale"}
                    .hass=${this.myhass}
                    .configValue=${"scale"}
                    .items=${scales}
                    .value=${this._config.scale}
                    .renderer=${box_renderer}
                    .allowCustomValue=${true}
                > </ha-combo-box>
            `
        }
        if (this.entity && this.device_class) {
            return html`
                <h3>Color scales</h3>
                    ${scale_picker}
                <h3>Range</h3>
                <div>
                    <ha-textfield
                        .label=${"Minimum value"}
                        .value=${this._config.data?.min ?? 'auto'}
                        .placeholder=0
                        .disabled=${this._config.data?.min === 'auto' || this._config.data?.min === undefined}
                        .configValue=${"data.min"}
                        @input=${this.update_field}
                        ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.min === 'auto' || this._config.data?.min === undefined }
                            .value=${"auto"}
                            .configValue=${"data.min"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                <div>
                    <ha-textfield
                        .label=${"Maximum value"}
                        .value=${this._config.data?.max ?? 'auto'}
                        .disabled=${this._config.data?.max === 'auto' || this._config.data?.max === undefined}
                        .configValue=${"data.max"}
                        @input=${this.update_field}
                    ></ha-textfield>
                    <ha-formfield .label=${"Infer from the sensor data"} @change=${this.update_field}>
                        <ha-checkbox
                            .label=${"Auto"}
                            .checked=${this._config.data?.max === 'auto' || this._config.data?.max === undefined }
                            .value=${"auto"}
                            .configValue=${"data.max"}
                        ></ha-checkbox>
                    </ha-formfield>
                </div>
                `
        }
    }

    render_entity_warning() {
        if (this.entity === undefined) { return; }
        if (this.entity.attributes?.state_class === undefined ||
            ['measurement', 'total', 'total_increasing'].includes(this.entity.attributes?.state_class) === false
            ) {
                return html`
                    <ha-alert
                        .title=${"Warning"}
                        .type=${"warning"}
                        own-margin
                    >
                        <div>
                            <p>This entity has a <code>state_class</code> attribute set to
                            <i>${this.entity.attributes?.state_class ?? 'undefined'}</i>.</p>
                            <p>This means that data won't be saved to Long Term Statistics, which
                            we use to drive the heatmap; no results will be shown.</p>
                        </div>
                    </ha-alert>
                `
        }
    }

    render() {
        if (this.myhass === undefined || this._config === undefined) { return; }

        return html`
        <div class="root card-config">
            <ha-entity-picker
                .required=${true}
                .hass=${this.myhass}
                .value=${this._config.entity}
                .configValue=${"entity"}
                .includeDomains=${"sensor"}
            ></ha-entity-picker>
            ${this.render_entity_warning()}
            ${this.render_device_class_picker()}
            <ha-textfield
                .label=${"Days"}
                .placeholder=${21}
                .type=${"number"}
                .value=${this._config.days}
                .configValue=${"days"}
                @input=${this.update_field}
                .helper=${"Days of data to include in the heatmap. Defaults to 21"}
                .helperPersistent=${true}
            ></ha-textfield>
            ${this.render_tab_bar()}
            <h3>Card elements</h3>
            <ha-textfield
                .label=${"Card title"}
                .placeholder=${(this.entity && this.entity.attributes.friendly_name) || ''}
                .value=${this._config.title || ""}
                .configValue=${"title"}
                @input=${this.update_field}
                ></ha-textfield>
            <ha-formfield .label=${"High resolution (usually only 10 days kept)"} @change=${this.update_field}>
                <ha-checkbox
                    .label=${"High resolution"}
                    .checked=${this._config.high_res === 'true' }
                    .value=${"true"}
                    .configValue=${"high_res"}
                ></ha-checkbox>
            </ha-formfield>
            <ha-formfield .label=${"Smooth low-precision data"} @change=${this.update_field}>
                <ha-checkbox
                    .label=${"Smoothing"}
                    .checked=${this._config.smoothing === 'true' }
                    .disabled=${['total', 'total_increasing'].includes(this.entity?.attributes?.state_class) ? '' : 'disabled'}
                    .value=${"true"}
                    .configValue=${"smoothing"}
                ></ha-checkbox>
            </ha-formfield>
        </div>`
    }

    /*
        Cribbing the general idea from ha-selector-select.ts here, just
        doing some more manual event work.

        Not very generic and a bit fugly. Works for this particular scenario.

    */
        update_field(ev) {
            ev.stopPropagation();
            const value = ev.target.value;
            if (this.disabled || value === undefined || value === this.value) {
                return;
            }
            const event = new Event('value-changed', { bubbles: true });
            if ('checked' in ev.target) {
                // Is this a checkbox?
                event.detail = {'value': (ev.target.checked === true ? value : 0)};
            } else if (isNaN(parseFloat(value))) {
                // Can't parse as a number? Use verbatim
                event.detail = {'value': value};
            } else {
                event.detail = {'value': parseFloat(value)};
            }
            ev.target.dispatchEvent(event);
        }

    createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener("value-changed", (ev) => {
            ev.stopPropagation();
            const key = ev.target.configValue;
            const val = ev.detail.value;
            var config = JSON.parse(JSON.stringify(this._config));

            /*
                When updating the device class, we also want to set the
                scale to the class default.
            */
            if (key === 'device_class') {
                config['scale'] = this.scales.defaults_for(val);
                this.active_tab = this.tab_from_scale(config['scale']);
            }

            /*
                When updating the entity, set the scale to the class default
                of this entity if it has a class. If so, also zap the device_class
                value from the config if it's set.
            */
            if (key === 'entity') {
                const new_entity = this.myhass.states[val];
                const new_device_class = (new_entity && new_entity.attributes.device_class);
                if (new_device_class) {
                    config['scale'] = this.scales.defaults_for(new_device_class);
                    this.active_tab = this.tab_from_scale(config['scale']);
                    delete config['device_class'];
                }
            }

            /*
                Figure out what object to update; we're making things a bit hard
                on ourselves by supporting dot notation in the configValue
            */
            var root = config;
            var target = key;
            if (key.indexOf('.')) {
                for (const segment of key.split('.').slice(0, -1)) {
                    if (root[segment] === undefined) {
                        root[segment] = {};
                    }
                    root = root[segment];
                }
                target = key.split('.').slice(-1);
            }
            root[target] = val;

            const event = new Event('config-changed');
            event.detail = {'config': config};
            this.dispatchEvent(event);
        });
        return root;
    }

    /* Copied from ha-form css; used for spacing between combo boxes */
    static styles = css`
        .root > * {
            display: block;
        }
        .root > *:not([own-margin]):not(:last-child) {
            margin-bottom: 24px;
        }
        ha-alert[own-margin] {
            margin-bottom: 4px;
        }


        a:link, a:visited {
            color: var(--primary-color);
        }

        .scale-docs {
            margin-left: 2em;
            margin-right: 2em;
            word-wrap: break-word;
        }

        /* Don't mess with the line spacing */
        sup, sub {
            line-height: 0;
        }
    `;
}
