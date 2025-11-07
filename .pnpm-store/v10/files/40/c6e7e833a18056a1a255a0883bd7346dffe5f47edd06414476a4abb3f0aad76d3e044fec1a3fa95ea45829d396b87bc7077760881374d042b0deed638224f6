import min from '..';

describe('array-min', () => {
  let typedArray = new Uint16Array(3);
  typedArray[0] = 1;
  typedArray[1] = 2;
  typedArray[2] = 3;

  it('should return the min', () => {
    expect(min([0])).toBe(0);
    expect(min([1])).toBe(1);
    expect(min([1, 2])).toBe(1);
    expect(min([1, 2, 1])).toBe(1);
    expect(min([3, 2, 1])).toBe(1);
    expect(min(typedArray)).toBe(1);

    expect(min([3, 2, 1], { fromIndex: 0, toIndex: 2 })).toBe(2);
    expect(min([3, 2, 1], { fromIndex: 0, toIndex: 3 })).toBe(1);
    expect(min([3, 2, 1], { fromIndex: 1, toIndex: 3 })).toBe(1);
    expect(min([3, 2, 1], { fromIndex: 0, toIndex: 2 })).toBe(2);
    expect(min([3, 2, 1], { fromIndex: 2, toIndex: 3 })).toBe(1);
    expect(min(typedArray)).toBe(1);
    expect(min(typedArray, { fromIndex: 0, toIndex: 2 })).toBe(1);
    expect(min(typedArray, { fromIndex: 0, toIndex: 3 })).toBe(1);
  });
  it('should throw on invalid value', () => {
    expect(() => min()).toThrow(/input must be an array/);
    expect(() => min([])).toThrow(/input must not be empty/);

    expect(() => min([1, 2, 3], { fromIndex: -1, toIndex: 2 })).toThrow(
      /fromIndex must be a positive integer smaller than length/,
    );
    expect(() => min([1, 2, 3], { fromIndex: 4, toIndex: 2 })).toThrow(
      /fromIndex must be a positive integer smaller than length/,
    );
    expect(() => min([1, 2, 3], { fromIndex: 3, toIndex: 3 })).toThrow(
      /fromIndex must be a positive integer smaller than length/,
    );
    expect(() => min([1, 2, 3], { fromIndex: 1, toIndex: 0 })).toThrow(
      /toIndex must be an integer greater than fromIndex and at most equal to length/,
    );
    expect(() => min([1, 2, 3], { fromIndex: 1, toIndex: 4 })).toThrow(
      /toIndex must be an integer greater than fromIndex and at most equal to length/,
    );
    expect(() => min([1, 2, 3], { fromIndex: 0, toIndex: 1.5 })).toThrow(
      /toIndex must be an integer greater than fromIndex and at most equal to length/,
    );
    expect(() => min([1, 2, 3], { fromIndex: 1.5, toIndex: 2 })).toThrow(
      /fromIndex must be a positive integer smaller than length/,
    );
  });
});
