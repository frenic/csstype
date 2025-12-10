import { atrules } from '../data/css.mjs';
import parse from '../syntax/parser.mjs';
import typer, { IStringLiteral, ResolvedType, Type } from '../syntax/typer.mjs';
import { compatNames, compatSyntax, getAtRuleData, getCompats, isAddedBySome } from '../utils/compat.mjs';
import { IDataTypeDictionary, resolveDataTypes } from './data-types.mjs';

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

  for (const atrule of atrules) {
    const atName = atrule.name;
    const name = atName.slice(1);

    literals.push({
      type: Type.StringLiteral,
      literal: atName,
    });

    if (atrule.descriptors) {
      const descriptors: IAtRuleDescriptors = {};
      const compatibilityData = getAtRuleData(name);
      let hasSupportedProperties = false;
      const descriptorNames = atrule.descriptors.map(({ name }) => name);

      for (const descriptor of atrule.descriptors) {
        const { syntax, name: descriptorName } = descriptor;
        if (syntax) {
          let entities = parse(syntax);
          let properties = [descriptorName];

          if (compatibilityData && descriptorName in compatibilityData) {
            const compats = getCompats(compatibilityData[descriptorName]);

            if (compats.every(compat => !isAddedBySome(compat))) {
              // The property needs to be added by some browsers
              continue;
            }

            entities = compatSyntax(compatibilityData, entities);
            properties = properties.concat(
              ...compats.map(compat =>
                // We mix current and obsolete for now
                compatNames(compat, descriptorName)
                  .concat(compatNames(compat, descriptorName, true))
                  .filter(property => !descriptorNames.includes(property)),
              ),
            );
          }

          const types = resolveDataTypes(dataTypeDictionary, typer(entities), minTypesInDataTypes);

          for (const property of properties) {
            hasSupportedProperties = true;
            descriptors[property] = {
              name: descriptorName,
              types,
            };
          }
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
