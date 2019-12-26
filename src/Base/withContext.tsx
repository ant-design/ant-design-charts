import React from 'react';
import ErrorBoundary from './errorBoundary';
import { wrapContext, WrapProps } from './context';

export interface IChartProps {
  theme?: string;
  onInit?: (chart: any) => void;
}
const withContext = (Component: React.ComponentType<IChartProps>) => {
  const BaseComponent: React.FC<IChartProps> = props => {
    const { theme = 'light', ...rest } = props;

    return (
      <wrapContext.Provider value={{ theme }}>
        <wrapContext.Consumer>
          {(context: WrapProps) => (
            <ErrorBoundary>
              <Component {...rest} {...context} />
            </ErrorBoundary>
          )}
        </wrapContext.Consumer>
      </wrapContext.Provider>
    );
  };
  return BaseComponent;
};

export { withContext };
