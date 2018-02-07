import * as selectors from 'mdn-data/css/selectors.json';
import { IStringLiteral, Type } from './typer';

const REGEX_PSEUDO_SELECTOR = /^:/;

const pseudos: IStringLiteral[] = [];

for (const selector in selectors) {
  if (REGEX_PSEUDO_SELECTOR.test(selector)) {
    pseudos.push({ type: Type.StringLiteral, literal: selector });
  }
}

export default pseudos;
