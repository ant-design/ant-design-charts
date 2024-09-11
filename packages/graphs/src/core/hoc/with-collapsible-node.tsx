import { idOf } from '@antv/g6';
import { get, isEmpty } from 'lodash-es';
import React, { useEffect, useState } from 'react';
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
    background-color: #fff;
    border-radius: 2px;
    color: #99add1;
    font-size: 20px;
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
    const { data, graph, trigger, iconRender, iconClassName, iconStyle } = props;
    const [isCollapsed, setIsCollapsed] = useState(get(data, 'style.collapsed', false));

    const isIconShown = trigger === 'icon' && !isEmpty(data.children);

    const nodeId = idOf(data);
    const handleClickCollapse = async (e) => {
      e.stopPropagation();

      const toggleExpandCollapse = isCollapsed ? 'expandElement' : 'collapseElement';
      await graph[toggleExpandCollapse](nodeId);
      setIsCollapsed((prev) => !prev);

      await graph.layout();
    };

    useEffect(() => {
      const target =
        typeof trigger === 'string' ? document.getElementById(`${nodeId}-collapsible-${trigger}`) : trigger;

      target?.addEventListener('click', handleClickCollapse);
      return () => {
        target?.removeEventListener('click', handleClickCollapse);
      };
    }, [trigger, isCollapsed, nodeId]);

    return (
      <StyledWrapper id={`${nodeId}-collapsible-node`}>
        {isIconShown && (
          <div id={`${nodeId}-collapsible-icon`} className={`collapsible-icon ${iconClassName}`} style={iconStyle}>
            {iconRender?.(isCollapsed)}
          </div>
        )}
        {NodeComponent.call(graph, data)}
      </StyledWrapper>
    );
  };
};
