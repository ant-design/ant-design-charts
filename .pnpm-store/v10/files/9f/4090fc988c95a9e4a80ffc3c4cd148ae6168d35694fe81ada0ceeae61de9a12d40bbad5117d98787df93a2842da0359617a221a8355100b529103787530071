"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcUtil = require("rc-util");
var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));
var React = _interopRequireWildcard(require("react"));
var _xProvider = require("../x-provider");
var _Bubble = _interopRequireWildcard(require("./Bubble"));
var _useListData = _interopRequireDefault(require("./hooks/useListData"));
var _style = _interopRequireDefault(require("./style"));
const BubbleListItem = ({
  _key,
  ...restProps
}, ref) => /*#__PURE__*/React.createElement(_Bubble.default, (0, _extends2.default)({}, restProps, {
  _key: _key,
  ref: node => {
    if (node) {
      ref.current[_key] = node;
    } else {
      delete ref.current?.[_key];
    }
  }
}));
const MemoBubbleListItem = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(BubbleListItem));
const TOLERANCE = 1;
const BubbleList = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    className,
    items,
    autoScroll = true,
    roles,
    onScroll,
    ...restProps
  } = props;
  const domProps = (0, _pickAttrs.default)(restProps, {
    attr: true,
    aria: true
  });

  // ============================= Refs =============================
  const listRef = React.useRef(null);
  const bubbleRefs = React.useRef({});

  // ============================ Prefix ============================
  const {
    getPrefixCls
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('bubble', customizePrefixCls);
  const listPrefixCls = `${prefixCls}-list`;
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);

  // ============================ Typing ============================
  const [initialized, setInitialized] = React.useState(false);
  React.useEffect(() => {
    setInitialized(true);
    return () => {
      setInitialized(false);
    };
  }, []);

  // ============================= Data =============================
  const mergedData = (0, _useListData.default)(items, roles);

  // ============================ Scroll ============================
  // Is current scrollTop at the end. User scroll will make this false.
  const [scrollReachEnd, setScrollReachEnd] = React.useState(true);
  const [updateCount, setUpdateCount] = React.useState(0);
  const onInternalScroll = e => {
    const target = e.target;
    setScrollReachEnd(target.scrollHeight - Math.abs(target.scrollTop) - target.clientHeight <= TOLERANCE);
    onScroll?.(e);
  };
  React.useEffect(() => {
    if (autoScroll && listRef.current && scrollReachEnd) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight
      });
    }
  }, [updateCount]);

  // Always scroll to bottom when data change
  React.useEffect(() => {
    if (autoScroll) {
      // New date come, the origin last one is the second last one
      const lastItemKey = mergedData[mergedData.length - 2]?.key;
      const bubbleInst = bubbleRefs.current[lastItemKey];

      // Auto scroll if last 2 item is visible
      if (bubbleInst) {
        const {
          nativeElement
        } = bubbleInst;
        const {
          top,
          bottom
        } = nativeElement.getBoundingClientRect();
        const {
          top: listTop,
          bottom: listBottom
        } = listRef.current.getBoundingClientRect();
        const isVisible = top < listBottom && bottom > listTop;
        if (isVisible) {
          setUpdateCount(c => c + 1);
          setScrollReachEnd(true);
        }
      }
    }
  }, [mergedData.length]);

  // ========================== Outer Ref ===========================
  React.useImperativeHandle(ref, () => ({
    nativeElement: listRef.current,
    scrollTo: ({
      key,
      offset,
      behavior = 'smooth',
      block
    }) => {
      if (typeof offset === 'number') {
        // Offset scroll
        listRef.current.scrollTo({
          top: offset,
          behavior
        });
      } else if (key !== undefined) {
        // Key scroll
        const bubbleInst = bubbleRefs.current[key];
        if (bubbleInst) {
          // Block current auto scrolling
          const index = mergedData.findIndex(dataItem => dataItem.key === key);
          setScrollReachEnd(index === mergedData.length - 1);

          // Do native scroll
          bubbleInst.nativeElement.scrollIntoView({
            behavior,
            block
          });
        }
      }
    }
  }));

  // =========================== Context ============================
  // When bubble content update, we try to trigger `autoScroll` for sync
  const onBubbleUpdate = (0, _rcUtil.useEvent)(() => {
    if (autoScroll) {
      setUpdateCount(c => c + 1);
    }
  });
  const context = React.useMemo(() => ({
    onUpdate: onBubbleUpdate
  }), []);

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/React.createElement(_Bubble.BubbleContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", (0, _extends2.default)({}, domProps, {
    className: (0, _classnames.default)(listPrefixCls, rootClassName, className, hashId, cssVarCls, {
      [`${listPrefixCls}-reach-end`]: scrollReachEnd
    }),
    ref: listRef,
    onScroll: onInternalScroll
  }), mergedData.map(({
    key,
    ...bubble
  }) => /*#__PURE__*/React.createElement(MemoBubbleListItem, (0, _extends2.default)({}, bubble, {
    key: key,
    _key: key,
    ref: bubbleRefs,
    typing: initialized ? bubble.typing : false
  }))))));
};
const ForwardBubbleList = /*#__PURE__*/React.forwardRef(BubbleList);
if (process.env.NODE_ENV !== 'production') {
  ForwardBubbleList.displayName = 'BubbleList';
}
var _default = exports.default = ForwardBubbleList;