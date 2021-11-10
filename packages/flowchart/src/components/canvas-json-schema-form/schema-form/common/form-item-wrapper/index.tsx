import React, { useState, useMemo } from 'react';
import { Form } from 'antd';
import type { IControlSchema, UpdateReasonField } from '../../../interface';
import { makeUpdaterByDependencies, makeFormItemControlledProps, isEmptyParamValue } from './util';

interface CalculatedData {
  hidden: boolean;
  disabled: boolean;
  initialValue: string | number | boolean;
}

interface Props {
  schema: IControlSchema;
  children: (data: CalculatedData) => React.ReactElement;
}

export const FormItemWrapper: React.FC<Props> = (props) => {
  const { schema, children } = props;
  const [updateReasonField, setUpdateReasonField] = useState<UpdateReasonField>();
  const { dependencies, value, defaultValue, hidden, disabled } = schema;

  const updater = useMemo(() => {
    return dependencies?.length ? makeUpdaterByDependencies(dependencies, setUpdateReasonField) : undefined;
  }, [dependencies]);

  if (typeof children !== 'function') {
    throw new Error('[Schema Form]: chilren of FormItemWrapper should be a render prop.');
  }

  const initValue = isEmptyParamValue(value) ? defaultValue : value;

  if (updater) {
    return (
      <Form.Item noStyle shouldUpdate={updater}>
        {(form) => {
          const { hidden: isHidden, disabled: isDisabled } = makeFormItemControlledProps(
            form as any,
            schema,
            updateReasonField,
          );
          return children({
            hidden: isHidden,
            disabled: isDisabled,
            initialValue: initValue,
          });
        }}
      </Form.Item>
    );
  }

  return children({
    hidden,
    disabled,
    initialValue: initValue,
  });
};
