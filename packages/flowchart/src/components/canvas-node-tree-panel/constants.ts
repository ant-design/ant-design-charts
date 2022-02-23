import { ICheckboxOption } from './interface';
export const PANEL_HEADER_HEIGHT = 40;
export const PANEL_FOOTER_HEIGHT = 40;

export const TREE_ROOT_ID = 'XFLOW_TREE_PANEL_ROOT_ID';
export const CONTAINER_CLASS = 'flowchart-node-panel-collpase';

export const CHECKBOX_OPTIONS: ICheckboxOption[] = [
  {
    label: '通用节点',
    value: 'common',
    disabled: false,
  },
  {
    label: '流程图节点',
    value: 'flowchart',
    disabled: false,
  },
];
export const TYPE_IMG_MAP = {
  common: 'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*HVZwQYtQ9cIAAAAAAAAAAAAAARQnAQ',
  flowchart: 'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*c-IOS6IAEAQAAAAAAAAAAAAAARQnAQ',
};
