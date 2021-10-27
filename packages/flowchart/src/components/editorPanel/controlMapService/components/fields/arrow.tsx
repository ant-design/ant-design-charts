import React from 'react';
import { Select } from 'antd';
import { prefix } from '../constants';

const { Option } = Select;

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Arrow: React.FC<IProps> = (props) => {
  const { label = '箭头', value, onChange } = props;
  return (
    <div className={`${prefix}-input`}>
      <label>{label}</label>
      <Select
        showSearch
        size="middle"
        defaultValue={value}
        optionFilterProp="children"
        onChange={(value: string) => {
          onChange?.(value);
        }}
        filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="target">正向</Option>
        <Option value="source">逆向</Option>
        <Option value="all">双向</Option>
      </Select>
    </div>
  );
};

export default Arrow;
