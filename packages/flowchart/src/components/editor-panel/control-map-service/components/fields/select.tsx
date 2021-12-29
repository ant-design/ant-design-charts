import React from 'react';
import { Select } from 'antd';
import { FormItemHeight } from '../constants';

const { Option } = Select;

interface IProps {
  label?: string;
  value?: string;
  options?: Array<{
    label: string | number;
    value: string | number;
  }>;
  width?: number;
  onChange?: (value: string) => void;
}

const SelectField: React.FC<IProps> = (props) => {
  const { label = '箭头', value, onChange, options = [], width } = props;
  return (
    <div className="group">
      <label>{label}</label>
      <Select
        size="small"
        value={value}
        style={{
          width,
          height: FormItemHeight,
        }}
        getPopupContainer={(trigger) => trigger.parentNode}
        optionFilterProp="children"
        onChange={(value: string) => {
          onChange?.(value);
        }}
        filterOption={(input, option: any) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
