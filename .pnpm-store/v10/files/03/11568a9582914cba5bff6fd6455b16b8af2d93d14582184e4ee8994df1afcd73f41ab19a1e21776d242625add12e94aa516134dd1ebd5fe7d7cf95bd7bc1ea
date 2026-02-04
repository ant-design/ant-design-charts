import { isFunction } from '@antv/util';

export function getCallbackValue<T = any>(value: any, params: any[]): T {
  return isFunction(value) ? value(...params) : value;
}
