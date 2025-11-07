import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["data", "success", "total"];
import { runFunction, useDebounceFn, useDeepCompareEffect, useMountMergeState, usePrevious, useRefFunction } from '@ant-design/pro-utils';
import { useEffect, useRef } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { postDataPipeline } from "./utils/index";

/**
 * 组合用户的配置和默认值
 *
 * @param param0
 */
var mergeOptionAndPageInfo = function mergeOptionAndPageInfo(_ref) {
  var pageInfo = _ref.pageInfo;
  if (pageInfo) {
    var current = pageInfo.current,
      defaultCurrent = pageInfo.defaultCurrent,
      pageSize = pageInfo.pageSize,
      defaultPageSize = pageInfo.defaultPageSize;
    return {
      current: current || defaultCurrent || 1,
      total: 0,
      pageSize: pageSize || defaultPageSize || 20
    };
  }
  return {
    current: 1,
    total: 0,
    pageSize: 20
  };
};

/**
 * useFetchData hook 用来获取数据并控制数据的状态和分页
 * @template T
 * @param {(undefined | ((params?: { pageSize: number; current: number }) => Promise<DataSource>))} getData - 获取数据的函数，参数为分页参数，
 * 返回一个 Promise 类型的 T 类型的数据
 * @param {(undefined | any[])} defaultData - 默认的数据
 * @param {UseFetchProps} options - 配置项，包括了默认的分页参数、格式化数据的函数等
 * @returns {UseFetchDataAction} 返回一个对象，包含当前的数据列表、loading 状态、error、以及可控制的分页参数等
 */
