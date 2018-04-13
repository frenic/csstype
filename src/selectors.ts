import * as selectors from 'mdn-data/css/selectors.json';
import { alternativeSelectors } from './compat';
import { addType, ResolvedType, Type } from './typer';

const REGEX_SIMPLE_PSEUDO_SELECTOR = /(?!:?:[\w-]+\()(:?:[\w-]+)/g;
const REGEX_ADVANCED_PSEUDO_SELECTOR = /(:?:[\w-]+)\(/g;

export let simplePseudos: ResolvedType[] = [];
export let advancedPseudos: ResolvedType[] = [];

for (const selector in selectors) {
  let match: RegExpMatchArray | null = null;
  while ((match = REGEX_SIMPLE_PSEUDO_SELECTOR.exec(selectors[selector].syntax))) {
    simplePseudos = addType(simplePseudos, { type: Type.StringLiteral, literal: match[1] });

    for (const alternative of alternativeSelectors(match[1])) {
      simplePseudos = addType(simplePseudos, { type: Type.StringLiteral, literal: alternative });
    }
  }
  while ((match = REGEX_ADVANCED_PSEUDO_SELECTOR.exec(selectors[selector].syntax))) {
    advancedPseudos = addType(advancedPseudos, { type: Type.StringLiteral, literal: match[1] });

    for (const alternative of alternativeSelectors(match[1])) {
      advancedPseudos = addType(advancedPseudos, { type: Type.StringLiteral, literal: alternative });
    }
  }
}
