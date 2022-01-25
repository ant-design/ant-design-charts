import React, { useState, useEffect, useContext } from 'react';
import { Checkbox } from 'antd';
import AppContext from '../../../../context';
import { FormWrapper } from '../../form-wrapper';
import { InputFiled, ColorPicker, Position, InputNumberFiled, Size, SelectField, Rotate } from './fields';
import { prefix, canEditorRounded } from './constants';
import { onConfigChange } from 'packages/flowchart/src/util';

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
  angel?: number;
  rounded?: boolean;
  isGradient?: boolean;
  gradientDirection?: 'top-bottom' | 'bottom-top' | 'left-right' | 'right-left';
  endColor?: string;
  name: string;
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

  const onNodeConfigChange = (key: string, value: number | string | boolean) => {
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
        <div className={`${prefix}-node-gradient-style`}>
          <Checkbox
            style={{ color: 'rgba(0, 0, 0, 0.45)' }}
            checked={nodeConfig.isGradient}
            onChange={(e) => {
              onNodeConfigChange('isGradient', e.target.checked);
            }}
          >
            渐变
          </Checkbox>
          <ColorPicker
            value={nodeConfig.endColor}
            onChange={(value: string) => {
              onNodeConfigChange('endColor', value);
            }}
          />
        </div>
        <SelectField
          label="方向"
          width={100}
          value={nodeConfig.gradientDirection}
          options={[
            {
              label: '自上向下',
              value: 'top-bottom',
            },
            {
              label: '自下向上',
              value: 'bottom-top',
            },
            {
              label: '自左向右',
              value: 'left-right',
            },
            {
              label: '自右向左',
              value: 'right-left',
            },
            {
              label: '径向',
              value: 'radial',
            },
          ]}
          onChange={(value) => {
            onNodeConfigChange('gradientDirection', value);
          }}
        />
        <InputNumberFiled
          label="透明度"
          value={nodeConfig.fillOpacity}
          max={1}
          min={0}
          step={0.1}
          width={70}
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
        {canEditorRounded.indexOf(nodeConfig.name) !== -1 ? (
          <Checkbox
            style={{ color: 'rgba(0, 0, 0, 0.45)' }}
            checked={nodeConfig.rounded}
            onChange={(e) => {
              onNodeConfigChange('rounded', e.target.checked);
            }}
          >
            圆角
          </Checkbox>
        ) : null}
        <Rotate
          angel={nodeConfig.angel}
          onChange={(key, value) => {
            onNodeConfigChange(key, value);
          }}
          onRotate={(key) => {
            onNodeConfigChange(key, nodeConfig.angel + 90);
          }}
        />
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
