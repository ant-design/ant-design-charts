import reduce from './reduce';
import { ObjectType } from './types';

export default <T>(obj: ObjectType<T>, keys: string[]): ObjectType<T> => {
  return reduce(
    obj,
    (r: ObjectType<T>, curr: T, key: string) => {
      if (!keys.includes(key)) {
        r[key] = curr;
      }
      return r;
    },
    {}
  );
}
