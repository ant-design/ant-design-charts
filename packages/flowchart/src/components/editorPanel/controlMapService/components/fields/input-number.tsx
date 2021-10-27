import React from 'react';
import { InputNumber } from 'antd';
import { prefix } from '../constants';

interface IProps {
  label?: string;
  value?: number;
  min?: number;
  onChange?: (value: number) => void;
}

const InputNumberFiled: React.FC<IProps> = (props) => {
  const { label = '标签', value, onChange, min } = props;
  return (
    <div className={`${prefix}-input-number`}>
      <label>{label}</label>
      <InputNumber
        value={value}
        min={min}
        size="middle"
        onChange={(value: number) => {
          onChange?.(value);
        }}
      />
    </div>
  );
};

export default InputNumberFiled;
