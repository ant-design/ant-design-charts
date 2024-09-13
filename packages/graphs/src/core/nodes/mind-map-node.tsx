import type { NodeData } from '@antv/g6';
import { idOf } from '@antv/g6';
import React from 'react';
import styled, { css } from 'styled-components';
import { measureTextSize } from '../utils/measure-text';

const StyledWrapper = styled.div<{ depth: number }>`
  --border-width: 2px;

  position: relative;
  height: calc(100% - 2 * var(--border-width));
  width: calc(100% - 2 * var(--border-width));
  border: var(--border-width) solid #99add1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  overflow-wrap: anywhere;

  ${({ depth, color }) => {
    if (depth === 0) {
      // main-topic
      return css`
        border-color: #f1f4f5;
        background-color: #f1f4f5;
        font-color: #252525;
        font-size: 20px;
        padding: 6px;
        transform: translate(-3px, -3px);
      `;
    } else if (depth === 1) {
      // brainstorming-topic
      return css`
        color: #fff;
        background-color: ${color};
        border-color: ${color};
        font-size: 18px;
      `;
    } else {
      // sub-topic
      return css`
        color: ${color};
        background-color: #fff;
        border-color: ${color};
      `;
    }
  }}
`;

interface MindMapNodeProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  text: string;
  depth: number;
  color?: string;
}

export const MindMapNode: React.FC<MindMapNodeProps> = (props) => {
  const { className, style, text, depth, color = '#1783ff' } = props;

  return (
    <StyledWrapper depth={depth} color={color} className={className} style={style}>
      <div className="text">{text}</div>
    </StyledWrapper>
  );
};

export const getMindMapNodeFont = (depth: number) => {
  const fontSize = depth === 0 ? 20 : depth === 1 ? 18 : 16;
  const font = { fontWeight: 'bold', fontSize, fontFamily: 'PingFang SC' };
  return font;
};

/**
 * 计算思维导图节点的尺寸，这里节点的尺寸是根据节点的文本内容来计算的
 * @param data - 节点数据
 * @returns 节点的尺寸
 */
export const measureMindMapNodeSize = (data: NodeData) => {
  const font = getMindMapNodeFont(data.data!.depth as number);
  return measureTextSize(idOf(data), font, 120, 240, [12, 36]);
};
