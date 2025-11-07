"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsContent = void 0;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));
var _react = _interopRequireWildcard(require("react"));
var _rightContentStyle = require("./rightContentStyle");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["rightContentRender", "avatarProps", "actionsRender", "headerContentRender"],
  _excluded2 = ["title", "render"];
/**
 * 抽离出来是为了防止 rightSize 经常改变导致菜单 render
 *
 * @param param0
 */
var ActionsContent = exports.ActionsContent = function ActionsContent(_ref) {
  var rightContentRender = _ref.rightContentRender,
    avatarProps = _ref.avatarProps,
    actionsRender = _ref.actionsRender,
    headerContentRender = _ref.headerContentRender,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = "".concat(getPrefixCls(), "-pro-global-header");
  var _useStyle = (0, _rightContentStyle.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = (0, _react.useState)('auto'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    rightSize = _useState2[0],
    setRightSize = _useState2[1];
  var avatarDom = (0, _react.useMemo)(function () {
    if (!avatarProps) return null;
    var title = avatarProps.title,
      render = avatarProps.render,
      rest = (0, _objectWithoutProperties2.default)(avatarProps, _excluded2);
    var domList = [rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/(0, _react.createElement)(_antd.Avatar, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
      size: 28,
      key: "avatar"
    })) : null, title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: {
        marginInlineStart: 8
      },
      children: title
    }, "name") : undefined];
    if (render) {
      return render(avatarProps, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: domList
      }), props);
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: domList
    });
  }, [avatarProps]);
  var rightActionsRender = actionsRender || avatarDom ? function (restParams) {
    var doms = actionsRender && (actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(restParams));
    if (!doms && !avatarDom) return null;
    if (!Array.isArray(doms)) return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
      children: [doms, avatarDom && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
        children: avatarDom
      })]
    }));
    return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
      children: [doms.filter(Boolean).map(function (dom, index) {
        var hideHover = false;
        // 如果配置了 hideHover 就不展示 hover 效果了
        if ( /*#__PURE__*/_react.default.isValidElement(dom)) {
          var _dom$props;
          hideHover = !!(dom !== null && dom !== void 0 && (_dom$props = dom.props) !== null && _dom$props !== void 0 && _dom$props['aria-hidden']);
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames.default)("".concat(prefixCls, "-header-actions-item ").concat(hashId), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-header-actions-hover"), !hideHover)),
          children: dom
        }, index);
      }), avatarDom && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
        children: avatarDom
      })]
    }));
  } : undefined;
  /** 减少一下渲染的次数 */
  var setRightSizeDebounceFn = (0, _proUtils.useDebounceFn)( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(width) {
      return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setRightSize(width);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 160);
  var contentRender = rightActionsRender || rightContentRender;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(prefixCls, "-right-content ").concat(hashId).trim(),
    style: {
      minWidth: rightSize,
      height: '100%'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        height: '100%'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_rcResizeObserver.default, {
        onResize: function onResize(_ref3) {
          var width = _ref3.width;
          setRightSizeDebounceFn.run(width);
        },
        children: contentRender ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'flex-end'
          },
          children: contentRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            // 测试专用
            //@ts-ignore
            rightContentSize: rightSize
          }))
        }) : null
      })
    })
  });
};