var useFetchData = function useFetchData(getData, defaultData, options) {
  var _options$loading;
  /**
   * 用于保存组件是否被卸载的状态的引用
   * @type {React.MutableRefObject<boolean>}
   */
  var umountRef = useRef(false);
  /**
   * 用于保存 AbortController 实例的引用，方便需要时进行请求的取消操作
   * @type {React.MutableRefObject<AbortController | null>}
   */
  var abortRef = useRef(null);
  /**
   * useFetchData 钩子的配置项
   * @typedef {object} UseFetchProps
   * @property {boolean} [onLoad=false] 是否在页面加载时执行请求，默认为 false
   * @property {boolean} [manual=false] 是否手动触发请求，默认为 false
   * @property {number | boolean} [polling=false] 是否开启轮询，可以为数字表示轮询的时间间隔，也可以为 true 表示开启默认时间为 1s 的轮询
   * @property {function} [onRequestError] 请求错误的回调函数
   * @property {number} [debounceTime=20] 防抖时间，单位为毫秒，默认为 20ms
   */
  var _ref2 = options || {},
    onLoad = _ref2.onLoad,
    manual = _ref2.manual,
    polling = _ref2.polling,
    onRequestError = _ref2.onRequestError,
    _ref2$debounceTime = _ref2.debounceTime,
    debounceTime = _ref2$debounceTime === void 0 ? 20 : _ref2$debounceTime,
    _ref2$effects = _ref2.effects,
    effects = _ref2$effects === void 0 ? [] : _ref2$effects;

  /** 是否首次加载的指示器 */
  var manualRequestRef = useRef(manual);

  /** 轮询的setTime ID 存储 */
  var pollingSetTimeRef = useRef();

  /**
   * 用于存储最新的数据，这样可以在切换的时候保持数据的一致性
   */
  var _useMountMergeState = useMountMergeState(defaultData, {
      value: options === null || options === void 0 ? void 0 : options.dataSource,
      onChange: options === null || options === void 0 ? void 0 : options.onDataSourceChange
    }),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    tableDataList = _useMountMergeState2[0],
    setTableDataList = _useMountMergeState2[1];

  /**
   * 表格的加载状态
   */
  var _useMountMergeState3 = useMountMergeState(false, {
      value: _typeof(options === null || options === void 0 ? void 0 : options.loading) === 'object' ? options === null || options === void 0 || (_options$loading = options.loading) === null || _options$loading === void 0 ? void 0 : _options$loading.spinning : options === null || options === void 0 ? void 0 : options.loading,
      onChange: options === null || options === void 0 ? void 0 : options.onLoadingChange
    }),
    _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
    tableLoading = _useMountMergeState4[0],
    setTableLoading = _useMountMergeState4[1];

  /**
   * 表示页面信息的类型  useMountMergeState 钩子的初始值和参数
   * @typedef {object} PageInfo
   * @property {number} current 当前页码
   * @property {number} pageSize 页面大小
   * @property {number} total 数据总量
   * @type {[PageInfo, React.Dispatch<React.SetStateAction<PageInfo>>]}
   */
  var _useMountMergeState5 = useMountMergeState(function () {
      return mergeOptionAndPageInfo(options);
    }, {
      onChange: options === null || options === void 0 ? void 0 : options.onPageInfoChange
    }),
    _useMountMergeState6 = _slicedToArray(_useMountMergeState5, 2),
    pageInfo = _useMountMergeState6[0],
    setPageInfoState = _useMountMergeState6[1];

  /**
   * 用于比较并设置页面信息和回调函数的引用更新
   * @type {React.MutableRefObject<(changePageInfo: PageInfo) => void>}
   */
  var _setPageInfo = useRefFunction(function (changePageInfo) {
    if (changePageInfo.current !== pageInfo.current || changePageInfo.pageSize !== pageInfo.pageSize || changePageInfo.total !== pageInfo.total) {
      setPageInfoState(changePageInfo);
    }
  });
  var _useMountMergeState7 = useMountMergeState(false),
    _useMountMergeState8 = _slicedToArray(_useMountMergeState7, 2),
    pollingLoading = _useMountMergeState8[0],
    setPollingLoading = _useMountMergeState8[1];

  // Batching update  https://github.com/facebook/react/issues/14259
  var setDataAndLoading = function setDataAndLoading(newData, dataTotal) {
    unstable_batchedUpdates(function () {
      setTableDataList(newData);
      if ((pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.total) !== dataTotal) {
        _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), {}, {
          total: dataTotal || newData.length
        }));
      }
    });
  };

  /**
   * 上一页的页码
   * @type {number}
   */
  var prePage = usePrevious(pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.current);

  /**
   * 上一页的页面大小
   * @type {number}
   */
  var prePageSize = usePrevious(pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.pageSize);

  /**
   * 上一页的轮询时间
   * @type {number|boolean}
   */
  var prePolling = usePrevious(polling);

  /**
   * 不这样做会导致状态不更新
   * https://github.com/ant-design/pro-components/issues/4390
   */
  var requestFinally = useRefFunction(function () {
    unstable_batchedUpdates(function () {
      setTableLoading(false);
      setPollingLoading(false);
    });
  });
  /** 请求数据 */
  var fetchList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(isPolling) {
      var _ref4, pageSize, current, pageParams, _ref5, _ref5$data, data, success, _ref5$total, total, rest, responseData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!manualRequestRef.current) {
              _context.next = 3;
              break;
            }
            manualRequestRef.current = false;
            return _context.abrupt("return");
          case 3:
            if (!isPolling) {
              setTableLoading(true);
            } else {
              setPollingLoading(true);
            }
            _ref4 = pageInfo || {}, pageSize = _ref4.pageSize, current = _ref4.current;
            _context.prev = 5;
            pageParams = (options === null || options === void 0 ? void 0 : options.pageInfo) !== false ? {
              current: current,
              pageSize: pageSize
            } : undefined;
            _context.next = 9;
            return getData === null || getData === void 0 ? void 0 : getData(pageParams);
          case 9:
            _context.t0 = _context.sent;
            if (_context.t0) {
              _context.next = 12;
              break;
            }
            _context.t0 = {};
          case 12:
            _ref5 = _context.t0;
            _ref5$data = _ref5.data;
            data = _ref5$data === void 0 ? [] : _ref5$data;
            success = _ref5.success;
            _ref5$total = _ref5.total;
            total = _ref5$total === void 0 ? 0 : _ref5$total;
            rest = _objectWithoutProperties(_ref5, _excluded);
            if (!(success === false)) {
              _context.next = 21;
              break;
            }
            return _context.abrupt("return", []);
          case 21:
            responseData = postDataPipeline(data, [options.postData].filter(function (item) {
              return item;
            })); // 设置表格数据
            setDataAndLoading(responseData, total);
            onLoad === null || onLoad === void 0 || onLoad(responseData, rest);
            return _context.abrupt("return", responseData);
          case 27:
            _context.prev = 27;
            _context.t1 = _context["catch"](5);
            if (!(onRequestError === undefined)) {
              _context.next = 31;
              break;
            }
            throw new Error(_context.t1);
          case 31:
            if (tableDataList === undefined) setTableDataList([]);
            onRequestError(_context.t1);
          case 33:
            _context.prev = 33;
            requestFinally();
            return _context.finish(33);
          case 36:
            return _context.abrupt("return", []);
          case 37:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 27, 33, 36]]);
    }));
    return function fetchList(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * 该函数用于进行数据请求，可以用于轮询或单次请求。
   * 通过使用 AbortController 取消之前的请求，避免出现请求堆积。
   * 若需要轮询，则在一定时间后再次调用该函数，最小时间为 200ms，避免一直处于 loading 状态。
   * 如果请求被取消，则返回空。
   */
  var fetchListDebounce = useDebounceFn( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(isPolling) {
      var abort, msg, needPolling;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (pollingSetTimeRef.current) {
              clearTimeout(pollingSetTimeRef.current);
            }
            if (getData) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            abort = new AbortController();
            abortRef.current = abort;
            _context2.prev = 5;
            _context2.next = 8;
            return Promise.race([fetchList(isPolling), new Promise(function (_, reject) {
              var _abortRef$current, _abortRef$current$add;
              (_abortRef$current = abortRef.current) === null || _abortRef$current === void 0 || (_abortRef$current = _abortRef$current.signal) === null || _abortRef$current === void 0 || (_abortRef$current$add = _abortRef$current.addEventListener) === null || _abortRef$current$add === void 0 || _abortRef$current$add.call(_abortRef$current, 'abort', function () {
                reject('aborted');
                // 结束请求，并且清空loading控制
                fetchListDebounce.cancel();
                requestFinally();
              });
            })]);
          case 8:
            msg = _context2.sent;
            if (!abort.signal.aborted) {
              _context2.next = 11;
              break;
            }
            return _context2.abrupt("return");
          case 11:
            // 放到请求前面会导致数据是上一次的
            needPolling = runFunction(polling, msg);
            /*
             * 这段代码是用于控制轮询的。其中，needPolling 参数表明当前是否需要进行轮询，umountRef 是一个 ref，用来记录组件是否被卸载。
             * 如果需要轮询并且组件没有被卸载，就会调用 setTimeout，等待一定的时间，然后再次调用 fetchListDebounce 函数，并传入需要轮询的时间参数。
             * 其中 Math.max(needPolling, 2000) 用于确定最小的轮询时间为 2000ms，避免频繁请求导致一直处于 loading 状态。
             */
            if (needPolling && !umountRef.current) {
              pollingSetTimeRef.current = setTimeout(function () {
                fetchListDebounce.run(needPolling);
                // 这里判断最小要2000ms，不然一直loading
              }, Math.max(needPolling, 2000));
            }
            return _context2.abrupt("return", msg);
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](5);
            if (!(_context2.t0 === 'aborted')) {
              _context2.next = 20;
              break;
            }
            return _context2.abrupt("return");
          case 20:
            throw _context2.t0;
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 16]]);
    }));
    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }(), debounceTime || 30);

  /**
   * 取消请求
   */
  var abortFetch = function abortFetch() {
    var _abortRef$current2;
    (_abortRef$current2 = abortRef.current) === null || _abortRef$current2 === void 0 || _abortRef$current2.abort();
    fetchListDebounce.cancel();
    requestFinally();
  };

  // 如果轮询结束了，直接销毁定时器
  useEffect(function () {
    if (!polling) {
      clearTimeout(pollingSetTimeRef.current);
    }
    if (!prePolling && polling) {
      fetchListDebounce.run(true);
    }
    return function () {
      clearTimeout(pollingSetTimeRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [polling]);
  useEffect(function () {
    umountRef.current = false;
    return function () {
      umountRef.current = true;
    };
  }, []);

  /** PageIndex 改变的时候自动刷新 */
  useEffect(function () {
    var _ref7 = pageInfo || {},
      current = _ref7.current,
      pageSize = _ref7.pageSize;
    // 如果上次的页码为空或者两次页码等于是没必要查询的
    // 如果 pageSize 发生变化是需要查询的，所以又加了 prePageSize
    if ((!prePage || prePage === current) && (!prePageSize || prePageSize === pageSize)) {
      return;
    }
    if (options.pageInfo && tableDataList && (tableDataList === null || tableDataList === void 0 ? void 0 : tableDataList.length) > pageSize || 0) {
      return;
    }

    // 如果 list 的长度大于 pageSize 的长度
    // 说明是一个假分页
    // (pageIndex - 1 || 1) 至少要第一页
    // 在第一页大于 10
    // 第二页也应该是大于 10
    if (current !== undefined && tableDataList && tableDataList.length <= pageSize) {
      abortFetch();
      fetchListDebounce.run(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.current]);

  // pageSize 修改后返回第一页
  useEffect(function () {
    if (!prePageSize) {
      return;
    }
    abortFetch();
    fetchListDebounce.run(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.pageSize]);

  /**
   * 检查是否有正在进行的请求需要被中止。如果是，则使用 abortRef 中的方法来中止请求。
   * 接下来，使用名为 fetchListDebounce 的防抖函数并传入 false 参数。这个函数可以防止请求过于频繁地发出，通过延迟执行传递给它的函数来实现。
   * 最后，检查是否有正在进行的请求，如果有，则中止它。
   */
  useDeepCompareEffect(function () {
    abortFetch();
    fetchListDebounce.run(false);
    if (!manual) {
      // 如果 manual 标志未设置，则将 manualRequestRef 设置为 false。
      // 用于跟踪当前的请求是否是手动发起的。
      manualRequestRef.current = false;
    }
    return function () {
      abortFetch();
    };
  }, [].concat(_toConsumableArray(effects), [manual]));
  return {
    /**
     * 表格的数据列表。
     * @type {DataSource[]}
     */
    dataSource: tableDataList,
    /**
     * 用于设置表格数据列表的 setter 函数。
     * @type {function}
     * @param {DataSource[]} list - 更新后的表格数据列表。
     */
    setDataSource: setTableDataList,
    /**
     * 表示表格是否正在加载数据的标志。
     * @type {boolean}
     */
    loading: _typeof(options === null || options === void 0 ? void 0 : options.loading) === 'object' ? _objectSpread(_objectSpread({}, options === null || options === void 0 ? void 0 : options.loading), {}, {
      spinning: tableLoading
    }) : tableLoading,
    /**
     * 重新加载表格数据的函数。
     * @type {function}
     * @async
     * @returns {Promise<boolean>} - 数据重新加载完成后解决为 true 的 Promise。
     */
    reload: function () {
      var _reload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              abortFetch();
              return _context3.abrupt("return", fetchListDebounce.run(false));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function reload() {
        return _reload.apply(this, arguments);
      }
      return reload;
    }(),
    /**
     * 当前的分页信息。
     * @type {Object}
     * @prop {number} current - 当前页码。
     * @prop {number} total - 总数据数量。
     * @prop {number} pageSize - 每页数据数量。
     */
    pageInfo: pageInfo,
    /**
     * 表示表格是否正在进行轮询请求的标志。
     * @type {boolean}
     */
    pollingLoading: pollingLoading,
    /**
     * 重置分页信息为其初始值的函数。
     * @type {function}
     * @async
     * @returns {Promise<void>} - 重置完成后解决的 Promise。
     */
    reset: function () {
      var _reset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _ref8, optionPageInfo, _ref9, _ref9$defaultCurrent, defaultCurrent, _ref9$defaultPageSize, defaultPageSize, initialPageInfo;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _ref8 = options || {}, optionPageInfo = _ref8.pageInfo;
              _ref9 = optionPageInfo || {}, _ref9$defaultCurrent = _ref9.defaultCurrent, defaultCurrent = _ref9$defaultCurrent === void 0 ? 1 : _ref9$defaultCurrent, _ref9$defaultPageSize = _ref9.defaultPageSize, defaultPageSize = _ref9$defaultPageSize === void 0 ? 20 : _ref9$defaultPageSize;
              initialPageInfo = {
                current: defaultCurrent,
                total: 0,
                pageSize: defaultPageSize
              };
              _setPageInfo(initialPageInfo);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }(),
    /**
     * 更新分页信息的函数。
     * @type {function}
     * @async
     * @param {Object} info - 新的分页信息。
     * @prop {number} [current] - 新的当前页码。
     * @prop {number} [total] - 新的总数据数量。
     * @prop {number} [pageSize] - 新的每页数据数量。
     * @returns {Promise<void>} - 更新完成后解决的 Promise。
     */
    setPageInfo: function () {
      var _setPageInfo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(info) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _setPageInfo(_objectSpread(_objectSpread({}, pageInfo), info));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function setPageInfo(_x3) {
        return _setPageInfo2.apply(this, arguments);
      }
      return setPageInfo;
    }()
  };
};
export default useFetchData;