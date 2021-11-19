import React from 'react';
import ReactDOM from 'react-dom';
import { Flowchart } from '@ant-design/charts';

const DATA = {
  nodes: [
    {
      id: 'node-63cd90e9-090b-4a52-b003-084fe8512d37',
      parentId: '',
      renderKey: 'Terminal',
      name: 'Terminal',
      label: '开始',
      width: 100,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: '3c0f5d34-3ab9-40a6-bfd8-bfe736fd8b59' },
          { group: 'right', id: '1911685f-a894-4e63-ace4-db386ae97bad' },
          { group: 'bottom', id: '25aed5b5-ad0e-4638-8775-de00294097f1' },
          { group: 'left', id: '9989c947-1b39-4635-b9aa-bb5e6ad9351e' },
        ],
        groups: {
          top: {
            position: { name: 'top' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          right: {
            position: { name: 'right' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          bottom: {
            position: { name: 'bottom' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          left: {
            position: { name: 'left' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
        },
      },
      isLeaf: true,
      x: 580,
      y: 80,
      zIndex: 10,
      stroke: '#417505',
    },
    {
      id: 'node-915545b7-7723-4ccc-8970-3309da79a0d5',
      parentId: '',
      renderKey: 'Process',
      name: 'Process',
      label: '步骤1',
      width: 100,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: '7643ce5d-4e4c-4776-affd-6f2ca0335dcc' },
          { group: 'right', id: 'fea7703c-2d37-46f0-b310-0955864644ba' },
          { group: 'bottom', id: '1fa43052-ace7-44ff-b64b-82fdf3a48298' },
          { group: 'left', id: '497cc3ac-68f4-4c50-b99e-1c8fa7a7c457' },
        ],
        groups: {
          top: {
            position: { name: 'top' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          right: {
            position: { name: 'right' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          bottom: {
            position: { name: 'bottom' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          left: {
            position: { name: 'left' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
        },
      },
      isLeaf: true,
      x: 580,
      y: 180,
      zIndex: 10,
      stroke: '#000000',
      fill: '#7ed321',
    },
    {
      id: 'node-79008d10-2f11-459c-888b-032ae29b8952',
      parentId: '',
      renderKey: 'Decision',
      name: 'Decision',
      label: '条件P',
      width: 100,
      height: 60,
      ports: {
        items: [
          { group: 'top', id: 'a90ca41d-3c7d-46d3-9a09-0a68e5923822' },
          { group: 'right', id: '5a5874a5-39ba-432a-b595-ff043912c57f' },
          { group: 'bottom', id: 'd007cc53-7925-4f82-87ac-673bd96404e2' },
          { group: 'left', id: 'd872380e-a3ba-4147-9a77-3a7b0d1c2f45' },
        ],
        groups: {
          top: {
            position: { name: 'top' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          right: {
            position: { name: 'right' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          bottom: {
            position: { name: 'bottom' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          left: {
            position: { name: 'left' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
        },
      },
      isLeaf: true,
      x: 580,
      y: 278,
      zIndex: 10,
      fill: '#f8e71c',
      stroke: '#000000',
    },
    {
      id: 'node-c657806d-dd71-4a89-b4ec-fc5fad51b843',
      parentId: '',
      renderKey: 'Process',
      name: 'Process',
      label: '步骤2',
      width: 100,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: 'ec0aa7a6-40fe-4082-94e0-d98742ab062f' },
          { group: 'right', id: '79e56de6-b111-4b23-a89f-7dc244c0b02e' },
          { group: 'bottom', id: '8a32bebe-4fe8-4482-a40d-0a1ae7537246' },
          { group: 'left', id: 'ed13ee18-2198-4002-9bb2-89bc2e28ee72' },
        ],
        groups: {
          top: {
            position: { name: 'top' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          right: {
            position: { name: 'right' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          bottom: {
            position: { name: 'bottom' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          left: {
            position: { name: 'left' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
        },
      },
      isLeaf: true,
      x: 580,
      y: 402,
      zIndex: 10,
      stroke: '#50e3c2',
    },
    {
      id: 'node-f6ccc339-9a05-4bf1-ad25-bfb956ff9388',
      parentId: '',
      renderKey: 'Terminal',
      name: 'Terminal',
      label: '结束',
      width: 100,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: '481bf3a3-e4fc-40fc-be77-766a8ecb9360' },
          { group: 'right', id: 'ffc158ad-8ad5-4e33-a68a-50e2f1eb4794' },
          { group: 'bottom', id: 'efad4b89-681a-4c4a-b30a-6868cc2219a3' },
          { group: 'left', id: '588ceaae-2f21-4040-9325-ccae4d44484c' },
        ],
        groups: {
          top: {
            position: { name: 'top' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          right: {
            position: { name: 'right' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          bottom: {
            position: { name: 'bottom' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          left: {
            position: { name: 'left' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
        },
      },
      isLeaf: true,
      x: 580,
      y: 499,
      zIndex: 10,
      stroke: '#bd10e0',
    },
    {
      id: 'node-e07e6834-7d15-4b3c-9b40-8f234fca363e',
      parentId: '',
      renderKey: 'Process',
      name: 'Process',
      label: '步骤3',
      width: 100,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: '273b21fc-7b54-4819-83ca-3b0547976d5d' },
          { group: 'right', id: '42fce1fe-d257-4a08-8ac0-5804403e0ed0' },
          { group: 'bottom', id: '29465bdc-72ef-445d-9dc3-ac833c855658' },
          { group: 'left', id: '281f8f42-b772-4507-a56b-718f8ecc2a9b' },
        ],
        groups: {
          top: {
            position: { name: 'top' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          right: {
            position: { name: 'right' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          bottom: {
            position: { name: 'bottom' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          left: {
            position: { name: 'left' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
        },
      },
      isLeaf: true,
      x: 810,
      y: 288,
      zIndex: 10,
      stroke: '#000000',
      fill: '#7ed321',
      group: '5f8e6625-9a79-4d0e-9ae3-023421a10c60',
      isCollapsed: false,
    },
    {
      id: 'node-3f701e75-5116-4a62-8717-1fe8f71c920a',
      parentId: '',
      renderKey: 'Database',
      name: 'Database',
      label: '步骤4',
      width: 100,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: '6ef1c94f-4083-4bd0-b35a-f68c6744f374' },
          { group: 'right', id: 'add1041d-6c42-4d9a-866b-1a2d16d74461' },
          { group: 'bottom', id: 'e2e4400d-b102-4685-a288-df626d54efa3' },
          { group: 'left', id: '85c0f07c-e618-4734-b541-1676eefa4cf0' },
        ],
        groups: {
          top: {
            position: { name: 'top' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          right: {
            position: { name: 'right' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          bottom: {
            position: { name: 'bottom' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
          left: {
            position: { name: 'left' },
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
            zIndex: 10,
          },
        },
      },
      isLeaf: true,
      x: 811,
      y: 374,
      zIndex: 10,
      stroke: '#bd10e0',
      group: '5f8e6625-9a79-4d0e-9ae3-023421a10c60',
      isCollapsed: false,
    },
    {
      id: '5f8e6625-9a79-4d0e-9ae3-023421a10c60',
      renderKey: 'GROUP_NODE_RENDER_ID',
      groupChildren: ['node-e07e6834-7d15-4b3c-9b40-8f234fca363e', 'node-3f701e75-5116-4a62-8717-1fe8f71c920a'],
      groupCollapsedSize: { width: 200, height: 40 },
      label: '异常处理',
      zIndex: 10,
      width: 170,
      height: 190,
      groupChildrenSize: { width: 182, height: 192 },
      x: 770,
      y: 252,
      isGroup: true,
      stroke: '#f5a623',
    },
  ],
  edges: [
    {
      id: '[object Object]:25aed5b5-ad0e-4638-8775-de00294097f1-[object Object]:7643ce5d-4e4c-4776-affd-6f2ca0335dcc',
      targetPortId: '7643ce5d-4e4c-4776-affd-6f2ca0335dcc',
      sourcePortId: '25aed5b5-ad0e-4638-8775-de00294097f1',
      source: { cell: 'node-63cd90e9-090b-4a52-b003-084fe8512d37', port: '25aed5b5-ad0e-4638-8775-de00294097f1' },
      target: { cell: 'node-915545b7-7723-4ccc-8970-3309da79a0d5', port: '7643ce5d-4e4c-4776-affd-6f2ca0335dcc' },
      zIndex: 1,
      attrs: {
        line: {
          stroke: '#A2B1C3',
          targetMarker: { name: 'block', width: 12, height: 8 },
          strokeDasharray: '5 5',
          strokeWidth: 1,
        },
      },
      data: {
        targetPortId: '7643ce5d-4e4c-4776-affd-6f2ca0335dcc',
        sourcePortId: '25aed5b5-ad0e-4638-8775-de00294097f1',
        source: 'node-63cd90e9-090b-4a52-b003-084fe8512d37',
        target: 'node-915545b7-7723-4ccc-8970-3309da79a0d5',
      },
    },
    {
      id: '[object Object]:1fa43052-ace7-44ff-b64b-82fdf3a48298-[object Object]:a90ca41d-3c7d-46d3-9a09-0a68e5923822',
      targetPortId: 'a90ca41d-3c7d-46d3-9a09-0a68e5923822',
      sourcePortId: '1fa43052-ace7-44ff-b64b-82fdf3a48298',
      source: { cell: 'node-915545b7-7723-4ccc-8970-3309da79a0d5', port: '1fa43052-ace7-44ff-b64b-82fdf3a48298' },
      target: { cell: 'node-79008d10-2f11-459c-888b-032ae29b8952', port: 'a90ca41d-3c7d-46d3-9a09-0a68e5923822' },
      zIndex: 1,
      attrs: {
        line: {
          stroke: '#A2B1C3',
          targetMarker: { name: 'block', width: 12, height: 8 },
          strokeDasharray: '5 5',
          strokeWidth: 1,
        },
      },
      data: {
        targetPortId: 'a90ca41d-3c7d-46d3-9a09-0a68e5923822',
        sourcePortId: '1fa43052-ace7-44ff-b64b-82fdf3a48298',
        source: 'node-915545b7-7723-4ccc-8970-3309da79a0d5',
        target: 'node-79008d10-2f11-459c-888b-032ae29b8952',
      },
    },
    {
      id: '[object Object]:d007cc53-7925-4f82-87ac-673bd96404e2-[object Object]:ec0aa7a6-40fe-4082-94e0-d98742ab062f',
      targetPortId: 'ec0aa7a6-40fe-4082-94e0-d98742ab062f',
      sourcePortId: 'd007cc53-7925-4f82-87ac-673bd96404e2',
      source: { cell: 'node-79008d10-2f11-459c-888b-032ae29b8952', port: 'd007cc53-7925-4f82-87ac-673bd96404e2' },
      target: { cell: 'node-c657806d-dd71-4a89-b4ec-fc5fad51b843', port: 'ec0aa7a6-40fe-4082-94e0-d98742ab062f' },
      zIndex: 1,
      attrs: {
        line: {
          stroke: '#50e3c2',
          targetMarker: { name: 'block', width: 12, height: 8 },
          strokeDasharray: '5 5',
          strokeWidth: 1,
          label: '是',
        },
      },
      data: {
        targetPortId: 'ec0aa7a6-40fe-4082-94e0-d98742ab062f',
        sourcePortId: 'd007cc53-7925-4f82-87ac-673bd96404e2',
        source: 'node-79008d10-2f11-459c-888b-032ae29b8952',
        target: 'node-c657806d-dd71-4a89-b4ec-fc5fad51b843',
      },
      stroke: '#50e3c2',
      label: '是',
    },
    {
      id: '[object Object]:8a32bebe-4fe8-4482-a40d-0a1ae7537246-[object Object]:481bf3a3-e4fc-40fc-be77-766a8ecb9360',
      targetPortId: '481bf3a3-e4fc-40fc-be77-766a8ecb9360',
      sourcePortId: '8a32bebe-4fe8-4482-a40d-0a1ae7537246',
      source: { cell: 'node-c657806d-dd71-4a89-b4ec-fc5fad51b843', port: '8a32bebe-4fe8-4482-a40d-0a1ae7537246' },
      target: { cell: 'node-f6ccc339-9a05-4bf1-ad25-bfb956ff9388', port: '481bf3a3-e4fc-40fc-be77-766a8ecb9360' },
      zIndex: 1,
      attrs: {
        line: {
          stroke: '#bd10e0',
          targetMarker: { name: 'block', width: 12, height: 8 },
          strokeDasharray: '5 5',
          strokeWidth: 1,
        },
      },
      data: {
        targetPortId: '481bf3a3-e4fc-40fc-be77-766a8ecb9360',
        sourcePortId: '8a32bebe-4fe8-4482-a40d-0a1ae7537246',
        source: 'node-c657806d-dd71-4a89-b4ec-fc5fad51b843',
        target: 'node-f6ccc339-9a05-4bf1-ad25-bfb956ff9388',
      },
      stroke: '#bd10e0',
    },
    {
      id: '[object Object]:5a5874a5-39ba-432a-b595-ff043912c57f-[object Object]:281f8f42-b772-4507-a56b-718f8ecc2a9b',
      targetPortId: '281f8f42-b772-4507-a56b-718f8ecc2a9b',
      sourcePortId: '5a5874a5-39ba-432a-b595-ff043912c57f',
      source: { cell: 'node-79008d10-2f11-459c-888b-032ae29b8952', port: '5a5874a5-39ba-432a-b595-ff043912c57f' },
      target: { cell: 'node-e07e6834-7d15-4b3c-9b40-8f234fca363e', port: '281f8f42-b772-4507-a56b-718f8ecc2a9b' },
      zIndex: 1,
      attrs: {
        line: {
          stroke: '#f5a623',
          targetMarker: { name: 'block', width: 12, height: 8 },
          strokeDasharray: '5 5',
          strokeWidth: 1,
          label: '否',
        },
      },
      data: {
        targetPortId: '281f8f42-b772-4507-a56b-718f8ecc2a9b',
        sourcePortId: '5a5874a5-39ba-432a-b595-ff043912c57f',
        source: 'node-79008d10-2f11-459c-888b-032ae29b8952',
        target: 'node-e07e6834-7d15-4b3c-9b40-8f234fca363e',
      },
      label: '否',
      stroke: '#f5a623',
    },
    {
      id: '[object Object]:29465bdc-72ef-445d-9dc3-ac833c855658-[object Object]:6ef1c94f-4083-4bd0-b35a-f68c6744f374',
      targetPortId: '6ef1c94f-4083-4bd0-b35a-f68c6744f374',
      sourcePortId: '29465bdc-72ef-445d-9dc3-ac833c855658',
      source: { cell: 'node-e07e6834-7d15-4b3c-9b40-8f234fca363e', port: '29465bdc-72ef-445d-9dc3-ac833c855658' },
      target: { cell: 'node-3f701e75-5116-4a62-8717-1fe8f71c920a', port: '6ef1c94f-4083-4bd0-b35a-f68c6744f374' },
      zIndex: 1,
      attrs: {
        line: {
          stroke: '#A2B1C3',
          targetMarker: { name: 'block', width: 12, height: 8 },
          strokeDasharray: '5 5',
          strokeWidth: 1,
        },
      },
      data: {
        targetPortId: '6ef1c94f-4083-4bd0-b35a-f68c6744f374',
        sourcePortId: '29465bdc-72ef-445d-9dc3-ac833c855658',
        source: 'node-e07e6834-7d15-4b3c-9b40-8f234fca363e',
        target: 'node-3f701e75-5116-4a62-8717-1fe8f71c920a',
      },
    },
    {
      id: '[object Object]:e2e4400d-b102-4685-a288-df626d54efa3-[object Object]:ffc158ad-8ad5-4e33-a68a-50e2f1eb4794',
      targetPortId: 'ffc158ad-8ad5-4e33-a68a-50e2f1eb4794',
      sourcePortId: 'e2e4400d-b102-4685-a288-df626d54efa3',
      source: { cell: 'node-3f701e75-5116-4a62-8717-1fe8f71c920a', port: 'e2e4400d-b102-4685-a288-df626d54efa3' },
      target: { cell: 'node-f6ccc339-9a05-4bf1-ad25-bfb956ff9388', port: 'ffc158ad-8ad5-4e33-a68a-50e2f1eb4794' },
      zIndex: 1,
      attrs: {
        line: {
          stroke: '#A2B1C3',
          targetMarker: { name: 'block', width: 12, height: 8 },
          strokeDasharray: '5 5',
          strokeWidth: 1,
        },
      },
      data: {
        targetPortId: 'ffc158ad-8ad5-4e33-a68a-50e2f1eb4794',
        sourcePortId: 'e2e4400d-b102-4685-a288-df626d54efa3',
        source: 'node-3f701e75-5116-4a62-8717-1fe8f71c920a',
        target: 'node-f6ccc339-9a05-4bf1-ad25-bfb956ff9388',
      },
    },
  ],
};

const DemoFlowchart = () => {
  return (
    <div style={{ height: 600 }}>
      <Flowchart
        data={DATA}
        toolbarPanelProps={{
          show: false,
          position: {
            top: 0,
            left: 0,
            right: 0,
          },
        }}
        canvasProps={{
          position: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
        nodePanelProps={{
          show: false,
        }}
        detailPanelProps={{
          show: false,
        }}
      />
    </div>
  );
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
