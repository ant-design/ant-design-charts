import React, { useContext } from 'react';
import { NsGraph } from '@ali/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const DisplayNode: NsGraph.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data } = props;
  const {
    theme: { NodeConfig, LabelConfig },
  } = useContext(AppContext) as any;
  const stateNodeConfig = NodeConfig?.normal;
  const stateLabelConfig = LabelConfig?.normal;
  const { width, height } = size;
  const sx = Math.min(height, width) / 3;
  const dx = Math.min(Math.tan(Math.PI / 6) * (height / 2), width / 3);
  const path = [
    ['M', dx, NODE_PADDING], // top-left
    ['L', width - sx, NODE_PADDING], // top-right
    ['C', width - 2 * NODE_PADDING, NODE_PADDING, width - 2 * NODE_PADDING, height / 2],
    ['', width - 2 * NODE_PADDING, height / 2],
    ['C', width - 2 * NODE_PADDING, height / 2, width - 2 * NODE_PADDING, height - 2 * NODE_PADDING],
    ['', width - sx, height - 2 * NODE_PADDING], // bottom-right
    ['L', dx, height - 2 * NODE_PADDING], // bottom-left
    ['L', NODE_PADDING, height / 2],
    ['Z'],
  ];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      // viewBox={`0 0 40 30`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path
        d={createPath(path)}
        fill={stateNodeConfig.fill}
        stroke={stateNodeConfig.stroke}
        style={{
          fill: '#fff',
        }}
      />
      <text x={width / 2} y={height / 2} fill={stateLabelConfig.fill} textAnchor="middle" alignmentBaseline="middle">
        {data?.label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
