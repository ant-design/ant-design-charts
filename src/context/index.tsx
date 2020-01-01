import React from 'react';
import { Theme } from '@antv/g2plot';

export interface ConfigContextProps {
  theme?: Theme;
}

export const ConfigContext = React.createContext({
  theme: {},
});
