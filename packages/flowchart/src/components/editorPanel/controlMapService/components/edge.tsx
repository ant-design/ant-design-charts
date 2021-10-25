import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import Input from './fields/input';
import ColorPicker from './fields/color';

import { prefix } from './constants';

import './style.less';

interface IEdgeConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  label?: string;
  stroke?: string;
}
const EdgeComponent = (props) => {
  const { config, plugin = {} } = props;
  const { updateEdge } = plugin;
  const {
    theme: { EdgeConfig },
  } = useContext(AppContext) as any;

  const [edgeConfig, setEdgeConfig] = useState<IEdgeConfig>({
    ...EdgeConfig.normal,
    ...config,
  });

  const onEdgeConfigChange = (key: string, value: number | string) => {
    setEdgeConfig({
      ...edgeConfig,
      [key]: value,
    });

    updateEdge(
      {
        [key]: value,
      },
      key === 'stroke' ? 'attrs' : 'edgeConfig',
    );
  };

  useEffect(() => {
    setEdgeConfig({
      ...EdgeConfig.normal,
      ...config,
    });
  }, [config]);

  return (
    <div className={`${prefix}-panel-body`}>
      <Input
        label="标签"
        value={edgeConfig.label}
        onChange={(value) => {
          onEdgeConfigChange('label', value);
        }}
      />
      <ColorPicker
        label="边框颜色"
        value={edgeConfig.stroke}
        onChange={(value: string) => {
          onEdgeConfigChange('stroke', value);
        }}
      />
    </div>
  );
};
export const EdgeService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props} type="edge">
      {(config, plugin) => <EdgeComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};
