import * as rawGlobalAttributes from 'mdn-browser-compat-data';
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
  keys:
    | { lang: 'html', type: 'elements' }
    | { lang: 'svg', type: 'global_attributes' | 'elements' }
): Promise<ResolvedType[]> {
  let attributes: ResolvedType[] = baseAttrs;

  if (rawGlobalAttributes?.[keys.lang]?.[keys.type]) {
    const compactAttributes = rawGlobalAttributes[keys.lang][keys.type] as MDN.AttributesCompat;

    Object.keys(compactAttributes).forEach(element => {
      attributes = assembleAttributes(attributes, (compactAttributes)[element]);
    });
  }

  return attributes;
}

export async function getHtmlAttributes() {
  let attributes: ResolvedType[] = [];

  attributes = assembleAttributes(attributes, rawGlobalAttributes.html.global_attributes);
  attributes = await fetchAttributes(attributes, { lang: 'html', type: 'elements' });

  return attributes;
}

export async function getSvgAttributes() {
  let attributes: ResolvedType[] = [];

  attributes = await fetchAttributes(attributes, { lang: 'svg', type: 'global_attributes' });
  attributes = await fetchAttributes(attributes, { lang: 'svg', type: 'elements' });

  return attributes;
}
