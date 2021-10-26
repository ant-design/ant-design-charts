import React from 'react';
import { InputNumber } from 'antd';
import { prefix } from '../constants';

interface IProps {
  x?: number;
  y?: number;
  onChange?: (key: string, value: number) => void;
}

export const Item = ({ label, value, onChangeItem }) => (
  <div className="field">
    <label>{label} </label>
    <InputNumber
      type="number"
      value={value}
      size="middle"
      onChange={(value: number) => {
        onChangeItem(value);
      }}
    />
  </div>
);

const Position: React.FC<IProps> = (props) => {
  const { x, y, onChange } = props;

  return (
    <div className={`${prefix}-position`}>
      <Item
        label="横坐标"
        value={x}
        onChangeItem={(value: number) => {
          onChange?.('x', value);
        }}
      />
      <Item
        label="纵坐标"
        value={y}
        onChangeItem={(value: number) => {
          onChange?.('y', value);
        }}
      />
    </div>
  );
};

export default Position;
