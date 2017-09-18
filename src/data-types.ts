import * as syntaxes from 'mdn-data/css/syntaxes.json';
import parse from './parser';
import type, { knownBasicDataTypes, Type, TypeType, TypeAliasType } from './typer';
import { standardProperties, vendorPrefixedProperties } from './properties';

type DataTypesType = { [key: string]: TypeType[] };

const availableDataTypes: DataTypesType = {};

for (const name in syntaxes) {
  const { syntax } = syntaxes[name];
  availableDataTypes[name] = type(parse(syntax));
}

const dataTypesMayBeOfInterest: DataTypesType = {};

function isTypeAlias(type: TypeType): type is TypeAliasType {
  return type.type === Type.TypeAlias;
}

function addDependentTypeAliases(availableDataTypes: DataTypesType, name: string) {
  if (name in availableDataTypes) {
    const isDoesntResolveToJustString = !(
      availableDataTypes[name].length === 1 && availableDataTypes[name][0].type === Type.String
    );
    if (!(name in dataTypesMayBeOfInterest) && isDoesntResolveToJustString) {
      dataTypesMayBeOfInterest[name] = availableDataTypes[name];
    }
    const typeAliases: TypeAliasType[] = [];
    for (const type of availableDataTypes[name]) {
      if (isTypeAlias(type)) {
        typeAliases.push(type);
      }
    }
    for (const type of typeAliases) {
      addDependentTypeAliases(availableDataTypes, type.alias);
    }
  }
}

const allCssPropertyDesciptions = {
  ...standardProperties,
  ...vendorPrefixedProperties,
};

for (const name in allCssPropertyDesciptions) {
  const typeAliases: TypeAliasType[] = [];
  for (const type of allCssPropertyDesciptions[name]) {
    if (isTypeAlias(type)) {
      typeAliases.push(type);
    }
  }
  for (const type of typeAliases) {
    addDependentTypeAliases(availableDataTypes, type.alias);
  }
}

function filterInterestingDataTypes(dataTypesMayBeOfInterest: DataTypesType): DataTypesType {
  const interestingDataTypes: DataTypesType = {};
  let happy = true;
  for (const name in dataTypesMayBeOfInterest) {
    const onlyContainsString =
      dataTypesMayBeOfInterest[name].length === 1 && dataTypesMayBeOfInterest[name][0].type === Type.String;

    const hasUninterestingDependecies = !dataTypesMayBeOfInterest[name].every(
      dataType => dataType.type !== Type.TypeAlias || dataType.alias in dataTypesMayBeOfInterest,
    );
    if (onlyContainsString) {
      happy = false;
    } else {
      // Exclude type aliases that's not of interest
      const dataTypeWithInterestingDependencies = dataTypesMayBeOfInterest[name].filter(
        type => type.type !== Type.TypeAlias || type.alias in dataTypesMayBeOfInterest,
      );

      // Those excluded type aliases need to resolve to string
      if (dataTypeWithInterestingDependencies.length < dataTypesMayBeOfInterest[name].length) {
        happy = false;
        if (dataTypeWithInterestingDependencies.every(type => type.type !== Type.String)) {
          dataTypeWithInterestingDependencies.push({ type: Type.String });
        }
      }

      interestingDataTypes[name] = dataTypeWithInterestingDependencies;
    }
  }
  return happy ? interestingDataTypes : filterInterestingDataTypes(interestingDataTypes);
}

const interestingDataTypes = filterInterestingDataTypes(dataTypesMayBeOfInterest);

export default interestingDataTypes;
