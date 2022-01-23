import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../form-wrapper';
import { InputFiled, ColorPicker, Position, InputNumberFiled, Size, SelectField } from './fields';

import { prefix } from './constants';

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
  strokeWidth?: number;
  strokeDasharray?: string;
  fillOpacity?: number;
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

  const getSrokeDashValue = () => {
    return nodeConfig.strokeDasharray ? 'dash' : 'solid';
  };

  useEffect(() => {
    setNodeConfig({
      ...NodeConfig.normal,
      ...config,
    });
  }, [config]);

  return (
    <div className={`${prefix}-panel-body`}>
      <div className={`${prefix}-panel-group`}>
        <h5>内容</h5>
        <InputFiled
          label="标题"
          value={nodeConfig.label}
          onChange={(value) => {
            onNodeConfigChange('label', value);
          }}
        />
      </div>
      <div className={`${prefix}-panel-group`}>
        <h5>样式</h5>
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
        <ColorPicker
          label="填充"
          value={nodeConfig.fill}
          onChange={(value: string) => {
            onNodeConfigChange('fill', value);
          }}
        />
        <InputNumberFiled
          label="透明度"
          value={nodeConfig.fillOpacity}
          formatter={(value) => `${value * 100}%`}
          max={1}
          min={0}
          step={0.1}
          width={68}
          onChange={(value) => {
            onNodeConfigChange('fillOpacity', value);
          }}
        />
        <ColorPicker
          label="边框"
          value={nodeConfig.stroke}
          onChange={(value: string) => {
            onNodeConfigChange('stroke', value);
          }}
        />
        <div className={`${prefix}-edge-stroke-style`}>
          <SelectField
            label="线形"
            width={68}
            value={getSrokeDashValue()}
            options={[
              {
                label: '实线',
                value: 'solid',
              },
              {
                label: '虚线',
                value: 'dash',
              },
            ]}
            onChange={(value) => {
              if (value === 'solid') {
                onNodeConfigChange('strokeDasharray', undefined);
              } else {
                onNodeConfigChange('strokeDasharray', '2, 2');
              }
            }}
          />
          <InputNumberFiled
            value={nodeConfig.strokeWidth}
            min={1}
            max={5}
            onChange={(value) => {
              onNodeConfigChange('strokeWidth', value);
            }}
          />
        </div>
        <div className={`${prefix}-node-text-style`}>
          <InputNumberFiled
            label="字号"
            value={nodeConfig.fontSize}
            width={68}
            onChange={(value) => {
              onNodeConfigChange('fontSize', value);
            }}
          />
          <ColorPicker
            value={nodeConfig.fontFill}
            onChange={(value: string) => {
              onNodeConfigChange('fontFill', value);
            }}
          />
        </div>
      </div>
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
