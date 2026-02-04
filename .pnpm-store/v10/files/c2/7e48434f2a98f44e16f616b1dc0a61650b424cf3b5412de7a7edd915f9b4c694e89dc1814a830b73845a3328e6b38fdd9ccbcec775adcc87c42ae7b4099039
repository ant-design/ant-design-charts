"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _xProvider = require("../x-provider");
var _style = _interopRequireDefault(require("./style"));
function Welcome(props, ref) {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    className,
    style,
    variant = 'filled',
    // Semantic
    classNames = {},
    styles = {},
    // Layout
    icon,
    title,
    description,
    extra
  } = props;

  // ============================= MISC =============================
  const {
    direction,
    getPrefixCls
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('welcome', customizePrefixCls);

  // ======================= Component Config =======================
  const contextConfig = (0, _useXComponentConfig.default)('welcome');

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);

  // ============================= Icon =============================
  const iconNode = _react.default.useMemo(() => {
    if (!icon) {
      return null;
    }
    let iconEle = icon;
    if (typeof icon === 'string' && icon.startsWith('http')) {
      iconEle = /*#__PURE__*/_react.default.createElement("img", {
        src: icon,
        alt: "icon"
      });
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(`${prefixCls}-icon`, contextConfig.classNames.icon, classNames.icon),
      style: styles.icon
    }, iconEle);
  }, [icon]);
  const titleNode = _react.default.useMemo(() => {
    if (!title) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement(_antd.Typography.Title, {
      level: 4,
      className: (0, _classnames.default)(`${prefixCls}-title`, contextConfig.classNames.title, classNames.title),
      style: styles.title
    }, title);
  }, [title]);
  const extraNode = _react.default.useMemo(() => {
    if (!extra) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(`${prefixCls}-extra`, contextConfig.classNames.extra, classNames.extra),
      style: styles.extra
    }, extra);
  }, [extra]);

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement(_antd.Flex, {
    ref: ref,
    className: (0, _classnames.default)(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, `${prefixCls}-${variant}`, {
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }),
    style: style
  }, iconNode, /*#__PURE__*/_react.default.createElement(_antd.Flex, {
    vertical: true,
    className: `${prefixCls}-content-wrapper`
  }, extra ? /*#__PURE__*/_react.default.createElement(_antd.Flex, {
    align: "flex-start",
    className: `${prefixCls}-title-wrapper`
  }, titleNode, extraNode) : titleNode, description && /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: (0, _classnames.default)(`${prefixCls}-description`, contextConfig.classNames.description, classNames.description),
    style: styles.description
  }, description))));
}
const ForwardWelcome = /*#__PURE__*/_react.default.forwardRef(Welcome);
if (process.env.NODE_ENV !== 'production') {
  ForwardWelcome.displayName = 'Welcome';
}
var _default = exports.default = ForwardWelcome;