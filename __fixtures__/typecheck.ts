// tslint:disable no-unused-expression

import * as CSS from '..';

const css: CSS.Properties = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '1px',
  flexDirection: 'row',
  MozAppearance: 'button',
  msOverflowStyle: 'scrollbar',
};

const cssWithFallbackValues: CSS.PropertiesFallback = {
  flexGrow: [1],
  flexShrink: [1],
  flexBasis: ['1px'],
  flexDirection: ['row'],
  MozAppearance: ['button'],
  msOverflowStyle: ['scrollbar'],
};

const cssWithHyphenProperties: CSS.PropertiesHyphen = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-basis': '1px',
  'flex-direction': 'row',
  '-moz-appearance': 'button',
  '-ms-overflow-style': 'scrollbar',
};

const unknownProperty: CSS.Properties = {
  unknownProperty: 1,
};

const cssWithDisallowedFallbackValues: CSS.Properties = {
  bottom: ['0px'],
};

css;
cssWithFallbackValues;
cssWithHyphenProperties;
unknownProperty;
cssWithDisallowedFallbackValues;
