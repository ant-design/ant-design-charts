import React, { ReactNode } from 'react';
import { ConfigContext, ConfigValue } from '../../context';

export interface ConfigProviderProps extends ConfigValue {
  children?: ReactNode;
}

export default function ConfigProvider({ children, ...value }: ConfigProviderProps) {
  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
}
