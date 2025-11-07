"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _set = _interopRequireDefault(require("rc-util/lib/utils/set"));
var _react = require("react");
var _List = require("../List");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "originDependencies", "children", "ignoreFormListField"];
var ProFormDependency = function ProFormDependency(_ref) {
  var nameList = _ref.name,
    _ref$originDependenci = _ref.originDependencies,
    originDependencies = _ref$originDependenci === void 0 ? nameList : _ref$originDependenci,
    _children = _ref.children,
    ignoreFormListField = _ref.ignoreFormListField,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var context = (0, _react.useContext)(_proUtils.ProFormContext);
  // ProFromList 的 field，里面有name和key
  var formListField = (0, _react.useContext)(_List.FormListContext);

  // flatten each name into an (string | number)[]
  var flattenNames = (0, _react.useMemo)(function () {
    return nameList.map(function (itemName) {
      var _formListField$listNa;
      var name = [itemName];

      // ignoreFormListField为 true 或 formListField.name === undefined 时
      // 应从全局取值，要将 names 中各项的路径前缀(formListField.listName)忽略
      if (!ignoreFormListField && formListField.name !== undefined && (_formListField$listNa = formListField.listName) !== null && _formListField$listNa !== void 0 && _formListField$listNa.length) {
        name.unshift(formListField.listName);
      }
      return name.flat(1);
    });
  }, [formListField.listName, formListField.name, ignoreFormListField, nameList === null || nameList === void 0 ? void 0 : nameList.toString()]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
    noStyle: true,
    shouldUpdate: function shouldUpdate(prevValues, nextValues, info) {
      if (typeof rest.shouldUpdate === 'boolean') {
        return rest.shouldUpdate;
      } else if (typeof rest.shouldUpdate === 'function') {
        var _rest$shouldUpdate;
        return (_rest$shouldUpdate = rest.shouldUpdate) === null || _rest$shouldUpdate === void 0 ? void 0 : _rest$shouldUpdate.call(rest, prevValues, nextValues, info);
      }
      return flattenNames.some(function (name) {
        return !(0, _proUtils.isDeepEqualReact)((0, _get.default)(prevValues, name), (0, _get.default)(nextValues, name));
      });
    },
    children: function children(form) {
      var values = {};
      for (var i = 0; i < nameList.length; i++) {
        var _context$getFieldForm;
        var itemName = flattenNames[i],
          itemOriginName = originDependencies[i];
        var finalName = [itemOriginName].flat(1);
        var value = (_context$getFieldForm = context.getFieldFormatValueObject) === null || _context$getFieldForm === void 0 ? void 0 : _context$getFieldForm.call(context, itemName);
        if (value && Object.keys(value).length) {
          // transform 会生成多余的value，这里需要注入一下
          values = (0, _proUtils.merge)({}, values, value);
          if ((0, _get.default)(value, itemName)) {
            values = (0, _set.default)(values, finalName, (0, _get.default)(value, itemName));
          }
        } else {
          var _form$getFieldValue;
          value = (_form$getFieldValue = form.getFieldValue) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.call(form, itemName);
          if (typeof value !== 'undefined') {
            values = (0, _set.default)(values, finalName, value);
          }
        }
      }
      return _children === null || _children === void 0 ? void 0 : _children(values, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, form), context));
    }
  }));
};
ProFormDependency.displayName = 'ProFormDependency';
var _default = exports.default = ProFormDependency;