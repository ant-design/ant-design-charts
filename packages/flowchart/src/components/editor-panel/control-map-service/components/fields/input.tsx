import React from 'react';
import { Input } from 'antd';
import { FormItemHeight } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputFiled: React.FC<IProps> = (props) => {
  const { label = '标签', value, onChange } = props;
  return (
    <div className="group">
      <label>{label}</label>
      <Input
        value={value}
        style={{
          height: FormItemHeight,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(e.target.value);
        }}
      />
    </div>
  );
};

export default InputFiled;
