import React from 'react';
import { defaultFlowGraphAnchorPoints, defaultNodeSize, defaultNodeStyle, defaultStateStyles } from '../../constants';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraphs';
import useProps from '../../hooks/useProps';
import { CommonConfig, IGraph, IGroup, NodeConfig, Shape, ShapeCfg, TreeGraphData } from '../../interface';
import ChartLoading from '../../utils/createLoading';
import { registerIndicatorGeometries } from '../flowAnalysisGraph/customItem';

export interface DecompositionTreeGraphConfig extends Omit<CommonConfig, 'data' | 'nodeCfg'> {
  data: TreeGraphData;
  /** 展开层级，默认 100 */
  level?: number;
  nodeCfg?: CommonConfig['nodeCfg'] & {
    /** 点击展开时异步获取数据 */
    getChildren?: (nodeCfg: NodeConfig) => TreeGraphData['children'];
  };
}

registerIndicatorGeometries();

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
      style: (cfg: Shape | ShapeCfg, group: IGroup | IGraph | undefined, type: string | undefined) => {
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
  level: 100,
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
