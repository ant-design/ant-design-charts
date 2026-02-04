"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _GroupTitle = _interopRequireWildcard(require("./GroupTitle"));
var _Item = _interopRequireDefault(require("./Item"));
var _useMergedState = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _xProvider = require("../x-provider");
var _useGroupable = _interopRequireDefault(require("./hooks/useGroupable"));
var _style = _interopRequireDefault(require("./style"));
var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));
/**
 * @desc 会话列表组件参数
 * @descEN Props for the conversation list component
 */

const Conversations = props => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    items,
    activeKey,
    defaultActiveKey,
    onActiveChange,
    menu,
    styles = {},
    classNames = {},
    groupable,
    className,
    style,
    ...restProps
  } = props;
  const domProps = (0, _pickAttrs.default)(restProps, {
    attr: true,
    aria: true,
    data: true
  });

  // ============================ ActiveKey ============================
  const [mergedActiveKey, setMergedActiveKey] = (0, _useMergedState.default)(defaultActiveKey, {
    value: activeKey
  });

  // ============================ Groupable ============================
  const [groupList, enableGroup] = (0, _useGroupable.default)(groupable, items);

  // ============================ Prefix ============================
  const {
    getPrefixCls,
    direction
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('conversations', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = (0, _useXComponentConfig.default)('conversations');

  // ============================ Style ============================
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);
  const mergedCls = (0, _classnames.default)(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });

  // ============================ Events ============================
  const onConversationItemClick = info => {
    setMergedActiveKey(info.key);
    if (onActiveChange) {
      onActiveChange(info.key);
    }
  };

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, domProps, {
    style: {
      ...contextConfig.style,
      ...style
    },
    className: mergedCls
  }), groupList.map((groupInfo, groupIndex) => {
    const convItems = groupInfo.data.map((convInfo, convIndex) => {
      const {
        label: _,
        disabled: __,
        icon: ___,
        ...restInfo
      } = convInfo;
      return /*#__PURE__*/_react.default.createElement(_Item.default, (0, _extends2.default)({}, restInfo, {
        key: convInfo.key || `key-${convIndex}`,
        info: convInfo,
        prefixCls: prefixCls,
        direction: direction,
        className: (0, _classnames.default)(classNames.item, contextConfig.classNames.item, convInfo.className),
        style: {
          ...contextConfig.styles.item,
          ...styles.item,
          ...convInfo.style
        },
        menu: typeof menu === 'function' ? menu(convInfo) : menu,
        active: mergedActiveKey === convInfo.key,
        onClick: onConversationItemClick
      }));
    });

    // With group to show the title
    if (enableGroup) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: groupInfo.name || `key-${groupIndex}`
      }, /*#__PURE__*/_react.default.createElement(_GroupTitle.GroupTitleContext.Provider, {
        value: {
          prefixCls
        }
      }, groupInfo.title?.(groupInfo.name, {
        components: {
          GroupTitle: _GroupTitle.default
        }
      }) || /*#__PURE__*/_react.default.createElement(_GroupTitle.default, {
        key: groupInfo.name
      }, groupInfo.name)), /*#__PURE__*/_react.default.createElement("ul", {
        className: `${prefixCls}-list`
      }, convItems));
    }
    return convItems;
  })));
};
if (process.env.NODE_ENV !== 'production') {
  Conversations.displayName = 'Conversations';
}
var _default = exports.default = Conversations;