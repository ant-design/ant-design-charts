"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFieldFetchData = exports.proFieldParsingValueEnumToArray = exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _swr = _interopRequireDefault(require("swr"));
var _LightSelect = _interopRequireDefault(require("./LightSelect"));
var _SearchSelect = _interopRequireDefault(require("./SearchSelect"));
require("antd/lib/select/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["value", "text"],
  _excluded2 = ["mode", "valueEnum", "render", "renderFormItem", "request", "fieldProps", "plain", "children", "light", "proFieldKey", "params", "label", "bordered", "id", "lightLabel", "labelTrigger"]; // 兼容代码-----------
//------------
var Highlight = function Highlight(_ref) {
  var label = _ref.label,
    words = _ref.words;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var lightCls = getPrefixCls('pro-select-item-option-content-light');
  var optionCls = getPrefixCls('pro-select-item-option-content');

  // css
  var _useStyle = (0, _proUtils.useStyle)('Highlight', function (token) {
      return (0, _defineProperty2.default)((0, _defineProperty2.default)({}, ".".concat(lightCls), {
        color: token.colorPrimary
      }), ".".concat(optionCls), {
        flex: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      });
    }),
    wrapSSR = _useStyle.wrapSSR;
  var matchKeywordsRE = new RegExp(words.map(function (word) {
    return word.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
  }).join('|'), 'gi');
  var matchText = label;
  var elements = [];
  while (matchText.length) {
    var match = matchKeywordsRE.exec(matchText);
    if (!match) {
      elements.push(matchText);
      break;
    }
    var start = match.index;
    var matchLength = match[0].length + start;
    elements.push(matchText.slice(0, start), /*#__PURE__*/_react.default.createElement('span', {
      className: lightCls
    }, matchText.slice(start, matchLength)));
    matchText = matchText.slice(matchLength);
  }
  return wrapSSR( /*#__PURE__*/_react.default.createElement.apply(_react.default, ['div', {
    title: label,
    className: optionCls
  }].concat(elements)));
};

/**
 * 递归筛选 item
 *
 * @param item
 * @param keyWords
 * @returns
 */
function filerByItem(item, keyWords) {
  var _item$label, _item$value;
  if (!keyWords) return true;
  if (item !== null && item !== void 0 && (_item$label = item.label) !== null && _item$label !== void 0 && _item$label.toString().toLowerCase().includes(keyWords.toLowerCase()) || item !== null && item !== void 0 && (_item$value = item.value) !== null && _item$value !== void 0 && _item$value.toString().toLowerCase().includes(keyWords.toLowerCase())) {
    return true;
  }
  if (item.children || item.options) {
    var findItem = [].concat((0, _toConsumableArray2.default)(item.children || []), [item.options || []]).find(function (mapItem) {
      return filerByItem(mapItem, keyWords);
    });
    if (findItem) return true;
  }
  return false;
}

/**
 * 把 value 的枚举转化为数组
 *
 * @param valueEnum
 */
var proFieldParsingValueEnumToArray = exports.proFieldParsingValueEnumToArray = function proFieldParsingValueEnumToArray(valueEnumParams) {
  var enumArray = [];
  var valueEnum = (0, _proUtils.objectToMap)(valueEnumParams);
  valueEnum.forEach(function (_, key) {
    var value = valueEnum.get(key) || valueEnum.get("".concat(key));
    if (!value) {
      return;
    }
    if ((0, _typeof2.default)(value) === 'object' && value !== null && value !== void 0 && value.text) {
      enumArray.push({
        text: value === null || value === void 0 ? void 0 : value.text,
        value: key,
        label: value === null || value === void 0 ? void 0 : value.text,
        disabled: value.disabled
      });
      return;
    }
    enumArray.push({
      text: value,
      value: key
    });
  });
  return enumArray;
};
var useFieldFetchData = exports.useFieldFetchData = function useFieldFetchData(props) {
  var _ref5, _props$debounceTime, _props$fieldProps3, _props$fieldProps6;
  var cacheForSwr = props.cacheForSwr,
    fieldProps = props.fieldProps;
  var _useState = (0, _react.useState)(props.defaultKeyWords),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    keyWords = _useState2[0],
    setKeyWords = _useState2[1];
  /** Key 是用来缓存请求的，如果不在是有问题 */
  var _useState3 = (0, _react.useState)(function () {
      if (props.proFieldKey) {
        return props.proFieldKey.toString();
      }
      if (props.request) {
        return (0, _proUtils.nanoid)();
      }
      return 'no-fetch';
    }),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
    cacheKey = _useState4[0];
  var proFieldKeyRef = (0, _react.useRef)(cacheKey);
  var getOptionsFormValueEnum = (0, _proUtils.useRefFunction)(function (coverValueEnum) {
    return proFieldParsingValueEnumToArray((0, _proUtils.objectToMap)(coverValueEnum)).map(function (_ref3) {
      var value = _ref3.value,
        text = _ref3.text,
        rest = (0, _objectWithoutProperties2.default)(_ref3, _excluded);
      return (0, _objectSpread2.default)({
        label: text,
        value: value,
        key: value
      }, rest);
    });
  });
  var defaultOptions = (0, _proUtils.useDeepCompareMemo)(function () {
    if (!fieldProps) return undefined;
    var data = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.options) || (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.treeData);
    if (!data) return undefined;
    var _ref4 = fieldProps.fieldNames || {},
      children = _ref4.children,
      label = _ref4.label,
      value = _ref4.value;
    var traverseFieldKey = function traverseFieldKey(_options, type) {
      if (!(_options !== null && _options !== void 0 && _options.length)) return;
      var length = _options.length;
      var i = 0;
      while (i < length) {
        var cur = _options[i++];
        var customFieldName = type === 'children' ? children : type === 'label' ? label : value;
        if (customFieldName && cur[customFieldName] !== undefined) {
          cur[type] = cur[customFieldName];
          if (type === 'children') {
            traverseFieldKey(cur[customFieldName], 'children');
            traverseFieldKey(cur[customFieldName], 'label');
            traverseFieldKey(cur[customFieldName], 'value');
          }
        }
      }
    };
    if (children) traverseFieldKey(data, 'children');
    if (label) traverseFieldKey(data, 'label');
    if (value) traverseFieldKey(data, 'value');
    return data;
  }, [fieldProps]);
  var _useMountMergeState = (0, _proUtils.useMountMergeState)(function () {
      if (props.valueEnum) {
        return getOptionsFormValueEnum(props.valueEnum);
      }
      return [];
    }, {
      value: defaultOptions
    }),
    _useMountMergeState2 = (0, _slicedToArray2.default)(_useMountMergeState, 2),
    options = _useMountMergeState2[0],
    setOptions = _useMountMergeState2[1];
  (0, _proUtils.useDeepCompareEffect)(function () {
    var _props$fieldProps, _props$fieldProps2;
    // 优先使用 fieldProps?.options
    if (!props.valueEnum || (_props$fieldProps = props.fieldProps) !== null && _props$fieldProps !== void 0 && _props$fieldProps.options || (_props$fieldProps2 = props.fieldProps) !== null && _props$fieldProps2 !== void 0 && _props$fieldProps2.treeData) return;
    setOptions(getOptionsFormValueEnum(props.valueEnum));
  }, [props.valueEnum]);
  var swrKey = (0, _proUtils.useDebounceValue)([proFieldKeyRef.current, props.params, keyWords], (_ref5 = (_props$debounceTime = props.debounceTime) !== null && _props$debounceTime !== void 0 ? _props$debounceTime : props === null || props === void 0 || (_props$fieldProps3 = props.fieldProps) === null || _props$fieldProps3 === void 0 ? void 0 : _props$fieldProps3.debounceTime) !== null && _ref5 !== void 0 ? _ref5 : 0, [props.params, keyWords]);
  var _useSWR = (0, _swr.default)(function () {
      if (!props.request) {
        return null;
      }
      return swrKey;
    }, function (_ref6) {
      var _ref7 = (0, _slicedToArray2.default)(_ref6, 3),
        params = _ref7[1],
        kw = _ref7[2];
      return props.request((0, _objectSpread2.default)((0, _objectSpread2.default)({}, params), {}, {
        keyWords: kw
      }), props);
    }, {
      revalidateIfStale: !cacheForSwr,
      // 打开 cacheForSwr 的时候才应该支持两个功能
      revalidateOnReconnect: cacheForSwr,
      shouldRetryOnError: false,
      // @todo 这个功能感觉应该搞个API出来
      revalidateOnFocus: false
    }),
    data = _useSWR.data,
    setLocaleData = _useSWR.mutate,
    isValidating = _useSWR.isValidating;
  var resOptions = (0, _react.useMemo)(function () {
    var _props$fieldProps4, _props$fieldProps5;
    var opt = options === null || options === void 0 ? void 0 : options.map(function (item) {
      if (typeof item === 'string') {
        return {
          label: item,
          value: item
        };
      }
      if (item.children || item.options) {
        var childrenOptions = [].concat((0, _toConsumableArray2.default)(item.children || []), (0, _toConsumableArray2.default)(item.options || [])).filter(function (mapItem) {
          return filerByItem(mapItem, keyWords);
        });
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
          children: childrenOptions,
          options: childrenOptions
        });
      }
      return item;
    });

    // filterOption 为 true 时 filter数据, filterOption 默认为true
    if (((_props$fieldProps4 = props.fieldProps) === null || _props$fieldProps4 === void 0 ? void 0 : _props$fieldProps4.filterOption) === true || ((_props$fieldProps5 = props.fieldProps) === null || _props$fieldProps5 === void 0 ? void 0 : _props$fieldProps5.filterOption) === undefined) {
      return opt === null || opt === void 0 ? void 0 : opt.filter(function (item) {
        if (!item) return false;
        if (!keyWords) return true;
        return filerByItem(item, keyWords);
      });
    }
    return opt;
  }, [options, keyWords, (_props$fieldProps6 = props.fieldProps) === null || _props$fieldProps6 === void 0 ? void 0 : _props$fieldProps6.filterOption]);
  var applyFieldNamesMapping = function applyFieldNamesMapping(item) {
    if (!(fieldProps !== null && fieldProps !== void 0 && fieldProps.fieldNames)) return item;
    var _fieldProps$fieldName = fieldProps.fieldNames,
      _fieldProps$fieldName2 = _fieldProps$fieldName.label,
      labelKey = _fieldProps$fieldName2 === void 0 ? 'label' : _fieldProps$fieldName2,
      _fieldProps$fieldName3 = _fieldProps$fieldName.value,
      valueKey = _fieldProps$fieldName3 === void 0 ? 'value' : _fieldProps$fieldName3;
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
      label: item[labelKey],
      value: item[valueKey]
    });
  };
  var finalData = props.request ? data === null || data === void 0 ? void 0 : data.map(function (item) {
    return applyFieldNamesMapping(item);
  }) : undefined;
  return [isValidating, finalData || resOptions, function (fetchKeyWords) {
    setKeyWords(fetchKeyWords);
  }, function () {
    setKeyWords(undefined);
    setLocaleData([], false);
  }];
};

