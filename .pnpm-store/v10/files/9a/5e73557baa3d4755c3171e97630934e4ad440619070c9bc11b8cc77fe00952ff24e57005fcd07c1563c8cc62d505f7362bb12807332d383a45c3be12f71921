import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _toArray from "@babel/runtime/helpers/esm/toArray";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
var _excluded = ["map_row_parentKey"],
  _excluded2 = ["map_row_parentKey", "map_row_key"],
  _excluded3 = ["map_row_key"];
/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { Form, Popconfirm, message } from 'antd';
import useLazyKVMap from "antd/es/table/hooks/useLazyKVMap";
import useMergedState from "rc-util/es/hooks/useMergedState";
import get from "rc-util/es/utils/get";
import set from "rc-util/es/utils/set";
import { noteOnce } from "rc-util/es/warning";
import React, { createRef, forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useDebounceFn, useRefFunction } from '..';
import { ProFormContext } from "../components/ProFormContext";
import { useDeepCompareEffectDebounce } from "../hooks/useDeepCompareEffect";
import { usePrevious } from "../hooks/usePrevious";
import { merge } from "../merge";
import { useMountMergeState } from "../useMountMergeState";

/**
 * 兼容antd@4 和 antd@5 的warning
 * @param messageStr
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var warning = function warning(messageStr) {
  // @ts-ignore
  return (message.warn || message.warning)(messageStr);
};
export var recordKeyToString = function recordKeyToString(rowKey) {
  if (Array.isArray(rowKey)) return rowKey.join(',');
  return rowKey;
};
/**
 * 使用map 来删除数据，性能一般 但是准确率比较高
 *
 * @param keyProps
 * @param action
 */
export function editableRowByKey(keyProps, action) {
  var _recordKeyToString;
  var getRowKey = keyProps.getRowKey,
    row = keyProps.row,
    data = keyProps.data,
    _keyProps$childrenCol = keyProps.childrenColumnName,
    childrenColumnName = _keyProps$childrenCol === void 0 ? 'children' : _keyProps$childrenCol;
  var key = (_recordKeyToString = recordKeyToString(keyProps.key)) === null || _recordKeyToString === void 0 ? void 0 : _recordKeyToString.toString();
  var kvMap = new Map();

  /**
   * 打平这个数组
   *
   * @param records
   * @param parentKey
   */
  function dig(records, map_row_parentKey, map_row_index) {
    records.forEach(function (record, index) {
      var eachIndex = (map_row_index || 0) * 10 + index;
      var recordKey = getRowKey(record, eachIndex).toString();
      // children 取在前面方便拼的时候按照反顺序放回去
      if (record && _typeof(record) === 'object' && childrenColumnName in record) {
        dig(record[childrenColumnName] || [], recordKey, eachIndex);
      }
      var newRecord = _objectSpread(_objectSpread({}, record), {}, {
        map_row_key: recordKey,
        children: undefined,
        map_row_parentKey: map_row_parentKey
      });
      delete newRecord.children;
      if (!map_row_parentKey) {
        delete newRecord.map_row_parentKey;
      }
      kvMap.set(recordKey, newRecord);
    });
  }
  if (action === 'top') {
    kvMap.set(key, _objectSpread(_objectSpread({}, kvMap.get(key)), row));
  }
  dig(data);
  if (action === 'update') {
    kvMap.set(key, _objectSpread(_objectSpread({}, kvMap.get(key)), row));
  }
  if (action === 'delete') {
    kvMap.delete(key);
  }
  var fill = function fill(map) {
    var kvArrayMap = new Map();
    var kvSource = [];
    var fillNewRecord = function fillNewRecord() {
      var fillChildren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      map.forEach(function (value) {
        if (value.map_row_parentKey && !value.map_row_key) {
          var map_row_parentKey = value.map_row_parentKey,
            rest = _objectWithoutProperties(value, _excluded);
          if (!kvArrayMap.has(map_row_parentKey)) {
            kvArrayMap.set(map_row_parentKey, []);
          }
          if (fillChildren) {
            var _kvArrayMap$get;
            (_kvArrayMap$get = kvArrayMap.get(map_row_parentKey)) === null || _kvArrayMap$get === void 0 || _kvArrayMap$get.push(rest);
          }
        }
      });
    };
    fillNewRecord(action === 'top');
    map.forEach(function (value) {
      if (value.map_row_parentKey && value.map_row_key) {
        var _kvArrayMap$get2;
        var map_row_parentKey = value.map_row_parentKey,
          map_row_key = value.map_row_key,
          rest = _objectWithoutProperties(value, _excluded2);
        if (kvArrayMap.has(map_row_key)) {
          rest[childrenColumnName] = kvArrayMap.get(map_row_key);
        }
        if (!kvArrayMap.has(map_row_parentKey)) {
          kvArrayMap.set(map_row_parentKey, []);
        }
        (_kvArrayMap$get2 = kvArrayMap.get(map_row_parentKey)) === null || _kvArrayMap$get2 === void 0 || _kvArrayMap$get2.push(rest);
      }
    });
    fillNewRecord(action === 'update');
    map.forEach(function (value) {
      if (!value.map_row_parentKey) {
        var map_row_key = value.map_row_key,
          rest = _objectWithoutProperties(value, _excluded3);
        if (map_row_key && kvArrayMap.has(map_row_key)) {
          var item = _objectSpread(_objectSpread({}, rest), {}, _defineProperty({}, childrenColumnName, kvArrayMap.get(map_row_key)));
          kvSource.push(item);
          return;
        }
        kvSource.push(rest);
      }
    });
    return kvSource;
  };
  return fill(kvMap);
}

