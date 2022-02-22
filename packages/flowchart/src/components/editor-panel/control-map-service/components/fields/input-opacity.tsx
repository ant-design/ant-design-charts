import React from 'react';
import { InputNumber } from 'antd';
import { FormItemHeight } from '../../constants';
import { IProps } from './input-number';
const InputOpacity: React.FC<IProps> = (props) => {
  const { label, value = 1, onChange, max, min, width, step = 0.1 } = props;

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
        onChange={(value: number) => {
          onChange?.(value);
        }}
      />
    </div>
  );
};
export default InputOpacity;
