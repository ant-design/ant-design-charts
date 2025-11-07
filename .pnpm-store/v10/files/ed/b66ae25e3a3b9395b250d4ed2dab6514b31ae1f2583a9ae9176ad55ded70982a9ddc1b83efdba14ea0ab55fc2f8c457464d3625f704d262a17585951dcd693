export function group(array: any[], keyFunc: Function) {
  const grouped = new Map();

  array.forEach((item) => {
    const key = keyFunc(item);
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(item);
  });

  return grouped;
}
