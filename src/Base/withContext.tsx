import React from 'react';
import { wrapContext } from './context';

export interface IChartProps {
  theme?: string;
  onInit?: (chart: any) => void;
}

const withContext = (Component: React.ComponentType<IChartProps>) => {
  class BaseComponent extends React.Component<IChartProps> {
    render() {
      const { theme = 'light', ...props } = this.props;

      return (
        <wrapContext.Provider value={{ theme }}>
          <wrapContext.Consumer>
            {context => <Component {...props} {...context} />}
          </wrapContext.Consumer>
        </wrapContext.Provider>
      );
    }
  }
  return BaseComponent;
};

export { withContext };
