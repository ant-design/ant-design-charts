import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["iconClassName"];
import { SearchOutlined } from '@ant-design/icons';
import { ProProvider, useStyle } from '@ant-design/pro-provider';
import { compatibleBorder, useDebounceFn } from '@ant-design/pro-utils';
import { ConfigProvider, Select } from 'antd';
import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { ProHelpProvide } from "./HelpProvide";

/**
 * 在一段文本中高亮显示指定的关键词，将文本和匹配项分别处理并放入数组中，最终返回包含高亮文本的组件。
 * 在组件中使用了正则表达式来匹配关键词。
 * 在渲染文本时，使用了React.createElement来创建元素。
 */
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var Highlight = function Highlight(_ref) {
  var label = _ref.label,
    words = _ref.words;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var lightCls = getPrefixCls('pro-help-search-list-item-content-light');
  var optionCls = getPrefixCls('pro-help-search-list-item-content');

  // css
  var _useStyle = useStyle('Highlight', function (token) {
      return _defineProperty(_defineProperty({}, ".".concat(lightCls), {
        color: token.colorPrimary
      }), ".".concat(optionCls), {
        flex: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      });
    }),
    wrapSSR = _useStyle.wrapSSR;
  if (words.length === 0) return /*#__PURE__*/_jsx(_Fragment, {
    children: label
  });

  // 创建正则表达式匹配关键词
  var matchKeywordsRE = new RegExp(words.map(function (word) {
    return word.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
  }).join('|'), 'gi');
  var matchText = label;
  var elements = [];

  // 遍历匹配的文本，将匹配项和非匹配项分别处理并放入elements数组中
  while (matchText.length) {
    var match = matchKeywordsRE.exec(matchText);
    if (!match) {
      elements.push(matchText);
      break;
    }
    var start = match.index;
    var matchLength = match[0].length + start;
    elements.push(matchText.slice(0, start), /*#__PURE__*/React.createElement('span', {
      className: lightCls
    }, matchText.slice(start, matchLength)));
    matchText = matchText.slice(matchLength);
  }
  return wrapSSR( /*#__PURE__*/React.createElement.apply(React, ['div', {
    title: label,
    className: optionCls
  }].concat(elements)));
};
export var ProHelpSelect = function ProHelpSelect(_ref3) {
  var iconClassName = _ref3.iconClassName,
    props = _objectWithoutProperties(_ref3, _excluded);
  var _useContext2 = useContext(ProHelpProvide),
    dataSource = _useContext2.dataSource;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    keyWord = _useState2[0],
    setKeyWork = _useState2[1];
  var _useContext3 = useContext(ProProvider),
    hashId = _useContext3.hashId;
  var debounceSetKeyWork = useDebounceFn( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", setKeyWork(key));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }(), 20);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [!open ? /*#__PURE__*/_jsx("div", {
      className: classNames(iconClassName, hashId),
      children: /*#__PURE__*/_jsx(SearchOutlined, {
        title: "search panel",
        onClick: function onClick() {
          setOpen(true);
        }
      })
    }) : null, open ? /*#__PURE__*/_jsx(Select, _objectSpread(_objectSpread(_objectSpread({
      placeholder: "please input search text",
      showSearch: true
    }, compatibleBorder(false)), {}, {
      onBlur: function onBlur() {
        setOpen(false);
      },
      size: "small"
    }, props), {}, {
      onSearch: function onSearch(value) {
        debounceSetKeyWork.cancel();
        debounceSetKeyWork.run(value);
      },
      filterOption: function filterOption(input, option) {
        var _option$title;
        return ((_option$title = option === null || option === void 0 ? void 0 : option.title) !== null && _option$title !== void 0 ? _option$title : '').toLowerCase().includes(input.toLowerCase());
      },
      popupMatchSelectWidth: false,
      options: dataSource.map(function (item) {
        var _item$children;
        return {
          label: /*#__PURE__*/_jsx(Highlight, {
            label: item.title,
            words: [keyWord].filter(Boolean)
          }),
          title: item.title,
          value: item.key,
          options: (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(function (sunItem) {
            return {
              label: /*#__PURE__*/_jsx(Highlight, {
                label: sunItem.title,
                words: [keyWord].filter(Boolean)
              }),
              title: sunItem.title,
              value: sunItem.key,
              dataItemKey: item.key
            };
          })
        };
      })
    })) : null]
  });
};