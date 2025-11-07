"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProFormListContainer = void 0;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = require("react");
var _EditOrReadOnlyContext = require("../../BaseForm/EditOrReadOnlyContext");
var _ListItem = require("./ListItem");
var _jsxRuntime = require("react/jsx-runtime");
var ProFormListContainer = exports.ProFormListContainer = function ProFormListContainer(props) {
  var intl = (0, _proProvider.useIntl)();
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
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext.hashId;
  var fieldKeyMap = (0, _react.useRef)(new Map());
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var uuidFields = (0, _react.useMemo)(function () {
    return fields.map(function (field) {
      var _fieldKeyMap$current, _fieldKeyMap$current3;
      if (!((_fieldKeyMap$current = fieldKeyMap.current) !== null && _fieldKeyMap$current !== void 0 && _fieldKeyMap$current.has(field.key.toString()))) {
        var _fieldKeyMap$current2;
        (_fieldKeyMap$current2 = fieldKeyMap.current) === null || _fieldKeyMap$current2 === void 0 || _fieldKeyMap$current2.set(field.key.toString(), (0, _proUtils.nanoid)());
      }
      var uuid = (_fieldKeyMap$current3 = fieldKeyMap.current) === null || _fieldKeyMap$current3 === void 0 ? void 0 : _fieldKeyMap$current3.get(field.key.toString());
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, field), {}, {
        uuid: uuid
      });
    });
  }, [fields]);

  /**
   * 根据行为守卫包装action函数
   */
  var wrapperAction = (0, _react.useMemo)(function () {
    var wrapAction = (0, _objectSpread2.default)({}, action);
    var count = uuidFields.length;
    if (actionGuard !== null && actionGuard !== void 0 && actionGuard.beforeAddRow) {
      wrapAction.add = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
        var _len,
          rest,
          _key,
          success,
          res,
          _args = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
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
      wrapAction.add = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2() {
        var _len2,
          rest,
          _key2,
          res,
          _args2 = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
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
      wrapAction.remove = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee3() {
        var _len3,
          rest,
          _key3,
          success,
          res,
          _args3 = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee3$(_context3) {
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
      wrapAction.remove = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee4() {
        var _len4,
          rest,
          _key4,
          res,
          _args4 = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee4$(_context4) {
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
  var creatorButton = (0, _react.useMemo)(function () {
    if (creatorButtonProps === false || uuidFields.length === max) return null;
    var _ref5 = creatorButtonProps || {},
      _ref5$position = _ref5.position,
      position = _ref5$position === void 0 ? 'bottom' : _ref5$position,
      _ref5$creatorButtonTe = _ref5.creatorButtonText,
      creatorButtonText = _ref5$creatorButtonTe === void 0 ? intl.getMessage('editableTable.action.add', '添加一行数据') : _ref5$creatorButtonTe;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      className: "".concat(prefixCls, "-creator-button-").concat(position, " ").concat(hashId || '').trim(),
      type: "dashed",
      loading: loading,
      block: true,
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.PlusOutlined, {})
    }, (0, _omit.default)(creatorButtonProps || {}, ['position', 'creatorButtonText'])), {}, {
      onClick: /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee5() {
        var _runFunction;
        var index;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              setLoading(true);
              // 如果不是从顶部开始添加，则插入的索引为当前行数
              index = uuidFields.length; // 如果是顶部，加到第一个，如果不是，为空就是最后一个
              if (position === 'top') index = 0;
              _context5.next = 5;
              return wrapperAction.add((_runFunction = (0, _proUtils.runFunction)(creatorRecord)) !== null && _runFunction !== void 0 ? _runFunction : {}, index);
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
  var readOnlyContext = (0, _react.useContext)(_EditOrReadOnlyContext.EditOrReadOnlyContext);
  var defaultStyle = (0, _objectSpread2.default)({
    width: 'max-content',
    maxWidth: '100%',
    minWidth: '100%'
  }, containerStyle);
  var itemList = (0, _react.useMemo)(function () {
    return uuidFields.map(function (field, index) {
      return /*#__PURE__*/(0, _react.createElement)(_ListItem.ProFormListItem, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        key: field.uuid,
        field: field,
        index: index,
        action: wrapperAction,
        count: uuidFields.length
      }), children);
    });
  }, [children, props, uuidFields, wrapperAction]);
  if (readOnlyContext.mode === 'read' || props.readonly === true) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: itemList
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: defaultStyle,
    className: containerClassName,
    children: [creatorButtonProps !== false && (creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.position) === 'top' && creatorButton, itemList, fieldExtraRender && fieldExtraRender(wrapperAction, meta), creatorButtonProps !== false && (creatorButtonProps === null || creatorButtonProps === void 0 ? void 0 : creatorButtonProps.position) !== 'top' && creatorButton]
  });
};