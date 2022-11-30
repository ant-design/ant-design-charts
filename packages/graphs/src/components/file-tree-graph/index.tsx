import React from 'react';
import { defaultFlowGraphAnchorPoints, stateColor } from '../../constants';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraphs';
import useProps from '../../hooks/useProps';
import { CompactBoxLayout } from '../../layout';
import {
  CommonConfig,
  NodeCfg,
  NodeConfig,
  G6TreeGraphData,
  FetchLoading,
  MarkerCfg,
  IGraph,
  IGroup,
  CardNodeCfg,
  IShapeStyle,
} from '../../interface';
import ChartLoading from '../../utils/createLoading';
import { registerFileTreeGeometries, registerFileTreeBehaviors } from './customItem';

export type FileTreeMarkerCfg = Pick<MarkerCfg, 'position' | 'style' | 'show'>;
export interface FileTreeGraphConfig
  extends Omit<CommonConfig<CompactBoxLayout>, 'data' | 'nodeCfg' | 'markerCfg'>,
    FetchLoading {
  data: G6TreeGraphData;
  /** 展开层级，默认 100 */
  level?: number;
  markerCfg?: FileTreeMarkerCfg | ((cfg: CardNodeCfg, graph: IGraph | IGroup) => FileTreeMarkerCfg);
  nodeCfg?: NodeCfg & {
    /** 点击展开时异步获取数据 */
    getChildren?: (nodeCfg: NodeConfig) => Promise<G6TreeGraphData['children']>;
    /** 装饰线 */
    lineStyle?: (nodeCfg: NodeConfig) => IShapeStyle;
  };
}

registerFileTreeGeometries();
registerFileTreeBehaviors();
const PEM = 18;
const defaultLayout = {
  type: 'indented',
  direction: 'LR',
  isHorizontal: true,
  indent: 40,
  getHeight: (d) => {
    if (d.isRoot) {
      return 30;
    }
    if (d.collapsed && d.children?.length) {
      return 36;
    }
    return 22;
  },
  getVGap: () => {
    return 10;
  },
  getWidth: (d) => {
    const label = d.value?.text || ' ';
    return d.width || label.split('').length * PEM; // FIXME DO NOT get width like this
  },
};

const defaultProps = {
  nodeCfg: {
    type: 'file-tree-node',
    size: [120, 28],
    anchorPoints: [
      [0, 1],
      [1, 0.5],
    ],
    padding: [6, 12],
    nodeStateStyles: {
      hover: {
        rect: {
          fill: '#eee',
        },
        text: {
          fill: '#38404C',
        },
        marker: {
          stroke: stateColor,
        },
      },
      selected: {
        rect: {
          fill: '#EFF2FF',
        },
        text: {
          fill: '#2F54EB',
        },
      },
    },
    label: {
      style: (cfg) => {
        if (cfg.depth === 0) return { fill: '#fff' };
        return {
          fill: 'rgba(0,0,0,.65)',
        };
      },
    },
    style: (model) => ({
      fill: model.depth === 0 ? '#525964' : 'transparent',
    }),
    lineStyle: {
      lineWidth: 2,
      stroke: '#ccc',
    },
  },
  edgeCfg: {
    type: 'file-tree-edge',
    style: {
      lineWidth: 2,
      radius: 16,
    },
    edgeStateStyles: {
      hover: {
        stroke: stateColor,
      },
      selected: {
        stroke: stateColor,
      },
    },
  },
  behaviors: ['drag-canvas', 'wheel-scroll', 'hover-node', 'click-node', 'drag-branch'],
  layout: defaultLayout,
  animate: true,
  // autoFit: true,
  fitCenter: true,
  style: {
    position: 'relative' as React.CSSProperties['position'],
    height: 'inherit',
    backgroundColor: '#fff',
  },
  markerCfg: {
    show: true,
  },
};

const FileTreeGraph: React.FC<FileTreeGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useGraph('TreeGraph', rest, {
    name: 'FileTreeGraph',
  });

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default FileTreeGraph;
