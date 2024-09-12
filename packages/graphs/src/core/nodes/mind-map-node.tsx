import { measureTextHeight, measureTextWidth } from '@ant-design/charts-util';
import type { Size } from '@antv/g6';
import React from 'react';
import styled, { css } from 'styled-components';

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

  .text {
    margin: 0 6px;
    text-align: center;
  }

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
        letter-spacing: 0.5px;
      `;
    } else if (depth === 1) {
      // brainstorming-topic
      return css`
        color: #fff;
        background-color: ${color};
        border-color: ${color};
        font-size: 18px;
        letter-spacing: 0.5px;
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

export function measureTextSize(text: string, depth: number, minWidth = 120, maxWith = 240): Size {
  const LETTER_SPACING = 0.5;
  const HEIGHT = 36;
  const OFFSET = 12;

  const fontSize = depth === 0 ? 20 : depth === 1 ? 18 : 16;
  const font = { fontWeight: 'bold', fontSize: fontSize + 2, fontFamily: 'PingFang SC' };
  const height = measureTextHeight(text, font);

  let width = measureTextWidth(text, font);
  if (depth < 2) {
    const additionalSpacing = text.length * LETTER_SPACING;
    width += additionalSpacing;
  }

  const lineNumber = Math.ceil(width / maxWith);

  return [Math.max(minWidth, Math.min(maxWith, width)) + OFFSET, HEIGHT + height * (lineNumber - 1)];
}
