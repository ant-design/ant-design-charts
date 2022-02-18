import InputFiled from './input';
import ColorPicker from './color';
import InputNumberFiled from './input-number';
import Size from './size';
import Position from './position';
import SelectField from './select';
import Rotate from './rotate';
import InputOpacity from './input-opacity';
import InputFontSpacing from './font-spacing';
import InputFontPosition from './font-position';
export const EditorPanels: { [key: string]: React.FC } = {
  InputFiled,
  ColorPicker,
  InputNumberFiled,
  Size,
  Position,
  SelectField,
  Rotate,
  InputOpacity,
  InputFontPosition,
};

export {
  InputFiled,
  ColorPicker,
  InputNumberFiled,
  Size,
  Position,
  SelectField,
  Rotate,
  InputOpacity,
  InputFontSpacing,
  InputFontPosition,
};
