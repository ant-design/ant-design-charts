"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
/**
 * SilentUploader is only wrap children with antd Upload component.
 */
function SilentUploader(props, ref) {
  const {
    children,
    upload,
    rootClassName
  } = props;
  const uploadRef = _react.default.useRef(null);
  _react.default.useImperativeHandle(ref, () => uploadRef.current);

  // ============================ Render ============================
  return /*#__PURE__*/_react.default.createElement(_antd.Upload, (0, _extends2.default)({}, upload, {
    showUploadList: false,
    rootClassName: rootClassName,
    ref: uploadRef
  }), children);
}
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(SilentUploader);