"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckCardGroupConnext = exports.CardLoading = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("./index"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["prefixCls", "className", "style", "options", "loading", "multiple", "bordered", "onChange"];
/**
 * Represents the possible value types for a CheckGroup.
 * It can be an array of CheckCardValueTypes, a single CheckCardValueType, or undefined.
 */
/**
 * Represents an option for a CheckCard component.
 */
var CardLoading = exports.CardLoading = function CardLoading(_ref) {
  var prefixCls = _ref.prefixCls,
    hashId = _ref.hashId;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-loading-content"), hashId),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
      loading: true,
      active: true,
      paragraph: {
        rows: 4
      },
      title: false
    })
  });
};

/**
 * Represents the state of a CheckCardGroup component.
 */

/**
 * Represents the props for the CheckCardGroup component.
 */

var CheckCardGroupConnext = exports.CheckCardGroupConnext = /*#__PURE__*/(0, _react.createContext)(null);

/**
 * SubCheckCardGroup component.
 *
 * @component
 * @param {React.ReactNode} title - The title of the group.
 * @param {React.ReactNode} children - The content of the group.
 * @param {string} prefix - The prefix for CSS class names.
 * @returns {React.ReactNode} The rendered SubCheckCardGroup component.
 */
var SubCheckCardGroup = function SubCheckCardGroup(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    collapse = _useState2[0],
    setCollapse = _useState2[1];
  var _proTheme$useToken = _proProvider.proTheme.useToken(),
    hashId = _proTheme$useToken.hashId;
  var baseCls = "".concat(props.prefix, "-sub-check-card");
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)(baseCls, hashId),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames.default)("".concat(baseCls, "-title"), hashId),
      onClick: function onClick() {
        setCollapse(!collapse);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RightOutlined, {
        style: {
          transform: "rotate(".concat(collapse ? 90 : 0, "deg)"),
          transition: 'transform 0.3s'
        }
      }), props.title]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(baseCls, "-panel"), hashId, (0, _defineProperty2.default)({}, "".concat(baseCls, "-panel-collapse"), collapse)),
      children: props.children
    })]
  });
};
var CheckCardGroup = function CheckCardGroup(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? false : _props$multiple,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    onChange = props.onChange,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var antdContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var getOptions = (0, _react.useCallback)(function () {
    return options === null || options === void 0 ? void 0 : options.map(function (option) {
      if (typeof option === 'string') {
        return {
          title: option,
          value: option
        };
      }
      return option;
    });
  }, [options]);
  var prefixCls = antdContext.getPrefixCls('pro-checkcard', customizePrefixCls);
  var _useStyle = (0, _style.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var groupPrefixCls = "".concat(prefixCls, "-group");
  var domProps = (0, _omit.default)(restProps, ['children', 'defaultValue', 'value', 'disabled', 'size']);
  var _useMountMergeState = (0, _proUtils.useMountMergeState)(props.defaultValue, {
      value: props.value,
      onChange: props.onChange
    }),
    _useMountMergeState2 = (0, _slicedToArray2.default)(_useMountMergeState, 2),
    stateValue = _useMountMergeState2[0],
    setStateValue = _useMountMergeState2[1];
  var registerValueMap = (0, _react.useRef)(new Map());
  var registerValue = function registerValue(value) {
    var _registerValueMap$cur;
    (_registerValueMap$cur = registerValueMap.current) === null || _registerValueMap$cur === void 0 || _registerValueMap$cur.set(value, true);
  };
  var cancelValue = function cancelValue(value) {
    var _registerValueMap$cur2;
    (_registerValueMap$cur2 = registerValueMap.current) === null || _registerValueMap$cur2 === void 0 || _registerValueMap$cur2.delete(value);
  };
  var toggleOption = function toggleOption(option) {
    if (!multiple) {
      var changeValue;
      changeValue = stateValue;
      // 单选模式
      if (changeValue === option.value) {
        changeValue = undefined;
      } else {
        changeValue = option.value;
      }
      setStateValue === null || setStateValue === void 0 || setStateValue(changeValue);
    }
    if (multiple) {
      var _changeValue2;
      var _changeValue = [];
      var stateValues = stateValue;
      var hasOption = stateValues === null || stateValues === void 0 ? void 0 : stateValues.includes(option.value);
      _changeValue = (0, _toConsumableArray2.default)(stateValues || []);
      if (!hasOption) {
        _changeValue.push(option.value);
      }
      if (hasOption) {
        _changeValue = _changeValue.filter(function (itemValue) {
          return itemValue !== option.value;
        });
      }
      var newOptions = getOptions();
      var newValue = (_changeValue2 = _changeValue) === null || _changeValue2 === void 0 || (_changeValue2 = _changeValue2.filter(function (val) {
        return registerValueMap.current.has(val);
      })) === null || _changeValue2 === void 0 ? void 0 : _changeValue2.sort(function (a, b) {
        var indexA = newOptions.findIndex(function (opt) {
          return opt.value === a;
        });
        var indexB = newOptions.findIndex(function (opt) {
          return opt.value === b;
        });
        return indexA - indexB;
      });
      setStateValue(newValue);
    }
  };
  var children = (0, _react.useMemo)(function () {
    if (loading) {
      return new Array(options.length || _react.default.Children.toArray(props.children).length || 1).fill(0)
      // eslint-disable-next-line react/no-array-index-key
      .map(function (_, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, {
          loading: true
        }, index);
      });
    }
    if (options && options.length > 0) {
      var optionValue = stateValue;
      var renderOptions = function renderOptions(list) {
        return list.map(function (option) {
          var _option$size;
          if (option.children && option.children.length > 0) {
            var _option$value, _option$title;
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(SubCheckCardGroup, {
              title: option.title,
              prefix: groupPrefixCls,
              children: renderOptions(option.children)
            }, ((_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.toString()) || ((_option$title = option.title) === null || _option$title === void 0 ? void 0 : _option$title.toString()));
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, {
            disabled: option.disabled,
            size: (_option$size = option.size) !== null && _option$size !== void 0 ? _option$size : props.size,
            value: option.value,
            checked: multiple ? optionValue === null || optionValue === void 0 ? void 0 : optionValue.includes(option.value) : optionValue === option.value,
            onChange: option.onChange,
            title: option.title,
            avatar: option.avatar,
            description: option.description,
            cover: option.cover
          }, option.value.toString());
        });
      };
      return renderOptions(getOptions());
    }
    return props.children;
  }, [getOptions, loading, multiple, options, props.children, props.size, stateValue]);
  var classString = (0, _classnames.default)(groupPrefixCls, className, hashId);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(CheckCardGroupConnext.Provider, {
    value: {
      toggleOption: toggleOption,
      bordered: bordered,
      value: stateValue,
      disabled: props.disabled,
      size: props.size,
      loading: props.loading,
      multiple: props.multiple,
      // https://github.com/ant-design/ant-design/issues/16376
      registerValue: registerValue,
      cancelValue: cancelValue
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
      className: classString,
      style: style
    }, domProps), {}, {
      children: children
    }))
  }));
};
var _default = exports.default = function _default(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proProvider.ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CheckCardGroup, (0, _objectSpread2.default)({}, props))
  });
};