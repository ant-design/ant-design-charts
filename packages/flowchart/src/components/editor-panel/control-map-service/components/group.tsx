import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../form-wrapper';
import { InputFiled, ColorPicker, Position, InputNumberFiled, Size } from './fields';
import { IConfig } from './node';

import { prefix } from './constants';

const GroupComponent = (props) => {
  const { config, plugin = {} } = props;

  const { updateGroup } = plugin;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;

  const [groupConfig, setGroupConfig] = useState<IConfig>({
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
    <div className={`${prefix}-panel-body`}>
      <div className={`${prefix}-panel-group`}>
        <h5>内容</h5>
        <InputFiled
          label="标题"
          value={groupConfig.label}
          onChange={(value) => {
            onGroupConfigChange('label', value);
          }}
        />
      </div>
      <div className={`${prefix}-panel-group`}>
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
        <div className={`${prefix}-node-text-style`}>
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
