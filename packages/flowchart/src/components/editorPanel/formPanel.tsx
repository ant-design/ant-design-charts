import React from 'react';
import { JsonSchemaForm } from '@ali/xflow';
import { defaultFormSchemaService } from './formSchemaService';
import { defaultControlMapService } from './controlMapService';
import { FlowchartProps } from '../../interface';

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

  return (
    <JsonSchemaForm
      targetType={['node', 'edge', 'canvas', 'group']}
      controlMapService={controlMapService}
      formSchemaService={formSchemaService}
      position={position}
      {...rest}
    />
  );
};
