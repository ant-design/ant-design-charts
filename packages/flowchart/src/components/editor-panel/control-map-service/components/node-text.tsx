import React, { useState, useEffect, useContext } from 'react';
import { Checkbox } from 'antd';
import {
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from '@ant-design/icons';
import AppContext from '../../../../context';
import { FormWrapper } from '../../form-wrapper';
import { InputFiled, ColorPicker, InputNumberFiled, InputOpacity, InputFontSpacing } from './fields';
import { PREFIX } from '../constants';
import { IControlProps } from '../interface';
import './style.less';

export interface INodeTextConfig {
  label?: string;
  fontSize?: number;
  fontFill?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  alignmentBaseline?: 'middle' | 'before-edge' | 'after-edge';
  textAnchor?: 'start' | 'middle' | 'end';
  name: string;
  isSelected?: boolean;
  textOpacity: number;
  letterSpacing: number;
}

const NodeComponent: React.FC<IControlProps> = (props) => {
  const { config, plugin } = props;
  const { updateNode } = plugin;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;

  const [nodeConfig, setNodeConfig] = useState<INodeTextConfig>({
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

  useEffect(() => {
    setNodeConfig({
      ...NodeConfig.normal,
      ...config,
    });
  }, [config]);

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <InputFiled
          label="标题"
          value={nodeConfig.label}
          onChange={(value) => {
            onNodeConfigChange('label', value);
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <div className={`${PREFIX}-node-text-style`}>
          <InputNumberFiled
            label="字号"
            value={nodeConfig.fontSize}
            width={68}
            onChange={(value) => {
              onNodeConfigChange('fontSize', value);
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <BoldOutlined
            className={nodeConfig.isBold ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`}
            onClick={() => {
              onNodeConfigChange('isBold', !nodeConfig.isBold);
            }}
          />
          <ItalicOutlined
            className={nodeConfig.isItalic ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`}
            onClick={() => {
              onNodeConfigChange('isItalic', !nodeConfig.isItalic);
            }}
          />
          <UnderlineOutlined
            className={nodeConfig.isUnderline ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`}
            onClick={() => {
              onNodeConfigChange('isUnderline', !nodeConfig.isUnderline);
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <VerticalAlignTopOutlined
            className={
              nodeConfig.alignmentBaseline === 'after-edge'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('alignmentBaseline', 'after-edge');
            }}
          />
          <VerticalAlignMiddleOutlined
            className={
              nodeConfig.alignmentBaseline === 'middle'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('alignmentBaseline', 'middle');
            }}
          />
          <VerticalAlignBottomOutlined
            className={
              nodeConfig.alignmentBaseline === 'before-edge'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('alignmentBaseline', 'before-edge');
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <AlignLeftOutlined
            className={
              nodeConfig.textAnchor === 'start' ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('textAnchor', 'start');
            }}
          />
          <AlignCenterOutlined
            className={
              nodeConfig.textAnchor === 'middle' ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('textAnchor', 'middle');
            }}
          />
          <AlignRightOutlined
            className={
              nodeConfig.textAnchor === 'end' ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('textAnchor', 'end');
            }}
          />
        </div>
        <div className={`${PREFIX}-node-gradient-style`}>
          <Checkbox
            style={{ color: 'rgba(0, 0, 0, 0.45)' }}
            checked={nodeConfig.isSelected}
            onChange={(values) => {
              onNodeConfigChange('isSelected', values.target.checked);
            }}
          >
            字体颜色
          </Checkbox>
          {nodeConfig.isSelected && (
            <ColorPicker
              value={nodeConfig.fontFill}
              onChange={(value: string) => {
                onNodeConfigChange('fontFill', value);
              }}
            />
          )}
        </div>
        <div className={`${PREFIX}-panel-group`}>
          <InputOpacity
            label="透明度"
            value={nodeConfig.textOpacity}
            max={1}
            min={0}
            step={0.1}
            width={70}
            formatter={(value) => `${value}%`}
            onChange={(value) => {
              onNodeConfigChange('textOpacity', value);
            }}
          />
          <InputFontSpacing
            label="字体间距"
            value={nodeConfig.letterSpacing}
            max={10}
            min={0}
            step={1}
            width={70}
            formatter={(value) => `${value}%`}
            onChange={(value) => {
              onNodeConfigChange('letterSpacing', value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const NodeText: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};