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
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _xProvider = require("../x-provider");
var _style = _interopRequireDefault(require("./style"));
const Prompts = props => {
  const {
    prefixCls: customizePrefixCls,
    title,
    className,
    items,
    onItemClick,
    vertical,
    wrap,
    rootClassName,
    styles = {},
    classNames = {},
    style,
    ...htmlProps
  } = props;

  // ============================ PrefixCls ============================
  const {
    getPrefixCls,
    direction
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('prompts', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = (0, _useXComponentConfig.default)('prompts');

  // ============================ Style ============================
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);
  const mergedCls = (0, _classnames.default)(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const mergedListCls = (0, _classnames.default)(`${prefixCls}-list`, contextConfig.classNames.list, classNames.list, {
    [`${prefixCls}-list-wrap`]: wrap
  }, {
    [`${prefixCls}-list-vertical`]: vertical
  });

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, htmlProps, {
    className: mergedCls,
    style: {
      ...style,
      ...contextConfig.style
    }
  }), title && /*#__PURE__*/_react.default.createElement(_antd.Typography.Title, {
    level: 5,
    className: (0, _classnames.default)(`${prefixCls}-title`, contextConfig.classNames.title, classNames.title),
    style: {
      ...contextConfig.styles.title,
      ...styles.title
    }
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: mergedListCls,
    style: {
      ...contextConfig.styles.list,
      ...styles.list
    }
  }, items?.map((info, index) => {
    const isNest = info.children && info.children.length > 0;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: info.key || `key_${index}`,
      style: {
        ...contextConfig.styles.item,
        ...styles.item
      },
      className: (0, _classnames.default)(`${prefixCls}-item`, contextConfig.classNames.item, classNames.item, {
        [`${prefixCls}-item-disabled`]: info.disabled,
        [`${prefixCls}-item-has-nest`]: isNest
      }),
      onClick: () => {
        if (!isNest && onItemClick) {
          onItemClick({
            data: info
          });
        }
      }
    }, info.icon && /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-icon`
    }, info.icon), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(`${prefixCls}-content`, contextConfig.classNames.itemContent, classNames.itemContent),
      style: {
        ...contextConfig.styles.itemContent,
        ...styles.itemContent
      }
    }, info.label && /*#__PURE__*/_react.default.createElement("h6", {
      className: `${prefixCls}-label`
    }, info.label), info.description && /*#__PURE__*/_react.default.createElement("p", {
      className: `${prefixCls}-desc`
    }, info.description), isNest && /*#__PURE__*/_react.default.createElement(Prompts, {
      className: `${prefixCls}-nested`,
      items: info.children,
      vertical: true,
      onItemClick: onItemClick,
      classNames: {
        list: classNames.subList,
        item: classNames.subItem
      },
      styles: {
        list: styles.subList,
        item: styles.subItem
      }
    })));
  }))));
};
if (process.env.NODE_ENV !== 'production') {
  Prompts.displayName = 'Prompts';
}
var _default = exports.default = Prompts;