import isNil from './is-nil';
import isArraylike from './is-array-like';

export default function size(o: unknown) {
  if (isNil(o)) {
    return 0;
  }
  if (isArraylike(o)) {
    return (<ArrayLike<any>>o).length;
  }
  return Object.keys(<object>o).length;
}
