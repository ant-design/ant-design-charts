import { defaultNodeSize } from '../constants';

export const getSize = (size: number | number[] | undefined) => {
  if (Array.isArray(size)) {
    return size;
  }
  return size ? [size, size] : defaultNodeSize;
};
