import { cloneDeep, uniqBy } from 'lodash';
import { getNodeMaxSize } from './text';
import type {
  OriginData,
  LayerOrder,
  OriginNode,
  GraphNode,
  GraphEdge,
  ConvGraphData,
  RatioMethod,
  PlainObject,
} from '../../types';

// 数据转换：原始节点数据 -> G6渲染节点数据
const transformOriginNodes = (
  originNodes: OriginNode[],
  layerOrder: LayerOrder,
  size: number,
): GraphNode[] => {
  // 过滤得到节点中实际存在的有效层级
  const effectiveLayer =
    (Array.isArray(layerOrder) &&
      layerOrder.filter((layerName) => originNodes.find((node) => node.layerName === layerName))) ||
    [];
  return originNodes.map((originNode) => {
    const layer = effectiveLayer?.findIndex((item) => item === originNode.layerName) + 1; // dagre布局指定层级有bug，layer暂时从1开始
    return {
      id: originNode.id, // id
      label: originNode.name || '', // 名称
      layer: layer !== -1 ? layer : undefined, // @antv/layout dagre 加了layer布局有bug，暂时这样处理
      style: {
        stroke: '#B8C3D9',
        textColor: '#000',
        ...(originNode.style || {}),
      },
      size,
      custom: {
        layerName: originNode.layerName, // 所属层级名称
        measure: originNode.measure, // 主指标
        relatedMeasures: originNode.relatedMeasures, // 相关指标
        compareMeasures: originNode.compareMeasures, // 同环比指标
      },
      data: cloneDeep(originNode),
      x: originNode.x,
      y: originNode.y,
    };
  });
};

// 数据转换：原始边数据 -> G6渲染边数据
const transformOriginEdges = (
  data: OriginData,
  layerOrder: string[],
  segmLayer: string,
  ratioMethod: RatioMethod,
): GraphEdge[] => {
  const { nodes: originNodes = [], edges: originEdges = [] } = data;

  return originEdges
    .map((originEdge) => {
      const sourceNode = originNodes.find((node) => node.id === originEdge.source);
      const targetNode = originNodes.find((node) => node.id === originEdge.target);
      if (!sourceNode || !targetNode) {
        return undefined;
      }

      // 自动计算边的比率和名称
      let autoRatio = 0;
      let name = '';
      switch (ratioMethod) {
        case 'both':
          // 包含占比和分流
          // 找出分段层级的层级值
          const segmLayerValue = layerOrder.findIndex((item) => item === segmLayer);
          // 找出终点的层级值
          const targetLayerValue = layerOrder.findIndex((item) => item === targetNode?.layerName);
          // 同层级的边、分段层级的入边都是占比边, 比率 = 边上指标 / 终点的主指标
          if (!segmLayer || targetLayerValue <= segmLayerValue) {
            autoRatio = originEdge?.measure?.value / targetNode?.measure?.value;
            name = '占比';
          } else {
            // 分段层级的出边都是分流边, 比率 = 边上指标 / 起点的主指标
            autoRatio = originEdge?.measure?.value / sourceNode?.measure?.value;
            name = '分流';
          }
          break;
        case 'splitFlow':
          // 均是分流：比率 = 边上指标 / 起点的主指标
          autoRatio = originEdge?.measure?.value / sourceNode?.measure?.value;
          name = '分流';
          break;
        case 'proportion':
          // 均是占比：比率 = 边上指标 / 终点的主指标
          autoRatio = originEdge?.measure?.value / targetNode?.measure?.value;
          name = '占比';
          break;
        default:
          // 不展示转化比率
          autoRatio = undefined;
          name = '';
          break;
      }

      const ratio = originEdge.ratio || autoRatio; // 优先使用edge数据里的ratio
      const formatRatio =
        !isNaN(ratio) && ratio !== Infinity
          ? Number((ratio * 100).toString().match(/^\d+(?:\.\d{0,2})?/))
          : '-'; // 比率最多保留2位小数
      const showRatio = `${formatRatio}%`;
      const label = originEdge.name || name; // 优先使用edge数据里的name

      return {
        id: originEdge.id,
        source: originEdge.source,
        target: originEdge.target,
        label: autoRatio !== undefined ? `${label} ${showRatio}` : '', // 名称 比率%, 不开启转化指标的时候不展示
        style: {
          stroke: '#B8C3D9',
          labelFill: '#000',
          highlightColor: '#3572F9',
          ...(originEdge.style || {}),
        },
        custom: {
          ratio,
          formatRatio,
          showRatio,
          sourceNode,
          targetNode,
          label,
        },
        data: cloneDeep(originEdge),
      };
    })
    .filter((edge) => !!edge);
};

// 数据转换：原始数据 -> G6渲染数据
export const transformOriginData = (
  originData: OriginData,
  layerOrder: LayerOrder = [],
  segmLayer: string,
  ratioMethod: RatioMethod,
): ConvGraphData => {
  const { nodes: originNodes = [] } = originData;
  // 节点去重
  const uniqNodes = uniqBy(originNodes, 'id');
  // 获取所有节点中最大的宽作为节点size
  const size = getNodeMaxSize(uniqNodes);
  const nodes = transformOriginNodes(uniqNodes, layerOrder, size);
  const edges = transformOriginEdges(originData, layerOrder, segmLayer, ratioMethod);
  return {
    nodes,
    edges,
  };
};
