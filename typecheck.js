// @flow

import * as CSS from './';

// Fallback due to https://github.com/frenic/csstype/issues/17
type Exact<T> = T & $Shape<T>;

const css: Exact<CSS.Properties<*>> = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '1px',
  flexDirection: 'row',
  opacity: 1,
  top: '1px',
  fontWeight: 'normal',
  width: 0,
  height: '1px',
};

const cssWithFallbackValues: Exact<CSS.PropertiesFallback<*>> = {
  flexGrow: [1],
  flexShrink: [1],
  flexBasis: ['1px'],
  flexDirection: ['row'],
  opacity: [1],
  top: ['1px'],
  fontWeight: ['normal'],
  width: [0],
  height: ['1px'],
};

const cssWithHyphenProperties: Exact<CSS.PropertiesHyphen<*>> = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-basis': '1px',
  'flex-direction': 'row',
  opacity: 1,
  top: '1px',
  'font-weight': 'normal',
  width: 0,
  height: '1px',
};

const cssWithBothCamelAndHyphenProperties: $Exact<CSS.Properties<*>> & $Exact<CSS.PropertiesHyphen<*>> = {
  animation: '',
};

const atRuleFontFace: $Exact<CSS.FontFace> = {
  fontFamily: '',
  fontWeight: 'normal',
};
