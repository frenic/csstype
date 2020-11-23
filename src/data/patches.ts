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
   * w3c working draft https://www.w3.org/TR/css-contain-2/#content-visibility
   * caniuse https://caniuse.com/css-content-visibility
   */
  'content-visibility': {
    shorthand: false,
    syntax: 'visible | auto | hidden',
    initial: 'visible',
    inherited: false,
    animationType: 'discrete',
    percentages: 'n/a',
    appliesto: 'elements for which layout containment can apply',
    computed: 'as specified',
    status: 'Working Draft',
  },
};

export const syntaxes: { [property: string]: MDN.Syntax } = {
  // Undefined syntax
  'hex-color': {
    syntax: '<string>',
  },
  // Undefined syntax
  'unicode-range': {
    syntax: '<string>',
  },
};
