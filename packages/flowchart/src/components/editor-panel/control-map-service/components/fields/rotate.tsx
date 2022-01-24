import React from 'react';
import { Item } from './position';
import { Button } from 'antd';

interface IProps {
  angel?: number;
  onChange?: (key: string, value: number) => void;
  onRotate?: (key: string) => void;
}

const Rotate: React.FC<IProps> = (props) => {
  const { angel, onChange, onRotate } = props;
  return (
    <div className="group">
      <label>角度</label>
      <div className="split">
        <Item
          addonBefore="度"
          value={angel}
          onChangeItem={(value: number) => {
            onChange?.('angel', value);
          }}
        />
        <Button onClick={() => onRotate('angel')}>旋转90度</Button>
      </div>
    </div>
  );
};

export default Rotate;
