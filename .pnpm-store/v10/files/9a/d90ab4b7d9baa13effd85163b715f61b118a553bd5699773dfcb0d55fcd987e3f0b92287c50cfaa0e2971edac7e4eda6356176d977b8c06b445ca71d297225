import { isAnyArray } from '..';

test('isArray', () => {
  expect(isAnyArray(1)).toBe(false);
  expect(isAnyArray('ab')).toBe(false);
  expect(isAnyArray({ a: 1 })).toBe(false);

  expect(isAnyArray([])).toBe(true);
  expect(isAnyArray([1, 2, 3])).toBe(true);
  expect(isAnyArray(new Uint16Array(2))).toBe(true);
  expect(isAnyArray(new BigUint64Array(1))).toBe(false);
});
