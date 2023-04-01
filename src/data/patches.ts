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
