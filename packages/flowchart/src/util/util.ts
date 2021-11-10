import { getProps, getGraphInstance, getAppInstance } from './global';
import { NsGraph } from '../interface';
import { XFlowGraphCommands, NsGraphCmd } from '@ali/xflow';

export const Log = window.console;

export const getGraphData = async () => {
  const app = getAppInstance();
  let data;
  await app.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
    saveGraphDataService: async (graphMeta, graphData) => {
      data = graphData;
    },
  } as NsGraphCmd.SaveGraphData.IArgs);
  return data;
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
  (config) => {
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
