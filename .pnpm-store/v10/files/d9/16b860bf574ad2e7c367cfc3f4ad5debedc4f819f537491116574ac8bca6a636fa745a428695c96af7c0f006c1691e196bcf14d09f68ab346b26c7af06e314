"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _context = require("./context");
function Placeholder(props, ref) {
  const {
    prefixCls,
    placeholder = {},
    upload,
    className,
    style
  } = props;
  const placeholderCls = `${prefixCls}-placeholder`;
  const placeholderConfig = placeholder || {};
  const {
    disabled
  } = _react.default.useContext(_context.AttachmentContext);

  // ============================= Drag =============================
  const [dragIn, setDragIn] = _react.default.useState(false);
  const onDragEnter = () => {
    setDragIn(true);
  };
  const onDragLeave = e => {
    // Leave the div should end
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragIn(false);
    }
  };
  const onDrop = () => {
    setDragIn(false);
  };

  // ============================ Render ============================
  const node = /*#__PURE__*/_react.default.isValidElement(placeholder) ? placeholder : /*#__PURE__*/_react.default.createElement(_antd.Flex, {
    align: "center",
    justify: "center",
    vertical: true,
    className: `${placeholderCls}-inner`
  }, /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: `${placeholderCls}-icon`
  }, placeholderConfig.icon), /*#__PURE__*/_react.default.createElement(_antd.Typography.Title, {
    className: `${placeholderCls}-title`,
    level: 5
  }, placeholderConfig.title), /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: `${placeholderCls}-description`,
    type: "secondary"
  }, placeholderConfig.description));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(placeholderCls, {
      [`${placeholderCls}-drag-in`]: dragIn,
      [`${placeholderCls}-disabled`]: disabled
    }, className),
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDrop: onDrop,
    "aria-hidden": disabled,
    style: style
  }, /*#__PURE__*/_react.default.createElement(_antd.Upload.Dragger, (0, _extends2.default)({
    showUploadList: false
  }, upload, {
    ref: ref,
    style: {
      padding: 0,
      border: 0,
      background: 'transparent'
    }
  }), node));
}
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(Placeholder);