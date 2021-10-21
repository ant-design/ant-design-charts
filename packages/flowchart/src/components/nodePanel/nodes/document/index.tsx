import React, { useContext } from 'react';
import { NsGraph } from '@ali/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const DocumentNode: NsGraph.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {} } = props;
  const { stroke, color, label } = data;
  const {
    theme: { NodeConfig, LabelConfig },
  } = useContext(AppContext) as any;
  const stateNodeConfig = NodeConfig?.normal;
  const stateLabelConfig = LabelConfig?.normal;
  const { width, height } = size;
  const bezierX = width / 8;
  const bezierY = height / 8;

  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING, NODE_PADDING], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING - bezierY], // bottom-left
    [
      'C',
      width - 2 * NODE_PADDING - bezierX,
      height - 2 * NODE_PADDING - 2 * bezierY,
      width / 2 + bezierX,
      height - 2 * NODE_PADDING - 2 * bezierY,
    ], // 控制点，开口向下
    ['', width / 2, height - 2 * NODE_PADDING - bezierY], // bottom-right
    ['S', width / 4, height - 2 * NODE_PADDING, NODE_PADDING, height - 2 * NODE_PADDING - 2 * bezierY],
    ['L', NODE_PADDING, NODE_PADDING], // top-left
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path
        d={createPath(path)}
        fill={stateNodeConfig.fill}
        stroke={stroke || stateNodeConfig.stroke}
        style={{
          fill: '#fff',
        }}
      />
      <text
        x={width / 2}
        y={height / 2}
        fill={color || stateLabelConfig.fill}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
