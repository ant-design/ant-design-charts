import { uuidv4 } from '@antv/xflow';
import type { IToolbarModelService, IToolbarCustomRenderService } from './interface';

export const CONFIG_TYPE = 'CanvasToolbar';

export class ToolbarConfig {
  /** config type */
  readonly CONFIG_TYPE = CONFIG_TYPE;
  /** toolbar model service */
  private toolbarModelService!: IToolbarModelService;
  /** toolbar toolbarRender */
  private customRenderService!: IToolbarCustomRenderService;
  /** instance id */
  public moduleId: string;
  /** uuid */
  constructor() {
    this.moduleId = CONFIG_TYPE + '__' + uuidv4();
  }
  /** 设置toolbar id */
  setToolbarName = (moduleId: string) => {
    this.moduleId = CONFIG_TYPE + '__' + moduleId;
  };
  /** 通过订阅 modelService 设置toolbar model */
  setToolbarModelService = (service: IToolbarModelService) => {
    this.toolbarModelService = service;
  };
  /** 设置组件的props */
  setCustomToolbarRender = (service: IToolbarCustomRenderService) => {
    this.customRenderService = service;
  };
  /** 获取Props */
  getConfig = () => {
    return {
      CONFIG_TYPE: this.CONFIG_TYPE,
      toolbarCustomRender: this.customRenderService,
      toolbarModelService: this.toolbarModelService,
    };
  };
  /** dispose */
  dispose() {}
}
