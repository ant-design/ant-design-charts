import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["prefixCls", "className", "avatar", "title", "description", "cover", "extra", "style"];
import { useMountMergeState } from '@ant-design/pro-utils';
import { Avatar, ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useEffect, useMemo } from 'react';
import ProCardActions from "../Actions";
import CheckCardGroup, { CardLoading, CheckCardGroupConnext } from "./Group";
import { useStyle } from "./style";

/**
 * Props for the CheckCard component.
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var CheckCard = function CheckCard(props) {
  var _useMountMergeState = useMountMergeState(props.defaultChecked || false, {
      value: props.checked,
      onChange: props.onChange
    }),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    stateChecked = _useMountMergeState2[0],
    setStateChecked = _useMountMergeState2[1];
  var checkCardGroup = useContext(CheckCardGroupConnext);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var handleClick = function handleClick(e) {
    var _props$onClick, _checkCardGroup$toggl;
    props === null || props === void 0 || (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, e);
    var newChecked = !stateChecked;
    checkCardGroup === null || checkCardGroup === void 0 || (_checkCardGroup$toggl = checkCardGroup.toggleOption) === null || _checkCardGroup$toggl === void 0 || _checkCardGroup$toggl.call(checkCardGroup, {
      value: props.value
    });
    setStateChecked === null || setStateChecked === void 0 || setStateChecked(newChecked);
  };

  // small => sm large => lg
  var getSizeCls = function getSizeCls(size) {
    if (size === 'large') return 'lg';
    if (size === 'small') return 'sm';
    return '';
  };
  useEffect(function () {
    var _checkCardGroup$regis;
    checkCardGroup === null || checkCardGroup === void 0 || (_checkCardGroup$regis = checkCardGroup.registerValue) === null || _checkCardGroup$regis === void 0 || _checkCardGroup$regis.call(checkCardGroup, props.value);
    return function () {
      var _checkCardGroup$cance;
      return checkCardGroup === null || checkCardGroup === void 0 || (_checkCardGroup$cance = checkCardGroup.cancelValue) === null || _checkCardGroup$cance === void 0 ? void 0 : _checkCardGroup$cance.call(checkCardGroup, props.value);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    avatar = props.avatar,
    title = props.title,
    description = props.description,
    cover = props.cover,
    extra = props.extra,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    others = _objectWithoutProperties(props, _excluded);
  var checkCardProps = _objectSpread({}, others);
  var prefixCls = getPrefixCls('pro-checkcard', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;

  /**
   * 头像自定义
   *
   * @param cls
   * @param coverDom
   * @returns
   */
  var renderCover = function renderCover(cls, coverDom) {
    return /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(cls, "-cover"), hashId),
      children: typeof coverDom === 'string' ? /*#__PURE__*/_jsx("img", {
        src: coverDom,
        alt: "checkcard"
      }) : coverDom
    });
  };
  checkCardProps.checked = stateChecked;
  var multiple = false;
  if (checkCardGroup) {
    var _checkCardGroup$value;
    // 受组控制模式
    checkCardProps.disabled = props.disabled || checkCardGroup.disabled;
    checkCardProps.loading = props.loading || checkCardGroup.loading;
    checkCardProps.bordered = props.bordered || checkCardGroup.bordered;
    multiple = checkCardGroup.multiple;
    var isChecked = checkCardGroup.multiple ? (_checkCardGroup$value = checkCardGroup.value) === null || _checkCardGroup$value === void 0 ? void 0 : _checkCardGroup$value.includes(props.value) : checkCardGroup.value === props.value;

    // loading时check为false
    checkCardProps.checked = checkCardProps.loading ? false : isChecked;
    checkCardProps.size = props.size || checkCardGroup.size;
  }
  var _checkCardProps$disab = checkCardProps.disabled,
    disabled = _checkCardProps$disab === void 0 ? false : _checkCardProps$disab,
    size = checkCardProps.size,
    cardLoading = checkCardProps.loading,
    _checkCardProps$borde = checkCardProps.bordered,
    bordered = _checkCardProps$borde === void 0 ? true : _checkCardProps$borde,
    checked = checkCardProps.checked;
  var sizeCls = getSizeCls(size);
  var classString = classNames(prefixCls, className, hashId, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-loading"), cardLoading), "".concat(prefixCls, "-").concat(sizeCls), sizeCls), "".concat(prefixCls, "-checked"), checked), "".concat(prefixCls, "-multiple"), multiple), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-bordered"), bordered), "".concat(prefixCls, "-ghost"), props.ghost));
  var metaDom = useMemo(function () {
    if (cardLoading) {
      return /*#__PURE__*/_jsx(CardLoading, {
        prefixCls: prefixCls || '',
        hashId: hashId
      });
    }
    if (cover) {
      return renderCover(prefixCls || '', cover);
    }
    var avatarDom = avatar ? /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(prefixCls, "-avatar"), hashId),
      children: typeof avatar === 'string' ? /*#__PURE__*/_jsx(Avatar, {
        size: 48,
        shape: "square",
        src: avatar
      }) : avatar
    }) : null;
    var headerDom = (title !== null && title !== void 0 ? title : extra) != null && /*#__PURE__*/_jsxs("div", {
      className: classNames("".concat(prefixCls, "-header"), hashId),
      children: [/*#__PURE__*/_jsxs("div", {
        className: classNames("".concat(prefixCls, "-header-left"), hashId),
        children: [/*#__PURE__*/_jsx("div", {
          className: classNames("".concat(prefixCls, "-title"), hashId, _defineProperty({}, "".concat(prefixCls, "-title-with-ellipsis"), typeof title === 'string')),
          children: title
        }), props.subTitle ? /*#__PURE__*/_jsx("div", {
          className: classNames("".concat(prefixCls, "-subTitle"), hashId),
          children: props.subTitle
        }) : null]
      }), extra && /*#__PURE__*/_jsx("div", {
        className: classNames("".concat(prefixCls, "-extra"), hashId),
        children: extra
      })]
    });
    var descriptionDom = description ? /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(prefixCls, "-description"), hashId),
      children: description
    }) : null;
    var metaClass = classNames("".concat(prefixCls, "-content"), hashId, _defineProperty({}, "".concat(prefixCls, "-avatar-header"), avatarDom && headerDom && !descriptionDom));
    return /*#__PURE__*/_jsxs("div", {
      className: metaClass,
      children: [avatarDom, headerDom || descriptionDom ? /*#__PURE__*/_jsxs("div", {
        className: classNames("".concat(prefixCls, "-detail"), hashId),
        children: [headerDom, descriptionDom]
      }) : null]
    });
  }, [avatar, cardLoading, cover, description, extra, hashId, prefixCls, props.subTitle, title]);
  return wrapSSR( /*#__PURE__*/_jsxs("div", {
    className: classString,
    style: style,
    onClick: function onClick(e) {
      if (!cardLoading && !disabled) {
        handleClick(e);
      }
    },
    onMouseEnter: props.onMouseEnter,
    children: [metaDom, props.children ? /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(prefixCls, "-body"), hashId),
      style: props.bodyStyle,
      children: props.children
    }) : null, props.actions ? /*#__PURE__*/_jsx(ProCardActions, {
      actions: props.actions,
      prefixCls: prefixCls
    }) : null]
  }));
};
CheckCard.Group = CheckCardGroup;
export default CheckCard;