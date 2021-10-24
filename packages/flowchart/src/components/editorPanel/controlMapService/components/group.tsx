import React from 'react';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { NsGraph, useXFlowApp, XFlowGroupCommands, NsNodeCmd } from '@ali/xflow';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import './group.less';

export const GroupNode: NsGraph.INodeRender = (props) => {
  const { cell } = props;
  const app = useXFlowApp();
  const isCollapse = cell.getProp('isCollapsed') || false;
  const onExpand = (e) => {
    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
      nodeId: cell.id,
      isCollapsed: false,
      collapsedSize: { width: 200, height: 40 },
    });
  };
  const onCollapse = (e) => {
    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
      nodeId: cell.id,
      isCollapsed: true,
      collapsedSize: { width: 200, height: 40 },
      gap: 3,
    });
  };

  return (
    <div className="xflow-group-node">
      <div className="xflow-group-header">
        <div className="header-left">{props.data.label}</div>
        <div className="header-right">
          {isCollapse && <PlusSquareOutlined onClick={onExpand} />}
          {!isCollapse && <MinusSquareOutlined onClick={onCollapse} />}
        </div>
      </div>
    </div>
  );
};

export const GroupService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props}>{(config, plugin) => <GroupNode {...props} plugin={plugin} config={config} />}</FormWrapper>
  );
};
