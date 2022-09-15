import { countBy } from './count-by';
import { GraphData } from '../interface';

export const getCenterNode = (data: GraphData) => {
  const { nodes, edges } = data;
  if (nodes.length === 1) {
    return nodes[0].id;
  }
  const linkCount: string[] = [];
  edges.forEach((item) => {
    linkCount.push(item.source);
  });
  const timesObj = countBy(linkCount);
  let maxTimes = 0;
  let maxTimeKey = '';
  for (let k in timesObj) {
    if (timesObj.hasOwnProperty(k) && timesObj[k] > maxTimes) {
      maxTimes = timesObj[k];
      maxTimeKey = k;
    }
  }
  return maxTimeKey;
};
