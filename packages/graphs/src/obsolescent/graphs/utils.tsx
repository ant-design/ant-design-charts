import G6, { IGraph, IG6GraphEvent, INode, IGroup, Graph } from '@antv/g6';
import { deepClone, Log } from '../../utils';
import { CardNodeConfig, MiniMapConfig, CardModelConfig, GraphConfig } from './types';
import { defaultMinimapCfg } from './constants';

export const getGraphSize = (
  width: number | undefined,
  height: number | undefined,
  container: React.RefObject<HTMLDivElement>,
): number[] => {
  let CANVAS_WIDTH;
  let CANVAS_HEIGHT;
  if (container && container.current) {
    CANVAS_WIDTH = container.current.offsetWidth;
    CANVAS_HEIGHT = container.current.offsetHeight || 500;
  }
  if ((!width && !CANVAS_WIDTH) || (!height && !CANVAS_HEIGHT)) {
    Log.warn('请为 Graph 指定 width 与 height！否则将使用默认值 500 * 500');
    return [500, 500];
  }
  return [width || CANVAS_WIDTH || 500, height || CANVAS_HEIGHT || 500];
};

// 展开&折叠事件
export const bindDefaultEvents = (graph: IGraph, collapseExpand?: boolean) => {
  if (collapseExpand) {
    const onClick = (e: IG6GraphEvent) => {
      const item = e.item as INode;
      if (e.target.get('name') === 'collapse-icon') {
        graph.updateItem(item, {
          collapsed: !item.getModel().collapsed,
        });
        graph.layout();
      }
    };
    graph.on('node:click', (e: IG6GraphEvent) => {
      onClick(e);
    });
    graph.on('node:touchstart', (e: IG6GraphEvent) => {
      onClick(e);
    });
  }
};

// 默认箭头样式
export const getDefaultEdgeArrowCfg = (d: number = 0, arrowType = 'vee', fill: string = '#ccc') => {
  return {
    endArrow: {
      path: G6.Arrow[arrowType](10, 10, d),
      fill,
      d,
    },
  };
};

// 统一处理 text&style
export const getContentAndStyle = (cfg: CardNodeConfig) => {
  if (typeof cfg === 'string' || typeof cfg === 'number') {
    return {
      text: cfg,
    };
  }
  const { content, style } = cfg;
  return {
    text: content,
    style,
  };
};

// 统一处理 config，支持回调
export const getConfig = (source: unknown, item: IGroup | undefined, cfg?: CardModelConfig) => {
  if (typeof source === 'function') {
    return source(item, cfg);
  }
  return source || {};
};

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 同一页面存在多 graph 时需要指定 graphId
export const getGraphId = (graph: { current?: string }) => {
  if (graph.current) {
    return graph.current;
  }
  graph.current = `IndentedTreeGraph-${uuid()}`;
  return graph.current;
};

export const renderGraph = (graph: IGraph, data: any) => {
  const originData = deepClone(data);
  graph.data(originData);
  graph.render();
};

export const processMinimap = (cfg: MiniMapConfig | undefined = {}, graph: Graph): void => {
  if (!graph || graph.destroyed) return;
  if (cfg.show) {
    const curMminimapCfg = Object.assign(defaultMinimapCfg, cfg);
    const minimap = new G6.Minimap({
      ...curMminimapCfg,
    });

    graph.addPlugin(minimap);
    // return minimap;
  }
  return null;
};

/**
 * min ma
 */
export const getMarkerPosition = (direction: string = 'right', size: number[]) => {
  const [width, height] = size;
  let x = 0;
  let y = 0;
  switch (direction) {
    case 'top':
      x = width / 2;
      y = 0;
      break;
    case 'right':
      x = width;
      y = height / 2;
      break;
    case 'bottom':
      x = width / 2;
      y = height;
      break;
    case 'left':
      x = 0;
      y = height / 2;
      break;
  }

  return { x, y };
};

/**
 * 设置 props 默认值
 * props 会在对应图表和 hooks 里面使用，不想加个很长的赋值表达式。
 * layout 使用 merge
 */
export const useProps = (props: Partial<GraphConfig>, defaultProps: Partial<GraphConfig>) => {
  return {
    ...defaultProps,
    ...props,
    layout: {
      ...defaultProps?.layout,
      ...props?.layout,
    },
  };
};
