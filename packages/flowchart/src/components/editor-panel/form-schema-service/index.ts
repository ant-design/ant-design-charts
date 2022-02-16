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
        name: '样式',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '节点样式',
                name: 'node-style',
                shape: 'node-style',
                placeholder: '节点样式',
              },
            ],
          },
        ],
      },
      {
        name: '字体',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '字体样式',
                name: 'node-text',
                shape: 'node-text',
                placeholder: '字体样式',
              },
            ],
          },
        ],
      },
      {
        name: '布局',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '节点布局',
                name: 'node-arrange',
                shape: 'node-arrange',
                placeholder: '节点布局',
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
