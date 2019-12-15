import React from 'react';
import { wrapContext } from './context';
export interface ITechChartsProps {
  theme?: string;
}
interface ITechChartsState {
  theme: string;
}

const withContext = (Component: React.ComponentType) => {
  class BaseComponent extends React.Component<ITechChartsProps, ITechChartsState> {
    constructor(props: ITechChartsProps) {
      super(props);
      const { theme = '' } = props;
      this.state = {
        theme,
      };
    }

    componentDidMount() {
      const { theme } = this.props;
      if (theme) {
        // registerTheme
      }
    }

    componentWillReceiveProps(nextProps: ITechChartsProps) {
      console.log('receiveNextProps', nextProps);
    }

    componentWillUnmount() {
      console.log('unmount');
    }
    render() {
      return (
        <wrapContext.Provider value={this.state}>
          <wrapContext.Consumer>
            {context => <Component {...this.props} {...context} />}
          </wrapContext.Consumer>
        </wrapContext.Provider>
      );
    }
  }
  return BaseComponent;
};

export { withContext };
