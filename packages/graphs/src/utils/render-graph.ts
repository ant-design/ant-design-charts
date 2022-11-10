import { IGraph } from '../interface';
import EventData from './event-data';
import { deepClone } from './deep-clone';
import { setTag } from './set-tag';
import { getLevelData } from './get-level-data';
import { runAsyncEvent } from './async-events';

export const renderGraph = (graph: IGraph, data: any, level?: number) => {
  let originData = deepClone(data);
  let tagData = originData;
  if (level) {
    tagData = setTag(data);
    originData = getLevelData(tagData, level);
  }
  graph.data(originData);
  graph.set('eventData', new EventData(tagData));
  graph.render();
  // 关闭局部刷新，各种 bug
  graph.get('canvas').set('localRefresh', false);
  runAsyncEvent(graph.get('id'));
};
