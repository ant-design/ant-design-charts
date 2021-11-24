import React from 'react';
import { Form, Checkbox as ACheckbox } from 'antd';
import type { IControlSchema } from '../../../interface';
import { FormItemWrapper } from '../../common/form-item-wrapper';
import { renderFormItemExtra } from '../../common/tooltip';

interface Props {
  controlSchema: IControlSchema;
}

export const Checkbox: React.FC<Props> = (props) => {
  const { controlSchema } = props;
  const { required, tooltip, extra, name, label } = controlSchema;

  return (
    <FormItemWrapper schema={controlSchema}>
      {({ hidden, disabled, initialValue }) => {
        return (
          <Form.Item
            className="xflow-form-checkbox"
            name={name}
            initialValue={initialValue}
            tooltip={tooltip}
            extra={renderFormItemExtra(extra)}
            required={required}
            hidden={hidden}
            valuePropName="checked"
            getValueProps={(checked) => {
              const checkedMap = {
                true: true,
                false: false,
              };
              return { checked: !!checkedMap[checked] };
            }}
          >
            <ACheckbox disabled={disabled}>{label}</ACheckbox>
          </Form.Item>
        );
      }}
    </FormItemWrapper>
  );
};
