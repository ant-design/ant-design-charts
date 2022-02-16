import React from 'react';
import { InputNumber } from 'antd';
import { FormItemHeight } from '../constants';
import { IProps } from './input-number';

interface SpacingProps extends IProps {
  // formatter: (value: number) => string;
}

const InputFontSpacing: React.FC<SpacingProps> = (props) => {
  const { label, value = 0, onChange, max, min, width, step = 1 } = props;

  return (
    <div className="group">
      {label && <label>{label}</label>}
      <InputNumber
        value={value}
        max={max}
        min={min}
        step={step}
        style={{
          width,
          height: FormItemHeight,
        }}
        // formatter={(value) => `${value}px`}
        onChange={(value: number) => {
          onChange?.(value);
        }}
      />
    </div>
  );
};

export default InputFontSpacing;
