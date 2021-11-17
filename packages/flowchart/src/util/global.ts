import { MutableRefObject } from 'react';
import { IApplication } from '@antv/xflow';
import { FlowchartProps, IFlowchartGraph as IGraph } from '../interface';

// 解决 xflow hooks 获取不到上层配置
export const globalProps = {
  config: {},
  container: undefined,
};

/** 设置全局状态 */
export const setProps = (props: FlowchartProps, container?: MutableRefObject<HTMLDivElement>) => {
  globalProps.config = props;
  globalProps.container = container;
};

const graphInstance = new Map<string, IGraph>();
const appInstance = new Map<string, IApplication>();

export const setInstance = (x6graph: IGraph, app: IApplication) => {
  graphInstance.set('x6graph', x6graph);
  appInstance.set('app', app);
};

export const getGraphInstance = () => {
  return graphInstance.get('x6graph') as IGraph;
};

export const getAppInstance = () => {
  return appInstance.get('app');
};

/** 获取全局状态 */
export const getProps = (key: string) => {
  return globalProps.config?.[key];
};
export const getContainer = (type = 'container') => {
  return globalProps[type]?.current;
};
