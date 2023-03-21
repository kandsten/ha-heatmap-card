# Heatmap card for Home Assistant
<img align="left" width="300" alt="A Heat map of grid energy consumption" src="images/grid_usage.png">

Custom card enabling [Heat maps](https://en.wikipedia.org/wiki/Heat_map) in Home Assistant.

Will pick a hopefully useful color scale out of the box based on your type of data ([Device Class](https://www.home-assistant.io/integrations/sensor/#device-class)), but you can override most aspects of the card to suit your needs.



## Installation
This module is not yet available in HACS or widely advertised; if you're reading this, chances are that I told you about it directly.

For now, you need to install it manually:

1. Download `heatmap-card.js`, place it in your `config/www` directory.
2. Add `/local/heatmap-card.js` in your Resource config, type of `JavaScript Module`.

## Configuration
### Minimal configuration
<img align="right" width="300" alt="A temperature display heat map" src="images/temperature.png">
The card will try to figure out how to present data
based on the [device type](https://www.home-assistant.io/integrations/sensor/) of the
requested entity:
```
type: custom:heatmap-card
entity: sensor.aranet_uppe_temperature
```

It'll pich a card `title` based on the name of the entity, present 21 days worth of data and pick a color scheme and scale based on the [device type](https://www.home-assistant.io/integrations/sensor/).


### Energy configuration example
A slightly more involved example, setting the number of days to present as well as
defining the `max_value`. Setting a max value is important in order to make the display
consistent across different time periods.

In the case of energy type entities, setting `max_value` to f.x the total production
capacity in kW of a PV install or the main fuse capacity of your house would make
sense.

Some common fuse sizes and the maximum effect they enable:
|Fuse size| kW / max_value|
|     ---:|          ---: |
|      16A|             11|
|      20A|             14|
|      25A|             17|
|      35A|             24|


```
title: Solar PV generation
type: custom:heatmap-card
entity: sensor.total_pv_generation
max_value: 4.8
days: 45
```
