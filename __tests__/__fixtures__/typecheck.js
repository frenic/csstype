// @flow strict
import * as CSS from '../../index.js.flow';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const css: CSS.Properties<> = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'max-content',
  flexDirection: 'row',
  MozAppearance: 'button',
  msOverflowStyle: 'scrollbar',
  color: '#abcdef',

  // Test custom string
  borderBottomWidth: 'calc(1px)',
  // This property has `TLength` (but not `string` itself) so
  // if this fails it may have something to do with default generic values
  lineHeightStep: '2em',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cssWithFallbackValues: CSS.PropertiesFallback<> = {
  flexGrow: [1],
  flexShrink: [1],
  flexBasis: ['max-content'],
  flexDirection: ['row'],
  MozAppearance: ['button'],
  msOverflowStyle: ['scrollbar'],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cssWithHyphenProperties: CSS.PropertiesHyphen<> = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-basis': 'max-content',
  'flex-direction': 'row',
  '-moz-appearance': 'button',
  '-ms-overflow-style': 'scrollbar',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cssWithDifferentLength: CSS.Properties<number> = {
  width: 1,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unknownProperty: CSS.Properties<> = {
  unknownProperty: 1,
};

// Should fail but doesn't
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cssWithDisallowedValue: CSS.Properties<> = {
  order: '0',
};

// Should fail but doesn't
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cssWithDisallowedFallbackValues: CSS.Properties<> = {
  bottom: [0],
  order: [0],
};
