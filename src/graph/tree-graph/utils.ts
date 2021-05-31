import { INode, IG6GraphEvent, IGraph, IGroup } from '@antv/g6';
import { NodeConfig } from './customItems';

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

// 统一处理 text&style
export const getContentAndStyle = (cfg: NodeConfig) => {
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
export const getConfig = (cfg: any, item: IGroup | undefined) => {
  if (typeof cfg === 'function') {
    return cfg(item);
  }
  return cfg || {};
};

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
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
