import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../form-wrapper';
import { InputFiled, ColorPicker, Position, InputNumberFiled, Size } from './fields';
import { IControlProps } from '../interface';
// 对于 group 配置项还未明确，暂时去掉 IConfig 接口
//import { IConfig } from './node-arrange';

import { PREFIX } from '../constants';

const GroupComponent: React.FC<IControlProps> = (props) => {
  const { config, plugin } = props;
  const { updateGroup } = plugin;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;

  const [groupConfig, setGroupConfig] = useState({
    ...NodeConfig.normal,
    ...config,
  });

  const onGroupConfigChange = (key: string, value: number | string) => {
    setGroupConfig({
      ...groupConfig,
      [key]: value,
    });
    updateGroup({
      [key]: value,
    });
  };

  useEffect(() => {
    setGroupConfig({
      ...NodeConfig.normal,
      ...config,
    });
  }, [config]);

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <h5>内容</h5>
        <InputFiled
          label="标题"
          value={groupConfig.label}
          onChange={(value) => {
            onGroupConfigChange('label', value);
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <h5>样式</h5>
        <Position
          x={groupConfig.x}
          y={groupConfig.y}
          onChange={(key, value) => {
            onGroupConfigChange(key, value);
          }}
        />
        <Size
          width={groupConfig.width}
          height={groupConfig.height}
          onChange={(key, value) => {
            onGroupConfigChange(key, value);
          }}
        />
        <ColorPicker
          label="填充"
          value={groupConfig.fill}
          onChange={(value: string) => {
            onGroupConfigChange('fill', value);
          }}
        />
        <ColorPicker
          label="边框"
          value={groupConfig.stroke}
          onChange={(value: string) => {
            onGroupConfigChange('stroke', value);
          }}
        />
        <div className={`${PREFIX}-node-text-style`}>
          <InputNumberFiled
            label="字号"
            value={groupConfig.fontSize}
            width={68}
            onChange={(value) => {
              onGroupConfigChange('fontSize', value);
            }}
          />
          <ColorPicker
            value={groupConfig.fontFill}
            onChange={(value: string) => {
              onGroupConfigChange('fontFill', value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const GroupService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <GroupComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};
