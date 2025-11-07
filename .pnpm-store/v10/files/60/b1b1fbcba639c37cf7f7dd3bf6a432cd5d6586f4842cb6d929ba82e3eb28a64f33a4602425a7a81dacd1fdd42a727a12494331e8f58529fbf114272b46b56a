import React from 'react';
import type { GraphinContextProps } from '../types';

export const GraphinContext = React.createContext<GraphinContextProps>({
  graph: null,
  isReady: false,
});

export const useGraphin = () => {
  const context = React.useContext(GraphinContext);
  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error('useGraphin must be used within a GraphinProvider.');
  }
  return context;
};
