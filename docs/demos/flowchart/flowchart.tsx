import React, { useState, useEffect, Fragment } from 'react';
import {
  Flowchart,
  WorkspacePanel,
  XFlowNodeCommands,
  XFlowGraphCommands,
  usePanelContext,
  ToolbarPanel,
  FormItemWrapper,
  FormPanel,
  IconStore,
} from '@ant-design/charts';

import {
  SaveOutlined,
  RedoOutlined,
  RollbackOutlined,
  BackwardOutlined,
  ForwardOutlined,
} from '@ant-design/icons';
import { data } from './data';
import { formSchemaService, controlMapService } from './service';
import { CustomNode } from './node';

/** 注册icon 类型 */
// const registerIcon = () => {
//   IconStore.set('SaveOutlined', SaveOutlined);
//   IconStore.set('RollbackOutlined', RollbackOutlined);
//   IconStore.set('RedoOutlined', RedoOutlined);
//   IconStore.set('BackwardOutlined', BackwardOutlined);
//   IconStore.set('ForwardOutlined', ForwardOutlined);
// };

// registerIcon();

const DemoArea: React.FC = () => {
  return (
    <div style={{ height: 600 }}>
      <Flowchart
        data={data}
        onSave={(d) => {
          console.log(d, JSON.stringify(d));
        }}
        // popoverProps={{
        //   title: () => {
        //     return <div>title</div>;
        //   },
        //   content: () => {
        //     return <div>123</div>;
        //   },
        //   // antd/popover 额外配置
        // }}
        // nodePanelProps={{
        //   registerNode: {
        //     nodes: [
        //       {
        //         component: CustomNode,
        //         popover: () => <div>节点1</div>,
        //         name: 'custom-node',
        //         width: 60,
        //         height: 40,
        //         label: '节点1',
        //         data1: {
        //           name: '小王',
        //         },
        //       },
        //     ],
        //   },
        // }}
        // toolbarPanelProps={{
        //   commands: [
        //     {
        //       command: 'redo-cmd',
        //       // text: '重做',
        //       icon: RedoOutlined,
        //     },
        //     {
        //       command: 'undo-cmd',
        //       text: '撤销',
        //     },
        //     {
        //       command: 'save-graph-data',
        //       text: '保存',
        //     },
        //   ],
        // }}
        // detailPanelProps={{
        //   controlMapService,
        //   formSchemaService,
        //   position: { width: 240, top: 0, bottom: 0, right: 0 },
        // }}
      />
    </div>
  );
};

export default DemoArea;
