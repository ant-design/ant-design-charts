import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
/* eslint-disable react-hooks/exhaustive-deps */
import { useIntl } from '@ant-design/pro-provider';
import { message } from 'antd';
import { get } from 'rc-util';
import useMergedState from "rc-util/es/hooks/useMergedState";
import { useCallback, useMemo, useRef } from 'react';
import { defaultActionRender, recordKeyToString } from "../useEditableArray";

/**
 * 兼容antd@4 和 antd@5 的warning
 * @param messageStr
 */
var warning = function warning(messageStr) {
  // @ts-ignore
  return (message.warn || message.warning)(messageStr);
};
/**
 * 使用map 来删除数据，性能一般 但是准确率比较高
 *
 * @param params
 * @param action
 */
function editableRowByKey(_ref) {
  var data = _ref.data,
    row = _ref.row;
  return _objectSpread(_objectSpread({}, data), row);
}
/**
 * 一个方便的hooks 用于维护编辑的状态
 *
 * @param props
 */
export function useEditableMap(props) {
  /**
   * 点击开始编辑之前的保存数据用的
   */
  var preEditRowRef = useRef(null);
  var editableType = props.type || 'single';

  // Internationalization
  var intl = useIntl();
  var _useMergedState = useMergedState([], {
      value: props.editableKeys,
      onChange: props.onChange ? function (keys) {
        var _props$onChange;
        props === null || props === void 0 || (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props,
        // 计算编辑的key
        keys, props.dataSource);
      } : undefined
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    editableKeys = _useMergedState2[0],
    setEditableRowKeys = _useMergedState2[1];
  /** 一个用来标志的set 提供了方便的 api 来去重什么的 */
  var editableKeysSet = useMemo(function () {
    var keys = editableType === 'single' ? editableKeys === null || editableKeys === void 0 ? void 0 : editableKeys.slice(0, 1) : editableKeys;
    return new Set(keys);
  }, [(editableKeys || []).join(','), editableType]);

  /** 这行是不是编辑状态 */
  var isEditable = useCallback(function (recordKey) {
    if (editableKeys !== null && editableKeys !== void 0 && editableKeys.includes(recordKeyToString(recordKey))) return true;
    return false;
  }, [(editableKeys || []).join(',')]);

  /**
   * 进入编辑状态
   *
   * @param recordKey
   */
  var startEditable = function startEditable(recordKey, recordValue) {
    var _ref2;
    // 如果是单行的话，不允许多行编辑
    if (editableKeysSet.size > 0 && editableType === 'single') {
      warning(props.onlyOneLineEditorAlertMessage || intl.getMessage('editableTable.onlyOneLineEditor', '只能同时编辑一行'));
      return false;
    }
    preEditRowRef.current = (_ref2 = recordValue !== null && recordValue !== void 0 ? recordValue : get(props.dataSource, Array.isArray(recordKey) ? recordKey : [recordKey])) !== null && _ref2 !== void 0 ? _ref2 : null;
    editableKeysSet.add(recordKeyToString(recordKey));
    setEditableRowKeys(Array.from(editableKeysSet));
    return true;
  };

  /**
   * 退出编辑状态
   *
   * @param recordKey
   */
  var cancelEditable = function cancelEditable(recordKey) {
    // 防止多次渲染
    editableKeysSet.delete(recordKeyToString(recordKey));
    setEditableRowKeys(Array.from(editableKeysSet));
    return true;
  };
  var onCancel = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(recordKey, editRow, originRow, newLine) {
      var _props$onCancel;
      var success;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return props === null || props === void 0 || (_props$onCancel = props.onCancel) === null || _props$onCancel === void 0 ? void 0 : _props$onCancel.call(props, recordKey, editRow, originRow, newLine);
          case 2:
            success = _context.sent;
            if (!(success === false)) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", false);
          case 5:
            return _context.abrupt("return", true);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onCancel(_x, _x2, _x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  var onSave = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(recordKey, editRow, originRow) {
      var _props$onSave;
      var success, actionProps;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return props === null || props === void 0 || (_props$onSave = props.onSave) === null || _props$onSave === void 0 ? void 0 : _props$onSave.call(props, recordKey, editRow, originRow);
          case 2:
            success = _context2.sent;
            if (!(success === false)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", false);
          case 5:
            _context2.next = 7;
            return cancelEditable(recordKey);
          case 7:
            actionProps = {
              data: props.dataSource,
              row: editRow,
              key: recordKey,
              childrenColumnName: props.childrenColumnName || 'children'
            };
            props.setDataSource(editableRowByKey(actionProps));
            return _context2.abrupt("return", true);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function onSave(_x5, _x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }();
  var saveText = intl.getMessage('editableTable.action.save', '保存');
  var deleteText = intl.getMessage('editableTable.action.delete', '删除');
  var cancelText = intl.getMessage('editableTable.action.cancel', '取消');
  var actionRender = useCallback(function (key, config) {
    var renderConfig = _objectSpread({
      recordKey: key,
      cancelEditable: cancelEditable,
      onCancel: onCancel,
      onSave: onSave,
      editableKeys: editableKeys,
      setEditableRowKeys: setEditableRowKeys,
      saveText: saveText,
      cancelText: cancelText,
      preEditRowRef: preEditRowRef,
      deleteText: deleteText,
      deletePopconfirmMessage: "".concat(intl.getMessage('deleteThisLine', '删除此项'), "?"),
      editorType: 'Map'
    }, config);
    var renderResult = defaultActionRender(props.dataSource, renderConfig);
    if (props.actionRender) {
      return props.actionRender(props.dataSource, renderConfig, {
        save: renderResult.save,
        delete: renderResult.delete,
        cancel: renderResult.cancel
      });
    }
    return [renderResult.save, renderResult.delete, renderResult.cancel];
  }, [editableKeys && editableKeys.join(','), props.dataSource]);
  return {
    editableKeys: editableKeys,
    setEditableRowKeys: setEditableRowKeys,
    isEditable: isEditable,
    actionRender: actionRender,
    startEditable: startEditable,
    cancelEditable: cancelEditable
  };
}