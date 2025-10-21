"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendHeaderContext = void 0;
exports.default = SenderHeader;
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcMotion = _interopRequireDefault(require("rc-motion"));
var React = _interopRequireWildcard(require("react"));
const SendHeaderContext = exports.SendHeaderContext = /*#__PURE__*/React.createContext({});
const collapseHeight = () => ({
  height: 0
});
const expandedHeight = ele => ({
  height: ele.scrollHeight
});
function SenderHeader(props) {
  const {
    title,
    onOpenChange,
    open,
    children,
    className,
    style,
    classNames: classes = {},
    styles = {},
    closable,
    forceRender
  } = props;
  const {
    prefixCls
  } = React.useContext(SendHeaderContext);
  const headerCls = `${prefixCls}-header`;
  return /*#__PURE__*/React.createElement(_rcMotion.default, {
    motionEnter: true,
    motionLeave: true,
    motionName: `${headerCls}-motion`,
    leavedClassName: `${headerCls}-motion-hidden`,
    onEnterStart: collapseHeight,
    onEnterActive: expandedHeight,
    onLeaveStart: expandedHeight,
    onLeaveActive: collapseHeight,
    visible: open,
    forceRender: forceRender
  }, ({
    className: motionClassName,
    style: motionStyle
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames.default)(headerCls, motionClassName, className),
      style: {
        ...motionStyle,
        ...style
      }
    }, (closable !== false || title) && /*#__PURE__*/React.createElement("div", {
      className:
      // We follow antd naming standard here.
      // So the header part is use `-header` suffix.
      // Though its little bit weird for double `-header`.
      (0, _classnames.default)(`${headerCls}-header`, classes.header),
      style: {
        ...styles.header
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: `${headerCls}-title`
    }, title), closable !== false && /*#__PURE__*/React.createElement("div", {
      className: `${headerCls}-close`
    }, /*#__PURE__*/React.createElement(_antd.Button, {
      type: "text",
      icon: /*#__PURE__*/React.createElement(_icons.CloseOutlined, null),
      size: "small",
      onClick: () => {
        onOpenChange?.(!open);
      }
    }))), children && /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames.default)(`${headerCls}-content`, classes.content),
      style: {
        ...styles.content
      }
    }, children));
  });
}