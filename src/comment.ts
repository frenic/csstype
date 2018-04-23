import { format } from 'prettier';
import { getCompat } from './compat';
import { IExtendedProperty } from './data/patches';

export function composeCommentBlock(
  compatibilityData: MDN.CompatData | null,
  data: IExtendedProperty,
  vendor = false,
  obsolete = false,
) {
  const rows: string[] = [];

  if (obsolete) {
    rows.push('@deprecated');
  }

  // Skip compatibility table for obsolete and vendor properties
  if (!vendor && !obsolete) {
    const compat = compatibilityData ? getCompat(compatibilityData) : null;

    if (compat) {
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
            '| --- | --- | --- | --- | --- |',
            '| ' + versions.map(version => version[0] || '').join(' | ') + ' |',
            versions.some(version => !!version[1])
              ? '| ' + versions.map(version => version[1] || '').join(' | ') + ' |'
              : '',
          ].join('\n'),
          { parser: 'markdown' },
        )
          .trim()
          .split('\n'),
      );

      if (compat.mdn_url) {
        rows.push('@see ' + compat.mdn_url);
      }
    }
  }

  return rows.length > 1
    ? '/**\n * ' + rows.join('\n * ') + '\n */'
    : rows.length === 1 ? '/** ' + rows[0] + ' */' : null;
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
        if (!previous || Number(previous.version_added) > Number(current.version_added)) {
          return current;
        }
      }

      return previous;
    }, null);

    // Find lowest version of non-standard or prefix implementation
    const supportsPrefixed = supportsVersions.reduce<MDN.Support | null>((previous, current) => {
      if (
        (current.prefix || current.alternative_name) &&
        !current.version_removed &&
        (!supportsStandard || Number(supportsStandard.version_added) > Number(current.version_added))
      ) {
        if (!previous || Number(previous.version_added) > Number(current.version_added)) {
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
            : supportsPrefixed.alternative_name ? ` _(${supportsPrefixed.alternative_name})_` : ''),
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
