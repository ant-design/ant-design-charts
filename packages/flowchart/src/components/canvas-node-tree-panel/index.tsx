import React, { useState } from 'react';
import { useXflowPrefixCls, WorkspacePanel } from '@antv/xflow';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { IProps, IPanelProps } from './interface';
import { NodePanelBody } from './panel-body';
import { NodePanelHeader } from './panel-header';
import { usePanelLyaoutStyle } from './utils';
import { useTreePanelData } from './service';
import { CONTAINER_CLASS, PANEL_HEADER_HEIGHT } from './constants';

import './style/index';

export const NodeTreePanelMain: React.FC<IProps> = (props) => {
  const { prefixClz, position = { width: 240, top: 0, bottom: 0, left: 0 }, showHeader = true, ...rest } = props;
  const { width = 200 } = position;
  const { headerStyle, bodyStyle } = usePanelLyaoutStyle(props as IPanelProps);
  const { state, onFolderExpand, onKeywordChange } = useTreePanelData(props);

  return (
    <>
      {showHeader && (
        <WorkspacePanel
          {...rest}
          position={{
            top: 0,
            left: 0,
            height: PANEL_HEADER_HEIGHT,
            width,
          }}
        >
          <NodePanelHeader {...props} state={state} style={headerStyle} onKeywordChange={onKeywordChange} />
        </WorkspacePanel>
      )}
      <WorkspacePanel
        className={`${CONTAINER_CLASS}-nodes`}
        {...rest}
        position={{
          ...position,
          top: showHeader ? PANEL_HEADER_HEIGHT : 0,
        }}
      >
        <NodePanelBody {...props} state={state} style={bodyStyle} onFolderExpand={onFolderExpand} />
      </WorkspacePanel>
    </>
  );
};

export const NodeTreePanel: React.FC<IProps> = (props) => {
  const { show = true, position = { width: 240, top: 40, bottom: 0, left: 0 }, ...rest } = props;
  if (!show) {
    return null;
  }
  const { width = 200, left } = position;
  const prefixClz = useXflowPrefixCls('node-panel');
  const [collpased, setCollpased] = useState(false);

  return (
    <WorkspacePanel
      className={CONTAINER_CLASS}
      position={{
        ...position,
        left: !collpased ? left : -width,
      }}
    >
      <div className={`${CONTAINER_CLASS}-wrapper`}>
        <WorkspacePanel
          className={prefixClz}
          {...rest}
          position={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <NodeTreePanelMain {...props} prefixClz={prefixClz} position={position} />
        </WorkspacePanel>
        <div
          className={`${CONTAINER_CLASS}-icon`}
          style={{
            top: 21,
            right: !collpased ? -10 : -20,
            borderRadius: !collpased ? '50%' : '0 50% 50% 0',
            borderLeft: !collpased ? '' : 'none',
          }}
          onClick={() => {
            setCollpased(!collpased);
          }}
        >
          {collpased ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </div>
      </div>
    </WorkspacePanel>
  );
};
