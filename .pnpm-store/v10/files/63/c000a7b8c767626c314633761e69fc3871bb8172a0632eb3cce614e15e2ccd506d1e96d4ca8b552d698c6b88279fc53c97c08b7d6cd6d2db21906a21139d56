"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProHelpSelect = exports.Highlight = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _HelpProvide = require("./HelpProvide");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["iconClassName"];
/**
 * 在一段文本中高亮显示指定的关键词，将文本和匹配项分别处理并放入数组中，最终返回包含高亮文本的组件。
 * 在组件中使用了正则表达式来匹配关键词。
 * 在渲染文本时，使用了React.createElement来创建元素。
 */
var Highlight = exports.Highlight = function Highlight(_ref) {
  var label = _ref.label,
    words = _ref.words;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var lightCls = getPrefixCls('pro-help-search-list-item-content-light');
  var optionCls = getPrefixCls('pro-help-search-list-item-content');

  // css
  var _useStyle = (0, _proProvider.useStyle)('Highlight', function (token) {
      return (0, _defineProperty2.default)((0, _defineProperty2.default)({}, ".".concat(lightCls), {
        color: token.colorPrimary
      }), ".".concat(optionCls), {
        flex: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      });
    }),
    wrapSSR = _useStyle.wrapSSR;
  if (words.length === 0) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
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
    elements.push(matchText.slice(0, start), /*#__PURE__*/_react.default.createElement('span', {
      className: lightCls
    }, matchText.slice(start, matchLength)));
    matchText = matchText.slice(matchLength);
  }
  return wrapSSR( /*#__PURE__*/_react.default.createElement.apply(_react.default, ['div', {
    title: label,
    className: optionCls
  }].concat(elements)));
};
var ProHelpSelect = exports.ProHelpSelect = function ProHelpSelect(_ref3) {
  var iconClassName = _ref3.iconClassName,
    props = (0, _objectWithoutProperties2.default)(_ref3, _excluded);
  var _useContext2 = (0, _react.useContext)(_HelpProvide.ProHelpProvide),
    dataSource = _useContext2.dataSource;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    keyWord = _useState2[0],
    setKeyWork = _useState2[1];
  var _useContext3 = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext3.hashId;
  var debounceSetKeyWork = (0, _proUtils.useDebounceFn)( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(key) {
      return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
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
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [!open ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)(iconClassName, hashId),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.SearchOutlined, {
        title: "search panel",
        onClick: function onClick() {
          setOpen(true);
        }
      })
    }) : null, open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Select, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
      placeholder: "please input search text",
      showSearch: true
    }, (0, _proUtils.compatibleBorder)(false)), {}, {
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
          label: /*#__PURE__*/(0, _jsxRuntime.jsx)(Highlight, {
            label: item.title,
            words: [keyWord].filter(Boolean)
          }),
          title: item.title,
          value: item.key,
          options: (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(function (sunItem) {
            return {
              label: /*#__PURE__*/(0, _jsxRuntime.jsx)(Highlight, {
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