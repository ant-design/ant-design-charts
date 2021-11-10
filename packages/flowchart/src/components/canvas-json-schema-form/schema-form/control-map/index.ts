import { StringInput } from './string-input';
import { Checkbox } from './checkbox';
import { TextArea } from './text-area';
import { Select } from './select';
import { Datetime } from './datetime';
import { Float } from './float';
import type React from 'react';
import type { IControlProps } from '../../interface';

export const xflowDefaultControls: [string, React.FC<IControlProps>][] = [
  ['input', StringInput],
  ['checkbox', Checkbox],
  ['textArea', TextArea],
  ['select', Select],
  ['datetime', Datetime],
  ['float', Float],
];

export type IControlMap = Map<string, React.FC<IControlProps>>;

export const makeControlMap = (controls: [string, React.FC<IControlProps>][]) => {
  const controlMap = new Map<string, React.FC<IControlProps>>();
  controls.forEach((item) => {
    const [key, control] = item;
    const uuid = key.toLowerCase();
    if (controlMap.has(uuid)) {
      console.error(`${key} is duplicated in controlMap:`, controlMap);
    }
    controlMap.set(uuid, control);
  });
  return controlMap;
};

export const getControlFromMap = (
  key: string,
  controlMap: Map<string, React.FC<IControlProps>>,
  defaultControl: React.ComponentType<IControlProps>,
) => {
  if (controlMap.has(key)) {
    return controlMap.get(key);
  }
  const uuid = key.toLowerCase();
  if (controlMap.has(uuid)) {
    return controlMap.get(uuid);
  }
  console.warn(`${key} is not exist in controlmap, fallback to defaultControl`);
  return defaultControl;
};
