import { getProps, getGraphInstance, getAppInstance } from './global';
import { XFlowGraphCommands, NsGraphCmd } from '@antv/xflow';

export const Log = window.console;

export const getGraphData = async (flowchartId: string) => {
  const app = getAppInstance(flowchartId);
  let data;
  await app.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
    saveGraphDataService: async (graphMeta, graphData) => {
      data = graphData;
    },
  } as NsGraphCmd.SaveGraphData.IArgs);
  return data;
};

export const excLoadData = async (app, data) => {
  if (!data?.nodes?.length) {
    return;
  }
  const res = await app.executeCommand(XFlowGraphCommands.LOAD_DATA.id, {
    loadDataService: async () => {
      return data;
    },
  } as NsGraphCmd.GraphLoadData.IArgs);
  const { graphData } = res?.contextProvider()?.getResult();
  /** 3. 画布内容渲染 */
  await app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
    graphData,
  });
};

export const getFlowchartId = (e) => {
  let currentNode = e?.e?.currentTarget;
  if (!currentNode) {
    return document.getElementsByClassName('xflow-canvas-container')[0]?.getAttribute('data-flowchart-id');
  }
  let containter = null;
  while (!containter) {
    const current = currentNode.getElementsByClassName('xflow-canvas-container');
    if (current?.length > 0) {
      containter = current;
    }
    currentNode = currentNode.parentNode;
  }
  return containter[0]?.getAttribute('data-flowchart-id');
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

export const getGraphHistory = (flowchartId: string) => {
  return getGraphInstance(flowchartId).history;
};

/** 更新配置时通知上传执行保存 */
export const onConfigChange = debounce(
  (config, flowchartId) => {
    const configChange = getProps(flowchartId, 'onConfigChange');
    if (!configChange || typeof configChange !== 'function') {
      return;
    }
    return configChange({
      data: getGraphData(flowchartId),
      ...config,
    });
  },
  300,
  true,
);
