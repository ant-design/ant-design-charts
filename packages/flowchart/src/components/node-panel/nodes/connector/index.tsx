import React, { useContext } from 'react';
import { NsGraph } from '@antv/xflow';
import { AppContext } from '../../index';
import { NODE_HEIGHT, NODE_WIDTH, NODE_PADDING } from '../../constants';

export const ConnectorNode: NsGraph.INodeRender = (props) => {
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
  const availableR = height - 2 * NODE_PADDING;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path
        d={`M ${NODE_PADDING},${height / 2} a ${availableR / 2} ${availableR / 2} 0 1 1 0 1 z`}
        fill={fill}
        stroke={stroke}
      />
      <text
        x={height / 2}
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
