export type PrefixObject<T extends Record<string, any>, P extends string> = {
  [K in keyof T as K extends string ? `${P}${Capitalize<K>}` : never]?: T[K];
};
