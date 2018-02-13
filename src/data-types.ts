import * as syntaxes from 'mdn-data/css/syntaxes.json';
import { atRuleDescriptors, IAtRuleDescriptors } from './at-rules';
import parse from './parser';
import {
  standardLonghandProperties,
  standardShorthandProperties,
  vendorPrefixedLonghandProperties,
  vendorPrefixedShorthandProperties,
} from './properties';
import typing, { IDataType, Type, TypeType } from './typer';

interface IDataTypes {
  [key: string]: TypeType[];
}

const availableDataTypes: IDataTypes = {};

for (const name in syntaxes) {
  const { syntax } = syntaxes[name];
  availableDataTypes[name] = typing(parse(syntax));
}

const dataTypesMayBeOfInterest: IDataTypes = {};

function isTypeAlias(type: TypeType): type is IDataType {
  return type.type === Type.DataType;
}

function addDependentTypeAliases(dataTypes: IDataTypes, name: string) {
  if (name in dataTypes) {
    const isDoesntResolveToJustString = !(dataTypes[name].length === 1 && dataTypes[name][0].type === Type.String);
    if (!(name in dataTypesMayBeOfInterest) && isDoesntResolveToJustString) {
      dataTypesMayBeOfInterest[name] = dataTypes[name];
    }
    const typeAliases: IDataType[] = [];
    for (const type of dataTypes[name]) {
      if (isTypeAlias(type)) {
        typeAliases.push(type);
      }
    }
    for (const type of typeAliases) {
      if (type.name) {
        addDependentTypeAliases(dataTypes, type.name);
      }
    }
  }
}

const atRuleProperties: IAtRuleDescriptors = {};

for (const name in atRuleDescriptors) {
  for (const property in atRuleDescriptors[name]) {
    atRuleProperties[property] = atRuleDescriptors[name][property];
  }
}

for (const descriptors of [
  standardLonghandProperties,
  standardShorthandProperties,
  vendorPrefixedLonghandProperties,
  vendorPrefixedShorthandProperties,
  atRuleProperties,
]) {
  for (const name in descriptors) {
    const typeAliases: IDataType[] = [];
    for (const type of descriptors[name]) {
      if (isTypeAlias(type)) {
        typeAliases.push(type);
      }
    }
    for (const type of typeAliases) {
      if (type.name) {
        addDependentTypeAliases(availableDataTypes, type.name);
      }
    }
  }
}

function filterInterestingDataTypes(dataTypes: IDataTypes): IDataTypes {
  const interesting: IDataTypes = {};
  let happy = true;
  for (const name in dataTypes) {
    const onlyContainsString = dataTypes[name].length === 1 && dataTypes[name][0].type === Type.String;

    if (onlyContainsString) {
      happy = false;
    } else {
      // Exclude type aliases that's not of interest
      const dataTypeWithInterestingDependencies = dataTypes[name].filter(
        type => type.type !== Type.DataType || (!!type.name && type.name in dataTypes),
      );

      // Those excluded type aliases need to resolve to string
      if (dataTypeWithInterestingDependencies.length < dataTypes[name].length) {
        happy = false;
        if (dataTypeWithInterestingDependencies.every(type => type.type !== Type.String)) {
          dataTypeWithInterestingDependencies.push({ type: Type.String });
        }
      }

      interesting[name] = dataTypeWithInterestingDependencies;
    }
  }
  return happy ? interesting : filterInterestingDataTypes(interesting);
}

const interestingDataTypes = filterInterestingDataTypes(dataTypesMayBeOfInterest);

export default interestingDataTypes;
