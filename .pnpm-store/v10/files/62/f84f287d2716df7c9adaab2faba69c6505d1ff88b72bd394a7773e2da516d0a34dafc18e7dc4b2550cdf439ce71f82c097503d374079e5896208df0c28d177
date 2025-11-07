"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableSkeleton = exports.TableItemSkeleton = exports.DescriptionsSkeleton = void 0;
var _antd = require("antd");
var _useBreakpoint = _interopRequireDefault(require("antd/lib/grid/hooks/useBreakpoint"));
var _react = _interopRequireWildcard(require("react"));
var _List = require("../List");
var _jsxRuntime = require("react/jsx-runtime");
var MediaQueryKeyEnum = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 3,
  xxl: 4
};
var DescriptionsLargeItemSkeleton = function DescriptionsLargeItemSkeleton(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      marginBlockStart: 32
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton.Button, {
      active: active,
      size: "small",
      style: {
        width: 100,
        marginBlockEnd: 16
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1,
          marginInlineEnd: 24,
          maxWidth: 300
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
          active: active,
          paragraph: false,
          title: {
            style: {
              marginBlockStart: 0
            }
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
          active: active,
          paragraph: false,
          title: {
            style: {
              marginBlockStart: 8
            }
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
          active: active,
          paragraph: false,
          title: {
            style: {
              marginBlockStart: 8
            }
          }
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            maxWidth: 300,
            margin: 'auto'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
            active: active,
            paragraph: false,
            title: {
              style: {
                marginBlockStart: 0
              }
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
            active: active,
            paragraph: false,
            title: {
              style: {
                marginBlockStart: 8
              }
            }
          })]
        })
      })]
    })]
  });
};
var DescriptionsItemSkeleton = function DescriptionsItemSkeleton(_ref2) {
  var size = _ref2.size,
    active = _ref2.active;
  var defaultCol = (0, _react.useMemo)(function () {
    return {
      lg: true,
      md: true,
      sm: false,
      xl: false,
      xs: false,
      xxl: false
    };
  }, []);
  var col = (0, _useBreakpoint.default)() || defaultCol;
  var colSize = Object.keys(col).filter(function (key) {
    return col[key] === true;
  })[0] || 'md';
  var arraySize = size === undefined ? MediaQueryKeyEnum[colSize] || 3 : size;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      width: '100%',
      justifyContent: 'space-between',
      display: 'flex'
    },
    children: new Array(arraySize).fill(null).map(function (_, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1,
          paddingInlineStart: index === 0 ? 0 : 24,
          paddingInlineEnd: index === arraySize - 1 ? 0 : 24
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
          active: active,
          paragraph: false,
          title: {
            style: {
              marginBlockStart: 0
            }
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
          active: active,
          paragraph: false,
          title: {
            style: {
              marginBlockStart: 8
            }
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
          active: active,
          paragraph: false,
          title: {
            style: {
              marginBlockStart: 8
            }
          }
        })]
      }, index);
    })
  });
};

/**
 * Table 的子项目骨架屏
 *
 * @param param0
 */
var TableItemSkeleton = exports.TableItemSkeleton = function TableItemSkeleton(_ref3) {
  var active = _ref3.active,
    _ref3$header = _ref3.header,
    header = _ref3$header === void 0 ? false : _ref3$header;
  var defaultCol = (0, _react.useMemo)(function () {
    return {
      lg: true,
      md: true,
      sm: false,
      xl: false,
      xs: false,
      xxl: false
    };
  }, []);
  var col = (0, _useBreakpoint.default)() || defaultCol;
  var colSize = Object.keys(col).filter(function (key) {
    return col[key] === true;
  })[0] || 'md';
  var arraySize = MediaQueryKeyEnum[colSize] || 3;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        display: 'flex',
        background: header ? 'rgba(0,0,0,0.02)' : 'none',
        padding: '24px 8px'
      },
      children: [new Array(arraySize).fill(null).map(function (_, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            flex: 1,
            paddingInlineStart: header && index === 0 ? 0 : 20,
            paddingInlineEnd: 32
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
            active: active,
            paragraph: false,
            title: {
              style: {
                margin: 0,
                height: 24,
                width: header ? '75px' : '100%'
              }
            }
          })
        }, index);
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          flex: 3,
          paddingInlineStart: 32
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
          active: active,
          paragraph: false,
          title: {
            style: {
              margin: 0,
              height: 24,
              width: header ? '75px' : '100%'
            }
          }
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.Line, {
      padding: "0px 0px"
    })]
  });
};

/**
 * Table 骨架屏
 *
 * @param param0
 */
var TableSkeleton = exports.TableSkeleton = function TableSkeleton(_ref4) {
  var active = _ref4.active,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 4 : _ref4$size;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Card, {
    bordered: false,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton.Button, {
      active: active,
      size: "small",
      style: {
        width: 100,
        marginBlockEnd: 16
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TableItemSkeleton, {
      header: true,
      active: active
    }), new Array(size).fill(null).map(function (_, index) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        (0, _jsxRuntime.jsx)(TableItemSkeleton, {
          active: active
        }, index)
      );
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBlockStart: 16
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
        active: active,
        paragraph: false,
        title: {
          style: {
            margin: 0,
            height: 32,
            float: 'right',
            maxWidth: '630px'
          }
        }
      })
    })]
  });
};
var DescriptionsSkeleton = exports.DescriptionsSkeleton = function DescriptionsSkeleton(_ref5) {
  var active = _ref5.active;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Card, {
    bordered: false,
    style: {
      borderStartEndRadius: 0,
      borderTopLeftRadius: 0
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton.Button, {
      active: active,
      size: "small",
      style: {
        width: 100,
        marginBlockEnd: 16
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DescriptionsItemSkeleton, {
      active: active
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DescriptionsLargeItemSkeleton, {
      active: active
    })]
  });
};
var DescriptionsPageSkeleton = function DescriptionsPageSkeleton(_ref6) {
  var _ref6$active = _ref6.active,
    active = _ref6$active === void 0 ? true : _ref6$active,
    pageHeader = _ref6.pageHeader,
    list = _ref6.list;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      width: '100%'
    },
    children: [pageHeader !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.PageHeaderSkeleton, {
      active: active
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DescriptionsSkeleton, {
      active: active
    }), list !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.Line, {}), list !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)(TableSkeleton, {
      active: active,
      size: list
    })]
  });
};
var _default = exports.default = DescriptionsPageSkeleton;