import React from 'react';
import ReactDOM from 'react-dom';
import { Flowchart } from '@ant-design/charts';

const DATA = {
  nodes: [
    {
      id: 'node-490af0e2-179b-4bb4-90f4-e9056f54c96a',
      parentId: '',
      renderKey: 'Process',
      name: 'Process',
      label: '',
      width: 60,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: '4bdba5d8-64fd-4bc8-af98-a12eb211fbda' },
          { group: 'right', id: '2273d984-7a12-48d0-8f68-345d42dd558f' },
          { group: 'bottom', id: '54df8253-7736-47c6-84fa-a9ea9f0418d1' },
          { group: 'left', id: 'ff4b21f8-75ee-4f61-8a19-56a4b7cfee24' },
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
      x: 300,
      y: 170,
      zIndex: 10,
    },
    {
      id: 'node-01a892c1-8ef0-46b4-8a3d-63bc161f3682',
      parentId: '',
      renderKey: 'Terminal',
      name: 'Terminal',
      label: '',
      width: 60,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: 'bda4021c-83ee-45ba-b014-e23c850e581e' },
          { group: 'right', id: '5fa25285-da26-4dcd-8f17-35c7f4f895a5' },
          { group: 'bottom', id: 'b8039a97-4f9b-4426-83ad-61b03fd04fff' },
          { group: 'left', id: 'ee9f3ce2-ee53-4772-a52d-2d93ddd1a970' },
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
      x: 301,
      y: 89,
      zIndex: 10,
    },
    {
      id: 'node-8bb6fa6a-0395-4810-9930-8b67a1687c3b',
      parentId: '',
      renderKey: 'Decision',
      name: 'Decision',
      label: '',
      width: 60,
      height: 50,
      ports: {
        items: [
          { group: 'top', id: 'a34e37ea-9093-4c7e-9166-46da8a438bf6' },
          { group: 'right', id: 'a948676b-989c-46e1-9528-b8740df9d455' },
          { group: 'bottom', id: '6f399026-a092-4712-bed5-9b02ec7b9f21' },
          { group: 'left', id: '393ef6f3-8894-4746-b105-2e12bd5d2127' },
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
      x: 300,
      y: 259,
      zIndex: 10,
    },
    {
      id: 'node-b00a889a-8a6e-403e-994e-ba0a7214ce12',
      parentId: '',
      renderKey: 'Process',
      name: 'Process',
      label: '',
      width: 60,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: '8b9fc7f8-893b-47a3-a6f9-77e1a24d7f09' },
          { group: 'right', id: '3729c269-436a-4f42-a2b5-30c7671c644b' },
          { group: 'bottom', id: '445388fa-b2fe-4fc8-9cd8-be6506df9c46' },
          { group: 'left', id: 'f4afd8e9-7847-46d5-9f17-d82b0b58dbc5' },
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
      x: 423,
      y: 264,
      zIndex: 10,
    },
    {
      id: 'node-ce7a046c-3284-4aae-a080-12b09194e049',
      parentId: '',
      renderKey: 'Terminal',
      name: 'Terminal',
      label: '',
      width: 60,
      height: 40,
      ports: {
        items: [
          { group: 'top', id: 'ebe8e374-7f54-4aa2-94d3-d235c7bda077' },
          { group: 'right', id: '1cf2f87c-8bed-4687-8146-5b98df61cc4d' },
          { group: 'bottom', id: '953791a5-8a3c-4b61-97ff-cac3820af7de' },
          { group: 'left', id: 'dae01c2c-b2c1-433d-914e-f548b3ceaac7' },
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
      x: 300,
      y: 391,
      zIndex: 10,
    },
  ],
  edges: [
    {
      id: '[object Object]:b8039a97-4f9b-4426-83ad-61b03fd04fff-[object Object]:4bdba5d8-64fd-4bc8-af98-a12eb211fbda',
      targetPortId: '4bdba5d8-64fd-4bc8-af98-a12eb211fbda',
      sourcePortId: 'b8039a97-4f9b-4426-83ad-61b03fd04fff',
      source: { cell: 'node-01a892c1-8ef0-46b4-8a3d-63bc161f3682', port: 'b8039a97-4f9b-4426-83ad-61b03fd04fff' },
      target: { cell: 'node-490af0e2-179b-4bb4-90f4-e9056f54c96a', port: '4bdba5d8-64fd-4bc8-af98-a12eb211fbda' },
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
        targetPortId: '4bdba5d8-64fd-4bc8-af98-a12eb211fbda',
        sourcePortId: 'b8039a97-4f9b-4426-83ad-61b03fd04fff',
        source: 'node-01a892c1-8ef0-46b4-8a3d-63bc161f3682',
        target: 'node-490af0e2-179b-4bb4-90f4-e9056f54c96a',
      },
    },
    {
      id: '[object Object]:54df8253-7736-47c6-84fa-a9ea9f0418d1-[object Object]:a34e37ea-9093-4c7e-9166-46da8a438bf6',
      targetPortId: 'a34e37ea-9093-4c7e-9166-46da8a438bf6',
      sourcePortId: '54df8253-7736-47c6-84fa-a9ea9f0418d1',
      source: { cell: 'node-490af0e2-179b-4bb4-90f4-e9056f54c96a', port: '54df8253-7736-47c6-84fa-a9ea9f0418d1' },
      target: { cell: 'node-8bb6fa6a-0395-4810-9930-8b67a1687c3b', port: 'a34e37ea-9093-4c7e-9166-46da8a438bf6' },
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
        targetPortId: 'a34e37ea-9093-4c7e-9166-46da8a438bf6',
        sourcePortId: '54df8253-7736-47c6-84fa-a9ea9f0418d1',
        source: 'node-490af0e2-179b-4bb4-90f4-e9056f54c96a',
        target: 'node-8bb6fa6a-0395-4810-9930-8b67a1687c3b',
      },
    },
    {
      id: '[object Object]:6f399026-a092-4712-bed5-9b02ec7b9f21-[object Object]:ebe8e374-7f54-4aa2-94d3-d235c7bda077',
      targetPortId: 'ebe8e374-7f54-4aa2-94d3-d235c7bda077',
      sourcePortId: '6f399026-a092-4712-bed5-9b02ec7b9f21',
      source: { cell: 'node-8bb6fa6a-0395-4810-9930-8b67a1687c3b', port: '6f399026-a092-4712-bed5-9b02ec7b9f21' },
      target: { cell: 'node-ce7a046c-3284-4aae-a080-12b09194e049', port: 'ebe8e374-7f54-4aa2-94d3-d235c7bda077' },
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
        targetPortId: 'ebe8e374-7f54-4aa2-94d3-d235c7bda077',
        sourcePortId: '6f399026-a092-4712-bed5-9b02ec7b9f21',
        source: 'node-8bb6fa6a-0395-4810-9930-8b67a1687c3b',
        target: 'node-ce7a046c-3284-4aae-a080-12b09194e049',
      },
    },
    {
      id: '[object Object]:a948676b-989c-46e1-9528-b8740df9d455-[object Object]:f4afd8e9-7847-46d5-9f17-d82b0b58dbc5',
      targetPortId: 'f4afd8e9-7847-46d5-9f17-d82b0b58dbc5',
      sourcePortId: 'a948676b-989c-46e1-9528-b8740df9d455',
      source: { cell: 'node-8bb6fa6a-0395-4810-9930-8b67a1687c3b', port: 'a948676b-989c-46e1-9528-b8740df9d455' },
      target: { cell: 'node-b00a889a-8a6e-403e-994e-ba0a7214ce12', port: 'f4afd8e9-7847-46d5-9f17-d82b0b58dbc5' },
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
        targetPortId: 'f4afd8e9-7847-46d5-9f17-d82b0b58dbc5',
        sourcePortId: 'a948676b-989c-46e1-9528-b8740df9d455',
        source: 'node-8bb6fa6a-0395-4810-9930-8b67a1687c3b',
        target: 'node-b00a889a-8a6e-403e-994e-ba0a7214ce12',
      },
    },
    {
      id: '[object Object]:445388fa-b2fe-4fc8-9cd8-be6506df9c46-[object Object]:1cf2f87c-8bed-4687-8146-5b98df61cc4d',
      targetPortId: '1cf2f87c-8bed-4687-8146-5b98df61cc4d',
      sourcePortId: '445388fa-b2fe-4fc8-9cd8-be6506df9c46',
      source: { cell: 'node-b00a889a-8a6e-403e-994e-ba0a7214ce12', port: '445388fa-b2fe-4fc8-9cd8-be6506df9c46' },
      target: { cell: 'node-ce7a046c-3284-4aae-a080-12b09194e049', port: '1cf2f87c-8bed-4687-8146-5b98df61cc4d' },
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
        targetPortId: '1cf2f87c-8bed-4687-8146-5b98df61cc4d',
        sourcePortId: '445388fa-b2fe-4fc8-9cd8-be6506df9c46',
        source: 'node-b00a889a-8a6e-403e-994e-ba0a7214ce12',
        target: 'node-ce7a046c-3284-4aae-a080-12b09194e049',
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
          position: {
            top: 0,
            left: 0,
            right: 0,
          },
        }}
        canvasProps={{
          position: {
            top: 40,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
        nodePanelProps={{
          position: { width: 160, top: 40, bottom: 0, left: 0 },
        }}
        detailPanelProps={{
          position: { width: 200, top: 40, bottom: 0, right: 0 },
        }}
      />
    </div>
  );
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
