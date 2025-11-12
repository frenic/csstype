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

export function isDeprecated(data: { status?: string }, compat?: CompatStatement) {
  // Assume not deprecated if is status i missing
  return data.status === 'obsolete' || (!!compat && !!compat.status && compat.status.deprecated);
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
  const name = selector.slice(colons.length);
  const compatibilityData = await getSelectorsData(name);

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
