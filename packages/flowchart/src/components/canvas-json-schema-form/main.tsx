import React from 'react';
import type { IProps, IPanelProps, ITriggerUpdate } from './interface';
import { useXflowPrefixCls } from '@antv/xflow-core';
import { PanelBody } from './panel-body';
import { usePanelLyaoutStyle } from './utils';
import { useJsonSchemaFormModel } from './service';
export { FormItemWrapper } from './schema-form';
export { executeJsonSchemaFormCommand } from './service';
import { WorkspacePanel } from '@antv/xflow';

/** useFormPanelData获取数据 */
export const JsonSchemaFormMain: React.FC<IProps> = (props) => {
  const { prefixClz } = props;
  const { getCustomRenderComponent, afterUpdatingCb, formValueUpdateService } = props;
  const { state, commandService, modelService } = useJsonSchemaFormModel(props);

  // 联动更新form items的值
  const triggerUpdate = React.useCallback<ITriggerUpdate>(
    async (form, values) => {
      form.setFieldsValue(values);
      const result = await formValueUpdateService({
        values,
        modelService,
        commandService,
        targetData: state.targetData,
        targetType: state.targetType,
      });
      if (afterUpdatingCb) {
        afterUpdatingCb(result);
      }
    },
    [afterUpdatingCb, commandService, formValueUpdateService, modelService, state.targetData, state.targetType],
  );

  // 在fields change时的回调
  const onFieldsChange = React.useCallback(
    async (values) => {
      const result = await formValueUpdateService({
        values,
        modelService,
        commandService,
        targetData: state.targetData,
        targetType: state.targetType,
      });
      if (afterUpdatingCb) {
        afterUpdatingCb(result);
      }
    },
    [afterUpdatingCb, commandService, formValueUpdateService, modelService, state.targetData, state.targetType],
  );

  /** schema为空的情况  */
  const noSchema = React.useMemo(() => {
    try {
      return state.schema.tabs.length === 0 || !state.schema;
    } catch (error) {
      return true;
    }
  }, [state.schema]);

  const { bodyStyle } = usePanelLyaoutStyle(props as IPanelProps, noSchema);

  /** 支持自定义渲染 */
  if (getCustomRenderComponent) {
    const Component = getCustomRenderComponent(state.targetType, state.targetData, modelService, commandService);
    if (Component) {
      return React.createElement(Component, {
        ...props,
        bodyStyle,
        targetData: state.targetData,
        targetType: state.targetType,
        modelService: modelService,
        commandService: commandService,
      });
    }
  }

  return (
    <div className={prefixClz}>
      <PanelBody
        {...props}
        style={bodyStyle}
        prefixClz={props.prefixClz}
        loading={state.loading}
        schema={state.schema}
        triggerUpdate={triggerUpdate}
        onFieldsChange={onFieldsChange}
      />
    </div>
  );
};

export const JsonSchemaForm: React.FC<IProps> = (props) => {
  const prefixClz = useXflowPrefixCls('json-schema-form');
  return (
    <WorkspacePanel {...props} className={prefixClz}>
      <JsonSchemaFormMain {...props} />
    </WorkspacePanel>
  );
};
