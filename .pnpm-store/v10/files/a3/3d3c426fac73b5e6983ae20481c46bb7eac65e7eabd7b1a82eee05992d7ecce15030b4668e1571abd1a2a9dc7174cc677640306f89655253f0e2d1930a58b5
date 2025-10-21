export interface flruCache<T = any> {
  clear(isPartial: boolean): void;
  has(key: string): boolean;
  get(key: string): undefined | T;
  set(key: string, value: T): void;
}

declare const flru: <T = any>(max: number) => flruCache<T>;

export default flru;
