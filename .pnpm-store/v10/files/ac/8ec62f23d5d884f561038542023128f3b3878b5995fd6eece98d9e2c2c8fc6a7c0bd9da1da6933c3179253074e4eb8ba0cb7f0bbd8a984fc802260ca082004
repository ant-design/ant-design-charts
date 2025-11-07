"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableContext = exports.Container = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _warning = require("rc-util/lib/warning");
var _react = require("react");
var _utils = require("../utils");
var _jsxRuntime = require("react/jsx-runtime");
function useContainer() {
  var _props$columnsState6, _props$columnsState7, _props$columnsState10, _props$columnsState11, _props$columnsState15, _props$columnsState16;
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var actionRef = (0, _react.useRef)();
  var rootDomRef = (0, _react.useRef)(null);
  /** 父 form item 的 name */
  var prefixNameRef = (0, _react.useRef)();

  /** 自己 props 的引用 */
  var propsRef = (0, _react.useRef)();

  // 共享状态比较难，就放到这里了
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    keyWords = _useState2[0],
    _setKeyWords = _useState2[1];
  // 用于排序的数组
  var sortKeyColumns = (0, _react.useRef)([]);
  var _useMergedState = (0, _useMergedState5.default)(function () {
      return props.size || props.defaultSize || 'middle';
    }, {
      value: props.size,
      onChange: props.onSizeChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    tableSize = _useMergedState2[0],
    setTableSize = _useMergedState2[1];

  /** 默认全选中 */
  var defaultColumnKeyMap = (0, _react.useMemo)(function () {
    var _props$columnsState, _props$columns;
    if (props !== null && props !== void 0 && (_props$columnsState = props.columnsState) !== null && _props$columnsState !== void 0 && _props$columnsState.defaultValue) return props.columnsState.defaultValue;
    var columnKeyMap = {};
    (_props$columns = props.columns) === null || _props$columns === void 0 || _props$columns.forEach(function (_ref, index) {
      var key = _ref.key,
        dataIndex = _ref.dataIndex,
        fixed = _ref.fixed,
        disable = _ref.disable;
      var columnKey = (0, _utils.genColumnKey)(key !== null && key !== void 0 ? key : dataIndex, index);
      if (columnKey) {
        columnKeyMap[columnKey] = {
          show: true,
          fixed: fixed,
          disable: disable
        };
      }
    });
    return columnKeyMap;
  }, [props.columns]);
  var _useMergedState3 = (0, _useMergedState5.default)(function () {
      var _props$columnsState4, _props$columnsState5;
      var _ref2 = props.columnsState || {},
        persistenceType = _ref2.persistenceType,
        persistenceKey = _ref2.persistenceKey;
      if (persistenceKey && persistenceType && typeof window !== 'undefined') {
        /** 从持久化中读取数据 */
        var storage = window[persistenceType];
        try {
          var storageValue = storage === null || storage === void 0 ? void 0 : storage.getItem(persistenceKey);
          if (storageValue) {
            var _props$columnsState2;
            if (props !== null && props !== void 0 && (_props$columnsState2 = props.columnsState) !== null && _props$columnsState2 !== void 0 && _props$columnsState2.defaultValue) {
              var _props$columnsState3;
              // 实际生产中，defaultValue往往作为系统方默认配置，则优先级不应高于用户配置的storageValue
              return (0, _merge.default)({}, props === null || props === void 0 || (_props$columnsState3 = props.columnsState) === null || _props$columnsState3 === void 0 ? void 0 : _props$columnsState3.defaultValue, JSON.parse(storageValue));
            }
            return JSON.parse(storageValue);
          }
        } catch (error) {
          console.warn(error);
        }
      }
      return props.columnsStateMap || ((_props$columnsState4 = props.columnsState) === null || _props$columnsState4 === void 0 ? void 0 : _props$columnsState4.value) || ((_props$columnsState5 = props.columnsState) === null || _props$columnsState5 === void 0 ? void 0 : _props$columnsState5.defaultValue) || defaultColumnKeyMap;
    }, {
      value: ((_props$columnsState6 = props.columnsState) === null || _props$columnsState6 === void 0 ? void 0 : _props$columnsState6.value) || props.columnsStateMap,
      onChange: ((_props$columnsState7 = props.columnsState) === null || _props$columnsState7 === void 0 ? void 0 : _props$columnsState7.onChange) || props.onColumnsStateChange
    }),
    _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
    columnsMap = _useMergedState4[0],
    setColumnsMap = _useMergedState4[1];

  /**  配置或列更改时对columnsMap重新赋值 */
  (0, _react.useEffect)(function () {
    var _ref3 = props.columnsState || {},
      persistenceType = _ref3.persistenceType,
      persistenceKey = _ref3.persistenceKey;
    if (persistenceKey && persistenceType && typeof window !== 'undefined') {
      /** 从持久化中读取数据 */
      var storage = window[persistenceType];
      try {
        var storageValue = storage === null || storage === void 0 ? void 0 : storage.getItem(persistenceKey);
        if (storageValue) {
          var _props$columnsState8;
          if (props !== null && props !== void 0 && (_props$columnsState8 = props.columnsState) !== null && _props$columnsState8 !== void 0 && _props$columnsState8.defaultValue) {
            var _props$columnsState9;
            setColumnsMap((0, _merge.default)({}, props === null || props === void 0 || (_props$columnsState9 = props.columnsState) === null || _props$columnsState9 === void 0 ? void 0 : _props$columnsState9.defaultValue, JSON.parse(storageValue)));
          } else {
            setColumnsMap(JSON.parse(storageValue));
          }
        } else {
          setColumnsMap(defaultColumnKeyMap);
        }
      } catch (error) {
        console.warn(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(_props$columnsState10 = props.columnsState) === null || _props$columnsState10 === void 0 ? void 0 : _props$columnsState10.persistenceKey, (_props$columnsState11 = props.columnsState) === null || _props$columnsState11 === void 0 ? void 0 : _props$columnsState11.persistenceType, defaultColumnKeyMap]);
  (0, _warning.noteOnce)(!props.columnsStateMap, 'columnsStateMap已经废弃，请使用 columnsState.value 替换');
  (0, _warning.noteOnce)(!props.columnsStateMap, 'columnsStateMap has been discarded, please use columnsState.value replacement');

  /** 清空一下当前的 key */
  var clearPersistenceStorage = (0, _react.useCallback)(function () {
    var _ref4 = props.columnsState || {},
      persistenceType = _ref4.persistenceType,
      persistenceKey = _ref4.persistenceKey;
    if (!persistenceKey || !persistenceType || typeof window === 'undefined') return;

    /** 给持久化中设置数据 */
    var storage = window[persistenceType];
    try {
      storage === null || storage === void 0 || storage.removeItem(persistenceKey);
    } catch (error) {
      console.warn(error);
    }
  }, [props.columnsState]);
  (0, _react.useEffect)(function () {
    var _props$columnsState12, _props$columnsState13;
    if (!((_props$columnsState12 = props.columnsState) !== null && _props$columnsState12 !== void 0 && _props$columnsState12.persistenceKey) || !((_props$columnsState13 = props.columnsState) !== null && _props$columnsState13 !== void 0 && _props$columnsState13.persistenceType)) {
      return;
    }
    if (typeof window === 'undefined') return;
    /** 给持久化中设置数据 */
    var _props$columnsState14 = props.columnsState,
      persistenceType = _props$columnsState14.persistenceType,
      persistenceKey = _props$columnsState14.persistenceKey;
    var storage = window[persistenceType];
    try {
      storage === null || storage === void 0 || storage.setItem(persistenceKey, JSON.stringify(columnsMap));
    } catch (error) {
      console.warn(error);
      clearPersistenceStorage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(_props$columnsState15 = props.columnsState) === null || _props$columnsState15 === void 0 ? void 0 : _props$columnsState15.persistenceKey, columnsMap, (_props$columnsState16 = props.columnsState) === null || _props$columnsState16 === void 0 ? void 0 : _props$columnsState16.persistenceType]);
  var renderValue = {
    action: actionRef.current,
    setAction: function setAction(newAction) {
      actionRef.current = newAction;
    },
    sortKeyColumns: sortKeyColumns.current,
    setSortKeyColumns: function setSortKeyColumns(keys) {
      sortKeyColumns.current = keys;
    },
    propsRef: propsRef,
    columnsMap: columnsMap,
    keyWords: keyWords,
    setKeyWords: function setKeyWords(k) {
      return _setKeyWords(k);
    },
    setTableSize: setTableSize,
    tableSize: tableSize,
    prefixName: prefixNameRef.current,
    setPrefixName: function setPrefixName(name) {
      prefixNameRef.current = name;
    },
    setColumnsMap: setColumnsMap,
    columns: props.columns,
    rootDomRef: rootDomRef,
    clearPersistenceStorage: clearPersistenceStorage,
    defaultColumnKeyMap: defaultColumnKeyMap
  };
  Object.defineProperty(renderValue, 'prefixName', {
    get: function get() {
      return prefixNameRef.current;
    }
  });
  Object.defineProperty(renderValue, 'sortKeyColumns', {
    get: function get() {
      return sortKeyColumns.current;
    }
  });
  Object.defineProperty(renderValue, 'action', {
    get: function get() {
      return actionRef.current;
    }
  });
  return renderValue;
}
var TableContext = exports.TableContext = /*#__PURE__*/(0, _react.createContext)({});
var Container = exports.Container = function Container(props) {
  var value = useContainer(props.initValue);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TableContext.Provider, {
    value: value,
    children: props.children
  });
};