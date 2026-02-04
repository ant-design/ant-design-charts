import { CheckOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import { useMemo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var BlockCheckbox = function BlockCheckbox(_ref) {
  var value = _ref.value,
    configType = _ref.configType,
    onChange = _ref.onChange,
    list = _ref.list,
    prefixCls = _ref.prefixCls,
    hashId = _ref.hashId;
  var baseClassName = "".concat(prefixCls, "-block-checkbox");
  var dom = useMemo(function () {
    var domList = (list || []).map(function (item) {
      return /*#__PURE__*/_jsx(Tooltip, {
        title: item.title,
        children: /*#__PURE__*/_jsxs("div", {
          className: classNames(hashId, "".concat(baseClassName, "-item"), "".concat(baseClassName, "-item-").concat(item.key), "".concat(baseClassName, "-").concat(configType, "-item")),
          onClick: function onClick() {
            return onChange(item.key);
          },
          children: [/*#__PURE__*/_jsx(CheckOutlined, {
            className: "".concat(baseClassName, "-selectIcon ").concat(hashId).trim(),
            style: {
              display: value === item.key ? 'block' : 'none'
            }
          }), item !== null && item !== void 0 && item.icon ? /*#__PURE__*/_jsx("div", {
            className: "".concat(baseClassName, "-icon ").concat(hashId).trim(),
            children: item.icon
          }) : null]
        })
      }, item.key);
    });
    return domList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, list === null || list === void 0 ? void 0 : list.length, onChange]);
  return /*#__PURE__*/_jsx("div", {
    className: classNames(baseClassName, hashId),
    children: dom
  });
};
export { BlockCheckbox };