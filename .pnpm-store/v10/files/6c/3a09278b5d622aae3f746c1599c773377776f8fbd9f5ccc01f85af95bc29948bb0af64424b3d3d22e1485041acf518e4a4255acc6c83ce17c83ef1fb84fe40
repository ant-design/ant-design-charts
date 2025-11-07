"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseForm = BaseForm;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _useParams = require("@umijs/use-params");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _set = _interopRequireDefault(require("rc-util/lib/utils/set"));
var _warning = require("rc-util/lib/warning");
var _react = _interopRequireWildcard(require("react"));
var _FieldContext = _interopRequireDefault(require("../FieldContext"));
var _components = require("../components");
var _List = require("../components/List");
var _helpers = require("../helpers");
var _EditOrReadOnlyContext = require("./EditOrReadOnlyContext");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "contentRender", "submitter", "fieldProps", "formItemProps", "groupProps", "transformKey", "formRef", "onInit", "form", "loading", "formComponentType", "extraUrlParams", "syncToUrl", "onUrlSearchChange", "onReset", "omitNil", "isKeyPressSubmit", "autoFocusFirstInput", "grid", "rowProps", "colProps"],
  _excluded2 = ["extraUrlParams", "syncToUrl", "isKeyPressSubmit", "syncToUrlAsImportant", "syncToInitialValues", "children", "contentRender", "submitter", "fieldProps", "proFieldProps", "formItemProps", "groupProps", "dateFormatter", "formRef", "onInit", "form", "formComponentType", "onReset", "grid", "rowProps", "colProps", "omitNil", "request", "params", "initialValues", "formKey", "readonly", "onLoadingChange", "loading"];
/* eslint-disable react-hooks/exhaustive-deps */
var genParams = function genParams(syncUrl, params, type) {
  if (syncUrl === true) {
    return params;
  }
  return (0, _proUtils.runFunction)(syncUrl, params, type);
};
/**
 * It takes a name path and converts it to an array.
 * @param {NamePath} name - The name of the form.
 * @returns string[]
 *
 * a-> [a]
 * [a] -> [a]
 */
