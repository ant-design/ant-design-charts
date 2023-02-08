import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { FlowAnalysisGraph } from '../../src';

describe('Get Flow Data', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (graph) => {
        chartRef = graph;
      },
    };
    const config = {
      height: 600,
      data: {
        nodes: [
          {
            id: 'a',
            value: {
              id: 'a',
              index: 0,
              app_name: 'a',
              biz_name: '交通',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'aaaaa',
              percent: 0,
            },
          },
          {
            id: 'b',
            value: {
              id: 'b',
              index: 1,
              app_name: 'b',
              biz_name: '基础服务',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'bbbbb',
              percent: 0,
            },
          },
          {
            id: 'c',
            value: {
              id: 'c',
              index: 2,
              app_name: 'c',
              biz_name: '自驾出行',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'ccccc',
              percent: 0,
            },
          },
          {
            id: 'd',
            value: {
              id: 'd',
              index: 3,
              app_name: 'd',
              biz_name: '导航',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'ddddd',
              percent: 0,
            },
          },
          {
            id: 'e',
            value: {
              id: 'e',
              index: 4,
              app_name: 'e',
              biz_name: '',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'eeeee',
              percent: 0,
            },
          },
          {
            id: 'f',
            value: {
              id: 'f',
              index: 5,
              app_name: 'f',
              biz_name: '应用服务',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'fffff',
              percent: 0,
            },
          },
          {
            id: 'g',
            value: {
              id: 'g',
              index: 6,
              app_name: 'g',
              biz_name: '导航',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'ggggg',
              percent: 0,
            },
          },
          {
            id: 'h',
            value: {
              id: 'h',
              index: 7,
              app_name: 'h',
              biz_name: '应用服务',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'hhhhh',
              percent: 0,
            },
          },
          {
            id: 'i',
            value: {
              id: 'i',
              index: 8,
              app_name: 'i',
              biz_name: '应用服务',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'iiiii',
              percent: 0,
            },
          },
          {
            id: 'j',
            value: {
              id: 'j',
              index: 9,
              app_name: 'j',
              biz_name: '应用服务',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'jjjjj',
              percent: 0,
            },
          },
          {
            id: 'k',
            value: {
              id: 'k',
              index: 10,
              app_name: 'k',
              biz_name: '导航',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: true,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'kkkkk',
              percent: 0,
            },
          },
          {
            id: 'l',
            value: {
              id: 'l',
              index: 11,
              app_name: 'l',
              biz_name: '',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'lllll',
              percent: 0,
            },
          },
          {
            id: 'm',
            value: {
              id: 'm',
              index: 12,
              app_name: 'm',
              biz_name: '接入层',
              score: 0,
              items: [],
              changes: [],
              is_alarm_app: false,
              is_root_app: false,
              threshold: 0,
              metrics: [],
              title: 'mmmmm',
              percent: 0,
            },
          },
        ],
        edges: [
          {
            source: 'a',
            target: 'k',
          },
          {
            source: 'c',
            target: 'k',
          },
          {
            source: 'd',
            target: 'k',
          },
          {
            source: 'e',
            target: 'k',
          },
          {
            source: 'f',
            target: 'k',
          },
          {
            source: 'g',
            target: 'k',
          },
          {
            source: 'i',
            target: 'k',
          },
          {
            source: 'j',
            target: 'k',
          },
          {
            source: 'h',
            target: 'f',
          },
          {
            source: 'b',
            target: 'i',
          },
          {
            source: 'm',
            target: 'b',
          },
          {
            source: 'l',
            target: 'm',
          },
        ],
        // app_name: 'k',
      },
      autoFit: false,
      fitCenter: true,
      minimapCfg: {
        show: true,
        refresh: true,
        size: [100, 50],
        className: 'graph-minimap',
        type: 'delegate',
        delegateStyle: {
          fill: '#91caff',
        },
      },
      toolbarCfg: {
        show: true,
      },
      nodeCfg: {
        title: {
          containerStyle: {
            fill: 'transparent',
          },
          style: {
            fill: '#000',
            fontSize: 14,
          },
          autoEllipsis: true,
        },
        size: [220, 40],
        percent: {
          position: 'bottom',
          size: 4,
        },
        nodeStateStyles: {
          hover: {
            stroke: '#1890ff',
            lineWidth: 2,
          },
        },
        anchorPoints: [
          [0.5, 0],
          [0.5, 1],
        ],
      },
      edgeCfg: {
        type: 'polyline',
        endArrow: true,
        label: {
          style: {
            fill: '#aaa',
            fontSize: 12,
            fillOpacity: 0.5,
          },
        },
        edgeStateStyles: {
          hover: {
            stroke: '#1890ff',
            lineWidth: 2,
          },
        },
      },
      layout: {
        rankdir: 'TB',
      },
      behaviors: ['drag-canvas', 'zoom-canvas'],
    } as any;
    act(() => {
      render(<FlowAnalysisGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(chartRef.get('data').edges.length).toBe(12);
  });
});
