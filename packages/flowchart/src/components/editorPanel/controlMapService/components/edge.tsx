import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import { ColorPicker, InputNumberFiled, InputFiled } from './fields';
import { prefix } from './constants';
import { IConfig } from './node';

import './style.less';

const AttributeKeys = ['stroke', 'fontSize', 'fontFill'];

const EdgeComponent = (props) => {
  const { config, plugin = {} } = props;
  const { updateEdge } = plugin;
  const {
    theme: { EdgeConfig },
  } = useContext(AppContext) as any;

  const [edgeConfig, setEdgeConfig] = useState<IConfig>({
    ...EdgeConfig.normal,
    ...config,
  });

  const onEdgeConfigChange = (key: string, value: number | string) => {
    setEdgeConfig({
      ...edgeConfig,
      [key]: value,
    });

    updateEdge(
      {
        [key]: value,
      },
      AttributeKeys.includes(key) ? 'attrs' : 'edgeConfig',
    );
  };

  useEffect(() => {
    setEdgeConfig({
      ...EdgeConfig.normal,
      ...config,
    });
  }, [config]);

  return (
    <div className={`${prefix}-panel-body`}>
      <InputFiled
        label="标签"
        value={edgeConfig.label}
        onChange={(value) => {
          onEdgeConfigChange('label', value);
        }}
      />
      <ColorPicker
        label="边框颜色"
        value={edgeConfig.stroke}
        onChange={(value: string) => {
          onEdgeConfigChange('stroke', value);
        }}
      />
      {/* 暂不支持 */}
      {/* <div className={`${prefix}-edge-text-style`}>
        <ColorPicker
          label="字色"
          value={edgeConfig.fontFill}
          onChange={(value: string) => {
            onEdgeConfigChange('fontFill', value);
          }}
        />
        <InputNumberFiled
          label="字号"
          value={edgeConfig.fontSize}
          onChange={(value) => {
            onEdgeConfigChange('fontSize', value);
          }}
        />
      </div> */}
    </div>
  );
};
export const EdgeService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props} type="edge">
      {(config, plugin) => <EdgeComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};
