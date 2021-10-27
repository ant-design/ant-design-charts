import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import { InputFiled, ColorPicker, Position, InputNumberFiled, Size } from './fields';

import { prefix } from './constants';

import './style.less';

export interface IConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  label?: string;
  stroke?: string;
  fill?: string;
  fontSize?: number;
  fontFill?: string;
}

const NodeComponent = (props) => {
  const { config, plugin = {} } = props;
  const { updateNode } = plugin;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;

  const [nodeConfig, setNodeConfig] = useState<IConfig>({
    ...NodeConfig.normal,
    ...config,
  });

  const onNodeConfigChange = (key: string, value: number | string) => {
    setNodeConfig({
      ...nodeConfig,
      [key]: value,
    });
    updateNode({
      [key]: value,
    });
  };

  useEffect(() => {
    setNodeConfig({
      ...NodeConfig.normal,
      ...config,
    });
  }, [config]);

  return (
    <div className={`${prefix}-panel-body`}>
      <InputFiled
        label="标签"
        value={nodeConfig.label}
        onChange={(value) => {
          onNodeConfigChange('label', value);
        }}
      />
      <div className={`${prefix}-node-style`}>
        <ColorPicker
          label="边框色"
          value={nodeConfig.stroke}
          onChange={(value: string) => {
            onNodeConfigChange('stroke', value);
          }}
        />
        <ColorPicker
          label="填充色"
          value={nodeConfig.fill}
          onChange={(value: string) => {
            onNodeConfigChange('fill', value);
          }}
        />
      </div>
      <div className={`${prefix}-node-text-style`}>
        <ColorPicker
          label="字色"
          value={nodeConfig.fontFill}
          onChange={(value: string) => {
            onNodeConfigChange('fontFill', value);
          }}
        />
        <InputNumberFiled
          label="字号"
          value={nodeConfig.fontSize}
          onChange={(value) => {
            onNodeConfigChange('fontSize', value);
          }}
        />
      </div>
      <Position
        x={nodeConfig.x}
        y={nodeConfig.y}
        onChange={(key, value) => {
          onNodeConfigChange(key, value);
        }}
      />
      <Size
        width={nodeConfig.width}
        height={nodeConfig.height}
        onChange={(key, value) => {
          onNodeConfigChange(key, value);
        }}
      />
    </div>
  );
};

export const NodeService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};
