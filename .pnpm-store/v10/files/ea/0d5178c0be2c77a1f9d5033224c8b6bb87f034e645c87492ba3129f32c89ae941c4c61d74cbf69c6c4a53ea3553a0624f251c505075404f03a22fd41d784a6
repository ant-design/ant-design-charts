import max from '..';

describe('array-max', () => {
  let typedArray = new Uint16Array(3);
  typedArray[0] = 1;
  typedArray[1] = 2;
  typedArray[2] = 3;

  it('should return the max', () => {
    expect(max([0])).toBe(0);
    expect(max([1])).toBe(1);
    expect(max([1, 2])).toBe(2);
    expect(max([1, 2, 1])).toBe(2);
    expect(max([3, 2, 1])).toBe(3);
    expect(max([3, 2, 1], { fromIndex: 0, toIndex: 2 })).toBe(3);
    expect(max([3, 2, 1], { fromIndex: 0, toIndex: 3 })).toBe(3);
    expect(max([3, 2, 1], { fromIndex: 1, toIndex: 3 })).toBe(2);
    expect(max([3, 2, 1], { fromIndex: 0, toIndex: 2 })).toBe(3);
    expect(max([3, 2, 1], { fromIndex: 2, toIndex: 3 })).toBe(1);
    expect(max(typedArray)).toBe(3);
    expect(max(typedArray, { fromIndex: 0, toIndex: 2 })).toBe(2);
    expect(max(typedArray, { fromIndex: 0, toIndex: 3 })).toBe(3);
  });
  it('should throw on invalid value', () => {
    expect(() => max()).toThrow(/input must be an array/);
    expect(() => max([])).toThrow(/input must not be empty/);
    expect(() => max([1, 2, 3], { fromIndex: -1, toIndex: 2 })).toThrow(
      /fromIndex must be a positive integer smaller than length/,
    );
    expect(() => max([1, 2, 3], { fromIndex: 4, toIndex: 2 })).toThrow(
      /fromIndex must be a positive integer smaller than length/,
    );
    expect(() => max([1, 2, 3], { fromIndex: 3, toIndex: 3 })).toThrow(
      /fromIndex must be a positive integer smaller than length/,
    );
    expect(() => max([1, 2, 3], { fromIndex: 1, toIndex: 0 })).toThrow(
      /toIndex must be an integer greater than fromIndex and at most equal to length/,
    );
    expect(() => max([1, 2, 3], { fromIndex: 1, toIndex: 4 })).toThrow(
      /toIndex must be an integer greater than fromIndex and at most equal to length/,
    );
    expect(() => max([1, 2, 3], { fromIndex: 0, toIndex: 1.5 })).toThrow(
      /toIndex must be an integer greater than fromIndex and at most equal to length/,
    );
    expect(() => max([1, 2, 3], { fromIndex: 1.5, toIndex: 2 })).toThrow(
      /fromIndex must be a positive integer smaller than length/,
    );
  });
});
