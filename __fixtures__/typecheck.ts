// tslint:disable no-unused-expression

import * as CSS from '..';

const css: CSS.Properties = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'max-content',
  flexDirection: 'row',
  MozAppearance: 'button',
  msOverflowStyle: 'scrollbar',

  // Test custom string
  width: 'calc(1px)',
  // This property has `TLength` (but not `(string & {})` itself) so
  // if this fails it may have something to do with default generic values
  borderBottomWidth: 'calc(1px)',
};

const cssWithFallbackValues: CSS.PropertiesFallback = {
  flexGrow: [1],
  flexShrink: [1],
  flexBasis: ['max-content'],
  flexDirection: ['row'],
  MozAppearance: ['button'],
  msOverflowStyle: ['scrollbar'],
};

const cssWithHyphenProperties: CSS.PropertiesHyphen = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-basis': 'max-content',
  'flex-direction': 'row',
  '-moz-appearance': 'button',
  '-ms-overflow-style': 'scrollbar',
};

const cssWithDifferentLength: CSS.Properties<{ px: number }> = {
  width: { px: 1 },
};

const unknownProperty: CSS.Properties = {
  unknownProperty: 1,
};

const cssWithDisallowedFallbackValues: CSS.Properties = {
  bottom: ['0px'],
};

// Tests autocomplete hack
const autocompleteHackShouldPass: string & {} = '';
const autocompleteHackShouldFail: string & {} = {};

css;
cssWithFallbackValues;
cssWithHyphenProperties;
cssWithDifferentLength;
unknownProperty;
cssWithDisallowedFallbackValues;
