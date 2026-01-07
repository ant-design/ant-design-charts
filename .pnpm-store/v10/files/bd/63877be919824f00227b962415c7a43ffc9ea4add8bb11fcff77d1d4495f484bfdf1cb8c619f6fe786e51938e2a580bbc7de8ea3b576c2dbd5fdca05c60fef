"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThoughtChainNodeContext = exports.THOUGHT_CHAIN_ITEM_STATUS = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcMotion = _interopRequireDefault(require("rc-motion"));
var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));
var _react = _interopRequireDefault(require("react"));
let THOUGHT_CHAIN_ITEM_STATUS = exports.THOUGHT_CHAIN_ITEM_STATUS = /*#__PURE__*/function (THOUGHT_CHAIN_ITEM_STATUS) {
  THOUGHT_CHAIN_ITEM_STATUS["PENDING"] = "pending";
  THOUGHT_CHAIN_ITEM_STATUS["SUCCESS"] = "success";
  THOUGHT_CHAIN_ITEM_STATUS["ERROR"] = "error";
  return THOUGHT_CHAIN_ITEM_STATUS;
}({});
const ThoughtChainNodeContext = exports.ThoughtChainNodeContext = /*#__PURE__*/_react.default.createContext(null);
const ThoughtChainNode = props => {
  const {
    info = {},
    nextStatus,
    onClick,
    ...restProps
  } = props;
  const domProps = (0, _pickAttrs.default)(restProps, {
    attr: true,
    aria: true,
    data: true
  });

  // ================= ThoughtChainNodeContext ====================
  const {
    prefixCls,
    collapseMotion,
    enableCollapse,
    expandedKeys,
    direction,
    classNames = {},
    styles = {}
  } = _react.default.useContext(ThoughtChainNodeContext);

  // ============================ Info ============================
  const id = _react.default.useId();
  const {
    key = id,
    icon,
    title,
    extra,
    content,
    footer,
    status,
    description
  } = info;

  // ============================ Tooltip State ============================
  const [showTooltip, setShowTooltip] = _react.default.useState(false);
  const textRef = _react.default.useRef(null);
  _react.default.useEffect(() => {
    const checkTextOverflow = () => {
      if (textRef.current) {
        setShowTooltip(textRef.current.scrollWidth > textRef.current.clientWidth);
      }
    };
    checkTextOverflow();
    const resizeObserver = new ResizeObserver(checkTextOverflow);
    if (textRef.current) {
      resizeObserver.observe(textRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [title]);

  // ============================ Style ============================
  const itemCls = `${prefixCls}-item`;

  // ============================ Event ============================
  const onThoughtChainNodeClick = () => onClick?.(key);

  // ============================ Content Open ============================
  const contentOpen = expandedKeys?.includes(key);

  // ============================ Render ============================
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, domProps, {
    className: (0, _classnames.default)(itemCls, {
      [`${itemCls}-${status}${nextStatus ? `-${nextStatus}` : ''}`]: status
    }, props.className),
    style: props.style
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${itemCls}-header`, classNames.itemHeader),
    style: styles.itemHeader,
    onClick: onThoughtChainNodeClick
  }, /*#__PURE__*/_react.default.createElement(_antd.Avatar, {
    icon: icon,
    className: `${itemCls}-icon`
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${itemCls}-header-box`, {
      [`${itemCls}-collapsible`]: enableCollapse && content
    })
  }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: showTooltip ? title : undefined,
    placement: direction === 'rtl' ? 'topRight' : 'topLeft'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `${itemCls}-title`
  }, enableCollapse && content && (direction === 'rtl' ? /*#__PURE__*/_react.default.createElement(_icons.LeftOutlined, {
    className: `${itemCls}-collapse-icon`,
    rotate: contentOpen ? -90 : 0
  }) : /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, {
    className: `${itemCls}-collapse-icon`,
    rotate: contentOpen ? 90 : 0
  })), /*#__PURE__*/_react.default.createElement("div", {
    ref: textRef,
    className: `${itemCls}-title-content`
  }, title))), description && /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: `${itemCls}-desc`,
    ellipsis: {
      tooltip: {
        placement: direction === 'rtl' ? 'topRight' : 'topLeft',
        title: description
      }
    },
    type: "secondary"
  }, description)), extra && /*#__PURE__*/_react.default.createElement("div", {
    className: `${itemCls}-extra`
  }, extra)), content && /*#__PURE__*/_react.default.createElement(_rcMotion.default, (0, _extends2.default)({}, collapseMotion, {
    visible: enableCollapse ? contentOpen : true
  }), ({
    className: motionClassName,
    style
  }, motionRef) => /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${itemCls}-content`, motionClassName),
    ref: motionRef,
    style: style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${itemCls}-content-box`, classNames.itemContent),
    style: styles.itemContent
  }, content))), footer && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${itemCls}-footer`, classNames.itemFooter),
    style: styles.itemFooter
  }, footer));
};
var _default = exports.default = ThoughtChainNode;