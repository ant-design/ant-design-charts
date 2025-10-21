export var defaultNodeStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage: 'none',
  borderWidth: '0px',
  boxShadow: 'none',
  overflow: 'visible'
  // verticalAlign: 'baseline',
};

/**
 * 是否是默认样式
 */
export var isDefaultStyles = function isDefaultStyles(styles) {
  return Object.keys(defaultNodeStyle).every(function (key) {
    // @ts-ignore
    var defaultValue = defaultNodeStyle[key];
    // @ts-ignore
    var value = styles[key];
    return defaultValue === value;
  });
};