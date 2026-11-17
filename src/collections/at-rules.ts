import { atrules } from '../data/css';
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

// Webref lists the `@media` media features and `@container` container features
// as descriptors. They are queried, not declared, and would create new
// `AtRule.Media` / `AtRule.Container` interfaces, so they are skipped.
const SKIP_DESCRIPTORS = ['@media', '@container'];

export async function getAtRules(dataTypeDictionary: IDataTypeDictionary, minTypesInDataTypes: number) {
  const literals: IStringLiteral[] = [];
  const rules: { [name: string]: IAtRuleDescriptors } = {};

  for (const atName in atrules) {
    const atRule = atrules[atName];

    // Without the `@`
    const name = atName.slice(1);

    literals.push({
      type: Type.StringLiteral,
      literal: atName,
    });

    if (atRule.descriptors && !SKIP_DESCRIPTORS.includes(atName)) {
      const descriptors: IAtRuleDescriptors = {};
      const compatibilityData = getAtRuleData(name);
      const descriptorNames = new Set(atRule.descriptors.map(descriptor => descriptor.name));
      let hasSupportedProperties = false;

      for (const descriptor of atRule.descriptors) {
        if (!descriptor.syntax) {
          continue;
        }

        let entities = parse(descriptor.syntax);
        let properties = [descriptor.name];

        if (compatibilityData && descriptor.name in compatibilityData) {
          const compats = getCompats(compatibilityData[descriptor.name]);

          if (compats.every(compat => !isAddedBySome(compat))) {
            // The property needs to be added by some browsers
            continue;
          }

          entities = compatSyntax(compatibilityData, entities);
          properties = properties.concat(
            ...compats.map(compat =>
              // We mix current and obsolete for now
              compatNames(compat, descriptor.name)
                .concat(compatNames(compat, descriptor.name, true))
                .filter(property => !descriptorNames.has(property)),
            ),
          );
        }

        const types = resolveDataTypes(dataTypeDictionary, typer(entities), minTypesInDataTypes);

        for (const property of properties) {
          hasSupportedProperties = true;
          descriptors[property] = {
            name: descriptor.name,
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
