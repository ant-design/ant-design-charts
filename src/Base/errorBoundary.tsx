import React from 'react';

class ErrorBoundary extends React.Component<any> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = {
    hasError: false,
  };

  render() {
    if (this.state.hasError) {
      return <h5>组件出错了，请核查后重试</h5>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
