import isArrayLike from './is-array-like';

const map = <T, G>(arr: T[], func: (v: T, idx: number) => G): G[] => {
  if (!isArrayLike(arr)) {
    // @ts-ignore
    return arr;
  }
  const result: G[] = [];

  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    result.push(func(value, index));
  }
  return result;
};

export default map;
