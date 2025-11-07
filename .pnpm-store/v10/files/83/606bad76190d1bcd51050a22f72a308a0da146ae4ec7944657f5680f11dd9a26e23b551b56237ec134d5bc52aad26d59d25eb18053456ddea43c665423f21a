import classnames from 'classnames';
import { useEvent, useMergedState } from 'rc-util';
import React from 'react';
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import { useXProviderContext } from "../x-provider";
import { AttachmentContext } from "./context";
import DropArea from "./DropArea";
import FileList from "./FileList";
import FileListCard from "./FileList/FileListCard";
import PlaceholderUploader from "./PlaceholderUploader";
import SilentUploader from "./SilentUploader";
import useStyle from "./style";
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
  } = useXProviderContext();
  const prefixCls = getPrefixCls('attachment', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = useXComponentConfig('attachments');
  const {
    classNames: contextClassNames,
    styles: contextStyles
  } = contextConfig;

  // ============================= Ref =============================
  const containerRef = React.useRef(null);
  const uploadRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
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
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const cssinjsCls = classnames(hashId, cssVarCls);

  // ============================ Upload ============================
  const [fileList, setFileList] = useMergedState([], {
    value: items
  });
  const triggerChange = useEvent(info => {
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
    return /*#__PURE__*/React.createElement(PlaceholderUploader, {
      placeholder: placeholderContent,
      upload: mergedUploadProps,
      prefixCls: prefixCls,
      className: classnames(contextClassNames.placeholder, classNames.placeholder),
      style: {
        ...contextStyles.placeholder,
        ...styles.placeholder,
        ...props?.style
      },
      ref: ref
    });
  };
  if (children) {
    renderChildren = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SilentUploader, {
      upload: mergedUploadProps,
      rootClassName: rootClassName,
      ref: uploadRef
    }, children), /*#__PURE__*/React.createElement(DropArea, {
      getDropContainer: getDropContainer,
      prefixCls: prefixCls,
      className: classnames(cssinjsCls, rootClassName)
    }, getPlaceholderNode('drop')));
  } else {
    const hasFileList = fileList.length > 0;
    renderChildren = /*#__PURE__*/React.createElement("div", {
      className: classnames(prefixCls, cssinjsCls, {
        [`${prefixCls}-rtl`]: direction === 'rtl'
      }, className, rootClassName),
      style: {
        ...rootStyle,
        ...style
      },
      dir: direction || 'ltr',
      ref: containerRef
    }, /*#__PURE__*/React.createElement(FileList, {
      prefixCls: prefixCls,
      items: fileList,
      onRemove: onItemRemove,
      overflow: overflow,
      upload: mergedUploadProps,
      listClassName: classnames(contextClassNames.list, classNames.list),
      listStyle: {
        ...contextStyles.list,
        ...styles.list,
        ...(!hasFileList && {
          display: 'none'
        })
      },
      uploadClassName: classnames(contextClassNames.upload, classNames.upload),
      uploadStyle: {
        ...contextStyles.upload,
        ...styles.upload
      },
      itemClassName: classnames(contextClassNames.item, classNames.item),
      itemStyle: {
        ...contextStyles.item,
        ...styles.item
      },
      imageProps: imageProps
    }), getPlaceholderNode('inline', hasFileList ? {
      style: {
        display: 'none'
      }
    } : {}, uploadRef), /*#__PURE__*/React.createElement(DropArea, {
      getDropContainer: getDropContainer || (() => containerRef.current),
      prefixCls: prefixCls,
      className: cssinjsCls
    }, getPlaceholderNode('drop')));
  }
  return wrapCSSVar( /*#__PURE__*/React.createElement(AttachmentContext.Provider, {
    value: {
      disabled
    }
  }, renderChildren));
}
const ForwardAttachments = /*#__PURE__*/React.forwardRef(Attachments);
if (process.env.NODE_ENV !== 'production') {
  ForwardAttachments.displayName = 'Attachments';
}
ForwardAttachments.FileCard = FileListCard;
export default ForwardAttachments;