import React from 'react';
import { defaultFlowGraphAnchorPoints, defaultNodeSize, defaultNodeStyle, defaultStateStyles } from '../../constants';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraphs';
import useProps from '../../hooks/useProps';
import { CompactBoxLayout } from '../../layout';
import {
  CommonConfig,
  IGraph,
  IGroup,
  NodeCfg,
  NodeConfig,
  Shape,
  ShapeCfg,
  G6TreeGraphData,
  FetchLoading,
} from '../../interface';
import ChartLoading from '../../utils/createLoading';
import { registerIndicatorGeometries } from '../flow-analysis-graph/customItem';

export interface MindMapGraphConfig extends Omit<CommonConfig<CompactBoxLayout>, 'data' | 'nodeCfg'>, FetchLoading {
  data: G6TreeGraphData;
  /** 展开层级，默认 100 */
  level?: number;
  nodeCfg?: NodeCfg & {
    /** 点击展开时异步获取数据 */
    getChildren?: (nodeCfg: NodeConfig) => Promise<G6TreeGraphData['children']>;
  };
}

registerIndicatorGeometries();

const defaultLayout = {
  type: 'mindmap',
  direction: 'H',
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

const MindMapGraph: React.FC<MindMapGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useGraph('TreeGraph', rest, {
    name: 'MindMapGraph',
  });

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default MindMapGraph;
