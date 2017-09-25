import * as selectors from 'mdn-data/css/selectors.json';
import { Type, LiteralType } from './typer';

const REGEX_PSEUDO_SELECTOR = /^:/;

const pseudos: LiteralType[] = [];

for (const selector in selectors) {
  if (REGEX_PSEUDO_SELECTOR.test(selector)) {
    pseudos.push({ type: Type.Literal, literal: selector });
  }
}

export default pseudos;
