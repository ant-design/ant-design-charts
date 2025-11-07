"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcUtil = require("rc-util");
var _react = _interopRequireWildcard(require("react"));
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _xProvider = require("../x-provider");
var _style = _interopRequireDefault(require("./style"));
var _useActive = _interopRequireDefault(require("./useActive"));
const antdVersionCells = _antd.version.split('.').map(Number);
const isNewAPI = antdVersionCells[0] > 5 || antdVersionCells[0] === 5 && antdVersionCells[1] >= 25;
function Suggestion(props) {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    children,
    open,
    onOpenChange,
    items,
    onSelect,
    block
  } = props;

  // ============================= MISC =============================
  const {
    direction,
    getPrefixCls
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('suggestion', customizePrefixCls);
  const itemCls = `${prefixCls}-item`;
  const isRTL = direction === 'rtl';

  // ===================== Component Config =========================
  const contextConfig = (0, _useXComponentConfig.default)('suggestion');

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);

  // =========================== Trigger ============================
  const [mergedOpen, setOpen] = (0, _rcUtil.useMergedState)(false, {
    value: open
  });
  const [info, setInfo] = (0, _react.useState)();
  const triggerOpen = nextOpen => {
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };
  const onTrigger = (0, _rcUtil.useEvent)(nextInfo => {
    if (nextInfo === false) {
      triggerOpen(false);
    } else {
      setInfo(nextInfo);
      triggerOpen(true);
    }
  });
  const onClose = () => {
    triggerOpen(false);
  };

  // ============================ Items =============================
  const itemList = _react.default.useMemo(() => typeof items === 'function' ? items(info) : items, [items, info]);

  // =========================== Cascader ===========================
  const optionRender = node => {
    return /*#__PURE__*/_react.default.createElement(_antd.Flex, {
      className: itemCls
    }, node.icon && /*#__PURE__*/_react.default.createElement("div", {
      className: `${itemCls}-icon`
    }, node.icon), node.label, node.extra && /*#__PURE__*/_react.default.createElement("div", {
      className: `${itemCls}-extra`
    }, node.extra));
  };
  const onInternalChange = valuePath => {
    if (onSelect) {
      onSelect(valuePath[valuePath.length - 1]);
    }
    triggerOpen(false);
  };

  // ============================= a11y =============================
  const [activePath, onKeyDown] = (0, _useActive.default)(itemList, mergedOpen, isRTL, onInternalChange, onClose);

  // =========================== Children ===========================
  const childNode = children?.({
    onTrigger,
    onKeyDown
  });

  // ============================ Render ============================
  const onInternalOpenChange = nextOpen => {
    if (!nextOpen) {
      onClose();
    }
  };
  const compatibleProps = {};

  /* istanbul ignore else */
  if (isNewAPI) {
    compatibleProps.onOpenChange = onInternalOpenChange;
  } else {
    compatibleProps.onDropdownVisibleChange = onInternalOpenChange;
  }
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement(_antd.Cascader, (0, _extends2.default)({
    options: itemList,
    open: mergedOpen,
    value: activePath,
    placement: isRTL ? 'topRight' : 'topLeft'
  }, compatibleProps, {
    optionRender: optionRender,
    rootClassName: (0, _classnames.default)(rootClassName, prefixCls, hashId, cssVarCls, {
      [`${prefixCls}-block`]: block
    }),
    onChange: onInternalChange,
    dropdownMatchSelectWidth: block
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(prefixCls, contextConfig.className, rootClassName, className, `${prefixCls}-wrapper`, hashId, cssVarCls),
    style: {
      ...contextConfig.style,
      ...style
    }
  }, childNode)));
}
if (process.env.NODE_ENV !== 'production') {
  Suggestion.displayName = 'Suggestion';
}
var _default = exports.default = Suggestion;