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
  'dashed-ident': {
    syntax: '<string>',
  },
  // Undefined syntax
  'unicode-range-token': {
    syntax: '<string>',
  },
  // Undefined syntax
  'declaration-value': {
    syntax: '<string>',
  },
  // Undefined syntax
  autospace: {
    syntax: 'no-autospace | [ ideograph-alpha || ideograph-numeric || punctuation ] || [ insert | replace ]',
  },
  // Faulty syntax
  'content-list': {
    syntax: '[ <string> | <image> | <attr()> | <quote> | <counter> ]+',
  },
};
