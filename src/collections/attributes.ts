import * as glob from 'fast-glob';
import * as rawGlobalAttributes from 'mdn-browser-compat-data/html/global_attributes.json';
import { hasType, ResolvedType, Type, TypeType } from '../syntax/typer';
import { alternativeAttributes } from '../utils/compat';

function assembleAttributes(baseAttrs: ResolvedType[], dataset: { [key: string]: MDN.CompatData }): ResolvedType[] {
  const attributes: ResolvedType[] = baseAttrs;

  for (const name in dataset) {
    // Namespace attributes and categorical fields contain underscores,
    // while standard attributes do not. Safe to filter them out.
    if (name.includes('_')) {
      continue;
    }

    const attrCompat = dataset[name];

    const type: TypeType = { type: Type.StringLiteral, literal: `[${name}]` };
    if (!hasType(attributes, type)) {
      attributes.push(type);
    }

    for (const alternative of alternativeAttributes(name, attrCompat)) {
      const type: TypeType = { type: Type.StringLiteral, literal: `[${alternative}]` };
      if (!hasType(attributes, type)) {
        attributes.push(type);
      }
    }
  }

  return attributes;
}

async function fetchAttributes(
  baseAttrs: ResolvedType[],
  lang: 'html' | 'svg',
  type: 'attributes' | 'elements',
): Promise<ResolvedType[]> {
  let attributes: ResolvedType[] = baseAttrs;

  const files = glob.sync(`node_modules/mdn-browser-compat-data/${lang}/${type}/*.json`, {
    absolute: true,
  });

  await Promise.all(
    files.map(async file => {
      const data: MDN.AttributesCompat = await import(String(file));

      if (data && data[lang] && data[lang][type]) {
        Object.keys(data[lang][type]).forEach(element => {
          attributes = assembleAttributes(attributes, data[lang][type][element]);
        });
      }
    }),
  );

  return attributes;
}

export async function getHtmlAttributes() {
  let attributes: ResolvedType[] = [];

  attributes = assembleAttributes(attributes, rawGlobalAttributes.html.global_attributes);
  attributes = await fetchAttributes(attributes, 'html', 'elements');

  return attributes;
}

export async function getSvgAttributes() {
  let attributes: ResolvedType[] = [];

  attributes = await fetchAttributes(attributes, 'svg', 'attributes');
  attributes = await fetchAttributes(attributes, 'svg', 'elements');

  return attributes;
}
