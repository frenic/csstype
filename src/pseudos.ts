import * as selectors from 'mdn-data/css/selectors.json';
import { IStringLiteral, Type } from './typer';

const REGEX_SIMPLE_PSEUDO_SELECTOR = /(?!:?:[\w-]+\()(:?:[\w-]+)/g;
const REGEX_ADVANCED_PSEUDO_SELECTOR = /(:?:[\w-]+)\(/g;

export const simplePseudos: IStringLiteral[] = [];
export const advancedPseudos: IStringLiteral[] = [];

for (const selector in selectors) {
  let match: RegExpMatchArray | null = null;
  while ((match = REGEX_SIMPLE_PSEUDO_SELECTOR.exec(selectors[selector].syntax))) {
    simplePseudos.push({ type: Type.StringLiteral, literal: match[1] });
  }
  while ((match = REGEX_ADVANCED_PSEUDO_SELECTOR.exec(selectors[selector].syntax))) {
    advancedPseudos.push({ type: Type.StringLiteral, literal: match[1] });
  }
}
