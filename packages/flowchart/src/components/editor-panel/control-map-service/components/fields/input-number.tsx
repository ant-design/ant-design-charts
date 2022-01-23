import React from 'react';
import { InputNumber } from 'antd';
import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: number;
  max?: number;
  min?: number;
  width?: number;
  step?: number;
  formatter?: (value: number) => string;
  onChange?: (value: number) => void;
}

const InputNumberFiled: React.FC<IProps> = (props) => {
  const { label, value, onChange, max, min, width, step = 1 } = props;
  let { formatter } = props;

  //如果没有传入 formatter ， 则将 value 返回
  if (formatter === undefined) {
    formatter = (value) => `${value}`;
  }

  return (
    <div className="group">
      {label && <label>{label}</label>}
      <InputNumber
        value={value}
        formatter={formatter}
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
