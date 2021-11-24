import React from 'react';
import { Input, Form } from 'antd';
import type { IControlSchema } from '../../../interface';
import { renderFormItemExtra } from '../../common/tooltip';
import { FormItemWrapper } from '../../common/form-item-wrapper';

interface Props {
  controlSchema: IControlSchema;
}

export const StringInput: React.FC<Props> = (props) => {
  const { controlSchema } = props;
  const { required, tooltip, extra, name, label, placeholder } = controlSchema;

  return (
    <FormItemWrapper schema={controlSchema}>
      {({ disabled, hidden, initialValue }) => {
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
            <Input className={'xflow-form-input'} allowClear placeholder={placeholder} disabled={disabled} />
          </Form.Item>
        );
      }}
    </FormItemWrapper>
  );
};
