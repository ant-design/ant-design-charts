import { LeftOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classnames from 'classnames';
import { CSSMotionList } from 'rc-motion';
import React from 'react';
import SilentUploader from "../SilentUploader";
import { AttachmentContext } from "../context";
import FileListCard from "./FileListCard";
const TOLERANCE = 1;
export default function FileList(props) {
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
  const containerRef = React.useRef(null);
  const [firstMount, setFirstMount] = React.useState(false);
  const {
    disabled
  } = React.useContext(AttachmentContext);
  React.useEffect(() => {
    setFirstMount(true);
    return () => {
      setFirstMount(false);
    };
  }, []);

  // ================================= Scroll =================================
  const [pingStart, setPingStart] = React.useState(false);
  const [pingEnd, setPingEnd] = React.useState(false);
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
  React.useEffect(() => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(listCls, {
      [`${listCls}-overflow-${props.overflow}`]: overflow,
      [`${listCls}-overflow-ping-start`]: pingStart,
      [`${listCls}-overflow-ping-end`]: pingEnd
    }, listClassName),
    ref: containerRef,
    onScroll: checkPing,
    style: listStyle
  }, /*#__PURE__*/React.createElement(CSSMotionList, {
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
    return /*#__PURE__*/React.createElement(FileListCard, {
      key: key,
      prefixCls: prefixCls,
      item: item,
      onRemove: onRemove,
      className: classnames(motionCls, itemClassName),
      imageProps: imageProps,
      style: {
        ...motionStyle,
        ...itemStyle
      }
    });
  }), !disabled && /*#__PURE__*/React.createElement(SilentUploader, {
    upload: upload
  }, /*#__PURE__*/React.createElement(Button, {
    className: classnames(uploadClassName, `${listCls}-upload-btn`),
    style: uploadStyle,
    type: "dashed"
  }, /*#__PURE__*/React.createElement(PlusOutlined, {
    className: `${listCls}-upload-btn-icon`
  }))), overflow === 'scrollX' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    shape: "circle",
    className: `${listCls}-prev-btn`,
    icon: /*#__PURE__*/React.createElement(LeftOutlined, null),
    onClick: onScrollLeft
  }), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    shape: "circle",
    className: `${listCls}-next-btn`,
    icon: /*#__PURE__*/React.createElement(RightOutlined, null),
    onClick: onScrollRight
  })));
}