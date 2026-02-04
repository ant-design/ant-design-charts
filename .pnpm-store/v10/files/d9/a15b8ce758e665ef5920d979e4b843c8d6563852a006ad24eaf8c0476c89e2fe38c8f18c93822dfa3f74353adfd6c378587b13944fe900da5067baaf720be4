import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useToken } from '@ant-design/pro-provider';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * 返回当前显示设备的物理像素分辨率与CSS像素分辨率之比
 *
 * @param context
 * @see api 有些废弃了，其实类型 CanvasRenderingContext2D
 */
var getPixelRatio = function getPixelRatio(context) {
  if (!context) {
    return 1;
  }
  var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
};
export var WaterMark = function WaterMark(props) {
  var _useToken = useToken(),
    token = _useToken.token;
  var children = props.children,
    style = props.style,
    className = props.className,
    markStyle = props.markStyle,
    markClassName = props.markClassName,
    _props$zIndex = props.zIndex,
    zIndex = _props$zIndex === void 0 ? 9 : _props$zIndex,
    _props$gapX = props.gapX,
    gapX = _props$gapX === void 0 ? 212 : _props$gapX,
    _props$gapY = props.gapY,
    gapY = _props$gapY === void 0 ? 222 : _props$gapY,
    _props$width = props.width,
    width = _props$width === void 0 ? 120 : _props$width,
    _props$height = props.height,
    height = _props$height === void 0 ? 64 : _props$height,
    _props$rotate = props.rotate,
    rotate = _props$rotate === void 0 ? -22 : _props$rotate,
    image = props.image,
    offsetLeft = props.offsetLeft,
    outOffsetTop = props.offsetTop,
    _props$fontStyle = props.fontStyle,
    fontStyle = _props$fontStyle === void 0 ? 'normal' : _props$fontStyle,
    _props$fontWeight = props.fontWeight,
    fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
    _props$fontColor = props.fontColor,
    fontColor = _props$fontColor === void 0 ? token.colorFill : _props$fontColor,
    _props$fontSize = props.fontSize,
    fontSize = _props$fontSize === void 0 ? 16 : _props$fontSize,
    _props$fontFamily = props.fontFamily,
    fontFamily = _props$fontFamily === void 0 ? 'sans-serif' : _props$fontFamily,
    customizePrefixCls = props.prefixCls;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-layout-watermark', customizePrefixCls);
  var wrapperCls = classNames("".concat(prefixCls, "-wrapper"), className);
  var waterMarkCls = classNames(prefixCls, markClassName);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    base64Url = _useState2[0],
    setBase64Url = _useState2[1];
  useEffect(function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var ratio = getPixelRatio(ctx);
    var canvasWidth = "".concat((gapX + width) * ratio, "px");
    var canvasHeight = "".concat((gapY + height) * ratio, "px");
    var canvasOffsetLeft = offsetLeft || gapX / 2;
    var canvasOffsetTop = outOffsetTop || gapY / 2;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    if (!ctx) {
      // eslint-disable-next-line no-console
      console.error('当前环境不支持Canvas');
      return;
    }

    // 旋转字符 rotate
    ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
    ctx.rotate(Math.PI / 180 * Number(rotate));
    var markWidth = width * ratio;
    var markHeight = height * ratio;
    var writeContent = function writeContent(contentText) {
      var offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var markSize = Number(fontSize) * ratio;
      ctx.font = "".concat(fontStyle, " normal ").concat(fontWeight, " ").concat(markSize, "px/").concat(markHeight, "px ").concat(fontFamily);
      ctx.fillStyle = fontColor;
      if (Array.isArray(contentText)) {
        contentText === null || contentText === void 0 || contentText.forEach(function (item, index) {
          return ctx.fillText(item, 0, index * markSize + offsetTop);
        });
      } else {
        ctx.fillText(contentText, 0, offsetTop ? offsetTop + markSize : 0);
      }
      setBase64Url(canvas.toDataURL());
    };
    if (image) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.referrerPolicy = 'no-referrer';
      img.src = image;
      img.onload = function () {
        ctx.drawImage(img, 0, 0, markWidth, markHeight);
        setBase64Url(canvas.toDataURL());
        if (props.content) {
          writeContent(props.content, img.height + 8);
          return;
        }
      };
      return;
    }
    if (props.content) {
      writeContent(props.content);
      return;
    }
  }, [gapX, gapY, offsetLeft, outOffsetTop, rotate, fontStyle, fontWeight, width, height, fontFamily, fontColor, image, props.content, fontSize]);
  return /*#__PURE__*/_jsxs("div", {
    style: _objectSpread({
      position: 'relative'
    }, style),
    className: wrapperCls,
    children: [children, /*#__PURE__*/_jsx("div", {
      className: waterMarkCls,
      style: _objectSpread(_objectSpread({
        zIndex: zIndex,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundSize: "".concat(gapX + width, "px"),
        pointerEvents: 'none',
        backgroundRepeat: 'repeat'
      }, base64Url ? {
        backgroundImage: "url('".concat(base64Url, "')")
      } : {}), markStyle)
    })]
  });
};