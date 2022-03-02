import React, { useContext } from 'react';
import { NsGraph, uuidv4 } from '@antv/xflow';
import * as nodePathMap from './paths';
import { AppContext } from './index';
import { NODE_HEIGHT, NODE_WIDTH } from './constants';
import { GradientComponent } from './gradient-component';
import { getGradientColor } from './util';
import './style.less';
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
    bgColor = stateNodeConfig.bgColor,
    bdColor = stateNodeConfig.bdColor,
    dx = stateNodeConfig.dx,
    dy = stateNodeConfig.dy,
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
  const textColor = getGradientColor(fontFill, textOpacity);

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
      <foreignObject width={'100%'} height={'100%'}>
        <div className={`flowchart-nodetext x-${textAnchor} y-${alignmentBaseline}`}>
          <div
            className="flowchart-text"
            style={{
              backgroundColor: bgColor,
              fontSize,
              letterSpacing: letterSpacing,
              color: textColor,
              fontWeight,
              fontStyle,
              textDecoration,
              border: `1px solid ${bdColor}`,
              left: dx,
              top: dy,
            }}
          >
            {label}
          </div>
        </div>
      </foreignObject>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
