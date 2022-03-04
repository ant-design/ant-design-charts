import React, { useState, useContext } from 'react';
import { useXflowPrefixCls, WorkspacePanel } from '@antv/xflow';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import AppContext from '../../context';
import { getProps } from '../../util';
import { FlowchartProps } from '../../interface';
import { IProps, IPanelProps } from './interface';
import { NodePanelBody } from './panel-body';
import { NodePanelHeader } from './panel-header';
import { NodePanelFooter } from './panel-footer';
import { usePanelLyaoutStyle } from './utils';
import { useTreePanelData } from './service';
import { CONTAINER_CLASS, PANEL_HEADER_HEIGHT, PANEL_FOOTER_HEIGHT } from './constants';
import { BUILDIN_NODE_TYPES } from '../node-panel/constants';
import { storage } from '../../util/stroage';

export const NodeTreePanelMain: React.FC<IProps> = (props) => {
  const { flowchartId } = useContext(AppContext);
  const { registerNode = [] } = (getProps(flowchartId, 'nodePanelProps') as FlowchartProps['nodePanelProps']) ?? {};
  const [visibleNodeTypes, setVisibleNodeTypes] = useState<string[]>(() => {
    let initialState: string[];
    if (storage.hasItem('vsibleNodeTypes')) {
      initialState = storage.getItem('visibleNodeTypes');
    } else {
      initialState = BUILDIN_NODE_TYPES;
      const set = new Set<string>();
      //加入自定义节点的类型
      initialState = initialState.concat(
        registerNode.map((item) => {
          if (BUILDIN_NODE_TYPES.includes(item.type)) throw new Error(`${item.type} is a build-in node type`);
          if (set.has(item.type)) throw new Error('you cannot set two same register-node types');
          set.add(item.type);
          return item.type;
        }),
      );
    }
    return initialState;
  });
  const {
    position = { width: 240, top: 0, bottom: 0, left: 0 },
    showHeader = true,
    showFooter = true,
    ...rest
  } = props;

  const { width = 200 } = position;
  const { headerStyle, bodyStyle, footerStyle } = usePanelLyaoutStyle(props as IPanelProps);
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
        <NodePanelBody
          {...props}
          visibleNodeTypes={visibleNodeTypes}
          state={state}
          style={bodyStyle}
          onFolderExpand={onFolderExpand}
        />
      </WorkspacePanel>
      {showFooter && (
        <WorkspacePanel
          {...rest}
          position={{
            bottom: 0,
            left: 0,
            height: PANEL_FOOTER_HEIGHT,
            width,
          }}
        >
          <NodePanelFooter
            visibleNodeTypes={visibleNodeTypes}
            setVisibleNodeTypes={setVisibleNodeTypes}
            {...props}
            style={footerStyle}
          />
        </WorkspacePanel>
      )}
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
