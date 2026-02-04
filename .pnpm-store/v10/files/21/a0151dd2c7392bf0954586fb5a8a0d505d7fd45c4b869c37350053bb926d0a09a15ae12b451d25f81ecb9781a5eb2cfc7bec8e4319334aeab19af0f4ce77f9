"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["optionItemRender", "mode", "onSearch", "onFocus", "onChange", "autoClearSearchValue", "searchOnFocus", "resetAfterSelect", "fetchDataOnSearch", "optionFilterProp", "optionLabelProp", "className", "disabled", "options", "fetchData", "resetData", "prefixCls", "onClear", "searchValue", "showSearch", "fieldNames", "defaultSearchValue", "preserveOriginalLabel"],
  _excluded2 = ["className", "optionType"]; // 支持 key, value, label，兼容 UserSearch 中只填写了 key 的情况。
/** 用户扩展数据后的值类型 */
/** 可能单选，可能多选 */
var SearchSelect = function SearchSelect(props, ref) {
  var optionItemRender = props.optionItemRender,
    mode = props.mode,
    onSearch = props.onSearch,
    _onFocus = props.onFocus,
    _onChange = props.onChange,
    _props$autoClearSearc = props.autoClearSearchValue,
    autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
    _props$searchOnFocus = props.searchOnFocus,
    searchOnFocus = _props$searchOnFocus === void 0 ? false : _props$searchOnFocus,
    _props$resetAfterSele = props.resetAfterSelect,
    resetAfterSelect = _props$resetAfterSele === void 0 ? false : _props$resetAfterSele,
    _props$fetchDataOnSea = props.fetchDataOnSearch,
    fetchDataOnSearch = _props$fetchDataOnSea === void 0 ? true : _props$fetchDataOnSea,
    _props$optionFilterPr = props.optionFilterProp,
    optionFilterProp = _props$optionFilterPr === void 0 ? 'label' : _props$optionFilterPr,
    _props$optionLabelPro = props.optionLabelProp,
    optionLabelProp = _props$optionLabelPro === void 0 ? 'label' : _props$optionLabelPro,
    className = props.className,
    disabled = props.disabled,
    options = props.options,
    fetchData = props.fetchData,
    resetData = props.resetData,
    customizePrefixCls = props.prefixCls,
    _onClear = props.onClear,
    propsSearchValue = props.searchValue,
    showSearch = props.showSearch,
    fieldNames = props.fieldNames,
    defaultSearchValue = props.defaultSearchValue,
    _props$preserveOrigin = props.preserveOriginalLabel,
    preserveOriginalLabel = _props$preserveOrigin === void 0 ? false : _props$preserveOrigin,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _ref = fieldNames || {},
    _ref$label = _ref.label,
    labelPropsName = _ref$label === void 0 ? 'label' : _ref$label,
    _ref$value = _ref.value,
    valuePropsName = _ref$value === void 0 ? 'value' : _ref$value,
    _ref$options = _ref.options,
    optionsPropsName = _ref$options === void 0 ? 'options' : _ref$options;
  var _useState = (0, _react.useState)(propsSearchValue !== null && propsSearchValue !== void 0 ? propsSearchValue : defaultSearchValue),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var selectRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return selectRef.current;
  });
  (0, _react.useEffect)(function () {
    if (restProps.autoFocus) {
      var _selectRef$current;
      selectRef === null || selectRef === void 0 || (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 || _selectRef$current.focus();
    }
  }, [restProps.autoFocus]);
  (0, _react.useEffect)(function () {
    setSearchValue(propsSearchValue);
  }, [propsSearchValue]);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-filed-search-select', customizePrefixCls);

  // 兼容 renderXXX API。

  var classString = (0, _classnames.default)(prefixCls, className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled));
  var getMergeValue = function getMergeValue(value, option) {
    if (Array.isArray(value) && Array.isArray(option) && value.length > 0) {
      // 多选情况且用户有选择

      return value.map(function (item, index) {
        var optionItem = option === null || option === void 0 ? void 0 : option[index];
        var dataItem = optionItem === null || optionItem === void 0 ? void 0 : optionItem['data-item'];
        return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, dataItem || {}), item), {}, {
          label: preserveOriginalLabel && dataItem ? dataItem.label : item.label
        });
      });
    }
    return [];
  };
  var genOptions = function genOptions(mapOptions) {
    return mapOptions.map(function (item, index) {
      var _item$optionsPropsNam;
      var _ref2 = item,
        itemClassName = _ref2.className,
        optionType = _ref2.optionType,
        resetItem = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
      var label = item[labelPropsName];
      var value = item[valuePropsName];
      var itemOptions = (_item$optionsPropsNam = item[optionsPropsName]) !== null && _item$optionsPropsNam !== void 0 ? _item$optionsPropsNam : [];
      if (optionType === 'optGroup' || item.options) {
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({
          label: label
        }, resetItem), {}, {
          data_title: label,
          title: label,
          key: value !== null && value !== void 0 ? value : "".concat(label === null || label === void 0 ? void 0 : label.toString(), "-").concat(index, "-").concat((0, _proUtils.nanoid)()),
          // 防止因key相同导致虚拟滚动出问题
          children: genOptions(itemOptions)
        });
      }
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({
        title: label
      }, resetItem), {}, {
        data_title: label,
        value: value !== null && value !== void 0 ? value : index,
        key: value !== null && value !== void 0 ? value : "".concat(label === null || label === void 0 ? void 0 : label.toString(), "-").concat(index, "-").concat((0, _proUtils.nanoid)()),
        'data-item': item,
        className: "".concat(prefixCls, "-option ").concat(itemClassName || '').trim(),
        label: (optionItemRender === null || optionItemRender === void 0 ? void 0 : optionItemRender(item)) || label
      });
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Select, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    ref: selectRef,
    className: classString,
    allowClear: true,
    autoClearSearchValue: autoClearSearchValue,
    disabled: disabled,
    mode: mode,
    showSearch: showSearch,
    searchValue: searchValue,
    optionFilterProp: optionFilterProp,
    optionLabelProp: optionLabelProp,
    onClear: function onClear() {
      _onClear === null || _onClear === void 0 || _onClear();
      fetchData(undefined);
      if (showSearch) {
        setSearchValue(undefined);
      }
    }
  }, restProps), {}, {
    filterOption: restProps.filterOption == false ? false : function (inputValue, option) {
      var _option$data_title, _option$optionFilterP;
      if (restProps.filterOption && typeof restProps.filterOption === 'function') {
        return restProps.filterOption(inputValue, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, option), {}, {
          label: option === null || option === void 0 ? void 0 : option.data_title
        }));
      }
      return !!(option !== null && option !== void 0 && (_option$data_title = option.data_title) !== null && _option$data_title !== void 0 && _option$data_title.toString().toLowerCase().includes(inputValue.toLowerCase()) || option !== null && option !== void 0 && (_option$optionFilterP = option[optionFilterProp]) !== null && _option$optionFilterP !== void 0 && _option$optionFilterP.toString().toLowerCase().includes(inputValue.toLowerCase()));
    } // 这里使用pro-components的过滤逻辑
    ,
    onSearch: showSearch ? function (value) {
      if (fetchDataOnSearch) {
        fetchData(value);
      }
      onSearch === null || onSearch === void 0 || onSearch(value);
      setSearchValue(value);
    } : undefined,
    onChange: function onChange(value, optionList) {
      // 将搜索框置空 和 antd 行为保持一致
      if (showSearch && autoClearSearchValue) {
        fetchData(undefined);
        onSearch === null || onSearch === void 0 || onSearch('');
        setSearchValue(undefined);
      }
      for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        rest[_key - 2] = arguments[_key];
      }
      if (!props.labelInValue) {
        _onChange === null || _onChange === void 0 || _onChange.apply(void 0, [value, optionList].concat(rest));
        return;
      }
      if (mode !== 'multiple' && !Array.isArray(optionList)) {
        // 单选情况且用户选择了选项
        var dataItem = optionList && optionList['data-item'];
        // 如果value值为空则是清空时产生的回调,直接传值就可以了
        if (!value || !dataItem) {
          var changedValue = value ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, value), {}, {
            // 这里有一种情况，如果用户使用了 request和labelInValue，保存之后，刷新页面，正常回显，但是再次添加会出现 label 丢失的情况。所以需要兼容
            label: preserveOriginalLabel && dataItem ? (dataItem === null || dataItem === void 0 ? void 0 : dataItem.label) || value.label : value.label
          }) : value;
          _onChange === null || _onChange === void 0 || _onChange.apply(void 0, [changedValue, optionList].concat(rest));
        } else {
          _onChange === null || _onChange === void 0 || _onChange.apply(void 0, [(0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, value), dataItem), {}, {
            label: preserveOriginalLabel && dataItem ? dataItem.label : value.label
          }), optionList].concat(rest));
        }
        return;
      }
      // 合并值
      var mergeValue = getMergeValue(value, optionList);
      _onChange === null || _onChange === void 0 || _onChange.apply(void 0, [mergeValue, optionList].concat(rest));

      // 将搜索结果置空，重新搜索
      if (resetAfterSelect) resetData();
    },
    onFocus: function onFocus(e) {
      if (searchOnFocus) {
        fetchData(searchValue);
      }
      _onFocus === null || _onFocus === void 0 || _onFocus(e);
    },
    options: genOptions(options || [])
  }));
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(SearchSelect);