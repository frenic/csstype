// Local data for things `@webref/css` does not have, copied from mdn-data 2.37.2
// (CC0, https://github.com/mdn/data). Kept apart from `patches.ts`, which is for
// data that is wrong or missing in webref but ships in browsers.

/**
 * Syntaxes webref lacks for types the typer reaches: without them those
 * properties would lose their values and become `string`.
 */
export const syntaxes: { [name: string]: { syntax: string } } = {
  'timeline-range-name': {
    syntax: 'cover | contain | entry | exit | entry-crossing | exit-crossing',
  },
  'animation-action': {
    syntax: 'none | play | play-once | play-forwards | play-backwards | pause | reset | replay',
  },
};

/**
 * `mdn_url` values mdn-data had but BCD does not, so these properties keep
 * their cached MDN summary in `urls.json`. Keyed by property name. Three more
 * mdn-data URLs (`scroll-axis-lock`, `window-drag`, `-webkit-line-clamp`) are
 * left out: MDN returns 404 for them, so they could never be summarized.
 */
export const mdnUrls: { [property: string]: string } = {
  '-moz-appearance': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance',
  '-moz-user-focus': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-moz-user-focus',
  '-moz-user-modify': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-modify',
  '-webkit-appearance': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance',
  '-webkit-mask': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask',
  '-webkit-mask-clip': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip',
  '-webkit-mask-image': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image',
  '-webkit-mask-origin': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin',
  '-webkit-mask-position': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position',
  '-webkit-mask-repeat': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat',
  '-webkit-mask-repeat-x': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-x',
  '-webkit-mask-repeat-y': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/-webkit-mask-repeat-y',
  '-webkit-mask-size': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size',
  '-webkit-user-select': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select',
  'grid-column-gap': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap',
  'grid-gap': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap',
  'grid-row-gap': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap',
  'image-resolution': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution',
  'line-height-step': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step',
  'mask-border-mode': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode',
  'masonry-auto-flow': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow',
  'word-wrap': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap',
};
