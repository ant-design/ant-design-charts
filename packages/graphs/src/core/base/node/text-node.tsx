import { measureTextWidth } from '@ant-design/charts-util';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { darkenHexColor, hexToRgba } from '../../utils/color';

const StyledWrapper = styled.div<{
  $type: TextNodeProps['type'];
  $color: string;
  $borderWidth: number;
  $isActive: boolean;
  $isSelected: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-wrap: anywhere;
  line-height: 1.5em;
  text-align: center;
  height: inherit;
  width: inherit;
  box-sizing: content-box;
  font-size: 14px;

  ${({ $type, $color, $borderWidth }) => {
    switch ($type) {
      case 'normal':
        return `
          color: ${$color};
        `;
      case 'filled':
        return css`
          color: #fff;
          background-color: ${$color};
          border-radius: 8px;
        `;
      case 'outlined':
        return css`
          height: calc(100% - 2 * ${$borderWidth}px);
          width: calc(100% - 2 * ${$borderWidth}px);
          color: ${$color};
          background-color: #fff;
          border: ${$borderWidth}px solid ${$color};
          border-radius: 8px;
        `;
      case 'underlined':
        return css`
          height: calc(100% - ${$borderWidth}px / 2);
          width: inherit;
          border-bottom: ${$borderWidth}px solid ${$color};
          background-color: #fff;
          color: ${$color};
        `;
    }
  }}

  ${({ $isActive, $isSelected, $borderWidth, $color }) =>
    ($isActive || $isSelected) &&
    css`
      height: calc(100% - 2 * ${$borderWidth}px);
      width: calc(100% - 2 * ${$borderWidth}px);
      border: ${$borderWidth}px solid ${darkenHexColor($color, 100)};
      ${$isSelected && `box-shadow: 0 0 0 2px ${hexToRgba($color, 0.1)};`}
    `}
`;

export interface TextNodeProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  /**
   * Node type
   * @default 'normal'
   */
  type?: 'normal' | 'filled' | 'outlined' | 'underlined';
  /**
   * Node text
   */
  text?: string;
  /**
   * Node color
   * @default '#1783ff'
   */
  color?: string;
  /**
   * Node max width. If the text width is greater than the max width, the text will be wrapped.
   * @default Infinity
   */
  maxWidth?: number;
  /**
   * Node border width
   * @default 2
   */
  borderWidth?: number;
  /**
   * Node font style (fontWeight, fontSize, fontFamily, fontStyle, fontVariant)
   */
  font?: {
    fontFamily?: string | undefined;
    fontSize?: number | string | undefined;
    fontStyle?: number | string | undefined;
    fontVariant?: number | string | undefined;
    fontWeight?: number | string | undefined;
  };
  /**
   * Whether the node is active
   * @default false
   */
  isActive?: boolean;
  /**
   * Whether the node is selected
   * @default false
   */
  isSelected?: boolean;
}

export const TextNode: FC<TextNodeProps> = (props) => {
  const {
    className,
    style = {},
    type = 'normal',
    text = '',
    font,
    color = '#1783ff',
    borderWidth = 3,
    maxWidth = Infinity,
    isActive = false,
    isSelected = false,
  } = props;
  const isMultiLine = measureTextWidth(text, font) > maxWidth;

  return (
    <StyledWrapper
      $type={type}
      $color={color}
      $borderWidth={borderWidth}
      $isActive={isActive}
      $isSelected={isSelected}
      className={`text-node ${className}`}
      style={{ ...style, ...font }}
    >
      <div style={isMultiLine ? { width: 'calc(100% - 12px)' } : {}}>{text}</div>
    </StyledWrapper>
  );
};
