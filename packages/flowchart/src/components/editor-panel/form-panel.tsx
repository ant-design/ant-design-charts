import React, { useState } from 'react';
// import { JsonSchemaForm } from '@antv/xflow';
import { WorkspacePanel } from '@antv/xflow';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { JsonSchemaForm } from '../canvas-json-schema-form';
import { defaultFormSchemaService } from './form-schema-service';
import { defaultControlMapService } from './control-map-service';
import { FlowchartProps } from '../../interface';

export const CONTAINER_CLASS = 'flowchart-editor-panel-collpase';

export const FormPanel: React.FC<FlowchartProps['detailPanelProps']> = (props) => {
  const {
    controlMapService = defaultControlMapService,
    formSchemaService = defaultFormSchemaService,
    position = { width: 240, top: 0, bottom: 0, right: 0 },
    show = true,
    ...rest
  } = props;

  if (!show) {
    return null;
  }
  const { width = 200, right } = position;
  const [collpased, setCollpased] = useState(false);

  return (
    <WorkspacePanel
      className={CONTAINER_CLASS}
      position={{
        ...position,
        right: !collpased ? right : -width,
      }}
    >
      <div className={`${CONTAINER_CLASS}-wrapper`}>
        <JsonSchemaForm
          targetType={['node', 'edge', 'canvas', 'group']}
          controlMapService={controlMapService}
          formSchemaService={formSchemaService}
          header={null}
          position={{
            ...position,
            top: 0,
          }}
          prefixClz="charts-form-editor"
          {...rest}
        />
        <div
          className={`${CONTAINER_CLASS}-icon`}
          style={{
            top: 21,
            left: !collpased ? -10 : -20,
            borderRadius: !collpased ? '50%' : '50% 0 0  50%',
            borderRight: !collpased ? '' : 'none',
          }}
          onClick={() => {
            setCollpased(!collpased);
          }}
        >
          {collpased ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
        </div>
      </div>
    </WorkspacePanel>
  );
};
