/*
    HeatMap card for Home Assistant

    Copyright 2023 Kriss Andsten

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { HeatmapCard } from './heatmap-card.js';
import { HeatmapCardEditor } from './heatmap-card-editor.js';

/* Home Assistant custodial stuff:
    - Register the card
    - Make it available in the card picker UI
*/
customElements.define("heatmap-card", HeatmapCard);
customElements.define("heatmap-card-editor", HeatmapCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "heatmap-card",
    name: "Heatmap card",
    preview: true,
    description: "Heat maps of entities or energy data",
});
