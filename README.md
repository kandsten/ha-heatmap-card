# Heatmap card for Home Assistant
What it says on the tin; opinionated support for heatmaps.

## Installation
1. Download `heatmap.js`, place it in your `config/www` directory.
2. Add `/local/heatmap-card.js` in your Resource config, type of `JavaScript Module`.

## Configuration
### Minimal configuration
At its minimal configuration, the card will try to figure out how to present the data
based on the [device type](https://www.home-assistant.io/integrations/sensor/) of the
requested entity:
```
type: custom:heatmap-card
title: Card title goes here
entity: sensor.whatever
```

This may or may not be to your liking, but it should get you going quickly.

### Energy configuration
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