var covertFormName = function covertFormName(name) {
  if (!name) return name;
  if (Array.isArray(name)) return name;
  return [name];
};
function BaseFormComponents(props) {
  var _ConfigProvider$useCo;
  var children = props.children,
    contentRender = props.contentRender,
    submitter = props.submitter,
    fieldProps = props.fieldProps,
    formItemProps = props.formItemProps,
    groupProps = props.groupProps,
    transformKey = props.transformKey,
    propsFormRef = props.formRef,
    onInit = props.onInit,
    form = props.form,
    loading = props.loading,
    formComponentType = props.formComponentType,
    _props$extraUrlParams = props.extraUrlParams,
    extraUrlParams = _props$extraUrlParams === void 0 ? {} : _props$extraUrlParams,
    syncToUrl = props.syncToUrl,
    onUrlSearchChange = props.onUrlSearchChange,
    _onReset = props.onReset,
    _props$omitNil = props.omitNil,
    omitNil = _props$omitNil === void 0 ? true : _props$omitNil,
    isKeyPressSubmit = props.isKeyPressSubmit,
    _props$autoFocusFirst = props.autoFocusFirstInput,
    autoFocusFirstInput = _props$autoFocusFirst === void 0 ? true : _props$autoFocusFirst,
    grid = props.grid,
    rowProps = props.rowProps,
    colProps = props.colProps,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);

  /**
   * 获取 form 实例
   */
  var formInstance = _antd.Form.useFormInstance();
  var _ref = (_antd.ConfigProvider === null || _antd.ConfigProvider === void 0 || (_ConfigProvider$useCo = _antd.ConfigProvider.useConfig) === null || _ConfigProvider$useCo === void 0 ? void 0 : _ConfigProvider$useCo.call(_antd.ConfigProvider)) || {
      componentSize: 'middle'
    },
    componentSize = _ref.componentSize;

  /** 同步 url 上的参数 */
  var formRef = (0, _react.useRef)(form || formInstance);

  /**
   * 获取布局
   */
  var _useGridHelpers = (0, _helpers.useGridHelpers)({
      grid: grid,
      rowProps: rowProps
    }),
    RowWrapper = _useGridHelpers.RowWrapper;
  var getFormInstance = (0, _proUtils.useRefFunction)(function () {
    return formInstance;
  });
  var formatValues = (0, _react.useMemo)(function () {
    return {
      /**
       * 获取被 ProForm 格式化后的所有数据
       * @param allData boolean
       * @returns T
       *
       * @example  getFieldsFormatValue(true) ->返回所有数据，即使没有被 form 托管的
       */
      getFieldsFormatValue: function getFieldsFormatValue(allData) {
        var _getFormInstance;
        return transformKey((_getFormInstance = getFormInstance()) === null || _getFormInstance === void 0 ? void 0 : _getFormInstance.getFieldsValue(allData), omitNil);
      },
      /**
       * 获取被 ProForm 格式化后的单个数据
       * @param nameList (string|number)[]
       * @returns T
       *
       * @example {a:{b:value}} -> getFieldFormatValue(['a', 'b']) -> value
       */
      /** 获取格式化之后的单个数据 */
      getFieldFormatValue: function getFieldFormatValue() {
        var _getFormInstance2;
        var paramsNameList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var nameList = covertFormName(paramsNameList);
        if (!nameList) throw new Error('nameList is require');
        var value = (_getFormInstance2 = getFormInstance()) === null || _getFormInstance2 === void 0 ? void 0 : _getFormInstance2.getFieldValue(nameList);
        var obj = nameList ? (0, _set.default)({}, nameList, value) : value;
        //transformKey会将keys重新和nameList拼接，所以这里要将nameList的首个元素弹出
        var newNameList = (0, _toConsumableArray2.default)(nameList);
        newNameList.shift();
        return (0, _get.default)(transformKey(obj, omitNil, newNameList), nameList);
      },
      /**
       * 获取被 ProForm 格式化后的单个数据, 包含他的 name
       * @param nameList (string|number)[]
       * @returns T
       *
       * @example  {a:{b:value}} -> getFieldFormatValueObject(['a', 'b']) -> {a:{b:value}}
       */
      /** 获取格式化之后的单个数据 */
      getFieldFormatValueObject: function getFieldFormatValueObject(paramsNameList) {
        var _getFormInstance3;
        var nameList = covertFormName(paramsNameList);
        var value = (_getFormInstance3 = getFormInstance()) === null || _getFormInstance3 === void 0 ? void 0 : _getFormInstance3.getFieldValue(nameList);
        var obj = nameList ? (0, _set.default)({}, nameList, value) : value;
        return transformKey(obj, omitNil, nameList);
      },
      /** 
      /**
       *验字段后返回格式化之后的所有数据
       * @param nameList (string|number)[]
       * @returns T
       * 
       * @example validateFieldsReturnFormatValue -> {a:{b:value}}
       */
      validateFieldsReturnFormatValue: function () {
        var _validateFieldsReturnFormatValue = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(nameList) {
          var _getFormInstance4;
          var values, transformedKey;
          return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(!Array.isArray(nameList) && nameList)) {
                  _context.next = 2;
                  break;
                }
                throw new Error('nameList must be array');
              case 2:
                _context.next = 4;
                return (_getFormInstance4 = getFormInstance()) === null || _getFormInstance4 === void 0 ? void 0 : _getFormInstance4.validateFields(nameList);
              case 4:
                values = _context.sent;
                transformedKey = transformKey(values, omitNil);
                return _context.abrupt("return", transformedKey ? transformedKey : {});
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function validateFieldsReturnFormatValue(_x) {
          return _validateFieldsReturnFormatValue.apply(this, arguments);
        }
        return validateFieldsReturnFormatValue;
      }()
    };
  }, [omitNil, transformKey]);
  var items = (0, _react.useMemo)(function () {
    return _react.default.Children.toArray(children).map(function (item, index) {
      if (index === 0 && /*#__PURE__*/_react.default.isValidElement(item) && autoFocusFirstInput) {
        return /*#__PURE__*/_react.default.cloneElement(item, (0, _objectSpread4.default)((0, _objectSpread4.default)({}, item.props), {}, {
          autoFocus: autoFocusFirstInput
        }));
      }
      return item;
    });
  }, [autoFocusFirstInput, children]);

  /** 计算 props 的对象 */
  var submitterProps = (0, _react.useMemo)(function () {
    return typeof submitter === 'boolean' || !submitter ? {} : submitter;
  }, [submitter]);

  /** 渲染提交按钮与重置按钮 */
  var submitterNode = (0, _react.useMemo)(function () {
    if (submitter === false) return undefined;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Submitter, (0, _objectSpread4.default)((0, _objectSpread4.default)({}, submitterProps), {}, {
      onReset: function onReset() {
        var _formRef$current, _submitterProps$onRes;
        var finalValues = transformKey((_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.getFieldsValue(), omitNil);
        submitterProps === null || submitterProps === void 0 || (_submitterProps$onRes = submitterProps.onReset) === null || _submitterProps$onRes === void 0 || _submitterProps$onRes.call(submitterProps, finalValues);
        _onReset === null || _onReset === void 0 || _onReset(finalValues);
        // 如果 syncToUrl，清空一下数据
        if (syncToUrl) {
          var _formRef$current2;
          // 把没有的值设置为未定义可以删掉 url 的参数
          var params = Object.keys(transformKey((_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 ? void 0 : _formRef$current2.getFieldsValue(), false)).reduce(function (pre, next) {
            return (0, _objectSpread4.default)((0, _objectSpread4.default)({}, pre), {}, (0, _defineProperty2.default)({}, next, finalValues[next] || undefined));
          }, extraUrlParams);

          /** 在同步到 url 上时对参数进行转化 */
          onUrlSearchChange(genParams(syncToUrl, params || {}, 'set'));
        }
      },
      submitButtonProps: (0, _objectSpread4.default)({
        loading: loading
      }, submitterProps.submitButtonProps)
    }), "submitter");
  }, [submitter, submitterProps, loading, transformKey, omitNil, _onReset, syncToUrl, extraUrlParams, onUrlSearchChange]);
  var content = (0, _react.useMemo)(function () {
    var wrapItems = grid ? /*#__PURE__*/(0, _jsxRuntime.jsx)(RowWrapper, {
      children: items
    }) : items;
    if (contentRender) {
      return contentRender(wrapItems, submitterNode, formRef.current);
    }
    return wrapItems;
  }, [grid, RowWrapper, items, contentRender, submitterNode]);
  var preInitialValues = (0, _proUtils.usePrevious)(props.initialValues);

  // 提示一个 initialValues ，问的人实在是太多了
  (0, _react.useEffect)(function () {
    if (syncToUrl || !props.initialValues || !preInitialValues || rest.request) return;
    var isEqual = (0, _proUtils.isDeepEqualReact)(props.initialValues, preInitialValues);
    (0, _warning.noteOnce)(isEqual, "initialValues \u53EA\u5728 form \u521D\u59CB\u5316\u65F6\u751F\u6548\uFF0C\u5982\u679C\u4F60\u9700\u8981\u5F02\u6B65\u52A0\u8F7D\u63A8\u8350\u4F7F\u7528 request\uFF0C\u6216\u8005 initialValues ? <Form/> : null ");
    (0, _warning.noteOnce)(isEqual, "The initialValues only take effect when the form is initialized, if you need to load asynchronously recommended request, or the initialValues ? <Form/> : null ");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.initialValues]);

  // 初始化给一个默认的 form
  (0, _react.useImperativeHandle)(propsFormRef, function () {
    return (0, _objectSpread4.default)((0, _objectSpread4.default)({}, formRef.current), formatValues);
  }, [formatValues, formRef.current]);
  (0, _react.useEffect)(function () {
    var _formRef$current3, _formRef$current3$get;
    var finalValues = transformKey((_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 || (_formRef$current3$get = _formRef$current3.getFieldsValue) === null || _formRef$current3$get === void 0 ? void 0 : _formRef$current3$get.call(_formRef$current3, true), omitNil);
    onInit === null || onInit === void 0 || onInit(finalValues, (0, _objectSpread4.default)((0, _objectSpread4.default)({}, formRef.current), formatValues));
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.ProFormContext.Provider, {
    value: (0, _objectSpread4.default)((0, _objectSpread4.default)({}, formatValues), {}, {
      formRef: formRef
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider, {
      componentSize: rest.size || componentSize,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_helpers.GridContext.Provider, {
        value: {
          grid: grid,
          colProps: colProps
        },
        children: [rest.component !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          style: {
            display: 'none'
          }
        }), content]
      })
    })
  });
}

