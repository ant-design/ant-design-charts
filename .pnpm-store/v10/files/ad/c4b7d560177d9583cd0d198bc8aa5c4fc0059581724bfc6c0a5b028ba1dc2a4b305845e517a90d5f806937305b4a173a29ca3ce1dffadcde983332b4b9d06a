export function toUppercaseFirstLetter(string: string) {
  return string.toString().charAt(0).toUpperCase() + string.toString().slice(1);
}

export function toLowercaseFirstLetter(string: string) {
  return string.toString().charAt(0).toLowerCase() + string.toString().slice(1);
}

export function addPrefix(string: string, prefix: string) {
  return `${prefix}${toUppercaseFirstLetter(string)}`;
}

export function removePrefix(string: string, prefix?: string, lowercaseFirstLetter: boolean = true) {
  const inferPrefix = prefix || string.match(/^([a-z][a-z0-9]+)/)?.[0] || '';
  const withoutPrefix = string.replace(new RegExp(`^(${inferPrefix})`), '');
  return lowercaseFirstLetter ? toLowercaseFirstLetter(withoutPrefix) : withoutPrefix;
}