/**
 * 保存按钮的dom
 *
 * @param ActionRenderConfig
 */
export function SaveEditableAction(_ref, ref) {
  var recordKey = _ref.recordKey,
    onSave = _ref.onSave,
    row = _ref.row,
    children = _ref.children,
    newLineConfig = _ref.newLineConfig,
    editorType = _ref.editorType,
    tableName = _ref.tableName;
  var context = useContext(ProFormContext);
  var form = Form.useFormInstance();
  var _useMountMergeState = useMountMergeState(false),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    loading = _useMountMergeState2[0],
    setLoading = _useMountMergeState2[1];
  var save = useRefFunction( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _context$getFieldForm, isMapEditor, namePath, fields, _recordKey, recordKeyPath, curValue, data, res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          isMapEditor = editorType === 'Map'; // 为了兼容类型为 array 的 dataIndex,当 recordKey 是一个数组时，用于获取表单值的 key 只取第一项，
          // 从表单中获取回来之后，再根据 namepath 获取具体的某个字段并设置
          namePath = [tableName, Array.isArray(recordKey) ? recordKey[0] : recordKey].map(function (key) {
            return key === null || key === void 0 ? void 0 : key.toString();
          }).flat(1).filter(Boolean);
          setLoading(true);
          _context.next = 6;
          return form.validateFields(namePath, {
            recursive: true
          });
        case 6:
          fields = (context === null || context === void 0 || (_context$getFieldForm = context.getFieldFormatValue) === null || _context$getFieldForm === void 0 ? void 0 : _context$getFieldForm.call(context, namePath)) || form.getFieldValue(namePath); // 处理 dataIndex 为数组的情况
          if (Array.isArray(recordKey) && recordKey.length > 1) {
            // 获取 namepath
            _recordKey = _toArray(recordKey), recordKeyPath = _recordKey.slice(1); // 将目标值获取出来并设置到 fields 当中
            curValue = get(fields, recordKeyPath);
            set(fields, recordKeyPath, curValue);
          }
          data = isMapEditor ? set({}, namePath, fields) : fields; // 获取数据并保存
          _context.next = 11;
          return onSave === null || onSave === void 0 ? void 0 : onSave(recordKey,
          // 如果是 map 模式，fields 就是一个值，所以需要set 到对象中
          // 数据模式 fields 是一个对象，所以不需要
          merge({}, row, data), row, newLineConfig);
        case 11:
          res = _context.sent;
          setLoading(false);
          return _context.abrupt("return", res);
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          // eslint-disable-next-line no-console
          console.log(_context.t0);
          setLoading(false);
          throw _context.t0;
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  })));

  // 保存数据
  useImperativeHandle(ref, function () {
    return {
      save: save
    };
  }, [save]);
  return /*#__PURE__*/_jsxs("a", {
    onClick: ( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e.stopPropagation();
              e.preventDefault();
              _context2.prev = 2;
              _context2.next = 5;
              return save();
            case 5:
              _context2.next = 9;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 7]]);
      }));
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }()),
    children: [loading ? /*#__PURE__*/_jsx(LoadingOutlined, {
      style: {
        marginInlineEnd: 8
      }
    }) : null, children || '保存']
  }, "save");
}
/**
 * 删除按钮 dom
 *
 * @param ActionRenderConfig
 */
