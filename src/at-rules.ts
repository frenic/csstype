import * as atRules from 'mdn-data/css/at-rules.json';
import { compatNames, compatSyntax, getAtRuleData, getCompat, isAddedBySome } from './compat';
import { resolveDataTypes } from './data-types';
import parse from './parser';
import typing, { IStringLiteral, ResolvedType, Type } from './typer';

interface IDescriptor {
  name: string;
  types: ResolvedType[];
}

export interface IAtRuleDescriptors {
  [descriptor: string]: IDescriptor;
}

export const atRuleList: IStringLiteral[] = [];
export const atRuleDescriptors: { [name: string]: IAtRuleDescriptors } = {};

for (const atName in atRules) {
  const atRule = atRules[atName];

  // Without the `@`
  const name = atName.slice(1);

  atRuleList.push({
    type: Type.StringLiteral,
    literal: atName,
  });

  if ('descriptors' in atRule) {
    const descriptors: IAtRuleDescriptors = {};
    const compatibilityData = getAtRuleData(name);

    for (const descriptor in atRule.descriptors) {
      let entities = parse(atRule.descriptors[descriptor].syntax);
      let properties = [descriptor];

      if (compatibilityData && descriptor in compatibilityData) {
        const compat = getCompat(compatibilityData[descriptor]);

        if (!isAddedBySome(compat)) {
          // The property needs to be added by some browsers
          continue;
        }

        entities = compatSyntax(compatibilityData, entities);
        properties = properties.concat(
          // We mix current and obsolete for now
          compatNames(compat, descriptor)
            .concat(compatNames(compat, descriptor, true))
            .filter(property => !(property in atRule.descriptors)),
        );
      }

      const types = resolveDataTypes(typing(entities));

      for (const property of properties) {
        descriptors[property] = {
          name: descriptor,
          types,
        };
      }
    }

    atRuleDescriptors[name] = descriptors;
  }
}
