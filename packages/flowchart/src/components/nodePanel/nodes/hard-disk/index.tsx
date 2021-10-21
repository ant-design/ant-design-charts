import React, { useContext } from 'react';
import { NsGraph } from '@ali/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const HardDiskNode: NsGraph.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {} } = props;
  const { stroke, color, label } = data;
  const {
    theme: { NodeConfig, LabelConfig },
  } = useContext(AppContext) as any;
  const stateNodeConfig = NodeConfig?.normal;
  const stateLabelConfig = LabelConfig?.normal;
  const { width, height } = size;
  const bezierX = Math.min(width / 10, height / 4);
  const bezierY = Math.min(height / 4, width / 4);
  const path = [
    ['M', NODE_PADDING + bezierX, NODE_PADDING], // top-left
    ['L', width - 2 * NODE_PADDING - bezierX, NODE_PADDING], // top-right
    [
      'C',
      width - 2 * NODE_PADDING,
      NODE_PADDING + bezierY,
      width - 2 * NODE_PADDING,
      height - 2 * NODE_PADDING - bezierY,
    ], // 控制点，开口左
    ['', width - 2 * NODE_PADDING - bezierX, height - 2 * NODE_PADDING], // bottom-right
    ['L', NODE_PADDING + bezierX, height - 2 * NODE_PADDING], // bottom-left
    ['C', NODE_PADDING, height - 2 * NODE_PADDING - bezierY, NODE_PADDING, NODE_PADDING + bezierY], // 控制点，开口左
    ['', NODE_PADDING + bezierX, NODE_PADDING], // top-left
  ];
  // 遵循绘制顺序，多个 path 绘制弧
  const pathBezierRight = [
    ['M', width - 2 * NODE_PADDING - bezierX, NODE_PADDING], // top-right
    [
      'C',
      width - 2 * NODE_PADDING - 2 * bezierX,
      NODE_PADDING + bezierY,
      width - 2 * NODE_PADDING - 2 * bezierX,
      height - 2 * NODE_PADDING - bezierY,
    ], // 控制点，开口向右
    ['', width - 2 * NODE_PADDING - bezierX, height - 2 * NODE_PADDING], // bottom-right
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
      <path
        d={createPath(pathBezierRight)}
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
