import React from 'react';
import { Empty, Spin } from 'antd';
import type {
  ISchema,
  IControlProps,
  IAfterUpdatingCallback,
  ITriggerUpdate,
  IControlMapService,
  IDefaultControls,
} from './interface';
import { SchemaForm } from './schema-form';
import { makeControlMap, xflowDefaultControls } from './schema-form/control-map/index';

export interface IBodyProps {
  schema: ISchema;
  loading: boolean;
  prefixClz: string;
  style: React.CSSProperties;
  onFieldsChange: (records: Record<string, any>) => void;
  defaultControlRender?: React.FC<IControlProps>;
  triggerUpdate?: ITriggerUpdate;
  afterUpdatingCb?: IAfterUpdatingCallback;
  controlMapService?: IControlMapService;
  defaultControls?: IDefaultControls;
}

export const PanelBody: React.FC<IBodyProps> = (props) => {
  const {
    schema = { tabs: [] },
    triggerUpdate,
    onFieldsChange,
    afterUpdatingCb,
    defaultControlRender,
    loading,
    controlMapService,
    defaultControls = [],
  } = props;

  const controlMapCache = React.useMemo(() => {
    const controlMap = makeControlMap([...xflowDefaultControls, ...defaultControls]);
    if (controlMapService) {
      controlMapService(controlMap);
    }
    return controlMap;
  }, [controlMapService, defaultControls]);

  if (loading) {
    return (
      <div
        className={`${props.prefixClz}-body`}
        style={{ ...props.style, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Spin spinning />
      </div>
    );
  }
  return (
    <div className={`${props.prefixClz}-body`} style={props.style}>
      {schema.tabs.length > 0 && (
        <SchemaForm
          schema={schema}
          onFieldsChange={onFieldsChange}
          controlMap={controlMapCache}
          defaultControlRender={defaultControlRender}
          afterUpdatingCb={afterUpdatingCb}
          triggerUpdate={triggerUpdate}
        />
      )}
      {schema.tabs.length === 0 && <Empty style={{ paddingTop: '64px' }} />}
    </div>
  );
};
