import React, { useContext } from 'react';
import { NsGraph } from '@antv/xflow';
import { AppContext } from '../../index';
import { NODE_WIDTH, NODE_HEIGHT } from '../../constants';

export const TextNode: NsGraph.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {} } = props;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;
  const stateNodeConfig = NodeConfig?.normal;

  const {
    label = stateNodeConfig.label,
    fontFill = stateNodeConfig.fontFill,
    fontSize = stateNodeConfig.fontSize,
  } = data;

  const { width, height } = size;

  // 用于放大文本，避免看不清
  const scale = 2;

  return (
    <svg
      viewBox={`0 0 ${width / scale} ${height / scale}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <text
        x={width / (2 * scale)}
        y={height / (2 * scale)}
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
