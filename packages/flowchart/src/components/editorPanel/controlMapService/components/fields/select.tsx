import React from 'react';
import { Select } from 'antd';
import { prefix } from '../constants';

const { Option } = Select;

interface IProps {
  label?: string;
  value?: string;
  options?: Array<{
    label: string | number;
    value: string | number;
  }>;
  onChange?: (value: string) => void;
}

const SelectField: React.FC<IProps> = (props) => {
  const { label = '箭头', value, onChange, options = [] } = props;
  return (
    <div className={`${prefix}-input`}>
      <label>{label}</label>
      <Select
        showSearch
        size="middle"
        value={value}
        optionFilterProp="children"
        onChange={(value: string) => {
          onChange?.(value);
        }}
        filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {options.map((option) => (
          <Option key={option.label} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectField;
