import React from 'react';
import { prefix } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<IProps> = (props) => {
  const { label = '标签', value, onChange } = props;
  return (
    <div className={`${prefix}-input`}>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
