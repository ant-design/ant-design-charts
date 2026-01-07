import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { PlusOutlined } from '@ant-design/icons';
import { ProProvider, useIntl } from '@ant-design/pro-provider';
import { nanoid, runFunction } from '@ant-design/pro-utils';
import { Button } from 'antd';
import omit from "rc-util/es/omit";
import { useContext, useMemo, useRef, useState } from 'react';
import { EditOrReadOnlyContext } from "../../BaseForm/EditOrReadOnlyContext";
import { ProFormListItem } from "./ListItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var ProFormListContainer = function ProFormListContainer(props) {
  var intl = useIntl();
  var creatorButtonProps = props.creatorButtonProps,
    prefixCls = props.prefixCls,
    children = props.children,
    creatorRecord = props.creatorRecord,
    action = props.action,
    fields = props.fields,
    actionGuard = props.actionGuard,
    max = props.max,
    fieldExtraRender = props.fieldExtraRender,
    meta = props.meta,
    containerClassName = props.containerClassName,
    containerStyle = props.containerStyle,
    onAfterAdd = props.onAfterAdd,
    onAfterRemove = props.onAfterRemove;
  var _useContext = useContext(ProProvider),
    hashId = _useContext.hashId;
  var fieldKeyMap = useRef(new Map());
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var uuidFields = useMemo(function () {
    return fields.map(function (field) {
      var _fieldKeyMap$current, _fieldKeyMap$current3;
      if (!((_fieldKeyMap$current = fieldKeyMap.current) !== null && _fieldKeyMap$current !== void 0 && _fieldKeyMap$current.has(field.key.toString()))) {
        var _fieldKeyMap$current2;
        (_fieldKeyMap$current2 = fieldKeyMap.current) === null || _fieldKeyMap$current2 === void 0 || _fieldKeyMap$current2.set(field.key.toString(), nanoid());
      }
      var uuid = (_fieldKeyMap$current3 = fieldKeyMap.current) === null || _fieldKeyMap$current3 === void 0 ? void 0 : _fieldKeyMap$current3.get(field.key.toString());
      return _objectSpread(_objectSpread({}, field), {}, {
        uuid: uuid
      });
    });
  }, [fields]);

  /**
   * 根据行为守卫包装action函数
   */
  var wrapperAction = useMemo(function () {
    var wrapAction = _objectSpread({}, action);
    var count = uuidFields.length;
    if (actionGuard !== null && actionGuard !== void 0 && actionGuard.beforeAddRow) {
      wrapAction.add = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _len,
          rest,
          _key,
          success,
          res,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = _args[_key];
              }
              _context.next = 3;
              return actionGuard.beforeAddRow.apply(actionGuard, rest.concat([count]));
            case 3:
              success = _context.sent;
              if (!success) {
                _context.next = 8;
                break;
              }
              res = action.add.apply(action, rest);
              onAfterAdd === null || onAfterAdd === void 0 || onAfterAdd.apply(void 0, rest.concat([count + 1]));
              return _context.abrupt("return", res);
            case 8:
              return _context.abrupt("return", false);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
    } else {
      wrapAction.add = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _len2,
          rest,
          _key2,
          res,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              for (_len2 = _args2.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = _args2[_key2];
              }
              res = action.add.apply(action, rest);
              onAfterAdd === null || onAfterAdd === void 0 || onAfterAdd.apply(void 0, rest.concat([count + 1]));
              return _context2.abrupt("return", res);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
    }
    if (actionGuard !== null && actionGuard !== void 0 && actionGuard.beforeRemoveRow) {
      wrapAction.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _len3,
          rest,
          _key3,
          success,
          res,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              for (_len3 = _args3.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = _args3[_key3];
              }
              _context3.next = 3;
              return actionGuard.beforeRemoveRow.apply(actionGuard, rest.concat([count]));
            case 3:
              success = _context3.sent;
              if (!success) {
                _context3.next = 8;
                break;
              }
              res = action.remove.apply(action, rest);
              onAfterRemove === null || onAfterRemove === void 0 || onAfterRemove.apply(void 0, rest.concat([count - 1]));
              return _context3.abrupt("return", res);
            case 8:
              return _context3.abrupt("return", false);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
    } else {
      wrapAction.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _len4,
          rest,
          _key4,
          res,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              for (_len4 = _args4.length, rest = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                rest[_key4] = _args4[_key4];
              }
              res = action.remove.apply(action, rest);
              onAfterRemove === null || onAfterRemove === void 0 || onAfterRemove.apply(void 0, rest.concat([count - 1]));
              return _context4.abrupt("return", res);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
    }
    return wrapAction;
  }, [action, actionGuard === null || actionGuard === void 0 ? void 0 : actionGuard.beforeAddRow, actionGuard === null || actionGuard === void 0 ? void 0 : actionGuard.beforeRemoveRow, onAfterAdd, onAfterRemove, uuidFields.length]);
  var creatorButton = useMemo(function () {
    if (creatorButtonProps === false || uuidFields.length === max) return null;
    var _ref5 = creatorButtonProps || {},
      _ref5$position = _ref5.position,
      position = _ref5$position === void 0 ? 'bottom' : _ref5$position,
      _ref5$creatorButtonTe = _ref5.creatorButtonText,
      creatorButtonText = _ref5$creatorButtonTe === void 0 ? intl.getMessage('editableTable.action.add', '添加一行数据') : _ref5$creatorButtonTe;
    return /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
      className: "".concat(prefixCls, "-creator-button-").concat(position, " ").concat(hashId || '').trim(),
      type: "dashed",
      loading: loading,
      block: true,
      icon: /*#__PURE__*/_jsx(PlusOutlined, {})
    }, omit(creatorButtonProps || {}, ['position', 'creatorButtonText'])), {}, {
      onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _runFunction;
        var index;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              setLoading(true);
              // 如果不是从顶部开始添加，则插入的索引为当前行数
              index = uuidFields.length; // 如果是顶部，加到第一个，如果不是，为空就是最后一个
              if (position === 'top') index = 0;
              _context5.next = 5;
              return wrapperAction.add((_runFunction = runFunction(creatorRecord)) !== null && _runFunction !== void 0 ? _runFunction : {}, index);
            case 5:
              setLoading(false);
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      })),
      children: creatorButtonText
    }));
  }, [creatorButtonProps, uuidFields.length, max, intl, prefixCls, hashId, loading, wrapperAction, creatorRecord]);
  var readOnlyContext = useContext(EditOrReadOnlyContext);
  var defaultStyle = _objectSpread({
    width: 'max-content',
    maxWidth: '100%',
    minWidth: '100%'
  }, containerStyle);
  var itemList = useMemo(function () {
    return uuidFields.map(function (field, index) {
      return /*#__PURE__*/_createElement(ProFormListItem, _objectSpread(_objectSpread({}, props), {}, {
        key: field.uuid,
        field: field,
        index: index,
        action: wrapperAction,
        count: uuidFields.length
      }), children);
    });
  }, [children, props, uuidFields, wrapperAction]);
  if (readOnlyContext.mode === 'read' || props.readonly === true) {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: itemList
    });
  }
  return /*#__PURE__*/_jsxs("div", {
    style: defaultStyle,
    className: containerClassName,
    children: [creatorButtonProps !== false && (creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.position) === 'top' && creatorButton, itemList, fieldExtraRender && fieldExtraRender(wrapperAction, meta), creatorButtonProps !== false && (creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.position) !== 'top' && creatorButton]
  });
};
export { ProFormListContainer };