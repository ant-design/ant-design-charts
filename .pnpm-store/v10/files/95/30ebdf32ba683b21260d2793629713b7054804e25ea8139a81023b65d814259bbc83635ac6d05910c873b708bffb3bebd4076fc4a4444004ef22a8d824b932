export function sampling<T extends any[]>(data: T, size: number): T {
  if (data.length <= size) return data;
  const step = Math.floor(data.length / size);
  const result: T = [] as any;
  for (let i = 0; i < data.length; i += step) {
    result.push(data[i]);
  }
  return result;
}
