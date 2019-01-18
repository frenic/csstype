export interface IExtendedProperty extends Partial<MDN.Property> {
  shorthand?: boolean;
}

export const properties: { [property: string]: IExtendedProperty } = {
  /**
   * https://drafts.csswg.org/css-overflow-3/#max-lines
   * Should be added to `mdn-browser-compat-data` when https://github.com/mdn/data/pull/207 is merged
   */
  '-webkit-line-clamp': {
    syntax: 'none | <integer>',
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-overflow-3/#line-clamp
   */
  'line-clamp': {
    shorthand: true,
  },
  /**
   * Waiting for https://github.com/mdn/data/pull/313 to be merged
   */
  'line-height-step': {
    syntax: '<length>',
    media: 'visual',
    inherited: true,
    animationType: 'discrete',
    percentages: 'no',
    groups: ['CSS Fonts'],
    initial: '0',
    appliesto: 'blockContainers',
    computed: 'absoluteLength',
    order: 'perGrammar',
    status: 'experimental',
    mdn_url: 'https://developer.mozilla.org/docs/Web/CSS/line-height-step',
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
