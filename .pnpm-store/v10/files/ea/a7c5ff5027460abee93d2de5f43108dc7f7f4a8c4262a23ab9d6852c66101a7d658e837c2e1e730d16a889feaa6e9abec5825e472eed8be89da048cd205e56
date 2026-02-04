/**
 * Recursively Update a deep property from a given path
 *
 * @param Keys array of keeps into the object
 * @param U The object to change
 * @param T the next type at the key path
 *
 * <created by @harris-miller>
 */
export type DeepModify<Keys extends readonly PropertyKey[], U, T> =
  Keys extends [infer K, ...infer Rest]
    ? K extends keyof U
      ? Rest extends readonly []
        ? Omit<U, K> & Record<K, T>
        : Rest extends readonly PropertyKey[]
          ? Omit<U, K> & Record<K, DeepModify<Rest, U[K], T>>
          : never
      : never
    : never;
