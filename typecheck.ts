import * as CSS from './';

const css: CSS.Properties = {
  flexGrow: 1,
  flexShrink: 0,
  flexDirection: 'row',
  opacity: 1,
  top: '0px',
  fontWeight: 'normal',
};

const lengthNumber: CSS.Properties<number> = {
  top: 0,
};

const fallbackValues: CSS.PropertiesFallback = {
  flexGrow: [1],
  flexShrink: [0],
  flexDirection: ['row'],
  opacity: [1],
  top: ['0px'],
  fontWeight: ['normal'],
};
