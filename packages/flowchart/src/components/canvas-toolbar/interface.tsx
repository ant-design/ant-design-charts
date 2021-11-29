import type {
  IPosition,
  IModelService,
  IToolbarModel,
  IToolbarLayout,
  DisposableCollection,
  IToolbarOptions,
} from '@antv/xflow';
import React from 'react';

import type { ToolbarConfig } from './config';

export interface IToolbarProps {
  // toolbarConfig 用于设置model的toolbarItems
  config: ToolbarConfig;
  // 用于确定toolbar 的布局: "horizontal" | "vertical" | "horizontal-center"
  layout: IToolbarLayout;
  // 用于定位元素
  position: IPosition;
  // 样式
  style?: React.CSSProperties;
  // classname
  className?: string;
}

export interface IToolbarModelService {
  (model: IToolbarModel, modelService: IModelService, toDispose: DisposableCollection): Promise<void>;
}

export interface IToolbarCustomRenderService {
  (modelService: IModelService, updateComponent: (fc: React.FC<IToolbarCustomRenderProps>) => void): Promise<
    React.FC<IToolbarCustomRenderProps> | undefined
  >;
}

export interface IToolbarCustomRenderProps {
  config: IToolbarOptions;
}
