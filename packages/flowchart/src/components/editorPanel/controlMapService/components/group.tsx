import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import { InputFiled, ColorPicker, Position, InputNumberFiled, Size } from './fields';
import { IConfig } from './node';

import { prefix } from './constants';

import './style.less';

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
      <InputFiled
        label="标签"
        value={groupConfig.label}
        onChange={(value) => {
          onGroupConfigChange('label', value);
        }}
      />
      <div className={`${prefix}-group-style`}>
        <ColorPicker
          label="边框色"
          value={groupConfig.stroke}
          onChange={(value: string) => {
            onGroupConfigChange('stroke', value);
          }}
        />
        <ColorPicker
          label="填充色"
          value={groupConfig.fill}
          onChange={(value: string) => {
            onGroupConfigChange('fill', value);
          }}
        />
      </div>
      <div className={`${prefix}-group-text-style`}>
        <ColorPicker
          label="字色"
          value={groupConfig.fontFill}
          onChange={(value: string) => {
            onGroupConfigChange('fontFill', value);
          }}
        />
        <InputNumberFiled
          label="字号"
          value={groupConfig.fontSize}
          onChange={(value) => {
            onGroupConfigChange('fontSize', value);
          }}
        />
      </div>
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
