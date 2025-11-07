export function getClassNames(prefixCls: string = '') {
  return {
    CONTAINER: `${prefixCls}tooltip`,
    TITLE: `${prefixCls}tooltip-title`,
    LIST: `${prefixCls}tooltip-list`,
    LIST_ITEM: `${prefixCls}tooltip-list-item`,
    NAME: `${prefixCls}tooltip-list-item-name`,
    MARKER: `${prefixCls}tooltip-list-item-marker`,
    NAME_LABEL: `${prefixCls}tooltip-list-item-name-label`,
    VALUE: `${prefixCls}tooltip-list-item-value`,
    CROSSHAIR_X: `${prefixCls}tooltip-crosshair-x`,
    CROSSHAIR_Y: `${prefixCls}tooltip-crosshair-y`,
  };
}

const TEXT_OVERFLOW_STYLE = {
  overflow: 'hidden',
  'white-space': 'nowrap',
  'text-overflow': 'ellipsis',
};

export function getDefaultTooltipStyle(prefixCls: string = '') {
  const CLASS_NAME = getClassNames(prefixCls);
  return {
    [`.${CLASS_NAME.CONTAINER}`]: {
      position: 'absolute',
      visibility: 'visible',
      // 'white-space': 'nowrap',
      'z-index': 8,
      transition:
        'visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), ' +
        'left 0.4s cubic-bezier(0.23, 1, 0.32, 1), ' +
        'top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      'background-color': 'rgba(255, 255, 255, 0.96)',
      'box-shadow': '0 6px 12px 0 rgba(0, 0, 0, 0.12)',
      'border-radius': '4px',
      color: 'rgba(0, 0, 0, 0.65)',
      'font-size': '12px',
      // 'font-family': ,
      'line-height': '20px',
      padding: '12px',
      'min-width': '120px',
      'max-width': '360px',
      'font-family': 'Roboto-Regular',
    },
    [`.${CLASS_NAME.TITLE}`]: {
      color: 'rgba(0, 0, 0, 0.45)',
    },
    [`.${CLASS_NAME.LIST}`]: {
      margin: '0px',
      'list-style-type': 'none',
      padding: '0px',
    },
    [`.${CLASS_NAME.LIST_ITEM}`]: {
      'list-style-type': 'none',
      display: 'flex',
      'line-height': '2em',
      'align-items': 'center',
      'justify-content': 'space-between',
      'white-space': 'nowrap',
    },
    [`.${CLASS_NAME.MARKER}`]: {
      width: '8px',
      height: '8px',
      'border-radius': '50%',
      display: 'inline-block',
      'margin-right': '4px',
    },
    [`.${CLASS_NAME.NAME}`]: {
      display: 'flex',
      'align-items': 'center',
      'max-width': '216px',
    },
    [`.${CLASS_NAME.NAME_LABEL}`]: {
      flex: 1,
      ...TEXT_OVERFLOW_STYLE,
    },
    [`.${CLASS_NAME.VALUE}`]: {
      display: 'inline-block',
      float: 'right',
      flex: 1,
      'text-align': 'right',
      'min-width': '28px',
      'margin-left': '30px',
      color: 'rgba(0, 0, 0, 0.85)',
      ...TEXT_OVERFLOW_STYLE,
    },
    [`.${CLASS_NAME.CROSSHAIR_X}`]: {
      position: 'absolute',
      width: '1px',
      'background-color': 'rgba(0, 0, 0, 0.25)',
    },
    [`.${CLASS_NAME.CROSSHAIR_Y}`]: {
      position: 'absolute',
      height: '1px',
      'background-color': 'rgba(0, 0, 0, 0.25)',
    },
  };
}
