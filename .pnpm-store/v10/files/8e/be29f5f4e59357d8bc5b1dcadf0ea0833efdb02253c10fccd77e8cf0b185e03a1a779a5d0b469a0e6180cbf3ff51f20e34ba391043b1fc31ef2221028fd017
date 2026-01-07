import { CreateTransformer } from '../type';
import { scale } from './scale';

/**
 * Apply reflect transformation for current vector.
 * @param args same as scale
 * @returns transformer
 */
export const reflect: CreateTransformer = (params, ...args) => {
  return scale([-1, -1], ...args);
};

/**
 * Apply reflect transformation for current vector.
 * @param args same as scale
 * @returns transformer
 */
export const reflectX: CreateTransformer = (params, ...args) => {
  return scale([-1, 1], ...args);
};

/**
 * Apply reflect transformation for current vector.
 * @param args same as scale
 * @returns transformer
 */
export const reflectY: CreateTransformer = (params, ...args) => {
  return scale([1, -1], ...args);
};