export var DeleteEditableAction = function DeleteEditableAction(_ref4) {
  var recordKey = _ref4.recordKey,
    onDelete = _ref4.onDelete,
    preEditRowRef = _ref4.preEditRowRef,
    row = _ref4.row,
    children = _ref4.children,
    deletePopconfirmMessage = _ref4.deletePopconfirmMessage;
  var _useMountMergeState3 = useMountMergeState(function () {
      return false;
    }),
    _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
    loading = _useMountMergeState4[0],
    setLoading = _useMountMergeState4[1];
  var _onConfirm = useRefFunction( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          setLoading(true);
          _context3.next = 4;
          return onDelete === null || onDelete === void 0 ? void 0 : onDelete(recordKey, row);
        case 4:
          res = _context3.sent;
          setLoading(false);
          return _context3.abrupt("return", res);
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          // eslint-disable-next-line no-console
          console.log(_context3.t0);
          setLoading(false);
          return _context3.abrupt("return", null);
        case 14:
          _context3.prev = 14;
          if (preEditRowRef) preEditRowRef.current = null;
          return _context3.finish(14);
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9, 14, 17]]);
  })));
  return children !== false ? /*#__PURE__*/_jsx(Popconfirm, {
    title: deletePopconfirmMessage,
    onConfirm: function onConfirm() {
      return _onConfirm();
    },
    children: /*#__PURE__*/_jsxs("a", {
      children: [loading ? /*#__PURE__*/_jsx(LoadingOutlined, {
        style: {
          marginInlineEnd: 8
        }
      }) : null, children || '删除']
    })
  }, "delete") : null;
};
var CancelEditableAction = function CancelEditableAction(props) {
  var recordKey = props.recordKey,
    tableName = props.tableName,
    newLineConfig = props.newLineConfig,
    editorType = props.editorType,
    onCancel = props.onCancel,
    cancelEditable = props.cancelEditable,
    row = props.row,
    cancelText = props.cancelText,
    preEditRowRef = props.preEditRowRef;
  var context = useContext(ProFormContext);
  var form = Form.useFormInstance();
  return /*#__PURE__*/_jsx("a", {
    onClick: ( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
        var _context$getFieldForm2;
        var isMapEditor, namePath, fields, record, res, _props$onDelete;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              e.stopPropagation();
              e.preventDefault();
              isMapEditor = editorType === 'Map';
              namePath = [tableName, recordKey].flat(1).filter(Boolean);
              fields = (context === null || context === void 0 || (_context$getFieldForm2 = context.getFieldFormatValue) === null || _context$getFieldForm2 === void 0 ? void 0 : _context$getFieldForm2.call(context, namePath)) || (form === null || form === void 0 ? void 0 : form.getFieldValue(namePath));
              record = isMapEditor ? set({}, namePath, fields) : fields;
              _context4.next = 8;
              return onCancel === null || onCancel === void 0 ? void 0 : onCancel(recordKey, record, row, newLineConfig);
            case 8:
              res = _context4.sent;
              _context4.next = 11;
              return cancelEditable(recordKey);
            case 11:
              if (!((preEditRowRef === null || preEditRowRef === void 0 ? void 0 : preEditRowRef.current) !== null)) {
                _context4.next = 15;
                break;
              }
              form.setFieldsValue(set({}, namePath, preEditRowRef === null || preEditRowRef === void 0 ? void 0 : preEditRowRef.current));
              _context4.next = 17;
              break;
            case 15:
              _context4.next = 17;
              return (_props$onDelete = props.onDelete) === null || _props$onDelete === void 0 ? void 0 : _props$onDelete.call(props, recordKey, row);
            case 17:
              if (preEditRowRef) preEditRowRef.current = null;
              return _context4.abrupt("return", res);
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }()),
    children: cancelText || '取消'
  }, "cancel");
};
export function defaultActionRender(row, config) {
  var recordKey = config.recordKey,
    newLineConfig = config.newLineConfig,
    saveText = config.saveText,
    deleteText = config.deleteText;
  var SaveEditableActionRef = /*#__PURE__*/forwardRef(SaveEditableAction);
  var saveRef = /*#__PURE__*/createRef();
  return {
    save: /*#__PURE__*/_jsx(SaveEditableActionRef, _objectSpread(_objectSpread({}, config), {}, {
      row: row,
      ref: saveRef,
      children: saveText
    }), 'save' + recordKey),
    saveRef: saveRef,
    delete: (newLineConfig === null || newLineConfig === void 0 ? void 0 : newLineConfig.options.recordKey) !== recordKey ? /*#__PURE__*/_jsx(DeleteEditableAction, _objectSpread(_objectSpread({}, config), {}, {
      row: row,
      children: deleteText
    }), 'delete' + recordKey) : undefined,
    cancel: /*#__PURE__*/_jsx(CancelEditableAction, _objectSpread(_objectSpread({}, config), {}, {
      row: row
    }), 'cancel' + recordKey)
  };
}

