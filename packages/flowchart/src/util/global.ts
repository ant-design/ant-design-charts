import { MutableRefObject } from 'react';
import { IApplication } from '@antv/xflow';
import { FlowchartProps, IFlowchartGraph as IGraph } from '../interface';

// 解决 xflow hooks 获取不到上层配置
interface IGlobalProps {
  [key: string]: {
    config: object;
    container?: MutableRefObject<HTMLDivElement>;
  };
}
export const globalProps: IGlobalProps = {};

/** 设置全局状态 */
export const setProps = (props: FlowchartProps, flowchartId: string, container?: MutableRefObject<HTMLDivElement>) => {
  globalProps[flowchartId] = {
    config: props,
    container,
  };
};

const graphInstance = new Map<string, IGraph>();
const appInstance = new Map<string, IApplication>();

export const setInstance = (x6graph: IGraph, app: IApplication, flowchartId: string) => {
  graphInstance.set(`${flowchartId}-x6graph`, x6graph);
  appInstance.set(`${flowchartId}-app`, app);
};

export const getGraphInstance = (flowchartId: string) => {
  return graphInstance.get(`${flowchartId}-x6graph`) as IGraph;
};

export const getAppInstance = (flowchartId: string) => {
  return appInstance.get(`${flowchartId}-app`);
};

/** 获取全局状态 */
export const getProps = (flowchartId: string, key: string) => {
  return globalProps[flowchartId]?.config?.[key];
};
export const getContainer = (flowchartId: string, type = 'container') => {
  return globalProps[flowchartId]?.[type]?.current;
};
