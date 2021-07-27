import { useRef, useEffect } from 'react';
import { Graph, TreeGraph, ModeType, INode, IEdge } from '@antv/g6';
import { getGraphSize, processMinimap } from '../graphs/utils';
import { isObject, isString } from '@antv/util';

export interface Base extends Graph {
  current?: Graph;
}

export default function useInit(
  graphInstance: Graph | TreeGraph | undefined,
  config: any,
  container: React.MutableRefObject<null>,
) {
  const graphHook = useRef<Base>();
  const {
    data,
    nodeStyle,
    nodeAnchorPoints,
    nodeType,
    edgeType,
    edgeStyle,
    width,
    height,
    layout,
    minimapCfg,
    behaviors,
    nodeLabelCfg,
    edgeLabelCfg,
  } = config;

  let minimap;

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      graphInstance.changeData(data);
    }
  }, [data]);

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      graphInstance.getNodes().forEach((node: INode) => {
        graphInstance!.updateItem(node, {
          type: nodeType,
          style: nodeStyle,
          anchorPoints: nodeAnchorPoints,
          labelCfg: nodeLabelCfg,
        });
      });
    }
  }, [nodeStyle, nodeAnchorPoints, nodeType]);

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      graphInstance.getEdges().forEach((edge: IEdge) => {
        graphInstance!.updateItem(edge, {
          type: edgeType,
          style: edgeStyle,
          labelCfg: edgeLabelCfg,
        });
      });
    }
  }, [edgeStyle, edgeType]);

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      const graphSize = getGraphSize(width, height, container);
      graphInstance.changeSize(graphSize[0], graphSize[1]);
    }
  }, [container, width, height]);

  useEffect(() => {
    if (graphInstance && !graphInstance.destroyed) {
      graphInstance.updateLayout(layout);
    }
  }, [layout]);

  useEffect(() => {
    if (!minimapCfg || !graphInstance || graphInstance.destroyed) {
      return;
    }
    if (minimapCfg.show) {
      minimap = processMinimap(minimapCfg, graphInstance);
      minimap?.updateCanvas();
    } else {
      const [pluginMinimap] = graphInstance.get('plugins');
      if (pluginMinimap) {
        graphInstance.removePlugin(pluginMinimap);
      }
    }
  }, [minimapCfg]);

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