/**
 * 一个方便的hooks 用于维护编辑的状态
 *
 * @param props
 */
export function useEditableArray(props) {
  // Internationalization
  var intl = useIntl();

  /**
   * 点击开始编辑之前的保存数据用的
   */
  var preEditRowRef = useRef(null);
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    newLineRecordCache = _useState2[0],
    setNewLineRecordCache = _useState2[1];
  var resetMapRef = function resetMapRef() {
    var map = new Map();
    //存在children时会覆盖Map的key,导致使用数组索引查找key错误
    var loopGetKey = function loopGetKey(dataSource, parentKey) {
      dataSource === null || dataSource === void 0 || dataSource.forEach(function (record, index) {
        var _recordKeyToString2;
        var key = parentKey === undefined || parentKey === null ? index.toString() : parentKey + '_' + index.toString();
        map.set(key, recordKeyToString(props.getRowKey(record, -1)));
        map.set((_recordKeyToString2 = recordKeyToString(props.getRowKey(record, -1))) === null || _recordKeyToString2 === void 0 ? void 0 : _recordKeyToString2.toString(), key);
        if (props.childrenColumnName && record !== null && record !== void 0 && record[props.childrenColumnName]) {
          loopGetKey(record[props.childrenColumnName], key);
        }
      });
    };
    loopGetKey(props.dataSource);
    return map;
  };
  var initDataSourceKeyIndexMap = useMemo(function () {
    return resetMapRef();
  }, []);
  var dataSourceKeyIndexMapRef = useRef(initDataSourceKeyIndexMap);
  var newLineRecordRef = useRef(undefined);
  useDeepCompareEffectDebounce(function () {
    dataSourceKeyIndexMapRef.current = resetMapRef();
  }, [props.dataSource]);

  // 这里这么做是为了存上次的状态，不然每次存一下再拿
  newLineRecordRef.current = newLineRecordCache;
  var editableType = props.type || 'single';
  var _useLazyKVMap = useLazyKVMap(props.dataSource, 'children', props.getRowKey),
    _useLazyKVMap2 = _slicedToArray(_useLazyKVMap, 1),
    getRecordByKey = _useLazyKVMap2[0];
  var _useMergedState = useMergedState([], {
      value: props.editableKeys,
      onChange: props.onChange ? function (keys) {
        var _props$onChange, _keys$filter, _keys$map$filter;
        props === null || props === void 0 || (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, // 计算编辑的key
        (_keys$filter = keys === null || keys === void 0 ? void 0 : keys.filter(function (key) {
          return key !== undefined;
        })) !== null && _keys$filter !== void 0 ? _keys$filter : [], // 计算编辑的行
        (_keys$map$filter = keys === null || keys === void 0 ? void 0 : keys.map(function (key) {
          return getRecordByKey(key);
        }).filter(function (key) {
          return key !== undefined;
        })) !== null && _keys$map$filter !== void 0 ? _keys$map$filter : []);
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
  var editableKeysRef = usePrevious(editableKeys);

  /** 这行是不是编辑状态 */
  var isEditable = useRefFunction(function (row) {
    var _props$getRowKey, _props$getRowKey$toSt, _props$getRowKey2, _props$getRowKey2$toS;
    // 为了兼容一下name 模式的 indexKey，所以需要判断两次，一次是index，一次是没有 index 的
    var recordKeyOrIndex = (_props$getRowKey = props.getRowKey(row, row.index)) === null || _props$getRowKey === void 0 || (_props$getRowKey$toSt = _props$getRowKey.toString) === null || _props$getRowKey$toSt === void 0 ? void 0 : _props$getRowKey$toSt.call(_props$getRowKey);
    // 这里是不设置 index 的地方
    var recordKey = (_props$getRowKey2 = props.getRowKey(row, -1)) === null || _props$getRowKey2 === void 0 || (_props$getRowKey2$toS = _props$getRowKey2.toString) === null || _props$getRowKey2$toS === void 0 ? void 0 : _props$getRowKey2$toS.call(_props$getRowKey2);

    // 都转化为了字符串，不然 number 和 string
    var stringEditableKeys = editableKeys === null || editableKeys === void 0 ? void 0 : editableKeys.map(function (key) {
      return key === null || key === void 0 ? void 0 : key.toString();
    });
    var stringEditableKeysRef = (editableKeysRef === null || editableKeysRef === void 0 ? void 0 : editableKeysRef.map(function (key) {
      return key === null || key === void 0 ? void 0 : key.toString();
    })) || [];
    var preIsEditable = props.tableName && !!(stringEditableKeysRef !== null && stringEditableKeysRef !== void 0 && stringEditableKeysRef.includes(recordKey)) || !!(stringEditableKeysRef !== null && stringEditableKeysRef !== void 0 && stringEditableKeysRef.includes(recordKeyOrIndex));
    return {
      recordKey: recordKey,
      isEditable: props.tableName && (stringEditableKeys === null || stringEditableKeys === void 0 ? void 0 : stringEditableKeys.includes(recordKey)) || (stringEditableKeys === null || stringEditableKeys === void 0 ? void 0 : stringEditableKeys.includes(recordKeyOrIndex)),
      preIsEditable: preIsEditable
    };
  });

  /**
   * 进入编辑状态
   *
   * @param recordKey
   */
  var startEditable = useRefFunction(function (recordKey, record) {
    var _ref7, _props$dataSource;
    // 如果是单行的话，不允许多行编辑
    if (editableKeysSet.size > 0 && editableType === 'single' && props.onlyOneLineEditorAlertMessage !== false) {
      warning(props.onlyOneLineEditorAlertMessage || intl.getMessage('editableTable.onlyOneLineEditor', '只能同时编辑一行'));
      return false;
    }
    editableKeysSet.add(recordKey);
    setEditableRowKeys(Array.from(editableKeysSet));

    // 这里是为了存上次的状态,不然取消的时候就丢掉了
    preEditRowRef.current = (_ref7 = record !== null && record !== void 0 ? record : (_props$dataSource = props.dataSource) === null || _props$dataSource === void 0 ? void 0 : _props$dataSource.find(function (recordData, index) {
      return props.getRowKey(recordData, index) === recordKey;
    })) !== null && _ref7 !== void 0 ? _ref7 : null;
    return true;
  });

  /**
   * 退出编辑状态
   *
   * @param recordKey
   */
  var cancelEditable = useRefFunction( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(recordKey, needReTry) {
      var relayKey, key;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            relayKey = recordKeyToString(recordKey).toString();
            key = dataSourceKeyIndexMapRef.current.get(relayKey);
            /** 如果没找到key，转化一下再去找 */
            if (!(!editableKeysSet.has(relayKey) && key && (needReTry !== null && needReTry !== void 0 ? needReTry : true) && props.tableName)) {
              _context5.next = 5;
              break;
            }
            cancelEditable(key, false);
            return _context5.abrupt("return");
          case 5:
            /** 如果这个是 new Line 直接删除 */
            if (newLineRecordCache && newLineRecordCache.options.recordKey === recordKey) {
              setNewLineRecordCache(undefined);
            }
            editableKeysSet.delete(relayKey);
            editableKeysSet.delete(recordKeyToString(recordKey));
            setEditableRowKeys(Array.from(editableKeysSet));
            return _context5.abrupt("return", true);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x3, _x4) {
      return _ref8.apply(this, arguments);
    };
  }());
  var propsOnValuesChange = useDebounceFn( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _props$onValuesChange;
    var _len,
      rest,
      _key,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          for (_len = _args6.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = _args6[_key];
          }
          //@ts-ignore
          (_props$onValuesChange = props.onValuesChange) === null || _props$onValuesChange === void 0 || _props$onValuesChange.call.apply(_props$onValuesChange, [props].concat(rest));
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })), 64);
  var onValuesChange = useRefFunction(function (value, values) {
    var _Object$keys$pop;
    if (!props.onValuesChange) {
      return;
    }
    var dataSource = props.dataSource;

    // 这里是把正在编辑中的所有表单数据都修改掉
    // 不然会用 props 里面的 dataSource，数据只有正在编辑中的
    // Object.keys(get(values, [props.tableName || ''].flat(1)) || values).forEach((recordKey) => {
    editableKeys === null || editableKeys === void 0 || editableKeys.forEach(function (eachRecordKey) {
      if ((newLineRecordCache === null || newLineRecordCache === void 0 ? void 0 : newLineRecordCache.options.recordKey) === eachRecordKey) return;
      var recordKey = eachRecordKey.toString();
      // 如果数据在这个 form 中没有展示，也不显示
      var editRow = get(values, [props.tableName || '', recordKey].flat(1).filter(function (key) {
        return key || key === 0;
      }));
      if (!editRow) return;
      dataSource = editableRowByKey({
        data: dataSource,
        getRowKey: props.getRowKey,
        row: editRow,
        key: recordKey,
        childrenColumnName: props.childrenColumnName || 'children'
      }, 'update');
    });
    var relayValue = value;
    var recordKey = (_Object$keys$pop = Object.keys(relayValue || {}).pop()) === null || _Object$keys$pop === void 0 ? void 0 : _Object$keys$pop.toString();

    //从form 和 cache 中取得数据
    var newLineRecordData = _objectSpread(_objectSpread({}, newLineRecordCache === null || newLineRecordCache === void 0 ? void 0 : newLineRecordCache.defaultValue), get(values, [props.tableName || '', recordKey.toString()].flat(1).filter(function (key) {
      return key || key === 0;
    })));

    /** 如果已经在 dataSource 中存在了，直接 find */
    var editRow = dataSourceKeyIndexMapRef.current.has(recordKeyToString(recordKey)) ? dataSource.find(function (item, index) {
      var _props$getRowKey3;
      var key = (_props$getRowKey3 = props.getRowKey(item, index)) === null || _props$getRowKey3 === void 0 ? void 0 : _props$getRowKey3.toString();
      return key === recordKey;
    }) : newLineRecordData;
    propsOnValuesChange.run(editRow || newLineRecordData, dataSource);
  });
  var saveRefsMap = useRef(new Map());
  useEffect(function () {
    // 确保只保留编辑状态的，其它的都删除掉
    saveRefsMap.current.forEach(function (ref, key) {
      if (!editableKeysSet.has(key)) {
        saveRefsMap.current.delete(key);
      }
    });
  }, [saveRefsMap, editableKeysSet]);
  /**
   * 保存编辑行
   *
   * @param recordKey
   * @param needReTry
   */
  var saveEditable = useRefFunction( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(recordKey, needReTry) {
      var relayKey, key, saveRef, _saveRef$current;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            relayKey = recordKeyToString(recordKey);
            key = dataSourceKeyIndexMapRef.current.get(recordKey.toString());
            /** 如果没找到key，转化一下再去找 */
            if (!(!editableKeysSet.has(relayKey) && key && (needReTry !== null && needReTry !== void 0 ? needReTry : true) && props.tableName)) {
              _context7.next = 6;
              break;
            }
            _context7.next = 5;
            return saveEditable(key, false);
          case 5:
            return _context7.abrupt("return", _context7.sent);
          case 6:
            saveRef = saveRefsMap.current.get(relayKey) || saveRefsMap.current.get(relayKey.toString());
            _context7.prev = 7;
            _context7.next = 10;
            return saveRef === null || saveRef === void 0 || (_saveRef$current = saveRef.current) === null || _saveRef$current === void 0 ? void 0 : _saveRef$current.save();
          case 10:
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](7);
            return _context7.abrupt("return", false);
          case 15:
            editableKeysSet.delete(relayKey);
            editableKeysSet.delete(relayKey.toString());
            setEditableRowKeys(Array.from(editableKeysSet));
            return _context7.abrupt("return", true);
          case 19:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[7, 12]]);
    }));
    return function (_x5, _x6) {
      return _ref10.apply(this, arguments);
    };
  }());

  /**
   * 同时只能支持一行,取消之后数据消息，不会触发 dataSource
   *
   * @param row
   * @param options
   * @name 增加新的行
   */
  var addEditRecord = useRefFunction(function (row, options) {
    if (options !== null && options !== void 0 && options.parentKey && !dataSourceKeyIndexMapRef.current.has(recordKeyToString(options === null || options === void 0 ? void 0 : options.parentKey).toString())) {
      console.warn("can't find record by key", options === null || options === void 0 ? void 0 : options.parentKey);
      return false;
    }
    // 暂时不支持多行新增
    if (newLineRecordRef.current && props.onlyAddOneLineAlertMessage !== false) {
      warning(props.onlyAddOneLineAlertMessage || intl.getMessage('editableTable.onlyAddOneLine', '只能新增一行'));
      return false;
    }
    // 如果是单行的话，不允许多行编辑
    if (editableKeysSet.size > 0 && editableType === 'single' && props.onlyOneLineEditorAlertMessage !== false) {
      warning(props.onlyOneLineEditorAlertMessage || intl.getMessage('editableTable.onlyOneLineEditor', '只能同时编辑一行'));
      return false;
    }
    // 防止多次渲染
    var recordKey = props.getRowKey(row, -1);
    if (!recordKey && recordKey !== 0) {
      noteOnce(!!recordKey, '请设置 recordCreatorProps.record 并返回一个唯一的key  \n  https://procomponents.ant.design/components/editable-table#editable-%E6%96%B0%E5%BB%BA%E8%A1%8C');
      throw new Error('请设置 recordCreatorProps.record 并返回一个唯一的key');
    }
    editableKeysSet.add(recordKey);
    setEditableRowKeys(Array.from(editableKeysSet));

    // 如果是dataSource 新增模式的话，取消再开始编辑，
    // 这样就可以把新增到 dataSource的数据进入编辑模式了
    // [a,b,cache] => [a,b,c]
    if ((options === null || options === void 0 ? void 0 : options.newRecordType) === 'dataSource' || props.tableName) {
      var _recordKeyToString3;
      var actionProps = {
        data: props.dataSource,
        getRowKey: props.getRowKey,
        row: _objectSpread(_objectSpread({}, row), {}, {
          map_row_parentKey: options !== null && options !== void 0 && options.parentKey ? (_recordKeyToString3 = recordKeyToString(options === null || options === void 0 ? void 0 : options.parentKey)) === null || _recordKeyToString3 === void 0 ? void 0 : _recordKeyToString3.toString() : undefined
        }),
        key: recordKey,
        childrenColumnName: props.childrenColumnName || 'children'
      };
      props.setDataSource(editableRowByKey(actionProps, (options === null || options === void 0 ? void 0 : options.position) === 'top' ? 'top' : 'update'));
    } else {
      setNewLineRecordCache({
        defaultValue: row,
        options: _objectSpread(_objectSpread({}, options), {}, {
          recordKey: recordKey
        })
      });
    }
    return true;
  });
  var saveText = (props === null || props === void 0 ? void 0 : props.saveText) || intl.getMessage('editableTable.action.save', '保存');
  var deleteText = (props === null || props === void 0 ? void 0 : props.deleteText) || intl.getMessage('editableTable.action.delete', '删除');
  var cancelText = (props === null || props === void 0 ? void 0 : props.cancelText) || intl.getMessage('editableTable.action.cancel', '取消');
  var actionSaveRef = useRefFunction( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(recordKey, editRow, originRow, newLine) {
      var _props$onSave, _recordKeyToString4, _options$parentKey;
      var res, _ref12, options, actionProps;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return props === null || props === void 0 || (_props$onSave = props.onSave) === null || _props$onSave === void 0 ? void 0 : _props$onSave.call(props, recordKey, editRow, originRow, newLine);
          case 2:
            res = _context8.sent;
            _context8.next = 5;
            return cancelEditable(recordKey);
          case 5:
            _ref12 = newLine || newLineRecordRef.current || {}, options = _ref12.options;
            if (!(!(options !== null && options !== void 0 && options.parentKey) && (options === null || options === void 0 ? void 0 : options.recordKey) === recordKey)) {
              _context8.next = 9;
              break;
            }
            if ((options === null || options === void 0 ? void 0 : options.position) === 'top') {
              props.setDataSource([editRow].concat(_toConsumableArray(props.dataSource)));
            } else {
              props.setDataSource([].concat(_toConsumableArray(props.dataSource), [editRow]));
            }
            return _context8.abrupt("return", res);
          case 9:
            actionProps = {
              data: props.dataSource,
              getRowKey: props.getRowKey,
              row: options ? _objectSpread(_objectSpread({}, editRow), {}, {
                map_row_parentKey: (_recordKeyToString4 = recordKeyToString((_options$parentKey = options === null || options === void 0 ? void 0 : options.parentKey) !== null && _options$parentKey !== void 0 ? _options$parentKey : '')) === null || _recordKeyToString4 === void 0 ? void 0 : _recordKeyToString4.toString()
              }) : editRow,
              key: recordKey,
              childrenColumnName: props.childrenColumnName || 'children'
            };
            props.setDataSource(editableRowByKey(actionProps, (options === null || options === void 0 ? void 0 : options.position) === 'top' ? 'top' : 'update'));
            _context8.next = 13;
            return cancelEditable(recordKey);
          case 13:
            return _context8.abrupt("return", res);
          case 14:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x7, _x8, _x9, _x10) {
      return _ref11.apply(this, arguments);
    };
  }());
  var actionDeleteRef = useRefFunction( /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(recordKey, editRow) {
      var _props$onDelete2;
      var actionProps, res;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            actionProps = {
              data: props.dataSource,
              getRowKey: props.getRowKey,
              row: editRow,
              key: recordKey,
              childrenColumnName: props.childrenColumnName || 'children'
            };
            _context9.next = 3;
            return props === null || props === void 0 || (_props$onDelete2 = props.onDelete) === null || _props$onDelete2 === void 0 ? void 0 : _props$onDelete2.call(props, recordKey, editRow);
          case 3:
            res = _context9.sent;
            _context9.next = 6;
            return cancelEditable(recordKey, false);
          case 6:
            props.setDataSource(editableRowByKey(actionProps, 'delete'));
            return _context9.abrupt("return", res);
          case 8:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function (_x11, _x12) {
      return _ref13.apply(this, arguments);
    };
  }());
  var actionCancelRef = useRefFunction( /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(recordKey, editRow, originRow, newLine) {
      var _props$onCancel;
      var res;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return props === null || props === void 0 || (_props$onCancel = props.onCancel) === null || _props$onCancel === void 0 ? void 0 : _props$onCancel.call(props, recordKey, editRow, originRow, newLine);
          case 2:
            res = _context10.sent;
            return _context10.abrupt("return", res);
          case 4:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return function (_x13, _x14, _x15, _x16) {
      return _ref14.apply(this, arguments);
    };
  }());

  // 如果传入了自定义的actionRender，使用useRefFunction以确保内部的事件处理函数可以访问最新的state
  var existCustomActionRender = props.actionRender && typeof props.actionRender === 'function';
  var customActionRender = existCustomActionRender ? props.actionRender : function () {};
  var customActionRenderRef = useRefFunction(customActionRender);
  var actionRender = function actionRender(row) {
    var key = props.getRowKey(row, row.index);
    var config = {
      saveText: saveText,
      cancelText: cancelText,
      deleteText: deleteText,
      addEditRecord: addEditRecord,
      recordKey: key,
      cancelEditable: cancelEditable,
      index: row.index,
      tableName: props.tableName,
      newLineConfig: newLineRecordCache,
      onCancel: actionCancelRef,
      onDelete: actionDeleteRef,
      onSave: actionSaveRef,
      editableKeys: editableKeys,
      setEditableRowKeys: setEditableRowKeys,
      preEditRowRef: preEditRowRef,
      deletePopconfirmMessage: props.deletePopconfirmMessage || "".concat(intl.getMessage('deleteThisLine', '删除此项'), "?")
    };
    var renderResult = defaultActionRender(row, config);
    // 缓存一下saveRef
    if (props.tableName) {
      saveRefsMap.current.set(dataSourceKeyIndexMapRef.current.get(recordKeyToString(key)) || recordKeyToString(key), renderResult.saveRef);
    } else {
      saveRefsMap.current.set(recordKeyToString(key), renderResult.saveRef);
    }
    if (existCustomActionRender) return customActionRenderRef(row, config, {
      save: renderResult.save,
      delete: renderResult.delete,
      cancel: renderResult.cancel
    });
    return [renderResult.save, renderResult.delete, renderResult.cancel];
  };
  return {
    editableKeys: editableKeys,
    setEditableRowKeys: setEditableRowKeys,
    isEditable: isEditable,
    actionRender: actionRender,
    startEditable: startEditable,
    cancelEditable: cancelEditable,
    addEditRecord: addEditRecord,
    saveEditable: saveEditable,
    newLineRecord: newLineRecordCache,
    preEditableKeys: editableKeysRef,
    onValuesChange: onValuesChange,
    getRealIndex: props.getRealIndex
  };
}