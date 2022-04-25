import React from 'react';
import ChartLoading from '../../utils/createLoading';
import ErrorBoundary from '../../errorBoundary';
import useGraph from '../../hooks/useGraphs';
import useProps from '../../hooks/useProps';
import { defaultStateStyles } from '../../constants';

import { registerOrganizationCardNode } from './customItem';
import { IGroup, CommonConfig, ShapeCfg, Shape, NodeConfig, IGraph, NodeData, OrgItem } from '../../interface';

export type OrganizationGraphData = NodeData<OrgItem>;
export interface OrganizationGraphConfig extends Omit<CommonConfig, 'data'> {
  data: OrganizationGraphData;
}

registerOrganizationCardNode();

const defaultNodeStyle = {
  fill: '#91d5ff',
  stroke: '#40a9ff',
  radius: 2,
};

const defaultLayout = {
  type: 'compactBox',
  direction: 'TB',
  getId: function getId(d: NodeConfig) {
    return d.id;
  },
  getHeight: function getHeight() {
    return 16;
  },
  getWidth: function getWidth() {
    return 16;
  },
  getVGap: function getVGap() {
    return 40;
  },
  getHGap: function getHGap() {
    return 70;
  },
};
const defaultProps = {
  nodeCfg: {
    type: 'organization-card',
    size: [100, 44],
    style: defaultNodeStyle,
    padding: 6,
    anchorPoints: [
      [0.5, 0],
      [0.5, 1],
    ],
    nodeStateStyles: defaultStateStyles,
    label: {
      style: (cfg: Shape | ShapeCfg, group: IGroup | IGraph | undefined, type: string | undefined) => {
        const styles = {
          icon: {
            width: 32,
            height: 32,
          },
          title: {
            fill: '#fff',
          },
          name: {
            fill: '#000',
          },
        };
        return type ? styles[type] : {};
      },
    },
  },
  edgeCfg: {
    type: 'polyline',
    endArrow: {
      type: 'triangle',
      fill: '#91d5ff',
    },
    edgeStateStyles: defaultStateStyles,
    style: {
      stroke: '#91d5ff',
    },
  },
  behaviors: ['zoom-canvas', 'drag-canvas'],
  layout: defaultLayout,
  animate: true,
  markerPosition: 'right' as 'right',
  autoFit: true,
  fitCenter: true,
  style: {
    position: 'relative' as React.CSSProperties['position'],
    height: 'inherit',
    backgroundColor: '#fff',
  },
};

const OrganizationGraph: React.FC<OrganizationGraphConfig> = (props) => {
  const { uProps } = useProps(props, defaultProps);
  const { className, style, loading, loadingTemplate, errorTemplate, ...rest } = uProps;
  const { container } = useGraph('TreeGraph', rest, { name: 'OrganizationGraph' });

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default OrganizationGraph;
