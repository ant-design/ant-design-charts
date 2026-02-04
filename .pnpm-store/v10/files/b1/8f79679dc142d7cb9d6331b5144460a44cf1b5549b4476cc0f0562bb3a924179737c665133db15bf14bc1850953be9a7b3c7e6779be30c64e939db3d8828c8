"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProFormListItem = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var _set = _interopRequireDefault(require("rc-util/lib/utils/set"));
var _react = _interopRequireWildcard(require("react"));
var _ = require(".");
var _EditOrReadOnlyContext = require("../../BaseForm/EditOrReadOnlyContext");
var _helpers = require("../../helpers");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["creatorButtonProps", "deleteIconProps", "copyIconProps", "arrowSort", "upIconProps", "downIconProps", "itemContainerRender", "itemRender", "alwaysShowItemLabel", "prefixCls", "creatorRecord", "action", "actionGuard", "children", "actionRender", "fields", "meta", "field", "index", "formInstance", "originName", "containerClassName", "containerStyle", "min", "max", "count"];
/** Antd 自带的toArray 不支持方法，所以需要自己搞一个 */
var listToArray = function listToArray(children) {
  if (Array.isArray(children)) {
    return children;
  }
  if (typeof children === 'function') {
    return [children];
  }
  return (0, _toArray.default)(children);
};
var ProFormListItem = exports.ProFormListItem = function ProFormListItem(props) {
  var _ConfigProvider$useCo, _formInstance$getFiel2;
  var creatorButtonProps = props.creatorButtonProps,
    deleteIconProps = props.deleteIconProps,
    copyIconProps = props.copyIconProps,
    arrowSort = props.arrowSort,
    upIconProps = props.upIconProps,
    downIconProps = props.downIconProps,
    itemContainerRender = props.itemContainerRender,
    itemRender = props.itemRender,
    alwaysShowItemLabel = props.alwaysShowItemLabel,
    prefixCls = props.prefixCls,
    creatorRecord = props.creatorRecord,
    action = props.action,
    actionGuard = props.actionGuard,
    children = props.children,
    actionRender = props.actionRender,
    fields = props.fields,
    meta = props.meta,
    field = props.field,
    index = props.index,
    formInstance = props.formInstance,
    originName = props.originName,
    containerClassName = props.containerClassName,
    containerStyle = props.containerStyle,
    min = props.min,
    max = props.max,
    count = props.count,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext.hashId;
  var _ref = ((_ConfigProvider$useCo = _antd.ConfigProvider.useConfig) === null || _ConfigProvider$useCo === void 0 ? void 0 : _ConfigProvider$useCo.call(_antd.ConfigProvider)) || {
      componentSize: 'middle'
    },
    componentSize = _ref.componentSize;
  var listContext = (0, _react.useContext)(_.FormListContext);
  var unmountedRef = (0, _react.useRef)(false);
  var _useContext2 = (0, _react.useContext)(_EditOrReadOnlyContext.EditOrReadOnlyContext),
    mode = _useContext2.mode;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    loadingRemove = _useState2[0],
    setLoadingRemove = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    loadingCopy = _useState4[0],
    setLoadingCopy = _useState4[1];
  (0, _react.useEffect)(function () {
    return function () {
      unmountedRef.current = true;
    };
  }, []);
  var getCurrentRowData = function getCurrentRowData() {
    return formInstance.getFieldValue([listContext.listName, originName, index === null || index === void 0 ? void 0 : index.toString()].flat(1).filter(function (item) {
      return item !== null && item !== undefined;
    }));
  };
  var formListAction = {
    getCurrentRowData: getCurrentRowData,
    setCurrentRowData: function setCurrentRowData(data) {
      var _formInstance$getFiel;
      var oldTableDate = (formInstance === null || formInstance === void 0 || (_formInstance$getFiel = formInstance.getFieldsValue) === null || _formInstance$getFiel === void 0 ? void 0 : _formInstance$getFiel.call(formInstance)) || {};
      var rowKeyName = [listContext.listName, originName, index === null || index === void 0 ? void 0 : index.toString()].flat(1).filter(function (item) {
        return item !== null && item !== undefined;
      });
      var updateValues = (0, _set.default)(oldTableDate, rowKeyName, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, getCurrentRowData()), data || {}));
      return formInstance.setFieldsValue(updateValues);
    }
  };
  var childrenArray = listToArray(children).map(function (childrenItem) {
    if (typeof childrenItem === 'function') {
      return childrenItem === null || childrenItem === void 0 ? void 0 : childrenItem(field, index, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, action), formListAction), count);
    }
    return childrenItem;
  }).map(function (childrenItem, itemIndex) {
    if ( /*#__PURE__*/_react.default.isValidElement(childrenItem)) {
      var _childrenItem$props;
      return /*#__PURE__*/_react.default.cloneElement(childrenItem, (0, _objectSpread2.default)({
        key: childrenItem.key || (childrenItem === null || childrenItem === void 0 || (_childrenItem$props = childrenItem.props) === null || _childrenItem$props === void 0 ? void 0 : _childrenItem$props.name) || itemIndex
      }, (childrenItem === null || childrenItem === void 0 ? void 0 : childrenItem.props) || {}));
    }
    return childrenItem;
  });
  var copyIcon = (0, _react.useMemo)(function () {
    if (mode === 'read') return null;
    /** 复制按钮的配置 */
    if (copyIconProps === false || max === count) return null;
    var _ref2 = copyIconProps,
      _ref2$Icon = _ref2.Icon,
      Icon = _ref2$Icon === void 0 ? _icons.CopyOutlined : _ref2$Icon,
      tooltipText = _ref2.tooltipText;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
      title: tooltipText,
      children: loadingCopy ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.LoadingOutlined, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
        className: (0, _classnames.default)("".concat(prefixCls, "-action-icon action-copy"), hashId),
        onClick: /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
          var row;
          return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                setLoadingCopy(true);
                row = formInstance === null || formInstance === void 0 ? void 0 : formInstance.getFieldValue([listContext.listName, originName, field.name].filter(function (item) {
                  return item !== undefined;
                }).flat(1));
                _context.next = 4;
                return action.add(row, count);
              case 4:
                setLoadingCopy(false);
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))
      })
    }, "copy");
  }, [copyIconProps, max, count, loadingCopy, prefixCls, hashId, formInstance, listContext.listName, field.name, originName, action]);
  var deleteIcon = (0, _react.useMemo)(function () {
    if (mode === 'read') return null;
    if (deleteIconProps === false || min === count) return null;
    var _ref4 = deleteIconProps,
      _ref4$Icon = _ref4.Icon,
      Icon = _ref4$Icon === void 0 ? _icons.DeleteOutlined : _ref4$Icon,
      tooltipText = _ref4.tooltipText;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
      title: tooltipText,
      children: loadingRemove ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.LoadingOutlined, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
        className: (0, _classnames.default)("".concat(prefixCls, "-action-icon action-remove"), hashId),
        onClick: /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2() {
          return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                setLoadingRemove(true);
                _context2.next = 3;
                return action.remove(field.name);
              case 3:
                if (!unmountedRef.current) {
                  setLoadingRemove(false);
                }
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))
      })
    }, "delete");
  }, [deleteIconProps, min, count, loadingRemove, prefixCls, hashId, action, field.name]);
  var upIcon = (0, _react.useMemo)(function () {
    if (!arrowSort) {
      return null;
    }
    if (mode === 'read') return null;
    if (upIconProps === false) return null;
    var toIndex = index - 1;
    if (toIndex < 0) {
      return null;
    }
    var _ref6 = upIconProps,
      _ref6$Icon = _ref6.Icon,
      Icon = _ref6$Icon === void 0 ? _icons.ArrowUpOutlined : _ref6$Icon,
      tooltipText = _ref6.tooltipText;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
      title: tooltipText,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
        className: (0, _classnames.default)("".concat(prefixCls, "-action-icon action-up"), hashId),
        onClick: /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee3() {
          return (0, _regeneratorRuntime2.default)().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return action.move(index, toIndex);
              case 2:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))
      })
    }, "up");
  }, [upIconProps, prefixCls, hashId, action, arrowSort]);
  var downIcon = (0, _react.useMemo)(function () {
    if (!arrowSort) {
      return null;
    }
    if (mode === 'read') return null;
    if (downIconProps === false) return null;
    var toIndex = index + 1;
    if (toIndex >= count) {
      return null;
    }
    var _ref8 = downIconProps,
      _ref8$Icon = _ref8.Icon,
      Icon = _ref8$Icon === void 0 ? _icons.ArrowDownOutlined : _ref8$Icon,
      tooltipText = _ref8.tooltipText;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
      title: tooltipText,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
        className: (0, _classnames.default)("".concat(prefixCls, "-action-icon action-down"), hashId),
        onClick: /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee4() {
          return (0, _regeneratorRuntime2.default)().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return action.move(index, toIndex);
              case 2:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))
      })
    }, "down");
  }, [upIconProps, prefixCls, hashId, action, arrowSort]);
  var defaultActionDom = (0, _react.useMemo)(function () {
    return [copyIcon, deleteIcon, upIcon, downIcon].filter(function (item) {
      return item !== null && item !== undefined;
    });
  }, [copyIcon, deleteIcon, upIcon, downIcon]);
  var actions = (actionRender === null || actionRender === void 0 ? void 0 : actionRender(field, action, defaultActionDom, count)) || defaultActionDom;
  var dom = actions.length > 0 && mode !== 'read' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-action"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-action-small"), componentSize === 'small'), hashId),
    children: actions
  }) : null;
  var options = {
    name: rest.name,
    field: field,
    index: index,
    record: formInstance === null || formInstance === void 0 || (_formInstance$getFiel2 = formInstance.getFieldValue) === null || _formInstance$getFiel2 === void 0 ? void 0 : _formInstance$getFiel2.call(formInstance, [listContext.listName, originName, field.name].filter(function (item) {
      return item !== undefined;
    }).flat(1)),
    fields: fields,
    operation: action,
    meta: meta
  };
  var _useGridHelpers = (0, _helpers.useGridHelpers)(),
    grid = _useGridHelpers.grid;
  var itemContainer = (itemContainerRender === null || itemContainerRender === void 0 ? void 0 : itemContainerRender(childrenArray, options)) || childrenArray;
  var contentDom = (itemRender === null || itemRender === void 0 ? void 0 : itemRender({
    listDom: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-container"), containerClassName, hashId),
      style: (0, _objectSpread2.default)({
        width: grid ? '100%' : undefined
      }, containerStyle),
      children: itemContainer
    }),
    action: dom
  }, options)) || /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-item"), hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-item-default"), alwaysShowItemLabel === undefined), "".concat(prefixCls, "-item-show-label"), alwaysShowItemLabel)),
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-container"), containerClassName, hashId),
      style: (0, _objectSpread2.default)({
        width: grid ? '100%' : undefined
      }, containerStyle),
      children: itemContainer
    }), dom]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.FormListContext.Provider, {
    value: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, field), {}, {
      listName: [listContext.listName, originName, field.name].filter(function (item) {
        return item !== undefined;
      }).flat(1)
    }),
    children: contentDom
  });
};