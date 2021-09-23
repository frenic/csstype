import { addType, ResolvedType, Type } from '../syntax/typer';
import * as glob from 'fast-glob';
import { getCompats } from '../utils/compat';

async function fetchElements(
  baseElements: ResolvedType[],
  baseObsoleteElements: ResolvedType[],
  lang: 'html' | 'svg',
): Promise<[ResolvedType[], ResolvedType[]]> {
  let elements: ResolvedType[] = baseElements;
  let obsoleteElements: ResolvedType[] = baseObsoleteElements;

  const files = glob.sync(`node_modules/mdn-browser-compat-data/${lang}/elements/*.json`, {
    absolute: true,
  });

  await Promise.all(
    files.map(async file => {
      const data: MDN.AttributesCompat = await import(String(file));

      if (data && data[lang] && data[lang].elements) {
        Object.keys(data[lang].elements).forEach(element => {
          const compats = getCompats(data[lang].elements[element]);

          if (compats.some(compat => compat.status?.deprecated)) {
            obsoleteElements = addType(obsoleteElements, { type: Type.StringLiteral, literal: `${element}` });
          } else {
            elements = addType(elements, { type: Type.StringLiteral, literal: `${element}` });
          }
        });
      }
    }),
  );

  return [elements, obsoleteElements];
}

export async function getHtmlElements() {
  let elements: ResolvedType[] = [];
  let obsoleteElements: ResolvedType[] = [];

  [elements, obsoleteElements] = await fetchElements(elements, obsoleteElements, 'html');

  // handle input folder separately
  elements = addType(elements, { type: Type.StringLiteral, literal: 'input' });

  return [elements, obsoleteElements];
}

export async function getSvgElements() {
  let elements: ResolvedType[] = [];
  let obsoleteElements: ResolvedType[] = [];

  [elements, obsoleteElements] = await fetchElements(elements, obsoleteElements, 'svg');

  return [elements, obsoleteElements];
}
