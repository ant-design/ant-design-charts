import React from 'react';
import { InputNumber } from 'antd';
import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: number;
  min?: number;
  width?: number;
  onChange?: (value: number) => void;
}

const InputNumberFiled: React.FC<IProps> = (props) => {
  const { label, value, onChange, min, width } = props;
  return (
    <div className="group">
      {label && <label>{label}</label>}
      <InputNumber
        value={value}
        min={min}
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
