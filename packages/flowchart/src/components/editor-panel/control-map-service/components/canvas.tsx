import React from 'react';
import { prefix } from './constants';
import { Checkbox } from 'antd';
import { ColorPicker, SelectField } from './fields';
import './style.less';

export const CanvasService: React.FC = () => {
  return (
    <div className={`${prefix}-panel-body`}>
      <div className={`${prefix}-panel-group`}>
        <SelectField
          label="主题"
          width={68}
          value="light"
          options={[
            {
              label: '白天',
              value: 'light',
            },
            {
              label: '夜间',
              value: 'dark',
            },
          ]}
          onChange={(value) => {}}
        />
      </div>
      <div className={`${prefix}-panel-group`}>
        <Checkbox>网格</Checkbox>
        <ColorPicker label="网格填充"></ColorPicker>
      </div>
    </div>
  );
};
