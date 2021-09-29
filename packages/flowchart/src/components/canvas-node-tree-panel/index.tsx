import React from 'react';
import { useXflowPrefixCls, WorkspacePanel } from '@ali/xflow';
import { IProps, IPanelProps } from './interface';
import { NodePanelBody } from './panel-body';
import { NodePanelHeader } from './panel-header';
import { usePanelLyaoutStyle } from './utils';
import { useTreePanelData } from './service';

import './style/index';

export const NodeTreePanelMain: React.FC<IProps> = (props) => {
  const { headerStyle, bodyStyle } = usePanelLyaoutStyle(props as IPanelProps);

  const { state, onFolderExpand, onKeywordChange } = useTreePanelData(props);

  return (
    <>
      <NodePanelHeader
        {...props}
        state={state}
        style={headerStyle}
        onKeywordChange={onKeywordChange}
      />
      <NodePanelBody {...props} state={state} style={bodyStyle} onFolderExpand={onFolderExpand} />
    </>
  );
};

export const NodeTreePanel: React.FC<IProps> = (props) => {
  const { show = true } = props;
  if (!show) {
    return null;
  }
  const prefixClz = useXflowPrefixCls('node-panel');
  return (
    <WorkspacePanel
      position={{ width: 240, top: 0, bottom: 0, left: 0 }}
      className={prefixClz}
      {...props}
    >
      <NodeTreePanelMain {...props} prefixClz={prefixClz} />
    </WorkspacePanel>
  );
};
