import classnames from 'classnames';
import React from 'react';
import { createPortal } from 'react-dom';
import { AttachmentContext } from "./context";
export default function DropArea(props) {
  const {
    getDropContainer,
    className,
    prefixCls,
    children
  } = props;
  const {
    disabled
  } = React.useContext(AttachmentContext);
  const [container, setContainer] = React.useState();
  const [showArea, setShowArea] = React.useState(null);

  // ========================== Container ===========================
  React.useEffect(() => {
    const nextContainer = getDropContainer?.();
    if (container !== nextContainer) {
      setContainer(nextContainer);
    }
  }, [getDropContainer]);

  // ============================= Drop =============================
  React.useEffect(() => {
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
  return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
    className: classnames(areaCls, className, {
      [`${areaCls}-on-body`]: container.tagName === 'BODY'
    }),
    style: {
      display: showArea ? 'block' : 'none'
    }
  }, children), container);
}