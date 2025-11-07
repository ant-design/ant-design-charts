import { clone, min, minBy, max, maxBy } from '@antv/util';
import type { Data } from './types';

/**
 * 获得数据的最值
 */
export function getRange(data: Data): [number, number] {
  if (data.length === 0) return [0, 0];
  return [
    min(minBy(data, (arr) => min(arr) || 0) as number[]),
    max(maxBy(data, (arr) => max(arr) || 0) as number[]),
  ] as [number, number];
}

/**
 * 数据转换为堆叠数据
 */
export function getStackedData(_: Data): Data {
  const data = clone(_);
  // 生成堆叠数据
  const datumLen = data[0].length;
  // 上一个堆叠的数据值，分别记录正负
  const [positivePrev, negativePrev] = [Array(datumLen).fill(0), Array(datumLen).fill(0)];
  for (let i = 0; i < data.length; i += 1) {
    const datum = data[i];
    for (let j = 0; j < datumLen; j += 1) {
      if (datum[j] >= 0) {
        datum[j] += positivePrev[j];
        positivePrev[j] = datum[j];
      } else {
        datum[j] += negativePrev[j];
        negativePrev[j] = datum[j];
      }
    }
  }
  return data;
}
