import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import { SketchPicker } from 'react-color';
import { prefix } from '../constants';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ColorPicker: React.FC<IProps> = (props) => {
  const { label, value = '', onChange } = props;
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
          <Button
            onClick={() => {
              setShow(false);
            }}
          >
            取消
          </Button>
          <Button
            type="primary"
            onClick={() => {
              onChange?.(colorRef.current);
              setShow(false);
            }}
          >
            确认
          </Button>
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
    <div className="group">
      {label && <label>{label}</label>}
      <div
        className={`${prefix}-color-container`}
        onClick={() => {
          setShow(true);
        }}
      >
        <div
          className={`${prefix}-color`}
          style={{
            backgroundColor: value,
            height: '100%',
          }}
        ></div>
      </div>
      {CreatePickColorContainer(show)}
    </div>
  );
};

export default ColorPicker;
