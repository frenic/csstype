import mdnBrowserCompatData, {
  Identifier,
  CompatStatement,
  BrowserName,
  SupportStatement,
  SimpleSupportStatement,
} from '@mdn/browser-compat-data';
import { definitionSyntax, DSNodeGroup } from 'css-tree';

export function getCompats(data: Identifier): CompatStatement[] {
  const { __compat, ...values } = data;

  if (__compat) {
    return [__compat];
  }

  return Object.values(values).reduce<CompatStatement[]>((compats, value) => {
    compats.push(...getCompats(value));
    return compats;
  }, []);
}

export function getSupport(support: SupportStatement): SimpleSupportStatement[] {
  return Array.isArray(support) ? support : [support];
}

export function getAtRuleData(name: string) {
  return getData('at-rules', name);
}

export function getPropertyData(name: string) {
  return getData('properties', name);
}

export function getSelectorsData(name: string) {
  return getData('selectors', name);
}

// Nested BCD entries, e.g. the page-margin boxes: `@top-left` lives under
// `css.at-rules.page` as `at_top-left`
export function getNestedAtRuleData(name: string): Identifier | undefined {
  const direct = getAtRuleData(name);

  if (direct) {
    return direct;
  }

  const atRules = mdnBrowserCompatData.css['at-rules'];

  for (const key of Object.keys(atRules)) {
    for (const sub of Object.keys(atRules[key])) {
      if (sub !== '__compat' && (sub === name || sub === 'at_' + name)) {
        return atRules[key][sub];
      }
    }
  }

  return undefined;
}

const generatedNames: { [type: string]: Set<string> } = {};

// Names a feature only has through the `prefix`/`alternative_name` support data
// of another feature, e.g. `-webkit-box-align` via `box-align`, or
// `@-webkit-keyframes` via `@keyframes`. `compatNames` only yields names whose
// support statement has a `version_added`, so membership means "added by some browser".
function getGeneratedNames(type: 'at-rules' | 'properties'): Set<string> {
  if (!generatedNames[type]) {
    const names = new Set<string>();
    const category = mdnBrowserCompatData.css[type];

    for (const key of Object.keys(category)) {
      for (const compat of getCompats(category[key])) {
        for (const name of compatNames(compat, key)) {
          names.add(name);
        }
      }
    }

    generatedNames[type] = names;
  }

  return generatedNames[type];
}

export function isGeneratedAtRuleName(name: string) {
  return getGeneratedNames('at-rules').has(name);
}

export function isGeneratedPropertyName(name: string) {
  return getGeneratedNames('properties').has(name);
}

// BCD decides: an at-rule stays only if its own (possibly nested) entry says a
// browser added it, or it is a prefixed/alternative name of a supported at-rule
export function isAtRuleAddedBySome(name: string): boolean {
  const data = getNestedAtRuleData(name);

  if (data) {
    return getCompats(data).some(isAddedBySome);
  }

  return isGeneratedAtRuleName(name);
}

// BCD decides: a selector stays only if its own entry says a browser added it.
// `name` is the selector without colons, e.g. `-moz-range-thumb`
export function isSelectorAddedBySome(name: string): boolean {
  const data = getSelectorsData(name);
  return !!data && getCompats(data).some(isAddedBySome);
}

// The selector without colons, e.g. `::-moz-range-thumb` → `-moz-range-thumb`
export function selectorName(selector: string): string {
  const colons = ':'.repeat(selector.lastIndexOf(':') + 1);
  return selector.slice(colons.length);
}

export function getTypesData(name: string) {
  return getData('types', name);
}

function getData(type: 'at-rules' | 'properties' | 'selectors' | 'types', name: string): Identifier | undefined {
  return mdnBrowserCompatData.css[type][name];
}

export function compatNames(compat: CompatStatement, name: string, onlyRemoved = false): string[] {
  const properties: string[] = [];

  let browser: BrowserName;
  for (browser in compat.support) {
    const support = compat.support[browser];

    if (!support) {
      continue;
    }

    for (const version of getSupport(support)) {
      const isRemoved = typeof version.version_removed === 'string';

      if (versionAdded(version) && isRemoved === onlyRemoved) {
        if (version.prefix) {
          properties.push(version.prefix + name);
        }
        if (version.alternative_name) {
          properties.push(version.alternative_name);
        }
      }
    }
  }

  return properties;
}

