"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropArea;
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
var _context = require("./context");
function DropArea(props) {
  const {
    getDropContainer,
    className,
    prefixCls,
    children
  } = props;
  const {
    disabled
  } = _react.default.useContext(_context.AttachmentContext);
  const [container, setContainer] = _react.default.useState();
  const [showArea, setShowArea] = _react.default.useState(null);

  // ========================== Container ===========================
  _react.default.useEffect(() => {
    const nextContainer = getDropContainer?.();
    if (container !== nextContainer) {
      setContainer(nextContainer);
    }
  }, [getDropContainer]);

  // ============================= Drop =============================
  _react.default.useEffect(() => {
    // Add global drop event
    if (container) {
      const onDragEnter = () => {
        setShowArea(true);
      };

      // Should prevent default to make drop event work
      const onDragOver = e => {
        e.preventDefault();
      };
      const onDragLeave = e => {
        if (!e.relatedTarget) {
          setShowArea(false);
        }
      };
      const onDrop = e => {
        setShowArea(false);
        e.preventDefault();
      };
      document.addEventListener('dragenter', onDragEnter);
      document.addEventListener('dragover', onDragOver);
      document.addEventListener('dragleave', onDragLeave);
      document.addEventListener('drop', onDrop);
      return () => {
        document.removeEventListener('dragenter', onDragEnter);
        document.removeEventListener('dragover', onDragOver);
        document.removeEventListener('dragleave', onDragLeave);
        document.removeEventListener('drop', onDrop);
      };
    }
  }, [!!container]);

  // =========================== Visible ============================
  const showDropdown = getDropContainer && container && !disabled;

  // ============================ Render ============================
  if (!showDropdown) {
    return null;
  }
  const areaCls = `${prefixCls}-drop-area`;
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(areaCls, className, {
      [`${areaCls}-on-body`]: container.tagName === 'BODY'
    }),
    style: {
      display: showArea ? 'block' : 'none'
    }
  }, children), container);
}