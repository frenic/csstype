import * as atRules from 'mdn-data/css/at-rules.json';
import parse from '../syntax/parser';
import typer, { IStringLiteral, ResolvedType, Type } from '../syntax/typer';
import { compatNames, compatSyntax, getAtRuleData, getCompats, isAddedBySome } from '../utils/compat';
import { IDataTypeDictionary, resolveDataTypes } from './data-types';

interface IDescriptor {
  name: string;
  types: ResolvedType[];
}

export interface IAtRuleDescriptors {
  [descriptor: string]: IDescriptor;
}

export async function getAtRules(dataTypeDictionary: IDataTypeDictionary, minTypesInDataTypes: number) {
  const literals: IStringLiteral[] = [];
  const rules: { [name: string]: IAtRuleDescriptors } = {};

  for (const atName in atRules) {
    const atRule = atRules[atName];

    // Without the `@`
    const name = atName.slice(1);

    literals.push({
      type: Type.StringLiteral,
      literal: atName,
    });

    if ('descriptors' in atRule) {
      const descriptors: IAtRuleDescriptors = {};
      const compatibilityData = await getAtRuleData(name);
      let hasSupportedProperties = false;

      for (const descriptor in atRule.descriptors) {
        let entities = parse(atRule.descriptors[descriptor].syntax);
        let properties = [descriptor];

        if (compatibilityData && descriptor in compatibilityData) {
          const compats = getCompats(compatibilityData[descriptor]);

          if (compats.every(compat => !isAddedBySome(compat))) {
            // The property needs to be added by some browsers
            continue;
          }

          entities = compatSyntax(compatibilityData, entities);
          properties = properties.concat(
            ...compats.map(compat =>
              // We mix current and obsolete for now
              compatNames(compat, descriptor)
                .concat(compatNames(compat, descriptor, true))
                .filter(property => !(property in atRule.descriptors)),
            ),
          );
        }

        const types = await resolveDataTypes(dataTypeDictionary, typer(entities), minTypesInDataTypes);

        for (const property of properties) {
          hasSupportedProperties = true;
          descriptors[property] = {
            name: descriptor,
            types,
          };
        }
      }

      if (hasSupportedProperties) {
        rules[name] = descriptors;
      }
    }
  }

  return {
    literals,
    rules,
  };
}
