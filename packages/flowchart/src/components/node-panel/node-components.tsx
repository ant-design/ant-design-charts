import React, { useContext } from 'react';
import { NsGraph } from '@antv/xflow';
import * as nodePathMap from './paths';
import { AppContext } from './index';
import { NODE_HEIGHT, NODE_WIDTH } from './constants';
import { GradientComponent } from './gradient-component';

export const NodeComponent: NsGraph.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {}, name } = props;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;
  const stateNodeConfig = NodeConfig?.normal;

  const {
    stroke = stateNodeConfig.stroke,
    label = stateNodeConfig.label,
    fill: startColor = stateNodeConfig.fill,
    fontFill = stateNodeConfig.fontFill,
    fontSize = stateNodeConfig.fontSize,
    strokeWidth = stateNodeConfig.strokeWidth,
    strokeDasharray = stateNodeConfig.strokeDasharray,
    fillOpacity = stateNodeConfig.fillOpacity,
    angel = stateNodeConfig.angel,
    rounded = stateNodeConfig.rounded,
    isGradient = stateNodeConfig.rounded,
    gradientDirection = stateNodeConfig.gradientDirection,
    endColor = stateNodeConfig.endColor,
  } = data;

  const { width, height } = size;
  const scale = name === 'Text' ? 2 : 1;
  const getnodePath = nodePathMap[`${name.replace(/\s+/g, '')}NodePath`];
  const nodePath = getnodePath(props, rounded);
  const fill = isGradient ? `url(#${gradientDirection})` : startColor;
  console.log(fill, startColor, endColor, gradientDirection);
  return (
    <svg
      viewBox={`0 0 ${width / scale} ${height / scale}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ transform: `rotate(${angel}deg)` }}
    >
      <linearGradient id="top-bottom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={startColor}></stop>
        <stop offset="100%" stopColor={endColor}></stop>
      </linearGradient>
      {nodePath.map((path) => {
        return (
          <path
            key={path}
            d={path}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            fillOpacity={fillOpacity}
          ></path>
        );
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
