import * as selectors from 'mdn-data/css/selectors.json';
import { alternativeSelectors } from './compat';
import { addType, ResolvedType, Type } from './typer';

const REGEX_SIMPLE_PSEUDO_SELECTOR = /(?!:?:[\w-]+\()(:?:[\w-]+)/g;
const REGEX_ADVANCED_PSEUDO_SELECTOR = /(:?:[\w-]+)\(/g;

export let getPseudos = () => {
  let simple: ResolvedType[] = [];
  let advanced: ResolvedType[] = [];

  for (const selector in selectors) {
    let match: RegExpMatchArray | null = null;
    while ((match = REGEX_SIMPLE_PSEUDO_SELECTOR.exec(selectors[selector].syntax))) {
      simple = addType(simple, { type: Type.StringLiteral, literal: match[1] });

      for (const alternative of alternativeSelectors(match[1])) {
        simple = addType(simple, { type: Type.StringLiteral, literal: alternative });
      }
    }
    while ((match = REGEX_ADVANCED_PSEUDO_SELECTOR.exec(selectors[selector].syntax))) {
      advanced = addType(advanced, { type: Type.StringLiteral, literal: match[1] });

      for (const alternative of alternativeSelectors(match[1])) {
        advanced = addType(advanced, { type: Type.StringLiteral, literal: alternative });
      }
    }
  }
  // Cache
  getPseudos = () => ({
    simple,
    advanced,
  });

  return {
    simple,
    advanced,
  };
};
