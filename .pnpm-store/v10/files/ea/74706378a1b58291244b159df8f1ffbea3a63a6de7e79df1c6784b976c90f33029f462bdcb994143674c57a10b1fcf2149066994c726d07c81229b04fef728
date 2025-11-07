"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FileList;
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcMotion = require("rc-motion");
var _react = _interopRequireDefault(require("react"));
var _SilentUploader = _interopRequireDefault(require("../SilentUploader"));
var _context = require("../context");
var _FileListCard = _interopRequireDefault(require("./FileListCard"));
const TOLERANCE = 1;
function FileList(props) {
  const {
    prefixCls,
    items,
    onRemove,
    overflow,
    upload,
    listClassName,
    listStyle,
    itemClassName,
    uploadClassName,
    uploadStyle,
    itemStyle,
    imageProps
  } = props;
  const listCls = `${prefixCls}-list`;
  const containerRef = _react.default.useRef(null);
  const [firstMount, setFirstMount] = _react.default.useState(false);
  const {
    disabled
  } = _react.default.useContext(_context.AttachmentContext);
  _react.default.useEffect(() => {
    setFirstMount(true);
    return () => {
      setFirstMount(false);
    };
  }, []);

  // ================================= Scroll =================================
  const [pingStart, setPingStart] = _react.default.useState(false);
  const [pingEnd, setPingEnd] = _react.default.useState(false);
  const checkPing = () => {
    const containerEle = containerRef.current;
    if (!containerEle) {
      return;
    }
    if (overflow === 'scrollX') {
      setPingStart(Math.abs(containerEle.scrollLeft) >= TOLERANCE);
      setPingEnd(containerEle.scrollWidth - containerEle.clientWidth - Math.abs(containerEle.scrollLeft) >= TOLERANCE);
    } else if (overflow === 'scrollY') {
      setPingStart(containerEle.scrollTop !== 0);
      setPingEnd(containerEle.scrollHeight - containerEle.clientHeight !== containerEle.scrollTop);
    }
  };
  _react.default.useEffect(() => {
    checkPing();
  }, [overflow, items.length]);
  const onScrollOffset = offset => {
    const containerEle = containerRef.current;
    if (containerEle) {
      containerEle.scrollTo({
        left: containerEle.scrollLeft + offset * containerEle.clientWidth,
        behavior: 'smooth'
      });
    }
  };
  const onScrollLeft = () => {
    onScrollOffset(-1);
  };
  const onScrollRight = () => {
    onScrollOffset(1);
  };

  // ================================= Render =================================
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(listCls, {
      [`${listCls}-overflow-${props.overflow}`]: overflow,
      [`${listCls}-overflow-ping-start`]: pingStart,
      [`${listCls}-overflow-ping-end`]: pingEnd
    }, listClassName),
    ref: containerRef,
    onScroll: checkPing,
    style: listStyle
  }, /*#__PURE__*/_react.default.createElement(_rcMotion.CSSMotionList, {
    keys: items.map(item => ({
      key: item.uid,
      item
    })),
    motionName: `${listCls}-card-motion`,
    component: false,
    motionAppear: firstMount,
    motionLeave: true,
    motionEnter: true
  }, ({
    key,
    item,
    className: motionCls,
    style: motionStyle
  }) => {
    return /*#__PURE__*/_react.default.createElement(_FileListCard.default, {
      key: key,
      prefixCls: prefixCls,
      item: item,
      onRemove: onRemove,
      className: (0, _classnames.default)(motionCls, itemClassName),
      imageProps: imageProps,
      style: {
        ...motionStyle,
        ...itemStyle
      }
    });
  }), !disabled && /*#__PURE__*/_react.default.createElement(_SilentUploader.default, {
    upload: upload
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    className: (0, _classnames.default)(uploadClassName, `${listCls}-upload-btn`),
    style: uploadStyle,
    type: "dashed"
  }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, {
    className: `${listCls}-upload-btn-icon`
  }))), overflow === 'scrollX' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    size: "small",
    shape: "circle",
    className: `${listCls}-prev-btn`,
    icon: /*#__PURE__*/_react.default.createElement(_icons.LeftOutlined, null),
    onClick: onScrollLeft
  }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    size: "small",
    shape: "circle",
    className: `${listCls}-next-btn`,
    icon: /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, null),
    onClick: onScrollRight
  })));
}