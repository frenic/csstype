import * as syntaxes from 'mdn-data/css/syntaxes.json';
import parse from './parser';
import { standardProperties, vendorPrefixedProperties } from './properties';
import typing, { AliasType, Type, TypeType } from './typer';

interface IDataTypes {
  [key: string]: TypeType[];
}

const availableDataTypes: IDataTypes = {};

for (const name in syntaxes) {
  const { syntax } = syntaxes[name];
  availableDataTypes[name] = typing(parse(syntax));
}

const dataTypesMayBeOfInterest: IDataTypes = {};

function isTypeAlias(type: TypeType): type is AliasType {
  return type.type === Type.Alias;
}

function addDependentTypeAliases(dataTypes: IDataTypes, name: string) {
  if (name in dataTypes) {
    const isDoesntResolveToJustString = !(dataTypes[name].length === 1 && dataTypes[name][0].type === Type.String);
    if (!(name in dataTypesMayBeOfInterest) && isDoesntResolveToJustString) {
      dataTypesMayBeOfInterest[name] = dataTypes[name];
    }
    const typeAliases: AliasType[] = [];
    for (const type of dataTypes[name]) {
      if (isTypeAlias(type)) {
        typeAliases.push(type);
      }
    }
    for (const type of typeAliases) {
      if (type.dataTypeName) {
        addDependentTypeAliases(dataTypes, type.dataTypeName);
      }
    }
  }
}

const allCssPropertyDescriptions = {
  ...standardProperties,
  ...vendorPrefixedProperties,
};

for (const name in allCssPropertyDescriptions) {
  const typeAliases: AliasType[] = [];
  for (const type of allCssPropertyDescriptions[name]) {
    if (isTypeAlias(type)) {
      typeAliases.push(type);
    }
  }
  for (const type of typeAliases) {
    if (type.dataTypeName) {
      addDependentTypeAliases(availableDataTypes, type.dataTypeName);
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
        type => type.type !== Type.Alias || (!!type.dataTypeName && type.dataTypeName in dataTypes),
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
