import React from 'react';
import { InputNumber } from 'antd';
import { FormItemHeight } from '../../constants';

export interface IProps {
  label?: string;
  value?: number;
  max?: number;
  min?: number;
  width?: number;
  step?: number;
  onChange?: (value: number) => void;
}

const InputNumberFiled: React.FC<IProps> = (props) => {
  const { label, value, onChange, max, min, width, step = 1 } = props;

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

export default InputNumberFiled;
