import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["prefixCls", "className", "style", "options", "loading", "multiple", "bordered", "onChange"];
import { useMountMergeState } from '@ant-design/pro-utils';
import { ConfigProvider, Skeleton } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { ProConfigProvider, proTheme } from '@ant-design/pro-provider';
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import CheckCard from "./index";
import { useStyle } from "./style";

/**
 * Represents the possible value types for a CheckGroup.
 * It can be an array of CheckCardValueTypes, a single CheckCardValueType, or undefined.
 */

/**
 * Represents an option for a CheckCard component.
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var CardLoading = function CardLoading(_ref) {
  var prefixCls = _ref.prefixCls,
    hashId = _ref.hashId;
  return /*#__PURE__*/_jsx("div", {
    className: classNames("".concat(prefixCls, "-loading-content"), hashId),
    children: /*#__PURE__*/_jsx(Skeleton, {
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

export var CheckCardGroupConnext = /*#__PURE__*/createContext(null);

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
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    collapse = _useState2[0],
    setCollapse = _useState2[1];
  var _proTheme$useToken = proTheme.useToken(),
    hashId = _proTheme$useToken.hashId;
  var baseCls = "".concat(props.prefix, "-sub-check-card");
  return /*#__PURE__*/_jsxs("div", {
    className: classNames(baseCls, hashId),
    children: [/*#__PURE__*/_jsxs("div", {
      className: classNames("".concat(baseCls, "-title"), hashId),
      onClick: function onClick() {
        setCollapse(!collapse);
      },
      children: [/*#__PURE__*/_jsx(RightOutlined, {
        style: {
          transform: "rotate(".concat(collapse ? 90 : 0, "deg)"),
          transition: 'transform 0.3s'
        }
      }), props.title]
    }), /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(baseCls, "-panel"), hashId, _defineProperty({}, "".concat(baseCls, "-panel-collapse"), collapse)),
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
    restProps = _objectWithoutProperties(props, _excluded);
  var antdContext = useContext(ConfigProvider.ConfigContext);
  var getOptions = useCallback(function () {
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
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var groupPrefixCls = "".concat(prefixCls, "-group");
  var domProps = omit(restProps, ['children', 'defaultValue', 'value', 'disabled', 'size']);
  var _useMountMergeState = useMountMergeState(props.defaultValue, {
      value: props.value,
      onChange: props.onChange
    }),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    stateValue = _useMountMergeState2[0],
    setStateValue = _useMountMergeState2[1];
  var registerValueMap = useRef(new Map());
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
      _changeValue = _toConsumableArray(stateValues || []);
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
  var children = useMemo(function () {
    if (loading) {
      return new Array(options.length || React.Children.toArray(props.children).length || 1).fill(0)
      // eslint-disable-next-line react/no-array-index-key
      .map(function (_, index) {
        return /*#__PURE__*/_jsx(CheckCard, {
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
            return /*#__PURE__*/_jsx(SubCheckCardGroup, {
              title: option.title,
              prefix: groupPrefixCls,
              children: renderOptions(option.children)
            }, ((_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.toString()) || ((_option$title = option.title) === null || _option$title === void 0 ? void 0 : _option$title.toString()));
          }
          return /*#__PURE__*/_jsx(CheckCard, {
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
  var classString = classNames(groupPrefixCls, className, hashId);
  return wrapSSR( /*#__PURE__*/_jsx(CheckCardGroupConnext.Provider, {
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
    children: /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      className: classString,
      style: style
    }, domProps), {}, {
      children: children
    }))
  }));
};
export default (function (props) {
  return /*#__PURE__*/_jsx(ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/_jsx(CheckCardGroup, _objectSpread({}, props))
  });
});