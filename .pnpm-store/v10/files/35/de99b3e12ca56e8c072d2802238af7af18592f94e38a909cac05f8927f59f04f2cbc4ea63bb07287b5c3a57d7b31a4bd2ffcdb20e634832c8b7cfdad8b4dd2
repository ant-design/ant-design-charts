import { isAnyArray } from 'is-any-array';

import WrapperMatrix1D from './WrapperMatrix1D';
import WrapperMatrix2D from './WrapperMatrix2D';

export function wrap(array, options) {
  if (isAnyArray(array)) {
    if (array[0] && isAnyArray(array[0])) {
      return new WrapperMatrix2D(array);
    } else {
      return new WrapperMatrix1D(array, options);
    }
  } else {
    throw new Error('the argument is not an array');
  }
}
