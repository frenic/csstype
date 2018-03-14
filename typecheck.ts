// tslint:disable no-unused-expression

import * as CSS from './';

const css: CSS.Properties = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '1px',
  flexDirection: 'row',
  opacity: 1,
  top: '1px',
  fontWeight: 'normal',
  width: 0,
  height: '1px',
  MozAppearance: 'button',
};

const cssWithFallbackValues: CSS.PropertiesFallback = {
  flexGrow: [1],
  flexShrink: [1],
  flexBasis: ['1px'],
  flexDirection: ['row'],
  opacity: [1],
  top: ['1px'],
  fontWeight: ['normal'],
  width: [0],
  height: ['1px'],
  MozAppearance: ['button'],
};

const cssWithHyphenProperties: CSS.PropertiesHyphen = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-basis': '1px',
  'flex-direction': 'row',
  opacity: 1,
  top: '1px',
  'font-weight': 'normal',
  width: 0,
  height: '1px',
  '-moz-appearance': 'button',
};

const cssWithBothCamelAndHyphenProperties: CSS.Properties & CSS.PropertiesHyphen = {
  animation: '',
};

const atRuleFontFace: CSS.FontFace = {
  fontFamily: '',
  fontWeight: 'normal',
};

css;
cssWithFallbackValues;
cssWithHyphenProperties;
cssWithBothCamelAndHyphenProperties;
atRuleFontFace;
