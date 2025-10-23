import isArrayLike from './is-array-like';

export default function head(o: unknown) {
  if (isArrayLike(o)) {
    return (<ArrayLike<any>>o)[0];
  }
  return undefined;
}
