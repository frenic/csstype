import * as l10n from 'mdn-data/l10n/css.json';
import { format } from 'prettier';
import { IExtendedProperty } from '../data/patches';
import { getCompats } from '../utils/compat';
import { warn } from './logger';
import { getSummary } from './urls';

const BLANK_ROW = '';
const L10N_TAGS_REGEX = /(<[^>]+>|\{\{[^\}]+\}\})/;

export async function composeCommentBlock(
  compatibilityData: MDN.CompatData | undefined,
  data: IExtendedProperty,
  vendor = false,
  obsolete = false,
) {
  const rows: string[] = [];
  const includeCompatibility = !vendor && !obsolete && compatibilityData;

  if (data.mdn_url) {
    const summary = await getSummary(data.mdn_url);
    if (summary) {
      rows.push(summary, BLANK_ROW);
    }
  }

  if (data.syntax) {
    rows.push(`**Syntax**: \`${data.syntax}\``, BLANK_ROW);
  }

  if (typeof data.initial === 'string') {
    if (data.initial in l10n) {
      if (typeof l10n[data.initial]['en-US'] === 'string') {
        rows.push(`**Initial value**: ${formatL10n(l10n[data.initial]['en-US'])}`, BLANK_ROW);
      }
    } else {
      rows.push(`**Initial value**: \`${data.initial}\``, BLANK_ROW);
    }
  }

  // Skip compatibility table for obsolete and vendor properties
  if (includeCompatibility) {
    rows.push(...getCompatRows(compatibilityData!));
  }

  if (obsolete) {
    rows.push('@deprecated', BLANK_ROW);
  }

  // Trim ending
  if (rows[rows.length - 1] === BLANK_ROW) {
    rows.pop();
  }

  if (rows.length === 1) {
    return '/** ' + rows[0] + ' */';
  }

  if (rows.length > 1) {
    return '/**\n * ' + rows.join('\n * ') + '\n */';
  }
}

function getCompatRows(compatibilityData: MDN.CompatData) {
  const compats = getCompats(compatibilityData);
  const rows: string[] = [];

  if (compats.length > 1) {
    rows.push('---', BLANK_ROW);
  }

  for (const compat of compats) {
    if (compats.length > 1 && compat.description) {
      rows.push(`_${compat.description}_`, BLANK_ROW);
    }

    const chrome = supportVersion(compat.support.chrome);
    const firefox = supportVersion(compat.support.firefox);
    const safari = supportVersion(compat.support.safari);
    const edge = supportVersion(compat.support.edge);
    const ie = supportVersion(compat.support.ie);

    const versions = [chrome, firefox, safari, edge, ie];

    rows.push(
      ...format(
        [
          '| Chrome | Firefox | Safari | Edge | IE |',
          '| :---: | :---: | :---: | :---: | :---: |',
          '| ' + versions.map(version => version[0] || '').join(' | ') + ' |',
          versions.some(version => !!version[1])
            ? '| ' + versions.map(version => version[1] || '').join(' | ') + ' |'
            : '',
        ].join('\n'),
        { parser: 'markdown' },
      )
        .trim()
        .split('\n'),
      BLANK_ROW,
    );

    if (compats.length > 1) {
      rows.push('---', BLANK_ROW);
    }
  }

  const urls = compats.reduce<string[]>(
    (list, { mdn_url }) => (mdn_url && !list.includes(mdn_url) ? [...list, mdn_url] : list),
    [],
  );

  if (urls.length > 0) {
    rows.push(...urls.map(url => '@see ' + url), BLANK_ROW);
  }

  return rows;
}

function supportVersion(supports: MDN.Support | MDN.Support[] | undefined): string[] {
  supports = supports ? (Array.isArray(supports) ? supports : [supports]).reverse() : [];

  // Ignore versions hidden under flags
  supports = supports.filter(({ flags }) => !flags);

  const supportsVersions = supports.filter(({ version_added }) => typeof version_added === 'string');

  if (supportsVersions.length > 0) {
    // Find lowest version of standard implementation
    const supportsStandard = supportsVersions.reduce<MDN.Support | null>((previous, current) => {
      if (!current.prefix && !current.alternative_name) {
        if (
          !previous ||
          (previous.version_added !== true && current.version_added === true) ||
          typeof previous.version_added !== 'string' ||
          typeof current.version_added !== 'string' ||
          // Lower version
          versionDiff(previous.version_added, current.version_added) < 0 ||
          // Prioritize version of full implementation
          (previous.partial_implementation && !current.partial_implementation)
        ) {
          return current;
        }
      }

      return previous;
    }, null);

    // Find lowest version of non-standard or prefix implementation
    const supportsPrefixed = supportsVersions.reduce<MDN.Support | null>((previous, current) => {
      if (
        (current.prefix || current.alternative_name) &&
        // Ignore removed versions
        !current.version_removed &&
        // Only display prefixed or alternative if this version is lower than standard implementation
        (!supportsStandard ||
          (supportsStandard.version_added !== true && current.version_added === true) ||
          typeof supportsStandard.version_added !== 'string' ||
          typeof current.version_added !== 'string' ||
          versionDiff(supportsStandard.version_added, current.version_added) < 0)
      ) {
        if (
          !previous ||
          (previous.version_added !== true && current.version_added === true) ||
          typeof previous.version_added !== 'string' ||
          typeof current.version_added !== 'string' ||
          // Lower version
          versionDiff(previous.version_added, current.version_added) < 0 ||
          // Prioritize version of full implementation
          (previous.partial_implementation && !current.partial_implementation)
        ) {
          return current;
        }
      }

      return previous;
    }, null);

    const version: string[] = [];

    if (supportsStandard) {
      version.push(
        supportsStandard.version_removed
          ? `${supportsStandard.version_added}-${supportsStandard.version_removed}`
          : `**${supportsStandard.version_added}**`,
      );
    }

    if (supportsPrefixed) {
      version.push(
        (supportsStandard ? (supportsPrefixed.version_added as string) : `**${supportsPrefixed.version_added}**`) +
          (supportsPrefixed.prefix
            ? ` _-x-_`
            : supportsPrefixed.alternative_name
            ? ` _(${supportsPrefixed.alternative_name})_`
            : ''),
      );
    }

    return version;
  } else {
    const supportYes = supports.find(({ version_added }) => version_added === true);
    if (supportYes) {
      return ['Yes'];
    }

    const supportsNo = supports.find(({ version_added }) => version_added === false);
    if (supportsNo) {
      return ['No'];
    }
  }

  return ['n/a'];
}

function versionDiff(a: string, b: string) {
  const aNumber = Number(a);
  const bNumber = Number(b);

  if (String(aNumber) !== a) {
    warn('Version `%s` is not properly handled', a);
  }
  if (String(bNumber) !== b) {
    warn('Version `%s` is not properly handled', b);
  }

  return bNumber - aNumber;
}

function formatL10n(phrase: string) {
  return phrase
    .split(L10N_TAGS_REGEX)
    .map(chunk => {
      if (chunk === '<code>' || chunk === '</code>') {
        return '`';
      }

      if (chunk.startsWith('<') && chunk.endsWith('>')) {
        return '';
      }

      // References to another property
      const curlyBlock = chunk.match(/\{\{cssxref\("([^"]*)"\)\}\}/);
      if (curlyBlock) {
        return `_${curlyBlock[1]}_`;
      }

      if (chunk.startsWith('{{') && chunk.endsWith('}}')) {
        warn('Unknown curly bracket block `%s` in i10n', chunk);
        return chunk;
      }

      return chunk;
    })
    .join('');
}
