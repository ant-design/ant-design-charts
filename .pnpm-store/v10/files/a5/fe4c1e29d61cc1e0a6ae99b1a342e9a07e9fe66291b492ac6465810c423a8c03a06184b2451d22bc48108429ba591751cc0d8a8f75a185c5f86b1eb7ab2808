"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));
var _react = _interopRequireDefault(require("react"));
var _xProvider = require("../x-provider");
var _useCollapsible = _interopRequireDefault(require("./hooks/useCollapsible"));
var _style = _interopRequireDefault(require("./style"));
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _Item = _interopRequireWildcard(require("./Item"));
const ThoughtChain = props => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    className,
    items,
    collapsible,
    styles = {},
    style,
    classNames = {},
    size = 'middle',
    ...restProps
  } = props;
  const domProps = (0, _pickAttrs.default)(restProps, {
    attr: true,
    aria: true,
    data: true
  });

  // ============================ Prefix ============================
  const {
    getPrefixCls,
    direction
  } = (0, _xProvider.useXProviderContext)();
  const rootPrefixCls = getPrefixCls();
  const prefixCls = getPrefixCls('thought-chain', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = (0, _useXComponentConfig.default)('thoughtChain');

  // ============================ UseCollapsible ============================
  const [enableCollapse, expandedKeys, onItemExpand, collapseMotion] = (0, _useCollapsible.default)(collapsible, prefixCls, rootPrefixCls);

  // ============================ Style ============================
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);
  const mergedCls = (0, _classnames.default)(className, rootClassName, prefixCls, contextConfig.className, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, `${prefixCls}-${size}`);

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, domProps, {
    className: mergedCls,
    style: {
      ...contextConfig.style,
      ...style
    }
  }), /*#__PURE__*/_react.default.createElement(_Item.ThoughtChainNodeContext.Provider, {
    value: {
      prefixCls,
      enableCollapse,
      collapseMotion,
      expandedKeys,
      direction,
      classNames: {
        itemHeader: (0, _classnames.default)(contextConfig.classNames.itemHeader, classNames.itemHeader),
        itemContent: (0, _classnames.default)(contextConfig.classNames.itemContent, classNames.itemContent),
        itemFooter: (0, _classnames.default)(contextConfig.classNames.itemFooter, classNames.itemFooter)
      },
      styles: {
        itemHeader: {
          ...contextConfig.styles.itemHeader,
          ...styles.itemHeader
        },
        itemContent: {
          ...contextConfig.styles.itemContent,
          ...styles.itemContent
        },
        itemFooter: {
          ...contextConfig.styles.itemFooter,
          ...styles.itemFooter
        }
      }
    }
  }, items?.map((item, index) => /*#__PURE__*/_react.default.createElement(_Item.default, {
    key: item.key || `key_${index}`,
    className: (0, _classnames.default)(contextConfig.classNames.item, classNames.item),
    style: {
      ...contextConfig.styles.item,
      ...styles.item
    },
    info: {
      ...item,
      icon: item.icon || index + 1
    },
    onClick: onItemExpand,
    nextStatus: items[index + 1]?.status || item.status
  })))));
};
if (process.env.NODE_ENV !== 'production') {
  ThoughtChain.displayName = 'ThoughtChain';
}
var _default = exports.default = ThoughtChain;