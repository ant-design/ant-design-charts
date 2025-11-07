import { identity } from '@antv/util';

export function compose<T>(fn?: (x: T) => T, ...rest: ((x: T) => T)[]) {
  return fn ? rest.reduce((total, current) => (x: T) => current(total(x)), fn) : identity;
}
