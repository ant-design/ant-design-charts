import type { NsJsonSchemaForm } from '@ali/xflow';

export const defaultFormSchemaService: NsJsonSchemaForm.IFormSchemaService = async (args) => {
  const { targetType } = args;
  const nodeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '基本信息',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '节点名',
                name: 'node-service',
                shape: 'node-service',
                placeholder: '节点名称',
              },
            ],
          },
        ],
      },
    ],
  };
  const edgeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '基本信息',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '边',
                name: 'edge-service',
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
  } as NsJsonSchemaForm.ISchema;
};
