import React from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div<{ $isActive?: boolean }>`
  --default-color: #1783ff;

  position: relative;
  height: inherit;
  width: inherit;
  background-color: var(--default-color);
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid var(--default-color);

  ${(props) =>
    props.$isActive &&
    css`
      border: 2px solid #000;
    `}
`;

interface PlainNodeProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  /**
   * Whether the node is active
   * @default false
   */
  isActive?: boolean;
}

export const PlainNode: React.FC<PlainNodeProps> = (props) => {
  const { isActive, className, style } = props;

  return <StyledWrapper $isActive={isActive} className={className} style={style}></StyledWrapper>;
};
