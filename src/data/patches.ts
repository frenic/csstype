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
  // Undefined syntax
  'hex-color': {
    syntax: '<string>',
  },
  // Undefined syntax
  'reversed-counter-name': {
    syntax: '<string>',
  },
  // Undefined syntax
  'palette-identifier': {
    syntax: '<string>',
  },
  // Undefined syntax
  'single-animation-composition': {
    syntax: 'replace | add | accumulate',
  },
  // Undefined syntax
  'unicode-range': {
    syntax: '<string>',
  },
};
