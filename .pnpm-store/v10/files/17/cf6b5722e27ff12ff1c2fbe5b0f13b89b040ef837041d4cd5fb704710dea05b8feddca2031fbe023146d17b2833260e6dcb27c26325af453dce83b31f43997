"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProForm = ProForm;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _BaseForm = require("../../BaseForm");
var _EditOrReadOnlyContext = require("../../BaseForm/EditOrReadOnlyContext");
var _components = require("../../components");
var _jsxRuntime = require("react/jsx-runtime");
function ProForm(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseForm.BaseForm, (0, _objectSpread2.default)({
    layout: "vertical",
    contentRender: function contentRender(items, submitter) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [items, submitter]
      });
    }
  }, props));
}
ProForm.Group = _components.Group;
ProForm.useForm = _antd.Form.useForm;
ProForm.Item = _components.ProFormItem;
ProForm.useWatch = _antd.Form.useWatch;
ProForm.ErrorList = _antd.Form.ErrorList;
ProForm.Provider = _antd.Form.Provider;
ProForm.useFormInstance = _antd.Form.useFormInstance;
ProForm.EditOrReadOnlyContext = _EditOrReadOnlyContext.EditOrReadOnlyContext;