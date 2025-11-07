export function groupBy<T extends { [key: string]: any }>(source: T[], by: keyof T) {
  return source.reduce((acc, curr) => {
    (acc[curr[by]] = acc[curr[by]] || []).push(curr);
    return acc;
  }, {} as { [key in T[keyof T]]: T[] });
}
