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
  // Referenced by the legacy `@font-face` descriptor `font-stretch` below
  'font-stretch-absolute': {
    syntax:
      'normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded | <percentage>',
  },
};

/**
 * Properties webref lacks entirely, but BCD keeps because some browser added
 * them. Syntaxes copied from mdn-data 2.37.2. The deprecated `box-*`/`ime-mode`
 * family lands in the `Obsolete*` types via BCD's `deprecated` status.
 * `-webkit-box-*` are webref vendor aliases without a syntax; they get the
 * syntax of their standard `box-*` property (BCD has `-webkit-` prefix
 * support on `box-*`, Chrome 1 / Firefox 49).
 */
export const properties: { [property: string]: { syntax: string } } = {
  '-moz-appearance': {
    syntax:
      'none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized',
  },
  '-moz-float-edge': {
    syntax: 'border-box | content-box | margin-box | padding-box',
  },
  '-moz-force-broken-image-icon': {
    syntax: '0 | 1',
  },
  '-moz-orient': {
    syntax: 'inline | block | horizontal | vertical',
  },
  '-moz-user-input': {
    syntax: 'auto | none | enabled | disabled',
  },
  '-moz-user-modify': {
    syntax: 'read-only | read-write | write-only',
  },
  '-ms-grid-columns': {
    syntax: 'none | <track-list> | <auto-track-list>',
  },
  '-ms-grid-rows': {
    syntax: 'none | <track-list> | <auto-track-list>',
  },
  '-ms-high-contrast-adjust': {
    syntax: 'auto | none',
  },
  '-ms-scroll-snap-type': {
    syntax: 'none | proximity | mandatory',
  },
  '-ms-user-select': {
    syntax: 'none | element | text',
  },
  '-webkit-border-before': {
    syntax: "<'border-top'>",
  },
  '-webkit-box-align': {
    syntax: 'start | center | end | baseline | stretch',
  },
  '-webkit-box-flex': {
    syntax: '<number>',
  },
  '-webkit-box-ordinal-group': {
    syntax: '<integer>',
  },
  '-webkit-box-orient': {
    syntax: 'horizontal | vertical | inline-axis | block-axis | inherit',
  },
  '-webkit-box-pack': {
    syntax: 'start | center | end | justify',
  },
  '-webkit-box-reflect': {
    syntax: '[ above | below | right | left ]? <length>? <image>?',
  },
  '-webkit-mask-position-x': {
    syntax: '[ <length-percentage> | left | center | right ]#',
  },
  '-webkit-mask-position-y': {
    syntax: '[ <length-percentage> | top | center | bottom ]#',
  },
  '-webkit-tap-highlight-color': {
    syntax: '<color>',
  },
  '-webkit-touch-callout': {
    syntax: 'default | none',
  },
  '-webkit-user-modify': {
    syntax: 'read-only | read-write | read-write-plaintext-only',
  },
  'box-align': {
    syntax: 'start | center | end | baseline | stretch',
  },
  'box-direction': {
    syntax: 'normal | reverse | inherit',
  },
  'box-flex': {
    syntax: '<number>',
  },
  'box-flex-group': {
    syntax: '<integer>',
  },
  'box-lines': {
    syntax: 'single | multiple',
  },
  'box-ordinal-group': {
    syntax: '<integer>',
  },
  'box-orient': {
    syntax: 'horizontal | vertical | inline-axis | block-axis | inherit',
  },
  'box-pack': {
    syntax: 'start | center | end | justify',
  },
  'font-smooth': {
    syntax: 'auto | never | always | <absolute-size> | <length>',
  },
  'ime-mode': {
    syntax: 'auto | normal | active | inactive | disabled',
  },
};

/**
 * At-rules and descriptors webref lacks but BCD keeps: `@document` (deprecated
 * in BCD, still shipped by Firefox) and the `@font-face` descriptor
 * `font-stretch` (webref renamed it `font-width`; BCD has both).
 */
export const atrules: { [name: string]: WebRef.AtRuleFeature } = {
  '@document': {
    name: '@document',
  },
  '@font-face': {
    name: '@font-face',
    descriptors: [{ name: 'font-stretch', syntax: '<font-stretch-absolute>{1,2}' }],
  },
};

/**
 * Vendor pseudo-elements webref lacks but BCD keeps (each has its own BCD
 * entry and is added by some browser).
 */
export const selectors: { [selector: string]: { syntax: string } } = {
  '::-moz-progress-bar': { syntax: '::-moz-progress-bar' },
  '::-moz-range-progress': { syntax: '::-moz-range-progress' },
  '::-moz-range-thumb': { syntax: '::-moz-range-thumb' },
  '::-moz-range-track': { syntax: '::-moz-range-track' },
  '::-webkit-progress-bar': { syntax: '::-webkit-progress-bar' },
  '::-webkit-progress-value': { syntax: '::-webkit-progress-value' },
  '::-webkit-slider-runnable-track': { syntax: '::-webkit-slider-runnable-track' },
  '::-webkit-slider-thumb': { syntax: '::-webkit-slider-thumb' },
};

/**
 * `mdn_url` values mdn-data had but BCD does not, so these properties keep
 * their cached MDN summary in `urls.json`. Keyed by property name. Three more
 * mdn-data URLs (`scroll-axis-lock`, `window-drag`, `-webkit-line-clamp`) are
 * left out: MDN returns 404 for them, so they could never be summarized.
 * `-moz-user-focus`, `-webkit-mask-repeat-x/-y` and `masonry-auto-flow` are
 * also left out: BCD has no entry for those properties, so they are dropped.
 */
export const mdnUrls: { [property: string]: string } = {
  '-moz-appearance': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance',
  '-moz-user-modify': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-modify',
  '-webkit-appearance': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance',
  '-webkit-mask': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask',
  '-webkit-mask-clip': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip',
  '-webkit-mask-image': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image',
  '-webkit-mask-origin': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin',
  '-webkit-mask-position': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position',
  '-webkit-mask-repeat': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat',
  '-webkit-mask-size': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size',
  '-webkit-user-select': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select',
  'grid-column-gap': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap',
  'grid-gap': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap',
  'grid-row-gap': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap',
  'image-resolution': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution',
  'line-height-step': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step',
  'mask-border-mode': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode',
  'word-wrap': 'https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap',
};
