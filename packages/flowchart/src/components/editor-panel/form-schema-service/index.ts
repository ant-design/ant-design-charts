import type { NsJsonSchemaForm } from '@antv/xflow';

export const defaultFormSchemaService: NsJsonSchemaForm.IFormSchemaService = async (args) => {
  const { targetType } = args;
  const isGroup = args.targetData?.isGroup;

  const groupSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '分组名',
                name: 'group-service',
                shape: 'group-service',
                placeholder: '分组名称',
              },
            ],
          },
        ],
      },
    ],
  };

  const nodeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: '设置',
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
        name: '设置',
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

  if (isGroup) {
    return groupSchema;
  }

  if (targetType === 'node') {
    return nodeSchema;
  }

  if (targetType === 'edge') {
    return edgeSchema;
  }
  return {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '',
                name: 'canvas-service',
                shape: 'canvas-service',
              },
            ],
          },
        ],
      },
    ],
  } as NsJsonSchemaForm.ISchema;
};
