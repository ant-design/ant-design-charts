import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Result } from 'antd';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
import { jsx as _jsx } from "react/jsx-runtime";
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);
  var _super = _createSuper(ErrorBoundary);
  function ErrorBoundary() {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false,
      errorInfo: ''
    });
    return _this;
  }
  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // eslint-disable-next-line no-console
      console.log(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return /*#__PURE__*/_jsx(Result, {
          status: "error",
          title: "Something went wrong.",
          extra: this.state.errorInfo
        });
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        errorInfo: error.message
      };
    }
  }]);
  return ErrorBoundary;
}(React.Component);
export { ErrorBoundary };