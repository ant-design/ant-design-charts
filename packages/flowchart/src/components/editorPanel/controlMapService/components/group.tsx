import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import Input from './fields/input';
import ColorPicker from './fields/color';
import Position from './fields/position';
import Size from './fields/size';

import { prefix } from './constants';

import './style.less';

interface IGroupConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  label?: string;
  stroke?: string;
}

const GroupComponent = (props) => {
  const { config, plugin = {} } = props;

  const { updateGroup } = plugin;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;

  const [groupConfig, setGroupConfig] = useState<IGroupConfig>({
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
      <Input
        label="标签"
        value={groupConfig.label}
        onChange={(value) => {
          onGroupConfigChange('label', value);
        }}
      />
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
        label="边框颜色"
        value={groupConfig.stroke}
        onChange={(value: string) => {
          onGroupConfigChange('stroke', value);
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
