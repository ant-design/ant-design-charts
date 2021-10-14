import React from 'react';
import { FormWrapper } from '../../formWrapper';
import Input from './input';

export const EdgeService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props} type="edge">
      {(config, plugin) => <Input {...props} plugin={plugin} config={config} updateType="edge" />}
    </FormWrapper>
  );
};
