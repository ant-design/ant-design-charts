function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import Tabs from "../../slots/Tabs";
import SourceCode from 'dumi/theme/builtins/SourceCode';
import toArray from 'rc-util/lib/Children/toArray';
import React from 'react';
function CodeGroup(props) {
  var children = props.children;
  var usefulChildren = toArray(children).filter(function (child) {
    var _child$type;
    return _typeof(child) === 'object' && typeof child.type === 'function' && ((_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name) === SourceCode.name;
  });
  var items = usefulChildren.map(function (child, idx) {
    var _child$props, _child$key;
    var _ref = (_child$props = child.props) !== null && _child$props !== void 0 ? _child$props : {},
      lang = _ref.lang,
      title = _ref.title;
    return {
      key: String((_child$key = child.key) !== null && _child$key !== void 0 ? _child$key : idx),
      label: title || lang || 'txt',
      // fallback to txt if no lang and title
      children: child
    };
  });
  return /*#__PURE__*/React.createElement(Tabs, {
    className: "dumi-default-code-group",
    items: items
  });
}
export default CodeGroup;