import Container from 'dumi/theme/builtins/Container';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
var DemoErrorBoundary = function DemoErrorBoundary(props) {
  return /*#__PURE__*/React.createElement(ErrorBoundary, {
    fallbackRender: function fallbackRender(_ref) {
      var error = _ref.error;
      return /*#__PURE__*/React.createElement(Container, {
        type: "error"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, error.message || 'This demo has been crashed.')), error.stack && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("details", {
        open: true
      }, /*#__PURE__*/React.createElement("summary", null, "Error stack"), /*#__PURE__*/React.createElement("pre", null, error.stack))));
    }
  }, props.children);
};
export default DemoErrorBoundary;