#! /usr/bin/env python3

import glob
import json
import re
import yaml
import markdown

out = []

for specfile in sorted(glob.glob('src/scales/*.yaml')):
  # src/scales/(.*).yaml
  fname = specfile[11:-5]
  fname = fname.replace('_', ' ')
  print(fname)
  with open(specfile, 'r') as specfh:
    scale = yaml.safe_load(specfh)
    scale['key'] = fname
    if 'documentation' in scale:
      scale['documentation']['text'] = markdown.markdown(
        scale['documentation']['text'],
        extensions=['markdown_link_attr_modifier'],
        extension_configs={
          'markdown_link_attr_modifier': {
            'new_tab': 'on'
          }
        }
      )
    out.append(scale)

with open('src/scales.json', 'w') as rollupfh:
  json.dump(out, rollupfh, sort_keys=True, indent=2)
