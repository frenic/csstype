import * as glob from 'fast-glob';
import * as rawGlobalAttributes from 'mdn-browser-compat-data/html/global_attributes.json';
import { alternativeAttributes } from './compat';
import { addType, ResolvedType, Type } from './typer';

function gatherAttributes(baseAttrs: ResolvedType[], dataset: { [key: string]: MDN.CompatData }): ResolvedType[] {
  let attributes: ResolvedType[] = baseAttrs;

  for (const name in dataset) {
    // Namespace attributes and categorical fields contain underscores,
    // while standard attributes do not. Safe to filter them out.
    if (name.includes('_')) {
      continue;
    }

    const attrCompat = dataset[name];

    attributes = addType(attributes, { type: Type.StringLiteral, literal: `[${name}]` });

    for (const alternative of alternativeAttributes(name, attrCompat)) {
      attributes = addType(attributes, { type: Type.StringLiteral, literal: `[${alternative}]` });
    }
  }

  return attributes;
}

function loadCompatFiles(
  baseAttrs: ResolvedType[],
  lang: 'html' | 'svg',
  type: 'attributes' | 'elements',
): ResolvedType[] {
  let attributes: ResolvedType[] = baseAttrs;

  glob
    .sync(`node_modules/mdn-browser-compat-data/${lang}/${type}/*.json`, {
      absolute: true,
    })
    .forEach(file => {
      const data = require(String(file));

      if (data && data[lang] && data[lang][type]) {
        Object.keys(data[lang][type]).forEach(element => {
          attributes = gatherAttributes(attributes, data[lang][type][element]);
        });
      }
    });

  return attributes;
}

export let getHtmlAttributes = () => {
  let attributes: ResolvedType[] = [];

  attributes = gatherAttributes(attributes, rawGlobalAttributes.html.global_attributes);
  attributes = loadCompatFiles(attributes, 'html', 'elements');

  // Cache
  getHtmlAttributes = () => attributes;

  return attributes;
};

export let getSvgAttributes = () => {
  let attributes: ResolvedType[] = [];

  attributes = loadCompatFiles(attributes, 'svg', 'attributes');
  attributes = loadCompatFiles(attributes, 'svg', 'elements');

  // Cache
  getSvgAttributes = () => attributes;

  return attributes;
};
