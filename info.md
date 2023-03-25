# Heatmap card for Home Assistant
<img align="left" width="300" alt="A Heat map of solar energy generation" src="https://github.com/kandsten/ha-heatmap-card/raw/main/images/solar_pv.png">

Custom card enabling [Heat maps](https://en.wikipedia.org/wiki/Heat_map) in Home Assistant.

Will pick a hopefully useful color scale out of the box based on your type of data ([Device Class](https://www.home-assistant.io/integrations/sensor/#device-class)), but you can override most aspects of the card to suit your needs.

<br clear="both"/>

## Configuration
### Minimal example

Given a minimal config, the card will try to figure out how to present data in a somewhat sane way:

```
type: custom:heatmap-card
entity: sensor.aranet_uppe_temperature
```

It'll pick a card `title` based on the name of the entity, present the default 21 days worth of data and pick a color scheme and scale based on the entity [device type](https://www.home-assistant.io/integrations/sensor/).

It's a bit opinionated in what a "good" scale will be, and _may_ give you something that's not really fit for your usage (for instance by assuming that temperature sensor data refers to _indoor_ temperature). 

### More advanced configuration
See [the github repo](https://github.com/kandsten/ha-heatmap-card/) for a more detailed README
