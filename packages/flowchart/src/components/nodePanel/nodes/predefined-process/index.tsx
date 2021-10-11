import React, { useContext } from 'react';
import { NsGraphConfig } from '@ali/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const PredefinedProcessNode: NsGraphConfig.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data } = props;
  const {
    theme: { NodeConfig, LabelConfig },
  } = useContext(AppContext) as any;

  const stateNodeConfig = NodeConfig?.normal;
  const stateLabelConfig = LabelConfig?.normal;
  const { width, height } = size;
  const struckOffset = width / 8;
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - 2 * NODE_PADDING], // bottom-left
    ['Z'],
  ];
  const path1 = [
    ['M', struckOffset, NODE_PADDING],
    ['L', struckOffset, height - 2 * NODE_PADDING],
  ];
  const path2 = [
    ['M', width - struckOffset, NODE_PADDING], // left-center
    ['L', width - struckOffset, height - 2 * NODE_PADDING], // right-center
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path
        d={createPath(path)}
        fill={stateNodeConfig.fill}
        stroke={stateNodeConfig.stroke}
        style={{
          fill: '#fff',
        }}
      />
      <path d={createPath(path1)} stroke={stateNodeConfig.stroke} />
      <path d={createPath(path2)} stroke={stateNodeConfig.stroke} />
      <text x={width / 2} y={height / 2} fill={stateLabelConfig.fill} textAnchor="middle" alignmentBaseline="middle">
        {data?.label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
