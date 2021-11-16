import type { IToolbarOptions } from '@antv/xflow-core';
import { useXFlowApp, createComponentModel, DisposableCollection } from '@antv/xflow-core';
import React from 'react';
import type { IToolbarProps } from './interface';

namespace NsToolbarModel {
  export interface IState extends IToolbarOptions {
    customRender?: React.FC<{ config: IToolbarOptions }>;
  }
}

export const useToolbarModel = (props: IToolbarProps) => {
  const { config } = props;
  const modelId = config.moduleId;
  const app = useXFlowApp();

  const [state, setState, toolbarModel, isModelReady] = createComponentModel<NsToolbarModel.IState>({
    name: modelId,
    layout: props.layout,
    mainGroups: [],
    extraGroups: [],
    customRender: null,
  });
  /** 注册全局的model */
  React.useEffect(() => {
    const toDispose = new DisposableCollection();
    const deferredModel = app.modelService.findDeferredModel(modelId);
    if (!deferredModel) {
      const { toolbarCustomRender, toolbarModelService } = config.getConfig();
      const d = app.modelService.registerModel<NsToolbarModel.IState>({
        id: modelId,
        modelFactory: () => toolbarModel,
        watchChange: async (self) => {
          if (toolbarModelService) {
            await toolbarModelService(self, app.modelService, toDispose);
          }
          if (toolbarCustomRender) {
            const updateCustomRender = (customRender) => {
              self.setValue((m) => (m.customRender = customRender));
            };
            await toolbarCustomRender(app.modelService, updateCustomRender);
          }
          return toDispose;
        },
      });
      toDispose.push(d);
    }
    return () => {
      toDispose.dispose();
    };
    /* eslint-disable-next-line  */
  }, []);

  return { isModelReady, state, setState, toolbarModel };
};
