export interface IExtendedProperty extends Partial<WebRef.PropertyFeature> {
  shorthand?: boolean;
}

/**
 * HTML attributes that BCD only exposes under per-type sub-identifiers
 * (e.g. `input.type_text.list`), which the attribute collection walk does
 * not reach. They are still valid attribute selectors.
 *
 * https://html.spec.whatwg.org/multipage/input.html#attr-input-list
 */
export const htmlAttributes: string[] = ['list'];

export const properties: { [property: string]: IExtendedProperty } = {
  /**
   * https://drafts.csswg.org/css-overflow-3/#line-clamp
   */
  'line-clamp': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-block-color
   */
  'border-block-color': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-inline-color
   */
  'border-inline-color': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-block-width
   */
  'border-block-style': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-inline-width
   */
  'border-inline-style': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-block-width
   */
  'border-block-width': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-inline-width
   */
  'border-inline-width': {
    shorthand: true,
  },
  /**
   * Webref gap: `anchor-center` comes from CSS Anchor Positioning, which webref
   * only merges into `align-self`/`justify-self`. BCD: Chrome 125, Firefox 147, Safari 26.
   * https://drafts.csswg.org/css-anchor-position-1/#anchor-center
   */
  'align-items': {
    syntax: 'normal | stretch | <baseline-position> | <overflow-position>? <self-position> | anchor-center',
  },
  'justify-items': {
    syntax:
      'normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ] | anchor-center',
  },
  /**
   * Webref gap: `match-element` (CSS View Transitions 2). BCD: Chrome 137, Firefox 144, Safari 18.4.
   * https://drafts.csswg.org/css-view-transitions-2/#view-transition-name-prop
   */
  'view-transition-name': {
    syntax: 'none | match-element | <custom-ident>',
  },
  /**
   * Webref gap: SVG 1.1 keywords browsers still ship. BCD: Chrome 1, Safari 5.1.
   * https://www.w3.org/TR/SVG11/text.html#AlignmentBaselineProperty
   */
  'alignment-baseline': {
    syntax: 'baseline | <baseline-metric> | text-before-edge | text-after-edge',
  },
  /**
   * Webref gap: SVG 1.1 `baseline` keyword. BCD: Chrome 1, Safari 4.
   * https://www.w3.org/TR/SVG11/text.html#BaselineShiftProperty
   */
  'baseline-shift': {
    syntax: '<length-percentage> | sub | super | top | center | bottom | baseline',
  },
  /**
   * Webref gap: `plus-darker` (Compositing 2). BCD: Safari 9.
   * https://drafts.fxtf.org/compositing-2/#valdef-blend-mode-plus-darker
   */
  'mix-blend-mode': {
    syntax: '<blend-mode> | plus-darker | plus-lighter',
  },
  /**
   * Webref has `<'mix-blend-mode'>#`. Keep it without the `plus-darker` patch above:
   * BCD has no `background-blend-mode.plus-darker`.
   */
  'background-blend-mode': {
    syntax: '[ <blend-mode> | plus-lighter ]#',
  },
  /**
   * Webref gap: `none` (CSS Ruby 1). BCD: Chrome 151, Safari 18.2.
   * https://drafts.csswg.org/css-ruby-1/#propdef-ruby-overhang
   */
  'ruby-overhang': {
    syntax: 'auto | none | spaces',
  },
  /**
   * Webref gap: the old `anchors-*` names browsers shipped before the rename.
   * BCD: `anchors-visible` Chrome 125, Firefox 147, Safari 26.2.
   * https://drafts.csswg.org/css-anchor-position-1/#propdef-position-visibility
   */
  'position-visibility': {
    syntax: 'always | [ anchor-valid || anchor-visible || no-overflow ] | anchors-valid | anchors-visible',
  },
  /**
   * Webref gap: `auto` (CSS Text Decoration 4). BCD: Firefox 132.
   * https://drafts.csswg.org/css-text-decor-4/#text-emphasis-position-property
   */
  'text-emphasis-position': {
    syntax: 'auto | [ over | under ] && [ right | left ]?',
  },
  /**
   * Webref gap: `normal` (CSS Text 4). BCD: Chrome 123.
   * https://drafts.csswg.org/css-text-4/#text-spacing-trim-property
   */
  'text-spacing-trim': {
    syntax: '<spacing-trim> | auto | normal',
  },
  /**
   * Legacy `-webkit-mask-clip` keywords. BCD `mask-clip.border` etc.: Chrome 1, Safari 4,
   * "Only works when using `-webkit-mask-clip`".
   */
  '-webkit-mask-clip': {
    syntax: '[ <coord-box> | no-clip | border | content | padding | text ]#',
  },
  /**
   * Legacy `-webkit-mask-origin` keywords. BCD `mask-origin.border` etc.: `-webkit-` prefix, Chrome 1.
   */
  '-webkit-mask-origin': {
    syntax: '[ <coord-box> | border | content | padding ]#',
  },
};

export const syntaxes: { [name: string]: { syntax: string } } = {
  // Missing syntax
  'hex-color': {
    syntax: '<string>',
  },
  // Missing syntax
  'reversed-counter-name': {
    syntax: '<string>',
  },
  // Missing syntax
  'dashed-ident': {
    syntax: '<string>',
  },
  // Missing syntax
  'unicode-range-token': {
    syntax: '<string>',
  },
  // Missing syntax
  'declaration-value': {
    syntax: '<string>',
  },
  // Missing syntax
  autospace: {
    syntax: 'no-autospace | [ ideograph-alpha || ideograph-numeric || punctuation ] || [ insert | replace ]',
  },
  // Webref gap: webref has the Fill and Stroke 3 draft (`none | <image> | <svg-paint>`),
  // which no browser ships. Browsers ship SVG 2 paint, with `<color>`; BCD has
  // `context-fill`/`context-stroke` under `svg.elements.*.fill`.
  // https://svgwg.org/svg2-draft/painting.html#SpecifyingPaint
  paint: {
    syntax: 'none | <image> | <svg-paint> | <color> | <url> [ none | <color> ]? | context-fill | context-stroke',
  },
  // Faulty syntax
  'content-list': {
    syntax: '[ <string> | <image> | <attr()> | <quote> | <counter> ]+',
  },
};
