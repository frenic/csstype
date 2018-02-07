import * as properties from 'mdn-data/css/properties.json';
import parse from './parser';
import typing, { TypeType } from './typer';

const IGNORES = ['--*', 'all'];

const REGEX_VENDOR_PROPERTY = /^-/;

export const all = typing(parse(properties.all.syntax));
export const vendorPrefixedProperties: { [name: string]: TypeType[] } = {};
export const standardProperties: { [name: string]: TypeType[] } = {};

for (const name in properties) {
  if (IGNORES.includes(name)) {
    continue;
  }

  const types = typing(parse(properties[name].syntax));
  if (REGEX_VENDOR_PROPERTY.test(name)) {
    vendorPrefixedProperties[name] = types;
  } else {
    standardProperties[name] = types;
  }
}
