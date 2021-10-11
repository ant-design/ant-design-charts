import React, { useContext } from 'react';
import { NsGraphConfig } from '@ali/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const DatabaseNode: NsGraphConfig.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data } = props;
  const {
    theme: { NodeConfig, LabelConfig },
  } = useContext(AppContext) as any;
  const stateNodeConfig = NodeConfig?.normal;
  const stateLabelConfig = LabelConfig?.normal;
  const { width, height } = size;
  const bezierX = width / 4;
  const bezierY = height / 10;

  const path = [
    ['M', NODE_PADDING, NODE_PADDING + bezierY], // top-left
    [
      'C',
      NODE_PADDING + bezierX,
      NODE_PADDING + 2 * bezierY,
      NODE_PADDING + width - bezierX,
      NODE_PADDING + 2 * bezierY,
    ], // 控制点，开口向上
    ['', width - 2 * NODE_PADDING, NODE_PADDING + bezierY], // top-right
    ['L', width - 2 * NODE_PADDING, height - 2 * NODE_PADDING - bezierY], // bottom-right
    [
      'C',
      width - 2 * NODE_PADDING - bezierX,
      height - 2 * NODE_PADDING,
      NODE_PADDING + bezierX,
      height - 2 * NODE_PADDING,
    ], // 控制点，开口向上
    ['', NODE_PADDING, height - 2 * NODE_PADDING - bezierY], // bottom-left
    ['L', NODE_PADDING, NODE_PADDING + bezierY],
    ['L', NODE_PADDING, NODE_PADDING + bezierY], // top-left
    ['C', NODE_PADDING + bezierX, NODE_PADDING, NODE_PADDING + width - bezierX, NODE_PADDING], // 控制点，开口向下
    ['', width - 2 * NODE_PADDING, NODE_PADDING + bezierY], // top-right
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
      <text x={width / 2} y={height / 2} fill={stateLabelConfig.fill} textAnchor="middle" alignmentBaseline="middle">
        {data?.label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
