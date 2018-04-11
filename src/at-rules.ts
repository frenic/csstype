import * as atRules from 'mdn-data/css/at-rules.json';
import { resolveDataTypes } from './data-types';
import parse from './parser';
import typing, { IStringLiteral, ResolvedType, Type } from './typer';

export interface IAtRuleDescriptors {
  [descriptor: string]: ResolvedType[];
}

export const atRuleList: IStringLiteral[] = [];
export const atRuleDescriptors: { [name: string]: IAtRuleDescriptors } = {};

for (const name in atRules) {
  const atRule = atRules[name];

  atRuleList.push({
    type: Type.StringLiteral,
    literal: name,
  });

  if ('descriptors' in atRule) {
    const descriptors: IAtRuleDescriptors = {};

    for (const descriptor in atRule.descriptors) {
      descriptors[descriptor] = resolveDataTypes(typing(parse(atRule.descriptors[descriptor].syntax)));
    }

    atRuleDescriptors[name] = descriptors;
  }
}
