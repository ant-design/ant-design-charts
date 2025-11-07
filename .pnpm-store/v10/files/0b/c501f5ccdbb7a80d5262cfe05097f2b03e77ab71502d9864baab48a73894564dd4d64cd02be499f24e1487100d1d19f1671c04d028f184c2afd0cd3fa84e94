function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { ReactComponent as FileOutlined } from '@ant-design/icons-svg/inline-svg/outlined/file.svg';
import { ReactComponent as FolderOpenOutlined } from '@ant-design/icons-svg/inline-svg/outlined/folder-open.svg';
import { ReactComponent as FolderOutlined } from '@ant-design/icons-svg/inline-svg/outlined/folder.svg';
import { ReactComponent as MinusSquareOutlined } from '@ant-design/icons-svg/inline-svg/outlined/minus-square.svg';
import { ReactComponent as PlusSquareOutlined } from '@ant-design/icons-svg/inline-svg/outlined/plus-square.svg';
import Tree from 'rc-tree';
import React, { createRef, useEffect, useState } from 'react';
import "./index.less";
function getTreeFromList(nodes) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var data = [];
  [].concat(nodes).forEach(function (node, i) {
    var key = "".concat(prefix ? "".concat(prefix, "-") : '').concat(i);
    switch (node === null || node === void 0 ? void 0 : node.type) {
      case 'ul':
        {
          var _data;
          var parent = ((_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.children) || data;
          var ulLeafs = getTreeFromList(node.props.children || [], key);
          parent.push.apply(parent, _toConsumableArray(ulLeafs));
          break;
        }
      case 'li':
        {
          var _node$props$children, _node$props$children$;
          var hasEmptyUl = (_node$props$children = node.props.children) === null || _node$props$children === void 0 ? void 0 : (_node$props$children$ = _node$props$children.some) === null || _node$props$children$ === void 0 ? void 0 : _node$props$children$.call(_node$props$children, function (child) {
            var _child$props$children;
            return child.type === 'ul' && !((_child$props$children = child.props.children) !== null && _child$props$children !== void 0 && _child$props$children.length);
          });
          var title = [].concat(node.props.children).filter(function (child) {
            return child.type !== 'ul';
          });
          var children = hasEmptyUl ? [] : getTreeFromList(node.props.children, key);
          data.push({
            title: title,
            key: key,
            children: children,
            isLeaf: !hasEmptyUl && !children.length,
            switcherIcon: hasEmptyUl ? /*#__PURE__*/React.createElement("span", {
              className: "tree-switcher-leaf-line"
            }) : undefined
          });
          break;
        }
      default:
    }
  });
  return data;
}
var useListToTree = function useListToTree(nodes) {
  var _useState = useState(getTreeFromList(nodes)),
    _useState2 = _slicedToArray(_useState, 2),
    tree = _useState2[0],
    setTree = _useState2[1];
  useEffect(function () {
    setTree(getTreeFromList(nodes));
  }, [nodes]);
  return tree;
};
var getIcon = function getIcon(props) {
  var _data$children;
  var isLeaf = props.isLeaf,
    expanded = props.expanded,
    data = props.data;
  if (isLeaf) {
    return /*#__PURE__*/React.createElement("span", {
      className: "dumi-default-tree-icon"
    }, /*#__PURE__*/React.createElement(FileOutlined, {
      fill: "currentColor"
    }));
  }
  return !expanded || !(data !== null && data !== void 0 && (_data$children = data.children) !== null && _data$children !== void 0 && _data$children.length) ? /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(FolderOutlined, {
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(FolderOpenOutlined, {
    fill: "currentColor"
  }));
};
var renderSwitcherIcon = function renderSwitcherIcon(props) {
  var isLeaf = props.isLeaf,
    expanded = props.expanded;
  if (isLeaf) {
    return /*#__PURE__*/React.createElement("span", {
      className: "tree-switcher-leaf-line"
    });
  }
  return expanded ? /*#__PURE__*/React.createElement("span", {
    className: "tree-switcher-line-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(MinusSquareOutlined, {
    fill: "currentColor"
  }))) : /*#__PURE__*/React.createElement("span", {
    className: "tree-switcher-line-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(PlusSquareOutlined, {
    fill: "currentColor"
  })));
};

// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};
var getRealHeight = function getRealHeight(node) {
  var scrollHeight = node.scrollHeight;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node ? node.offsetHeight : 0
  };
};
var skipOpacityTransition = function skipOpacityTransition(_, event) {
  return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
};
var initCollapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
};
export default (function (props) {
  var data = useListToTree(props.children);
  var treeRef = /*#__PURE__*/createRef();
  var onClick = function onClick(event, node) {
    var _node$children;
    var isLeaf = node.isLeaf;
    var isEmptyUl = !isLeaf && !((_node$children = node.children) !== null && _node$children !== void 0 && _node$children.length);
    if (isLeaf || isEmptyUl || event.shiftKey || event.metaKey || event.ctrlKey) {
      return;
    }
    treeRef.current.onNodeExpand(event, node);
  };
  return /*#__PURE__*/React.createElement(Tree, {
    className: "dumi-default-tree",
    icon: getIcon,
    ref: treeRef,
    itemHeight: 20,
    showLine: true,
    selectable: false,
    virtual: false,
    motion: _objectSpread(_objectSpread({}, initCollapseMotion), {}, {
      motionAppear: false
    }),
    onClick: onClick,
    treeData: [{
      key: '0',
      title: props.title || '<root>',
      children: data
    }],
    defaultExpandAll: true,
    switcherIcon: renderSwitcherIcon
  });
});