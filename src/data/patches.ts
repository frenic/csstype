import * as rawProperties from 'mdn-data/css/properties.json';

export interface IExtendedProperty extends Partial<MDN.Property> {
  shorthand?: boolean;
}

if (rawProperties.overflow.syntax !== '[ visible | hidden | clip | scroll | auto ]{1,2}') {
  throw new Error('`overflow` syntax has changed');
}

if (rawProperties['overflow-x'].syntax !== 'visible | hidden | clip | scroll | auto') {
  throw new Error('`overflow-x` syntax has changed');
}

if (rawProperties['overflow-y'].syntax !== 'visible | hidden | clip | scroll | auto') {
  throw new Error('`overflow-y` syntax has changed');
}

export const properties: { [property: string]: IExtendedProperty } = {
  /**
   * https://drafts.csswg.org/css-overflow-3/#line-clamp
   */
  'line-clamp': {
    shorthand: true,
  },
  // Add `overlay`
  overflow: {
    syntax: '[ visible | hidden | clip | scroll | overlay | auto ]{1,2}',
  },
  // Add `overlay`
  'overflow-x': {
    syntax: 'visible | hidden | clip | scroll | overlay | auto',
  },
  // Add `overlay`
  'overflow-y': {
    syntax: 'visible | hidden | clip | scroll | overlay | auto',
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
