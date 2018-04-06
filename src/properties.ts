import * as properties from 'mdn-data/css/properties.json';
import { properties as svgData } from './data/svg';
import parse from './parser';
import typing, { Type, TypeType } from './typer';

const IGNORES = ['--*', 'all'];

const REGEX_VENDOR_PROPERTY = /^-/;

export const globals: TypeType[] = [
  {
    type: Type.StringLiteral,
    literal: 'initial',
  },
  {
    type: Type.StringLiteral,
    literal: 'inherit',
  },
  {
    type: Type.StringLiteral,
    literal: 'unset',
  },
  {
    type: Type.StringLiteral,
    literal: 'revert',
  },
];
export const standardLonghandProperties: { [name: string]: TypeType[] } = {};
export const standardShorthandProperties: { [name: string]: TypeType[] } = {};
export const vendorPrefixedLonghandProperties: { [name: string]: TypeType[] } = {};
export const vendorPrefixedShorthandProperties: { [name: string]: TypeType[] } = {};
export const svgProperties: { [name: string]: TypeType[] } = {};

for (const name in properties) {
  if (IGNORES.includes(name)) {
    continue;
  }

  const types = typing(parse(properties[name].syntax));
  if (REGEX_VENDOR_PROPERTY.test(name)) {
    if (Array.isArray(properties[name].computed)) {
      vendorPrefixedShorthandProperties[name] = types;
    } else {
      vendorPrefixedLonghandProperties[name] = types;
    }
  } else {
    if (Array.isArray(properties[name].computed)) {
      standardShorthandProperties[name] = types;
    } else {
      standardLonghandProperties[name] = types;
    }
  }
}

for (const name in svgData) {
  const syntax = svgData[name].syntax;
  if (syntax) {
    svgProperties[name] = typing(parse(syntax));
  }
}
