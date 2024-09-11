import { idOf } from '@antv/g6';
import { get, isEmpty } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { CollapsibleOptions } from '../../types';
import type { NodeProps } from '../nodes/types';

const StyledWrapper = styled.div`
  position: relative;
  height: inherit;
  width: inherit;

  .collapsible-icon {
    position: absolute;
    left: 50%;
    top: calc(100% + 24px);
    transform: translate(-50%, -50%);
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }
`;

interface CollapsibleNodeProps extends NodeProps, CollapsibleOptions {}

export const withCollapsibleNode = (NodeComponent: React.FC) => {
  return (props: CollapsibleNodeProps) => {
    const { data, graph, trigger, iconRender, iconClassName = '', iconStyle } = props;
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

    return (
      <StyledWrapper ref={wrapperRef}>
        {isIconShown && (
          <div ref={iconRef} className={`collapsible-icon ${iconClassName}`} style={iconStyle}>
            {iconRender?.(isCollapsed)}
          </div>
        )}
        {NodeComponent.call(graph, data)}
      </StyledWrapper>
    );
  };
};
