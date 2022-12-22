import React, { Fragment } from 'react';

export class ErrorBoundary extends React.Component<any> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  static getDerivedStateFromProps(nextProps: any, state: any) {
    if (state.children !== nextProps.children) {
      return {
        children: nextProps.children,
        hasError: false,
        error: undefined,
      };
    }
    return null;
  }

  state: {
    hasError: boolean;
    error?: Error;
  } = {
    hasError: false,
  };

  renderError = (e: Error) => {
    const { errorTemplate } = this.props;
    switch (e) {
      default:
        if (typeof errorTemplate === 'function') return errorTemplate(e);
        return errorTemplate ? errorTemplate : <h5>组件出错了，请核查后重试： {e.message}</h5>;
    }
  };

  render() {
    if (this.state.hasError) {
      return this.renderError(this.state.error!);
    }
    return <Fragment>{this.props.children}</Fragment>;
  }
}
