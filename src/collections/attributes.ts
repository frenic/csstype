import mdnBrowserCompatData, { Identifier } from '@mdn/browser-compat-data';
import { hasType, ResolvedType, Type, TypeType } from '../syntax/typer';
import { alternativeAttributes } from '../utils/compat';

function assembleAttributes(attributes: ResolvedType[], dataset: { [key: string]: Identifier }): ResolvedType[] {
  const nextAttributes = [...attributes];

  for (const name in dataset) {
    // Namespace attributes and categorical fields contain underscores,
    // while standard attributes do not. Safe to filter them out.
    if (name.includes('_')) {
      continue;
    }

    const attrCompat = dataset[name];

    const type: TypeType = { type: Type.StringLiteral, literal: `[${name}]` };
    if (!hasType(nextAttributes, type)) {
      nextAttributes.push(type);
    }

    for (const alternative of alternativeAttributes(name, attrCompat)) {
      const type: TypeType = { type: Type.StringLiteral, literal: `[${alternative}]` };
      if (!hasType(nextAttributes, type)) {
        nextAttributes.push(type);
      }
    }
  }

  return nextAttributes;
}

export async function getHtmlAttributes() {
  let attributes: ResolvedType[] = [];

  const { elements, global_attributes } = mdnBrowserCompatData.html;
  attributes = assembleAttributes(attributes, global_attributes);

  for (const name in elements) {
    attributes = assembleAttributes(attributes, elements[name]);
  }

  return attributes;
}

export async function getSvgAttributes() {
  let attributes: ResolvedType[] = [];

  const { elements, global_attributes } = mdnBrowserCompatData.svg;
  attributes = assembleAttributes(attributes, global_attributes);

  for (const name in elements) {
    attributes = assembleAttributes(attributes, elements[name]);
  }

  return attributes;
}
