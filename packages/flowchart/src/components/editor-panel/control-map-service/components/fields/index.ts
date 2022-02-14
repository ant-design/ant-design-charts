import InputFiled from './input';
import ColorPicker from './color';
import InputNumberFiled from './input-number';
import Size from './size';
import Position from './position';
import SelectField from './select';
import Rotate from './rotate';
import InputOpacity from './input-opacity';
export const EditorPanels: { [key: string]: React.FC } = {
  InputFiled,
  ColorPicker,
  InputNumberFiled,
  Size,
  Position,
  SelectField,
  Rotate,
  InputOpacity,
};

export { InputFiled, ColorPicker, InputNumberFiled, Size, Position, SelectField, Rotate, InputOpacity };
