import React from 'react';
import { ErrorBoundary } from '../../base';
import useGraph from '../hooks/useGraphs';
import useProps from '../hooks/useProps';
import ChartLoading from '../../util/createLoading';
import {
  defaultFlowGraphAnchorPoints,
  defaultNodeSize,
  defaultStateStyles,
  defaultNodeStyle,
} from '../constants';
import { registerIndicatorCardNode } from '../flowAnalysisGraph/customItem';
import { CommonConfig, ShapeCfg, Shape, IGroup, IGraph, TreeGraphData } from '../interface';

export interface DecompositionTreeGraphConfig extends Omit<CommonConfig, 'data'> {
  data: TreeGraphData;
  /** 默认展开层级 */
  level?: number;
}

registerIndicatorCardNode();

const defaultLayout = {
  type: 'compactBox',
  direction: 'LR',
  getId: (d: any) => {
    return d.id;
  },
  getHeight: () => {
    return 60;
  },
  getWidth: () => {
    return 16;
  },
  getVGap: () => {
    return 16;
  },
  getHGap: () => {
    return 100;
  },
};

const defaultProps = {
  nodeCfg: {
    type: 'indicator-card',
    size: defaultNodeSize,
    style: defaultNodeStyle,
    anchorPoints: defaultFlowGraphAnchorPoints,
    padding: 6,
    layout: 'bundled',
    nodeStateStyles: defaultStateStyles,
    label: {
      style: (
        cfg: Shape | ShapeCfg,
        group: IGroup | IGraph | undefined,
        type: string | undefined,
      ) => {
        const styles = {
          icon: {
            width: 10,
            height: 10,
          },
          value: {
            fill: '#000',
          },
          text: {
            fill: '#aaa',
          },
        };
        return type ? styles[type] : {};
      },
    },
  },
  edgeCfg: {
    type: 'cubic-horizontal',
    endArrow: {
      type: 'vee',
    },
    edgeStateStyles: defaultStateStyles,
  },
  behaviors: ['zoom-canvas', 'drag-canvas'],
  layout: defaultLayout,
  animate: true,
  autoFit: true,
  fitCenter: true,
  style: {
    position: 'relative' as React.CSSProperties['position'],
    height: 'inherit',
    backgroundColor: '#fff',
  },
};

const DecompositionTreeGraph: React.FC<DecompositionTreeGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useGraph('TreeGraph', rest, {
    name: 'DecompositionTreeGraph',
  });

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default DecompositionTreeGraph;
