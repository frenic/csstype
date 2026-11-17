import { format } from 'prettier';
import { Identifier, SupportStatement } from '@mdn/browser-compat-data';
import { mdnUrls as legacyMdnUrls } from '../data/legacy';
import { IExtendedProperty } from '../data/patches';
import { getCompats, getSupport, SupportedSimpleSupportStatement, versionAdded } from '../utils/compat';
import { warn } from './logger';
import { getSummary } from './urls';

const BLANK_ROW = '';

export async function composeCommentBlock(
  compatibilityData: Identifier | undefined,
  data: IExtendedProperty,
  vendor = false,
  obsolete = false,
) {
  const rows: string[] = [];
  const includeCompatibility = !vendor && !obsolete && compatibilityData;

  // BCD carries the MDN link; the 25 properties it lacks are in local legacy data
  const mdnUrl = compatibilityData?.__compat?.mdn_url ?? (data.name ? legacyMdnUrls[data.name] : undefined);

  if (mdnUrl) {
    const summary = await getSummary(mdnUrl);
    if (summary) {
      rows.push(summary, BLANK_ROW);
    }
  }

  if (data.syntax) {
    rows.push(`**Syntax**: \`${data.syntax}\``, BLANK_ROW);
  }

  if (typeof data.initial === 'string') {
    // Webref gives the initial value as raw spec text; no l10n lookup
    rows.push(`**Initial value**: \`${data.initial}\``, BLANK_ROW);
  }

  // Skip compatibility table for obsolete and vendor properties
  if (includeCompatibility) {
    rows.push(...(await getCompatRows(compatibilityData!)));
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

async function getCompatRows(compatibilityData: Identifier) {
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
      ...(
        await format(
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

function supportVersion(supports: SupportStatement | undefined): string[] {
  const statements = (supports ? getSupport(supports).reverse() : []).filter(({ flags }) => !flags);

  const supportsVersions = statements.filter(versionAdded);

  if (supportsVersions.length > 0) {
    // Find lowest version of standard implementation
    const supportsStandard = supportsVersions.reduce<SupportedSimpleSupportStatement | undefined>(
      (previous, current) => {
        if (!current.prefix && !current.alternative_name) {
          if (
            !previous ||
            // Lower version
            versionDiff(previous.version_added, current.version_added) < 0 ||
            // Prioritize version of full implementation
            (previous.partial_implementation && !current.partial_implementation)
          ) {
            return current;
          }
        }

        return previous;
      },
      undefined,
    );

    // Find lowest version of non-standard or prefix implementation
    const supportsPrefixed = supportsVersions.reduce<SupportedSimpleSupportStatement | null>((previous, current) => {
      if (
        (current.prefix || current.alternative_name) &&
        // Ignore removed versions
        !current.version_removed &&
        // Only display prefixed or alternative if this version is lower than standard implementation
        (!supportsStandard || versionDiff(supportsStandard.version_added, current.version_added) < 0)
      ) {
        if (
          !previous ||
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
  }

  if (statements.some(versionAdded)) {
    return ['Yes'];
  }

  return ['No'];
}

function versionDiff(a: string, b: string) {
  let aNumber: number;
  let bNumber: number;

  if (a === 'preview') {
    aNumber = Infinity;
  } else {
    aNumber = Number(a);

    if (String(aNumber) !== a) {
      warn('Version `%s` is not properly handled', a);
    }
  }

  if (b === 'preview') {
    bNumber = Infinity;
  } else {
    bNumber = Number(b);

    if (String(bNumber) !== b) {
      warn('Version `%s` is not properly handled', b);
    }
  }

  return bNumber - aNumber;
}
