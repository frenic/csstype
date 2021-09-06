import * as selectors from 'mdn-data/css/selectors.json';
import { hasType, ResolvedType, Type, TypeType } from '../syntax/typer';
import { alternativeSelectors } from '../utils/compat';

const REGEX_SIMPLE_PSEUDO_SELECTOR = /(?!:?:[\w-]+\()(:?:[\w-]+)/g;
const REGEX_ADVANCED_PSEUDO_SELECTOR = /(:?:[\w-]+)\(/g;

export async function getPseudos() {
  const simple: ResolvedType[] = [];
  const advanced: ResolvedType[] = [];

  for (const selector in selectors) {
    let match: RegExpMatchArray | null = null;
    while ((match = REGEX_SIMPLE_PSEUDO_SELECTOR.exec(selectors[selector].syntax))) {
      const type: TypeType = { type: Type.StringLiteral, literal: match[1] };
      if (!hasType(simple, type)) {
        simple.push(type);
      }

      for (const alternative of await alternativeSelectors(match[1])) {
        const type: TypeType = { type: Type.StringLiteral, literal: alternative };
        if (!hasType(simple, type)) {
          simple.push(type);
        }
      }
    }
    while ((match = REGEX_ADVANCED_PSEUDO_SELECTOR.exec(selectors[selector].syntax))) {
      const type: TypeType = { type: Type.StringLiteral, literal: match[1] };
      if (!hasType(advanced, type)) {
        advanced.push(type);
      }

      for (const alternative of await alternativeSelectors(match[1])) {
        const type: TypeType = { type: Type.StringLiteral, literal: alternative };
        if (!hasType(advanced, type)) {
          advanced.push(type);
        }
      }
    }
  }

  return {
    simple,
    advanced,
  };
}
