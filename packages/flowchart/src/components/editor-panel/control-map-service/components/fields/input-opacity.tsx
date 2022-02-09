import React from 'react';
import { InputNumber } from 'antd';
import { FormItemHeight } from '../constants';
import { IProps } from './input-number';
interface MProps extends IProps {
  formatter: (value: number) => string;
}
const InputOpacity: React.FC<MProps> = (props) => {
  const { label, value = 100, onChange, max, min, width, step = 10 } = props;

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
        formatter={(value) => `${value}%`}
        onChange={(value: number) => {
          onChange?.(value);
        }}
      />
    </div>
  );
};
export default InputOpacity;