/** 自动的formKey 防止重复 */
var requestFormCacheId = 0;
function BaseForm(props) {
  var _props$extraUrlParams2 = props.extraUrlParams,
    extraUrlParams = _props$extraUrlParams2 === void 0 ? {} : _props$extraUrlParams2,
    syncToUrl = props.syncToUrl,
    isKeyPressSubmit = props.isKeyPressSubmit,
    _props$syncToUrlAsImp = props.syncToUrlAsImportant,
    syncToUrlAsImportant = _props$syncToUrlAsImp === void 0 ? false : _props$syncToUrlAsImp,
    _props$syncToInitialV = props.syncToInitialValues,
    syncToInitialValues = _props$syncToInitialV === void 0 ? true : _props$syncToInitialV,
    children = props.children,
    contentRender = props.contentRender,
    submitter = props.submitter,
    fieldProps = props.fieldProps,
    proFieldProps = props.proFieldProps,
    formItemProps = props.formItemProps,
    groupProps = props.groupProps,
    _props$dateFormatter = props.dateFormatter,
    dateFormatter = _props$dateFormatter === void 0 ? 'string' : _props$dateFormatter,
    propsFormRef = props.formRef,
    onInit = props.onInit,
    form = props.form,
    formComponentType = props.formComponentType,
    onReset = props.onReset,
    grid = props.grid,
    rowProps = props.rowProps,
    colProps = props.colProps,
    _props$omitNil2 = props.omitNil,
    omitNil = _props$omitNil2 === void 0 ? true : _props$omitNil2,
    request = props.request,
    params = props.params,
    initialValues = props.initialValues,
    _props$formKey = props.formKey,
    formKey = _props$formKey === void 0 ? requestFormCacheId : _props$formKey,
    readonly = props.readonly,
    onLoadingChange = props.onLoadingChange,
    propsLoading = props.loading,
    propRest = (0, _objectWithoutProperties2.default)(props, _excluded2);
  var formRef = (0, _react.useRef)({});
  var _useMountMergeState = (0, _proUtils.useMountMergeState)(false, {
      onChange: onLoadingChange,
      value: propsLoading
    }),
    _useMountMergeState2 = (0, _slicedToArray2.default)(_useMountMergeState, 2),
    loading = _useMountMergeState2[0],
    setLoading = _useMountMergeState2[1];
  var _useUrlSearchParams = (0, _useParams.useUrlSearchParams)({}, {
      disabled: !syncToUrl
    }),
    _useUrlSearchParams2 = (0, _slicedToArray2.default)(_useUrlSearchParams, 2),
    urlSearch = _useUrlSearchParams2[0],
    setUrlSearch = _useUrlSearchParams2[1];
  var curFormKey = (0, _react.useRef)((0, _proUtils.nanoid)());
  (0, _react.useEffect)(function () {
    requestFormCacheId += 0;
  }, []);
  var _useFetchData = (0, _proUtils.useFetchData)({
      request: request,
      params: params,
      proFieldKey: formKey
    }),
    _useFetchData2 = (0, _slicedToArray2.default)(_useFetchData, 1),
    initialData = _useFetchData2[0];
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-form');
  // css
  var _useStyle = (0, _proUtils.useStyle)('ProForm', function (token) {
      return (0, _defineProperty2.default)({}, ".".concat(prefixCls), (0, _defineProperty2.default)({}, "> div:not(".concat(token.proComponentsCls, "-form-light-filter)"), {
        '.pro-field': {
          maxWidth: '100%',
          '@media screen and (max-width: 575px)': {
            // 减少了 form 的 padding
            maxWidth: 'calc(93vw - 48px)'
          },
          // 适用于短数字，短文本或者选项
          '&-xs': {
            width: 104
          },
          '&-s': {
            width: 216
          },
          // 适用于较短字段录入、如姓名、电话、ID 等。
          '&-sm': {
            width: 216
          },
          '&-m': {
            width: 328
          },
          // 标准宽度，适用于大部分字段长度
          '&-md': {
            width: 328
          },
          '&-l': {
            width: 440
          },
          // 适用于较长字段录入，如长网址、标签组、文件路径等。
          '&-lg': {
            width: 440
          },
          // 适用于长文本录入，如长链接、描述、备注等，通常搭配自适应多行输入框或定高文本域使用。
          '&-xl': {
            width: 552
          }
        }
      }));
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;

  // 如果为 false，不需要触发设置进去
  var _useState = (0, _react.useState)(function () {
      if (!syncToUrl) {
        return {};
      }
      return genParams(syncToUrl, urlSearch, 'get');
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    urlParamsMergeInitialValues = _useState2[0],
    setUrlParamsMergeInitialValues = _useState2[1];

  /** 保存 transformKeyRef，用于对表单key transform */
  var transformKeyRef = (0, _react.useRef)({});
  var fieldsValueType = (0, _react.useRef)({});

  /** 使用 callback 的类型 */
  var transformKey = (0, _proUtils.useRefFunction)(function (values, paramsOmitNil, parentKey) {
    return (0, _proUtils.transformKeySubmitValue)((0, _proUtils.conversionMomentValue)(values, dateFormatter, fieldsValueType.current, paramsOmitNil, parentKey), transformKeyRef.current, paramsOmitNil);
  });
  (0, _react.useEffect)(function () {
    if (syncToInitialValues) return;
    setUrlParamsMergeInitialValues({});
  }, [syncToInitialValues]);
  var getGenParams = (0, _proUtils.useRefFunction)(function () {
    return (0, _objectSpread4.default)((0, _objectSpread4.default)({}, urlSearch), extraUrlParams);
  });
  (0, _react.useEffect)(function () {
    if (!syncToUrl) return;
    setUrlSearch(genParams(syncToUrl, getGenParams(), 'set'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extraUrlParams, getGenParams, syncToUrl]);
  var getPopupContainer = (0, _react.useMemo)(function () {
    if (typeof window === 'undefined') return undefined;
    // 如果在 drawerForm 和  modalForm 里就渲染dom到父节点里
    // modalForm 可能高度太小不适合
    if (formComponentType && ['DrawerForm'].includes(formComponentType)) {
      return function (e) {
        return e.parentNode || document.body;
      };
    }
    return undefined;
  }, [formComponentType]);
  var onFinish = (0, _proUtils.useRefFunction)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2() {
    var _formRef$current4, _formRef$current4$get, finalValues, response, _formRef$current5, _formRef$current5$get, syncToUrlParams;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (propRest.onFinish) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return");
        case 2:
          if (!loading) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return");
        case 4:
          _context2.prev = 4;
          finalValues = formRef === null || formRef === void 0 || (_formRef$current4 = formRef.current) === null || _formRef$current4 === void 0 || (_formRef$current4$get = _formRef$current4.getFieldsFormatValue) === null || _formRef$current4$get === void 0 ? void 0 : _formRef$current4$get.call(_formRef$current4);
          response = propRest.onFinish(finalValues);
          if (response instanceof Promise) {
            setLoading(true);
          }
          _context2.next = 10;
          return response;
        case 10:
          if (syncToUrl) {
            // 把没有的值设置为未定义可以删掉 url 的参数
            syncToUrlParams = Object.keys(formRef === null || formRef === void 0 || (_formRef$current5 = formRef.current) === null || _formRef$current5 === void 0 || (_formRef$current5$get = _formRef$current5.getFieldsFormatValue) === null || _formRef$current5$get === void 0 ? void 0 : _formRef$current5$get.call(_formRef$current5, undefined, false)).reduce(function (pre, next) {
              var _finalValues$next;
              return (0, _objectSpread4.default)((0, _objectSpread4.default)({}, pre), {}, (0, _defineProperty2.default)({}, next, (_finalValues$next = finalValues[next]) !== null && _finalValues$next !== void 0 ? _finalValues$next : undefined));
            }, extraUrlParams); // fix #3547: 当原先在url中存在的字段被删除时，应该将 params 中的该字段设置为 undefined,以便触发url同步删除
            Object.keys(urlSearch).forEach(function (key) {
              if (syncToUrlParams[key] !== false && syncToUrlParams[key] !== 0 && !syncToUrlParams[key]) {
                syncToUrlParams[key] = undefined;
              }
            });
            /** 在同步到 url 上时对参数进行转化 */
            setUrlSearch(genParams(syncToUrl, syncToUrlParams, 'set'));
          }
          setLoading(false);
          _context2.next = 18;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](4);
          console.log(_context2.t0);
          setLoading(false);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 14]]);
  })));

  // 初始化给一个默认的 form
  (0, _react.useImperativeHandle)(propsFormRef, function () {
    return formRef.current;
  }, [!initialData]);
  if (!initialData && props.request) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        paddingTop: 50,
        paddingBottom: 50,
        textAlign: 'center'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {})
    });
  }
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditOrReadOnlyContext.EditOrReadOnlyContext.Provider, {
    value: {
      mode: props.readonly ? 'read' : 'edit'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_proProvider.ProConfigProvider, {
      needDeps: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldContext.default.Provider, {
        value: {
          formRef: formRef,
          fieldProps: fieldProps,
          proFieldProps: proFieldProps,
          formItemProps: formItemProps,
          groupProps: groupProps,
          formComponentType: formComponentType,
          getPopupContainer: getPopupContainer,
          formKey: curFormKey.current,
          setFieldValueType: function setFieldValueType(name, _ref4) {
            var _ref4$valueType = _ref4.valueType,
              valueType = _ref4$valueType === void 0 ? 'text' : _ref4$valueType,
              dateFormat = _ref4.dateFormat,
              transform = _ref4.transform;
            if (!Array.isArray(name)) return;
            transformKeyRef.current = (0, _set.default)(transformKeyRef.current, name, transform);
            fieldsValueType.current = (0, _set.default)(fieldsValueType.current, name, {
              valueType: valueType,
              dateFormat: dateFormat
            });
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.FormListContext.Provider, {
          value: {},
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form, (0, _objectSpread4.default)((0, _objectSpread4.default)({
            onKeyPress: function onKeyPress(event) {
              if (!isKeyPressSubmit) return;
              if (event.key === 'Enter') {
                var _formRef$current6;
                (_formRef$current6 = formRef.current) === null || _formRef$current6 === void 0 || _formRef$current6.submit();
              }
            },
            autoComplete: "off",
            form: form
          }, (0, _omit.default)(propRest, ['ref', 'labelWidth', 'autoFocusFirstInput'])), {}, {
            ref: function ref(instance) {
              if (!formRef.current) return;
              formRef.current.nativeElement = instance === null || instance === void 0 ? void 0 : instance.nativeElement;
            }
            // 组合 urlSearch 和 initialValues
            ,
            initialValues: syncToUrlAsImportant ? (0, _objectSpread4.default)((0, _objectSpread4.default)((0, _objectSpread4.default)({}, initialValues), initialData), urlParamsMergeInitialValues) : (0, _objectSpread4.default)((0, _objectSpread4.default)((0, _objectSpread4.default)({}, urlParamsMergeInitialValues), initialValues), initialData),
            onValuesChange: function onValuesChange(changedValues, values) {
              var _propRest$onValuesCha;
              propRest === null || propRest === void 0 || (_propRest$onValuesCha = propRest.onValuesChange) === null || _propRest$onValuesCha === void 0 || _propRest$onValuesCha.call(propRest, transformKey(changedValues, !!omitNil), transformKey(values, !!omitNil));
            },
            className: (0, _classnames.default)(props.className, prefixCls, hashId),
            onFinish: onFinish,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(BaseFormComponents, (0, _objectSpread4.default)((0, _objectSpread4.default)({
              transformKey: transformKey,
              autoComplete: "off",
              loading: loading,
              onUrlSearchChange: setUrlSearch
            }, props), {}, {
              formRef: formRef,
              initialValues: (0, _objectSpread4.default)((0, _objectSpread4.default)({}, initialValues), initialData)
            }))
          }))
        })
      })
    })
  }));
}