import { getProps, getGraphInstance } from './global';
import { NsGraph } from '../interface';

export const Log = window.console;

export const getGraphData = () => {
  const x6Graph = getGraphInstance();
  if (!x6Graph) {
    return null;
  }
  const x6Nodes = x6Graph.getNodes();
  const x6Edges = x6Graph.getEdges();
  const nodes = x6Nodes.map((node) => {
    const data = node.getData<NsGraph.INodeConfig>();
    const position = node.position();
    const size = node.size();
    return {
      ...data,
      ...position,
      ...size,
    };
  });

  const edges = x6Edges.map((edge) => {
    const data = edge.getData<NsGraph.IEdgeConfig>();
    const attrs = edge.getAttrs();
    return {
      ...data,
      attrs,
    };
  });
  const graphData = { nodes, edges };

  return graphData;
};

/**
 * 防抖函数
 * @param func 执行函数
 * @param delay 延迟时间 ms
 * @param immediate 是否立即执行
 */
export const debounce = (func: Function, delay: number, immediate: boolean = false): Function => {
  let timer: number | undefined;

  return function (this: unknown, ...args: any[]) {
    let that = this;
    if (immediate) {
      func.apply(that, args);
      immediate = false;
      return;
    }
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(that, args);
    }, delay);
  };
};

export const getGraphHistory = () => {
  return getGraphInstance().history;
};

/** 更新配置时通知上传执行保存 */
export const onConfigChange = debounce(
  (config: { type: string }) => {
    const configChange = getProps('onConfigChange');
    if (!configChange || typeof configChange !== 'function') {
      return;
    }
    return configChange({
      data: getGraphData(),
      ...config,
    });
  },
  300,
  true,
);
