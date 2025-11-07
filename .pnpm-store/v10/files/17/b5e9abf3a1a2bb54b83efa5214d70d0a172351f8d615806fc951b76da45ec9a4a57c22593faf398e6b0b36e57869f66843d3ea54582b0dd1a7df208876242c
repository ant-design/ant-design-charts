"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spellNamePath = exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _proForm = require("@ant-design/pro-form");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"];
var SHOW_EMPTY_TEXT_LIST = ['', null, undefined];

/**
 * 拼接用于编辑的 key
 */
var spellNamePath = exports.spellNamePath = function spellNamePath() {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }
  return rest.filter(function (index) {
    return index !== undefined;
  }).map(function (item) {
    if (typeof item === 'number') {
      return item.toString();
    }
    return item;
  }).flat(1);
};
var CellRenderFromItem = function CellRenderFromItem(props) {
  var formContext = (0, _react.useContext)(_proForm.FieldContext);
  var columnProps = props.columnProps,
    prefixName = props.prefixName,
    text = props.text,
    counter = props.counter,
    rowData = props.rowData,
    index = props.index,
    recordKey = props.recordKey,
    subName = props.subName,
    proFieldProps = props.proFieldProps,
    editableUtils = props.editableUtils;
  var editableForm = _proForm.ProForm.useFormInstance();
  var key = recordKey || index;
  var realIndex = (0, _react.useMemo)(function () {
    var _editableUtils$getRea, _editableUtils$getRea2;
    return (_editableUtils$getRea = editableUtils === null || editableUtils === void 0 || (_editableUtils$getRea2 = editableUtils.getRealIndex) === null || _editableUtils$getRea2 === void 0 ? void 0 : _editableUtils$getRea2.call(editableUtils, rowData)) !== null && _editableUtils$getRea !== void 0 ? _editableUtils$getRea : index;
  }, [editableUtils, index, rowData]);
  var _useState = (0, _react.useState)(function () {
      var _ref, _columnProps$key;
      return spellNamePath(prefixName, prefixName ? subName : [], prefixName ? realIndex : key, (_ref = (_columnProps$key = columnProps === null || columnProps === void 0 ? void 0 : columnProps.key) !== null && _columnProps$key !== void 0 ? _columnProps$key : columnProps === null || columnProps === void 0 ? void 0 : columnProps.dataIndex) !== null && _ref !== void 0 ? _ref : index);
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    formItemName = _useState2[0],
    setName = _useState2[1];
  var rowName = (0, _react.useMemo)(function () {
    return formItemName.slice(0, -1);
  }, [formItemName]);
  (0, _react.useEffect)(function () {
    var _ref2, _columnProps$key2;
    var value = spellNamePath(prefixName, prefixName ? subName : [], prefixName ? realIndex : key, (_ref2 = (_columnProps$key2 = columnProps === null || columnProps === void 0 ? void 0 : columnProps.key) !== null && _columnProps$key2 !== void 0 ? _columnProps$key2 : columnProps === null || columnProps === void 0 ? void 0 : columnProps.dataIndex) !== null && _ref2 !== void 0 ? _ref2 : index);
    if (value.join('-') !== formItemName.join('-')) setName(value);
  }, [columnProps === null || columnProps === void 0 ? void 0 : columnProps.dataIndex, columnProps === null || columnProps === void 0 ? void 0 : columnProps.key, index, recordKey, prefixName, key, subName, formItemName, realIndex]);
  var needProps = (0, _react.useMemo)(function () {
    return [editableForm, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, columnProps), {}, {
      rowKey: rowName,
      rowIndex: index,
      isEditable: true
    })];
  }, [columnProps, editableForm, index, rowName]);
  var InlineItem = (0, _react.useCallback)(function (_ref3) {
    var children = _ref3.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref3, _excluded);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.InlineErrorFormItem, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      popoverProps: {
        getPopupContainer: formContext.getPopupContainer || function () {
          return counter.rootDomRef.current || document.body;
        }
      },
      errorType: "popover",
      name: formItemName
    }, restProps), {}, {
      children: children
    }), key);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [key, formItemName]);
  var generateFormItem = (0, _react.useCallback)(function () {
    var _ref4, _ref5;
    var formItemProps = (0, _objectSpread2.default)({}, _proUtils.getFieldPropsOrFormItemProps.apply(void 0, [columnProps === null || columnProps === void 0 ? void 0 : columnProps.formItemProps].concat((0, _toConsumableArray2.default)(needProps))));
    formItemProps.messageVariables = (0, _objectSpread2.default)({
      label: (columnProps === null || columnProps === void 0 ? void 0 : columnProps.title) || '此项',
      type: (columnProps === null || columnProps === void 0 ? void 0 : columnProps.valueType) || '文本'
    }, formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.messageVariables);
    formItemProps.initialValue = (_ref4 = (_ref5 = prefixName ? null : text) !== null && _ref5 !== void 0 ? _ref5 : formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.initialValue) !== null && _ref4 !== void 0 ? _ref4 : columnProps === null || columnProps === void 0 ? void 0 : columnProps.initialValue;
    var fieldDom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_proForm.ProFormField, (0, _objectSpread2.default)({
      cacheForSwr: true,
      name: formItemName,
      proFormFieldKey: key,
      ignoreFormItem: true,
      fieldProps: _proUtils.getFieldPropsOrFormItemProps.apply(void 0, [columnProps === null || columnProps === void 0 ? void 0 : columnProps.fieldProps].concat((0, _toConsumableArray2.default)(needProps)))
    }, proFieldProps), formItemName.join('-'));
    /**
     * 如果没有自定义直接返回
     */
    if (columnProps !== null && columnProps !== void 0 && columnProps.renderFormItem) {
      fieldDom = columnProps.renderFormItem((0, _objectSpread2.default)((0, _objectSpread2.default)({}, columnProps), {}, {
        index: index,
        isEditable: true,
        type: 'table'
      }), {
        defaultRender: function defaultRender() {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: fieldDom
          });
        },
        type: 'form',
        recordKey: recordKey,
        record: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rowData), editableForm === null || editableForm === void 0 ? void 0 : editableForm.getFieldValue([key])),
        isEditable: true
      }, editableForm, props.editableUtils);
      // 如果需要完全自定义可以不要name
      if (columnProps.ignoreFormItem) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: fieldDom
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(InlineItem, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, formItemProps), {}, {
      children: fieldDom
    }), formItemName.join('-'));
  }, [columnProps, needProps, prefixName, text, key, formItemName, proFieldProps, InlineItem, index, recordKey, rowData, editableForm, props.editableUtils]);
  if (formItemName.length === 0) return null;
  if (typeof (columnProps === null || columnProps === void 0 ? void 0 : columnProps.renderFormItem) === 'function' || typeof (columnProps === null || columnProps === void 0 ? void 0 : columnProps.fieldProps) === 'function' || typeof (columnProps === null || columnProps === void 0 ? void 0 : columnProps.formItemProps) === 'function') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
      noStyle: true,
      shouldUpdate: function shouldUpdate(pre, next) {
        if (pre === next) return false;
        var shouldName = [rowName].flat(1);
        try {
          return JSON.stringify((0, _get.default)(pre, shouldName)) !== JSON.stringify((0, _get.default)(next, shouldName));
        } catch (error) {
          return true;
        }
      },
      children: function children() {
        return generateFormItem();
      }
    });
  }
  return generateFormItem();
};

