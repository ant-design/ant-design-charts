import { CommonConfig, IGraph, INode, IEdge } from '../interface';

// 交互
export const bindStateEvents = (graph: IGraph, cfg?: Partial<CommonConfig> | undefined) => {
  const { nodeCfg = {}, edgeCfg = {} } = cfg ?? {};
  const { nodeStateStyles } = nodeCfg;
  const { edgeStateStyles } = edgeCfg;
  /**
   * 存储交互状态
   * id: [[endActive, endDefalut], [startActive, startDefalut]]
   */
  const statusCache = {};

  const updateArrowFill = (item: IEdge, endArrowFill: string, stratArrowFill: string) => {
    graph.updateItem(item, {
      style: {
        endArrow: !!endArrowFill && {
          fill: endArrowFill,
        },
        startArrow: !!stratArrowFill && {
          fill: stratArrowFill,
        },
      },
    });
  };

  const setState = (item: INode | IEdge, name: string, status: boolean) => {
    status ? item.toFront() : item.toBack();
    const { endArrow, startArrow } = item.getModel().style ?? {};

    if (endArrow || startArrow) {
      if (!statusCache[item.getID()]) {
        // @ts-ignore
        const { fill: endArrowFill } = endArrow ?? {};
        // @ts-ignore
        const { fill: startArrowFill } = startArrow ?? {};
        const hoverStatus = item.getModel().style?.[name]?.stroke;
        statusCache[item.getID()] = [
          [hoverStatus ?? endArrowFill, endArrowFill],
          [hoverStatus ?? startArrowFill, startArrowFill],
        ];
      }
      const fill = statusCache[item.getID()];
      updateArrowFill(item as IEdge, endArrow && fill[0][status ? 0 : 1], startArrow && fill[1][status ? 0 : 1]);
    }
    graph.setItemState(item, name, status);
  };
  const getRelationItems = (currentItem: INode | IEdge, name: string, status: boolean, type: string) => {
    const relationItems =
      type === 'node'
        ? graph.findAll('edge', (edge: IEdge) => edge.getSource() === currentItem || edge.getTarget() === currentItem)
        : graph.findAll(
            'node',
            (node: INode) =>
              (currentItem as IEdge).getSource().get('id') === node.get('id') ||
              (currentItem as IEdge).getTarget().get('id') === node.get('id'),
          );
    const highlightItems = [currentItem].concat(relationItems);

    highlightItems.forEach((item) => {
      setState(item, name, status);
    });
  };
  if (nodeStateStyles) {
    graph.on('node:mouseenter', (evt) => {
      const item = evt.item as INode;
      getRelationItems(item, 'hover', true, 'node');
    });
    graph.on('node:mouseleave', (evt) => {
      const item = evt.item as INode;
      getRelationItems(item, 'hover', false, 'node');
    });
  }
  if (edgeStateStyles) {
    graph.on('edge:mouseenter', (evt) => {
      const item = evt.item as INode;
      getRelationItems(item, 'hover', true, 'edge');
    });
    graph.on('edge:mouseleave', (evt) => {
      const item = evt.item as INode;
      getRelationItems(item, 'hover', false, 'edge');
    });
  }
};
