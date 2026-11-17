import { selectors } from '../data/css';
import { selectors as legacySelectors } from '../data/legacy';
import { hasType, ResolvedType, Type, TypeType } from '../syntax/typer';
import { alternativeSelectors, isSelectorAddedBySome, selectorName } from '../utils/compat';

const REGEX_SIMPLE_PSEUDO_SELECTOR = /(?!:?:[\w-]+\()(:?:[\w-]+)/g;
const REGEX_ADVANCED_PSEUDO_SELECTOR = /(:?:[\w-]+)\(/g;

export async function getPseudos() {
  const simple: ResolvedType[] = [];
  const advanced: ResolvedType[] = [];

  // Webref selectors plus local legacy ones (vendor pseudo-elements BCD keeps)
  const allSelectors: { [selector: string]: { syntax?: string } } = { ...selectors, ...legacySelectors };

  for (const selector in allSelectors) {
    // Some webref selectors (e.g. `:not()`, `:is()`) are defined in prose only
    // and have no syntax; fall back to the selector name itself
    const syntax = allSelectors[selector].syntax ?? selector;

    let match: RegExpMatchArray | null;
    while ((match = REGEX_SIMPLE_PSEUDO_SELECTOR.exec(syntax))) {
      if (!isSelectorAddedBySome(selectorName(match[1]))) {
        // BCD decides: selectors no browser has added are dropped
        continue;
      }

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
    while ((match = REGEX_ADVANCED_PSEUDO_SELECTOR.exec(syntax))) {
      if (!isSelectorAddedBySome(selectorName(match[1]))) {
        // BCD decides: selectors no browser has added are dropped
        continue;
      }

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
