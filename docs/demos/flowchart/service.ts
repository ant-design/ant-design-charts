import type { NsConfigFormPanel } from '@ant-design/charts';
import { controlMapService } from './custom';

export const formSchemaService: NsConfigFormPanel.IFormSchamaService = async (args) => {
  const { targetType } = args;
  /** 获取 graphMeta */
  const nodeSchema: NsConfigFormPanel.ISchema = {
    tabs: [
      {
        name: '属性',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '重命名',
                /** 使用自定义shape */
                shape: 'custom-rename',
                placeholder: 'rename',
                disabled: false,
                a: 1,
              },
            ],
          },
        ],
      },
      {
        name: '位置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: 'X',
                /** 使用自定义shape */
                shape: 'custom-position',
              },
            ],
          },
        ],
      },
    ],
  };

  const edgeSchema: NsConfigFormPanel.ISchema = {
    tabs: [
      {
        name: '属性',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '重命名',
                name: 'Tab1-0',
                /** 使用自定义shape */
                shape: 'custom-label',
              },
            ],
          },
        ],
      },
    ],
  };

  if (targetType === 'node') {
    return nodeSchema;
  }

  if (targetType === 'edge') {
    return edgeSchema;
  }

  return {
    tabs: [],
  };
};

export { controlMapService };
