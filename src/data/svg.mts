// This is originated from https://svgwg.org/svg2-draft/propidx.html to add SVG specific properties
// and is a temporarily solution until https://github.com/mdn/data/issues/59 is solved

import { PropertyFeature } from '@webref/css';
import { properties as htmlProperties } from './css.mjs';

function getHtmlProperty(name: string) {
  const property = htmlProperties.find(property => property.name === name);

  if (!property) {
    throw new Error('Property for SVg is missing');
  }

  return property;
}

export const properties: { [property: string]: Pick<PropertyFeature, 'syntax' | 'initial' | 'inherited' | 'media'> } = {
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
  clip: getHtmlProperty('clip'),
  'clip-path': getHtmlProperty('clip-path'),
  'clip-rule': {
    syntax: 'nonzero | evenodd',
    initial: 'nonzero',
    inherited: true,
    media: 'visual',
  },
  color: getHtmlProperty('color'),
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
  cursor: getHtmlProperty('cursor'),
  direction: getHtmlProperty('direction'),
  display: getHtmlProperty('display'),
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
  filter: getHtmlProperty('filter'),
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
  font: getHtmlProperty('font'),
  'font-family': getHtmlProperty('font-family'),
  'font-size': getHtmlProperty('font-size'),
  'font-size-adjust': getHtmlProperty('font-size-adjust'),
  'font-stretch': getHtmlProperty('font-stretch'),
  'font-style': getHtmlProperty('font-style'),
  'font-variant': getHtmlProperty('font-variant'),
  'font-weight': getHtmlProperty('font-weight'),
  'glyph-orientation-vertical': {
    syntax: 'auto | <angle> | <number>',
    initial: 'auto',
    inherited: true,
    media: 'visual',
  },
  'image-rendering': getHtmlProperty('image-rendering'),
  'letter-spacing': getHtmlProperty('letter-spacing'),
  'lighting-color': {
    syntax: 'currentColor | <color>',
    initial: 'white',
    inherited: false,
    media: 'visual',
  },
  'line-height': getHtmlProperty('line-height'),
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
  mask: getHtmlProperty('mask'),
  opacity: getHtmlProperty('opacity'),
  overflow: getHtmlProperty('overflow'),
  'paint-order': getHtmlProperty('paint-order'),
  'pointer-events': getHtmlProperty('pointer-events'),
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
  'text-decoration': getHtmlProperty('text-decoration'),
  'text-rendering': getHtmlProperty('text-rendering'),
  'unicode-bidi': getHtmlProperty('unicode-bidi'),
  'vector-effect': {
    syntax: 'non-scaling-stroke | none',
    initial: 'none',
    inherited: false,
    media: 'visual',
  },
  visibility: getHtmlProperty('visibility'),
  'word-spacing': getHtmlProperty('word-spacing'),
  'white-space': getHtmlProperty('white-space'),
  'writing-mode': getHtmlProperty('writing-mode'),
};

export const syntaxes: MDN.Syntaxes = {
  paint: {
    syntax: 'none | child | child(<integer>) | <color> | <url> [ none | <color> ]? | context-fill | context-stroke',
  },
  dasharray: {
    syntax: '[ <length> | <percentage> | <number> ]#',
  },
};
