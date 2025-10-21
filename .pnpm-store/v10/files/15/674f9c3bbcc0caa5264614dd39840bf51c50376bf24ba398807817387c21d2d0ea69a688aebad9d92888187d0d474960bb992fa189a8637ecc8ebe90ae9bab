(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('hoist-non-react-statics')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'hoist-non-react-statics'], factory) :
  (global = global || self, factory(global.loadable = {}, global.React, global.hoistNonReactStatics));
}(this, (function (exports, React, hoistNonReactStatics) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  hoistNonReactStatics = hoistNonReactStatics && hoistNonReactStatics.hasOwnProperty('default') ? hoistNonReactStatics['default'] : hoistNonReactStatics;

  /* eslint-disable import/prefer-default-export */
  function invariant(condition, message) {
    if (condition) return;
    var error = new Error("loadable: " + message);
    error.framesToPop = 1;
    error.name = 'Invariant Violation';
    throw error;
  }
  function warn(message) {
    // eslint-disable-next-line no-console
    console.warn("loadable: " + message);
  }

  var Context = /*#__PURE__*/
  React.createContext();

  var LOADABLE_REQUIRED_CHUNKS_KEY = '__LOADABLE_REQUIRED_CHUNKS__';
  function getRequiredChunkKey(namespace) {
    return "" + namespace + LOADABLE_REQUIRED_CHUNKS_KEY;
  }

  var sharedInternals = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getRequiredChunkKey: getRequiredChunkKey,
    invariant: invariant,
    Context: Context
  });

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_production_min = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var b = "function" === typeof Symbol && Symbol["for"],
      c = b ?
  /*#__PURE__*/
  Symbol["for"]("react.element") : 60103,
      d = b ?
  /*#__PURE__*/
  Symbol["for"]("react.portal") : 60106,
      e = b ?
  /*#__PURE__*/
  Symbol["for"]("react.fragment") : 60107,
      f = b ?
  /*#__PURE__*/
  Symbol["for"]("react.strict_mode") : 60108,
      g = b ?
  /*#__PURE__*/
  Symbol["for"]("react.profiler") : 60114,
      h = b ?
  /*#__PURE__*/
  Symbol["for"]("react.provider") : 60109,
      k = b ?
  /*#__PURE__*/
  Symbol["for"]("react.context") : 60110,
      l = b ?
  /*#__PURE__*/
  Symbol["for"]("react.async_mode") : 60111,
      m = b ?
  /*#__PURE__*/
  Symbol["for"]("react.concurrent_mode") : 60111,
      n = b ?
  /*#__PURE__*/
  Symbol["for"]("react.forward_ref") : 60112,
      p = b ?
  /*#__PURE__*/
  Symbol["for"]("react.suspense") : 60113,
      q = b ?
  /*#__PURE__*/
  Symbol["for"]("react.suspense_list") : 60120,
      r = b ?
  /*#__PURE__*/
  Symbol["for"]("react.memo") : 60115,
      t = b ?
  /*#__PURE__*/
  Symbol["for"]("react.lazy") : 60116,
      v = b ?
  /*#__PURE__*/
  Symbol["for"]("react.fundamental") : 60117,
      w = b ?
  /*#__PURE__*/
  Symbol["for"]("react.responder") : 60118,
      x = b ?
  /*#__PURE__*/
  Symbol["for"]("react.scope") : 60119;

  function y(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case d:
          return u;
      }
    }
  }

  function z(a) {
    return y(a) === m;
  }

  exports.typeOf = y;
  exports.AsyncMode = l;
  exports.ConcurrentMode = m;
  exports.ContextConsumer = k;
  exports.ContextProvider = h;
  exports.Element = c;
  exports.ForwardRef = n;
  exports.Fragment = e;
  exports.Lazy = t;
  exports.Memo = r;
  exports.Portal = d;
  exports.Profiler = g;
  exports.StrictMode = f;
  exports.Suspense = p;

  exports.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
  };

  exports.isAsyncMode = function (a) {
    return z(a) || y(a) === l;
  };

  exports.isConcurrentMode = z;

  exports.isContextConsumer = function (a) {
    return y(a) === k;
  };

  exports.isContextProvider = function (a) {
    return y(a) === h;
  };

  exports.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };

  exports.isForwardRef = function (a) {
    return y(a) === n;
  };

  exports.isFragment = function (a) {
    return y(a) === e;
  };

  exports.isLazy = function (a) {
    return y(a) === t;
  };

  exports.isMemo = function (a) {
    return y(a) === r;
  };

  exports.isPortal = function (a) {
    return y(a) === d;
  };

  exports.isProfiler = function (a) {
    return y(a) === g;
  };

  exports.isStrictMode = function (a) {
    return y(a) === f;
  };

  exports.isSuspense = function (a) {
    return y(a) === p;
  };
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {

  {
    (function () {

      Object.defineProperty(exports, '__esModule', {
        value: true
      }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.lazy') : 0xead4;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ?
      /*#__PURE__*/
      Symbol["for"]('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
      }
      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */


      var lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack() {};

      {
        var printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });

          if (typeof console !== 'undefined') {
            console.warn(message);
          }

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack(condition, format) {
          if (format === undefined) {
            throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
          }

          if (!condition) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(void 0, [format].concat(args));
          }
        };
      }
      var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports =
    /*#__PURE__*/
    reactIs_development;
  }
  });

  var ReactIs = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': reactIs,
    __moduleExports: reactIs
  });

  var LOADABLE_SHARED = {
    initialChunks: {}
  };

  var STATUS_PENDING = 'PENDING';
  var STATUS_RESOLVED = 'RESOLVED';
  var STATUS_REJECTED = 'REJECTED';

  function resolveConstructor(ctor) {
    if (typeof ctor === 'function') {
      return {
        requireAsync: ctor,
        resolve: function resolve() {
          return undefined;
        },
        chunkName: function chunkName() {
          return undefined;
        }
      };
    }

    return ctor;
  }

  var withChunkExtractor = function withChunkExtractor(Component) {
    var LoadableWithChunkExtractor = function LoadableWithChunkExtractor(props) {
      return React.createElement(Context.Consumer, null, function (extractor) {
        return React.createElement(Component, Object.assign({
          __chunkExtractor: extractor
        }, props));
      });
    };

    if (Component.displayName) {
      LoadableWithChunkExtractor.displayName = Component.displayName + "WithChunkExtractor";
    }

    return LoadableWithChunkExtractor;
  };

  var identity = function identity(v) {
    return v;
  };

  function createLoadable(_ref) {
    var _ref$defaultResolveCo = _ref.defaultResolveComponent,
        defaultResolveComponent = _ref$defaultResolveCo === void 0 ? identity : _ref$defaultResolveCo,
        _render = _ref.render,
        onLoad = _ref.onLoad;

    function loadable(loadableConstructor, options) {
      if (options === void 0) {
        options = {};
      }

      var ctor = resolveConstructor(loadableConstructor);
      var cache = {};
      /**
       * Cachekey represents the component to be loaded
       * if key changes - component has to be reloaded
       * @param props
       * @returns {null|Component}
       */

      function _getCacheKey(props) {
        if (options.cacheKey) {
          return options.cacheKey(props);
        }

        if (ctor.resolve) {
          return ctor.resolve(props);
        }

        return 'static';
      }
      /**
       * Resolves loaded `module` to a specific `Component
       * @param module
       * @param props
       * @param Loadable
       * @returns Component
       */


      function resolve(module, props, Loadable) {
        var Component = options.resolveComponent ? options.resolveComponent(module, props) : defaultResolveComponent(module);

        if (options.resolveComponent && !undefined(Component)) {
          throw new Error("resolveComponent returned something that is not a React component!");
        }

        hoistNonReactStatics(Loadable, Component, {
          preload: true
        });
        return Component;
      }

      var cachedLoad = function cachedLoad(props) {
        var cacheKey = _getCacheKey(props);

        var promise = cache[cacheKey];

        if (!promise || promise.status === STATUS_REJECTED) {
          promise = ctor.requireAsync(props);
          promise.status = STATUS_PENDING;
          cache[cacheKey] = promise;
          promise.then(function () {
            promise.status = STATUS_RESOLVED;
          }, function (error) {
            console.error('loadable-components: failed to asynchronously load component', {
              fileName: ctor.resolve(props),
              chunkName: ctor.chunkName(props),
              error: error ? error.message : error
            });
            promise.status = STATUS_REJECTED;
          });
        }

        return promise;
      };

      var InnerLoadable =
      /*#__PURE__*/
      function (_React$Component) {
        _inheritsLoose(InnerLoadable, _React$Component);

        InnerLoadable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
          var cacheKey = _getCacheKey(props);

          return _extends({}, state, {
            cacheKey: cacheKey,
            // change of a key triggers loading state automatically
            loading: state.loading || state.cacheKey !== cacheKey
          });
        };

        function InnerLoadable(props) {
          var _this;

          _this = _React$Component.call(this, props) || this;
          _this.state = {
            result: null,
            error: null,
            loading: true,
            cacheKey: _getCacheKey(props)
          };
          invariant(!props.__chunkExtractor || ctor.requireSync, 'SSR requires `@loadable/babel-plugin`, please install it'); // Server-side

          if (props.__chunkExtractor) {
            // This module has been marked with no SSR
            if (options.ssr === false) {
              return _assertThisInitialized(_this);
            } // We run load function, we assume that it won't fail and that it
            // triggers a synchronous loading of the module


            ctor.requireAsync(props)["catch"](function () {
              return null;
            }); // So we can require now the module synchronously

            _this.loadSync();

            props.__chunkExtractor.addChunk(ctor.chunkName(props));

            return _assertThisInitialized(_this);
          } // Client-side with `isReady` method present (SSR probably)
          // If module is already loaded, we use a synchronous loading
          // Only perform this synchronous loading if the component has not
          // been marked with no SSR, else we risk hydration mismatches


          if (options.ssr !== false && ( // is ready - was loaded in this session
          ctor.isReady && ctor.isReady(props) || // is ready - was loaded during SSR process
          ctor.chunkName && LOADABLE_SHARED.initialChunks[ctor.chunkName(props)])) {
            _this.loadSync();
          }

          return _this;
        }

        var _proto = InnerLoadable.prototype;

        _proto.componentDidMount = function componentDidMount() {
          this.mounted = true; // retrieve loading promise from a global cache

          var cachedPromise = this.getCache(); // if promise exists, but rejected - clear cache

          if (cachedPromise && cachedPromise.status === STATUS_REJECTED) {
            this.setCache();
          } // component might be resolved synchronously in the constructor


          if (this.state.loading) {
            this.loadAsync();
          }
        };

        _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
          // Component has to be reloaded on cacheKey change
          if (prevState.cacheKey !== this.state.cacheKey) {
            this.loadAsync();
          }
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          this.mounted = false;
        };

        _proto.safeSetState = function safeSetState(nextState, callback) {
          if (this.mounted) {
            this.setState(nextState, callback);
          }
        }
        /**
         * returns a cache key for the current props
         * @returns {Component|string}
         */
        ;

        _proto.getCacheKey = function getCacheKey() {
          return _getCacheKey(this.props);
        }
        /**
         * access the persistent cache
         */
        ;

        _proto.getCache = function getCache() {
          return cache[this.getCacheKey()];
        }
        /**
         * sets the cache value. If called without value sets it as undefined
         */
        ;

        _proto.setCache = function setCache(value) {
          if (value === void 0) {
            value = undefined;
          }

          cache[this.getCacheKey()] = value;
        };

        _proto.triggerOnLoad = function triggerOnLoad() {
          var _this2 = this;

          if (onLoad) {
            setTimeout(function () {
              onLoad(_this2.state.result, _this2.props);
            });
          }
        }
        /**
         * Synchronously loads component
         * target module is expected to already exists in the module cache
         * or be capable to resolve synchronously (webpack target=node)
         */
        ;

        _proto.loadSync = function loadSync() {
          // load sync is expecting component to be in the "loading" state already
          // sounds weird, but loading=true is the initial state of InnerLoadable
          if (!this.state.loading) return;

          try {
            var loadedModule = ctor.requireSync(this.props);
            var result = resolve(loadedModule, this.props, Loadable);
            this.state.result = result;
            this.state.loading = false;
          } catch (error) {
            console.error('loadable-components: failed to synchronously load component, which expected to be available', {
              fileName: ctor.resolve(this.props),
              chunkName: ctor.chunkName(this.props),
              error: error ? error.message : error
            });
            this.state.error = error;
          }
        }
        /**
         * Asynchronously loads a component.
         */
        ;

        _proto.loadAsync = function loadAsync() {
          var _this3 = this;

          var promise = this.resolveAsync();
          promise.then(function (loadedModule) {
            var result = resolve(loadedModule, _this3.props, Loadable);

            _this3.safeSetState({
              result: result,
              loading: false
            }, function () {
              return _this3.triggerOnLoad();
            });
          })["catch"](function (error) {
            return _this3.safeSetState({
              error: error,
              loading: false
            });
          });
          return promise;
        }
        /**
         * Asynchronously resolves(not loads) a component.
         * Note - this function does not change the state
         */
        ;

        _proto.resolveAsync = function resolveAsync() {
          var _this$props = this.props,
              __chunkExtractor = _this$props.__chunkExtractor,
              forwardedRef = _this$props.forwardedRef,
              props = _objectWithoutPropertiesLoose(_this$props, ["__chunkExtractor", "forwardedRef"]);

          return cachedLoad(props);
        };

        _proto.render = function render() {
          var _this$props2 = this.props,
              forwardedRef = _this$props2.forwardedRef,
              propFallback = _this$props2.fallback,
              __chunkExtractor = _this$props2.__chunkExtractor,
              props = _objectWithoutPropertiesLoose(_this$props2, ["forwardedRef", "fallback", "__chunkExtractor"]);

          var _this$state = this.state,
              error = _this$state.error,
              loading = _this$state.loading,
              result = _this$state.result;

          if (options.suspense) {
            var cachedPromise = this.getCache() || this.loadAsync();

            if (cachedPromise.status === STATUS_PENDING) {
              throw this.loadAsync();
            }
          }

          if (error) {
            throw error;
          }

          var fallback = propFallback || options.fallback || null;

          if (loading) {
            return fallback;
          }

          return _render({
            fallback: fallback,
            result: result,
            options: options,
            props: _extends({}, props, {
              ref: forwardedRef
            })
          });
        };

        return InnerLoadable;
      }(React.Component);

      var EnhancedInnerLoadable = withChunkExtractor(InnerLoadable);
      var Loadable = React.forwardRef(function (props, ref) {
        return React.createElement(EnhancedInnerLoadable, Object.assign({
          forwardedRef: ref
        }, props));
      });
      Loadable.displayName = 'Loadable'; // In future, preload could use `<link rel="preload">`

      Loadable.preload = function (props) {
        Loadable.load(props);
      };

      Loadable.load = function (props) {
        return cachedLoad(props);
      };

      return Loadable;
    }

    function lazy(ctor, options) {
      return loadable(ctor, _extends({}, options, {
        suspense: true
      }));
    }

    return {
      loadable: loadable,
      lazy: lazy
    };
  }

  function defaultResolveComponent(loadedModule) {
    // eslint-disable-next-line no-underscore-dangle
    return loadedModule.__esModule ? loadedModule["default"] : loadedModule["default"] || loadedModule;
  }

  /* eslint-disable no-use-before-define, react/no-multi-comp */

  var _createLoadable =
  /*#__PURE__*/
  createLoadable({
    defaultResolveComponent: defaultResolveComponent,
    render: function render(_ref) {
      var Component = _ref.result,
          props = _ref.props;
      return React.createElement(Component, props);
    }
  }),
      loadable = _createLoadable.loadable,
      lazy = _createLoadable.lazy;

  /* eslint-disable no-use-before-define, react/no-multi-comp */

  var _createLoadable$1 =
  /*#__PURE__*/
  createLoadable({
    onLoad: function onLoad(result, props) {
      if (result && props.forwardedRef) {
        if (typeof props.forwardedRef === 'function') {
          props.forwardedRef(result);
        } else {
          props.forwardedRef.current = result;
        }
      }
    },
    render: function render(_ref) {
      var result = _ref.result,
          props = _ref.props;

      if (props.children) {
        return props.children(result);
      }

      return null;
    }
  }),
      loadable$1 = _createLoadable$1.loadable,
      lazy$1 = _createLoadable$1.lazy;

  /* eslint-disable no-underscore-dangle, camelcase */
  var BROWSER = typeof window !== 'undefined';
  function loadableReady(done, _temp) {
    if (done === void 0) {
      done = function done() {};
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? '' : _ref$namespace,
        _ref$chunkLoadingGlob = _ref.chunkLoadingGlobal,
        chunkLoadingGlobal = _ref$chunkLoadingGlob === void 0 ? '__LOADABLE_LOADED_CHUNKS__' : _ref$chunkLoadingGlob;

    if (!BROWSER) {
      warn('`loadableReady()` must be called in browser only');
      done();
      return Promise.resolve();
    }

    var requiredChunks = null;

    if (BROWSER) {
      var id = getRequiredChunkKey(namespace);
      var dataElement = document.getElementById(id);

      if (dataElement) {
        requiredChunks = JSON.parse(dataElement.textContent);
        var extElement = document.getElementById(id + "_ext");

        if (extElement) {
          var _JSON$parse = JSON.parse(extElement.textContent),
              namedChunks = _JSON$parse.namedChunks;

          namedChunks.forEach(function (chunkName) {
            LOADABLE_SHARED.initialChunks[chunkName] = true;
          });
        } else {
          // version mismatch
          throw new Error('loadable-component: @loadable/server does not match @loadable/component');
        }
      }
    }

    if (!requiredChunks) {
      warn('`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side');
      done();
      return Promise.resolve();
    }

    var resolved = false;
    return new Promise(function (resolve) {
      window[chunkLoadingGlobal] = window[chunkLoadingGlobal] || [];
      var loadedChunks = window[chunkLoadingGlobal];
      var originalPush = loadedChunks.push.bind(loadedChunks);

      function checkReadyState() {
        if (requiredChunks.every(function (chunk) {
          return loadedChunks.some(function (_ref2) {
            var chunks = _ref2[0];
            return chunks.indexOf(chunk) > -1;
          });
        })) {
          if (!resolved) {
            resolved = true;
            resolve();
          }
        }
      }

      loadedChunks.push = function () {
        originalPush.apply(void 0, arguments);
        checkReadyState();
      };

      checkReadyState();
    }).then(done);
  }

  /* eslint-disable no-underscore-dangle */
  var loadable$2 = loadable;
  loadable$2.lib = loadable$1;
  var lazy$2 = lazy;
  lazy$2.lib = lazy$1;
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sharedInternals;

  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.default = loadable$2;
  exports.lazy = lazy$2;
  exports.loadableReady = loadableReady;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
