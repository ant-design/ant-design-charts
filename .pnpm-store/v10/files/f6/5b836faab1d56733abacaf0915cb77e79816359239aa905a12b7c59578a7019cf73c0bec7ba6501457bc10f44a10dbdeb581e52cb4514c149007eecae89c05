"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _rcUtil = require("rc-util");
var _react = _interopRequireDefault(require("react"));
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _xProvider = require("../x-provider");
var _context = require("./context");
var _DropArea = _interopRequireDefault(require("./DropArea"));
var _FileList = _interopRequireDefault(require("./FileList"));
var _FileListCard = _interopRequireDefault(require("./FileList/FileListCard"));
var _PlaceholderUploader = _interopRequireDefault(require("./PlaceholderUploader"));
var _SilentUploader = _interopRequireDefault(require("./SilentUploader"));
var _style = _interopRequireDefault(require("./style"));
function Attachments(props, ref) {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    rootStyle,
    className,
    style,
    items,
    children,
    getDropContainer,
    placeholder,
    onChange,
    onRemove,
    overflow,
    imageProps,
    disabled,
    maxCount,
    classNames = {},
    styles = {},
    ...uploadProps
  } = props;

  // ============================ PrefixCls ============================
  const {
    getPrefixCls,
    direction
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('attachment', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = (0, _useXComponentConfig.default)('attachments');
  const {
    classNames: contextClassNames,
    styles: contextStyles
  } = contextConfig;

  // ============================= Ref =============================
  const containerRef = _react.default.useRef(null);
  const uploadRef = _react.default.useRef(null);
  _react.default.useImperativeHandle(ref, () => ({
    nativeElement: containerRef.current,
    upload: file => {
      const fileInput = uploadRef.current?.nativeElement?.querySelector('input[type="file"]');

      // Trigger native change event
      if (fileInput) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInput.files = dataTransfer.files;
        fileInput.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    }
  }));

  // ============================ Style ============================
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);
  const cssinjsCls = (0, _classnames.default)(hashId, cssVarCls);

  // ============================ Upload ============================
  const [fileList, setFileList] = (0, _rcUtil.useMergedState)([], {
    value: items
  });
  const triggerChange = (0, _rcUtil.useEvent)(info => {
    setFileList(info.fileList);
    onChange?.(info);
  });
  const mergedUploadProps = {
    ...uploadProps,
    fileList,
    maxCount,
    onChange: triggerChange
  };
  const onItemRemove = item => Promise.resolve(typeof onRemove === 'function' ? onRemove(item) : onRemove).then(ret => {
    // Prevent removing file
    if (ret === false) {
      return;
    }
    const newFileList = fileList.filter(fileItem => fileItem.uid !== item.uid);
    triggerChange({
      file: {
        ...item,
        status: 'removed'
      },
      fileList: newFileList
    });
  });
  // ============================ Render ============================
  let renderChildren;
  const getPlaceholderNode = (type, props, ref) => {
    const placeholderContent = typeof placeholder === 'function' ? placeholder(type) : placeholder;
    return /*#__PURE__*/_react.default.createElement(_PlaceholderUploader.default, {
      placeholder: placeholderContent,
      upload: mergedUploadProps,
      prefixCls: prefixCls,
      className: (0, _classnames.default)(contextClassNames.placeholder, classNames.placeholder),
      style: {
        ...contextStyles.placeholder,
        ...styles.placeholder,
        ...props?.style
      },
      ref: ref
    });
  };
  if (children) {
    renderChildren = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SilentUploader.default, {
      upload: mergedUploadProps,
      rootClassName: rootClassName,
      ref: uploadRef
    }, children), /*#__PURE__*/_react.default.createElement(_DropArea.default, {
      getDropContainer: getDropContainer,
      prefixCls: prefixCls,
      className: (0, _classnames.default)(cssinjsCls, rootClassName)
    }, getPlaceholderNode('drop')));
  } else {
    const hasFileList = fileList.length > 0;
    renderChildren = /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(prefixCls, cssinjsCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
      }, className, rootClassName),
      style: {
        ...rootStyle,
        ...style
      },
      dir: direction || 'ltr',
      ref: containerRef
    }, /*#__PURE__*/_react.default.createElement(_FileList.default, {
      prefixCls: prefixCls,
      items: fileList,
      onRemove: onItemRemove,
      overflow: overflow,
      upload: mergedUploadProps,
      listClassName: (0, _classnames.default)(contextClassNames.list, classNames.list),
      listStyle: {
        ...contextStyles.list,
        ...styles.list,
        ...(!hasFileList && {
          display: 'none'
        })
      },
      uploadClassName: (0, _classnames.default)(contextClassNames.upload, classNames.upload),
      uploadStyle: {
        ...contextStyles.upload,
        ...styles.upload
      },
      itemClassName: (0, _classnames.default)(contextClassNames.item, classNames.item),
      itemStyle: {
        ...contextStyles.item,
        ...styles.item
      },
      imageProps: imageProps
    }), getPlaceholderNode('inline', hasFileList ? {
      style: {
        display: 'none'
      }
    } : {}, uploadRef), /*#__PURE__*/_react.default.createElement(_DropArea.default, {
      getDropContainer: getDropContainer || (() => containerRef.current),
      prefixCls: prefixCls,
      className: cssinjsCls
    }, getPlaceholderNode('drop')));
  }
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement(_context.AttachmentContext.Provider, {
    value: {
      disabled
    }
  }, renderChildren));
}
const ForwardAttachments = /*#__PURE__*/_react.default.forwardRef(Attachments);
if (process.env.NODE_ENV !== 'production') {
  ForwardAttachments.displayName = 'Attachments';
}
ForwardAttachments.FileCard = _FileListCard.default;
var _default = exports.default = ForwardAttachments;