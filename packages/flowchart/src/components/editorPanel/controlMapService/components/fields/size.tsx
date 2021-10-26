import React from 'react';
import { Item } from './position';
import { prefix } from '../constants';

interface IProps {
  width?: number;
  height?: number;
  onChange?: (key: string, value: number) => void;
}

const Size: React.FC<IProps> = (props) => {
  const { width, height, onChange } = props;

  return (
    <div className={`${prefix}-size`}>
      <Item
        label="宽度"
        value={width}
        onChangeItem={(value: number) => {
          onChange?.('width', value);
        }}
      />
      <Item
        label="高度"
        value={height}
        onChangeItem={(value: number) => {
          onChange?.('height', value);
        }}
      />
    </div>
  );
};

export default Size;
