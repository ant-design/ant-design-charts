import React from 'react';
import { prefix } from '../constants';

interface IProps {
  x?: number;
  y?: number;
  onChange?: (key: string, value: number) => void;
}

export const Item = ({ label, value, onChangeItem }) => (
  <div style={{ width: '48%' }}>
    <label>{label} </label>
    <br />
    <input
      type="number"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeItem(e.target.value);
      }}
    />
  </div>
);

const Position: React.FC<IProps> = (props) => {
  const { x, y, onChange } = props;

  return (
    <div
      className={`${prefix}-position`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
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
