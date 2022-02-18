import React from 'react';
import { InputNumber } from 'antd';
import { FormItemHeight } from '../../constants';
import { IProps } from './input-number';
interface OpacityProps extends IProps {
  formatter: (value: number) => string;
}
const InputOpacity: React.FC<OpacityProps> = (props) => {
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
        formatter={(value) => `${value * 100}%`}
        onChange={(value: number) => {
          onChange?.(value);
        }}
      />
    </div>
  );
};
export default InputOpacity;
