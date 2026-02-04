import { Card, Divider, Skeleton, Space } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import React, { useMemo } from 'react';

/** 一条分割线 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var Line = function Line(_ref) {
  var padding = _ref.padding;
  return /*#__PURE__*/_jsx("div", {
    style: {
      padding: padding || '0 24px'
    },
    children: /*#__PURE__*/_jsx(Divider, {
      style: {
        margin: 0
      }
    })
  });
};
export var MediaQueryKeyEnum = {
  xs: 2,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 6
};
var StatisticSkeleton = function StatisticSkeleton(_ref2) {
  var size = _ref2.size,
    active = _ref2.active;
  var defaultCol = useMemo(function () {
    return {
      lg: true,
      md: true,
      sm: false,
      xl: false,
      xs: false,
      xxl: false
    };
  }, []);
  var col = useBreakpoint() || defaultCol;
  var colSize = Object.keys(col).filter(function (key) {
    return col[key] === true;
  })[0] || 'md';
  var arraySize = size === undefined ? MediaQueryKeyEnum[colSize] || 6 : size;
  var firstWidth = function firstWidth(index) {
    if (index === 0) {
      return 0;
    }
    if (arraySize > 2) {
      return 42;
    }
    return 16;
  };
  return /*#__PURE__*/_jsx(Card, {
    bordered: false,
    style: {
      marginBlockEnd: 16
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex'
      },
      children: new Array(arraySize).fill(null).map(function (_, index) {
        return /*#__PURE__*/_jsxs("div", {
          style: {
            borderInlineStart: arraySize > 2 && index === 1 ? '1px solid rgba(0,0,0,0.06)' : undefined,
            paddingInlineStart: firstWidth(index),
            flex: 1,
            marginInlineEnd: index === 0 ? 16 : 0
          },
          children: [/*#__PURE__*/_jsx(Skeleton, {
            active: active,
            paragraph: false,
            title: {
              width: 100,
              style: {
                marginBlockStart: 0
              }
            }
          }), /*#__PURE__*/_jsx(Skeleton.Button, {
            active: active,
            style: {
              height: 48
            }
          })]
        }, index);
      })
    })
  });
};

/** 列表子项目骨架屏 */
export var ListSkeletonItem = function ListSkeletonItem(_ref3) {
  var active = _ref3.active;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Card, {
      bordered: false
      // eslint-disable-next-line react/no-array-index-key
      ,
      style: {
        borderRadius: 0
      },
      styles: {
        body: {
          padding: 24
        }
      },
      children: /*#__PURE__*/_jsxs("div", {
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/_jsx("div", {
          style: {
            maxWidth: '100%',
            flex: 1
          },
          children: /*#__PURE__*/_jsx(Skeleton, {
            active: active,
            title: {
              width: 100,
              style: {
                marginBlockStart: 0
              }
            },
            paragraph: {
              rows: 1,
              style: {
                margin: 0
              }
            }
          })
        }), /*#__PURE__*/_jsx(Skeleton.Button, {
          active: active,
          size: "small",
          style: {
            width: 165,
            marginBlockStart: 12
          }
        })]
      })
    }), /*#__PURE__*/_jsx(Line, {})]
  });
};

/** 列表骨架屏 */
export var ListSkeleton = function ListSkeleton(_ref4) {
  var size = _ref4.size,
    _ref4$active = _ref4.active,
    active = _ref4$active === void 0 ? true : _ref4$active,
    actionButton = _ref4.actionButton;
  return /*#__PURE__*/_jsxs(Card, {
    bordered: false,
    styles: {
      body: {
        padding: 0
      }
    },
    children: [new Array(size).fill(null).map(function (_, index) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _jsx(ListSkeletonItem, {
          active: !!active
        }, index)
      );
    }), actionButton !== false && /*#__PURE__*/_jsx(Card, {
      bordered: false,
      style: {
        borderStartEndRadius: 0,
        borderTopLeftRadius: 0
      },
      styles: {
        body: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      },
      children: /*#__PURE__*/_jsx(Skeleton.Button, {
        style: {
          width: 102
        },
        active: active,
        size: "small"
      })
    })]
  });
};

/**
 * 面包屑的 骨架屏
 *
 * @param param0
 */
export var PageHeaderSkeleton = function PageHeaderSkeleton(_ref5) {
  var active = _ref5.active;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      marginBlockEnd: 16
    },
    children: [/*#__PURE__*/_jsx(Skeleton, {
      paragraph: false,
      title: {
        width: 185
      }
    }), /*#__PURE__*/_jsx(Skeleton.Button, {
      active: active,
      size: "small"
    })]
  });
};
/**
 * 列表操作栏的骨架屏
 *
 * @param param0
 */
export var ListToolbarSkeleton = function ListToolbarSkeleton(_ref6) {
  var active = _ref6.active;
  return /*#__PURE__*/_jsx(Card, {
    bordered: false,
    style: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    },
    styles: {
      body: {
        paddingBlockEnd: 8
      }
    },
    children: /*#__PURE__*/_jsxs(Space, {
      style: {
        width: '100%',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/_jsx(Skeleton.Button, {
        active: active,
        style: {
          width: 200
        },
        size: "small"
      }), /*#__PURE__*/_jsxs(Space, {
        children: [/*#__PURE__*/_jsx(Skeleton.Button, {
          active: active,
          size: "small",
          style: {
            width: 120
          }
        }), /*#__PURE__*/_jsx(Skeleton.Button, {
          active: active,
          size: "small",
          style: {
            width: 80
          }
        })]
      })]
    })
  });
};
var ListPageSkeleton = function ListPageSkeleton(_ref7) {
  var _ref7$active = _ref7.active,
    active = _ref7$active === void 0 ? true : _ref7$active,
    statistic = _ref7.statistic,
    actionButton = _ref7.actionButton,
    toolbar = _ref7.toolbar,
    pageHeader = _ref7.pageHeader,
    _ref7$list = _ref7.list,
    list = _ref7$list === void 0 ? 5 : _ref7$list;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      width: '100%'
    },
    children: [pageHeader !== false && /*#__PURE__*/_jsx(PageHeaderSkeleton, {
      active: active
    }), statistic !== false && /*#__PURE__*/_jsx(StatisticSkeleton, {
      size: statistic,
      active: active
    }), (toolbar !== false || list !== false) && /*#__PURE__*/_jsxs(Card, {
      bordered: false,
      styles: {
        body: {
          padding: 0
        }
      },
      children: [toolbar !== false && /*#__PURE__*/_jsx(ListToolbarSkeleton, {
        active: active
      }), list !== false && /*#__PURE__*/_jsx(ListSkeleton, {
        size: list,
        active: active,
        actionButton: actionButton
      })]
    })]
  });
};
export default ListPageSkeleton;