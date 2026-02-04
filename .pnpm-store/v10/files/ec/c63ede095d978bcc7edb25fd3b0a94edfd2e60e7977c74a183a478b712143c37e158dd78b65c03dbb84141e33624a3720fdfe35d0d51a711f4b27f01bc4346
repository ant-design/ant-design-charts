import { Select, Spin } from 'antd';
import React from 'react';
import { useGraphin } from '../../context';
import './index.less';

interface LayoutOption {
  type: string;
  label?: string;
  icon: React.ReactNode;
}

interface LayoutSelectorProps {
  options: LayoutOption[];
  onChange: (value: string) => void;
  value?: string;
}

export const LayoutSelector: React.FC<LayoutSelectorProps> = (props) => {
  const { value, onChange, options } = props;
  const { graph, isReady } = useGraphin();

  return (
    <div className="graphin-layout-selector">
      <Spin spinning={!isReady}>
        <Select className="selector" value={value} onChange={onChange}>
          {options.map((item) => {
            const { type, label, icon } = item;
            return (
              <Select.Option key={type} value={type}>
                {icon} &nbsp;
                {label || type}
              </Select.Option>
            );
          })}
        </Select>
      </Spin>
    </div>
  );
};
