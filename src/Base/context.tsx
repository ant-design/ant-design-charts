import React from 'react';

export interface WrapProps {
  theme?: string;
}

export const wrapContext = React.createContext({
  theme: 'light',
});
