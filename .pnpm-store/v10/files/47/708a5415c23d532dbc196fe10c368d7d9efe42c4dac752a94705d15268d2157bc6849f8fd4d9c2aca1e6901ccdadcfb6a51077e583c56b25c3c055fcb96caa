const map = {};

export default (prefix?: string): string => {
  prefix = prefix || 'g';
  if (!map[prefix]) {
    map[prefix] = 1;
  } else {
    map[prefix] += 1;
  }
  return prefix + map[prefix];
};
