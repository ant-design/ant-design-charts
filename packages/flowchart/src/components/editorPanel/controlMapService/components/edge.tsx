import React from 'react';
import { FormWrapper } from '../../formWrapper';
import Input from './input';

export const EdgeService: React.FC = (props) => {
  return (
    <FormWrapper {...props} type="edge">
      {(config, plugin) => <Input {...props} plugin={plugin} config={config} updateType="edge" />}
    </FormWrapper>
  );
};
