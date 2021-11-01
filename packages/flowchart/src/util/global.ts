import { MutableRefObject } from 'react';
import { FlowchartProps, IGraph } from '../interface';

// 解决 xflow hooks 获取不到上层配置
export const globalProps = {
  config: {},
  container: undefined,
  miniMapcontainer: undefined,
};

/** 设置全局状态 */
export const setProps = (
  props: FlowchartProps,
  container?: MutableRefObject<HTMLDivElement>,
  miniMapcontainer?: MutableRefObject<HTMLDivElement>,
) => {
  globalProps.config = props;
  globalProps.container = container;
  globalProps.miniMapcontainer = miniMapcontainer;
};

const graphInstance = new Map<string, IGraph>();

export const setGrapgInstance = (x6graph: IGraph) => {
  graphInstance.set('x6graph', x6graph);
};

export const getGraphInstance = () => {
  return graphInstance.get('x6graph') as IGraph;
};

/** 获取全局状态 */
export const getProps = (key: string) => {
  return globalProps.config?.[key];
};
export const getContainer = (type = 'container') => {
  return globalProps[type]?.current;
};
