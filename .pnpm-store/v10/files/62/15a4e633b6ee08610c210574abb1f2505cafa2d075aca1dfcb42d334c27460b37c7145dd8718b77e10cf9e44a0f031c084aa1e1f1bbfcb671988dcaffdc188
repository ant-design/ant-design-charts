import { isAnyArray } from 'is-any-array';

export default function min(input, options = {}) {
  if (!isAnyArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  const { fromIndex = 0, toIndex = input.length } = options;

  if (
    fromIndex < 0 ||
    fromIndex >= input.length ||
    !Number.isInteger(fromIndex)
  ) {
    throw new Error('fromIndex must be a positive integer smaller than length');
  }

  if (
    toIndex <= fromIndex ||
    toIndex > input.length ||
    !Number.isInteger(toIndex)
  ) {
    throw new Error(
      'toIndex must be an integer greater than fromIndex and at most equal to length',
    );
  }

  let minValue = input[fromIndex];
  for (let i = fromIndex + 1; i < toIndex; i++) {
    if (input[i] < minValue) minValue = input[i];
  }
  return minValue;
}
