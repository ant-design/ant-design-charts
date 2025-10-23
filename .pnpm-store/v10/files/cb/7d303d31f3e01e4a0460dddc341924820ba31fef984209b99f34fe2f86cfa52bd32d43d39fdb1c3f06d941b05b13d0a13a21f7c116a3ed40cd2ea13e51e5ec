import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { ProProvider } from '@ant-design/pro-provider';
import { useDebounceFn } from '@ant-design/pro-utils';
import classNames from 'classnames';
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { AsyncContentPanel } from "./AsyncContentPanel";
import { ProHelpProvide } from "./HelpProvide";
import { RenderContentPanel } from "./RenderContentPanel";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 控制具体的帮助文档显示组件
 * selectedKey 来展示对应的内容。它会根据不同的item.valueType值来展示不同的内容，包括标题、图片、超链接等。
 * @param ProHelpContentPanelProps
 * @returns
 */
export var ProHelpContentPanel = function ProHelpContentPanel(_ref) {
  var className = _ref.className,
    parentItem = _ref.parentItem,
    selectedKey = _ref.selectedKey,
    onScroll = _ref.onScroll;
  var _useContext = useContext(ProHelpProvide),
    dataSource = _useContext.dataSource;
  var _useContext2 = useContext(ProProvider),
    hashId = _useContext2.hashId;
  // 记录每个面板的滚动高度
  var scrollHeightMap = useRef(new Map());
  var divRef = useRef(null);
  useEffect(function () {
    if (!selectedKey || !(parentItem !== null && parentItem !== void 0 && parentItem.infiniteScrollFull)) return;
    var div = scrollHeightMap.current.get(selectedKey);
    if (div !== null && div !== void 0 && div.offsetTop && divRef.current) {
      if (Math.abs(divRef.current.scrollTop - (div === null || div === void 0 ? void 0 : div.offsetTop) + 40) > (div === null || div === void 0 ? void 0 : div.clientHeight)) {
        divRef.current.scrollTop = (div === null || div === void 0 ? void 0 : div.offsetTop) - 40;
      }
    }
  }, [selectedKey]);

  /**
   * debounce（防抖）处理滚动事件，并根据滚动位置来实现找到当前列表的 key
   */
  var onScrollEvent = useDebounceFn( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var dom, list;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dom = e === null || e === void 0 ? void 0 : e.target; // 根据滚动位置来找到当前列表的 key
            list = Array.from(scrollHeightMap.current.entries()).find(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                value = _ref4[1];
              if ((dom === null || dom === void 0 ? void 0 : dom.scrollTop) < value.offsetTop) {
                return true;
              }
              return false;
            });
            if (list) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            // 如果获取的 key 和当前 key 不同丢弃掉
            if (list.at(0) !== selectedKey) {
              // 如果不同，则触发 onScroll 事件
              onScroll === null || onScroll === void 0 || onScroll(list.at(0));
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 200);

  /**
   * 当 parentItem 组件中的 infiniteScrollFull 属性变化时
   * 如果该属性为真值，则开始监听滚动事件；
   * 如果为假值，则停止监听滚动事件并取消防抖处理。
   * 在监听滚动事件时，可以实现分页（瀑布流）效果。同时，该代码还会根据 selectedKey 的变化来触发跳转
   */
  useEffect(function () {
    var _divRef$current;
    if (!(parentItem !== null && parentItem !== void 0 && parentItem.infiniteScrollFull)) return;
    onScrollEvent.cancel();
    (_divRef$current = divRef.current) === null || _divRef$current === void 0 || _divRef$current.addEventListener('scroll', onScrollEvent.run, false);
    return function () {
      var _divRef$current2;
      onScrollEvent.cancel();
      (_divRef$current2 = divRef.current) === null || _divRef$current2 === void 0 || _divRef$current2.removeEventListener('scroll', onScrollEvent.run, false);
    };
  }, [parentItem === null || parentItem === void 0 ? void 0 : parentItem.infiniteScrollFull, selectedKey]);

  /**
   * 生成一个  Map  能根据 key 找到所有的 index
   */
  var dataSourceMap = useMemo(function () {
    var map = new Map();
    dataSource.forEach(function (page) {
      page.children.forEach(function (item) {
        map.set(item.key || item.title, _objectSpread(_objectSpread({}, item), {}, {
          parentKey: page.key
        }));
      });
    });
    return map;
  }, [dataSource]);
  var renderItem = function renderItem(item) {
    if (item !== null && item !== void 0 && item.asyncLoad) {
      return /*#__PURE__*/_jsx("div", {
        className: classNames(className, hashId),
        id: item.title,
        children: /*#__PURE__*/_jsx(AsyncContentPanel, {
          item: item,
          onInit: function onInit(ref) {
            if (!scrollHeightMap.current) return;
            scrollHeightMap.current.set(item.key, ref);
          }
        }, item === null || item === void 0 ? void 0 : item.key)
      });
    }
    return /*#__PURE__*/_jsx("div", {
      className: classNames(className, hashId),
      id: item.title,
      children: /*#__PURE__*/_jsx(RenderContentPanel, {
        onInit: function onInit(ref) {
          if (!scrollHeightMap.current) return;
          scrollHeightMap.current.set(item.key, ref);
        },
        dataSourceChildren: (item === null || item === void 0 ? void 0 : item.children) || []
      })
    });
  };
  if (parentItem && parentItem.infiniteScrollFull) {
    var _parentItem$children;
    return /*#__PURE__*/_jsx("div", {
      ref: divRef,
      className: classNames("".concat(className, "-infinite-scroll"), hashId),
      style: {
        overflow: 'auto'
      },
      children: (_parentItem$children = parentItem.children) === null || _parentItem$children === void 0 ? void 0 : _parentItem$children.map(function (item) {
        return /*#__PURE__*/_jsx(React.Fragment, {
          children: renderItem(item)
        }, item.key);
      })
    });
  }
  return renderItem(dataSourceMap.get(selectedKey));
};