/**
 * 可以根据 valueEnum 来进行类型的设置
 *
 * @param
 */
var FieldSelect = function FieldSelect(props, ref) {
  var _ConfigProvider$useCo;
  var mode = props.mode,
    valueEnum = props.valueEnum,
    render = props.render,
    renderFormItem = props.renderFormItem,
    request = props.request,
    fieldProps = props.fieldProps,
    plain = props.plain,
    children = props.children,
    light = props.light,
    proFieldKey = props.proFieldKey,
    params = props.params,
    label = props.label,
    bordered = props.bordered,
    id = props.id,
    lightLabel = props.lightLabel,
    labelTrigger = props.labelTrigger,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded2);
  var inputRef = (0, _react.useRef)();
  var intl = (0, _proProvider.useIntl)();
  var keyWordsRef = (0, _react.useRef)('');
  (0, _react.useEffect)(function () {
    keyWordsRef.current = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.searchValue;
  }, [fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.searchValue]);
  var _useFieldFetchData = useFieldFetchData(props),
    _useFieldFetchData2 = (0, _slicedToArray2.default)(_useFieldFetchData, 4),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2],
    resetData = _useFieldFetchData2[3];
  var _ref8 = (_antd.ConfigProvider === null || _antd.ConfigProvider === void 0 || (_ConfigProvider$useCo = _antd.ConfigProvider.useConfig) === null || _ConfigProvider$useCo === void 0 ? void 0 : _ConfigProvider$useCo.call(_antd.ConfigProvider)) || {
      componentSize: 'middle'
    },
    componentSize = _ref8.componentSize;
  (0, _react.useImperativeHandle)(ref, function () {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, inputRef.current || {}), {}, {
      fetchData: function fetchData(keyWord) {
        return _fetchData(keyWord);
      }
    });
  }, [_fetchData]);
  var optionsValueEnum = (0, _react.useMemo)(function () {
    if (mode !== 'read') return;

    /**
     * Support select fieldNames
     * Similar to cascader fieldNames support
     */
    var _ref9 = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.fieldNames) || {},
      _ref9$value = _ref9.value,
      valuePropsName = _ref9$value === void 0 ? 'value' : _ref9$value,
      _ref9$label = _ref9.label,
      labelPropsName = _ref9$label === void 0 ? 'label' : _ref9$label,
      _ref9$options = _ref9.options,
      optionsPropsName = _ref9$options === void 0 ? 'options' : _ref9$options;
    var traverseOptions = function traverseOptions(_options) {
      var localMap = new Map();
      if (!(_options !== null && _options !== void 0 && _options.length)) {
        return localMap;
      }
      var length = _options.length;
      for (var i = 0; i < length; i++) {
        var cur = _options[i];

        // Use fieldNames mapping to get correct value and label
        var curValue = cur[valuePropsName];
        var curLabel = cur[labelPropsName];
        if (curValue !== undefined && curLabel !== undefined) {
          localMap.set(curValue, curLabel);
        }

        // Handle nested options with fieldNames mapping
        var childOptions = cur[optionsPropsName] || cur.options;
        if (childOptions !== null && childOptions !== void 0 && childOptions.length) {
          var childMap = traverseOptions(childOptions);
          childMap.forEach(function (v, k) {
            return localMap.set(k, v);
          });
        }
      }
      return localMap;
    };
    return traverseOptions(options);
  }, [mode, options, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.fieldNames]);
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: (0, _proUtils.proFieldParsingText)(rest.text, (0, _proUtils.objectToMap)(valueEnum || optionsValueEnum))
    });
    if (render) {
      var _render;
      return (_render = render(dom, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), {}, {
        options: options
      }), dom)) !== null && _render !== void 0 ? _render : null;
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var renderDom = function renderDom() {
      if (light) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LightSelect.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _proUtils.compatibleBorder)(bordered)), {}, {
          id: id,
          loading: loading,
          ref: inputRef,
          allowClear: true,
          size: componentSize,
          options: options,
          label: label,
          placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择'),
          lightLabel: lightLabel,
          labelTrigger: labelTrigger,
          fetchData: _fetchData
        }, fieldProps));
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchSelect.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        className: rest.className,
        style: (0, _objectSpread2.default)({
          minWidth: 100
        }, rest.style)
      }, (0, _proUtils.compatibleBorder)(bordered)), {}, {
        id: id,
        loading: loading,
        ref: inputRef,
        allowClear: true,
        defaultSearchValue: props.defaultKeyWords,
        notFoundContent: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {
          size: "small"
        }) : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.notFoundContent,
        fetchData: function fetchData(keyWord) {
          keyWordsRef.current = keyWord !== null && keyWord !== void 0 ? keyWord : '';
          _fetchData(keyWord);
        },
        resetData: resetData,
        preserveOriginalLabel: true,
        optionItemRender: function optionItemRender(item) {
          if (typeof item.label === 'string' && keyWordsRef.current) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(Highlight, {
              label: item.label,
              words: [keyWordsRef.current]
            });
          }
          return item.label;
        },
        placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择'),
        label: label
      }, fieldProps), {}, {
        options: options
      }), "SearchSelect");
    };
    var _dom = renderDom();
    if (renderFormItem) {
      var _renderFormItem;
      return (_renderFormItem = renderFormItem(rest.text, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), {}, {
        options: options,
        loading: loading
      }), _dom)) !== null && _renderFormItem !== void 0 ? _renderFormItem : null;
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldSelect);