import React from 'react';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { NsGraph, useXFlowApp, XFlowGroupCommands } from '@ali/xflow';
import './group.less';

export const GroupNode: NsGraph.INodeRender = (props) => {
  const {
    cell,
    data: { label, stroke, fill, fontSize, fontFill, width = 200, isCollapsed = false },
  } = props;
  const app = useXFlowApp();
  // const isCollapse = cell.getProp('isCollapsed') || false;
  const onExpand = (e) => {
    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
      nodeId: cell.id,
      isCollapsed: false,
      collapsedSize: { width, height: 40 },
    });
  };
  const onCollapse = (e) => {
    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
      nodeId: cell.id,
      isCollapsed: true,
      collapsedSize: { width, height: 40 },
      gap: 3,
    });
  };

  return (
    <div
      className="xflow-group-node"
      style={{
        borderColor: stroke,
        backgroundColor: fill,
        fontSize,
        color: fontFill,
      }}
    >
      <div className="xflow-group-header">
        <div className="header-left">{label}</div>
        <div className="header-right">
          {isCollapsed && <PlusSquareOutlined onClick={onExpand} />}
          {!isCollapsed && <MinusSquareOutlined onClick={onCollapse} />}
        </div>
      </div>
    </div>
  );
};
