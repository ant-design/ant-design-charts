import React from 'react';
import { Form, Input } from 'antd';
import type { IControlSchema } from '../../../interface';
import { FormItemWrapper } from '../../common/form-item-wrapper';
import { renderFormItemExtra } from '../../common/tooltip';

interface Props {
  controlSchema: IControlSchema;
}

export const TextArea: React.FC<Props> = (props) => {
  const { controlSchema } = props;
  const { required, tooltip, extra, name, label, placeholder } = controlSchema;

  return (
    <FormItemWrapper schema={controlSchema}>
      {({ hidden, disabled, initialValue }) => {
        return (
          <Form.Item
            name={name}
            label={label}
            initialValue={initialValue}
            tooltip={tooltip}
            extra={renderFormItemExtra(extra)}
            required={required}
            hidden={hidden}
          >
            <Input.TextArea allowClear placeholder={placeholder} rows={3} disabled={disabled} />
          </Form.Item>
        );
      }}
    </FormItemWrapper>
  );
};
