import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
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
  const colorRef = useRef<string>(value);

  const PickContainer = () => {
    return (
      <div className={`${prefix}-popover`}>
        <SketchPicker
          style={{
            width: '100%',
          }}
          onChange={(color) => {
            colorRef.current = color.hex;
          }}
        />
        <div className="foolter">
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
              onChange?.(colorRef.current);
              setShow(false);
            }}
          >
            确认
          </button>
        </div>
      </div>
    );
  };

  /**  react-color mouseOver 和上层事件冲突，不得已为之 */
  const CreatePickColorContainer = (visible: boolean) => {
    const exist: HTMLDivElement | null = document.querySelector(`#${prefix}-pick-color-container`);
    if (exist) {
      document.body.removeChild(exist);
    }
    if (!visible) {
      return;
    }
    const div = document.createElement('div');
    div.id = `${prefix}-pick-color-container`;
    div.className = `${prefix}-pick-color-container`;
    render(<PickContainer />, div);
    document.body.appendChild(div);
  };

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
      {CreatePickColorContainer(show)}
    </div>
  );
};

export default ColorPicker;
