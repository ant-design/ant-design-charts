import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["rightContentRender", "avatarProps", "actionsRender", "headerContentRender"],
  _excluded2 = ["title", "render"];
import { useDebounceFn } from '@ant-design/pro-utils';
import { Avatar, ConfigProvider } from 'antd';
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';
import React, { useContext, useMemo, useState } from 'react';
import { useStyle } from "./rightContentStyle";
/**
 * 抽离出来是为了防止 rightSize 经常改变导致菜单 render
 *
 * @param param0
 */
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ActionsContent = function ActionsContent(_ref) {
  var rightContentRender = _ref.rightContentRender,
    avatarProps = _ref.avatarProps,
    actionsRender = _ref.actionsRender,
    headerContentRender = _ref.headerContentRender,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = "".concat(getPrefixCls(), "-pro-global-header");
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = useState('auto'),
    _useState2 = _slicedToArray(_useState, 2),
    rightSize = _useState2[0],
    setRightSize = _useState2[1];
  var avatarDom = useMemo(function () {
    if (!avatarProps) return null;
    var title = avatarProps.title,
      render = avatarProps.render,
      rest = _objectWithoutProperties(avatarProps, _excluded2);
    var domList = [rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/_createElement(Avatar, _objectSpread(_objectSpread({}, rest), {}, {
      size: 28,
      key: "avatar"
    })) : null, title ? /*#__PURE__*/_jsx("span", {
      style: {
        marginInlineStart: 8
      },
      children: title
    }, "name") : undefined];
    if (render) {
      return render(avatarProps, /*#__PURE__*/_jsx("div", {
        children: domList
      }), props);
    }
    return /*#__PURE__*/_jsx("div", {
      children: domList
    });
  }, [avatarProps]);
  var rightActionsRender = actionsRender || avatarDom ? function (restParams) {
    var doms = actionsRender && (actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(restParams));
    if (!doms && !avatarDom) return null;
    if (!Array.isArray(doms)) return wrapSSR( /*#__PURE__*/_jsxs("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
      children: [doms, avatarDom && /*#__PURE__*/_jsx("span", {
        className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
        children: avatarDom
      })]
    }));
    return wrapSSR( /*#__PURE__*/_jsxs("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
      children: [doms.filter(Boolean).map(function (dom, index) {
        var hideHover = false;
        // 如果配置了 hideHover 就不展示 hover 效果了
        if ( /*#__PURE__*/React.isValidElement(dom)) {
          var _dom$props;
          hideHover = !!(dom !== null && dom !== void 0 && (_dom$props = dom.props) !== null && _dom$props !== void 0 && _dom$props['aria-hidden']);
        }
        return /*#__PURE__*/_jsx("div", {
          className: classNames("".concat(prefixCls, "-header-actions-item ").concat(hashId), _defineProperty({}, "".concat(prefixCls, "-header-actions-hover"), !hideHover)),
          children: dom
        }, index);
      }), avatarDom && /*#__PURE__*/_jsx("span", {
        className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
        children: avatarDom
      })]
    }));
  } : undefined;
  /** 减少一下渲染的次数 */
  var setRightSizeDebounceFn = useDebounceFn( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(width) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
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
  return /*#__PURE__*/_jsx("div", {
    className: "".concat(prefixCls, "-right-content ").concat(hashId).trim(),
    style: {
      minWidth: rightSize,
      height: '100%'
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        height: '100%'
      },
      children: /*#__PURE__*/_jsx(ResizeObserver, {
        onResize: function onResize(_ref3) {
          var width = _ref3.width;
          setRightSizeDebounceFn.run(width);
        },
        children: contentRender ? /*#__PURE__*/_jsx("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'flex-end'
          },
          children: contentRender(_objectSpread(_objectSpread({}, props), {}, {
            // 测试专用
            //@ts-ignore
            rightContentSize: rightSize
          }))
        }) : null
      })
    })
  });
};