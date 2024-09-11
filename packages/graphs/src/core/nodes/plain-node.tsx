import React from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div<{ $isActive?: boolean }>`
  --default-color: #1783ff;

  position: relative;
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--default-color);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid var(--default-color);

  ${(props) =>
    props.$isActive &&
    css`
      border: 2px solid #000;
    `}
`;

export const PlainNode: React.FC<{ text: string; isActive?: boolean }> = ({ text, isActive }) => {
  return <StyledWrapper $isActive={isActive}>{text}</StyledWrapper>;
};
