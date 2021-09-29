import type { NsConfigFormPanel } from '@ali/xflow';

export const defaultFormSchemaService: NsConfigFormPanel.IFormSchamaService = async (args) => {
  const { targetType } = args;
  const nodeSchema: NsConfigFormPanel.ISchema = {
    tabs: [
      {
        name: '基本信息',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '节点名',
                shape: 'node-service',
                placeholder: '节点名称',
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
        name: '基本信息',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '边',
                shape: 'edge-service',
                placeholder: '边名称',
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
