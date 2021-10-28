import React, { useState } from 'react';
import { useXflowPrefixCls, WorkspacePanel } from '@ali/xflow';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { IProps, IPanelProps } from './interface';
import { NodePanelBody } from './panel-body';
import { NodePanelHeader } from './panel-header';
import { usePanelLyaoutStyle } from './utils';
import { useTreePanelData } from './service';
import { CONTAINER_CLASS } from './constants';

import './style/index';

export const NodeTreePanelMain: React.FC<IProps> = (props) => {
  const { prefixClz, position = { width: 240, top: 0, bottom: 0, left: 0 }, ...rest } = props;
  const { width = 200, top = 0, left } = position;
  const [collpased, setCollpased] = useState(false);
  const { headerStyle, bodyStyle } = usePanelLyaoutStyle(props as IPanelProps);
  const { state, onFolderExpand, onKeywordChange } = useTreePanelData(props);

  return (
    <>
      <WorkspacePanel
        {...rest}
        position={{
          top,
          left,
          width,
          height: 40,
        }}
      >
        <NodePanelHeader {...props} state={state} style={headerStyle} onKeywordChange={onKeywordChange} />
      </WorkspacePanel>
      <div className={`${CONTAINER_CLASS}-wrapper`}>
        <WorkspacePanel
          className={`${CONTAINER_CLASS}-nodes`}
          {...rest}
          position={{
            ...position,
            top: 40,
            left: !collpased ? left : -width,
          }}
        >
          <NodePanelBody {...props} state={state} style={bodyStyle} onFolderExpand={onFolderExpand} />
        </WorkspacePanel>
        <div
          className={`${CONTAINER_CLASS}-icon`}
          style={{
            top: top + 40,
            right: collpased ? -20 : -(width + 20),
          }}
        >
          {collpased ? (
            <DoubleRightOutlined
              onClick={() => {
                setCollpased(false);
              }}
            />
          ) : (
            <DoubleLeftOutlined
              onClick={() => {
                setCollpased(true);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export const NodeTreePanel: React.FC<IProps> = (props) => {
  const { show = true, position = { width: 240, top: 0, bottom: 0, left: 0 }, ...rest } = props;
  if (!show) {
    return null;
  }
  const prefixClz = useXflowPrefixCls('node-panel');

  return (
    <div
      className={CONTAINER_CLASS}
      style={{
        width: position.width,
      }}
    >
      <WorkspacePanel
        className={prefixClz}
        {...rest}
        position={{
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <NodeTreePanelMain {...props} prefixClz={prefixClz} position={position} />
      </WorkspacePanel>
    </div>
  );
};
