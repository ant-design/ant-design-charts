import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import { ColorPicker, InputNumberFiled, InputFiled, Arrow } from './fields';
import { prefix } from './constants';

import './style.less';

export interface IConfig {
  label?: string;
  attrs?: {
    line?: {
      fontSize?: number;
      fontFill?: string;
      strokeWidth?: number;
    };
  };
}

export const ArrowConfig = {
  width: 12,
  height: 8,
  name: 'block',
};

export const DisableArrowConfig = {
  width: 0,
  height: 0,
  name: '',
};

const ArrowMaps = {
  target: {
    sourceMarker: DisableArrowConfig,
    targetMarker: ArrowConfig,
  },
  source: {
    sourceMarker: ArrowConfig,
    targetMarker: DisableArrowConfig,
  },
  all: {
    sourceMarker: ArrowConfig,
    targetMarker: ArrowConfig,
  },
};

const EdgeComponent = (props) => {
  const { config, plugin = {} } = props;
  const { updateEdge } = plugin;
  const {
    theme: { EdgeConfig },
  } = useContext(AppContext) as any;

  const onEdgeConfigChange = (key: string, value: number | string, type?: string) => {
    if (key === 'arrow') {
      updateEdge(value, type);
    } else {
      updateEdge(
        {
          [key]: value,
        },
        type,
      );
    }
  };

  const getAttrs = (key: string, type = 'line') => {
    const { attrs = {} } = {
      ...EdgeConfig.normal,
      ...config,
    };
    return attrs[type]?.[key];
  };

  const getArrowValue = () => {
    const { attrs = {} } = {
      ...EdgeConfig.normal,
      ...config,
    };
    const { line } = attrs;
    if (line.sourceMarker && line.targetMarker) {
      return 'all';
    }
    if (line.sourceMarker) {
      return 'source';
    }
    return 'target';
  };

  return (
    <div className={`${prefix}-panel-body`}>
      <InputFiled
        label="标签"
        value={config.label}
        onChange={(value) => {
          onEdgeConfigChange('label', value);
        }}
      />
      <Arrow
        label="箭头"
        value={getArrowValue()}
        onChange={(value) => {
          onEdgeConfigChange('arrow', ArrowMaps[value], 'line');
        }}
      />
      <div className={`${prefix}-edge-text-style`}>
        <ColorPicker
          label="边框颜色"
          value={getAttrs('stroke')}
          onChange={(value: string) => {
            onEdgeConfigChange('stroke', value, 'line');
          }}
        />
        <InputNumberFiled
          label="线宽"
          value={getAttrs('strokeWidth')}
          onChange={(value) => {
            onEdgeConfigChange('strokeWidth', value, 'line');
          }}
        />
      </div>
      <div className={`${prefix}-edge-text-style`}>
        <ColorPicker
          label="字色"
          value={getAttrs('fill', 'text') || '#000'}
          onChange={(value: string) => {
            onEdgeConfigChange('fill', value, 'text');
          }}
        />
        <InputNumberFiled
          label="字号"
          min={10}
          value={getAttrs('fontSize', 'text') || 14}
          onChange={(value) => {
            onEdgeConfigChange('fontSize', value, 'text');
          }}
        />
      </div>
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
