"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columnRender = columnRender;
exports.renderColumnsTitle = exports.defaultOnFilter = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proUtils = require("@ant-design/pro-utils");
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
var _cellRenderToFromItem = _interopRequireDefault(require("./cellRenderToFromItem"));
var _jsxRuntime = require("react/jsx-runtime");
/** 转化列的定义 */

/**
 * 增加了 icon 的功能 render title
 *
 * @param item
 */
var renderColumnsTitle = exports.renderColumnsTitle = function renderColumnsTitle(item) {
  var _item$ellipsis;
  var title = item.title;
  var ellipsis = typeof (item === null || item === void 0 ? void 0 : item.ellipsis) === 'boolean' ? item === null || item === void 0 ? void 0 : item.ellipsis : item === null || item === void 0 || (_item$ellipsis = item.ellipsis) === null || _item$ellipsis === void 0 ? void 0 : _item$ellipsis.showTitle;
  if (title && typeof title === 'function') {
    return title(item, 'table', /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.LabelIconTip, {
      label: null,
      tooltip: item.tooltip || item.tip
    }));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.LabelIconTip, {
    label: title,
    tooltip: item.tooltip || item.tip,
    ellipsis: ellipsis
  });
};

/** 判断是否为不可编辑的单元格 */
function isNotEditableCell(text, rowData, index, editable) {
  if (typeof editable === 'boolean') {
    return editable === false;
  }
  return (editable === null || editable === void 0 ? void 0 : editable(text, rowData, index)) === false;
}

/**
 * 默认的 filter 方法
 *
 * @param value
 * @param record
 * @param dataIndex
 * @returns
 */
var defaultOnFilter = exports.defaultOnFilter = function defaultOnFilter(value, record, dataIndex) {
  var recordElement = Array.isArray(dataIndex) ? (0, _get.default)(record, dataIndex) : record[dataIndex];
  var itemValue = String(recordElement);
  return String(itemValue) === String(value);
};

/**
 * 这个组件负责单元格的具体渲染
 *
 * @param param0
 */
function columnRender(_ref) {
  var columnProps = _ref.columnProps,
    text = _ref.text,
    rowData = _ref.rowData,
    index = _ref.index,
    columnEmptyText = _ref.columnEmptyText,
    counter = _ref.counter,
    type = _ref.type,
    subName = _ref.subName,
    marginSM = _ref.marginSM,
    editableUtils = _ref.editableUtils;
  var action = counter.action,
    prefixName = counter.prefixName;
  var _editableUtils$isEdit = editableUtils.isEditable((0, _objectSpread2.default)((0, _objectSpread2.default)({}, rowData), {}, {
      index: index
    })),
    isEditable = _editableUtils$isEdit.isEditable,
    recordKey = _editableUtils$isEdit.recordKey;
  var _columnProps$renderTe = columnProps.renderText,
    renderText = _columnProps$renderTe === void 0 ? function (val) {
      return val;
    } : _columnProps$renderTe;
  var renderTextStr = renderText(text, rowData, index, action);
  var mode = isEditable && !isNotEditableCell(text, rowData, index, columnProps === null || columnProps === void 0 ? void 0 : columnProps.editable) ? 'edit' : 'read';
  var textDom = (0, _cellRenderToFromItem.default)({
    text: renderTextStr,
    valueType: columnProps.valueType || 'text',
    index: index,
    rowData: rowData,
    subName: subName,
    columnProps: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, columnProps), {}, {
      // 为了兼容性，原来写了个错别字
      // @ts-ignore
      entry: rowData,
      entity: rowData
    }),
    counter: counter,
    columnEmptyText: columnEmptyText,
    type: type,
    recordKey: recordKey,
    mode: mode,
    prefixName: prefixName,
    editableUtils: editableUtils
  });
  var dom = mode === 'edit' ? textDom : (0, _proUtils.genCopyable)(textDom, columnProps, renderTextStr);

  /** 如果是编辑模式，并且 renderFormItem 存在直接走 renderFormItem */
  if (mode === 'edit') {
    if (columnProps.valueType === 'option') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: marginSM,
          justifyContent: columnProps.align === 'center' ? 'center' : 'flex-start'
        },
        children: editableUtils.actionRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, rowData), {}, {
          index: columnProps.index || index
        }))
      });
    }
    return dom;
  }
  if (!columnProps.render) {
    var isReactRenderNode = /*#__PURE__*/_react.default.isValidElement(dom) || ['string', 'number'].includes((0, _typeof2.default)(dom));
    return !(0, _proUtils.isNil)(dom) && isReactRenderNode ? dom : null;
  }
  var renderDom = columnProps.render(dom, rowData, index, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, action), editableUtils), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, columnProps), {}, {
    isEditable: isEditable,
    type: 'table'
  }));

  // 如果是合并单元格的，直接返回对象
  if ((0, _.isMergeCell)(renderDom)) {
    return renderDom;
  }
  if (renderDom && columnProps.valueType === 'option' && Array.isArray(renderDom)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8
      },
      children: renderDom
    });
  }
  return renderDom;
}