// @flow

import * as CSS from 'csstype';

const css: CSS.Properties<*> = {
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: 'row',
  opacity: 1,
  top: '1',
  fontWeight: 'normal',
  width: 1,
  height: '1',
};

const cssWithFallbackValues: CSS.PropertiesFallback<*> = {
  flexGrow: [1],
  flexShrink: [1],
  flexDirection: ['row'],
  opacity: [1],
  top: ['0px'],
  fontWeight: ['normal'],
  width: [1],
  height: ['1'],
};

const cssWithHyphenProperties: CSS.PropertiesHyphen<*> = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-direction': 'row',
  opacity: 1,
  top: '0px',
  'font-weight': 'normal',
  width: 1,
  height: '1',
};

const cssWithBothCamelAndHyphenProperties: CSS.Properties<*> & CSS.PropertiesHyphen<*> = {
  animation: '',
};

const atRuleFontFace: CSS.FontFace = {
  fontFamily: '',
  fontWeight: 'normal',
};
