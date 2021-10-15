import React from 'react';
import { FormWrapper } from '../../formWrapper';
import Input from './input';

export const NodeService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <Input {...props} plugin={plugin} config={config} updateType="node" />}
    </FormWrapper>
  );
};
