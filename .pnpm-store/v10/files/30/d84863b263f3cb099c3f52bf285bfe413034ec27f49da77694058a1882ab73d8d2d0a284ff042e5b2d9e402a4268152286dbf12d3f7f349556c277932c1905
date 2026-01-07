import { useIntl } from 'dumi';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
export var Input = /*#__PURE__*/forwardRef(function (props, ref) {
  var intl = useIntl();
  var imeWaiting = useRef(false);
  var nativeInputRef = useRef(null);
  useImperativeHandle(ref, function () {
    return nativeInputRef.current;
  });
  return /*#__PURE__*/React.createElement("input", {
    className: "dumi-default-search-bar-input",
    onCompositionStart: function onCompositionStart() {
      return imeWaiting.current = true;
    },
    onCompositionEnd: function onCompositionEnd(ev) {
      imeWaiting.current = false;
      // special case: press Enter open IME panel will not trigger onChange
      props.onChange(ev.currentTarget.value);
    },
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onMouseEnter: props.onMouseEnter,
    onKeyDown: function onKeyDown(ev) {
      if (['ArrowDown', 'ArrowUp'].includes(ev.key)) ev.preventDefault();
      // esc to blur input
      if (ev.key === 'Escape' && !imeWaiting.current) ev.currentTarget.blur();
    },
    onChange: function onChange(ev) {
      // wait for onCompositionEnd event be triggered
      var value = ev.target.value;
      setTimeout(function () {
        if (!imeWaiting.current) {
          props.onChange(value);
        }
      }, 1);
    },
    placeholder: intl.formatMessage({
      id: 'header.search.placeholder'
    }),
    ref: nativeInputRef
  });
});