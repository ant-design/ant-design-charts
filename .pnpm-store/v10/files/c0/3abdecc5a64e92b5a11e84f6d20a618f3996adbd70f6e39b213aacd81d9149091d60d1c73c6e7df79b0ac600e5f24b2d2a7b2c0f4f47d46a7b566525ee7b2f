import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["name", "originDependencies", "children", "ignoreFormListField"];
import { isDeepEqualReact, merge, ProFormContext } from '@ant-design/pro-utils';
import { Form } from 'antd';
import get from "rc-util/es/utils/get";
import set from "rc-util/es/utils/set";
import { useContext, useMemo } from 'react';
import { FormListContext } from "../List";
import { jsx as _jsx } from "react/jsx-runtime";
var ProFormDependency = function ProFormDependency(_ref) {
  var nameList = _ref.name,
    _ref$originDependenci = _ref.originDependencies,
    originDependencies = _ref$originDependenci === void 0 ? nameList : _ref$originDependenci,
    _children = _ref.children,
    ignoreFormListField = _ref.ignoreFormListField,
    rest = _objectWithoutProperties(_ref, _excluded);
  var context = useContext(ProFormContext);
  // ProFromList 的 field，里面有name和key
  var formListField = useContext(FormListContext);

  // flatten each name into an (string | number)[]
  var flattenNames = useMemo(function () {
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
  return /*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread({}, rest), {}, {
    noStyle: true,
    shouldUpdate: function shouldUpdate(prevValues, nextValues, info) {
      if (typeof rest.shouldUpdate === 'boolean') {
        return rest.shouldUpdate;
      } else if (typeof rest.shouldUpdate === 'function') {
        var _rest$shouldUpdate;
        return (_rest$shouldUpdate = rest.shouldUpdate) === null || _rest$shouldUpdate === void 0 ? void 0 : _rest$shouldUpdate.call(rest, prevValues, nextValues, info);
      }
      return flattenNames.some(function (name) {
        return !isDeepEqualReact(get(prevValues, name), get(nextValues, name));
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
          values = merge({}, values, value);
          if (get(value, itemName)) {
            values = set(values, finalName, get(value, itemName));
          }
        } else {
          var _form$getFieldValue;
          value = (_form$getFieldValue = form.getFieldValue) === null || _form$getFieldValue === void 0 ? void 0 : _form$getFieldValue.call(form, itemName);
          if (typeof value !== 'undefined') {
            values = set(values, finalName, value);
          }
        }
      }
      return _children === null || _children === void 0 ? void 0 : _children(values, _objectSpread(_objectSpread({}, form), context));
    }
  }));
};
ProFormDependency.displayName = 'ProFormDependency';
export default ProFormDependency;