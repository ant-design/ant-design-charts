import { TickMethod } from '../types';
import { logs, pows } from './log';

export const d3LogNice: TickMethod = (a, b, _, base) => {
  const shouldReflect = a < 0;
  const log = logs(base, shouldReflect);
  const pow = pows(base, shouldReflect);
  const r = a > b;
  const min = r ? b : a;
  const max = r ? a : b;
  const niceDomain = [pow(Math.floor(log(min))), pow(Math.ceil(log(max)))];
  return r ? niceDomain.reverse() : niceDomain;
};
