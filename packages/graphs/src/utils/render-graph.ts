import { IGraph, FlowGraphDatum, TreeGraphData } from '../interface';
import EventData from './event-data';
import { deepClone } from './deep-clone';
import { setTreeTag, setFlowTag, getFlowLevelData, getTreeLevelData } from './';
import { runAsyncEvent } from './async-events';

const isFlowData = (data) => data?.nodes instanceof Array && data?.edges instanceof Array;

export const getRenderData = (data: FlowGraphDatum | TreeGraphData, level?: number) => {
  let originData = deepClone(data);
  let tagData = originData;
  if (level) {
    if (isFlowData(data)) {
      tagData = setFlowTag(data as FlowGraphDatum, level);
      originData = getFlowLevelData(tagData, level);
    } else {
      // is tree data
      tagData = setTreeTag(data as TreeGraphData);
      originData = getTreeLevelData(tagData, level);
    }
  }
  return [originData, tagData];
};

export const renderGraph = (graph: IGraph, data: any, level?: number) => {
  const [originData, tagData] = getRenderData(data, level);
  graph.data(originData);
  graph.set('eventData', new EventData(tagData));
  graph.render();
  // 关闭局部刷新，各种 bug
  graph.get('canvas').set('localRefresh', false);
  runAsyncEvent(graph.get('id'));
};