/**
 * 根据不同的类型来转化数值
 *
 * @param text
 * @param valueType
 */
function cellRenderToFromItem(config) {
  var _columnProps$dataInde, _config$recordKey;
  var text = config.text,
    valueType = config.valueType,
    rowData = config.rowData,
    columnProps = config.columnProps,
    index = config.index;

  // 如果 valueType === text ，没必要多走一次 render
  if ((!valueType || ['textarea', 'text'].includes(valueType.toString())) &&
  // valueEnum 存在说明是个select
  !(columnProps !== null && columnProps !== void 0 && columnProps.valueEnum) && config.mode === 'read') {
    // 如果是''、null、undefined 显示columnEmptyText
    return SHOW_EMPTY_TEXT_LIST.includes(text) ? config.columnEmptyText : text;
  }
  if (typeof valueType === 'function' && rowData) {
    // 防止valueType是函数,并且text是''、null、undefined跳过显式设置的columnEmptyText
    return cellRenderToFromItem((0, _objectSpread2.default)((0, _objectSpread2.default)({}, config), {}, {
      valueType: valueType(rowData, config.type) || 'text'
    }));
  }
  var columnKey = (columnProps === null || columnProps === void 0 ? void 0 : columnProps.key) || (columnProps === null || columnProps === void 0 || (_columnProps$dataInde = columnProps.dataIndex) === null || _columnProps$dataInde === void 0 ? void 0 : _columnProps$dataInde.toString());
  var dependencies = columnProps !== null && columnProps !== void 0 && columnProps.dependencies ? [config.prefixName, config.prefixName ? index === null || index === void 0 ? void 0 : index.toString() : (_config$recordKey = config.recordKey) === null || _config$recordKey === void 0 ? void 0 : _config$recordKey.toString(), columnProps === null || columnProps === void 0 ? void 0 : columnProps.dependencies].filter(Boolean).flat(1) : [];
  /**
   * 生成公用的 proField dom 配置
   */
  var proFieldProps = {
    valueEnum: (0, _proUtils.runFunction)(columnProps === null || columnProps === void 0 ? void 0 : columnProps.valueEnum, rowData),
    request: columnProps === null || columnProps === void 0 ? void 0 : columnProps.request,
    dependencies: columnProps !== null && columnProps !== void 0 && columnProps.dependencies ? [dependencies] : undefined,
    originDependencies: columnProps !== null && columnProps !== void 0 && columnProps.dependencies ? [columnProps === null || columnProps === void 0 ? void 0 : columnProps.dependencies] : undefined,
    params: (0, _proUtils.runFunction)(columnProps === null || columnProps === void 0 ? void 0 : columnProps.params, rowData, columnProps),
    readonly: columnProps === null || columnProps === void 0 ? void 0 : columnProps.readonly,
    text: valueType === 'index' || valueType === 'indexBorder' ? config.index : text,
    mode: config.mode,
    renderFormItem: undefined,
    valueType: valueType,
    // @ts-ignore
    record: rowData,
    proFieldProps: {
      emptyText: config.columnEmptyText,
      proFieldKey: columnKey ? "table-field-".concat(columnKey) : undefined
    }
  };

  /** 只读模式直接返回就好了，不需要处理 formItem */
  if (config.mode !== 'edit') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proForm.ProFormField, (0, _objectSpread2.default)({
      mode: "read",
      ignoreFormItem: true,
      fieldProps: (0, _proUtils.getFieldPropsOrFormItemProps)(columnProps === null || columnProps === void 0 ? void 0 : columnProps.fieldProps, null, columnProps)
    }, proFieldProps));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CellRenderFromItem, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, config), {}, {
    proFieldProps: proFieldProps
  }), config.recordKey);
}
var _default = exports.default = cellRenderToFromItem;