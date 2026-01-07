export function omit(obj: Record<string, any>, keys: string | string[]) {
  const res: Record<string, any> = {};
  const innerKeys = Array.isArray(keys) ? keys : [keys];
  for (const key in obj) {
    if (!innerKeys.includes(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}
