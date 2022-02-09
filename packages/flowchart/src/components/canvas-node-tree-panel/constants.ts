import { ICheckboxOption } from './interface';
export const PANEL_HEADER_HEIGHT = 40;
export const PANEL_FOOTER_HEIGHT = 40;

export const TREE_ROOT_ID = 'XFLOW_TREE_PANEL_ROOT_ID';
export const CONTAINER_CLASS = 'flowchart-node-panel-collpase';

export const CHECKBOX_OPTIONS: ICheckboxOption[] = [
  {
    label: '通用节点',
    value: 'official',
    disabled: false,
  },
  {
    label: '流程图节点',
    value: 'flowchart',
    disabled: false,
  },
  {
    label: '自定义节点',
    value: 'custom',
    disabled: false,
  },
];
