"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProHelpModal = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _ProHelpPanel = require("./ProHelpPanel");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["modalProps"];
/**
 * 渲染一个模态对话框，其中显示了一个 ProHelpPanel。
 * @param modalProps 要传递给 Modal 组件的属性。
 * @param props 要传递给 ProHelpPanel 组件的属性。
 */
var ProHelpModal = exports.ProHelpModal = function ProHelpModal(_ref) {
  var modalProps = _ref.modalProps,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useMergedState = (0, _useMergedState3.default)(false, {
      value: modalProps === null || modalProps === void 0 ? void 0 : modalProps.open,
      onChange: modalProps === null || modalProps === void 0 ? void 0 : modalProps.afterClose
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    modalOpen = _useMergedState2[0],
    setModalOpen = _useMergedState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Modal, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    onCancel: function onCancel() {
      setModalOpen(false);
    },
    styles: {
      body: {
        margin: -24
      }
    },
    centered: true,
    closable: false,
    footer: null,
    width: 720,
    open: modalOpen,
    maskClosable: true
  }, modalProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProHelpPanel.ProHelpPanel, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      height: 648
    }, props), {}, {
      onClose: function onClose() {
        return setModalOpen(false);
      }
    }))
  }));
};