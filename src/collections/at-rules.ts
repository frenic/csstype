import { atrules as rawAtRules } from '../data/css';
import { atrules as legacyAtRules } from '../data/legacy';
import parse from '../syntax/parser';
import typer, { IStringLiteral, ResolvedType, Type } from '../syntax/typer';
import {
  compatNames,
  compatSyntax,
  getCompats,
  getNestedAtRuleData,
  isAddedBySome,
  isAtRuleAddedBySome,
} from '../utils/compat';
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

// Webref at-rules plus local legacy ones. Legacy entries only add what webref
// lacks: new at-rules (`@document`) and extra descriptors (`font-stretch` on
// `@font-face`).
const atrules: { [name: string]: WebRef.AtRuleFeature } = { ...rawAtRules };

for (const name in legacyAtRules) {
  if (!(name in atrules)) {
    atrules[name] = legacyAtRules[name];
  } else {
    const descriptors = atrules[name].descriptors ?? [];
    const extraDescriptors = (legacyAtRules[name].descriptors ?? []).filter(
      descriptor => !descriptors.some(existing => existing.name === descriptor.name),
    );
    atrules[name] = { ...atrules[name], descriptors: [...descriptors, ...extraDescriptors] };
  }
}

export async function getAtRules(dataTypeDictionary: IDataTypeDictionary, minTypesInDataTypes: number) {
  const literals: IStringLiteral[] = [];
  const rules: { [name: string]: IAtRuleDescriptors } = {};

  for (const atName in atrules) {
    const atRule = atrules[atName];

    // Without the `@`
    const name = atName.slice(1);

    if (!isAtRuleAddedBySome(name)) {
      // BCD decides: at-rules no browser has added are dropped
      continue;
    }

    literals.push({
      type: Type.StringLiteral,
      literal: atName,
    });

    if (atRule.descriptors && !SKIP_DESCRIPTORS.includes(atName)) {
      const descriptors: IAtRuleDescriptors = {};
      const compatibilityData = getNestedAtRuleData(name);
      const descriptorNames = new Set(atRule.descriptors.map(descriptor => descriptor.name));
      let hasSupportedProperties = false;

      for (const descriptor of atRule.descriptors) {
        if (!descriptor.syntax) {
          continue;
        }

        if (!compatibilityData || !(descriptor.name in compatibilityData)) {
          // BCD decides: descriptors without a BCD entry are dropped
          continue;
        }

        const compats = getCompats(compatibilityData[descriptor.name]);

        if (compats.every(compat => !isAddedBySome(compat))) {
          // The descriptor needs to be added by some browsers
          continue;
        }

        let entities = parse(descriptor.syntax);
        let properties = [descriptor.name];

        entities = compatSyntax(compatibilityData, entities);
        properties = properties.concat(
          ...compats.map(compat =>
            // We mix current and obsolete for now
            compatNames(compat, descriptor.name)
              .concat(compatNames(compat, descriptor.name, true))
              .filter(property => !descriptorNames.has(property)),
          ),
        );

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
