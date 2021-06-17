import * as CSS from '../..';

// Old CSSType import needs to be AFTER the current one
import * as OldCSS from 'csstype';

const css: CSS.Properties = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'max-content',
  flexDirection: 'row',
  MozAppearance: 'button',
  msOverflowStyle: 'scrollbar',
  color: '#abcdef',

  // Test custom string
  width: 'calc(1px)',
  // This property has `TLength` (but not `(string & {})` itself) so
  // if this fails it may have something to do with default generic values
  lineHeightStep: '2em',
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
  bottom: [0],
  order: [0],
};

// Tests autocomplete hack
const autocompleteHackShouldPass: string & {} = '';
const autocompleteHackShouldFail: string & {} = {};

function autocompleteHackTypeGuardProblem(value: CSS.Property.Width) {
  if (value === 'auto') {
    // If this passes it could mean that `CSS.PropertyValue` isn't needed anymore
    const wouldBeNiceIfThisPassed: 'auto' = value;
    wouldBeNiceIfThisPassed;
  }
}

const propertyValueShouldPass1: CSS.PropertyValue<CSS.Property.Width> = 'auto';
const propertyValueShouldPass2: CSS.PropertyValue<CSS.Property.Width> = 0;
const propertyValueShouldFail: CSS.PropertyValue<CSS.Property.Width> = 1;

function propertyValue(value: CSS.PropertyValue<CSS.Property.Width | [CSS.Property.Width]>) {
  if (value === 'auto') {
    const shouldPass: 'auto' = value;
    shouldPass;
  }
  if (typeof value === 'number') {
    const shouldPass: 0 = value;
    shouldPass;
  }
  {
    const shouldFail = value === 1;
    shouldFail;
  }
  if (Array.isArray(value)) {
    const arrayValue = value[0];
    if (arrayValue === 'auto') {
      const shouldPass: 'auto' = arrayValue;
      shouldPass;
    }
    if (typeof arrayValue === 'number') {
      const shouldPass: 0 = arrayValue;
      shouldPass;
    }
    {
      const shouldFail = arrayValue === 1;
      shouldFail;
    }
  }
}

propertyValue('auto'); // Should pass
propertyValue(['auto']); // Should pass
propertyValue(0); // Should pass
propertyValue([0]); // Should pass
propertyValue(1); // Should fail
propertyValue([1]); // Should fail

function propertyValueWithAutocompleteHack(arg: CSS.Property.Width | [CSS.Property.Width]) {
  const value = arg as CSS.PropertyValue<typeof arg>;
  if (value === 'auto') {
    const shouldPass: 'auto' = value;
    shouldPass;
  }
  if (typeof value === 'number') {
    const shouldPass: 0 = value;
    shouldPass;
  }
  {
    const shouldFail = value === 1;
    shouldFail;
  }
  if (Array.isArray(value)) {
    const arrayValue = value[0];
    if (arrayValue === 'auto') {
      const shouldPass: 'auto' = arrayValue;
      shouldPass;
    }
    if (typeof arrayValue === 'number') {
      const shouldPass: 0 = arrayValue;
      shouldPass;
    }
    {
      const shouldFail = arrayValue === 1;
      shouldFail;
    }
  }
}

propertyValueWithAutocompleteHack('auto'); // Should pass
propertyValueWithAutocompleteHack(['auto']); // Should pass
propertyValueWithAutocompleteHack(0); // Should pass
propertyValueWithAutocompleteHack([0]); // Should pass
propertyValueWithAutocompleteHack(1); // Should fail
propertyValueWithAutocompleteHack([1]); // Should fail

const differentMajorVersions: CSS.Properties = {} as OldCSS.Properties;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type DataTypeShouldNotBeExposed = CSS.DataType.Color;

css;
cssWithFallbackValues;
cssWithHyphenProperties;
cssWithDifferentLength;
unknownProperty;
cssWithDisallowedFallbackValues;
autocompleteHackShouldPass;
autocompleteHackShouldFail;
autocompleteHackTypeGuardProblem;
propertyValueShouldPass1;
propertyValueShouldPass2;
propertyValueShouldFail;
differentMajorVersions;
