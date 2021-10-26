import React, { useContext } from 'react';
import { NsGraph } from '@ali/xflow';
import { AppContext } from '../../index';
import { createPath } from '../../util';
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING } from '../../constants';

export const InternalStorageNode: NsGraph.INodeRender = (props) => {
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

  const { width, height } = size;
  const availableWidth = width - 2 * NODE_PADDING;
  const availableHieght = height - 2 * NODE_PADDING;
  const rx = 6;
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', availableWidth - rx, NODE_PADDING], // top-right
    ['C', availableWidth, NODE_PADDING, availableWidth, rx],
    ['', availableWidth, height / 2],
    ['L', availableWidth, availableHieght - rx],
    ['C', availableWidth, availableHieght, availableWidth - rx, availableHieght],
    ['', availableWidth - rx, availableHieght], // bottom-right
    ['L', rx, availableHieght], // bottom-left
    ['C', NODE_PADDING, availableHieght, NODE_PADDING, availableHieght - rx],
    ['', NODE_PADDING, availableHieght - rx],
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
      <path d={createPath(path)} fill={fill} stroke={stroke} />
      <path d={`M ${NODE_PADDING},${rx} L ${availableWidth - 1} ${rx} `} fill={fill} stroke={stroke} />
      <path d={`M ${rx},${NODE_PADDING} L ${rx} ${availableHieght} `} fill={fill} stroke={stroke} />
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
