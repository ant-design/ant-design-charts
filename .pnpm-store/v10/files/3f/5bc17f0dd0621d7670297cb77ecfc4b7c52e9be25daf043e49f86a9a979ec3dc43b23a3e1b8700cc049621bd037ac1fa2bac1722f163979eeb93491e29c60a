import _extends from "@babel/runtime/helpers/esm/extends";
import { Upload } from 'antd';
import React from 'react';
/**
 * SilentUploader is only wrap children with antd Upload component.
 */
function SilentUploader(props, ref) {
  const {
    children,
    upload,
    rootClassName
  } = props;
  const uploadRef = React.useRef(null);
  React.useImperativeHandle(ref, () => uploadRef.current);

  // ============================ Render ============================
  return /*#__PURE__*/React.createElement(Upload, _extends({}, upload, {
    showUploadList: false,
    rootClassName: rootClassName,
    ref: uploadRef
  }), children);
}
export default /*#__PURE__*/React.forwardRef(SilentUploader);