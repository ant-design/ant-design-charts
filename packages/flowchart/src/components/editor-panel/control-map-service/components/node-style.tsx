import React, { useState, useEffect, useContext } from 'react';
import { Checkbox } from 'antd';
import AppContext from '../../../../context';
import { FormWrapper } from '../../form-wrapper';
import { ColorPicker, InputNumberFiled, SelectField } from './fields';
import { prefix, canEditorRounded } from './constants';
import { SolidIcon, DottedLine } from './edit-style';
import './style.less';
export interface IConfig {
  width?: number;
  height?: number;
  label?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  fillOpacity?: number;
  rounded?: boolean;
  isGradient?: boolean;
  gradientDirection: 'top-bottom' | 'bottom-top' | 'left-right' | 'right-left';
  endColor?: string;
  name: string;
  isSelected?: boolean;
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
                label: SolidIcon,
                value: 'solid',
              },
              {
                label: DottedLine,
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
          {nodeConfig.isGradient && (
            <ColorPicker
              value={nodeConfig.endColor}
              onChange={(value: string) => {
                onNodeConfigChange('endColor', value);
              }}
            />
          )}
        </div>
        {nodeConfig.isGradient && (
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
        )}
        {canEditorRounded.indexOf(nodeConfig.name) !== -1 && (
          <Checkbox
            style={{ color: 'rgba(0, 0, 0, 0.45)' }}
            checked={nodeConfig.rounded}
            onChange={(e) => {
              onNodeConfigChange('rounded', e.target.checked);
            }}
          >
            圆角
          </Checkbox>
        )}
      </div>
    </div>
  );
};

export const NodeStyle: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};
