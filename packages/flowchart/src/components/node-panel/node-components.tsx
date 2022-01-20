import * as nodePathMap from './paths';
import React, { useContext } from 'react';
import { NsGraph } from '@antv/xflow';
import { AppContext } from './index';
import { NODE_HEIGHT, NODE_WIDTH, NODE_PADDING } from './constants';

export const NodeComponent: NsGraph.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {}, name } = props;
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
  const scale = name === 'Text' ? 2 : 1;

  return (
    <svg
      viewBox={`0 0 ${width / scale} ${height / scale}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      {nodePathMap[`${name.replace(/\s+/g, '')}NodePath`](props).map((path) => {
        return <path key={path} d={path} fill={fill} stroke={stroke}></path>;
      })}
      <text
        x={height / (scale * 2)}
        y={height / (scale * 2)}
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
