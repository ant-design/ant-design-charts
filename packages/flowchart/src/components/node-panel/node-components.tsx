import React, { useContext } from 'react';
import { NsGraph, uuidv4 } from '@antv/xflow';
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
    isBold = stateNodeConfig.isBold,
    isItalic = stateNodeConfig.isItalic,
    isUnderline = stateNodeConfig.isUnderline,
    alignmentBaseline = stateNodeConfig.alignmentBaseline,
    textAnchor = stateNodeConfig.textAnchor,
    textOpacity = stateNodeConfig.textOpacity,
    letterSpacing = stateNodeConfig.letterSpacing,
    dy = stateNodeConfig.dy,
    dx = stateNodeConfig.dx,
  } = data;

  const { width, height } = size;
  const scale = name === 'Text' ? 2 : 1;
  const getnodePath = nodePathMap[`${name.replace(/\s+/g, '')}NodePath`];
  const nodePath = getnodePath(props, rounded);

  //用于解决无法动态修改渐变颜色
  let uuid = '';
  if (isGradient) uuid = uuidv4();
  const fill = isGradient ? `url(#${gradientDirection}-${uuid})` : startColor;
  const fontWeight = isBold ? 'bold' : 'normal';
  const fontStyle = isItalic ? 'italic' : 'normal';
  const textDecoration = isUnderline ? 'underline' : 'none';

  //文本初始位置
  let textX;
  if (textAnchor === 'start') {
    textX = 0;
  } else if (textAnchor === 'middle') {
    textX = width / (scale * 2);
  } else {
    textX = width;
  }

  return (
    <svg
      viewBox={`0 0 ${width / scale} ${height / scale}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ transform: `rotate(${angel}deg)` }}
    >
      <GradientComponent startColor={startColor} endColor={endColor} uuid={uuid}></GradientComponent>
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
        x={textX}
        y={height / (scale * 2)}
        fill={fontFill}
        textAnchor={textAnchor}
        alignmentBaseline={alignmentBaseline}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        opacity={textOpacity}
        letterSpacing={letterSpacing}
        dy={dy}
        dx={dx}
      >
        {label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
