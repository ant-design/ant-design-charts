import React, { useState, useEffect, useContext } from 'react';
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
import { InputFiled, ColorPicker, InputNumberFiled, InputOpacity, InputFontSpacing, InputFontPosition } from './fields';
import { PREFIX } from '../constants';
import { IControlProps } from '../interface';
import { SelectField } from './fields';
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
  opacity: number;
  dy: number;
  dx: number;
  bgColor: string;
  bdColor: string;
  fontFamily: 'fangsong' | 'kaiti' | 'microsoftYahei' | 'nsimSun' | 'youyuan' | 'lisu';
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
        <SelectField
          label="字体"
          width={150}
          value={nodeConfig.fontFamily}
          options={[
            {
              label: '微软雅黑',
              value: 'microsoftYahei',
            },
            {
              label: '仿宋',
              value: 'fangsong',
            },
            {
              label: '新宋体',
              value: 'nsimSun',
            },
            {
              label: '楷体',
              value: 'kaiti',
            },

            {
              label: '幼圆',
              value: 'youyuan',
            },
            {
              label: '隶书',
              value: 'lisu',
            },
          ]}
          onChange={(value) => {
            onNodeConfigChange('fontFamily', value);
          }}
        />
      </div>
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
            width={50}
            onChange={(value) => {
              onNodeConfigChange('fontSize', value);
            }}
          />
          <InputFontSpacing
            label="间距"
            value={nodeConfig.letterSpacing}
            min={0}
            step={1}
            width={50}
            onChange={(value) => {
              onNodeConfigChange('letterSpacing', value);
            }}
          />
        </div>
        <div className={`${PREFIX}-node-text-style`}>
          <label style={{ color: '#888' }}>颜色</label>
          <ColorPicker
            value={nodeConfig.fontFill}
            onChange={(value: string) => {
              onNodeConfigChange('fontFill', value);
            }}
          />
          <InputOpacity
            label="透明度"
            value={nodeConfig.textOpacity}
            max={1}
            min={0}
            step={0.1}
            width={65}
            onChange={(value) => {
              onNodeConfigChange('textOpacity', value);
            }}
          />
        </div>
        <div className={`${PREFIX}-node-text-style`}>
          <label style={{ color: '#888' }}>字体背景</label>
          <ColorPicker
            value={nodeConfig.bgColor}
            onChange={(value: string) => {
              onNodeConfigChange('bgColor', value);
            }}
          />
          <label style={{ color: '#888' }}>字体边框</label>
          <ColorPicker
            value={nodeConfig.bdColor}
            onChange={(value: string) => {
              onNodeConfigChange('bdColor', value);
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
          <label style={{ color: '#888' }}>&#12288;&#12288;&#12288;文本位置</label>
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
          &#12288;
          <InputFontPosition
            label="Y"
            value={nodeConfig.dy}
            step={1}
            width={60}
            onChange={(value) => {
              onNodeConfigChange('dy', value);
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
          &#12288;
          <InputFontPosition
            label="X"
            value={nodeConfig.dx}
            step={1}
            width={60}
            onChange={(value) => {
              onNodeConfigChange('dx', value);
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
