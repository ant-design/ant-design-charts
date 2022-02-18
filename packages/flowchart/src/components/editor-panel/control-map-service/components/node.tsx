/*  
  此组件已废弃
 */
import React, { useState, useEffect, useContext } from 'react';
import { Checkbox, Tabs } from 'antd';
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
import {
  InputFiled,
  ColorPicker,
  Position,
  InputNumberFiled,
  Size,
  SelectField,
  Rotate,
  InputOpacity,
  InputFontSpacing,
  InputFontPosition,
} from './fields';
import { prefix, canEditorRounded } from '../constants';
import { SolidIcon, DottedLine } from './edit-style';
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
  strokeWidth?: number;
  strokeDasharray?: string;
  fillOpacity?: number;
  angel?: number;
  rounded?: boolean;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  alignmentBaseline?: 'middle' | 'before-edge' | 'after-edge';
  textAnchor?: 'start' | 'middle' | 'end';
  isGradient?: boolean;
  gradientDirection: 'top-bottom' | 'bottom-top' | 'left-right' | 'right-left';
  endColor?: string;
  name: string;
  isSelected?: boolean;
  groundColor?: string;
  opacity: number;
  letterSpacing: number;
  dy: number;
  dx: number;
}

const { TabPane } = Tabs;
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
      <Tabs defaultActiveKey="1">
        <TabPane tab="样式" key="node-style">
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
                width={69}
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
        </TabPane>
        <TabPane tab="字体" key="node-text">
          <div className={`${prefix}-panel-group`}>
            <InputFiled
              label="标题"
              value={nodeConfig.label}
              onChange={(value) => {
                onNodeConfigChange('label', value);
              }}
            />
          </div>
          <div className={`${prefix}-panel-group`}>
            <div className={`${prefix}-node-text-style`}>
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
            <div className={`${prefix}-node-text-style`}>
              <label style={{ color: '#888' }}>颜色</label>
              <ColorPicker
                value={nodeConfig.fontFill}
                onChange={(value: string) => {
                  onNodeConfigChange('fontFill', value);
                }}
              />
              <InputOpacity
                label="透明度"
                value={nodeConfig.opacity}
                max={1}
                min={0}
                step={0.1}
                width={65}
                formatter={(value) => `${value}%`}
                onChange={(value) => {
                  onNodeConfigChange('opacity', value);
                }}
              />
            </div>
            <div className={`${prefix}-icon-container`}>
              <BoldOutlined
                className={nodeConfig.isBold ? `${prefix}-icon-select-style` : `${prefix}-icon-noselect-style`}
                onClick={() => {
                  onNodeConfigChange('isBold', !nodeConfig.isBold);
                }}
              />
              <ItalicOutlined
                className={nodeConfig.isItalic ? `${prefix}-icon-select-style` : `${prefix}-icon-noselect-style`}
                onClick={() => {
                  onNodeConfigChange('isItalic', !nodeConfig.isItalic);
                }}
              />
              <UnderlineOutlined
                className={nodeConfig.isUnderline ? `${prefix}-icon-select-style` : `${prefix}-icon-noselect-style`}
                onClick={() => {
                  onNodeConfigChange('isUnderline', !nodeConfig.isUnderline);
                }}
              />
              <label style={{ color: '#888' }}>&#12288;&#12288;&#12288;文本位置</label>
            </div>
            <div className={`${prefix}-icon-container`}>
              <VerticalAlignTopOutlined
                className={
                  nodeConfig.alignmentBaseline === 'after-edge'
                    ? `${prefix}-icon-select-style`
                    : `${prefix}-icon-noselect-style`
                }
                onClick={() => {
                  onNodeConfigChange('alignmentBaseline', 'after-edge');
                }}
              />
              <VerticalAlignMiddleOutlined
                className={
                  nodeConfig.alignmentBaseline === 'middle'
                    ? `${prefix}-icon-select-style`
                    : `${prefix}-icon-noselect-style`
                }
                onClick={() => {
                  onNodeConfigChange('alignmentBaseline', 'middle');
                }}
              />
              <VerticalAlignBottomOutlined
                className={
                  nodeConfig.alignmentBaseline === 'before-edge'
                    ? `${prefix}-icon-select-style`
                    : `${prefix}-icon-noselect-style`
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
            <div className={`${prefix}-icon-container`}>
              <AlignLeftOutlined
                className={
                  nodeConfig.textAnchor === 'start' ? `${prefix}-icon-select-style` : `${prefix}-icon-noselect-style`
                }
                onClick={() => {
                  onNodeConfigChange('textAnchor', 'start');
                }}
              />
              <AlignCenterOutlined
                className={
                  nodeConfig.textAnchor === 'middle' ? `${prefix}-icon-select-style` : `${prefix}-icon-noselect-style`
                }
                onClick={() => {
                  onNodeConfigChange('textAnchor', 'middle');
                }}
              />
              <AlignRightOutlined
                className={
                  nodeConfig.textAnchor === 'end' ? `${prefix}-icon-select-style` : `${prefix}-icon-noselect-style`
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
        </TabPane>
        <TabPane tab="布局" key="node-arrange">
          <div className={`${prefix}-panel-group`}>
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
            <Rotate
              angel={nodeConfig.angel}
              onChange={(key, value) => {
                onNodeConfigChange(key, value);
              }}
              onRotate={(key) => {
                onNodeConfigChange(key, nodeConfig.angel + 90);
              }}
            />
          </div>
        </TabPane>
      </Tabs>
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
