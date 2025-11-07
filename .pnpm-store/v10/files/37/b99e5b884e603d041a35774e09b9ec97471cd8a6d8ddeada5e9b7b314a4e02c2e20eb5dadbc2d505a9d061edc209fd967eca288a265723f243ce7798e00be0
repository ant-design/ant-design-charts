function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import { useSiteData } from 'dumi';
import React from 'react';
function builtInProcessor(entity, entryExports) {
  var mod;
  switch (entity.$$__type) {
    case 'function':
      // eslint-disable-next-line no-eval
      return eval(entity.$$__body.sourceCode);
    case 'element':
      // find child component from entry exports
      mod = entity.$$__body.componentName.split('.').reduce(function (col, cur) {
        return col[cur];
      }, entryExports);

      // fallback to HTML tag
      if (mod === undefined) return entity.$$__body.componentName;

      // support pure render for antd components
      return '_InternalPanelDoNotUseOrYouWillBeFired' in mod ? mod._InternalPanelDoNotUseOrYouWillBeFired : mod;
  }
}
function deepReplace(value, entityProcessor) {
  // transform array props
  if (Array.isArray(value)) {
    return value.map(function (e) {
      return deepReplace(e, entityProcessor);
    });
  }

  // transform element props
  if (_typeof(value) === 'object' && (value === null || value === void 0 ? void 0 : value.$$__type) === 'element') {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return translatePresetToReact(value.$$__body, entityProcessor);
  }

  // transform pure object props
  if (_typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Object]') {
    return Object.entries(value).reduce(function (col, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      return _objectSpread(_objectSpread({}, col), {}, _defineProperty({}, key, deepReplace(value, entityProcessor)));
    }, {});
  }
  return value;
}
function translatePresetToReact(value, processor) {
  var props = value.props,
    size = value.size;
  var Component = processor({
    $$__type: 'element',
    $$__body: value
  });
  return /*#__PURE__*/React.createElement(Component, deepReplace(_objectSpread(_objectSpread({}, props), {}, {
    style: _objectSpread(_objectSpread({}, props.style), size)
  }), processor));
}
export var AtomRenderer = function AtomRenderer(props) {
  var _useSiteData = useSiteData(),
    entryExports = _useSiteData.entryExports;
  switch (props.type) {
    case 'COMPONENT':
      return translatePresetToReact(props.value, function (entity) {
        var _props$processor, _props$processor2;
        return (// support custom processor
          (_props$processor = (_props$processor2 = props.processor) === null || _props$processor2 === void 0 ? void 0 : _props$processor2.call(props, entity, entryExports)) !== null && _props$processor !== void 0 ? _props$processor :
          // fallback to built-in processor
          builtInProcessor(entity, entryExports)
        );
      });
    default:
      // TODO: handle FUNCTION type
      return /*#__PURE__*/React.createElement(React.Fragment, null, props.type, " atom is not supported.");
  }
};