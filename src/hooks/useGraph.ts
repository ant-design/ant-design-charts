import { useRef, useEffect } from 'react';
import { Graph, TreeGraph, ModeType, INode, IEdge } from '@antv/g6';
import { isObject, isString, isEqual } from '@antv/util';
import {
  getGraphSize,
  processMinimap,
  getCommonConfig,
  getArrowCfg,
  getMarkerPosition,
} from '../graphs/utils';

import { deepClone } from '../util';

export interface Base extends Graph {
  current?: Graph;
}

export default function useGraph(
  graphInstance: Graph | TreeGraph | undefined,
  config: any,
  container: React.MutableRefObject<null>,
) {
  const graphHook = useRef<Base>();
  const {
    data,
    width,
    height,
    layout,
    minimapCfg,
    behaviors,
    fitCenter,
    nodeCfg,
    edgeCfg,
    markerCfg,
  } = config;

  const graphOptions = useRef<any>();
  // data 单独处理，会被 G6 修改
  const graphData = useRef<any>();

  const changeData = () => {
    graphInstance?.changeData(data);
    graphInstance?.get('eventData')?.setData(data);
    if (fitCenter) {
      graphInstance?.fitCenter();
    }
  };

  const updateLayout = () => {
    graphInstance?.updateLayout(layout);
    if (fitCenter) {
      graphInstance?.fitCenter();
    }
  };

  const updateNodes = () => {
    if (!graphInstance) {
      return;
    }
    const {
      type: nodeType,
      anchorPoints: nodeAnchorPoints,
      style: nodeStyle,
      title: nodeLabelCfg,
    } = nodeCfg ?? {};

    graphInstance.getNodes().forEach((node: INode) => {
      graphInstance!.updateItem(node, {
        nodeCfg,
        markerCfg,
        type: nodeType,
        style: nodeStyle,
        anchorPoints: nodeAnchorPoints,
        labelCfg: nodeLabelCfg,
      });
    });
  };

  const updateEdges = () => {
    if (!graphInstance) {
      return;
    }
    const {
      type: edgeType,
      style: edgeStyle,
      startArrow: startArrowCfg,
      endArrow: endArrowCfg,
      label: labelCfg,
    } = edgeCfg ?? {};
    graphInstance.getEdges().forEach((edge: IEdge) => {
      // 资金流向图
      if (edgeType === 'fund-line') {
        graphInstance!.updateItem(edge, {
          edgeCfg,
        });
      } else {
        const edgeCfgModel = edge.getModel();
        const startArrow = getArrowCfg(startArrowCfg, edgeCfgModel);
        const endArrow = getArrowCfg(endArrowCfg, edgeCfgModel);
        const { style, content } = labelCfg ?? {};
        graphInstance!.updateItem(edge, {
          type: edgeType,
          label: getCommonConfig(content, edgeCfgModel, graphInstance),
          labelCfg: {
            style: getCommonConfig(style, edgeCfgModel, graphInstance),
          },
          style: {
            stroke: '#ccc',
            startArrow,
            endArrow,
            ...(typeof edgeStyle === 'function'
              ? edgeStyle(edgeCfgModel, graphInstance)
              : edgeStyle),
          },
        });
      }
    });
  };

  // 目前仅支持更新位置
  const updateMarker = () => {
    if (!graphInstance) {
      return;
    }
    graphInstance.getNodes().forEach((node: INode) => {
      const { position = 'right' } =
        typeof markerCfg === 'function' ? markerCfg(node.getModel(), node.get('group')) : markerCfg;
      const { width, height } = node.getBBox();
      const markerShape = node
        .get('group')
        .get('children')
        .find((item: INode) => item.get('name') === 'collapse-icon');
      if (markerShape) {
        markerShape?.attr({
          ...getMarkerPosition(position, [width, height]),
        });
      }
    });
  };

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      if (isEqual(data, graphData.current)) {
        return;
      }
      graphData.current = deepClone(data);
      changeData();
    }
  }, [data]);

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      if (isEqual(config, graphOptions.current)) {
        return;
      }
      if (!isEqual(layout, graphOptions.current?.layout)) {
        updateLayout();
      }
      if (!isEqual(minimapCfg, graphOptions.current?.minimapCfg)) {
        processMinimap(minimapCfg, graphInstance);
      }
      if (!isEqual(nodeCfg, graphOptions.current?.nodeCfg)) {
        updateNodes();
      }
      if (!isEqual(edgeCfg, graphOptions.current?.edgeCfg)) {
        updateEdges();
      }
      if (!isEqual(markerCfg, graphOptions.current?.markerCfg)) {
        updateMarker();
      }
      graphOptions.current = config;
    }
  }, [config]);

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      const graphSize = getGraphSize(width, height, container);
      graphInstance.changeSize(graphSize[0], graphSize[1]);
    }
  }, [container, width, height]);

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      const { default: defaultMode } = graphInstance.get('modes');
      const removingBehaviors: string[] = [];
      defaultMode.forEach((be: string | ModeType) => {
        if (isObject(be)) {
          removingBehaviors.push(be.type);
        } else if (isString(be)) {
          removingBehaviors.push(be);
        }
      });
      graphInstance.removeBehaviors(removingBehaviors, 'default');
      graphInstance.addBehaviors(behaviors, 'default');
    }
  }, [behaviors]);

  useEffect(() => {
    graphHook.current = graphInstance;
    return () => {
      if (graphInstance && !graphInstance.destroyed) {
        graphInstance!.destroy();
        graphInstance = undefined;
      }
    };
  }, []);

  return {
    graphHook,
  };
}
