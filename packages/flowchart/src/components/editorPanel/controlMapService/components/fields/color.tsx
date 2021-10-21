import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { prefix } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ColorPicker: React.FC<IProps> = (props) => {
  const { label = '边框', value = '', onChange } = props;
  const [show, setShow] = useState(false);
  const [color, setColor] = useState<string>(value);

  return (
    <div className={`${prefix}-color-container`}>
      <label>{label}</label>
      <div
        className={`${prefix}-color`}
        style={{
          border: `1px solid ${value}`,
          backgroundColor: value,
        }}
        onClick={() => {
          setShow(true);
        }}
      />
      {show && (
        <div className={`${prefix}-popover`}>
          <SketchPicker
            style={{
              width: '100%',
            }}
            onChange={(color) => {
              setColor(color.hex);
            }}
          />
          <div
            className="foolter"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={() => {
                setShow(false);
              }}
            >
              取消
            </button>
            <button
              style={{
                color: '#fff',
                backgroundColor: 'rgb(24, 144, 255)',
                borderColor: 'rgba(4, 144, 255)',
              }}
              onClick={() => {
                onChange?.(color);
                setShow(false);
              }}
            >
              确认
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
