import type { NsGraphCmd, IToolbarGroupOptions } from '@ali/xflow-core';
import { IconStore, MODELS, XFlowGraphCommands } from '@ali/xflow-core';
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  OneToOneOutlined,
  CompressOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import { createToolbarConfig } from '../canvas-toolbar';

export namespace CANVAS_SCALE_TOOLBAR_CONFIG {
  IconStore.set('ZoomInOutlined', ZoomInOutlined);
  IconStore.set('ZoomOutOutlined', ZoomOutOutlined);
  IconStore.set('OneToOneOutlined', OneToOneOutlined);
  IconStore.set('CompressOutlined', CompressOutlined);
  IconStore.set('FullscreenOutlined', FullscreenOutlined);
  IconStore.set('FullscreenExitOutlined', FullscreenExitOutlined);

  export const ZOOM_IN = XFlowGraphCommands.GRAPH_ZOOM.id + '-zoom-in';
  export const ZOOM_OUT = XFlowGraphCommands.GRAPH_ZOOM.id + '-zoom-out';
  export const SCALE_TO_ONE = XFlowGraphCommands.GRAPH_ZOOM.id + '-scale-to-one';
  export const SCALE_TO_FIT = XFlowGraphCommands.GRAPH_ZOOM.id + '-scale-to-fit';

  export const MAX_SCALE = 1.5;
  export const MIN_SCALE = 0.05;

  export const zoomOptions = {
    maxScale: MAX_SCALE,
    minScale: MIN_SCALE,
  };

  export const getToolbarConfig = (zoomFactor: number) => {
    return [
      {
        name: 'main',
        items: [
          {
            id: CANVAS_SCALE_TOOLBAR_CONFIG.ZOOM_IN,
            tooltip: '放大',
            iconName: 'ZoomInOutlined',
            onClick: ({ commandService }) => {
              commandService.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {
                factor: 0.1,
                zoomOptions: CANVAS_SCALE_TOOLBAR_CONFIG.zoomOptions,
              });
            },
          },
          {
            id: CANVAS_SCALE_TOOLBAR_CONFIG.ZOOM_OUT,
            tooltip: '缩小',
            iconName: 'ZoomOutOutlined',
            onClick: ({ commandService }) => {
              commandService.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {
                factor: -0.1,
                zoomOptions: CANVAS_SCALE_TOOLBAR_CONFIG.zoomOptions,
              });
            },
          },
          {
            id: CANVAS_SCALE_TOOLBAR_CONFIG.SCALE_TO_ONE,
            iconName: 'OneToOneOutlined',
            tooltip: '缩放到1:1',
            isEnabled: zoomFactor !== 1,
            onClick: ({ commandService }) => {
              commandService.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {
                factor: 'real',
                zoomOptions: CANVAS_SCALE_TOOLBAR_CONFIG.zoomOptions,
              });
            },
          },
          {
            id: CANVAS_SCALE_TOOLBAR_CONFIG.SCALE_TO_FIT,
            tooltip: '缩放到适应屏幕',
            iconName: 'CompressOutlined',
            onClick: ({ commandService }) => {
              commandService.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {
                factor: 'fit',
                zoomOptions: CANVAS_SCALE_TOOLBAR_CONFIG.zoomOptions,
              });
            },
          },
        ],
      },
    ] as IToolbarGroupOptions[];
  };
}

export const TOOLBAR_TYPE = 'CANVAS_SCALE_TOOLBAR';

export const useConfig = createToolbarConfig((config) => {
  config.setToolbarModelService(async (model, modelService) => {
    const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService);
    /** 设置初始值*/
    model.setValue((m) => {
      m.mainGroups = CANVAS_SCALE_TOOLBAR_CONFIG.getToolbarConfig(graphScale.zoomFactor);
    });

    const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService);
    /** graphScaleModel更新时联动 Toolbar*/
    graphScaleModel.watch(({ zoomFactor }) => {
      model.setValue((m) => {
        m.mainGroups = CANVAS_SCALE_TOOLBAR_CONFIG.getToolbarConfig(zoomFactor);
      });
    });
  });
});
