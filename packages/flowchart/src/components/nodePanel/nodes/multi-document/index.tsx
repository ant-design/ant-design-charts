import React, { useContext } from 'react';
import { NsGraphConfig } from '@ali/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const MultiDocumentNode: NsGraphConfig.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data } = props;
  const {
    theme: { NodeConfig, LabelConfig },
  } = useContext(AppContext) as any;
  const multipleWidth = 6;
  const padding = NODE_PADDING;
  const multiPadding = multipleWidth / 2;
  const stateNodeConfig = NodeConfig?.normal;
  const stateLabelConfig = LabelConfig?.normal;
  let { width, height } = size;
  width += multipleWidth;
  height += multipleWidth;
  const bezierX = width / 8;
  const bezierY = height / 8;
  const path = [
    ['M', padding + multiPadding, padding], // top-left
    ['L', width - 2 * padding, padding], // top-right
    ['L', width - 2 * padding, height - 2 * padding - bezierY], // bottom-left
    [
      'C',
      width - 2 * padding - bezierX,
      height - 2 * padding - 2 * bezierY,
      width / 2 + bezierX,
      height - 2 * padding - 2 * bezierY,
    ], // 控制点，开口向下
    ['', width / 2, height - 2 * padding - bezierY], // bottom-right
    [
      'S',
      width / 4,
      height - 2 * padding,
      padding + multiPadding,
      height - 2 * padding - 2 * bezierY,
    ],
    ['L', padding + multiPadding, padding], // top-left
  ];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
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
      <path
        d={createPath(path, -multipleWidth / 2, multipleWidth / 2)}
        stroke={stateNodeConfig.stroke}
        style={{
          fill: '#fff',
        }}
      />
      <text
        x={width / 2}
        y={height / 2}
        fill={stateLabelConfig.fill}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {data?.label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
