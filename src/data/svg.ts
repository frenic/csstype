// This is originated from https://svgwg.org/svg2-draft/propidx.html to add SVG specific properties
// and is a temporarily solution until https://github.com/mdn/data/issues/59 is solved

import { properties as webrefProperties } from './css';

// SVG properties that reuse a CSS definition read it from webref
const cssProperty = (name: string) => {
  const property = webrefProperties[name];
  return { syntax: property?.syntax, initial: property?.initial };
};

export const properties: {
  [property: string]: { syntax?: string; initial?: string; inherited?: boolean; media?: string };
} = {
  'alignment-baseline': {
    syntax:
      'auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical',
    initial: 'see property description',
    inherited: false,
    media: 'visual',
  },
  'baseline-shift': {
    syntax: 'baseline | sub | super | <percentage> | <length>',
    initial: 'baseline',
    inherited: false,
    media: 'visual',
  },
  clip: cssProperty('clip'),
  'clip-path': cssProperty('clip-path'),
  'clip-rule': {
    syntax: 'nonzero | evenodd',
    initial: 'nonzero',
    inherited: true,
    media: 'visual',
  },
  color: cssProperty('color'),
  'color-interpolation': {
    syntax: 'auto | sRGB | linearRGB',
    initial: 'sRGB',
    inherited: true,
    media: 'visual',
  },
  'color-rendering': {
    syntax: 'auto | optimizeSpeed | optimizeQuality',
    initial: 'auto',
    inherited: true,
    media: 'visual',
  },
  cursor: cssProperty('cursor'),
  direction: cssProperty('direction'),
  display: cssProperty('display'),
  'dominant-baseline': {
    syntax:
      'auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge',
    initial: 'auto',
    inherited: false,
    media: 'visual',
  },
  fill: {
    syntax: '<paint>',
    initial: 'black',
    inherited: true,
    media: 'visual',
  },
  'fill-opacity': {
    syntax: '<number>',
    initial: '1',
    inherited: true,
    media: 'visual',
  },
  'fill-rule': {
    syntax: 'nonzero | evenodd',
    initial: 'nonzero',
    inherited: true,
    media: 'visual',
  },
  filter: cssProperty('filter'),
  'flood-color': {
    syntax: 'currentColor | <color>',
    initial: 'black',
    inherited: false,
    media: 'visual',
  },
  'flood-opacity': {
    syntax: '<number>',
    initial: '1',
    inherited: false,
    media: 'visual',
  },
  font: cssProperty('font'),
  'font-family': cssProperty('font-family'),
  'font-size': cssProperty('font-size'),
  'font-size-adjust': cssProperty('font-size-adjust'),
  'font-stretch': cssProperty('font-stretch'),
  'font-style': cssProperty('font-style'),
  'font-variant': cssProperty('font-variant'),
  'font-weight': cssProperty('font-weight'),
  'glyph-orientation-vertical': {
    syntax: 'auto | <angle> | <number>',
    initial: 'auto',
    inherited: true,
    media: 'visual',
  },
  'image-rendering': cssProperty('image-rendering'),
  'letter-spacing': cssProperty('letter-spacing'),
  'lighting-color': {
    syntax: 'currentColor | <color>',
    initial: 'white',
    inherited: false,
    media: 'visual',
  },
  'line-height': cssProperty('line-height'),
  marker: {
    syntax: 'none | <url>',
    initial: 'none | <url>',
    inherited: true,
    media: 'visual',
  },
  'marker-end': {
    syntax: 'none | <url>',
    initial: 'none',
    inherited: true,
    media: 'visual',
  },
  'marker-mid': {
    syntax: 'none | <url>',
    initial: 'none',
    inherited: true,
    media: 'visual',
  },
  'marker-start': {
    syntax: 'none | <url>',
    initial: 'none',
    inherited: true,
    media: 'visual',
  },
  mask: cssProperty('mask'),
  opacity: cssProperty('opacity'),
  overflow: cssProperty('overflow'),
  'paint-order': cssProperty('paint-order'),
  'pointer-events': cssProperty('pointer-events'),
  'shape-rendering': {
    syntax: 'auto | optimizeSpeed | crispEdges | geometricPrecision',
    initial: 'auto',
    inherited: true,
    media: 'visual',
  },
  'stop-color': {
    syntax: 'currentColor | <color>',
    initial: 'black',
    inherited: false,
    media: 'visual',
  },
  'stop-opacity': {
    syntax: '<number>',
    initial: '1',
    inherited: false,
    media: 'visual',
  },
  stroke: {
    syntax: '<paint>',
    initial: 'none',
    inherited: true,
    media: 'visual',
  },
  'stroke-dasharray': {
    syntax: 'none | <dasharray>',
    initial: 'none',
    inherited: true,
    media: 'visual',
  },
  'stroke-dashoffset': {
    syntax: '<percentage> | <length>',
    initial: '0',
    inherited: true,
    media: 'visual',
  },
  'stroke-linecap': {
    syntax: 'butt | round | square',
    initial: 'butt',
    inherited: true,
    media: 'visual',
  },
  'stroke-linejoin': {
    syntax: 'miter | round | bevel',
    initial: 'miter',
    inherited: true,
    media: 'visual',
  },
  'stroke-miterlimit': {
    syntax: '<number>',
    initial: '4',
    inherited: true,
    media: 'visual',
  },
  'stroke-opacity': {
    syntax: '<number>',
    initial: '1',
    inherited: true,
    media: 'visual',
  },
  'stroke-width': {
    syntax: '<percentage> | <length>',
    initial: '1',
    inherited: true,
    media: 'visual',
  },
  'text-anchor': {
    syntax: 'start | middle | end',
    initial: 'start',
    inherited: true,
    media: 'visual',
  },
  'text-decoration': cssProperty('text-decoration'),
  'text-rendering': cssProperty('text-rendering'),
  'unicode-bidi': cssProperty('unicode-bidi'),
  'vector-effect': {
    syntax: 'non-scaling-stroke | none',
    initial: 'none',
    inherited: false,
    media: 'visual',
  },
  visibility: cssProperty('visibility'),
  'word-spacing': cssProperty('word-spacing'),
  'white-space': cssProperty('white-space'),
  'writing-mode': cssProperty('writing-mode'),
};

export const syntaxes: { [name: string]: { syntax: string } } = {
  paint: {
    syntax: 'none | child | child(<integer>) | <color> | <url> [ none | <color> ]? | context-fill | context-stroke',
  },
  dasharray: {
    syntax: '[ <length> | <percentage> | <number> ]#',
  },
};
