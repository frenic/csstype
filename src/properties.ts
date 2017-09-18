import * as properties from 'mdn-data/css/properties.json';
import parse, { EntityType } from './parser';
import type, { TypeType } from './typer';

const IGNORES = ['--*'];

const REGEX_VENDOR_PROPERTY = /^-/;

export const vendorPrefixedProperties: { [name: string]: TypeType[] } = {};
export const standardProperties: { [name: string]: TypeType[] } = {};

for (const name in properties) {
  if (IGNORES.includes(name)) {
    continue;
  }

  const types = type(parse(properties[name].syntax));
  if (REGEX_VENDOR_PROPERTY.test(name)) {
    vendorPrefixedProperties[name] = types;
  } else {
    standardProperties[name] = types;
  }
}
