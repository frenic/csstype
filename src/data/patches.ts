export interface IExtendedProperty extends Partial<MDN.Property> {
  shorthand?: boolean;
}

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
};

export const syntaxes: { [property: string]: MDN.Syntax } = {
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
  // Faulty syntax
  'content-list': {
    syntax: '[ <string> | <image> | <attr()> | <quote> | <counter> ]+',
  },
};
