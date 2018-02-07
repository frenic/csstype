import * as selectors from 'mdn-data/css/selectors.json';
import { ILiteral, Type } from './typer';

const REGEX_PSEUDO_SELECTOR = /^:/;

const pseudos: ILiteral[] = [];

for (const selector in selectors) {
  if (REGEX_PSEUDO_SELECTOR.test(selector)) {
    pseudos.push({ type: Type.Literal, literal: selector });
  }
}

export default pseudos;
