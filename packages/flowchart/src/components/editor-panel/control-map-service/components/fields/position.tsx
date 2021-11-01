import React from 'react';
import { InputNumber } from 'antd';
import { FormItemHeight } from '../constants';

interface IProps {
  x?: number;
  y?: number;
  onChange?: (key: string, value: number) => void;
}

export const Item = ({ value, onChangeItem, addonAfter }) => (
  <InputNumber
    // @ts-ignore
    addonAfter={addonAfter}
    value={value}
    style={{ height: FormItemHeight }}
    onChange={(value: number) => {
      onChangeItem(value);
    }}
  />
);

const Position: React.FC<IProps> = (props) => {
  const { x, y, onChange } = props;

  return (
    <div className="group">
      <label>位置</label>
      <div className="split">
        <Item
          addonAfter="X"
          value={x}
          onChangeItem={(value: number) => {
            onChange?.('x', value);
          }}
        />
        <Item
          addonAfter="Y"
          value={y}
          onChangeItem={(value: number) => {
            onChange?.('y', value);
          }}
        />
      </div>
    </div>
  );
};

export default Position;
