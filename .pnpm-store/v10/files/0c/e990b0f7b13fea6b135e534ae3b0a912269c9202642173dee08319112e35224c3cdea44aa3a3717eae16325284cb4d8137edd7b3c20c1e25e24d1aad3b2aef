function findIndex<T>(arr: T[], predicate: (item: T, idx?: number) => boolean, fromIndex: number = 0): number {
  for (let i = fromIndex; i < arr.length; i++) {
    if (predicate(arr[i], i)) {
      // 找到终止循环
      return i;
    }
  }

  return -1;
}

export default findIndex;
