import React from 'react';
import { Input } from 'antd';
import { prefix } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputFiled: React.FC<IProps> = (props) => {
  const { label = '标签', value, onChange } = props;
  return (
    <div className={`${prefix}-input`}>
      <label>{label}</label>
      <Input
        defaultValue={value}
        size="middle"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(e.target.value);
        }}
      />
    </div>
  );
};

export default InputFiled;
