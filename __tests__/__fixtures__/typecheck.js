// @flow strict
import * as CSS from '../../index.js.flow';

const css: CSS.Properties<> = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'max-content',
  flexDirection: 'row',
  MozAppearance: 'button',
  msOverflowStyle: 'scrollbar',

  // Test custom string
  borderBottomWidth: 'calc(1px)',
  // This property has `TLength` (but not `string` itself) so
  // if this fails it may have something to do with default generic values
  lineHeightStep: '2em',
};

const cssWithFallbackValues: CSS.PropertiesFallback<> = {
  flexGrow: [1],
  flexShrink: [1],
  flexBasis: ['max-content'],
  flexDirection: ['row'],
  MozAppearance: ['button'],
  msOverflowStyle: ['scrollbar'],
};

const cssWithHyphenProperties: CSS.PropertiesHyphen<> = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-basis': 'max-content',
  'flex-direction': 'row',
  '-moz-appearance': 'button',
  '-ms-overflow-style': 'scrollbar',
};

const cssWithDifferentLength: CSS.Properties<number> = {
  width: 1,
};

const unknownProperty: CSS.Properties<> = {
  unknownProperty: 1,
};

// Should fail but doesn't
const cssWithDisallowedValue: CSS.Properties<> = {
  order: '0',
};

// Should fail but doesn't
const cssWithDisallowedFallbackValues: CSS.Properties<> = {
  bottom: [0],
  order: [0],
};
