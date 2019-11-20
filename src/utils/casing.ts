const REGEX_LEADING_LETTER = /^(\w)/;
const REGEX_KEBAB_SEPARATOR = /-(\w)/g;
const REGEX_VENDOR_PREFIXED = /^-(\w)/;
const REGEX_MS_PREFIXED = /^-ms-/;

export function toPascalCase(kebabCase: string) {
  return kebabCase
    .replace(REGEX_VENDOR_PREFIXED, toUpperReplacer)
    .replace(REGEX_LEADING_LETTER, toUpperReplacer)
    .replace(REGEX_KEBAB_SEPARATOR, toUpperReplacer);
}

export function toVendorPrefixCase(property: string) {
  return REGEX_MS_PREFIXED.test(property) ? 'ms' + toPascalCase(property.slice(4)) : toPascalCase(property);
}

export function toCamelCase(kebabCase: string) {
  return kebabCase.replace(REGEX_VENDOR_PREFIXED, toLowerReplacer).replace(REGEX_KEBAB_SEPARATOR, toUpperReplacer);
}

function toUpperReplacer(substring: string, ...args: string[]): string {
  return args[0].toUpperCase();
}

function toLowerReplacer(substring: string, ...args: string[]): string {
  return args[0].toLowerCase();
}
