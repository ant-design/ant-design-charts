import React, { useContext } from 'react';
import { NsGraph } from '@antv/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const MultiDocumentNode: NsGraph.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {} } = props;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;
  const stateNodeConfig = NodeConfig?.normal;

  const {
    stroke = stateNodeConfig.stroke,
    label = stateNodeConfig.label,
    fill = stateNodeConfig.fill,
    fontFill = stateNodeConfig.fontFill,
    fontSize = stateNodeConfig.fontSize,
  } = data;
  const multipleWidth = 6;
  const padding = NODE_PADDING;
  const multiPadding = multipleWidth / 2;

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
    ['S', width / 4, height - 2 * padding, padding + multiPadding, height - 2 * padding - 2 * bezierY],
    ['L', padding + multiPadding, padding], // top-left
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path d={createPath(path)} fill={fill} stroke={stroke} />
      <path d={createPath(path, -multipleWidth / 2, multipleWidth / 2)} fill={fill} stroke={stroke} />
      <text
        x={width / 2}
        y={height / 2}
        fill={fontFill}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize={fontSize}
      >
        {label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
