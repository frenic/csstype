// tslint:disable no-unused-expression

import * as CSS from './';

const css: CSS.Properties = {
  flexGrow: 1,
  flexShrink: 0,
  flexDirection: 'row',
  opacity: 1,
  top: '0px',
  fontWeight: 'normal',
};

const cssWithLengthAsNumber: CSS.Properties<number> = {
  top: 0,
};

const cssWithFallbackValues: CSS.PropertiesFallback = {
  flexGrow: [1],
  flexShrink: [0],
  flexDirection: ['row'],
  opacity: [1],
  top: ['0px'],
  fontWeight: ['normal'],
};

css;
cssWithLengthAsNumber;
cssWithFallbackValues;
