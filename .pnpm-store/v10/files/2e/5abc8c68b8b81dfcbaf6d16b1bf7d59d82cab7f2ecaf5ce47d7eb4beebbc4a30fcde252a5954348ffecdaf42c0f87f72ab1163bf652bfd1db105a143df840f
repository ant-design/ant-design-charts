import _extends from "@babel/runtime/helpers/esm/extends";
import { Cascader, Flex, version } from 'antd';
import classnames from 'classnames';
import { useEvent, useMergedState } from 'rc-util';
import React, { useState } from 'react';
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import { useXProviderContext } from "../x-provider";
import useStyle from "./style";
import useActive from "./useActive";
const antdVersionCells = version.split('.').map(Number);
const isNewAPI = antdVersionCells[0] > 5 || antdVersionCells[0] === 5 && antdVersionCells[1] >= 25;
function Suggestion(props) {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    children,
    open,
    onOpenChange,
    items,
    onSelect,
    block
  } = props;

  // ============================= MISC =============================
  const {
    direction,
    getPrefixCls
  } = useXProviderContext();
  const prefixCls = getPrefixCls('suggestion', customizePrefixCls);
  const itemCls = `${prefixCls}-item`;
  const isRTL = direction === 'rtl';

  // ===================== Component Config =========================
  const contextConfig = useXComponentConfig('suggestion');

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  // =========================== Trigger ============================
  const [mergedOpen, setOpen] = useMergedState(false, {
    value: open
  });
  const [info, setInfo] = useState();
  const triggerOpen = nextOpen => {
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };
  const onTrigger = useEvent(nextInfo => {
    if (nextInfo === false) {
      triggerOpen(false);
    } else {
      setInfo(nextInfo);
      triggerOpen(true);
    }
  });
  const onClose = () => {
    triggerOpen(false);
  };

  // ============================ Items =============================
  const itemList = React.useMemo(() => typeof items === 'function' ? items(info) : items, [items, info]);

  // =========================== Cascader ===========================
  const optionRender = node => {
    return /*#__PURE__*/React.createElement(Flex, {
      className: itemCls
    }, node.icon && /*#__PURE__*/React.createElement("div", {
      className: `${itemCls}-icon`
    }, node.icon), node.label, node.extra && /*#__PURE__*/React.createElement("div", {
      className: `${itemCls}-extra`
    }, node.extra));
  };
  const onInternalChange = valuePath => {
    if (onSelect) {
      onSelect(valuePath[valuePath.length - 1]);
    }
    triggerOpen(false);
  };

  // ============================= a11y =============================
  const [activePath, onKeyDown] = useActive(itemList, mergedOpen, isRTL, onInternalChange, onClose);

  // =========================== Children ===========================
  const childNode = children?.({
    onTrigger,
    onKeyDown
  });

  // ============================ Render ============================
  const onInternalOpenChange = nextOpen => {
    if (!nextOpen) {
      onClose();
    }
  };
  const compatibleProps = {};

  /* istanbul ignore else */
  if (isNewAPI) {
    compatibleProps.onOpenChange = onInternalOpenChange;
  } else {
    compatibleProps.onDropdownVisibleChange = onInternalOpenChange;
  }
  return wrapCSSVar( /*#__PURE__*/React.createElement(Cascader, _extends({
    options: itemList,
    open: mergedOpen,
    value: activePath,
    placement: isRTL ? 'topRight' : 'topLeft'
  }, compatibleProps, {
    optionRender: optionRender,
    rootClassName: classnames(rootClassName, prefixCls, hashId, cssVarCls, {
      [`${prefixCls}-block`]: block
    }),
    onChange: onInternalChange,
    dropdownMatchSelectWidth: block
  }), /*#__PURE__*/React.createElement("div", {
    className: classnames(prefixCls, contextConfig.className, rootClassName, className, `${prefixCls}-wrapper`, hashId, cssVarCls),
    style: {
      ...contextConfig.style,
      ...style
    }
  }, childNode)));
}
if (process.env.NODE_ENV !== 'production') {
  Suggestion.displayName = 'Suggestion';
}
export default Suggestion;