import { selectors } from '../data/css.mjs';
import { hasType, ResolvedType, Type, TypeType } from '../syntax/typer.mjs';
import { alternativeSelectors } from '../utils/compat.mjs';

const REGEX_SIMPLE_PSEUDO_SELECTOR = /(?!:?:[\w-]+\()(:?:[\w-]+)/g;
const REGEX_ADVANCED_PSEUDO_SELECTOR = /(:?:[\w-]+)\(/g;

export async function getPseudos() {
  const simple: ResolvedType[] = [];
  const advanced: ResolvedType[] = [];

  for (const selector of selectors) {
    let match: RegExpMatchArray | false | null = null;
    while ((match = typeof selector.syntax === 'string' && REGEX_SIMPLE_PSEUDO_SELECTOR.exec(selector.syntax))) {
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
    while ((match = typeof selector.syntax === 'string' && REGEX_ADVANCED_PSEUDO_SELECTOR.exec(selector.syntax))) {
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
