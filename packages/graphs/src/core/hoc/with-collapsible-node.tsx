import type { CardinalPlacement } from '@antv/g6';
import { idOf } from '@antv/g6';
import { get, isEmpty } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import type { NodeProps } from '../nodes/types';
import type { CollapseExpandReactNodeOptions } from '../transform';

const StyledWrapper = styled.div`
  position: relative;
  height: inherit;
  width: inherit;
`;

const StyledIcon = styled.div<{ placement: CardinalPlacement; offsetX: number; offsetY: number }>`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  ${({ placement, offsetX, offsetY }) => {
    const positions = {
      top: `left: calc(50% + ${offsetX}px); top: ${offsetY}px;`,
      bottom: `left: calc(50% + ${offsetX}px); top: calc(100% + ${offsetY}px);`,
      right: `left: calc(100% + ${offsetX}px); top: calc(50% + ${offsetY}px);`,
      left: `left: ${offsetX}px; top: calc(50% + ${offsetY}px);`,
    };

    return css`
      ${positions[placement]}
    `;
  }}
`;

interface CollapsibleNodeProps extends NodeProps, CollapseExpandReactNodeOptions {}

export const withCollapsibleNode = (NodeComponent: React.FC) => {
  return (props: CollapsibleNodeProps) => {
    const { data, graph, trigger, iconRender, iconPlacement, iconOffsetX, iconOffsetY, iconClassName, iconStyle } =
      props as Required<CollapsibleNodeProps>;
    const [isCollapsed, setIsCollapsed] = useState(get(data, 'style.collapsed', false));
    const wrapperRef = useRef(null);
    const iconRef = useRef(null);

    const isIconShown = trigger === 'icon' && !isEmpty(data.children);

    const handleClickCollapse = async (e) => {
      e.stopPropagation();

      const toggleExpandCollapse = isCollapsed ? 'expandElement' : 'collapseElement';
      await graph[toggleExpandCollapse](idOf(data));
      setIsCollapsed((prev) => !prev);

      await graph.layout();
    };

    useEffect(() => {
      const target = trigger === 'icon' ? iconRef.current : trigger === 'node' ? wrapperRef.current : trigger;

      target?.addEventListener('click', handleClickCollapse);
      return () => {
        target?.removeEventListener('click', handleClickCollapse);
      };
    }, [trigger, isCollapsed]);

    const computeCallbackStyle = (callableStyle: Function | number | string) => {
      return typeof callableStyle === 'function' ? callableStyle.call(graph, data) : callableStyle;
    };

    return (
      <StyledWrapper ref={wrapperRef}>
        {isIconShown && (
          <StyledIcon
            ref={iconRef}
            placement={computeCallbackStyle(iconPlacement)}
            offsetX={computeCallbackStyle(iconOffsetX)}
            offsetY={computeCallbackStyle(iconOffsetY)}
            className={iconClassName}
            style={iconStyle}
          >
            {iconRender?.(isCollapsed)}
          </StyledIcon>
        )}
        {NodeComponent.call(graph, data)}
      </StyledWrapper>
    );
  };
};
