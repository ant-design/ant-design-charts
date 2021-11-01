import type { IPosition, NsGraph, IModelService, IGraphCommandService } from '@ali/xflow-core';
import type { FormInstance } from 'antd';
import type React from 'react';
import type { Cell } from '@antv/x6';

/** Panel 布局 */
export interface IPanelProps {
  bodyPosition: IPosition;
}

export type TargetType = 'node' | 'edge' | 'group' | 'canvas';
export type TargetData = NsGraph.INodeConfig | NsGraph.IEdgeConfig | NsGraph.IGroupConfig | null;

export type IControlMap = Map<string, React.FC<IControlProps>>;
/** Panel Props */
export interface IProps extends Partial<IPanelProps> {
  position: IPosition;
  style?: React.CSSProperties;
  prefixClz?: string;
  className?: string;
  emptyRender?: React.FC<IPanelBodyRenderProps>;
  defaultControlRender?: React.FC<IControlProps>;
  afterUpdatingCb?: IAfterUpdatingCallback;
  controlMapService?: IControlMapService;
  getCustomRenderComponent?: ICustomRender;
  formSchemaService?: IFormSchemaService;
  formValueUpdateService?: IFormValueUpdateService;
  // 默认的formcontrols
  defaultControls?: IDefaultControls;
  // 响应的target
  targetType?: TargetType[];
}

/** Custom Panel Body Props */
export interface IPanelBodyRenderProps {
  node: NsGraph.INodeConfig | null;
  afterUpdatingCb?: IAfterUpdatingCallback;
  formSchemaService?: IFormSchemaService;
  formValueUpdateService?: IFormValueUpdateService;
}

export type IDefaultControls = [string, React.FC<IControlProps>][];

/** Control Props */
export interface IControlProps {
  className?: string;
  controlSchema: IControlSchema;
  form: FormInstance;
  defaultControlRender?: React.ComponentType<any>;
  afterUpdatingCb: IAfterUpdatingCallback;
  triggerUpdate?: (values: Record<string, any>) => void;
}

/** Form.Item child组件的Props */
export interface IFormItemProps {
  controlSchema: IControlSchema;
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
}

/** service: 返回 json form schema */
export interface IFormSchemaService {
  (args: {
    cell: Cell;
    targetType: TargetType;
    targetData: TargetData;
    modelService: IModelService;
    commandService: IGraphCommandService;
  }): Promise<ISchema>;
}

export interface IControlMapService {
  (controlMap: IControlMap): IControlMap;
}

export interface ICustomRender {
  (
    targetType: TargetType,
    targetData: TargetData,
    modelService: IModelService,
    commandService: IGraphCommandService,
  ): React.FC<ICustomProps>;
}

export interface ICustomProps {
  // style
  bodyStyle: React.CSSProperties;
  // target
  targetType: TargetType;
  targetData: TargetData;
  // service
  modelService: IModelService;
  commandService: IGraphCommandService;
}

/** service: form value change 时触发 */
export interface IFormValueUpdateService {
  (args: {
    values: Record<string, any>;
    // target
    targetType: TargetType;
    targetData: TargetData;
    // service
    modelService: IModelService;
    commandService: IGraphCommandService;
  }): Promise<any>;
}

/** service: form value change的回调 */
export interface ITriggerUpdate {
  (form: FormInstance, values: Record<string, any>): Promise<void>;
}

/** service: form value change的回调 */
export interface IAfterUpdatingCallback {
  (args: Record<string, any>): Promise<any>;
}

/** 下拉选项的配置 */
export interface IOption {
  title: string;
  value: string | number | boolean;
}

/** 依赖类型 */
export type UpdateReasonField = string | number | (string | number)[] | undefined; // 为 undefined 时说明这一项是一个函数，不明确依赖某个特殊字段

/** Form 字段id类型 */
export interface IDependency {
  /** 决定哪些字段变化时触发校验 */
  name: UpdateReasonField;
  /** match的条件 */
  condition: string | number | boolean | { (args: any): boolean }; // 条件值
  /** match后的control的值 */
  hidden?: boolean; // 是否被隐藏
  /** match后的control的值 */
  disabled?: boolean; // 是否被禁用
}

/** ControlSchema name的类型 */
export type NamePath = string | number | (string | number)[];

/** Form控件 */
export interface IControlSchema {
  /** form表单渲染的控件名 */
  label: string;
  /** form store中的字段名 */
  name: NamePath;
  /** controlmap中对应的 control id */
  shape: string;
  /** 默认值 */
  defaultValue?: string | number | boolean;
  /** 用户保存的值 */
  value?: string | number | boolean;
  /** 是否禁用输入，需要控件支持 */
  disabled?: boolean;
  /** 是否显示必选 */
  required?: boolean;
  /** label中问号的提示内容 */
  tooltip?: string;
  /** 控件后显示的文本 */
  extra?: string;
  /** 没有输入时控件的提示 */
  placeholder?: string;
  /** 隐藏 */
  hidden?: boolean;
  /** 下拉控件的选项 */
  options?: IOption[];
  /** 原始数据 */
  originData?: Record<string, any>;
  /** 控件联动的规则 */
  dependencies?: IDependency[];
}

/** Tab下的Group控件 */
export interface IGroup {
  name: string;
  tooltip?: string;
  controls: IControlSchema[];
}

/** Tab配置 */
export interface ITab {
  name: string;
  groups: IGroup[];
}

/** JSON Form Schema */
export interface ISchema {
  tabs: ITab[];
}