export function compatSyntax(data: Identifier, node: DSNodeGroup): DSNodeGroup {
  const nodeClone = definitionSyntax.parse(definitionSyntax.generate(node));

  let currentGroup = node;
  definitionSyntax.walk(nodeClone, node => {
    if (node.type === 'Keyword') {
      if (node.name in data) {
        const compats = getCompats(data[node.name]);
        if (compats.every(compat => !isAddedBySome(compat))) {
          // The keyword needs to be added by some browsers so we remove previous
          // combinator and skip this keyword
          return;
        }
      }

      const alternatives = alternativeKeywords(data, node.name);

      if (alternatives.length > 0) {
        for (const keyword of alternatives) {
          currentGroup.terms.push({
            type: 'Keyword',
            name: keyword,
          });
        }
      }
    } else if (node.type === 'Group') {
      currentGroup = node;
    }
  });

  return nodeClone;
}

function alternativeKeywords(data: Identifier, value: string): string[] {
  const alternatives: string[] = [];

  if (value in data) {
    const compats = getCompats(data[value]);

    for (const compat of compats) {
      let browser: BrowserName;
      for (browser in compat.support) {
        const support = compat.support[browser];

        if (!support) {
          continue;
        }

        for (const version of Array.isArray(support) ? support : [support]) {
          if (versionAdded(version)) {
            if (version.prefix && !alternatives.includes(version.prefix + value)) {
              alternatives.push(version.prefix + value);
            }
            if (version.alternative_name && !alternatives.includes(version.alternative_name)) {
              alternatives.push(version.alternative_name);
            }
          }
        }
      }
    }
  }

  return alternatives;
}

export function isDeprecated(compat?: CompatStatement) {
  // BCD decides: deprecated only when the compat statement says so
  return !!compat && !!compat.status && compat.status.deprecated;
}

export function isAddedBySome(compat: CompatStatement): boolean {
  let browser: BrowserName;
  for (browser in compat.support) {
    const support = compat.support[browser];

    if (!support) {
      continue;
    }

    for (const version of getSupport(support)) {
      if (versionAdded(version)) {
        return true;
      }
    }
  }

  return false;
}

export async function alternativeSelectors(selector: string): Promise<string[]> {
  const alternatives: string[] = [];

  // Pseudo without ':'
  const colons = ':'.repeat(selector.lastIndexOf(':') + 1);
  const name = selectorName(selector);
  const compatibilityData = getSelectorsData(name);

  if (compatibilityData) {
    const compats = getCompats(compatibilityData);

    for (const compat of compats) {
      let browser: BrowserName;
      for (browser in compat.support) {
        const support = compat.support[browser];

        if (!support) {
          continue;
        }

        for (const version of getSupport(support)) {
          if (versionAdded(version)) {
            if (version.prefix) {
              alternatives.push(colons + version.prefix + name);
            }
            if (version.alternative_name) {
              alternatives.push(version.alternative_name);
            }
          }
        }
      }
    }

    return alternatives;
  }

  return alternatives;
}

export function alternativeAttributes(name: string, data: Identifier): string[] {
  const alternatives: string[] = [];
  const compats = getCompats(data);

  for (const compat of compats) {
    let browser: BrowserName;
    for (browser in compat.support) {
      const support = compat.support[browser];

      if (!support) {
        continue;
      }

      for (const version of getSupport(support)) {
        if (versionAdded(version)) {
          if (version.prefix) {
            alternatives.push(version.prefix + name);
          }
          if (version.alternative_name) {
            alternatives.push(version.alternative_name);
          }
        }
      }
    }
  }

  return alternatives;
}

export type SupportedSimpleSupportStatement = SimpleSupportStatement & { version_added: string };

export function versionAdded(statement: SimpleSupportStatement): statement is SupportedSimpleSupportStatement {
  return typeof statement.version_added === 'string';
}
