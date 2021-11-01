import React from 'react';
import { Form } from 'antd';
import type { IControlSchema } from '../../../interface';
import { renderFormItemExtra } from '../../common/tooltip';
import { FormItemWrapper } from '../../common/form-item-wrapper';
import { DatetimePicker } from './datetime-picker';

interface Props {
  controlSchema: IControlSchema;
}

export const Datetime: React.FC<Props> = (props) => {
  const { controlSchema } = props;
  const { required, tooltip, extra, name, label } = controlSchema;

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
            <DatetimePicker style={{ width: '100%' }} disabled={disabled} />
          </Form.Item>
        );
      }}
    </FormItemWrapper>
  );
};
