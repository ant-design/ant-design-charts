"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _icons = require("@ant-design/icons");
var _proForm = _interopRequireWildcard(require("@ant-design/pro-form"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _set = _interopRequireDefault(require("rc-util/lib/utils/set"));
var _react = _interopRequireWildcard(require("react"));
var _Table = _interopRequireDefault(require("../../Table"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["onTableChange", "maxLength", "formItemProps", "recordCreatorProps", "rowKey", "controlled", "defaultValue", "onChange", "editableFormRef"],
  _excluded2 = ["record", "position", "creatorButtonText", "newRecordType", "parentKey", "style"];
var EditableTableActionContext = /*#__PURE__*/_react.default.createContext(undefined);

/** 可编辑表格的按钮 */
function RecordCreator(props) {
  var children = props.children,
    record = props.record,
    position = props.position,
    newRecordType = props.newRecordType,
    parentKey = props.parentKey;
  var actionRef = (0, _react.useContext)(EditableTableActionContext);
  return /*#__PURE__*/_react.default.cloneElement(children, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, children.props), {}, {
    onClick: function () {
      var _onClick = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(e) {
        var _children$props$onCli, _children$props, _actionRef$current;
        var isOk;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (_children$props$onCli = (_children$props = children.props).onClick) === null || _children$props$onCli === void 0 ? void 0 : _children$props$onCli.call(_children$props, e);
            case 2:
              isOk = _context.sent;
              if (!(isOk === false)) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              actionRef === null || actionRef === void 0 || (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 || _actionRef$current.addEditRecord(record, {
                position: position,
                newRecordType: newRecordType,
                parentKey: parentKey
              });
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function onClick(_x) {
        return _onClick.apply(this, arguments);
      }
      return onClick;
    }()
  }));
}

/**
 * 可以直接放到 Form 中的可编辑表格
 * A React component that is used to create a table.
 * @param props
 */
function EditableTable(props) {
  var _props$editable2, _props$editable4;
  var intl = (0, _proProvider.useIntl)();
  var onTableChange = props.onTableChange,
    maxLength = props.maxLength,
    formItemProps = props.formItemProps,
    recordCreatorProps = props.recordCreatorProps,
    rowKey = props.rowKey,
    controlled = props.controlled,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    editableFormRef = props.editableFormRef,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var preData = (0, _react.useRef)(undefined);
  var actionRef = (0, _react.useRef)();
  var formRef = (0, _react.useRef)();

  // 设置 ref
  (0, _react.useImperativeHandle)(rest.actionRef, function () {
    return actionRef.current;
  }, [actionRef.current]);
  var _useMergedState = (0, _useMergedState3.default)(function () {
      return props.value || defaultValue || [];
    }, {
      value: props.value,
      onChange: props.onChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var getRowKey = _react.default.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }
    return function (record, index) {
      return record[rowKey] || index;
    };
  }, [rowKey]);

  /**
   * 根据不同的情况返回不同的 rowKey
   * @param finlayRowKey
   * @returns string | number
   */
  var coverRowKey = (0, _proUtils.useRefFunction)(function (finlayRowKey) {
    /**
     * 如果是 prop.name 的模式，就需要把行号转化成具体的rowKey。
     */
    if (typeof finlayRowKey === 'number' && !props.name) {
      if (finlayRowKey >= value.length) return finlayRowKey;
      var rowData = value && value[finlayRowKey];
      return getRowKey === null || getRowKey === void 0 ? void 0 : getRowKey(rowData, finlayRowKey);
    }

    /**
     * 如果是 prop.name 的模式，就直接返回行号
     */
    if ((typeof finlayRowKey === 'string' || finlayRowKey >= value.length) && props.name) {
      var _rowIndex = value.findIndex(function (item, index) {
        var _getRowKey;
        return (getRowKey === null || getRowKey === void 0 || (_getRowKey = getRowKey(item, index)) === null || _getRowKey === void 0 ? void 0 : _getRowKey.toString()) === (finlayRowKey === null || finlayRowKey === void 0 ? void 0 : finlayRowKey.toString());
      });
      if (_rowIndex !== -1) return _rowIndex;
    }
    return finlayRowKey;
  });

  // 设置 editableFormRef
  (0, _react.useImperativeHandle)(editableFormRef, function () {
    /**
     * 获取一行数据的
     * @param rowIndex
     * @returns T | undefined
     */
    var getRowData = function getRowData(rowIndex) {
      var _finlayRowKey$toStrin, _formRef$current;
      if (rowIndex == undefined) {
        throw new Error('rowIndex is required');
      }
      var finlayRowKey = coverRowKey(rowIndex);
      var rowKeyName = [props.name, (_finlayRowKey$toStrin = finlayRowKey === null || finlayRowKey === void 0 ? void 0 : finlayRowKey.toString()) !== null && _finlayRowKey$toStrin !== void 0 ? _finlayRowKey$toStrin : ''].flat(1).filter(Boolean);
      return (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.getFieldValue(rowKeyName);
    };

    /**
     * 获取整个 table 的数据
     * @returns T[] | undefined
     */
    var getRowsData = function getRowsData() {
      var _formRef$current3;
      var rowKeyName = [props.name].flat(1).filter(Boolean);
      if (Array.isArray(rowKeyName) && rowKeyName.length === 0) {
        var _formRef$current2;
        var rowData = (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 ? void 0 : _formRef$current2.getFieldsValue();
        if (Array.isArray(rowData)) return rowData;
        return Object.keys(rowData).map(function (key) {
          return rowData[key];
        });
      }
      return (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 ? void 0 : _formRef$current3.getFieldValue(rowKeyName);
    };
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, formRef.current), {}, {
      getRowData: getRowData,
      getRowsData: getRowsData,
      /**
       * 设置一行的数据，会将数据进行简单的 merge
       * @param rowIndex
       * @param data
       * @returns void
       */
      setRowData: function setRowData(rowIndex, data) {
        var _finlayRowKey$toStrin2, _formRef$current4;
        if (rowIndex == undefined) {
          throw new Error('rowIndex is required');
        }
        var finlayRowKey = coverRowKey(rowIndex);
        var rowKeyName = [props.name, (_finlayRowKey$toStrin2 = finlayRowKey === null || finlayRowKey === void 0 ? void 0 : finlayRowKey.toString()) !== null && _finlayRowKey$toStrin2 !== void 0 ? _finlayRowKey$toStrin2 : ''].flat(1).filter(Boolean);
        var newRowData = Object.assign({}, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, getRowData(rowIndex)), data || {}));
        var updateValues = (0, _set.default)({}, rowKeyName, newRowData);
        (_formRef$current4 = formRef.current) === null || _formRef$current4 === void 0 || _formRef$current4.setFieldsValue(updateValues);
        return true;
      }
    });
  }, [coverRowKey, props.name, formRef.current]);
  (0, _react.useEffect)(function () {
    if (!props.controlled) return;
    (value || []).forEach(function (current, index) {
      var _formRef$current5;
      (_formRef$current5 = formRef.current) === null || _formRef$current5 === void 0 || _formRef$current5.setFieldsValue((0, _defineProperty2.default)({}, "".concat(getRowKey(current, index)), current));
    }, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(0, _proUtils.stringify)(value), props.controlled]);
  (0, _react.useEffect)(function () {
    if (props.name) {
      var _props$editable;
      formRef.current = props === null || props === void 0 || (_props$editable = props.editable) === null || _props$editable === void 0 ? void 0 : _props$editable.form;
    }
  }, [(_props$editable2 = props.editable) === null || _props$editable2 === void 0 ? void 0 : _props$editable2.form, props.name]);
  var _ref = recordCreatorProps || {},
    record = _ref.record,
    position = _ref.position,
    creatorButtonText = _ref.creatorButtonText,
    newRecordType = _ref.newRecordType,
    parentKey = _ref.parentKey,
    style = _ref.style,
    restButtonProps = (0, _objectWithoutProperties2.default)(_ref, _excluded2);
  var isTop = position === 'top';
  var creatorButtonDom = (0, _react.useMemo)(function () {
    if (typeof maxLength === 'number' && maxLength <= (value === null || value === void 0 ? void 0 : value.length)) {
      return false;
    }
    return recordCreatorProps !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)(RecordCreator, {
      record: (0, _proUtils.runFunction)(record, value === null || value === void 0 ? void 0 : value.length, value) || {},
      position: position,
      parentKey: (0, _proUtils.runFunction)(parentKey, value === null || value === void 0 ? void 0 : value.length, value),
      newRecordType: newRecordType,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        type: "dashed",
        style: (0, _objectSpread2.default)({
          display: 'block',
          margin: '10px 0',
          width: '100%'
        }, style),
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.PlusOutlined, {})
      }, restButtonProps), {}, {
        children: creatorButtonText || intl.getMessage('editableTable.action.add', '添加一行数据')
      }))
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordCreatorProps, maxLength, value === null || value === void 0 ? void 0 : value.length]);
  var buttonRenderProps = (0, _react.useMemo)(function () {
    if (!creatorButtonDom) {
      return {};
    }
    if (isTop) {
      return {
        components: {
          header: {
            wrapper: function wrapper(_ref2) {
              var _rest$columns;
              var className = _ref2.className,
                children = _ref2.children;
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("thead", {
                className: className,
                children: [children, /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                  style: {
                    position: 'relative'
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                    colSpan: 0,
                    style: {
                      visibility: 'hidden'
                    },
                    children: creatorButtonDom
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                    style: {
                      position: 'absolute',
                      left: 0,
                      width: '100%'
                    },
                    colSpan: (_rest$columns = rest.columns) === null || _rest$columns === void 0 ? void 0 : _rest$columns.length,
                    children: creatorButtonDom
                  })]
                })]
              });
            }
          }
        }
      };
    }
    return {
      tableViewRender: function tableViewRender(_, dom) {
        var _props$tableViewRende, _props$tableViewRende2;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [(_props$tableViewRende = (_props$tableViewRende2 = props.tableViewRender) === null || _props$tableViewRende2 === void 0 ? void 0 : _props$tableViewRende2.call(props, _, dom)) !== null && _props$tableViewRende !== void 0 ? _props$tableViewRende : dom, creatorButtonDom]
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTop, creatorButtonDom]);
  var editableProps = (0, _objectSpread2.default)({}, props.editable);

  /**
   * 防止闭包的onchange
   *
   * >>>>>>为了性能好辛苦
   */
  var newOnValueChange = (0, _proUtils.useRefFunction)(function (r, dataSource) {
    var _props$editable3, _props$editable3$onVa, _props$onValuesChange;
    (_props$editable3 = props.editable) === null || _props$editable3 === void 0 || (_props$editable3$onVa = _props$editable3.onValuesChange) === null || _props$editable3$onVa === void 0 || _props$editable3$onVa.call(_props$editable3, r, dataSource);
    (_props$onValuesChange = props.onValuesChange) === null || _props$onValuesChange === void 0 || _props$onValuesChange.call(props, dataSource, r);
    if (props.controlled) {
      var _props$onChange;
      props === null || props === void 0 || (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, dataSource);
    }
  });
  if (props !== null && props !== void 0 && props.onValuesChange || (_props$editable4 = props.editable) !== null && _props$editable4 !== void 0 && _props$editable4.onValuesChange ||
  // 受控模式需要触发 onchange
  props.controlled && props !== null && props !== void 0 && props.onChange) {
    editableProps.onValuesChange = newOnValueChange;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(EditableTableActionContext.Provider, {
      value: actionRef,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        search: false,
        options: false,
        pagination: false,
        rowKey: rowKey,
        revalidateOnFocus: false
      }, rest), buttonRenderProps), {}, {
        tableLayout: "fixed",
        actionRef: actionRef,
        onChange: onTableChange,
        editable: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, editableProps), {}, {
          formProps: (0, _objectSpread2.default)({
            formRef: formRef
          }, editableProps.formProps)
        }),
        dataSource: value,
        onDataSourceChange: function onDataSourceChange(dataSource) {
          setValue(dataSource);
          /**
           * 如果是top，需要重新设置一下 form，不然会导致 id 相同数据混淆
           */
          if (props.name && position === 'top') {
            var _formRef$current6;
            var newValue = (0, _set.default)({}, [props.name].flat(1).filter(Boolean), dataSource);
            (_formRef$current6 = formRef.current) === null || _formRef$current6 === void 0 || _formRef$current6.setFieldsValue(newValue);
          }
        }
      }))
    }), props.name ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_proForm.ProFormDependency, {
      name: [props.name],
      children: function children(changeValue) {
        var _props$editable5, _props$editable5$onVa;
        if (!preData.current) {
          preData.current = value;
          return null;
        }
        var list = (0, _get.default)(changeValue, [props.name].flat(1));
        var changeItem = list === null || list === void 0 ? void 0 : list.find(function (item, index) {
          var _preData$current;
          return !(0, _proUtils.isDeepEqualReact)(item, (_preData$current = preData.current) === null || _preData$current === void 0 ? void 0 : _preData$current[index]);
        });
        preData.current = value;
        if (!changeItem) return null;
        // 如果不存在 preData 说明是初始化，此时不需要触发 onValuesChange
        props === null || props === void 0 || (_props$editable5 = props.editable) === null || _props$editable5 === void 0 || (_props$editable5$onVa = _props$editable5.onValuesChange) === null || _props$editable5$onVa === void 0 || _props$editable5$onVa.call(_props$editable5, changeItem, list);
        return null;
      }
    }) : null]
  });
}

/**
 * 可以直接放到 Form 中的可编辑表格
 * A React component that is used to create a table.
 * @param props
 */
function FieldEditableTable(props) {
  var form = _proForm.default.useFormInstance();
  if (!props.name) return /*#__PURE__*/(0, _jsxRuntime.jsx)(EditableTable, (0, _objectSpread2.default)({
    tableLayout: "fixed",
    scroll: {
      x: 'max-content'
    }
  }, props));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    style: {
      maxWidth: '100%'
    },
    shouldUpdate: function shouldUpdate(prev, next) {
      var name = [props.name].flat(1);
      try {
        return JSON.stringify((0, _get.default)(prev, name)) !== JSON.stringify((0, _get.default)(next, name));
      } catch (error) {
        return true;
      }
    }
  }, props === null || props === void 0 ? void 0 : props.formItemProps), {}, {
    name: props.name,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(EditableTable, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      tableLayout: "fixed",
      scroll: {
        x: 'max-content'
      }
    }, props), {}, {
      editable: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props.editable), {}, {
        form: form
      })
    }))
  }));
}
FieldEditableTable.RecordCreator = RecordCreator;
var _default = exports.default = FieldEditableTable;