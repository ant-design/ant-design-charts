import React, { useCallback, useEffect } from 'react';
import { Empty, Form, Tabs } from 'antd';
import classNames from 'classnames';
import type { FormInstance, FormProps } from 'antd/es/form';
import type { IControlMap } from './control-map/index';
import { Log } from '../../../util';
import { xflowDefaultControls, makeControlMap, getControlFromMap } from './control-map/index';
import type { IControlProps, IAfterUpdatingCallback, ISchema, ITab } from '../interface';
export { FormItemWrapper } from './common/form-item-wrapper';

interface Props extends FormProps {
  schema: ISchema;
  className?: string;
  form?: FormInstance;
  controlMap: IControlMap;
  defaultControlRender?: React.ComponentType<IControlProps>;
  triggerUpdate?: (form: FormInstance, values: Record<string, any>) => Promise<void>;
  afterUpdatingCb?: IAfterUpdatingCallback;
}

const { TabPane } = Tabs;

export const SchemaForm: React.FC<Props> = (props) => {
  const {
    schema,
    form: formInstance,
    className,
    triggerUpdate,
    defaultControlRender,
    afterUpdatingCb,
    controlMap: controlMapfromParent,
    ...otherProps
  } = props;

  const { tabs } = schema;
  const [form] = Form.useForm(formInstance);
  const controlMap = React.useMemo(
    () => (props.controlMap ? props.controlMap : makeControlMap(xflowDefaultControls)),
    [props.controlMap],
  );

  const innerTriggerUpdate = useCallback(
    (values: Record<string, any>) => {
      if (typeof triggerUpdate === 'function') {
        triggerUpdate(form, values);
      }
    },
    [form, triggerUpdate],
  );

  /** 初次挂载时设置一次值以激活首次联动 */
  useEffect(() => {
    form.setFieldsValue({});
  }, [form]);

  /** 切换标签时激活联动 */
  const onClickTab = useCallback(() => {
    requestAnimationFrame(() => {
      form.setFieldsValue({});
    });
  }, [form]);

  return (
    <Form
      size="small"
      form={form}
      layout="vertical"
      className={classNames('xflow-json-form', className)}
      {...otherProps}
    >
      <Tabs
        type="card"
        defaultActiveKey={tabs[0]?.name}
        className={classNames({
          ['tabs']: true,
          ['xTab']: true,
          ['singleTab']: tabs?.length === 1,
          ['coupleTab']: tabs?.length === 2,
          ['ternateTab']: tabs?.length === 3,
        })}
        onTabClick={onClickTab}
      >
        {tabs.map((tab: ITab) => {
          const { name: tabName, groups } = tab;
          return (
            <TabPane key={tabName} tab={tabName}>
              {groups.length === 0 && <Empty />}
              {groups.length > 0 &&
                groups.map((group) => {
                  const { controls: groupControls = [] } = group;
                  if (groupControls.length === 0) {
                    return <Empty style={{ padding: '12px 0' }} />;
                  }
                  return groupControls.map((control) => {
                    const { shape, name: controlName } = control;
                    const ControlComponent = getControlFromMap(shape, controlMap, defaultControlRender);
                    if (!ControlComponent) {
                      Log.error('未找到对应的控件:', shape);
                      return null;
                    }
                    return (
                      <ControlComponent
                        key={controlName as string}
                        form={form}
                        controlSchema={control}
                        triggerUpdate={innerTriggerUpdate}
                        afterUpdatingCb={afterUpdatingCb}
                      />
                    );
                  });
                })}
            </TabPane>
          );
        })}
      </Tabs>
    </Form>
  );
};
