import React from 'react';

export interface ConfigContextProps {
  theme?: string;
}

export const ConfigContext = React.createContext({
  theme: 'light',
});
