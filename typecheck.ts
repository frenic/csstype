// tslint:disable no-unused-expression

import * as CSS from './';

const css: CSS.Properties = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 1,
  flexDirection: 'row',
  opacity: 1,
  top: '0px',
  fontWeight: 'normal',
  width: 1,
  height: '1px',
};

const cssWithFallbackValues: CSS.PropertiesFallback = {
  flexGrow: [1],
  flexShrink: [1],
  flexBasis: [1],
  flexDirection: ['row'],
  opacity: [1],
  top: ['0px'],
  fontWeight: ['normal'],
  width: [1],
  height: ['1px'],
};

const cssWithHyphenProperties: CSS.PropertiesHyphen = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-basis': 0,
  'flex-direction': 'row',
  opacity: 1,
  top: '0px',
  'font-weight': 'normal',
  width: 1,
  height: '1px',
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
