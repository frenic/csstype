// @flow strict
import * as CSS from '../index.js.flow';

const css: CSS.Properties<*> = {
  flexGrow: 'invalid',
  unknownProperty: 'here',
};

const cssWithFallbackValues: CSS.PropertiesFallback<*> = {
  flexGrow: [true],
  flexDirection: ['123'],
  colour: 'typo',
};
