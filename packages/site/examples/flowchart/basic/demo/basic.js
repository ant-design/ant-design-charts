import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  Flowchart,
  WorkspacePanel,
  XFlowNodeCommands,
  XFlowGraphCommands,
  usePanelContext,
  ToolbarPanel,
  FormItemWrapper,
  FormPanel,
} from '@ant-design/charts';

// import { formSchemaService, controlMapService } from './service';
// import { CustomNode } from './node';
console.log('Flowchart', Flowchart);
const DemoFlowchart = () => {
  return (
    <div style={{ height: 600 }}>
      <Flowchart
        onSave={(d) => {
          console.log(d, JSON.stringify(d));
        }}
      />
    </div>
  );
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
