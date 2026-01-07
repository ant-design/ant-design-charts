'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _arrayPrototype = require('array.prototype.flat');

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _has = require('has');

var _has2 = _interopRequireDefault(_has);

var _enzymeShallowEqual = require('enzyme-shallow-equal');

var _enzymeShallowEqual2 = _interopRequireDefault(_enzymeShallowEqual);

var _Utils = require('./Utils');

var _getAdapter = require('./getAdapter');

var _getAdapter2 = _interopRequireDefault(_getAdapter);

var _Debug = require('./Debug');

var _RSTTraversal = require('./RSTTraversal');

var _selectors = require('./selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NODE = (0, _Utils.sym)('__node__');
var NODES = (0, _Utils.sym)('__nodes__');
var RENDERER = (0, _Utils.sym)('__renderer__');
var UNRENDERED = (0, _Utils.sym)('__unrendered__');
var ROOT = (0, _Utils.sym)('__root__');
var OPTIONS = (0, _Utils.sym)('__options__');
var SET_STATE = (0, _Utils.sym)('__setState__');
var ROOT_NODES = (0, _Utils.sym)('__rootNodes__');
var CHILD_CONTEXT = (0, _Utils.sym)('__childContext__');
var WRAPPING_COMPONENT = (0, _Utils.sym)('__wrappingComponent__');
var PRIMARY_WRAPPER = (0, _Utils.sym)('__primaryWrapper__');
var ROOT_FINDER = (0, _Utils.sym)('__rootFinder__');
var PROVIDER_VALUES = (0, _Utils.sym)('__providerValues__');

/**
 * Finds all nodes in the current wrapper nodes' render trees that match the provided predicate
 * function.
 *
 * @param {ShallowWrapper} wrapper
 * @param {Function} predicate
 * @param {Function} filter
 * @returns {ShallowWrapper}
 */
function findWhereUnwrapped(wrapper, predicate) {
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _RSTTraversal.treeFilter;

  return wrapper.flatMap(function (n) {
    return filter(n.getNodeInternal(), predicate);
  });
}

/**
 * Returns a new wrapper instance with only the nodes of the current wrapper instance that match
 * the provided predicate function.
 *
 * @param {ShallowWrapper} wrapper
 * @param {Function} predicate
 * @returns {ShallowWrapper}
 */
function filterWhereUnwrapped(wrapper, predicate) {
  return wrapper.wrap(wrapper.getNodesInternal().filter(predicate).filter(Boolean));
}

/**
 * Ensure options passed to ShallowWrapper are valid. Throws otherwise.
 * @param {Object} options
 */
function validateOptions(options) {
  var lifecycleExperimental = options.lifecycleExperimental,
      disableLifecycleMethods = options.disableLifecycleMethods,
      enableComponentDidUpdateOnSetState = options.enableComponentDidUpdateOnSetState,
      supportPrevContextArgumentOfComponentDidUpdate = options.supportPrevContextArgumentOfComponentDidUpdate,
      lifecycles = options.lifecycles;

  if (typeof lifecycleExperimental !== 'undefined' && typeof lifecycleExperimental !== 'boolean') {
    throw new Error('lifecycleExperimental must be either true or false if provided');
  }

  if (typeof disableLifecycleMethods !== 'undefined' && typeof disableLifecycleMethods !== 'boolean') {
    throw new Error('disableLifecycleMethods must be either true or false if provided');
  }

  if (lifecycleExperimental != null && disableLifecycleMethods != null && lifecycleExperimental === disableLifecycleMethods) {
    throw new Error('lifecycleExperimental and disableLifecycleMethods cannot be set to the same value');
  }

  if (typeof enableComponentDidUpdateOnSetState !== 'undefined' && lifecycles.componentDidUpdate && lifecycles.componentDidUpdate.onSetState !== enableComponentDidUpdateOnSetState) {
    throw new TypeError('the legacy enableComponentDidUpdateOnSetState option should be matched by `lifecycles: { componentDidUpdate: { onSetState: true } }`, for compatibility');
  }

  if (typeof supportPrevContextArgumentOfComponentDidUpdate !== 'undefined' && lifecycles.componentDidUpdate && lifecycles.componentDidUpdate.prevContext !== supportPrevContextArgumentOfComponentDidUpdate) {
    throw new TypeError('the legacy supportPrevContextArgumentOfComponentDidUpdate option should be matched by `lifecycles: { componentDidUpdate: { prevContext: true } }`, for compatibility');
  }
}

function getAdapterLifecycles(_ref) {
  var options = _ref.options;
  var _options$lifecycles = options.lifecycles,
      lifecycles = _options$lifecycles === undefined ? {} : _options$lifecycles,
      enableComponentDidUpdateOnSetState = options.enableComponentDidUpdateOnSetState,
      supportPrevContextArgumentOfComponentDidUpdate = options.supportPrevContextArgumentOfComponentDidUpdate;


  var hasLegacySetStateArg = typeof enableComponentDidUpdateOnSetState !== 'undefined';
  var hasLegacyPrevContextArg = typeof supportPrevContextArgumentOfComponentDidUpdate !== 'undefined';
  var componentDidUpdate = hasLegacySetStateArg || hasLegacyPrevContextArg ? (0, _object2['default'])({}, hasLegacySetStateArg && {
    onSetState: !!enableComponentDidUpdateOnSetState
  }, hasLegacyPrevContextArg && {
    prevContext: !!supportPrevContextArgumentOfComponentDidUpdate
  }) : null;
  var originalGDSFP = lifecycles.getDerivedStateFromProps;

  var getDerivedStateFromProps = originalGDSFP ? {
    hasShouldComponentUpdateBug: !!originalGDSFP.hasShouldComponentUpdateBug
  } : false;

  return (0, _object2['default'])({}, lifecycles, {
    setState: (0, _object2['default'])({}, lifecycles.setState),
    getChildContext: (0, _object2['default'])({
      calledByRenderer: true
    }, lifecycles.getChildContext)
  }, componentDidUpdate && { componentDidUpdate: componentDidUpdate }, {
    getDerivedStateFromProps: getDerivedStateFromProps
  });
}

function getRootNode(node) {
  if (node.nodeType === 'host') {
    return node;
  }
  return node.rendered;
}

function getRootNodeInternal(wrapper) {
  if (wrapper[ROOT].length !== 1) {
    throw new Error('getRootNodeInternal(wrapper) can only be called when wrapper wraps one node');
  }
  if (wrapper[ROOT] !== wrapper) {
    return wrapper[ROOT_NODES][0];
  }
  return wrapper[ROOT][NODE];
}

function nodeParents(wrapper, node) {
  return (0, _RSTTraversal.parentsOfNode)(node, getRootNodeInternal(wrapper));
}

function privateSetNodes(wrapper, nodes) {
  if (!Array.isArray(nodes)) {
    (0, _Utils.privateSet)(wrapper, NODE, nodes);
    (0, _Utils.privateSet)(wrapper, NODES, [nodes]);
  } else {
    (0, _Utils.privateSet)(wrapper, NODE, nodes[0]);
    (0, _Utils.privateSet)(wrapper, NODES, nodes);
  }
  (0, _Utils.privateSet)(wrapper, 'length', wrapper[NODES].length);
}

function pureComponentShouldComponentUpdate(prevProps, props, prevState, state) {
  return !(0, _enzymeShallowEqual2['default'])(prevProps, props) || !(0, _enzymeShallowEqual2['default'])(prevState, state);
}

function isPureComponent(instance) {
  return instance && instance.isPureReactComponent;
}

function getChildContext(node, hierarchy, renderer) {
  var instance = node.instance,
      Component = node.type;

  var componentName = (0, _Utils.displayNameOfNode)(node);
  // Warn like react if childContextTypes is not defined:
  // https://github.com/facebook/react/blob/1454a8be03794f5e0b23a7e7696cbbbdcf8b0f5d/packages/react-dom/src/server/ReactPartialRenderer.js#L639-L646
  if (_typeof(Component.childContextTypes) !== 'object') {
    // eslint-disable-next-line no-console
    console.warn(String(componentName) + '.getChildContext(): childContextTypes must be defined in order to use getChildContext().');
    return {};
  }
  // Check childContextTypes like react:
  // https://github.com/facebook/react/blob/1454a8be03794f5e0b23a7e7696cbbbdcf8b0f5d/packages/react-dom/src/server/ReactPartialRenderer.js#L630-L637
  var childContext = instance.getChildContext();
  Object.keys(childContext).forEach(function (key) {
    if (!(key in Component.childContextTypes)) {
      throw new Error(String(componentName) + '.getChildContext(): key "' + String(key) + '" is not defined in childContextTypes.');
    }
  });
  if (typeof renderer.checkPropTypes === 'function') {
    renderer.checkPropTypes(Component.childContextTypes, childContext, 'child context', hierarchy);
  }
  return childContext;
}

function spyOnGetChildContextInitialRender(nodes, adapter) {
  if (!(0, _Utils.isCustomComponentElement)(nodes, adapter) || !nodes.type.prototype || typeof nodes.type.prototype.getChildContext !== 'function') {
    return null;
  }

  return (0, _Utils.spyMethod)(nodes.type.prototype, 'getChildContext');
}

function privateSetChildContext(adapter, wrapper, instance, renderedNode, getChildContextSpy) {
  var renderer = wrapper[RENDERER];
  // We only support parent-based context.
  if (adapter.options.legacyContextMode !== 'parent') {
    return;
  }
  if (getChildContextSpy) {
    (0, _Utils.privateSet)(wrapper, CHILD_CONTEXT, getChildContextSpy.getLastReturnValue());
    getChildContextSpy.restore();
  } else if (typeof instance.getChildContext === 'function') {
    // If there's no spy but getChildContext is a function, that means our renderer
    // is not going to call it for us, so we need to call it ourselves.
    var nodeHierarchy = [wrapper[NODE]].concat(nodeParents(wrapper, wrapper[NODE]));
    var childContext = getChildContext(renderedNode, nodeHierarchy, renderer);
    (0, _Utils.privateSet)(wrapper, CHILD_CONTEXT, childContext);
  } else {
    (0, _Utils.privateSet)(wrapper, CHILD_CONTEXT, null);
  }
}

function mockSCUIfgDSFPReturnNonNull(node, state) {
  var getDerivedStateFromProps = node.type.getDerivedStateFromProps;


  if (typeof getDerivedStateFromProps === 'function') {
    // we try to fix a React shallow renderer bug here.
    // (facebook/react#14607, which has been fixed in react 16.8):
    // when gDSFP return derived state, it will set instance state in shallow renderer before SCU,
    // this will cause `this.state` in sCU be the updated state, which is wrong behavior.
    // so we have to wrap sCU to pass the old state to original sCU.
    var instance = node.instance;

    var _spyMethod = (0, _Utils.spyMethod)(instance, 'shouldComponentUpdate', function (originalSCU) {
      return function () {
        function shouldComponentUpdate() {
          instance.state = state;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var sCUResult = originalSCU.apply(instance, args);
          var nextState = args[1];

          instance.state = nextState;
          restore();
          return sCUResult;
        }

        return shouldComponentUpdate;
      }();
    }),
        restore = _spyMethod.restore;
  }
}

/**
 * Recursively dive()s every custom component in a wrapper until
 * the target component is found.
 *
 * @param {ShallowWrapper} wrapper A ShallowWrapper to search
 * @param {ComponentType} target A react custom component that, when found, will end recursion
 * @param {Adapter} adapter An Enzyme adapter
 * @returns {ShallowWrapper|undefined} A ShallowWrapper for the target, or
 *  undefined if it can't be found
 */
function deepRender(wrapper, target, adapter) {
  var node = wrapper[NODE];
  var element = node && adapter.nodeToElement(node);
  if (wrapper.type() === target) {
    return wrapper.dive();
  }
  if (element && (0, _Utils.isCustomComponentElement)(element, adapter)) {
    return deepRender(wrapper.dive(), target, adapter);
  }
  var children = wrapper.children();
  for (var i = 0; i < children.length; i += 1) {
    var found = deepRender(children.at(i), target, adapter);
    if (typeof found !== 'undefined') {
      return found;
    }
  }
  return undefined;
}

/**
 * Deep-renders the `wrappingComponent` and returns the context that should
 * be accessible to the primary wrapper.
 *
 * @param {WrappingComponentWrapper} wrapper The `WrappingComponentWrapper` for a
 *  `wrappingComponent`
 * @param {Adapter} adapter An Enzyme adapter
 * @returns {object} An object containing an object of legacy context values and a Map of
 *  `createContext()` Provider values.
 */
function getContextFromWrappingComponent(wrapper, adapter) {
  var rootFinder = deepRender(wrapper, wrapper[ROOT_FINDER], adapter);
  if (!rootFinder) {
    throw new Error('`wrappingComponent` must render its children!');
  }
  return {
    legacyContext: rootFinder[OPTIONS].context,
    providerValues: rootFinder[PROVIDER_VALUES]
  };
}

/**
 * Makes options specifically for `ShallowWrapper`. Most of the logic here is around rendering
 * a `wrappingComponent` (if one was provided) and adding the child context of that component
 * to `options.context`.
 *
 * @param {ReactElement} nodes the nodes passed to `ShallowWrapper`
 * @param {ShallowWrapper} root this `ShallowWrapper`'s parent. If this is passed, options are
 *  not transformed.
 * @param {*} passedOptions the options passed to `ShallowWrapper`.
 * @param {*} wrapper the `ShallowWrapper` itself
 * @returns {Object} the decorated and transformed options
 */
function makeShallowOptions(nodes, root, passedOptions, wrapper) {
  var options = (0, _Utils.makeOptions)(passedOptions);
  var adapter = (0, _getAdapter2['default'])(passedOptions);
  (0, _Utils.privateSet)(options, PROVIDER_VALUES, passedOptions[PROVIDER_VALUES]);
  if (root || !(0, _Utils.isCustomComponent)(options.wrappingComponent, adapter)) {
    return options;
  }
  if (typeof adapter.wrapWithWrappingComponent !== 'function') {
    throw new TypeError('your adapter does not support `wrappingComponent`. Try upgrading it!');
  }

  var _adapter$wrapWithWrap = adapter.wrapWithWrappingComponent(nodes, options),
      wrappedNode = _adapter$wrapWithWrap.node,
      RootFinder = _adapter$wrapWithWrap.RootFinder;
  // eslint-disable-next-line no-use-before-define


  var wrappingComponent = new WrappingComponentWrapper(wrappedNode, wrapper, RootFinder);

  var _getContextFromWrappi = getContextFromWrappingComponent(wrappingComponent, adapter),
      wrappingComponentLegacyContext = _getContextFromWrappi.legacyContext,
      wrappingComponentProviderValues = _getContextFromWrappi.providerValues;

  (0, _Utils.privateSet)(wrapper, WRAPPING_COMPONENT, wrappingComponent);
  return (0, _object2['default'])({}, options, _defineProperty({
    context: (0, _object2['default'])({}, options.context, wrappingComponentLegacyContext)
  }, PROVIDER_VALUES, wrappingComponentProviderValues));
}

function makeInheritedChildOptions(wrapper) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var childOptions = (0, _object2['default'])({}, wrapper[OPTIONS], options, {
    context: options.context || (0, _object2['default'])({}, wrapper[OPTIONS].context, wrapper[ROOT][CHILD_CONTEXT])
  });
  (0, _Utils.privateSet)(childOptions, PROVIDER_VALUES, wrapper[ROOT][PROVIDER_VALUES]);
  return childOptions;
}

/**
 * @class ShallowWrapper
 */

var ShallowWrapper = function () {
  function ShallowWrapper(nodes, root) {
    var _this = this;

    var passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ShallowWrapper);

    validateOptions(passedOptions);

    var options = makeShallowOptions(nodes, root, passedOptions, this);
    var adapter = (0, _getAdapter2['default'])(options);
    var lifecycles = getAdapterLifecycles(adapter);

    // mounting a ShallowRender component
    if (!root) {
      if (!adapter.isValidElement(nodes)) {
        throw new TypeError('ShallowWrapper can only wrap valid elements');
      }

      var getChildContextSpy = lifecycles.getChildContext.calledByRenderer ? spyOnGetChildContextInitialRender(nodes, adapter) : null;
      (0, _Utils.privateSet)(this, ROOT, this);
      (0, _Utils.privateSet)(this, UNRENDERED, nodes);
      var renderer = adapter.createRenderer((0, _object2['default'])({ mode: 'shallow' }, options));
      (0, _Utils.privateSet)(this, RENDERER, renderer);
      var providerValues = new Map(options[PROVIDER_VALUES] || []);
      this[RENDERER].render(nodes, options.context, { providerValues: providerValues });
      var renderedNode = this[RENDERER].getNode();
      privateSetNodes(this, getRootNode(renderedNode));
      (0, _Utils.privateSet)(this, OPTIONS, options);
      (0, _Utils.privateSet)(this, PROVIDER_VALUES, providerValues);

      var instance = renderedNode.instance;

      if (instance && !options.disableLifecycleMethods) {
        // Ensure to call componentDidUpdate when instance.setState is called
        if (lifecycles.componentDidUpdate.onSetState && !instance[SET_STATE]) {
          (0, _Utils.privateSet)(instance, SET_STATE, instance.setState);
          instance.setState = function (updater) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            return _this.setState.apply(_this, _toConsumableArray(callback == null ? [updater] : [updater, callback]));
          };
        }

        if (typeof instance.componentDidMount === 'function') {
          this[RENDERER].batchedUpdates(function () {
            instance.componentDidMount();
          });
        }
        privateSetChildContext(adapter, this, instance, renderedNode, getChildContextSpy);
      }
      // creating a child component through enzyme's ShallowWrapper APIs.
    } else {
      (0, _Utils.privateSet)(this, ROOT, root);
      (0, _Utils.privateSet)(this, UNRENDERED, null);
      (0, _Utils.privateSet)(this, RENDERER, root[RENDERER]);
      privateSetNodes(this, nodes);
      (0, _Utils.privateSet)(this, OPTIONS, root[OPTIONS]);
      (0, _Utils.privateSet)(this, ROOT_NODES, root[NODES]);
      (0, _Utils.privateSet)(this, PROVIDER_VALUES, null);
    }
  }

  /**
   * Returns the root wrapper
   *
   * @return {ShallowWrapper}
   */


  _createClass(ShallowWrapper, [{
    key: 'root',
    value: function () {
      function root() {
        return this[ROOT];
      }

      return root;
    }()

    /**
     * Returns the wrapped component.
     *
     * @return {ReactComponent}
     */

  }, {
    key: 'getNodeInternal',
    value: function () {
      function getNodeInternal() {
        if (this.length !== 1) {
          throw new Error('ShallowWrapper::getNode() can only be called when wrapping one node');
        }
        if (this[ROOT] === this) {
          this.update();
        }
        return this[NODE];
      }

      return getNodeInternal;
    }()

    /**
     * Returns the the wrapped components.
     *
     * @return {Array<ReactComponent>}
     */

  }, {
    key: 'getNodesInternal',
    value: function () {
      function getNodesInternal() {
        if (this[ROOT] === this && this.length === 1) {
          this.update();
        }
        return this[NODES];
      }

      return getNodesInternal;
    }()

    /**
     * Returns the wrapped ReactElement.
     *
     * @return {ReactElement}
     */

  }, {
    key: 'getElement',
    value: function () {
      function getElement() {
        var _this2 = this;

        return this.single('getElement', function (n) {
          return (0, _getAdapter2['default'])(_this2[OPTIONS]).nodeToElement(n);
        });
      }

      return getElement;
    }()

    /**
     * Returns the wrapped ReactElements.
     *
     * @return {Array<ReactElement>}
     */

  }, {
    key: 'getElements',
    value: function () {
      function getElements() {
        var _this3 = this;

        return this.getNodesInternal().map(function (n) {
          return (0, _getAdapter2['default'])(_this3[OPTIONS]).nodeToElement(n);
        });
      }

      return getElements;
    }()

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'getNode',
    value: function () {
      function getNode() {
        throw new Error('ShallowWrapper::getNode() is no longer supported. Use ShallowWrapper::getElement() instead');
      }

      return getNode;
    }()

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'getNodes',
    value: function () {
      function getNodes() {
        throw new Error('ShallowWrapper::getNodes() is no longer supported. Use ShallowWrapper::getElements() instead');
      }

      return getNodes;
    }()

    /**
     * Gets the instance of the component being rendered as the root node passed into `shallow()`.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     *
     * Example:
     * ```
     * const wrapper = shallow(<MyComponent />);
     * const inst = wrapper.instance();
     * expect(inst).to.be.instanceOf(MyComponent);
     * ```
     * @returns {ReactComponent}
     */

  }, {
    key: 'instance',
    value: function () {
      function instance() {
        if (this[ROOT] !== this) {
          throw new Error('ShallowWrapper::instance() can only be called on the root');
        }
        return this[RENDERER].getNode().instance;
      }

      return instance;
    }()

    /**
     * If a `wrappingComponent` was passed in `options`, this methods returns a `ShallowWrapper`
     * around the rendered `wrappingComponent`. This `ShallowWrapper` can be used to update the
     * `wrappingComponent`'s props, state, etc.
     *
     * @returns ShallowWrapper
     */

  }, {
    key: 'getWrappingComponent',
    value: function () {
      function getWrappingComponent() {
        if (this[ROOT] !== this) {
          throw new Error('ShallowWrapper::getWrappingComponent() can only be called on the root');
        }
        if (!this[OPTIONS].wrappingComponent) {
          throw new Error('ShallowWrapper::getWrappingComponent() can only be called on a wrapper that was originally passed a `wrappingComponent` option');
        }
        return this[WRAPPING_COMPONENT];
      }

      return getWrappingComponent;
    }()

    /**
     * Forces a re-render. Useful to run before checking the render output if something external
     * may be updating the state of the component somewhere.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     *
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'update',
    value: function () {
      function update() {
        if (this[ROOT] !== this) {
          throw new Error('ShallowWrapper::update() can only be called on the root');
        }
        if (this.length !== 1) {
          throw new Error('ShallowWrapper::update() can only be called when wrapping one node');
        }
        privateSetNodes(this, getRootNode(this[RENDERER].getNode()));
        return this;
      }

      return update;
    }()

    /**
     * A method that unmounts the component. This can be used to simulate a component going through
     * and unmount/mount lifecycle.
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'unmount',
    value: function () {
      function unmount() {
        this[RENDERER].unmount();
        if (this[ROOT][WRAPPING_COMPONENT]) {
          this[ROOT][WRAPPING_COMPONENT].unmount();
        }
        return this;
      }

      return unmount;
    }()

    /**
     * A method is for re-render with new props and context.
     * This calls componentDidUpdate method if disableLifecycleMethods is not enabled.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     *
     * @param {Object} props
     * @param {Object} context
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'rerender',
    value: function () {
      function rerender(props, context) {
        var _this4 = this;

        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        this.single('rerender', function () {
          (0, _Utils.withSetStateAllowed)(function () {
            // NOTE(lmr): In react 16, instances will be null for SFCs, but
            // rerendering with props/context is still a valid thing to do. In
            // this case, state will be undefined, but props/context will exist.
            var node = _this4[RENDERER].getNode();
            var instance = node.instance || {};
            var type = node.type || {};
            var state = instance.state;

            var prevProps = instance.props || _this4[UNRENDERED].props;
            var prevContext = instance.context || _this4[OPTIONS].context;
            var nextContext = context || prevContext;
            if (context) {
              _this4[OPTIONS] = (0, _object2['default'])({}, _this4[OPTIONS], { context: nextContext });
            }
            _this4[RENDERER].batchedUpdates(function () {
              // When shouldComponentUpdate returns false we shouldn't call componentDidUpdate.
              // so we spy shouldComponentUpdate to get the result.
              var lifecycles = getAdapterLifecycles(adapter);
              var shouldRender = true;
              var shouldComponentUpdateSpy = void 0;
              var getChildContextSpy = void 0;
              if (!_this4[OPTIONS].disableLifecycleMethods && instance) {
                if (typeof instance.shouldComponentUpdate === 'function') {
                  var gDSFP = lifecycles.getDerivedStateFromProps;

                  if (gDSFP && gDSFP.hasShouldComponentUpdateBug) {
                    mockSCUIfgDSFPReturnNonNull(node, state);
                  }
                  shouldComponentUpdateSpy = (0, _Utils.spyMethod)(instance, 'shouldComponentUpdate');
                }
                if (lifecycles.getChildContext.calledByRenderer && typeof instance.getChildContext === 'function') {
                  getChildContextSpy = (0, _Utils.spyMethod)(instance, 'getChildContext');
                }
              }
              if (!shouldComponentUpdateSpy && isPureComponent(instance)) {
                shouldRender = pureComponentShouldComponentUpdate(prevProps, props, state, instance.state);
              }
              if (props) _this4[UNRENDERED] = (0, _Utils.cloneElement)(adapter, _this4[UNRENDERED], props);
              _this4[RENDERER].render(_this4[UNRENDERED], nextContext, {
                providerValues: _this4[PROVIDER_VALUES]
              });
              if (shouldComponentUpdateSpy) {
                shouldRender = shouldComponentUpdateSpy.getLastReturnValue();
                shouldComponentUpdateSpy.restore();
              }
              if (shouldRender && !_this4[OPTIONS].disableLifecycleMethods && instance) {
                privateSetChildContext(adapter, _this4, instance, node, getChildContextSpy);
                if (lifecycles.getSnapshotBeforeUpdate) {
                  var snapshot = void 0;
                  if (typeof instance.getSnapshotBeforeUpdate === 'function') {
                    snapshot = instance.getSnapshotBeforeUpdate(prevProps, state);
                  }
                  if (lifecycles.componentDidUpdate && typeof instance.componentDidUpdate === 'function' && (!state || (0, _enzymeShallowEqual2['default'])(state, _this4.instance().state) || typeof type.getDerivedStateFromProps === 'function')) {
                    instance.componentDidUpdate(prevProps, state, snapshot);
                  }
                } else if (lifecycles.componentDidUpdate && typeof instance.componentDidUpdate === 'function') {
                  if (lifecycles.componentDidUpdate.prevContext) {
                    instance.componentDidUpdate(prevProps, state, prevContext);
                  } else if (!state || (0, _enzymeShallowEqual2['default'])(_this4.instance().state, state)) {
                    instance.componentDidUpdate(prevProps, state);
                  }
                }
                // If it doesn't need to rerender, update only its props.
              } else if (!(0, _enzymeShallowEqual2['default'])(props, instance.props)) {
                instance.props = (Object.freeze || Object)((0, _object2['default'])({}, instance.props, props));
              }
              _this4.update();
            });
          });
        });
        return this;
      }

      return rerender;
    }()

    /**
     * A method that sets the props of the root component, and re-renders. Useful for when you are
     * wanting to test how the component behaves over time with changing props. Calling this, for
     * instance, will call the `componentWillReceiveProps` lifecycle method.
     *
     * Similar to `setState`, this method accepts a props object and will merge it in with the already
     * existing props.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     *
     * @param {Object} props object
     * @param {Function} cb - callback function
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'setProps',
    value: function () {
      function setProps(props) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (this[ROOT] !== this) {
          throw new Error('ShallowWrapper::setProps() can only be called on the root');
        }
        if (arguments.length > 1 && typeof callback !== 'function') {
          throw new TypeError('ReactWrapper::setProps() expects a function as its second argument');
        }
        this.rerender(props);
        if (callback) {
          callback();
        }
        return this;
      }

      return setProps;
    }()

    /**
     * A method to invoke `setState` on the root component instance similar to how you might in the
     * definition of the component, and re-renders.  This method is useful for testing your component
     * in hard to achieve states, however should be used sparingly. If possible, you should utilize
     * your component's external API in order to get it into whatever state you want to test, in order
     * to be as accurate of a test as possible. This is not always practical, however.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     *
     * @param {Object} state to merge
     * @param {Function} cb - callback function
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'setState',
    value: function () {
      function setState(state) {
        var _this5 = this;

        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (this[ROOT] !== this) {
          throw new Error('ShallowWrapper::setState() can only be called on the root');
        }
        if (this.instance() === null || this[RENDERER].getNode().nodeType !== 'class') {
          throw new Error('ShallowWrapper::setState() can only be called on class components');
        }
        if (arguments.length > 1 && typeof callback !== 'function') {
          throw new TypeError('ReactWrapper::setState() expects a function as its second argument');
        }

        this.single('setState', function () {
          (0, _Utils.withSetStateAllowed)(function () {
            var adapter = (0, _getAdapter2['default'])(_this5[OPTIONS]);

            var lifecycles = getAdapterLifecycles(adapter);

            var node = _this5[RENDERER].getNode();
            var instance = node.instance;

            var prevProps = instance.props;
            var prevState = instance.state;
            var prevContext = instance.context;

            var statePayload = typeof state === 'function' ? state.call(instance, prevState, prevProps) : state;

            // returning null or undefined prevents the update in React 16+
            // https://github.com/facebook/react/pull/12756
            var maybeHasUpdate = !lifecycles.setState.skipsComponentDidUpdateOnNullish || statePayload != null;

            // When shouldComponentUpdate returns false we shouldn't call componentDidUpdate.
            // so we spy shouldComponentUpdate to get the result.
            var shouldComponentUpdateSpy = void 0;
            var getChildContextSpy = void 0;
            var shouldRender = true;
            if (!_this5[OPTIONS].disableLifecycleMethods && instance) {
              if (lifecycles.componentDidUpdate && lifecycles.componentDidUpdate.onSetState && typeof instance.shouldComponentUpdate === 'function') {
                var gDSFP = lifecycles.getDerivedStateFromProps;

                if (gDSFP && gDSFP.hasShouldComponentUpdateBug) {
                  mockSCUIfgDSFPReturnNonNull(node, state);
                }
                shouldComponentUpdateSpy = (0, _Utils.spyMethod)(instance, 'shouldComponentUpdate');
              }
              if (lifecycles.getChildContext.calledByRenderer && typeof instance.getChildContext === 'function') {
                getChildContextSpy = (0, _Utils.spyMethod)(instance, 'getChildContext');
              }
            }
            if (!shouldComponentUpdateSpy && isPureComponent(instance)) {
              shouldRender = pureComponentShouldComponentUpdate(prevProps, instance.props, prevState, (0, _object2['default'])({}, prevState, statePayload));
            }

            // We don't pass the setState callback here
            // to guarantee to call the callback after finishing the render
            if (instance[SET_STATE]) {
              instance[SET_STATE](statePayload);
            } else {
              instance.setState(statePayload);
            }
            if (shouldComponentUpdateSpy) {
              shouldRender = shouldComponentUpdateSpy.getLastReturnValue();
              shouldComponentUpdateSpy.restore();
            }
            if (maybeHasUpdate && shouldRender && !_this5[OPTIONS].disableLifecycleMethods) {
              privateSetChildContext(adapter, _this5, instance, node, getChildContextSpy);
              if (lifecycles.componentDidUpdate && lifecycles.componentDidUpdate.onSetState) {
                if (lifecycles.getSnapshotBeforeUpdate && typeof instance.getSnapshotBeforeUpdate === 'function') {
                  var snapshot = instance.getSnapshotBeforeUpdate(prevProps, prevState);
                  if (typeof instance.componentDidUpdate === 'function') {
                    instance.componentDidUpdate(prevProps, prevState, snapshot);
                  }
                } else if (typeof instance.componentDidUpdate === 'function') {
                  if (lifecycles.componentDidUpdate.prevContext) {
                    instance.componentDidUpdate(prevProps, prevState, prevContext);
                  } else {
                    instance.componentDidUpdate(prevProps, prevState);
                  }
                }
              }
            }
            _this5.update();
            // call the setState callback
            if (callback) {
              if (adapter.invokeSetStateCallback) {
                adapter.invokeSetStateCallback(instance, callback);
              } else {
                callback.call(instance);
              }
            }
          });
        });
        return this;
      }

      return setState;
    }()

    /**
     * A method that sets the context of the root component, and re-renders. Useful for when you are
     * wanting to test how the component behaves over time with changing contexts.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     *
     * @param {Object} context object
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'setContext',
    value: function () {
      function setContext(context) {
        if (this[ROOT] !== this) {
          throw new Error('ShallowWrapper::setContext() can only be called on the root');
        }
        if (!this[OPTIONS].context) {
          throw new Error('ShallowWrapper::setContext() can only be called on a wrapper that was originally passed a context option');
        }
        return this.rerender(null, context);
      }

      return setContext;
    }()

    /**
     * Whether or not a given react element exists in the shallow render tree.
     *
     * Example:
     * ```
     * const wrapper = shallow(<MyComponent />);
     * expect(wrapper.contains(<div className="foo bar" />)).to.equal(true);
     * ```
     *
     * @param {ReactElement|Array<ReactElement>} nodeOrNodes
     * @returns {Boolean}
     */

  }, {
    key: 'contains',
    value: function () {
      function contains(nodeOrNodes) {
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        if (!(0, _Utils.isReactElementAlike)(nodeOrNodes, adapter)) {
          throw new Error('ShallowWrapper::contains() can only be called with a ReactElement (or an array of them), a string, or a number as an argument.');
        }
        var predicate = Array.isArray(nodeOrNodes) ? function (other) {
          return (0, _Utils.containsChildrenSubArray)(_Utils.nodeEqual, other, nodeOrNodes.map(function (node) {
            return adapter.elementToNode(node);
          }));
        } : function (other) {
          return (0, _Utils.nodeEqual)(adapter.elementToNode(nodeOrNodes), other);
        };

        return findWhereUnwrapped(this, predicate).length > 0;
      }

      return contains;
    }()

    /**
     * Whether or not a given react element exists in the shallow render tree.
     * Match is based on the expected element and not on wrappers element.
     * It will determine if one of the wrappers element "looks like" the expected
     * element by checking if all props of the expected element are present
     * on the wrappers element and equals to each other.
     *
     * Example:
     * ```
     * // MyComponent outputs <div><div class="foo">Hello</div></div>
     * const wrapper = shallow(<MyComponent />);
     * expect(wrapper.containsMatchingElement(<div>Hello</div>)).to.equal(true);
     * ```
     *
     * @param {ReactElement} node
     * @returns {Boolean}
     */

  }, {
    key: 'containsMatchingElement',
    value: function () {
      function containsMatchingElement(node) {
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        var rstNode = adapter.elementToNode(node);
        var predicate = function () {
          function predicate(other) {
            return (0, _Utils.nodeMatches)(rstNode, other, function (a, b) {
              return a <= b;
            });
          }

          return predicate;
        }();
        return findWhereUnwrapped(this, predicate).length > 0;
      }

      return containsMatchingElement;
    }()

    /**
     * Whether or not all the given react elements exist in the shallow render tree.
     * Match is based on the expected element and not on wrappers element.
     * It will determine if one of the wrappers element "looks like" the expected
     * element by checking if all props of the expected element are present
     * on the wrappers element and equals to each other.
     *
     * Example:
     * ```
     * const wrapper = shallow(<MyComponent />);
     * expect(wrapper.containsAllMatchingElements([
     *   <div>Hello</div>,
     *   <div>Goodbye</div>,
     * ])).to.equal(true);
     * ```
     *
     * @param {Array<ReactElement>} nodes
     * @returns {Boolean}
     */

  }, {
    key: 'containsAllMatchingElements',
    value: function () {
      function containsAllMatchingElements(nodes) {
        var _this6 = this;

        if (!Array.isArray(nodes)) {
          throw new TypeError('nodes should be an Array');
        }

        return nodes.every(function (node) {
          return _this6.containsMatchingElement(node);
        });
      }

      return containsAllMatchingElements;
    }()

    /**
     * Whether or not one of the given react elements exists in the shallow render tree.
     * Match is based on the expected element and not on wrappers element.
     * It will determine if one of the wrappers element "looks like" the expected
     * element by checking if all props of the expected element are present
     * on the wrappers element and equals to each other.
     *
     * Example:
     * ```
     * const wrapper = shallow(<MyComponent />);
     * expect(wrapper.containsAnyMatchingElements([
     *   <div>Hello</div>,
     *   <div>Goodbye</div>,
     * ])).to.equal(true);
     * ```
     *
     * @param {Array<ReactElement>} nodes
     * @returns {Boolean}
     */

  }, {
    key: 'containsAnyMatchingElements',
    value: function () {
      function containsAnyMatchingElements(nodes) {
        var _this7 = this;

        return Array.isArray(nodes) && nodes.some(function (node) {
          return _this7.containsMatchingElement(node);
        });
      }

      return containsAnyMatchingElements;
    }()

    /**
     * Whether or not a given react element exists in the render tree.
     *
     * Example:
     * ```
     * const wrapper = shallow(<MyComponent />);
     * expect(wrapper.contains(<div className="foo bar" />)).to.equal(true);
     * ```
     *
     * @param {ReactElement} node
     * @returns {Boolean}
     */

  }, {
    key: 'equals',
    value: function () {
      function equals(node) {
        var _this8 = this;

        return this.single('equals', function () {
          return (0, _Utils.nodeEqual)(_this8.getNodeInternal(), node);
        });
      }

      return equals;
    }()

    /**
     * Whether or not a given react element matches the render tree.
     * Match is based on the expected element and not on wrapper root node.
     * It will determine if the wrapper root node "looks like" the expected
     * element by checking if all props of the expected element are present
     * on the wrapper root node and equals to each other.
     *
     * Example:
     * ```
     * // MyComponent outputs <div class="foo">Hello</div>
     * const wrapper = shallow(<MyComponent />);
     * expect(wrapper.matchesElement(<div>Hello</div>)).to.equal(true);
     * ```
     *
     * @param {ReactElement} node
     * @returns {Boolean}
     */

  }, {
    key: 'matchesElement',
    value: function () {
      function matchesElement(node) {
        var _this9 = this;

        return this.single('matchesElement', function () {
          var adapter = (0, _getAdapter2['default'])(_this9[OPTIONS]);
          var rstNode = adapter.elementToNode(node);
          return (0, _Utils.nodeMatches)(rstNode, _this9.getNodeInternal(), function (a, b) {
            return a <= b;
          });
        });
      }

      return matchesElement;
    }()

    /**
     * Finds every node in the render tree of the current wrapper that matches the provided selector.
     *
     * @param {EnzymeSelector} selector
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'find',
    value: function () {
      function find(selector) {
        return this.wrap((0, _selectors.reduceTreesBySelector)(selector, this.getNodesInternal()));
      }

      return find;
    }()

    /**
     * Returns whether or not current node matches a provided selector.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @param {EnzymeSelector} selector
     * @returns {boolean}
     */

  }, {
    key: 'is',
    value: function () {
      function is(selector) {
        var predicate = (0, _selectors.buildPredicate)(selector);
        return this.single('is', function (n) {
          return predicate(n);
        });
      }

      return is;
    }()

    /**
     * Returns true if the component rendered nothing, i.e., null or false.
     *
     * @returns {boolean}
     */

  }, {
    key: 'isEmptyRender',
    value: function () {
      function isEmptyRender() {
        var nodes = this.getNodesInternal();

        return nodes.every(function (n) {
          return (0, _Utils.isEmptyValue)(n);
        });
      }

      return isEmptyRender;
    }()

    /**
     * Returns a new wrapper instance with only the nodes of the current wrapper instance that match
     * the provided predicate function. The predicate should receive a wrapped node as its first
     * argument.
     *
     * @param {Function} predicate
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'filterWhere',
    value: function () {
      function filterWhere(predicate) {
        var _this10 = this;

        return filterWhereUnwrapped(this, function (n) {
          return predicate(_this10.wrap(n));
        });
      }

      return filterWhere;
    }()

    /**
     * Returns a new wrapper instance with only the nodes of the current wrapper instance that match
     * the provided selector.
     *
     * @param {EnzymeSelector} selector
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'filter',
    value: function () {
      function filter(selector) {
        var predicate = (0, _selectors.buildPredicate)(selector);
        return filterWhereUnwrapped(this, predicate);
      }

      return filter;
    }()

    /**
     * Returns a new wrapper instance with only the nodes of the current wrapper that did not match
     * the provided selector. Essentially the inverse of `filter`.
     *
     * @param {EnzymeSelector} selector
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'not',
    value: function () {
      function not(selector) {
        var predicate = (0, _selectors.buildPredicate)(selector);
        return filterWhereUnwrapped(this, function (n) {
          return !predicate(n);
        });
      }

      return not;
    }()

    /**
     * Returns a string of the rendered text of the current render tree.  This function should be
     * looked at with skepticism if being used to test what the actual HTML output of the component
     * will be. If that is what you would like to test, use enzyme's `render` function instead.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @returns {String}
     */

  }, {
    key: 'text',
    value: function () {
      function text() {
        return this.single('text', _RSTTraversal.getTextFromNode);
      }

      return text;
    }()

    /**
     * Returns the HTML of the node.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @returns {String}
     */

  }, {
    key: 'html',
    value: function () {
      function html() {
        var _this11 = this;

        return this.single('html', function (n) {
          if (_this11.type() === null) return null;
          var adapter = (0, _getAdapter2['default'])(_this11[OPTIONS]);
          var renderer = adapter.createRenderer((0, _object2['default'])({}, _this11[OPTIONS], { mode: 'string' }));
          return renderer.render(adapter.nodeToElement(n));
        });
      }

      return html;
    }()

    /**
     * Returns the current node rendered to HTML and wrapped in a CheerioWrapper.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @returns {CheerioWrapper}
     */

  }, {
    key: 'render',
    value: function () {
      function render() {
        var html = this.html();
        return (0, _Utils.loadCheerioRoot)(html);
      }

      return render;
    }()

    /**
     * Used to simulate events. Pass an eventname and (optionally) event arguments. This method of
     * testing events should be met with some skepticism.
     *
     * @param {String} event
     * @param {Array} args
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'simulate',
    value: function () {
      function simulate(event) {
        var _this12 = this;

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return this.single('simulate', function (n) {
          var _RENDERER;

          (_RENDERER = _this12[RENDERER]).simulateEvent.apply(_RENDERER, [n, event].concat(args));
          _this12[ROOT].update();
          return _this12;
        });
      }

      return simulate;
    }()

    /**
     * Used to simulate throwing a rendering error. Pass an error to throw.
     *
     * @param {String} error
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'simulateError',
    value: function () {
      function simulateError(error) {
        var _this13 = this;

        // in shallow, the "root" is the "rendered" thing.

        return this.single('simulateError', function (thisNode) {
          if (thisNode.nodeType === 'host') {
            throw new TypeError('ShallowWrapper::simulateError() can only be called on custom components');
          }

          var renderer = _this13[RENDERER];
          if (typeof renderer.simulateError !== 'function') {
            throw new TypeError('your adapter does not support `simulateError`. Try upgrading it!');
          }

          var rootNode = getRootNodeInternal(_this13);
          var nodeHierarchy = [thisNode].concat(nodeParents(_this13, thisNode));
          renderer.simulateError(nodeHierarchy, rootNode, error);

          return _this13;
        });
      }

      return simulateError;
    }()

    /**
     * Returns the props hash for the current node of the wrapper.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @returns {Object}
     */

  }, {
    key: 'props',
    value: function () {
      function props() {
        return this.single('props', _RSTTraversal.propsOfNode);
      }

      return props;
    }()

    /**
     * Returns the state hash for the root node of the wrapper. Optionally pass in a prop name and it
     * will return just that value.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @param {String} name (optional)
     * @returns {*}
     */

  }, {
    key: 'state',
    value: function () {
      function state(name) {
        var _this14 = this;

        if (this[ROOT] !== this) {
          throw new Error('ShallowWrapper::state() can only be called on the root');
        }
        if (this.instance() === null || this[RENDERER].getNode().nodeType !== 'class') {
          throw new Error('ShallowWrapper::state() can only be called on class components');
        }
        var _state = this.single('state', function () {
          return _this14.instance().state;
        });
        if (typeof name !== 'undefined') {
          if (_state == null) {
            throw new TypeError('ShallowWrapper::state("' + String(name) + '") requires that `state` not be `null` or `undefined`');
          }
          return _state[name];
        }
        return _state;
      }

      return state;
    }()

    /**
     * Returns the context hash for the root node of the wrapper.
     * Optionally pass in a prop name and it will return just that value.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @param {String} name (optional)
     * @returns {*}
     */

  }, {
    key: 'context',
    value: function () {
      function context(name) {
        var _this15 = this;

        if (this[ROOT] !== this) {
          throw new Error('ShallowWrapper::context() can only be called on the root');
        }
        if (!this[OPTIONS].context) {
          throw new Error('ShallowWrapper::context() can only be called on a wrapper that was originally passed a context option');
        }
        if (this.instance() === null) {
          throw new Error('ShallowWrapper::context() can only be called on wrapped nodes that have a non-null instance');
        }
        var _context = this.single('context', function () {
          return _this15.instance().context;
        });
        if (name) {
          return _context[name];
        }
        return _context;
      }

      return context;
    }()

    /**
     * Returns a new wrapper with all of the children of the current wrapper.
     *
     * @param {EnzymeSelector} [selector]
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'children',
    value: function () {
      function children(selector) {
        var allChildren = this.flatMap(function (n) {
          return (0, _RSTTraversal.childrenOfNode)(n.getNodeInternal());
        });
        return selector ? allChildren.filter(selector) : allChildren;
      }

      return children;
    }()

    /**
     * Returns a new wrapper with a specific child
     *
     * @param {Number} [index]
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'childAt',
    value: function () {
      function childAt(index) {
        var _this16 = this;

        return this.single('childAt', function () {
          return _this16.children().at(index);
        });
      }

      return childAt;
    }()

    /**
     * Returns a wrapper around all of the parents/ancestors of the wrapper. Does not include the node
     * in the current wrapper.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @param {EnzymeSelector} [selector]
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'parents',
    value: function () {
      function parents(selector) {
        var _this17 = this;

        return this.single('parents', function (n) {
          var allParents = _this17.wrap(nodeParents(_this17, n));
          return selector ? allParents.filter(selector) : allParents;
        });
      }

      return parents;
    }()

    /**
     * Returns a wrapper around the immediate parent of the current node.
     *
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'parent',
    value: function () {
      function parent() {
        return this.flatMap(function (n) {
          return [n.parents().get(0)];
        });
      }

      return parent;
    }()

    /**
     *
     * @param {EnzymeSelector} selector
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'closest',
    value: function () {
      function closest(selector) {
        if (this.is(selector)) {
          return this;
        }
        var matchingAncestors = this.parents().filter(selector);
        return matchingAncestors.length > 0 ? matchingAncestors.first() : this.findWhere(function () {
          return false;
        });
      }

      return closest;
    }()

    /**
     * Shallow renders the current node and returns a shallow wrapper around it.
     *
     * NOTE: can only be called on wrapper of a single node.
     *
     * @param {Object} options
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'shallow',
    value: function () {
      function shallow() {
        var _this18 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this.single('shallow', function (n) {
          var childOptions = makeInheritedChildOptions(_this18, options);
          return _this18.wrap((0, _getAdapter2['default'])(_this18[OPTIONS]).nodeToElement(n), null, childOptions);
        });
      }

      return shallow;
    }()

    /**
     * Returns the value of prop with the given name of the current node.
     *
     * @param propName
     * @returns {*}
     */

  }, {
    key: 'prop',
    value: function () {
      function prop(propName) {
        return this.props()[propName];
      }

      return prop;
    }()

    /**
     * Used to invoke a function prop.
     * Will invoke an function prop and return its value.
     *
     * @param {String} propName
     * @returns {Any}
     */

  }, {
    key: 'invoke',
    value: function () {
      function invoke(propName) {
        var _this19 = this;

        return this.single('invoke', function () {
          var handler = _this19.prop(propName);
          if (typeof handler !== 'function') {
            throw new TypeError('ShallowWrapper::invoke() requires the name of a prop whose value is a function');
          }
          return function () {
            var response = handler.apply(undefined, arguments);
            _this19[ROOT].update();
            return response;
          };
        });
      }

      return invoke;
    }()

    /**
     * Returns a wrapper of the node rendered by the provided render prop.
     *
     * @param {String} propName
     * @returns {Function}
     */

  }, {
    key: 'renderProp',
    value: function () {
      function renderProp(propName) {
        var _this20 = this;

        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        if (typeof adapter.wrap !== 'function') {
          throw new RangeError('your adapter does not support `wrap`. Try upgrading it!');
        }

        return this.single('renderProp', function (n) {
          if (n.nodeType === 'host') {
            throw new TypeError('ShallowWrapper::renderProp() can only be called on custom components');
          }
          if (typeof propName !== 'string') {
            throw new TypeError('ShallowWrapper::renderProp(): `propName` must be a string');
          }
          var props = _this20.props();
          if (!(0, _has2['default'])(props, propName)) {
            throw new Error('ShallowWrapper::renderProp(): no prop called \u201C' + String(propName) + '\u201C found');
          }
          var propValue = props[propName];
          if (typeof propValue !== 'function') {
            throw new TypeError('ShallowWrapper::renderProp(): expected prop \u201C' + String(propName) + '\u201C to contain a function, but it holds \u201C' + (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) + '\u201C');
          }

          return function () {
            var element = propValue.apply(undefined, arguments);
            var wrapped = adapter.wrap(element);
            return _this20.wrap(wrapped, null, _this20[OPTIONS]);
          };
        });
      }

      return renderProp;
    }()

    /**
     * Returns the key assigned to the current node.
     *
     * @returns {String}
     */

  }, {
    key: 'key',
    value: function () {
      function key() {
        return this.single('key', function (n) {
          return n.key === undefined ? null : n.key;
        });
      }

      return key;
    }()

    /**
     * Returns the type of the current node of this wrapper. If it's a composite component, this will
     * be the component constructor. If it's a native DOM node, it will be a string of the tag name.
     * If it's null, it will be null.
     *
     * @returns {String|Function|null}
     */

  }, {
    key: 'type',
    value: function () {
      function type() {
        return this.single('type', function (n) {
          return (0, _Utils.typeOfNode)(n);
        });
      }

      return type;
    }()

    /**
     * Returns the name of the current node of this wrapper.
     *
     * In order of precedence => type.displayName -> type.name -> type.
     *
     * @returns {String}
     */

  }, {
    key: 'name',
    value: function () {
      function name() {
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        return this.single('name', function (n) {
          return adapter.displayNameOfNode ? adapter.displayNameOfNode(n) : (0, _Utils.displayNameOfNode)(n);
        });
      }

      return name;
    }()

    /**
     * Returns whether or not the current node has the given class name or not.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @param className
     * @returns {Boolean}
     */

  }, {
    key: 'hasClass',
    value: function () {
      function hasClass(className) {
        if (typeof className === 'string' && className.indexOf('.') !== -1) {
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'re calling `ShallowWrapper::hasClass()` with a CSS selector. hasClass() expects a class name, not a CSS selector.');
        }
        return this.single('hasClass', function (n) {
          return (0, _RSTTraversal.hasClassName)(n, className);
        });
      }

      return hasClass;
    }()

    /**
     * Iterates through each node of the current wrapper and executes the provided function with a
     * wrapper around the corresponding node passed in as the first argument.
     *
     * @param {Function} fn
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'forEach',
    value: function () {
      function forEach(fn) {
        var _this21 = this;

        this.getNodesInternal().forEach(function (n, i) {
          return fn.call(_this21, _this21.wrap(n), i);
        });
        return this;
      }

      return forEach;
    }()

    /**
     * Maps the current array of nodes to another array. Each node is passed in as a `ShallowWrapper`
     * to the map function.
     *
     * @param {Function} fn
     * @returns {Array}
     */

  }, {
    key: 'map',
    value: function () {
      function map(fn) {
        var _this22 = this;

        return this.getNodesInternal().map(function (n, i) {
          return fn.call(_this22, _this22.wrap(n), i);
        });
      }

      return map;
    }()

    /**
     * Reduces the current array of nodes to a value. Each node is passed in as a `ShallowWrapper`
     * to the reducer function.
     *
     * @param {Function} fn - the reducer function
     * @param {*} initialValue - the initial value
     * @returns {*}
     */

  }, {
    key: 'reduce',
    value: function () {
      function reduce(fn) {
        var _this23 = this;

        var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (arguments.length > 1) {
          return this.getNodesInternal().reduce(function (accum, n, i) {
            return fn.call(_this23, accum, _this23.wrap(n), i);
          }, initialValue);
        }
        return this.getNodesInternal().reduce(function (accum, n, i) {
          return fn.call(_this23, i === 1 ? _this23.wrap(accum) : accum, _this23.wrap(n), i);
        });
      }

      return reduce;
    }()

    /**
     * Reduces the current array of nodes to another array, from right to left. Each node is passed
     * in as a `ShallowWrapper` to the reducer function.
     *
     * @param {Function} fn - the reducer function
     * @param {*} initialValue - the initial value
     * @returns {*}
     */

  }, {
    key: 'reduceRight',
    value: function () {
      function reduceRight(fn) {
        var _this24 = this;

        var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (arguments.length > 1) {
          return this.getNodesInternal().reduceRight(function (accum, n, i) {
            return fn.call(_this24, accum, _this24.wrap(n), i);
          }, initialValue);
        }
        return this.getNodesInternal().reduceRight(function (accum, n, i) {
          return fn.call(_this24, i === 1 ? _this24.wrap(accum) : accum, _this24.wrap(n), i);
        });
      }

      return reduceRight;
    }()

    /**
     * Returns a new wrapper with a subset of the nodes of the original wrapper, according to the
     * rules of `Array#slice`.
     *
     * @param {Number} begin
     * @param {Number} end
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'slice',
    value: function () {
      function slice(begin, end) {
        return this.wrap(this.getNodesInternal().slice(begin, end));
      }

      return slice;
    }()

    /**
     * Returns whether or not any of the nodes in the wrapper match the provided selector.
     *
     * @param {EnzymeSelector} selector
     * @returns {Boolean}
     */

  }, {
    key: 'some',
    value: function () {
      function some(selector) {
        if (this[ROOT] === this) {
          throw new Error('ShallowWrapper::some() can not be called on the root');
        }
        var predicate = (0, _selectors.buildPredicate)(selector);
        return this.getNodesInternal().some(predicate);
      }

      return some;
    }()

    /**
     * Returns whether or not any of the nodes in the wrapper pass the provided predicate function.
     *
     * @param {Function} predicate
     * @returns {Boolean}
     */

  }, {
    key: 'someWhere',
    value: function () {
      function someWhere(predicate) {
        var _this25 = this;

        return this.getNodesInternal().some(function (n, i) {
          return predicate.call(_this25, _this25.wrap(n), i);
        });
      }

      return someWhere;
    }()

    /**
     * Returns whether or not all of the nodes in the wrapper match the provided selector.
     *
     * @param {EnzymeSelector} selector
     * @returns {Boolean}
     */

  }, {
    key: 'every',
    value: function () {
      function every(selector) {
        var predicate = (0, _selectors.buildPredicate)(selector);
        return this.getNodesInternal().every(predicate);
      }

      return every;
    }()

    /**
     * Returns whether or not any of the nodes in the wrapper pass the provided predicate function.
     *
     * @param {Function} predicate
     * @returns {Boolean}
     */

  }, {
    key: 'everyWhere',
    value: function () {
      function everyWhere(predicate) {
        var _this26 = this;

        return this.getNodesInternal().every(function (n, i) {
          return predicate.call(_this26, _this26.wrap(n), i);
        });
      }

      return everyWhere;
    }()

    /**
     * Utility method used to create new wrappers with a mapping function that returns an array of
     * nodes in response to a single node wrapper. The returned wrapper is a single wrapper around
     * all of the mapped nodes flattened (and de-duplicated).
     *
     * @param {Function} fn
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'flatMap',
    value: function () {
      function flatMap(fn) {
        var _this27 = this;

        var nodes = this.getNodesInternal().map(function (n, i) {
          return fn.call(_this27, _this27.wrap(n), i);
        });
        var flattened = (0, _arrayPrototype2['default'])(nodes, 1);
        return this.wrap(flattened.filter(Boolean));
      }

      return flatMap;
    }()

    /**
     * Finds all nodes in the current wrapper nodes' render trees that match the provided predicate
     * function. The predicate function will receive the nodes inside a ShallowWrapper as its
     * first argument.
     *
     * @param {Function} predicate
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'findWhere',
    value: function () {
      function findWhere(predicate) {
        var _this28 = this;

        return findWhereUnwrapped(this, function (n) {
          var node = _this28.wrap(n);
          return node.length > 0 && predicate(node);
        });
      }

      return findWhere;
    }()

    /**
     * Returns the node at a given index of the current wrapper.
     *
     * @param index
     * @returns {ReactElement}
     */

  }, {
    key: 'get',
    value: function () {
      function get(index) {
        return this.getElements()[index];
      }

      return get;
    }()

    /**
     * Returns a wrapper around the node at a given index of the current wrapper.
     *
     * @param index
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'at',
    value: function () {
      function at(index) {
        var nodes = this.getNodesInternal();
        if (index < nodes.length) {
          return this.wrap(nodes[index]);
        }
        return this.wrap([]);
      }

      return at;
    }()

    /**
     * Returns a wrapper around the first node of the current wrapper.
     *
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'first',
    value: function () {
      function first() {
        return this.at(0);
      }

      return first;
    }()

    /**
     * Returns a wrapper around the last node of the current wrapper.
     *
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'last',
    value: function () {
      function last() {
        return this.at(this.length - 1);
      }

      return last;
    }()

    /**
     * Delegates to exists()
     *
     * @returns {boolean}
     */

  }, {
    key: 'isEmpty',
    value: function () {
      function isEmpty() {
        // eslint-disable-next-line no-console
        console.warn('Enzyme::Deprecated method isEmpty() called, use exists() instead.');
        return !this.exists();
      }

      return isEmpty;
    }()

    /**
     * Returns true if the current wrapper has nodes. False otherwise.
     * If called with a selector it returns `.find(selector).exists()` instead.
     *
     * @param {EnzymeSelector} selector (optional)
     * @returns {boolean}
     */

  }, {
    key: 'exists',
    value: function () {
      function exists() {
        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        return arguments.length > 0 ? this.find(selector).exists() : this.length > 0;
      }

      return exists;
    }()

    /**
     * Utility method that throws an error if the current instance has a length other than one.
     * This is primarily used to enforce that certain methods are only run on a wrapper when it is
     * wrapping a single node.
     *
     * @param fn
     * @returns {*}
     */

  }, {
    key: 'single',
    value: function () {
      function single(name, fn) {
        var fnName = typeof name === 'string' ? name : 'unknown';
        var callback = typeof fn === 'function' ? fn : name;
        if (this.length !== 1) {
          throw new Error('Method \u201C' + fnName + '\u201D is meant to be run on 1 node. ' + String(this.length) + ' found instead.');
        }
        return callback.call(this, this.getNodeInternal());
      }

      return single;
    }()

    /**
     * Helpful utility method to create a new wrapper with the same root as the current wrapper, with
     * any nodes passed in as the first parameter automatically wrapped.
     *
     * @param node
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'wrap',
    value: function () {
      function wrap(node) {
        var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this[ROOT];

        if (node instanceof ShallowWrapper) {
          return node;
        }

        for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }

        return new (Function.prototype.bind.apply(ShallowWrapper, [null].concat([node, root], args)))();
      }

      return wrap;
    }()

    /**
     * Returns an HTML-like string of the shallow render for debugging purposes.
     *
     * @param {Object} [options] - Property bag of additional options.
     * @param {boolean} [options.ignoreProps] - if true, props are omitted from the string.
     * @param {boolean} [options.verbose] - if true, arrays and objects to be verbosely printed.
     * @returns {String}
     */

  }, {
    key: 'debug',
    value: function () {
      function debug() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _Debug.debugNodes)(this.getNodesInternal(), options);
      }

      return debug;
    }()

    /**
     * Invokes intercepter and returns itself. intercepter is called with itself.
     * This is helpful when debugging nodes in method chains.
     * @param fn
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'tap',
    value: function () {
      function tap(intercepter) {
        intercepter(this);
        return this;
      }

      return tap;
    }()

    /**
     * Primarily useful for HOCs (higher-order components), this method may only be
     * run on a single, non-DOM node, and will return the node, shallow-rendered.
     *
     * @param {Object} options
     * @returns {ShallowWrapper}
     */

  }, {
    key: 'dive',
    value: function () {
      function dive() {
        var _this29 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        var name = 'dive';
        return this.single(name, function (n) {
          if (n && n.nodeType === 'host') {
            throw new TypeError('ShallowWrapper::' + name + '() can not be called on Host Components');
          }
          var el = (0, _getAdapter2['default'])(_this29[OPTIONS]).nodeToElement(n);
          if (!(0, _Utils.isCustomComponentElement)(el, adapter)) {
            throw new TypeError('ShallowWrapper::' + name + '() can only be called on components');
          }
          var childOptions = makeInheritedChildOptions(_this29, options);
          return _this29.wrap(el, null, childOptions);
        });
      }

      return dive;
    }()

    /**
     * Strips out all the not host-nodes from the list of nodes
     *
     * This method is useful if you want to check for the presence of host nodes
     * (actually rendered HTML elements) ignoring the React nodes.
     */

  }, {
    key: 'hostNodes',
    value: function () {
      function hostNodes() {
        return this.filterWhere(function (n) {
          return typeof n.type() === 'string';
        });
      }

      return hostNodes;
    }()
  }]);

  return ShallowWrapper;
}();

/**
 * Updates the context of the primary wrapper when the
 * `wrappingComponent` re-renders.
 */


function updatePrimaryRootContext(wrappingComponent) {
  var adapter = (0, _getAdapter2['default'])(wrappingComponent[OPTIONS]);
  var primaryWrapper = wrappingComponent[PRIMARY_WRAPPER];
  var primaryRenderer = primaryWrapper[RENDERER];
  var primaryNode = primaryRenderer.getNode();

  var _getContextFromWrappi2 = getContextFromWrappingComponent(wrappingComponent, adapter),
      legacyContext = _getContextFromWrappi2.legacyContext,
      providerValues = _getContextFromWrappi2.providerValues;

  var prevProviderValues = primaryWrapper[PROVIDER_VALUES];

  primaryWrapper.setContext((0, _object2['default'])({}, wrappingComponent[PRIMARY_WRAPPER][OPTIONS].context, legacyContext));
  primaryWrapper[PROVIDER_VALUES] = new Map([].concat(_toConsumableArray(prevProviderValues), _toConsumableArray(providerValues)));

  if (typeof adapter.isContextConsumer === 'function' && adapter.isContextConsumer(primaryNode.type)) {
    var Consumer = primaryNode.type;
    // Adapters with an `isContextConsumer` method will definitely have a `getProviderFromConsumer`
    // method.
    var Provider = adapter.getProviderFromConsumer(Consumer);
    var newValue = providerValues.get(Provider);
    var oldValue = prevProviderValues.get(Provider);

    // Use referential comparison like React
    if (newValue !== oldValue) {
      primaryWrapper.rerender();
    }
  }
}

/**
 * A *special* "root" wrapper that represents the component passed as `wrappingComponent`.
 * It is linked to the primary root such that updates to it will update the primary.
 *
 * @class WrappingComponentWrapper
 */

var WrappingComponentWrapper = function (_ShallowWrapper) {
  _inherits(WrappingComponentWrapper, _ShallowWrapper);

  function WrappingComponentWrapper(nodes, root, RootFinder) {
    _classCallCheck(this, WrappingComponentWrapper);

    var _this30 = _possibleConstructorReturn(this, (WrappingComponentWrapper.__proto__ || Object.getPrototypeOf(WrappingComponentWrapper)).call(this, nodes));

    (0, _Utils.privateSet)(_this30, PRIMARY_WRAPPER, root);
    (0, _Utils.privateSet)(_this30, ROOT_FINDER, RootFinder);
    return _this30;
  }

  /**
   * Like rerender() on ShallowWrapper, except it also does a "full render" of
   * itself and updates the primary ShallowWrapper's context.
   */


  _createClass(WrappingComponentWrapper, [{
    key: 'rerender',
    value: function () {
      function rerender() {
        var _get2;

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        var result = (_get2 = _get(WrappingComponentWrapper.prototype.__proto__ || Object.getPrototypeOf(WrappingComponentWrapper.prototype), 'rerender', this)).call.apply(_get2, [this].concat(args));
        updatePrimaryRootContext(this);
        return result;
      }

      return rerender;
    }()

    /**
     * Like setState() on ShallowWrapper, except it also does a "full render" of
     * itself and updates the primary ShallowWrapper's context.
     */

  }, {
    key: 'setState',
    value: function () {
      function setState() {
        var _get3;

        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        var result = (_get3 = _get(WrappingComponentWrapper.prototype.__proto__ || Object.getPrototypeOf(WrappingComponentWrapper.prototype), 'setState', this)).call.apply(_get3, [this].concat(args));
        updatePrimaryRootContext(this);
        return result;
      }

      return setState;
    }()

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'getWrappingComponent',
    value: function () {
      function getWrappingComponent() {
        throw new Error('ShallowWrapper::getWrappingComponent() can only be called on the root');
      }

      return getWrappingComponent;
    }()
  }]);

  return WrappingComponentWrapper;
}(ShallowWrapper);

if (_Utils.ITERATOR_SYMBOL) {
  Object.defineProperty(ShallowWrapper.prototype, _Utils.ITERATOR_SYMBOL, {
    configurable: true,
    value: function () {
      function iterator() {
        var _ref2;

        var iter = this.getNodesInternal()[_Utils.ITERATOR_SYMBOL]();
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        return _ref2 = {}, _defineProperty(_ref2, _Utils.ITERATOR_SYMBOL, function () {
          return this;
        }), _defineProperty(_ref2, 'next', function () {
          function next() {
            var next = iter.next();
            if (next.done) {
              return { done: true };
            }
            return {
              done: false,
              value: adapter.nodeToElement(next.value)
            };
          }

          return next;
        }()), _ref2;
      }

      return iterator;
    }()
  });
}

function privateWarning(prop, extraMessage) {
  Object.defineProperty(ShallowWrapper.prototype, prop, {
    get: function () {
      function get() {
        throw new Error('\n        Attempted to access ShallowWrapper::' + String(prop) + ', which was previously a private property on\n        Enzyme ShallowWrapper instances, but is no longer and should not be relied upon.\n        ' + String(extraMessage) + '\n      ');
      }

      return get;
    }(),

    enumerable: false,
    configurable: false
  });
}

privateWarning('node', 'Consider using the getElement() method instead.');
privateWarning('nodes', 'Consider using the getElements() method instead.');
privateWarning('renderer', '');
privateWarning('options', '');
privateWarning('complexSelector', '');

exports['default'] = ShallowWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TaGFsbG93V3JhcHBlci5qcyJdLCJuYW1lcyI6WyJOT0RFIiwiTk9ERVMiLCJSRU5ERVJFUiIsIlVOUkVOREVSRUQiLCJST09UIiwiT1BUSU9OUyIsIlNFVF9TVEFURSIsIlJPT1RfTk9ERVMiLCJDSElMRF9DT05URVhUIiwiV1JBUFBJTkdfQ09NUE9ORU5UIiwiUFJJTUFSWV9XUkFQUEVSIiwiUk9PVF9GSU5ERVIiLCJQUk9WSURFUl9WQUxVRVMiLCJmaW5kV2hlcmVVbndyYXBwZWQiLCJ3cmFwcGVyIiwicHJlZGljYXRlIiwiZmlsdGVyIiwidHJlZUZpbHRlciIsImZsYXRNYXAiLCJuIiwiZ2V0Tm9kZUludGVybmFsIiwiZmlsdGVyV2hlcmVVbndyYXBwZWQiLCJ3cmFwIiwiZ2V0Tm9kZXNJbnRlcm5hbCIsIkJvb2xlYW4iLCJ2YWxpZGF0ZU9wdGlvbnMiLCJvcHRpb25zIiwibGlmZWN5Y2xlRXhwZXJpbWVudGFsIiwiZGlzYWJsZUxpZmVjeWNsZU1ldGhvZHMiLCJlbmFibGVDb21wb25lbnREaWRVcGRhdGVPblNldFN0YXRlIiwic3VwcG9ydFByZXZDb250ZXh0QXJndW1lbnRPZkNvbXBvbmVudERpZFVwZGF0ZSIsImxpZmVjeWNsZXMiLCJFcnJvciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIm9uU2V0U3RhdGUiLCJUeXBlRXJyb3IiLCJwcmV2Q29udGV4dCIsImdldEFkYXB0ZXJMaWZlY3ljbGVzIiwiaGFzTGVnYWN5U2V0U3RhdGVBcmciLCJoYXNMZWdhY3lQcmV2Q29udGV4dEFyZyIsIm9yaWdpbmFsR0RTRlAiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJoYXNTaG91bGRDb21wb25lbnRVcGRhdGVCdWciLCJzZXRTdGF0ZSIsImdldENoaWxkQ29udGV4dCIsImNhbGxlZEJ5UmVuZGVyZXIiLCJnZXRSb290Tm9kZSIsIm5vZGUiLCJub2RlVHlwZSIsInJlbmRlcmVkIiwiZ2V0Um9vdE5vZGVJbnRlcm5hbCIsImxlbmd0aCIsIm5vZGVQYXJlbnRzIiwicHJpdmF0ZVNldE5vZGVzIiwibm9kZXMiLCJBcnJheSIsImlzQXJyYXkiLCJwdXJlQ29tcG9uZW50U2hvdWxkQ29tcG9uZW50VXBkYXRlIiwicHJldlByb3BzIiwicHJvcHMiLCJwcmV2U3RhdGUiLCJzdGF0ZSIsImlzUHVyZUNvbXBvbmVudCIsImluc3RhbmNlIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJoaWVyYXJjaHkiLCJyZW5kZXJlciIsIkNvbXBvbmVudCIsInR5cGUiLCJjb21wb25lbnROYW1lIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb25zb2xlIiwid2FybiIsImNoaWxkQ29udGV4dCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiY2hlY2tQcm9wVHlwZXMiLCJzcHlPbkdldENoaWxkQ29udGV4dEluaXRpYWxSZW5kZXIiLCJhZGFwdGVyIiwicHJvdG90eXBlIiwicHJpdmF0ZVNldENoaWxkQ29udGV4dCIsInJlbmRlcmVkTm9kZSIsImdldENoaWxkQ29udGV4dFNweSIsImxlZ2FjeUNvbnRleHRNb2RlIiwiZ2V0TGFzdFJldHVyblZhbHVlIiwicmVzdG9yZSIsIm5vZGVIaWVyYXJjaHkiLCJjb25jYXQiLCJtb2NrU0NVSWZnRFNGUFJldHVybk5vbk51bGwiLCJvcmlnaW5hbFNDVSIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImFyZ3MiLCJzQ1VSZXN1bHQiLCJhcHBseSIsIm5leHRTdGF0ZSIsImRlZXBSZW5kZXIiLCJ0YXJnZXQiLCJlbGVtZW50Iiwibm9kZVRvRWxlbWVudCIsImRpdmUiLCJjaGlsZHJlbiIsImkiLCJmb3VuZCIsImF0IiwidW5kZWZpbmVkIiwiZ2V0Q29udGV4dEZyb21XcmFwcGluZ0NvbXBvbmVudCIsInJvb3RGaW5kZXIiLCJsZWdhY3lDb250ZXh0IiwiY29udGV4dCIsInByb3ZpZGVyVmFsdWVzIiwibWFrZVNoYWxsb3dPcHRpb25zIiwicm9vdCIsInBhc3NlZE9wdGlvbnMiLCJ3cmFwcGluZ0NvbXBvbmVudCIsIndyYXBXaXRoV3JhcHBpbmdDb21wb25lbnQiLCJ3cmFwcGVkTm9kZSIsIlJvb3RGaW5kZXIiLCJXcmFwcGluZ0NvbXBvbmVudFdyYXBwZXIiLCJ3cmFwcGluZ0NvbXBvbmVudExlZ2FjeUNvbnRleHQiLCJ3cmFwcGluZ0NvbXBvbmVudFByb3ZpZGVyVmFsdWVzIiwibWFrZUluaGVyaXRlZENoaWxkT3B0aW9ucyIsImNoaWxkT3B0aW9ucyIsIlNoYWxsb3dXcmFwcGVyIiwiaXNWYWxpZEVsZW1lbnQiLCJjcmVhdGVSZW5kZXJlciIsIm1vZGUiLCJNYXAiLCJyZW5kZXIiLCJnZXROb2RlIiwidXBkYXRlciIsImNhbGxiYWNrIiwiY29tcG9uZW50RGlkTW91bnQiLCJiYXRjaGVkVXBkYXRlcyIsInVwZGF0ZSIsInNpbmdsZSIsIm1hcCIsInVubW91bnQiLCJuZXh0Q29udGV4dCIsInNob3VsZFJlbmRlciIsInNob3VsZENvbXBvbmVudFVwZGF0ZVNweSIsImdEU0ZQIiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJzbmFwc2hvdCIsImZyZWV6ZSIsImFyZ3VtZW50cyIsInJlcmVuZGVyIiwic3RhdGVQYXlsb2FkIiwiY2FsbCIsIm1heWJlSGFzVXBkYXRlIiwic2tpcHNDb21wb25lbnREaWRVcGRhdGVPbk51bGxpc2giLCJpbnZva2VTZXRTdGF0ZUNhbGxiYWNrIiwibm9kZU9yTm9kZXMiLCJvdGhlciIsIm5vZGVFcXVhbCIsImVsZW1lbnRUb05vZGUiLCJyc3ROb2RlIiwiYSIsImIiLCJldmVyeSIsImNvbnRhaW5zTWF0Y2hpbmdFbGVtZW50Iiwic29tZSIsInNlbGVjdG9yIiwiZ2V0VGV4dEZyb21Ob2RlIiwiaHRtbCIsImV2ZW50Iiwic2ltdWxhdGVFdmVudCIsImVycm9yIiwidGhpc05vZGUiLCJzaW11bGF0ZUVycm9yIiwicm9vdE5vZGUiLCJwcm9wc09mTm9kZSIsIm5hbWUiLCJfc3RhdGUiLCJfY29udGV4dCIsImFsbENoaWxkcmVuIiwiaW5kZXgiLCJhbGxQYXJlbnRzIiwicGFyZW50cyIsImdldCIsImlzIiwibWF0Y2hpbmdBbmNlc3RvcnMiLCJmaXJzdCIsImZpbmRXaGVyZSIsInByb3BOYW1lIiwiaGFuZGxlciIsInByb3AiLCJyZXNwb25zZSIsIlJhbmdlRXJyb3IiLCJwcm9wVmFsdWUiLCJ3cmFwcGVkIiwiZGlzcGxheU5hbWVPZk5vZGUiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwiZm4iLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJhY2N1bSIsInJlZHVjZVJpZ2h0IiwiYmVnaW4iLCJlbmQiLCJzbGljZSIsImZsYXR0ZW5lZCIsImdldEVsZW1lbnRzIiwiZXhpc3RzIiwiZmluZCIsImZuTmFtZSIsImludGVyY2VwdGVyIiwiZWwiLCJmaWx0ZXJXaGVyZSIsInVwZGF0ZVByaW1hcnlSb290Q29udGV4dCIsInByaW1hcnlXcmFwcGVyIiwicHJpbWFyeVJlbmRlcmVyIiwicHJpbWFyeU5vZGUiLCJwcmV2UHJvdmlkZXJWYWx1ZXMiLCJzZXRDb250ZXh0IiwiaXNDb250ZXh0Q29uc3VtZXIiLCJDb25zdW1lciIsIlByb3ZpZGVyIiwiZ2V0UHJvdmlkZXJGcm9tQ29uc3VtZXIiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwicmVzdWx0IiwiSVRFUkFUT1JfU1lNQk9MIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJ2YWx1ZSIsIml0ZXJhdG9yIiwiaXRlciIsIm5leHQiLCJkb25lIiwicHJpdmF0ZVdhcm5pbmciLCJleHRyYU1lc3NhZ2UiLCJlbnVtZXJhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQW1CQTs7OztBQUNBOztBQUNBOztBQVFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sZ0JBQUksVUFBSixDQUFiO0FBQ0EsSUFBTUMsUUFBUSxnQkFBSSxXQUFKLENBQWQ7QUFDQSxJQUFNQyxXQUFXLGdCQUFJLGNBQUosQ0FBakI7QUFDQSxJQUFNQyxhQUFhLGdCQUFJLGdCQUFKLENBQW5CO0FBQ0Es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Q0FBWCxDQUFoQjtBQUNBLGtEQUNHMk4sc0JBREgsY0FDc0I7QUFBRSxpQkFBTyxJQUFQO0FBQWMsU0FEdEM7QUFBQSwwQkFFUztBQUNMLGdCQUFNTSxPQUFPRCxLQUFLQyxJQUFMLEVBQWI7QUFDQSxnQkFBSUEsS0FBS0MsSUFBVCxFQUFlO0FBQ2IscUJBQU8sRUFBRUEsTUFBTSxJQUFSLEVBQVA7QUFDRDtBQUNELG1CQUFPO0FBQ0xBLG9CQUFNLEtBREQ7QUFFTEoscUJBQU9uSixRQUFRb0IsYUFBUixDQUFzQmtJLEtBQUtILEtBQTNCO0FBRkYsYUFBUDtBQUlEOztBQVhIO0FBQUE7QUFhRDs7QUFoQkQsYUFBZ0JDLFFBQWhCO0FBQUE7QUFGK0QsR0FBakU7QUFvQkQ7O0FBRUQsU0FBU0ksY0FBVCxDQUF3QjdDLElBQXhCLEVBQThCOEMsWUFBOUIsRUFBNEM7QUFDMUMvSixTQUFPdUosY0FBUCxDQUFzQnJHLGVBQWUzQyxTQUFyQyxFQUFnRDBHLElBQWhELEVBQXNEO0FBQ3BEUCxPQURvRDtBQUFBLHFCQUM5QztBQUNKLGNBQU0sSUFBSXBKLEtBQUosMkRBQ2tDMkosSUFEbEMsZ0tBR0Y4QyxZQUhFLGVBQU47QUFLRDs7QUFQbUQ7QUFBQTs7QUFRcERDLGdCQUFZLEtBUndDO0FBU3BEUixrQkFBYztBQVRzQyxHQUF0RDtBQVdEOztBQUVETSxlQUFlLE1BQWYsRUFBdUIsaURBQXZCO0FBQ0FBLGVBQWUsT0FBZixFQUF3QixrREFBeEI7QUFDQUEsZUFBZSxVQUFmLEVBQTJCLEVBQTNCO0FBQ0FBLGVBQWUsU0FBZixFQUEwQixFQUExQjtBQUNBQSxlQUFlLGlCQUFmLEVBQWtDLEVBQWxDOztxQkFFZTVHLGMiLCJmaWxlIjoiU2hhbGxvd1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmxhdCBmcm9tICdhcnJheS5wcm90b3R5cGUuZmxhdCc7XG5pbXBvcnQgaGFzIGZyb20gJ2hhcyc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJ2VuenltZS1zaGFsbG93LWVxdWFsJztcblxuaW1wb3J0IHtcbiAgbm9kZUVxdWFsLFxuICBub2RlTWF0Y2hlcyxcbiAgY29udGFpbnNDaGlsZHJlblN1YkFycmF5LFxuICB3aXRoU2V0U3RhdGVBbGxvd2VkLFxuICB0eXBlT2ZOb2RlLFxuICBpc1JlYWN0RWxlbWVudEFsaWtlLFxuICBkaXNwbGF5TmFtZU9mTm9kZSxcbiAgaXNDdXN0b21Db21wb25lbnQsXG4gIGlzQ3VzdG9tQ29tcG9uZW50RWxlbWVudCxcbiAgSVRFUkFUT1JfU1lNQk9MLFxuICBtYWtlT3B0aW9ucyxcbiAgc3ltLFxuICBwcml2YXRlU2V0LFxuICBjbG9uZUVsZW1lbnQsXG4gIHNweU1ldGhvZCxcbiAgaXNFbXB0eVZhbHVlLFxuICBsb2FkQ2hlZXJpb1Jvb3QsXG59IGZyb20gJy4vVXRpbHMnO1xuaW1wb3J0IGdldEFkYXB0ZXIgZnJvbSAnLi9nZXRBZGFwdGVyJztcbmltcG9ydCB7IGRlYnVnTm9kZXMgfSBmcm9tICcuL0RlYnVnJztcbmltcG9ydCB7XG4gIHByb3BzT2ZOb2RlLFxuICBnZXRUZXh0RnJvbU5vZGUsXG4gIGhhc0NsYXNzTmFtZSxcbiAgY2hpbGRyZW5PZk5vZGUsXG4gIHBhcmVudHNPZk5vZGUsXG4gIHRyZWVGaWx0ZXIsXG59IGZyb20gJy4vUlNUVHJhdmVyc2FsJztcbmltcG9ydCB7IGJ1aWxkUHJlZGljYXRlLCByZWR1Y2VUcmVlc0J5U2VsZWN0b3IgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmNvbnN0IE5PREUgPSBzeW0oJ19fbm9kZV9fJyk7XG5jb25zdCBOT0RFUyA9IHN5bSgnX19ub2Rlc19fJyk7XG5jb25zdCBSRU5ERVJFUiA9IHN5bSgnX19yZW5kZXJlcl9fJyk7XG5jb25zdCBVTlJFTkRFUkVEID0gc3ltKCdfX3VucmVuZGVyZWRfXycpO1xuY29uc3QgUk9PVCA9IHN5bSgnX19yb290X18nKTtcbmNvbnN0IE9QVElPTlMgPSBzeW0oJ19fb3B0aW9uc19fJyk7XG5jb25zdCBTRVRfU1RBVEUgPSBzeW0oJ19fc2V0U3RhdGVfXycpO1xuY29uc3QgUk9PVF9OT0RFUyA9IHN5bSgnX19yb290Tm9kZXNfXycpO1xuY29uc3QgQ0hJTERfQ09OVEVYVCA9IHN5bSgnX19jaGlsZENvbnRleHRfXycpO1xuY29uc3QgV1JBUFBJTkdfQ09NUE9ORU5UID0gc3ltKCdfX3dyYXBwaW5nQ29tcG9uZW50X18nKTtcbmNvbnN0IFBSSU1BUllfV1JBUFBFUiA9IHN5bSgnX19wcmltYXJ5V3JhcHBlcl9fJyk7XG5jb25zdCBST09UX0ZJTkRFUiA9IHN5bSgnX19yb290RmluZGVyX18nKTtcbmNvbnN0IFBST1ZJREVSX1ZBTFVFUyA9IHN5bSgnX19wcm92aWRlclZhbHVlc19fJyk7XG5cbi8qKlxuICogRmluZHMgYWxsIG5vZGVzIGluIHRoZSBjdXJyZW50IHdyYXBwZXIgbm9kZXMnIHJlbmRlciB0cmVlcyB0aGF0IG1hdGNoIHRoZSBwcm92aWRlZCBwcmVkaWNhdGVcbiAqIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U2hhbGxvd1dyYXBwZXJ9IHdyYXBwZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZmlsdGVyXG4gKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRXaGVyZVVud3JhcHBlZCh3cmFwcGVyLCBwcmVkaWNhdGUsIGZpbHRlciA9IHRyZWVGaWx0ZXIpIHtcbiAgcmV0dXJuIHdyYXBwZXIuZmxhdE1hcCgobikgPT4gZmlsdGVyKG4uZ2V0Tm9kZUludGVybmFsKCksIHByZWRpY2F0ZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgd3JhcHBlciBpbnN0YW5jZSB3aXRoIG9ubHkgdGhlIG5vZGVzIG9mIHRoZSBjdXJyZW50IHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBtYXRjaFxuICogdGhlIHByb3ZpZGVkIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1NoYWxsb3dXcmFwcGVyfSB3cmFwcGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGVcbiAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAqL1xuZnVuY3Rpb24gZmlsdGVyV2hlcmVVbndyYXBwZWQod3JhcHBlciwgcHJlZGljYXRlKSB7XG4gIHJldHVybiB3cmFwcGVyLndyYXAod3JhcHBlci5nZXROb2Rlc0ludGVybmFsKCkuZmlsdGVyKHByZWRpY2F0ZSkuZmlsdGVyKEJvb2xlYW4pKTtcbn1cblxuLyoqXG4gKiBFbnN1cmUgb3B0aW9ucyBwYXNzZWQgdG8gU2hhbGxvd1dyYXBwZXIgYXJlIHZhbGlkLiBUaHJvd3Mgb3RoZXJ3aXNlLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGxpZmVjeWNsZUV4cGVyaW1lbnRhbCxcbiAgICBkaXNhYmxlTGlmZWN5Y2xlTWV0aG9kcyxcbiAgICBlbmFibGVDb21wb25lbnREaWRVcGRhdGVPblNldFN0YXRlLFxuICAgIHN1cHBvcnRQcmV2Q29udGV4dEFyZ3VtZW50T2ZDb21wb25lbnREaWRVcGRhdGUsXG4gICAgbGlmZWN5Y2xlcyxcbiAgfSA9IG9wdGlvbnM7XG4gIGlmICh0eXBlb2YgbGlmZWN5Y2xlRXhwZXJpbWVudGFsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbGlmZWN5Y2xlRXhwZXJpbWVudGFsICE9PSAnYm9vbGVhbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2xpZmVjeWNsZUV4cGVyaW1lbnRhbCBtdXN0IGJlIGVpdGhlciB0cnVlIG9yIGZhbHNlIGlmIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRpc2FibGVMaWZlY3ljbGVNZXRob2RzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZGlzYWJsZUxpZmVjeWNsZU1ldGhvZHMgIT09ICdib29sZWFuJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZGlzYWJsZUxpZmVjeWNsZU1ldGhvZHMgbXVzdCBiZSBlaXRoZXIgdHJ1ZSBvciBmYWxzZSBpZiBwcm92aWRlZCcpO1xuICB9XG5cbiAgaWYgKFxuICAgIGxpZmVjeWNsZUV4cGVyaW1lbnRhbCAhPSBudWxsXG4gICAgJiYgZGlzYWJsZUxpZmVjeWNsZU1ldGhvZHMgIT0gbnVsbFxuICAgICYmIGxpZmVjeWNsZUV4cGVyaW1lbnRhbCA9PT0gZGlzYWJsZUxpZmVjeWNsZU1ldGhvZHNcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdsaWZlY3ljbGVFeHBlcmltZW50YWwgYW5kIGRpc2FibGVMaWZlY3ljbGVNZXRob2RzIGNhbm5vdCBiZSBzZXQgdG8gdGhlIHNhbWUgdmFsdWUnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgZW5hYmxlQ29tcG9uZW50RGlkVXBkYXRlT25TZXRTdGF0ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiBsaWZlY3ljbGVzLmNvbXBvbmVudERpZFVwZGF0ZVxuICAgICYmIGxpZmVjeWNsZXMuY29tcG9uZW50RGlkVXBkYXRlLm9uU2V0U3RhdGUgIT09IGVuYWJsZUNvbXBvbmVudERpZFVwZGF0ZU9uU2V0U3RhdGVcbiAgKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGhlIGxlZ2FjeSBlbmFibGVDb21wb25lbnREaWRVcGRhdGVPblNldFN0YXRlIG9wdGlvbiBzaG91bGQgYmUgbWF0Y2hlZCBieSBgbGlmZWN5Y2xlczogeyBjb21wb25lbnREaWRVcGRhdGU6IHsgb25TZXRTdGF0ZTogdHJ1ZSB9IH1gLCBmb3IgY29tcGF0aWJpbGl0eScpO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBzdXBwb3J0UHJldkNvbnRleHRBcmd1bWVudE9mQ29tcG9uZW50RGlkVXBkYXRlICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIGxpZmVjeWNsZXMuY29tcG9uZW50RGlkVXBkYXRlXG4gICAgJiYgbGlmZWN5Y2xlcy5jb21wb25lbnREaWRVcGRhdGUucHJldkNvbnRleHQgIT09IHN1cHBvcnRQcmV2Q29udGV4dEFyZ3VtZW50T2ZDb21wb25lbnREaWRVcGRhdGVcbiAgKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGhlIGxlZ2FjeSBzdXBwb3J0UHJldkNvbnRleHRBcmd1bWVudE9mQ29tcG9uZW50RGlkVXBkYXRlIG9wdGlvbiBzaG91bGQgYmUgbWF0Y2hlZCBieSBgbGlmZWN5Y2xlczogeyBjb21wb25lbnREaWRVcGRhdGU6IHsgcHJldkNvbnRleHQ6IHRydWUgfSB9YCwgZm9yIGNvbXBhdGliaWxpdHknKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBZGFwdGVyTGlmZWN5Y2xlcyh7IG9wdGlvbnMgfSkge1xuICBjb25zdCB7XG4gICAgbGlmZWN5Y2xlcyA9IHt9LFxuICAgIGVuYWJsZUNvbXBvbmVudERpZFVwZGF0ZU9uU2V0U3RhdGUsXG4gICAgc3VwcG9ydFByZXZDb250ZXh0QXJndW1lbnRPZkNvbXBvbmVudERpZFVwZGF0ZSxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgaGFzTGVnYWN5U2V0U3RhdGVBcmcgPSB0eXBlb2YgZW5hYmxlQ29tcG9uZW50RGlkVXBkYXRlT25TZXRTdGF0ZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIGNvbnN0IGhhc0xlZ2FjeVByZXZDb250ZXh0QXJnID0gdHlwZW9mIHN1cHBvcnRQcmV2Q29udGV4dEFyZ3VtZW50T2ZDb21wb25lbnREaWRVcGRhdGUgIT09ICd1bmRlZmluZWQnO1xuICBjb25zdCBjb21wb25lbnREaWRVcGRhdGUgPSBoYXNMZWdhY3lTZXRTdGF0ZUFyZyB8fCBoYXNMZWdhY3lQcmV2Q29udGV4dEFyZ1xuICAgID8ge1xuICAgICAgLi4uKGhhc0xlZ2FjeVNldFN0YXRlQXJnICYmIHtcbiAgICAgICAgb25TZXRTdGF0ZTogISFlbmFibGVDb21wb25lbnREaWRVcGRhdGVPblNldFN0YXRlLFxuICAgICAgfSksXG4gICAgICAuLi4oaGFzTGVnYWN5UHJldkNvbnRleHRBcmcgJiYge1xuICAgICAgICBwcmV2Q29udGV4dDogISFzdXBwb3J0UHJldkNvbnRleHRBcmd1bWVudE9mQ29tcG9uZW50RGlkVXBkYXRlLFxuICAgICAgfSksXG4gICAgfVxuICAgIDogbnVsbDtcbiAgY29uc3QgeyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IG9yaWdpbmFsR0RTRlAgfSA9IGxpZmVjeWNsZXM7XG4gIGNvbnN0IGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IG9yaWdpbmFsR0RTRlAgPyB7XG4gICAgaGFzU2hvdWxkQ29tcG9uZW50VXBkYXRlQnVnOiAhIW9yaWdpbmFsR0RTRlAuaGFzU2hvdWxkQ29tcG9uZW50VXBkYXRlQnVnLFxuICB9IDogZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5saWZlY3ljbGVzLFxuICAgIHNldFN0YXRlOiB7XG4gICAgICAuLi5saWZlY3ljbGVzLnNldFN0YXRlLFxuICAgIH0sXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiB7XG4gICAgICBjYWxsZWRCeVJlbmRlcmVyOiB0cnVlLFxuICAgICAgLi4ubGlmZWN5Y2xlcy5nZXRDaGlsZENvbnRleHQsXG4gICAgfSxcbiAgICAuLi4oY29tcG9uZW50RGlkVXBkYXRlICYmIHsgY29tcG9uZW50RGlkVXBkYXRlIH0pLFxuICAgIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Um9vdE5vZGUobm9kZSkge1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gJ2hvc3QnKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgcmV0dXJuIG5vZGUucmVuZGVyZWQ7XG59XG5cbmZ1bmN0aW9uIGdldFJvb3ROb2RlSW50ZXJuYWwod3JhcHBlcikge1xuICBpZiAod3JhcHBlcltST09UXS5sZW5ndGggIT09IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFJvb3ROb2RlSW50ZXJuYWwod3JhcHBlcikgY2FuIG9ubHkgYmUgY2FsbGVkIHdoZW4gd3JhcHBlciB3cmFwcyBvbmUgbm9kZScpO1xuICB9XG4gIGlmICh3cmFwcGVyW1JPT1RdICE9PSB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIHdyYXBwZXJbUk9PVF9OT0RFU11bMF07XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXJbUk9PVF1bTk9ERV07XG59XG5cbmZ1bmN0aW9uIG5vZGVQYXJlbnRzKHdyYXBwZXIsIG5vZGUpIHtcbiAgcmV0dXJuIHBhcmVudHNPZk5vZGUobm9kZSwgZ2V0Um9vdE5vZGVJbnRlcm5hbCh3cmFwcGVyKSk7XG59XG5cbmZ1bmN0aW9uIHByaXZhdGVTZXROb2Rlcyh3cmFwcGVyLCBub2Rlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFLCBub2Rlcyk7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFUywgW25vZGVzXSk7XG4gIH0gZWxzZSB7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFLCBub2Rlc1swXSk7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFUywgbm9kZXMpO1xuICB9XG4gIHByaXZhdGVTZXQod3JhcHBlciwgJ2xlbmd0aCcsIHdyYXBwZXJbTk9ERVNdLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIHB1cmVDb21wb25lbnRTaG91bGRDb21wb25lbnRVcGRhdGUocHJldlByb3BzLCBwcm9wcywgcHJldlN0YXRlLCBzdGF0ZSkge1xuICByZXR1cm4gIXNoYWxsb3dFcXVhbChwcmV2UHJvcHMsIHByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHByZXZTdGF0ZSwgc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBpc1B1cmVDb21wb25lbnQoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIGluc3RhbmNlICYmIGluc3RhbmNlLmlzUHVyZVJlYWN0Q29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBnZXRDaGlsZENvbnRleHQobm9kZSwgaGllcmFyY2h5LCByZW5kZXJlcikge1xuICBjb25zdCB7IGluc3RhbmNlLCB0eXBlOiBDb21wb25lbnQgfSA9IG5vZGU7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBkaXNwbGF5TmFtZU9mTm9kZShub2RlKTtcbiAgLy8gV2FybiBsaWtlIHJlYWN0IGlmIGNoaWxkQ29udGV4dFR5cGVzIGlzIG5vdCBkZWZpbmVkOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8xNDU0YThiZTAzNzk0ZjVlMGIyM2E3ZTc2OTZjYmJiZGNmOGIwZjVkL3BhY2thZ2VzL3JlYWN0LWRvbS9zcmMvc2VydmVyL1JlYWN0UGFydGlhbFJlbmRlcmVyLmpzI0w2MzktTDY0NlxuICBpZiAodHlwZW9mIENvbXBvbmVudC5jaGlsZENvbnRleHRUeXBlcyAhPT0gJ29iamVjdCcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGAke2NvbXBvbmVudE5hbWV9LmdldENoaWxkQ29udGV4dCgpOiBjaGlsZENvbnRleHRUeXBlcyBtdXN0IGJlIGRlZmluZWQgaW4gb3JkZXIgdG8gdXNlIGdldENoaWxkQ29udGV4dCgpLmAsXG4gICAgKTtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgLy8gQ2hlY2sgY2hpbGRDb250ZXh0VHlwZXMgbGlrZSByZWFjdDpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMTQ1NGE4YmUwMzc5NGY1ZTBiMjNhN2U3Njk2Y2JiYmRjZjhiMGY1ZC9wYWNrYWdlcy9yZWFjdC1kb20vc3JjL3NlcnZlci9SZWFjdFBhcnRpYWxSZW5kZXJlci5qcyNMNjMwLUw2MzdcbiAgY29uc3QgY2hpbGRDb250ZXh0ID0gaW5zdGFuY2UuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gIE9iamVjdC5rZXlzKGNoaWxkQ29udGV4dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCEoa2V5IGluIENvbXBvbmVudC5jaGlsZENvbnRleHRUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZX0uZ2V0Q2hpbGRDb250ZXh0KCk6IGtleSBcIiR7a2V5fVwiIGlzIG5vdCBkZWZpbmVkIGluIGNoaWxkQ29udGV4dFR5cGVzLmAsXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG4gIGlmICh0eXBlb2YgcmVuZGVyZXIuY2hlY2tQcm9wVHlwZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZW5kZXJlci5jaGVja1Byb3BUeXBlcyhDb21wb25lbnQuY2hpbGRDb250ZXh0VHlwZXMsIGNoaWxkQ29udGV4dCwgJ2NoaWxkIGNvbnRleHQnLCBoaWVyYXJjaHkpO1xuICB9XG4gIHJldHVybiBjaGlsZENvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIHNweU9uR2V0Q2hpbGRDb250ZXh0SW5pdGlhbFJlbmRlcihub2RlcywgYWRhcHRlcikge1xuICBpZiAoXG4gICAgIWlzQ3VzdG9tQ29tcG9uZW50RWxlbWVudChub2RlcywgYWRhcHRlcilcbiAgICB8fCAhbm9kZXMudHlwZS5wcm90b3R5cGVcbiAgICB8fCB0eXBlb2Ygbm9kZXMudHlwZS5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHNweU1ldGhvZChub2Rlcy50eXBlLnByb3RvdHlwZSwgJ2dldENoaWxkQ29udGV4dCcpO1xufVxuXG5mdW5jdGlvbiBwcml2YXRlU2V0Q2hpbGRDb250ZXh0KGFkYXB0ZXIsIHdyYXBwZXIsIGluc3RhbmNlLCByZW5kZXJlZE5vZGUsIGdldENoaWxkQ29udGV4dFNweSkge1xuICBjb25zdCByZW5kZXJlciA9IHdyYXBwZXJbUkVOREVSRVJdO1xuICAvLyBXZSBvbmx5IHN1cHBvcnQgcGFyZW50LWJhc2VkIGNvbnRleHQuXG4gIGlmIChhZGFwdGVyLm9wdGlvbnMubGVnYWN5Q29udGV4dE1vZGUgIT09ICdwYXJlbnQnKSB7IHJldHVybjsgfVxuICBpZiAoZ2V0Q2hpbGRDb250ZXh0U3B5KSB7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBDSElMRF9DT05URVhULCBnZXRDaGlsZENvbnRleHRTcHkuZ2V0TGFzdFJldHVyblZhbHVlKCkpO1xuICAgIGdldENoaWxkQ29udGV4dFNweS5yZXN0b3JlKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGluc3RhbmNlLmdldENoaWxkQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gc3B5IGJ1dCBnZXRDaGlsZENvbnRleHQgaXMgYSBmdW5jdGlvbiwgdGhhdCBtZWFucyBvdXIgcmVuZGVyZXJcbiAgICAvLyBpcyBub3QgZ29pbmcgdG8gY2FsbCBpdCBmb3IgdXMsIHNvIHdlIG5lZWQgdG8gY2FsbCBpdCBvdXJzZWx2ZXMuXG4gICAgY29uc3Qgbm9kZUhpZXJhcmNoeSA9IFt3cmFwcGVyW05PREVdXS5jb25jYXQobm9kZVBhcmVudHMod3JhcHBlciwgd3JhcHBlcltOT0RFXSkpO1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dChyZW5kZXJlZE5vZGUsIG5vZGVIaWVyYXJjaHksIHJlbmRlcmVyKTtcbiAgICBwcml2YXRlU2V0KHdyYXBwZXIsIENISUxEX0NPTlRFWFQsIGNoaWxkQ29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBDSElMRF9DT05URVhULCBudWxsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb2NrU0NVSWZnRFNGUFJldHVybk5vbk51bGwobm9kZSwgc3RhdGUpIHtcbiAgY29uc3QgeyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgfSA9IG5vZGUudHlwZTtcblxuICBpZiAodHlwZW9mIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIHdlIHRyeSB0byBmaXggYSBSZWFjdCBzaGFsbG93IHJlbmRlcmVyIGJ1ZyBoZXJlLlxuICAgIC8vIChmYWNlYm9vay9yZWFjdCMxNDYwNywgd2hpY2ggaGFzIGJlZW4gZml4ZWQgaW4gcmVhY3QgMTYuOCk6XG4gICAgLy8gd2hlbiBnRFNGUCByZXR1cm4gZGVyaXZlZCBzdGF0ZSwgaXQgd2lsbCBzZXQgaW5zdGFuY2Ugc3RhdGUgaW4gc2hhbGxvdyByZW5kZXJlciBiZWZvcmUgU0NVLFxuICAgIC8vIHRoaXMgd2lsbCBjYXVzZSBgdGhpcy5zdGF0ZWAgaW4gc0NVIGJlIHRoZSB1cGRhdGVkIHN0YXRlLCB3aGljaCBpcyB3cm9uZyBiZWhhdmlvci5cbiAgICAvLyBzbyB3ZSBoYXZlIHRvIHdyYXAgc0NVIHRvIHBhc3MgdGhlIG9sZCBzdGF0ZSB0byBvcmlnaW5hbCBzQ1UuXG4gICAgY29uc3QgeyBpbnN0YW5jZSB9ID0gbm9kZTtcbiAgICBjb25zdCB7IHJlc3RvcmUgfSA9IHNweU1ldGhvZChcbiAgICAgIGluc3RhbmNlLFxuICAgICAgJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICAob3JpZ2luYWxTQ1UpID0+IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSguLi5hcmdzKSB7XG4gICAgICAgIGluc3RhbmNlLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIGNvbnN0IHNDVVJlc3VsdCA9IG9yaWdpbmFsU0NVLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgY29uc3QgWywgbmV4dFN0YXRlXSA9IGFyZ3M7XG4gICAgICAgIGluc3RhbmNlLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICByZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiBzQ1VSZXN1bHQ7XG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBkaXZlKClzIGV2ZXJ5IGN1c3RvbSBjb21wb25lbnQgaW4gYSB3cmFwcGVyIHVudGlsXG4gKiB0aGUgdGFyZ2V0IGNvbXBvbmVudCBpcyBmb3VuZC5cbiAqXG4gKiBAcGFyYW0ge1NoYWxsb3dXcmFwcGVyfSB3cmFwcGVyIEEgU2hhbGxvd1dyYXBwZXIgdG8gc2VhcmNoXG4gKiBAcGFyYW0ge0NvbXBvbmVudFR5cGV9IHRhcmdldCBBIHJlYWN0IGN1c3RvbSBjb21wb25lbnQgdGhhdCwgd2hlbiBmb3VuZCwgd2lsbCBlbmQgcmVjdXJzaW9uXG4gKiBAcGFyYW0ge0FkYXB0ZXJ9IGFkYXB0ZXIgQW4gRW56eW1lIGFkYXB0ZXJcbiAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcnx1bmRlZmluZWR9IEEgU2hhbGxvd1dyYXBwZXIgZm9yIHRoZSB0YXJnZXQsIG9yXG4gKiAgdW5kZWZpbmVkIGlmIGl0IGNhbid0IGJlIGZvdW5kXG4gKi9cbmZ1bmN0aW9uIGRlZXBSZW5kZXIod3JhcHBlciwgdGFyZ2V0LCBhZGFwdGVyKSB7XG4gIGNvbnN0IG5vZGUgPSB3cmFwcGVyW05PREVdO1xuICBjb25zdCBlbGVtZW50ID0gbm9kZSAmJiBhZGFwdGVyLm5vZGVUb0VsZW1lbnQobm9kZSk7XG4gIGlmICh3cmFwcGVyLnR5cGUoKSA9PT0gdGFyZ2V0KSB7XG4gICAgcmV0dXJuIHdyYXBwZXIuZGl2ZSgpO1xuICB9XG4gIGlmIChlbGVtZW50ICYmIGlzQ3VzdG9tQ29tcG9uZW50RWxlbWVudChlbGVtZW50LCBhZGFwdGVyKSkge1xuICAgIHJldHVybiBkZWVwUmVuZGVyKHdyYXBwZXIuZGl2ZSgpLCB0YXJnZXQsIGFkYXB0ZXIpO1xuICB9XG4gIGNvbnN0IGNoaWxkcmVuID0gd3JhcHBlci5jaGlsZHJlbigpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZm91bmQgPSBkZWVwUmVuZGVyKGNoaWxkcmVuLmF0KGkpLCB0YXJnZXQsIGFkYXB0ZXIpO1xuICAgIGlmICh0eXBlb2YgZm91bmQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogRGVlcC1yZW5kZXJzIHRoZSBgd3JhcHBpbmdDb21wb25lbnRgIGFuZCByZXR1cm5zIHRoZSBjb250ZXh0IHRoYXQgc2hvdWxkXG4gKiBiZSBhY2Nlc3NpYmxlIHRvIHRoZSBwcmltYXJ5IHdyYXBwZXIuXG4gKlxuICogQHBhcmFtIHtXcmFwcGluZ0NvbXBvbmVudFdyYXBwZXJ9IHdyYXBwZXIgVGhlIGBXcmFwcGluZ0NvbXBvbmVudFdyYXBwZXJgIGZvciBhXG4gKiAgYHdyYXBwaW5nQ29tcG9uZW50YFxuICogQHBhcmFtIHtBZGFwdGVyfSBhZGFwdGVyIEFuIEVuenltZSBhZGFwdGVyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbiBvYmplY3Qgb2YgbGVnYWN5IGNvbnRleHQgdmFsdWVzIGFuZCBhIE1hcCBvZlxuICogIGBjcmVhdGVDb250ZXh0KClgIFByb3ZpZGVyIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0Q29udGV4dEZyb21XcmFwcGluZ0NvbXBvbmVudCh3cmFwcGVyLCBhZGFwdGVyKSB7XG4gIGNvbnN0IHJvb3RGaW5kZXIgPSBkZWVwUmVuZGVyKHdyYXBwZXIsIHdyYXBwZXJbUk9PVF9GSU5ERVJdLCBhZGFwdGVyKTtcbiAgaWYgKCFyb290RmluZGVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgd3JhcHBpbmdDb21wb25lbnRgIG11c3QgcmVuZGVyIGl0cyBjaGlsZHJlbiEnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxlZ2FjeUNvbnRleHQ6IHJvb3RGaW5kZXJbT1BUSU9OU10uY29udGV4dCxcbiAgICBwcm92aWRlclZhbHVlczogcm9vdEZpbmRlcltQUk9WSURFUl9WQUxVRVNdLFxuICB9O1xufVxuXG4vKipcbiAqIE1ha2VzIG9wdGlvbnMgc3BlY2lmaWNhbGx5IGZvciBgU2hhbGxvd1dyYXBwZXJgLiBNb3N0IG9mIHRoZSBsb2dpYyBoZXJlIGlzIGFyb3VuZCByZW5kZXJpbmdcbiAqIGEgYHdyYXBwaW5nQ29tcG9uZW50YCAoaWYgb25lIHdhcyBwcm92aWRlZCkgYW5kIGFkZGluZyB0aGUgY2hpbGQgY29udGV4dCBvZiB0aGF0IGNvbXBvbmVudFxuICogdG8gYG9wdGlvbnMuY29udGV4dGAuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IG5vZGVzIHRoZSBub2RlcyBwYXNzZWQgdG8gYFNoYWxsb3dXcmFwcGVyYFxuICogQHBhcmFtIHtTaGFsbG93V3JhcHBlcn0gcm9vdCB0aGlzIGBTaGFsbG93V3JhcHBlcmAncyBwYXJlbnQuIElmIHRoaXMgaXMgcGFzc2VkLCBvcHRpb25zIGFyZVxuICogIG5vdCB0cmFuc2Zvcm1lZC5cbiAqIEBwYXJhbSB7Kn0gcGFzc2VkT3B0aW9ucyB0aGUgb3B0aW9ucyBwYXNzZWQgdG8gYFNoYWxsb3dXcmFwcGVyYC5cbiAqIEBwYXJhbSB7Kn0gd3JhcHBlciB0aGUgYFNoYWxsb3dXcmFwcGVyYCBpdHNlbGZcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkZWNvcmF0ZWQgYW5kIHRyYW5zZm9ybWVkIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gbWFrZVNoYWxsb3dPcHRpb25zKG5vZGVzLCByb290LCBwYXNzZWRPcHRpb25zLCB3cmFwcGVyKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBtYWtlT3B0aW9ucyhwYXNzZWRPcHRpb25zKTtcbiAgY29uc3QgYWRhcHRlciA9IGdldEFkYXB0ZXIocGFzc2VkT3B0aW9ucyk7XG4gIHByaXZhdGVTZXQob3B0aW9ucywgUFJPVklERVJfVkFMVUVTLCBwYXNzZWRPcHRpb25zW1BST1ZJREVSX1ZBTFVFU10pO1xuICBpZiAocm9vdCB8fCAhaXNDdXN0b21Db21wb25lbnQob3B0aW9ucy53cmFwcGluZ0NvbXBvbmVudCwgYWRhcHRlcikpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuICBpZiAodHlwZW9mIGFkYXB0ZXIud3JhcFdpdGhXcmFwcGluZ0NvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3lvdXIgYWRhcHRlciBkb2VzIG5vdCBzdXBwb3J0IGB3cmFwcGluZ0NvbXBvbmVudGAuIFRyeSB1cGdyYWRpbmcgaXQhJyk7XG4gIH1cbiAgY29uc3QgeyBub2RlOiB3cmFwcGVkTm9kZSwgUm9vdEZpbmRlciB9ID0gYWRhcHRlci53cmFwV2l0aFdyYXBwaW5nQ29tcG9uZW50KG5vZGVzLCBvcHRpb25zKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGNvbnN0IHdyYXBwaW5nQ29tcG9uZW50ID0gbmV3IFdyYXBwaW5nQ29tcG9uZW50V3JhcHBlcih3cmFwcGVkTm9kZSwgd3JhcHBlciwgUm9vdEZpbmRlcik7XG4gIGNvbnN0IHtcbiAgICBsZWdhY3lDb250ZXh0OiB3cmFwcGluZ0NvbXBvbmVudExlZ2FjeUNvbnRleHQsXG4gICAgcHJvdmlkZXJWYWx1ZXM6IHdyYXBwaW5nQ29tcG9uZW50UHJvdmlkZXJWYWx1ZXMsXG4gIH0gPSBnZXRDb250ZXh0RnJvbVdyYXBwaW5nQ29tcG9uZW50KHdyYXBwaW5nQ29tcG9uZW50LCBhZGFwdGVyKTtcbiAgcHJpdmF0ZVNldCh3cmFwcGVyLCBXUkFQUElOR19DT01QT05FTlQsIHdyYXBwaW5nQ29tcG9uZW50KTtcbiAgcmV0dXJuIHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGNvbnRleHQ6IHtcbiAgICAgIC4uLm9wdGlvbnMuY29udGV4dCxcbiAgICAgIC4uLndyYXBwaW5nQ29tcG9uZW50TGVnYWN5Q29udGV4dCxcbiAgICB9LFxuICAgIFtQUk9WSURFUl9WQUxVRVNdOiB3cmFwcGluZ0NvbXBvbmVudFByb3ZpZGVyVmFsdWVzLFxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIG1ha2VJbmhlcml0ZWRDaGlsZE9wdGlvbnMod3JhcHBlciwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNoaWxkT3B0aW9ucyA9IHtcbiAgICAuLi53cmFwcGVyW09QVElPTlNdLFxuICAgIC4uLm9wdGlvbnMsXG4gICAgY29udGV4dDogb3B0aW9ucy5jb250ZXh0IHx8IHtcbiAgICAgIC4uLndyYXBwZXJbT1BUSU9OU10uY29udGV4dCxcbiAgICAgIC4uLndyYXBwZXJbUk9PVF1bQ0hJTERfQ09OVEVYVF0sXG4gICAgfSxcbiAgfTtcbiAgcHJpdmF0ZVNldChjaGlsZE9wdGlvbnMsIFBST1ZJREVSX1ZBTFVFUywgd3JhcHBlcltST09UXVtQUk9WSURFUl9WQUxVRVNdKTtcbiAgcmV0dXJuIGNoaWxkT3B0aW9ucztcbn1cblxuXG4vKipcbiAqIEBjbGFzcyBTaGFsbG93V3JhcHBlclxuICovXG5jbGFzcyBTaGFsbG93V3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKG5vZGVzLCByb290LCBwYXNzZWRPcHRpb25zID0ge30pIHtcbiAgICB2YWxpZGF0ZU9wdGlvbnMocGFzc2VkT3B0aW9ucyk7XG5cbiAgICBjb25zdCBvcHRpb25zID0gbWFrZVNoYWxsb3dPcHRpb25zKG5vZGVzLCByb290LCBwYXNzZWRPcHRpb25zLCB0aGlzKTtcbiAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcihvcHRpb25zKTtcbiAgICBjb25zdCBsaWZlY3ljbGVzID0gZ2V0QWRhcHRlckxpZmVjeWNsZXMoYWRhcHRlcik7XG5cbiAgICAvLyBtb3VudGluZyBhIFNoYWxsb3dSZW5kZXIgY29tcG9uZW50XG4gICAgaWYgKCFyb290KSB7XG4gICAgICBpZiAoIWFkYXB0ZXIuaXNWYWxpZEVsZW1lbnQobm9kZXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NoYWxsb3dXcmFwcGVyIGNhbiBvbmx5IHdyYXAgdmFsaWQgZWxlbWVudHMnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZ2V0Q2hpbGRDb250ZXh0U3B5ID0gbGlmZWN5Y2xlcy5nZXRDaGlsZENvbnRleHQuY2FsbGVkQnlSZW5kZXJlclxuICAgICAgICA/IHNweU9uR2V0Q2hpbGRDb250ZXh0SW5pdGlhbFJlbmRlcihub2RlcywgYWRhcHRlcilcbiAgICAgICAgOiBudWxsO1xuICAgICAgcHJpdmF0ZVNldCh0aGlzLCBST09ULCB0aGlzKTtcbiAgICAgIHByaXZhdGVTZXQodGhpcywgVU5SRU5ERVJFRCwgbm9kZXMpO1xuICAgICAgY29uc3QgcmVuZGVyZXIgPSBhZGFwdGVyLmNyZWF0ZVJlbmRlcmVyKHsgbW9kZTogJ3NoYWxsb3cnLCAuLi5vcHRpb25zIH0pO1xuICAgICAgcHJpdmF0ZVNldCh0aGlzLCBSRU5ERVJFUiwgcmVuZGVyZXIpO1xuICAgICAgY29uc3QgcHJvdmlkZXJWYWx1ZXMgPSBuZXcgTWFwKG9wdGlvbnNbUFJPVklERVJfVkFMVUVTXSB8fCBbXSk7XG4gICAgICB0aGlzW1JFTkRFUkVSXS5yZW5kZXIobm9kZXMsIG9wdGlvbnMuY29udGV4dCwgeyBwcm92aWRlclZhbHVlcyB9KTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkTm9kZSA9IHRoaXNbUkVOREVSRVJdLmdldE5vZGUoKTtcbiAgICAgIHByaXZhdGVTZXROb2Rlcyh0aGlzLCBnZXRSb290Tm9kZShyZW5kZXJlZE5vZGUpKTtcbiAgICAgIHByaXZhdGVTZXQodGhpcywgT1BUSU9OUywgb3B0aW9ucyk7XG4gICAgICBwcml2YXRlU2V0KHRoaXMsIFBST1ZJREVSX1ZBTFVFUywgcHJvdmlkZXJWYWx1ZXMpO1xuXG4gICAgICBjb25zdCB7IGluc3RhbmNlIH0gPSByZW5kZXJlZE5vZGU7XG4gICAgICBpZiAoaW5zdGFuY2UgJiYgIW9wdGlvbnMuZGlzYWJsZUxpZmVjeWNsZU1ldGhvZHMpIHtcbiAgICAgICAgLy8gRW5zdXJlIHRvIGNhbGwgY29tcG9uZW50RGlkVXBkYXRlIHdoZW4gaW5zdGFuY2Uuc2V0U3RhdGUgaXMgY2FsbGVkXG4gICAgICAgIGlmIChsaWZlY3ljbGVzLmNvbXBvbmVudERpZFVwZGF0ZS5vblNldFN0YXRlICYmICFpbnN0YW5jZVtTRVRfU1RBVEVdKSB7XG4gICAgICAgICAgcHJpdmF0ZVNldChpbnN0YW5jZSwgU0VUX1NUQVRFLCBpbnN0YW5jZS5zZXRTdGF0ZSk7XG4gICAgICAgICAgaW5zdGFuY2Uuc2V0U3RhdGUgPSAodXBkYXRlciwgY2FsbGJhY2sgPSB1bmRlZmluZWQpID0+IHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAuLi4oY2FsbGJhY2sgPT0gbnVsbCA/IFt1cGRhdGVyXSA6IFt1cGRhdGVyLCBjYWxsYmFja10pLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlLmNvbXBvbmVudERpZE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpc1tSRU5ERVJFUl0uYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcml2YXRlU2V0Q2hpbGRDb250ZXh0KGFkYXB0ZXIsIHRoaXMsIGluc3RhbmNlLCByZW5kZXJlZE5vZGUsIGdldENoaWxkQ29udGV4dFNweSk7XG4gICAgICB9XG4gICAgLy8gY3JlYXRpbmcgYSBjaGlsZCBjb21wb25lbnQgdGhyb3VnaCBlbnp5bWUncyBTaGFsbG93V3JhcHBlciBBUElzLlxuICAgIH0gZWxzZSB7XG4gICAgICBwcml2YXRlU2V0KHRoaXMsIFJPT1QsIHJvb3QpO1xuICAgICAgcHJpdmF0ZVNldCh0aGlzLCBVTlJFTkRFUkVELCBudWxsKTtcbiAgICAgIHByaXZhdGVTZXQodGhpcywgUkVOREVSRVIsIHJvb3RbUkVOREVSRVJdKTtcbiAgICAgIHByaXZhdGVTZXROb2Rlcyh0aGlzLCBub2Rlcyk7XG4gICAgICBwcml2YXRlU2V0KHRoaXMsIE9QVElPTlMsIHJvb3RbT1BUSU9OU10pO1xuICAgICAgcHJpdmF0ZVNldCh0aGlzLCBST09UX05PREVTLCByb290W05PREVTXSk7XG4gICAgICBwcml2YXRlU2V0KHRoaXMsIFBST1ZJREVSX1ZBTFVFUywgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3Qgd3JhcHBlclxuICAgKlxuICAgKiBAcmV0dXJuIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXNbUk9PVF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd3JhcHBlZCBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgZ2V0Tm9kZUludGVybmFsKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGFsbG93V3JhcHBlcjo6Z2V0Tm9kZSgpIGNhbiBvbmx5IGJlIGNhbGxlZCB3aGVuIHdyYXBwaW5nIG9uZSBub2RlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzW1JPT1RdID09PSB0aGlzKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tOT0RFXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0aGUgd3JhcHBlZCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtBcnJheTxSZWFjdENvbXBvbmVudD59XG4gICAqL1xuICBnZXROb2Rlc0ludGVybmFsKCkge1xuICAgIGlmICh0aGlzW1JPT1RdID09PSB0aGlzICYmIHRoaXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tOT0RFU107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd3JhcHBlZCBSZWFjdEVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH1cbiAgICovXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdnZXRFbGVtZW50JywgKG4pID0+IGdldEFkYXB0ZXIodGhpc1tPUFRJT05TXSkubm9kZVRvRWxlbWVudChuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd3JhcHBlZCBSZWFjdEVsZW1lbnRzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtBcnJheTxSZWFjdEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLm1hcCgobikgPT4gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKS5ub2RlVG9FbGVtZW50KG4pKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGdldE5vZGUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGFsbG93V3JhcHBlcjo6Z2V0Tm9kZSgpIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFVzZSBTaGFsbG93V3JhcHBlcjo6Z2V0RWxlbWVudCgpIGluc3RlYWQnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGdldE5vZGVzKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OmdldE5vZGVzKCkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC4gVXNlIFNoYWxsb3dXcmFwcGVyOjpnZXRFbGVtZW50cygpIGluc3RlYWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGJlaW5nIHJlbmRlcmVkIGFzIHRoZSByb290IG5vZGUgcGFzc2VkIGludG8gYHNoYWxsb3coKWAuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBpcyBhbHNvIHRoZSByb290IGluc3RhbmNlLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPE15Q29tcG9uZW50IC8+KTtcbiAgICogY29uc3QgaW5zdCA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcbiAgICogZXhwZWN0KGluc3QpLnRvLmJlLmluc3RhbmNlT2YoTXlDb21wb25lbnQpO1xuICAgKiBgYGBcbiAgICogQHJldHVybnMge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgaW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6Omluc3RhbmNlKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW1JFTkRFUkVSXS5nZXROb2RlKCkuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBgd3JhcHBpbmdDb21wb25lbnRgIHdhcyBwYXNzZWQgaW4gYG9wdGlvbnNgLCB0aGlzIG1ldGhvZHMgcmV0dXJucyBhIGBTaGFsbG93V3JhcHBlcmBcbiAgICogYXJvdW5kIHRoZSByZW5kZXJlZCBgd3JhcHBpbmdDb21wb25lbnRgLiBUaGlzIGBTaGFsbG93V3JhcHBlcmAgY2FuIGJlIHVzZWQgdG8gdXBkYXRlIHRoZVxuICAgKiBgd3JhcHBpbmdDb21wb25lbnRgJ3MgcHJvcHMsIHN0YXRlLCBldGMuXG4gICAqXG4gICAqIEByZXR1cm5zIFNoYWxsb3dXcmFwcGVyXG4gICAqL1xuICBnZXRXcmFwcGluZ0NvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpc1tST09UXSAhPT0gdGhpcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGFsbG93V3JhcHBlcjo6Z2V0V3JhcHBpbmdDb21wb25lbnQoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhlIHJvb3QnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzW09QVElPTlNdLndyYXBwaW5nQ29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYWxsb3dXcmFwcGVyOjpnZXRXcmFwcGluZ0NvbXBvbmVudCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgdGhhdCB3YXMgb3JpZ2luYWxseSBwYXNzZWQgYSBgd3JhcHBpbmdDb21wb25lbnRgIG9wdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tXUkFQUElOR19DT01QT05FTlRdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhIHJlLXJlbmRlci4gVXNlZnVsIHRvIHJ1biBiZWZvcmUgY2hlY2tpbmcgdGhlIHJlbmRlciBvdXRwdXQgaWYgc29tZXRoaW5nIGV4dGVybmFsXG4gICAqIG1heSBiZSB1cGRhdGluZyB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBzb21ld2hlcmUuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBpcyBhbHNvIHRoZSByb290IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OnVwZGF0ZSgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGUgcm9vdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OnVwZGF0ZSgpIGNhbiBvbmx5IGJlIGNhbGxlZCB3aGVuIHdyYXBwaW5nIG9uZSBub2RlJyk7XG4gICAgfVxuICAgIHByaXZhdGVTZXROb2Rlcyh0aGlzLCBnZXRSb290Tm9kZSh0aGlzW1JFTkRFUkVSXS5nZXROb2RlKCkpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IHVubW91bnRzIHRoZSBjb21wb25lbnQuIFRoaXMgY2FuIGJlIHVzZWQgdG8gc2ltdWxhdGUgYSBjb21wb25lbnQgZ29pbmcgdGhyb3VnaFxuICAgKiBhbmQgdW5tb3VudC9tb3VudCBsaWZlY3ljbGUuXG4gICAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIHVubW91bnQoKSB7XG4gICAgdGhpc1tSRU5ERVJFUl0udW5tb3VudCgpO1xuICAgIGlmICh0aGlzW1JPT1RdW1dSQVBQSU5HX0NPTVBPTkVOVF0pIHtcbiAgICAgIHRoaXNbUk9PVF1bV1JBUFBJTkdfQ09NUE9ORU5UXS51bm1vdW50KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIGlzIGZvciByZS1yZW5kZXIgd2l0aCBuZXcgcHJvcHMgYW5kIGNvbnRleHQuXG4gICAqIFRoaXMgY2FsbHMgY29tcG9uZW50RGlkVXBkYXRlIG1ldGhvZCBpZiBkaXNhYmxlTGlmZWN5Y2xlTWV0aG9kcyBpcyBub3QgZW5hYmxlZC5cbiAgICpcbiAgICogTk9URTogY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgd3JhcHBlciBpbnN0YW5jZSB0aGF0IGlzIGFsc28gdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICByZXJlbmRlcihwcm9wcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBnZXRBZGFwdGVyKHRoaXNbT1BUSU9OU10pO1xuICAgIHRoaXMuc2luZ2xlKCdyZXJlbmRlcicsICgpID0+IHtcbiAgICAgIHdpdGhTZXRTdGF0ZUFsbG93ZWQoKCkgPT4ge1xuICAgICAgICAvLyBOT1RFKGxtcik6IEluIHJlYWN0IDE2LCBpbnN0YW5jZXMgd2lsbCBiZSBudWxsIGZvciBTRkNzLCBidXRcbiAgICAgICAgLy8gcmVyZW5kZXJpbmcgd2l0aCBwcm9wcy9jb250ZXh0IGlzIHN0aWxsIGEgdmFsaWQgdGhpbmcgdG8gZG8uIEluXG4gICAgICAgIC8vIHRoaXMgY2FzZSwgc3RhdGUgd2lsbCBiZSB1bmRlZmluZWQsIGJ1dCBwcm9wcy9jb250ZXh0IHdpbGwgZXhpc3QuXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzW1JFTkRFUkVSXS5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbm9kZS5pbnN0YW5jZSB8fCB7fTtcbiAgICAgICAgY29uc3QgdHlwZSA9IG5vZGUudHlwZSB8fCB7fTtcbiAgICAgICAgY29uc3QgeyBzdGF0ZSB9ID0gaW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzIHx8IHRoaXNbVU5SRU5ERVJFRF0ucHJvcHM7XG4gICAgICAgIGNvbnN0IHByZXZDb250ZXh0ID0gaW5zdGFuY2UuY29udGV4dCB8fCB0aGlzW09QVElPTlNdLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IG5leHRDb250ZXh0ID0gY29udGV4dCB8fCBwcmV2Q29udGV4dDtcbiAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICB0aGlzW09QVElPTlNdID0geyAuLi50aGlzW09QVElPTlNdLCBjb250ZXh0OiBuZXh0Q29udGV4dCB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbUkVOREVSRVJdLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgICAgICAvLyBXaGVuIHNob3VsZENvbXBvbmVudFVwZGF0ZSByZXR1cm5zIGZhbHNlIHdlIHNob3VsZG4ndCBjYWxsIGNvbXBvbmVudERpZFVwZGF0ZS5cbiAgICAgICAgICAvLyBzbyB3ZSBzcHkgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHRvIGdldCB0aGUgcmVzdWx0LlxuICAgICAgICAgIGNvbnN0IGxpZmVjeWNsZXMgPSBnZXRBZGFwdGVyTGlmZWN5Y2xlcyhhZGFwdGVyKTtcbiAgICAgICAgICBsZXQgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICBsZXQgc2hvdWxkQ29tcG9uZW50VXBkYXRlU3B5O1xuICAgICAgICAgIGxldCBnZXRDaGlsZENvbnRleHRTcHk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXNbT1BUSU9OU10uZGlzYWJsZUxpZmVjeWNsZU1ldGhvZHNcbiAgICAgICAgICAgICYmIGluc3RhbmNlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zdCB7IGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogZ0RTRlAgfSA9IGxpZmVjeWNsZXM7XG4gICAgICAgICAgICAgIGlmIChnRFNGUCAmJiBnRFNGUC5oYXNTaG91bGRDb21wb25lbnRVcGRhdGVCdWcpIHtcbiAgICAgICAgICAgICAgICBtb2NrU0NVSWZnRFNGUFJldHVybk5vbk51bGwobm9kZSwgc3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZVNweSA9IHNweU1ldGhvZChpbnN0YW5jZSwgJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBsaWZlY3ljbGVzLmdldENoaWxkQ29udGV4dC5jYWxsZWRCeVJlbmRlcmVyXG4gICAgICAgICAgICAgICYmIHR5cGVvZiBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBnZXRDaGlsZENvbnRleHRTcHkgPSBzcHlNZXRob2QoaW5zdGFuY2UsICdnZXRDaGlsZENvbnRleHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFzaG91bGRDb21wb25lbnRVcGRhdGVTcHkgJiYgaXNQdXJlQ29tcG9uZW50KGluc3RhbmNlKSkge1xuICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gcHVyZUNvbXBvbmVudFNob3VsZENvbXBvbmVudFVwZGF0ZShcbiAgICAgICAgICAgICAgcHJldlByb3BzLFxuICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgIGluc3RhbmNlLnN0YXRlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHByb3BzKSB0aGlzW1VOUkVOREVSRURdID0gY2xvbmVFbGVtZW50KGFkYXB0ZXIsIHRoaXNbVU5SRU5ERVJFRF0sIHByb3BzKTtcbiAgICAgICAgICB0aGlzW1JFTkRFUkVSXS5yZW5kZXIodGhpc1tVTlJFTkRFUkVEXSwgbmV4dENvbnRleHQsIHtcbiAgICAgICAgICAgIHByb3ZpZGVyVmFsdWVzOiB0aGlzW1BST1ZJREVSX1ZBTFVFU10sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHNob3VsZENvbXBvbmVudFVwZGF0ZVNweSkge1xuICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gc2hvdWxkQ29tcG9uZW50VXBkYXRlU3B5LmdldExhc3RSZXR1cm5WYWx1ZSgpO1xuICAgICAgICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlU3B5LnJlc3RvcmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyXG4gICAgICAgICAgICAmJiAhdGhpc1tPUFRJT05TXS5kaXNhYmxlTGlmZWN5Y2xlTWV0aG9kc1xuICAgICAgICAgICAgJiYgaW5zdGFuY2VcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaXZhdGVTZXRDaGlsZENvbnRleHQoYWRhcHRlciwgdGhpcywgaW5zdGFuY2UsIG5vZGUsIGdldENoaWxkQ29udGV4dFNweSk7XG4gICAgICAgICAgICBpZiAobGlmZWN5Y2xlcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSkge1xuICAgICAgICAgICAgICBsZXQgc25hcHNob3Q7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzbmFwc2hvdCA9IGluc3RhbmNlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcywgc3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBsaWZlY3ljbGVzLmNvbXBvbmVudERpZFVwZGF0ZVxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAhc3RhdGVcbiAgICAgICAgICAgICAgICAgIHx8IHNoYWxsb3dFcXVhbChzdGF0ZSwgdGhpcy5pbnN0YW5jZSgpLnN0YXRlKVxuICAgICAgICAgICAgICAgICAgfHwgdHlwZW9mIHR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBzdGF0ZSwgc25hcHNob3QpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICBsaWZlY3ljbGVzLmNvbXBvbmVudERpZFVwZGF0ZVxuICAgICAgICAgICAgICAmJiB0eXBlb2YgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKGxpZmVjeWNsZXMuY29tcG9uZW50RGlkVXBkYXRlLnByZXZDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgc3RhdGUsIHByZXZDb250ZXh0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3RhdGUgfHwgc2hhbGxvd0VxdWFsKHRoaXMuaW5zdGFuY2UoKS5zdGF0ZSwgc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgc3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgaXQgZG9lc24ndCBuZWVkIHRvIHJlcmVuZGVyLCB1cGRhdGUgb25seSBpdHMgcHJvcHMuXG4gICAgICAgICAgfSBlbHNlIGlmICghc2hhbGxvd0VxdWFsKHByb3BzLCBpbnN0YW5jZS5wcm9wcykpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnByb3BzID0gKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh7IC4uLmluc3RhbmNlLnByb3BzLCAuLi5wcm9wcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IHNldHMgdGhlIHByb3BzIG9mIHRoZSByb290IGNvbXBvbmVudCwgYW5kIHJlLXJlbmRlcnMuIFVzZWZ1bCBmb3Igd2hlbiB5b3UgYXJlXG4gICAqIHdhbnRpbmcgdG8gdGVzdCBob3cgdGhlIGNvbXBvbmVudCBiZWhhdmVzIG92ZXIgdGltZSB3aXRoIGNoYW5naW5nIHByb3BzLiBDYWxsaW5nIHRoaXMsIGZvclxuICAgKiBpbnN0YW5jZSwgd2lsbCBjYWxsIHRoZSBgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc2AgbGlmZWN5Y2xlIG1ldGhvZC5cbiAgICpcbiAgICogU2ltaWxhciB0byBgc2V0U3RhdGVgLCB0aGlzIG1ldGhvZCBhY2NlcHRzIGEgcHJvcHMgb2JqZWN0IGFuZCB3aWxsIG1lcmdlIGl0IGluIHdpdGggdGhlIGFscmVhZHlcbiAgICogZXhpc3RpbmcgcHJvcHMuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBpcyBhbHNvIHRoZSByb290IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgb2JqZWN0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybnMge1NoYWxsb3dXcmFwcGVyfVxuICAgKi9cbiAgc2V0UHJvcHMocHJvcHMsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OnNldFByb3BzKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWN0V3JhcHBlcjo6c2V0UHJvcHMoKSBleHBlY3RzIGEgZnVuY3Rpb24gYXMgaXRzIHNlY29uZCBhcmd1bWVudCcpO1xuICAgIH1cbiAgICB0aGlzLnJlcmVuZGVyKHByb3BzKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRvIGludm9rZSBgc2V0U3RhdGVgIG9uIHRoZSByb290IGNvbXBvbmVudCBpbnN0YW5jZSBzaW1pbGFyIHRvIGhvdyB5b3UgbWlnaHQgaW4gdGhlXG4gICAqIGRlZmluaXRpb24gb2YgdGhlIGNvbXBvbmVudCwgYW5kIHJlLXJlbmRlcnMuICBUaGlzIG1ldGhvZCBpcyB1c2VmdWwgZm9yIHRlc3RpbmcgeW91ciBjb21wb25lbnRcbiAgICogaW4gaGFyZCB0byBhY2hpZXZlIHN0YXRlcywgaG93ZXZlciBzaG91bGQgYmUgdXNlZCBzcGFyaW5nbHkuIElmIHBvc3NpYmxlLCB5b3Ugc2hvdWxkIHV0aWxpemVcbiAgICogeW91ciBjb21wb25lbnQncyBleHRlcm5hbCBBUEkgaW4gb3JkZXIgdG8gZ2V0IGl0IGludG8gd2hhdGV2ZXIgc3RhdGUgeW91IHdhbnQgdG8gdGVzdCwgaW4gb3JkZXJcbiAgICogdG8gYmUgYXMgYWNjdXJhdGUgb2YgYSB0ZXN0IGFzIHBvc3NpYmxlLiBUaGlzIGlzIG5vdCBhbHdheXMgcHJhY3RpY2FsLCBob3dldmVyLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIGluc3RhbmNlIHRoYXQgaXMgYWxzbyB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIHRvIG1lcmdlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybnMge1NoYWxsb3dXcmFwcGVyfVxuICAgKi9cbiAgc2V0U3RhdGUoc3RhdGUsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OnNldFN0YXRlKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmluc3RhbmNlKCkgPT09IG51bGwgfHwgdGhpc1tSRU5ERVJFUl0uZ2V0Tm9kZSgpLm5vZGVUeXBlICE9PSAnY2xhc3MnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYWxsb3dXcmFwcGVyOjpzZXRTdGF0ZSgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBjbGFzcyBjb21wb25lbnRzJyk7XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWN0V3JhcHBlcjo6c2V0U3RhdGUoKSBleHBlY3RzIGEgZnVuY3Rpb24gYXMgaXRzIHNlY29uZCBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIHRoaXMuc2luZ2xlKCdzZXRTdGF0ZScsICgpID0+IHtcbiAgICAgIHdpdGhTZXRTdGF0ZUFsbG93ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcblxuICAgICAgICBjb25zdCBsaWZlY3ljbGVzID0gZ2V0QWRhcHRlckxpZmVjeWNsZXMoYWRhcHRlcik7XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXNbUkVOREVSRVJdLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgeyBpbnN0YW5jZSB9ID0gbm9kZTtcbiAgICAgICAgY29uc3QgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICAgIGNvbnN0IHByZXZTdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuICAgICAgICBjb25zdCBwcmV2Q29udGV4dCA9IGluc3RhbmNlLmNvbnRleHQ7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVQYXlsb2FkID0gdHlwZW9mIHN0YXRlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBzdGF0ZS5jYWxsKGluc3RhbmNlLCBwcmV2U3RhdGUsIHByZXZQcm9wcylcbiAgICAgICAgICA6IHN0YXRlO1xuXG4gICAgICAgIC8vIHJldHVybmluZyBudWxsIG9yIHVuZGVmaW5lZCBwcmV2ZW50cyB0aGUgdXBkYXRlIGluIFJlYWN0IDE2K1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8xMjc1NlxuICAgICAgICBjb25zdCBtYXliZUhhc1VwZGF0ZSA9ICFsaWZlY3ljbGVzLnNldFN0YXRlLnNraXBzQ29tcG9uZW50RGlkVXBkYXRlT25OdWxsaXNoXG4gICAgICAgICAgfHwgc3RhdGVQYXlsb2FkICE9IG51bGw7XG5cbiAgICAgICAgLy8gV2hlbiBzaG91bGRDb21wb25lbnRVcGRhdGUgcmV0dXJucyBmYWxzZSB3ZSBzaG91bGRuJ3QgY2FsbCBjb21wb25lbnREaWRVcGRhdGUuXG4gICAgICAgIC8vIHNvIHdlIHNweSBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gZ2V0IHRoZSByZXN1bHQuXG4gICAgICAgIGxldCBzaG91bGRDb21wb25lbnRVcGRhdGVTcHk7XG4gICAgICAgIGxldCBnZXRDaGlsZENvbnRleHRTcHk7XG4gICAgICAgIGxldCBzaG91bGRSZW5kZXIgPSB0cnVlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXNbT1BUSU9OU10uZGlzYWJsZUxpZmVjeWNsZU1ldGhvZHNcbiAgICAgICAgICAmJiBpbnN0YW5jZVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsaWZlY3ljbGVzLmNvbXBvbmVudERpZFVwZGF0ZVxuICAgICAgICAgICAgJiYgbGlmZWN5Y2xlcy5jb21wb25lbnREaWRVcGRhdGUub25TZXRTdGF0ZVxuICAgICAgICAgICAgJiYgdHlwZW9mIGluc3RhbmNlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgeyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IGdEU0ZQIH0gPSBsaWZlY3ljbGVzO1xuICAgICAgICAgICAgaWYgKGdEU0ZQICYmIGdEU0ZQLmhhc1Nob3VsZENvbXBvbmVudFVwZGF0ZUJ1Zykge1xuICAgICAgICAgICAgICBtb2NrU0NVSWZnRFNGUFJldHVybk5vbk51bGwobm9kZSwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlU3B5ID0gc3B5TWV0aG9kKGluc3RhbmNlLCAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGxpZmVjeWNsZXMuZ2V0Q2hpbGRDb250ZXh0LmNhbGxlZEJ5UmVuZGVyZXJcbiAgICAgICAgICAgICYmIHR5cGVvZiBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGdldENoaWxkQ29udGV4dFNweSA9IHNweU1ldGhvZChpbnN0YW5jZSwgJ2dldENoaWxkQ29udGV4dCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNob3VsZENvbXBvbmVudFVwZGF0ZVNweSAmJiBpc1B1cmVDb21wb25lbnQoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgc2hvdWxkUmVuZGVyID0gcHVyZUNvbXBvbmVudFNob3VsZENvbXBvbmVudFVwZGF0ZShcbiAgICAgICAgICAgIHByZXZQcm9wcyxcbiAgICAgICAgICAgIGluc3RhbmNlLnByb3BzLFxuICAgICAgICAgICAgcHJldlN0YXRlLFxuICAgICAgICAgICAgeyAuLi5wcmV2U3RhdGUsIC4uLnN0YXRlUGF5bG9hZCB9LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBkb24ndCBwYXNzIHRoZSBzZXRTdGF0ZSBjYWxsYmFjayBoZXJlXG4gICAgICAgIC8vIHRvIGd1YXJhbnRlZSB0byBjYWxsIHRoZSBjYWxsYmFjayBhZnRlciBmaW5pc2hpbmcgdGhlIHJlbmRlclxuICAgICAgICBpZiAoaW5zdGFuY2VbU0VUX1NUQVRFXSkge1xuICAgICAgICAgIGluc3RhbmNlW1NFVF9TVEFURV0oc3RhdGVQYXlsb2FkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnN0YW5jZS5zZXRTdGF0ZShzdGF0ZVBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRDb21wb25lbnRVcGRhdGVTcHkpIHtcbiAgICAgICAgICBzaG91bGRSZW5kZXIgPSBzaG91bGRDb21wb25lbnRVcGRhdGVTcHkuZ2V0TGFzdFJldHVyblZhbHVlKCk7XG4gICAgICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlU3B5LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbWF5YmVIYXNVcGRhdGVcbiAgICAgICAgICAmJiBzaG91bGRSZW5kZXJcbiAgICAgICAgICAmJiAhdGhpc1tPUFRJT05TXS5kaXNhYmxlTGlmZWN5Y2xlTWV0aG9kc1xuICAgICAgICApIHtcbiAgICAgICAgICBwcml2YXRlU2V0Q2hpbGRDb250ZXh0KGFkYXB0ZXIsIHRoaXMsIGluc3RhbmNlLCBub2RlLCBnZXRDaGlsZENvbnRleHRTcHkpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGxpZmVjeWNsZXMuY29tcG9uZW50RGlkVXBkYXRlXG4gICAgICAgICAgICAmJiBsaWZlY3ljbGVzLmNvbXBvbmVudERpZFVwZGF0ZS5vblNldFN0YXRlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGxpZmVjeWNsZXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGVcbiAgICAgICAgICAgICAgJiYgdHlwZW9mIGluc3RhbmNlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBpbnN0YW5jZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGluc3RhbmNlLmNvbXBvbmVudERpZFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBpZiAobGlmZWN5Y2xlcy5jb21wb25lbnREaWRVcGRhdGUucHJldkNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHByZXZDb250ZXh0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIC8vIGNhbGwgdGhlIHNldFN0YXRlIGNhbGxiYWNrXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGlmIChhZGFwdGVyLmludm9rZVNldFN0YXRlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIGFkYXB0ZXIuaW52b2tlU2V0U3RhdGVDYWxsYmFjayhpbnN0YW5jZSwgY2FsbGJhY2spO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGluc3RhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRoYXQgc2V0cyB0aGUgY29udGV4dCBvZiB0aGUgcm9vdCBjb21wb25lbnQsIGFuZCByZS1yZW5kZXJzLiBVc2VmdWwgZm9yIHdoZW4geW91IGFyZVxuICAgKiB3YW50aW5nIHRvIHRlc3QgaG93IHRoZSBjb21wb25lbnQgYmVoYXZlcyBvdmVyIHRpbWUgd2l0aCBjaGFuZ2luZyBjb250ZXh0cy5cbiAgICpcbiAgICogTk9URTogY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgd3JhcHBlciBpbnN0YW5jZSB0aGF0IGlzIGFsc28gdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IG9iamVjdFxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBzZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBpZiAodGhpc1tST09UXSAhPT0gdGhpcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGFsbG93V3JhcHBlcjo6c2V0Q29udGV4dCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGUgcm9vdCcpO1xuICAgIH1cbiAgICBpZiAoIXRoaXNbT1BUSU9OU10uY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGFsbG93V3JhcHBlcjo6c2V0Q29udGV4dCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgdGhhdCB3YXMgb3JpZ2luYWxseSBwYXNzZWQgYSBjb250ZXh0IG9wdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXJlbmRlcihudWxsLCBjb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBhIGdpdmVuIHJlYWN0IGVsZW1lbnQgZXhpc3RzIGluIHRoZSBzaGFsbG93IHJlbmRlciB0cmVlLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogY29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPE15Q29tcG9uZW50IC8+KTtcbiAgICogZXhwZWN0KHdyYXBwZXIuY29udGFpbnMoPGRpdiBjbGFzc05hbWU9XCJmb28gYmFyXCIgLz4pKS50by5lcXVhbCh0cnVlKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fEFycmF5PFJlYWN0RWxlbWVudD59IG5vZGVPck5vZGVzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgY29udGFpbnMobm9kZU9yTm9kZXMpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICBpZiAoIWlzUmVhY3RFbGVtZW50QWxpa2Uobm9kZU9yTm9kZXMsIGFkYXB0ZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYWxsb3dXcmFwcGVyOjpjb250YWlucygpIGNhbiBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgUmVhY3RFbGVtZW50IChvciBhbiBhcnJheSBvZiB0aGVtKSwgYSBzdHJpbmcsIG9yIGEgbnVtYmVyIGFzIGFuIGFyZ3VtZW50LicpO1xuICAgIH1cbiAgICBjb25zdCBwcmVkaWNhdGUgPSBBcnJheS5pc0FycmF5KG5vZGVPck5vZGVzKVxuICAgICAgPyAob3RoZXIpID0+IGNvbnRhaW5zQ2hpbGRyZW5TdWJBcnJheShcbiAgICAgICAgbm9kZUVxdWFsLFxuICAgICAgICBvdGhlcixcbiAgICAgICAgbm9kZU9yTm9kZXMubWFwKChub2RlKSA9PiBhZGFwdGVyLmVsZW1lbnRUb05vZGUobm9kZSkpLFxuICAgICAgKVxuICAgICAgOiAob3RoZXIpID0+IG5vZGVFcXVhbChhZGFwdGVyLmVsZW1lbnRUb05vZGUobm9kZU9yTm9kZXMpLCBvdGhlcik7XG5cbiAgICByZXR1cm4gZmluZFdoZXJlVW53cmFwcGVkKHRoaXMsIHByZWRpY2F0ZSkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBhIGdpdmVuIHJlYWN0IGVsZW1lbnQgZXhpc3RzIGluIHRoZSBzaGFsbG93IHJlbmRlciB0cmVlLlxuICAgKiBNYXRjaCBpcyBiYXNlZCBvbiB0aGUgZXhwZWN0ZWQgZWxlbWVudCBhbmQgbm90IG9uIHdyYXBwZXJzIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgZGV0ZXJtaW5lIGlmIG9uZSBvZiB0aGUgd3JhcHBlcnMgZWxlbWVudCBcImxvb2tzIGxpa2VcIiB0aGUgZXhwZWN0ZWRcbiAgICogZWxlbWVudCBieSBjaGVja2luZyBpZiBhbGwgcHJvcHMgb2YgdGhlIGV4cGVjdGVkIGVsZW1lbnQgYXJlIHByZXNlbnRcbiAgICogb24gdGhlIHdyYXBwZXJzIGVsZW1lbnQgYW5kIGVxdWFscyB0byBlYWNoIG90aGVyLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogLy8gTXlDb21wb25lbnQgb3V0cHV0cyA8ZGl2PjxkaXYgY2xhc3M9XCJmb29cIj5IZWxsbzwvZGl2PjwvZGl2PlxuICAgKiBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8TXlDb21wb25lbnQgLz4pO1xuICAgKiBleHBlY3Qod3JhcHBlci5jb250YWluc01hdGNoaW5nRWxlbWVudCg8ZGl2PkhlbGxvPC9kaXY+KSkudG8uZXF1YWwodHJ1ZSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGNvbnRhaW5zTWF0Y2hpbmdFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICBjb25zdCByc3ROb2RlID0gYWRhcHRlci5lbGVtZW50VG9Ob2RlKG5vZGUpO1xuICAgIGNvbnN0IHByZWRpY2F0ZSA9IChvdGhlcikgPT4gbm9kZU1hdGNoZXMocnN0Tm9kZSwgb3RoZXIsIChhLCBiKSA9PiBhIDw9IGIpO1xuICAgIHJldHVybiBmaW5kV2hlcmVVbndyYXBwZWQodGhpcywgcHJlZGljYXRlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IGFsbCB0aGUgZ2l2ZW4gcmVhY3QgZWxlbWVudHMgZXhpc3QgaW4gdGhlIHNoYWxsb3cgcmVuZGVyIHRyZWUuXG4gICAqIE1hdGNoIGlzIGJhc2VkIG9uIHRoZSBleHBlY3RlZCBlbGVtZW50IGFuZCBub3Qgb24gd3JhcHBlcnMgZWxlbWVudC5cbiAgICogSXQgd2lsbCBkZXRlcm1pbmUgaWYgb25lIG9mIHRoZSB3cmFwcGVycyBlbGVtZW50IFwibG9va3MgbGlrZVwiIHRoZSBleHBlY3RlZFxuICAgKiBlbGVtZW50IGJ5IGNoZWNraW5nIGlmIGFsbCBwcm9wcyBvZiB0aGUgZXhwZWN0ZWQgZWxlbWVudCBhcmUgcHJlc2VudFxuICAgKiBvbiB0aGUgd3JhcHBlcnMgZWxlbWVudCBhbmQgZXF1YWxzIHRvIGVhY2ggb3RoZXIuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8TXlDb21wb25lbnQgLz4pO1xuICAgKiBleHBlY3Qod3JhcHBlci5jb250YWluc0FsbE1hdGNoaW5nRWxlbWVudHMoW1xuICAgKiAgIDxkaXY+SGVsbG88L2Rpdj4sXG4gICAqICAgPGRpdj5Hb29kYnllPC9kaXY+LFxuICAgKiBdKSkudG8uZXF1YWwodHJ1ZSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PFJlYWN0RWxlbWVudD59IG5vZGVzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgY29udGFpbnNBbGxNYXRjaGluZ0VsZW1lbnRzKG5vZGVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm9kZXMgc2hvdWxkIGJlIGFuIEFycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzLmV2ZXJ5KChub2RlKSA9PiB0aGlzLmNvbnRhaW5zTWF0Y2hpbmdFbGVtZW50KG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBvbmUgb2YgdGhlIGdpdmVuIHJlYWN0IGVsZW1lbnRzIGV4aXN0cyBpbiB0aGUgc2hhbGxvdyByZW5kZXIgdHJlZS5cbiAgICogTWF0Y2ggaXMgYmFzZWQgb24gdGhlIGV4cGVjdGVkIGVsZW1lbnQgYW5kIG5vdCBvbiB3cmFwcGVycyBlbGVtZW50LlxuICAgKiBJdCB3aWxsIGRldGVybWluZSBpZiBvbmUgb2YgdGhlIHdyYXBwZXJzIGVsZW1lbnQgXCJsb29rcyBsaWtlXCIgdGhlIGV4cGVjdGVkXG4gICAqIGVsZW1lbnQgYnkgY2hlY2tpbmcgaWYgYWxsIHByb3BzIG9mIHRoZSBleHBlY3RlZCBlbGVtZW50IGFyZSBwcmVzZW50XG4gICAqIG9uIHRoZSB3cmFwcGVycyBlbGVtZW50IGFuZCBlcXVhbHMgdG8gZWFjaCBvdGhlci5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxNeUNvbXBvbmVudCAvPik7XG4gICAqIGV4cGVjdCh3cmFwcGVyLmNvbnRhaW5zQW55TWF0Y2hpbmdFbGVtZW50cyhbXG4gICAqICAgPGRpdj5IZWxsbzwvZGl2PixcbiAgICogICA8ZGl2Pkdvb2RieWU8L2Rpdj4sXG4gICAqIF0pKS50by5lcXVhbCh0cnVlKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8UmVhY3RFbGVtZW50Pn0gbm9kZXNcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBjb250YWluc0FueU1hdGNoaW5nRWxlbWVudHMobm9kZXMpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShub2RlcykgJiYgbm9kZXMuc29tZSgobm9kZSkgPT4gdGhpcy5jb250YWluc01hdGNoaW5nRWxlbWVudChub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgYSBnaXZlbiByZWFjdCBlbGVtZW50IGV4aXN0cyBpbiB0aGUgcmVuZGVyIHRyZWUuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiBjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8TXlDb21wb25lbnQgLz4pO1xuICAgKiBleHBlY3Qod3JhcHBlci5jb250YWlucyg8ZGl2IGNsYXNzTmFtZT1cImZvbyBiYXJcIiAvPikpLnRvLmVxdWFsKHRydWUpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMobm9kZSkge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnZXF1YWxzJywgKCkgPT4gbm9kZUVxdWFsKHRoaXMuZ2V0Tm9kZUludGVybmFsKCksIG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBhIGdpdmVuIHJlYWN0IGVsZW1lbnQgbWF0Y2hlcyB0aGUgcmVuZGVyIHRyZWUuXG4gICAqIE1hdGNoIGlzIGJhc2VkIG9uIHRoZSBleHBlY3RlZCBlbGVtZW50IGFuZCBub3Qgb24gd3JhcHBlciByb290IG5vZGUuXG4gICAqIEl0IHdpbGwgZGV0ZXJtaW5lIGlmIHRoZSB3cmFwcGVyIHJvb3Qgbm9kZSBcImxvb2tzIGxpa2VcIiB0aGUgZXhwZWN0ZWRcbiAgICogZWxlbWVudCBieSBjaGVja2luZyBpZiBhbGwgcHJvcHMgb2YgdGhlIGV4cGVjdGVkIGVsZW1lbnQgYXJlIHByZXNlbnRcbiAgICogb24gdGhlIHdyYXBwZXIgcm9vdCBub2RlIGFuZCBlcXVhbHMgdG8gZWFjaCBvdGhlci5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqIC8vIE15Q29tcG9uZW50IG91dHB1dHMgPGRpdiBjbGFzcz1cImZvb1wiPkhlbGxvPC9kaXY+XG4gICAqIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxNeUNvbXBvbmVudCAvPik7XG4gICAqIGV4cGVjdCh3cmFwcGVyLm1hdGNoZXNFbGVtZW50KDxkaXY+SGVsbG88L2Rpdj4pKS50by5lcXVhbCh0cnVlKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgbWF0Y2hlc0VsZW1lbnQobm9kZSkge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnbWF0Y2hlc0VsZW1lbnQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICAgIGNvbnN0IHJzdE5vZGUgPSBhZGFwdGVyLmVsZW1lbnRUb05vZGUobm9kZSk7XG4gICAgICByZXR1cm4gbm9kZU1hdGNoZXMocnN0Tm9kZSwgdGhpcy5nZXROb2RlSW50ZXJuYWwoKSwgKGEsIGIpID0+IGEgPD0gYik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgZXZlcnkgbm9kZSBpbiB0aGUgcmVuZGVyIHRyZWUgb2YgdGhlIGN1cnJlbnQgd3JhcHBlciB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIHNlbGVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge0VuenltZVNlbGVjdG9yfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBmaW5kKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMud3JhcChyZWR1Y2VUcmVlc0J5U2VsZWN0b3Ioc2VsZWN0b3IsIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBjdXJyZW50IG5vZGUgbWF0Y2hlcyBhIHByb3ZpZGVkIHNlbGVjdG9yLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RW56eW1lU2VsZWN0b3J9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXMoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSBidWlsZFByZWRpY2F0ZShzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdpcycsIChuKSA9PiBwcmVkaWNhdGUobikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29tcG9uZW50IHJlbmRlcmVkIG5vdGhpbmcsIGkuZS4sIG51bGwgb3IgZmFsc2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNFbXB0eVJlbmRlcigpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpO1xuXG4gICAgcmV0dXJuIG5vZGVzLmV2ZXJ5KChuKSA9PiBpc0VtcHR5VmFsdWUobikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgd3JhcHBlciBpbnN0YW5jZSB3aXRoIG9ubHkgdGhlIG5vZGVzIG9mIHRoZSBjdXJyZW50IHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBtYXRjaFxuICAgKiB0aGUgcHJvdmlkZWQgcHJlZGljYXRlIGZ1bmN0aW9uLiBUaGUgcHJlZGljYXRlIHNob3VsZCByZWNlaXZlIGEgd3JhcHBlZCBub2RlIGFzIGl0cyBmaXJzdFxuICAgKiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlXG4gICAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIGZpbHRlcldoZXJlKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmaWx0ZXJXaGVyZVVud3JhcHBlZCh0aGlzLCAobikgPT4gcHJlZGljYXRlKHRoaXMud3JhcChuKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgd3JhcHBlciBpbnN0YW5jZSB3aXRoIG9ubHkgdGhlIG5vZGVzIG9mIHRoZSBjdXJyZW50IHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBtYXRjaFxuICAgKiB0aGUgcHJvdmlkZWQgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RW56eW1lU2VsZWN0b3J9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIGZpbHRlcihzZWxlY3Rvcikge1xuICAgIGNvbnN0IHByZWRpY2F0ZSA9IGJ1aWxkUHJlZGljYXRlKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZmlsdGVyV2hlcmVVbndyYXBwZWQodGhpcywgcHJlZGljYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmV3IHdyYXBwZXIgaW5zdGFuY2Ugd2l0aCBvbmx5IHRoZSBub2RlcyBvZiB0aGUgY3VycmVudCB3cmFwcGVyIHRoYXQgZGlkIG5vdCBtYXRjaFxuICAgKiB0aGUgcHJvdmlkZWQgc2VsZWN0b3IuIEVzc2VudGlhbGx5IHRoZSBpbnZlcnNlIG9mIGBmaWx0ZXJgLlxuICAgKlxuICAgKiBAcGFyYW0ge0VuenltZVNlbGVjdG9yfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBub3Qoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSBidWlsZFByZWRpY2F0ZShzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGZpbHRlcldoZXJlVW53cmFwcGVkKHRoaXMsIChuKSA9PiAhcHJlZGljYXRlKG4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIHRoZSByZW5kZXJlZCB0ZXh0IG9mIHRoZSBjdXJyZW50IHJlbmRlciB0cmVlLiAgVGhpcyBmdW5jdGlvbiBzaG91bGQgYmVcbiAgICogbG9va2VkIGF0IHdpdGggc2tlcHRpY2lzbSBpZiBiZWluZyB1c2VkIHRvIHRlc3Qgd2hhdCB0aGUgYWN0dWFsIEhUTUwgb3V0cHV0IG9mIHRoZSBjb21wb25lbnRcbiAgICogd2lsbCBiZS4gSWYgdGhhdCBpcyB3aGF0IHlvdSB3b3VsZCBsaWtlIHRvIHRlc3QsIHVzZSBlbnp5bWUncyBgcmVuZGVyYCBmdW5jdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgndGV4dCcsIGdldFRleHRGcm9tTm9kZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSFRNTCBvZiB0aGUgbm9kZS5cbiAgICpcbiAgICogTk9URTogY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgd3JhcHBlciBvZiBhIHNpbmdsZSBub2RlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgaHRtbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ2h0bWwnLCAobikgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSgpID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IGFkYXB0ZXIgPSBnZXRBZGFwdGVyKHRoaXNbT1BUSU9OU10pO1xuICAgICAgY29uc3QgcmVuZGVyZXIgPSBhZGFwdGVyLmNyZWF0ZVJlbmRlcmVyKHsgLi4udGhpc1tPUFRJT05TXSwgbW9kZTogJ3N0cmluZycgfSk7XG4gICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKGFkYXB0ZXIubm9kZVRvRWxlbWVudChuKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBub2RlIHJlbmRlcmVkIHRvIEhUTUwgYW5kIHdyYXBwZWQgaW4gYSBDaGVlcmlvV3JhcHBlci5cbiAgICpcbiAgICogTk9URTogY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgd3JhcHBlciBvZiBhIHNpbmdsZSBub2RlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7Q2hlZXJpb1dyYXBwZXJ9XG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpO1xuICAgIHJldHVybiBsb2FkQ2hlZXJpb1Jvb3QoaHRtbCk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBzaW11bGF0ZSBldmVudHMuIFBhc3MgYW4gZXZlbnRuYW1lIGFuZCAob3B0aW9uYWxseSkgZXZlbnQgYXJndW1lbnRzLiBUaGlzIG1ldGhvZCBvZlxuICAgKiB0ZXN0aW5nIGV2ZW50cyBzaG91bGQgYmUgbWV0IHdpdGggc29tZSBza2VwdGljaXNtLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBzaW11bGF0ZShldmVudCwgLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnc2ltdWxhdGUnLCAobikgPT4ge1xuICAgICAgdGhpc1tSRU5ERVJFUl0uc2ltdWxhdGVFdmVudChuLCBldmVudCwgLi4uYXJncyk7XG4gICAgICB0aGlzW1JPT1RdLnVwZGF0ZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBzaW11bGF0ZSB0aHJvd2luZyBhIHJlbmRlcmluZyBlcnJvci4gUGFzcyBhbiBlcnJvciB0byB0aHJvdy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVycm9yXG4gICAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIHNpbXVsYXRlRXJyb3IoZXJyb3IpIHtcbiAgICAvLyBpbiBzaGFsbG93LCB0aGUgXCJyb290XCIgaXMgdGhlIFwicmVuZGVyZWRcIiB0aGluZy5cblxuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnc2ltdWxhdGVFcnJvcicsICh0aGlzTm9kZSkgPT4ge1xuICAgICAgaWYgKHRoaXNOb2RlLm5vZGVUeXBlID09PSAnaG9zdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2hhbGxvd1dyYXBwZXI6OnNpbXVsYXRlRXJyb3IoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gY3VzdG9tIGNvbXBvbmVudHMnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzW1JFTkRFUkVSXTtcbiAgICAgIGlmICh0eXBlb2YgcmVuZGVyZXIuc2ltdWxhdGVFcnJvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd5b3VyIGFkYXB0ZXIgZG9lcyBub3Qgc3VwcG9ydCBgc2ltdWxhdGVFcnJvcmAuIFRyeSB1cGdyYWRpbmcgaXQhJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvb3ROb2RlID0gZ2V0Um9vdE5vZGVJbnRlcm5hbCh0aGlzKTtcbiAgICAgIGNvbnN0IG5vZGVIaWVyYXJjaHkgPSBbdGhpc05vZGVdLmNvbmNhdChub2RlUGFyZW50cyh0aGlzLCB0aGlzTm9kZSkpO1xuICAgICAgcmVuZGVyZXIuc2ltdWxhdGVFcnJvcihub2RlSGllcmFyY2h5LCByb290Tm9kZSwgZXJyb3IpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwcm9wcyBoYXNoIGZvciB0aGUgY3VycmVudCBub2RlIG9mIHRoZSB3cmFwcGVyLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBwcm9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ3Byb3BzJywgcHJvcHNPZk5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXRlIGhhc2ggZm9yIHRoZSByb290IG5vZGUgb2YgdGhlIHdyYXBwZXIuIE9wdGlvbmFsbHkgcGFzcyBpbiBhIHByb3AgbmFtZSBhbmQgaXRcbiAgICogd2lsbCByZXR1cm4ganVzdCB0aGF0IHZhbHVlLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIChvcHRpb25hbClcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBzdGF0ZShuYW1lKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OnN0YXRlKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmluc3RhbmNlKCkgPT09IG51bGwgfHwgdGhpc1tSRU5ERVJFUl0uZ2V0Tm9kZSgpLm5vZGVUeXBlICE9PSAnY2xhc3MnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYWxsb3dXcmFwcGVyOjpzdGF0ZSgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBjbGFzcyBjb21wb25lbnRzJyk7XG4gICAgfVxuICAgIGNvbnN0IF9zdGF0ZSA9IHRoaXMuc2luZ2xlKCdzdGF0ZScsICgpID0+IHRoaXMuaW5zdGFuY2UoKS5zdGF0ZSk7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKF9zdGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFNoYWxsb3dXcmFwcGVyOjpzdGF0ZShcIiR7bmFtZX1cIikgcmVxdWlyZXMgdGhhdCBcXGBzdGF0ZVxcYCBub3QgYmUgXFxgbnVsbFxcYCBvciBcXGB1bmRlZmluZWRcXGBgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfc3RhdGVbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBfc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29udGV4dCBoYXNoIGZvciB0aGUgcm9vdCBub2RlIG9mIHRoZSB3cmFwcGVyLlxuICAgKiBPcHRpb25hbGx5IHBhc3MgaW4gYSBwcm9wIG5hbWUgYW5kIGl0IHdpbGwgcmV0dXJuIGp1c3QgdGhhdCB2YWx1ZS5cbiAgICpcbiAgICogTk9URTogY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgd3JhcHBlciBvZiBhIHNpbmdsZSBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAob3B0aW9uYWwpXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgY29udGV4dChuYW1lKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OmNvbnRleHQoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhlIHJvb3QnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzW09QVElPTlNdLmNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OmNvbnRleHQoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIHRoYXQgd2FzIG9yaWdpbmFsbHkgcGFzc2VkIGEgY29udGV4dCBvcHRpb24nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UoKSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGFsbG93V3JhcHBlcjo6Y29udGV4dCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB3cmFwcGVkIG5vZGVzIHRoYXQgaGF2ZSBhIG5vbi1udWxsIGluc3RhbmNlJyk7XG4gICAgfVxuICAgIGNvbnN0IF9jb250ZXh0ID0gdGhpcy5zaW5nbGUoJ2NvbnRleHQnLCAoKSA9PiB0aGlzLmluc3RhbmNlKCkuY29udGV4dCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiBfY29udGV4dFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIF9jb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgd3JhcHBlciB3aXRoIGFsbCBvZiB0aGUgY2hpbGRyZW4gb2YgdGhlIGN1cnJlbnQgd3JhcHBlci5cbiAgICpcbiAgICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gW3NlbGVjdG9yXVxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3Rvcikge1xuICAgIGNvbnN0IGFsbENoaWxkcmVuID0gdGhpcy5mbGF0TWFwKChuKSA9PiBjaGlsZHJlbk9mTm9kZShuLmdldE5vZGVJbnRlcm5hbCgpKSk7XG4gICAgcmV0dXJuIHNlbGVjdG9yID8gYWxsQ2hpbGRyZW4uZmlsdGVyKHNlbGVjdG9yKSA6IGFsbENoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgd3JhcHBlciB3aXRoIGEgc3BlY2lmaWMgY2hpbGRcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF1cbiAgICogQHJldHVybnMge1NoYWxsb3dXcmFwcGVyfVxuICAgKi9cbiAgY2hpbGRBdChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnY2hpbGRBdCcsICgpID0+IHRoaXMuY2hpbGRyZW4oKS5hdChpbmRleCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB3cmFwcGVyIGFyb3VuZCBhbGwgb2YgdGhlIHBhcmVudHMvYW5jZXN0b3JzIG9mIHRoZSB3cmFwcGVyLiBEb2VzIG5vdCBpbmNsdWRlIHRoZSBub2RlXG4gICAqIGluIHRoZSBjdXJyZW50IHdyYXBwZXIuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gW3NlbGVjdG9yXVxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdwYXJlbnRzJywgKG4pID0+IHtcbiAgICAgIGNvbnN0IGFsbFBhcmVudHMgPSB0aGlzLndyYXAobm9kZVBhcmVudHModGhpcywgbikpO1xuICAgICAgcmV0dXJuIHNlbGVjdG9yID8gYWxsUGFyZW50cy5maWx0ZXIoc2VsZWN0b3IpIDogYWxsUGFyZW50cztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgd3JhcHBlciBhcm91bmQgdGhlIGltbWVkaWF0ZSBwYXJlbnQgb2YgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICpcbiAgICogQHJldHVybnMge1NoYWxsb3dXcmFwcGVyfVxuICAgKi9cbiAgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZsYXRNYXAoKG4pID0+IFtuLnBhcmVudHMoKS5nZXQoMCldKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0VuenltZVNlbGVjdG9yfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBjbG9zZXN0KHNlbGVjdG9yKSB7XG4gICAgaWYgKHRoaXMuaXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hpbmdBbmNlc3RvcnMgPSB0aGlzLnBhcmVudHMoKS5maWx0ZXIoc2VsZWN0b3IpO1xuICAgIHJldHVybiBtYXRjaGluZ0FuY2VzdG9ycy5sZW5ndGggPiAwID8gbWF0Y2hpbmdBbmNlc3RvcnMuZmlyc3QoKSA6IHRoaXMuZmluZFdoZXJlKCgpID0+IGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFsbG93IHJlbmRlcnMgdGhlIGN1cnJlbnQgbm9kZSBhbmQgcmV0dXJucyBhIHNoYWxsb3cgd3JhcHBlciBhcm91bmQgaXQuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB3cmFwcGVyIG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIHNoYWxsb3cob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdzaGFsbG93JywgKG4pID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkT3B0aW9ucyA9IG1ha2VJbmhlcml0ZWRDaGlsZE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy53cmFwKGdldEFkYXB0ZXIodGhpc1tPUFRJT05TXSkubm9kZVRvRWxlbWVudChuKSwgbnVsbCwgY2hpbGRPcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBwcm9wIHdpdGggdGhlIGdpdmVuIG5hbWUgb2YgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcHJvcChwcm9wTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzKClbcHJvcE5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gaW52b2tlIGEgZnVuY3Rpb24gcHJvcC5cbiAgICogV2lsbCBpbnZva2UgYW4gZnVuY3Rpb24gcHJvcCBhbmQgcmV0dXJuIGl0cyB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gICAqIEByZXR1cm5zIHtBbnl9XG4gICAqL1xuICBpbnZva2UocHJvcE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ2ludm9rZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnByb3AocHJvcE5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NoYWxsb3dXcmFwcGVyOjppbnZva2UoKSByZXF1aXJlcyB0aGUgbmFtZSBvZiBhIHByb3Agd2hvc2UgdmFsdWUgaXMgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gaGFuZGxlciguLi5hcmdzKTtcbiAgICAgICAgdGhpc1tST09UXS51cGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgd3JhcHBlciBvZiB0aGUgbm9kZSByZW5kZXJlZCBieSB0aGUgcHJvdmlkZWQgcmVuZGVyIHByb3AuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZVxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICByZW5kZXJQcm9wKHByb3BOYW1lKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IGdldEFkYXB0ZXIodGhpc1tPUFRJT05TXSk7XG4gICAgaWYgKHR5cGVvZiBhZGFwdGVyLndyYXAgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd5b3VyIGFkYXB0ZXIgZG9lcyBub3Qgc3VwcG9ydCBgd3JhcGAuIFRyeSB1cGdyYWRpbmcgaXQhJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdyZW5kZXJQcm9wJywgKG4pID0+IHtcbiAgICAgIGlmIChuLm5vZGVUeXBlID09PSAnaG9zdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2hhbGxvd1dyYXBwZXI6OnJlbmRlclByb3AoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gY3VzdG9tIGNvbXBvbmVudHMnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcHJvcE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NoYWxsb3dXcmFwcGVyOjpyZW5kZXJQcm9wKCk6IGBwcm9wTmFtZWAgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgICBpZiAoIWhhcyhwcm9wcywgcHJvcE5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU2hhbGxvd1dyYXBwZXI6OnJlbmRlclByb3AoKTogbm8gcHJvcCBjYWxsZWQg4oCcJHtwcm9wTmFtZX3igJwgZm91bmRgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFNoYWxsb3dXcmFwcGVyOjpyZW5kZXJQcm9wKCk6IGV4cGVjdGVkIHByb3Ag4oCcJHtwcm9wTmFtZX3igJwgdG8gY29udGFpbiBhIGZ1bmN0aW9uLCBidXQgaXQgaG9sZHMg4oCcJHt0eXBlb2YgcHJvcFZhbHVlfeKAnGApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHByb3BWYWx1ZSguLi5hcmdzKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlZCA9IGFkYXB0ZXIud3JhcChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcCh3cmFwcGVkLCBudWxsLCB0aGlzW09QVElPTlNdKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUga2V5IGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50IG5vZGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdrZXknLCAobikgPT4gKG4ua2V5ID09PSB1bmRlZmluZWQgPyBudWxsIDogbi5rZXkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBjdXJyZW50IG5vZGUgb2YgdGhpcyB3cmFwcGVyLiBJZiBpdCdzIGEgY29tcG9zaXRlIGNvbXBvbmVudCwgdGhpcyB3aWxsXG4gICAqIGJlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IuIElmIGl0J3MgYSBuYXRpdmUgRE9NIG5vZGUsIGl0IHdpbGwgYmUgYSBzdHJpbmcgb2YgdGhlIHRhZyBuYW1lLlxuICAgKiBJZiBpdCdzIG51bGwsIGl0IHdpbGwgYmUgbnVsbC5cbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ3xGdW5jdGlvbnxudWxsfVxuICAgKi9cbiAgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ3R5cGUnLCAobikgPT4gdHlwZU9mTm9kZShuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBub2RlIG9mIHRoaXMgd3JhcHBlci5cbiAgICpcbiAgICogSW4gb3JkZXIgb2YgcHJlY2VkZW5jZSA9PiB0eXBlLmRpc3BsYXlOYW1lIC0+IHR5cGUubmFtZSAtPiB0eXBlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgbmFtZSgpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ25hbWUnLCAobikgPT4gKFxuICAgICAgYWRhcHRlci5kaXNwbGF5TmFtZU9mTm9kZSA/IGFkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUobikgOiBkaXNwbGF5TmFtZU9mTm9kZShuKVxuICAgICkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGN1cnJlbnQgbm9kZSBoYXMgdGhlIGdpdmVuIGNsYXNzIG5hbWUgb3Igbm90LlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycgJiYgY2xhc3NOYW1lLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oJ0l0IGxvb2tzIGxpa2UgeW91XFwncmUgY2FsbGluZyBgU2hhbGxvd1dyYXBwZXI6Omhhc0NsYXNzKClgIHdpdGggYSBDU1Mgc2VsZWN0b3IuIGhhc0NsYXNzKCkgZXhwZWN0cyBhIGNsYXNzIG5hbWUsIG5vdCBhIENTUyBzZWxlY3Rvci4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdoYXNDbGFzcycsIChuKSA9PiBoYXNDbGFzc05hbWUobiwgY2xhc3NOYW1lKSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIG5vZGUgb2YgdGhlIGN1cnJlbnQgd3JhcHBlciBhbmQgZXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIHdpdGggYVxuICAgKiB3cmFwcGVyIGFyb3VuZCB0aGUgY29ycmVzcG9uZGluZyBub2RlIHBhc3NlZCBpbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIGZvckVhY2goZm4pIHtcbiAgICB0aGlzLmdldE5vZGVzSW50ZXJuYWwoKS5mb3JFYWNoKChuLCBpKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMud3JhcChuKSwgaSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHMgdGhlIGN1cnJlbnQgYXJyYXkgb2Ygbm9kZXMgdG8gYW5vdGhlciBhcnJheS4gRWFjaCBub2RlIGlzIHBhc3NlZCBpbiBhcyBhIGBTaGFsbG93V3JhcHBlcmBcbiAgICogdG8gdGhlIG1hcCBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgbWFwKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLm1hcCgobiwgaSkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLndyYXAobiksIGkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWR1Y2VzIHRoZSBjdXJyZW50IGFycmF5IG9mIG5vZGVzIHRvIGEgdmFsdWUuIEVhY2ggbm9kZSBpcyBwYXNzZWQgaW4gYXMgYSBgU2hhbGxvd1dyYXBwZXJgXG4gICAqIHRvIHRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIHRoZSByZWR1Y2VyIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7Kn0gaW5pdGlhbFZhbHVlIC0gdGhlIGluaXRpYWwgdmFsdWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZWR1Y2UoZm4sIGluaXRpYWxWYWx1ZSA9IHVuZGVmaW5lZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLnJlZHVjZShcbiAgICAgICAgKGFjY3VtLCBuLCBpKSA9PiBmbi5jYWxsKHRoaXMsIGFjY3VtLCB0aGlzLndyYXAobiksIGkpLFxuICAgICAgICBpbml0aWFsVmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXROb2Rlc0ludGVybmFsKCkucmVkdWNlKChhY2N1bSwgbiwgaSkgPT4gZm4uY2FsbChcbiAgICAgIHRoaXMsXG4gICAgICBpID09PSAxID8gdGhpcy53cmFwKGFjY3VtKSA6IGFjY3VtLFxuICAgICAgdGhpcy53cmFwKG4pLFxuICAgICAgaSxcbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWR1Y2VzIHRoZSBjdXJyZW50IGFycmF5IG9mIG5vZGVzIHRvIGFub3RoZXIgYXJyYXksIGZyb20gcmlnaHQgdG8gbGVmdC4gRWFjaCBub2RlIGlzIHBhc3NlZFxuICAgKiBpbiBhcyBhIGBTaGFsbG93V3JhcHBlcmAgdG8gdGhlIHJlZHVjZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdGhlIHJlZHVjZXIgZnVuY3Rpb25cbiAgICogQHBhcmFtIHsqfSBpbml0aWFsVmFsdWUgLSB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlZHVjZVJpZ2h0KGZuLCBpbml0aWFsVmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE5vZGVzSW50ZXJuYWwoKS5yZWR1Y2VSaWdodChcbiAgICAgICAgKGFjY3VtLCBuLCBpKSA9PiBmbi5jYWxsKHRoaXMsIGFjY3VtLCB0aGlzLndyYXAobiksIGkpLFxuICAgICAgICBpbml0aWFsVmFsdWUsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXROb2Rlc0ludGVybmFsKCkucmVkdWNlUmlnaHQoKGFjY3VtLCBuLCBpKSA9PiBmbi5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgIGkgPT09IDEgPyB0aGlzLndyYXAoYWNjdW0pIDogYWNjdW0sXG4gICAgICB0aGlzLndyYXAobiksXG4gICAgICBpLFxuICAgICkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgd3JhcHBlciB3aXRoIGEgc3Vic2V0IG9mIHRoZSBub2RlcyBvZiB0aGUgb3JpZ2luYWwgd3JhcHBlciwgYWNjb3JkaW5nIHRvIHRoZVxuICAgKiBydWxlcyBvZiBgQXJyYXkjc2xpY2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gYmVnaW5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGVuZFxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBzbGljZShiZWdpbiwgZW5kKSB7XG4gICAgcmV0dXJuIHRoaXMud3JhcCh0aGlzLmdldE5vZGVzSW50ZXJuYWwoKS5zbGljZShiZWdpbiwgZW5kKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBhbnkgb2YgdGhlIG5vZGVzIGluIHRoZSB3cmFwcGVyIG1hdGNoIHRoZSBwcm92aWRlZCBzZWxlY3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBzb21lKHNlbGVjdG9yKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gPT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hhbGxvd1dyYXBwZXI6OnNvbWUoKSBjYW4gbm90IGJlIGNhbGxlZCBvbiB0aGUgcm9vdCcpO1xuICAgIH1cbiAgICBjb25zdCBwcmVkaWNhdGUgPSBidWlsZFByZWRpY2F0ZShzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLnNvbWUocHJlZGljYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGFueSBvZiB0aGUgbm9kZXMgaW4gdGhlIHdyYXBwZXIgcGFzcyB0aGUgcHJvdmlkZWQgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBzb21lV2hlcmUocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLnNvbWUoKG4sIGkpID0+IHByZWRpY2F0ZS5jYWxsKHRoaXMsIHRoaXMud3JhcChuKSwgaSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZSBub2RlcyBpbiB0aGUgd3JhcHBlciBtYXRjaCB0aGUgcHJvdmlkZWQgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RW56eW1lU2VsZWN0b3J9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZXZlcnkoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSBidWlsZFByZWRpY2F0ZShzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLmV2ZXJ5KHByZWRpY2F0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBhbnkgb2YgdGhlIG5vZGVzIGluIHRoZSB3cmFwcGVyIHBhc3MgdGhlIHByb3ZpZGVkIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZXZlcnlXaGVyZShwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROb2Rlc0ludGVybmFsKCkuZXZlcnkoKG4sIGkpID0+IHByZWRpY2F0ZS5jYWxsKHRoaXMsIHRoaXMud3JhcChuKSwgaSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIG5ldyB3cmFwcGVycyB3aXRoIGEgbWFwcGluZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2ZcbiAgICogbm9kZXMgaW4gcmVzcG9uc2UgdG8gYSBzaW5nbGUgbm9kZSB3cmFwcGVyLiBUaGUgcmV0dXJuZWQgd3JhcHBlciBpcyBhIHNpbmdsZSB3cmFwcGVyIGFyb3VuZFxuICAgKiBhbGwgb2YgdGhlIG1hcHBlZCBub2RlcyBmbGF0dGVuZWQgKGFuZCBkZS1kdXBsaWNhdGVkKS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHJldHVybnMge1NoYWxsb3dXcmFwcGVyfVxuICAgKi9cbiAgZmxhdE1hcChmbikge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5nZXROb2Rlc0ludGVybmFsKCkubWFwKChuLCBpKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMud3JhcChuKSwgaSkpO1xuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXQobm9kZXMsIDEpO1xuICAgIHJldHVybiB0aGlzLndyYXAoZmxhdHRlbmVkLmZpbHRlcihCb29sZWFuKSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYWxsIG5vZGVzIGluIHRoZSBjdXJyZW50IHdyYXBwZXIgbm9kZXMnIHJlbmRlciB0cmVlcyB0aGF0IG1hdGNoIHRoZSBwcm92aWRlZCBwcmVkaWNhdGVcbiAgICogZnVuY3Rpb24uIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gd2lsbCByZWNlaXZlIHRoZSBub2RlcyBpbnNpZGUgYSBTaGFsbG93V3JhcHBlciBhcyBpdHNcbiAgICogZmlyc3QgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZVxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBmaW5kV2hlcmUocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIGZpbmRXaGVyZVVud3JhcHBlZCh0aGlzLCAobikgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMud3JhcChuKTtcbiAgICAgIHJldHVybiBub2RlLmxlbmd0aCA+IDAgJiYgcHJlZGljYXRlKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vZGUgYXQgYSBnaXZlbiBpbmRleCBvZiB0aGUgY3VycmVudCB3cmFwcGVyLlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAgICovXG4gIGdldChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzKClbaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbm9kZSBhdCBhIGdpdmVuIGluZGV4IG9mIHRoZSBjdXJyZW50IHdyYXBwZXIuXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBhdChpbmRleCkge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5nZXROb2Rlc0ludGVybmFsKCk7XG4gICAgaWYgKGluZGV4IDwgbm9kZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy53cmFwKG5vZGVzW2luZGV4XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLndyYXAoW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZmlyc3Qgbm9kZSBvZiB0aGUgY3VycmVudCB3cmFwcGVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBmaXJzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdCgwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgd3JhcHBlciBhcm91bmQgdGhlIGxhc3Qgbm9kZSBvZiB0aGUgY3VycmVudCB3cmFwcGVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICBsYXN0KCkge1xuICAgIHJldHVybiB0aGlzLmF0KHRoaXMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZWdhdGVzIHRvIGV4aXN0cygpXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNFbXB0eSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybignRW56eW1lOjpEZXByZWNhdGVkIG1ldGhvZCBpc0VtcHR5KCkgY2FsbGVkLCB1c2UgZXhpc3RzKCkgaW5zdGVhZC4nKTtcbiAgICByZXR1cm4gIXRoaXMuZXhpc3RzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHdyYXBwZXIgaGFzIG5vZGVzLiBGYWxzZSBvdGhlcndpc2UuXG4gICAqIElmIGNhbGxlZCB3aXRoIGEgc2VsZWN0b3IgaXQgcmV0dXJucyBgLmZpbmQoc2VsZWN0b3IpLmV4aXN0cygpYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0ge0VuenltZVNlbGVjdG9yfSBzZWxlY3RvciAob3B0aW9uYWwpXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZXhpc3RzKHNlbGVjdG9yID0gbnVsbCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMCA/IHRoaXMuZmluZChzZWxlY3RvcikuZXhpc3RzKCkgOiB0aGlzLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QgdGhhdCB0aHJvd3MgYW4gZXJyb3IgaWYgdGhlIGN1cnJlbnQgaW5zdGFuY2UgaGFzIGEgbGVuZ3RoIG90aGVyIHRoYW4gb25lLlxuICAgKiBUaGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIGVuZm9yY2UgdGhhdCBjZXJ0YWluIG1ldGhvZHMgYXJlIG9ubHkgcnVuIG9uIGEgd3JhcHBlciB3aGVuIGl0IGlzXG4gICAqIHdyYXBwaW5nIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSBmblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHNpbmdsZShuYW1lLCBmbikge1xuICAgIGNvbnN0IGZuTmFtZSA9IHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyA/IG5hbWUgOiAndW5rbm93bic7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyBmbiA6IG5hbWU7XG4gICAgaWYgKHRoaXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCDigJwke2ZuTmFtZX3igJ0gaXMgbWVhbnQgdG8gYmUgcnVuIG9uIDEgbm9kZS4gJHt0aGlzLmxlbmd0aH0gZm91bmQgaW5zdGVhZC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgdGhpcy5nZXROb2RlSW50ZXJuYWwoKSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGZ1bCB1dGlsaXR5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgd3JhcHBlciB3aXRoIHRoZSBzYW1lIHJvb3QgYXMgdGhlIGN1cnJlbnQgd3JhcHBlciwgd2l0aFxuICAgKiBhbnkgbm9kZXMgcGFzc2VkIGluIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgYXV0b21hdGljYWxseSB3cmFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZVxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICB3cmFwKG5vZGUsIHJvb3QgPSB0aGlzW1JPT1RdLCAuLi5hcmdzKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBTaGFsbG93V3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU2hhbGxvd1dyYXBwZXIobm9kZSwgcm9vdCwgLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBIVE1MLWxpa2Ugc3RyaW5nIG9mIHRoZSBzaGFsbG93IHJlbmRlciBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gUHJvcGVydHkgYmFnIG9mIGFkZGl0aW9uYWwgb3B0aW9ucy5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5pZ25vcmVQcm9wc10gLSBpZiB0cnVlLCBwcm9wcyBhcmUgb21pdHRlZCBmcm9tIHRoZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudmVyYm9zZV0gLSBpZiB0cnVlLCBhcnJheXMgYW5kIG9iamVjdHMgdG8gYmUgdmVyYm9zZWx5IHByaW50ZWQuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBkZWJ1ZyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gZGVidWdOb2Rlcyh0aGlzLmdldE5vZGVzSW50ZXJuYWwoKSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBpbnRlcmNlcHRlciBhbmQgcmV0dXJucyBpdHNlbGYuIGludGVyY2VwdGVyIGlzIGNhbGxlZCB3aXRoIGl0c2VsZi5cbiAgICogVGhpcyBpcyBoZWxwZnVsIHdoZW4gZGVidWdnaW5nIG5vZGVzIGluIG1ldGhvZCBjaGFpbnMuXG4gICAqIEBwYXJhbSBmblxuICAgKiBAcmV0dXJucyB7U2hhbGxvd1dyYXBwZXJ9XG4gICAqL1xuICB0YXAoaW50ZXJjZXB0ZXIpIHtcbiAgICBpbnRlcmNlcHRlcih0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmltYXJpbHkgdXNlZnVsIGZvciBIT0NzIChoaWdoZXItb3JkZXIgY29tcG9uZW50cyksIHRoaXMgbWV0aG9kIG1heSBvbmx5IGJlXG4gICAqIHJ1biBvbiBhIHNpbmdsZSwgbm9uLURPTSBub2RlLCBhbmQgd2lsbCByZXR1cm4gdGhlIG5vZGUsIHNoYWxsb3ctcmVuZGVyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIGRpdmUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgYWRhcHRlciA9IGdldEFkYXB0ZXIodGhpc1tPUFRJT05TXSk7XG4gICAgY29uc3QgbmFtZSA9ICdkaXZlJztcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUobmFtZSwgKG4pID0+IHtcbiAgICAgIGlmIChuICYmIG4ubm9kZVR5cGUgPT09ICdob3N0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBTaGFsbG93V3JhcHBlcjo6JHtuYW1lfSgpIGNhbiBub3QgYmUgY2FsbGVkIG9uIEhvc3QgQ29tcG9uZW50c2ApO1xuICAgICAgfVxuICAgICAgY29uc3QgZWwgPSBnZXRBZGFwdGVyKHRoaXNbT1BUSU9OU10pLm5vZGVUb0VsZW1lbnQobik7XG4gICAgICBpZiAoIWlzQ3VzdG9tQ29tcG9uZW50RWxlbWVudChlbCwgYWRhcHRlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgU2hhbGxvd1dyYXBwZXI6OiR7bmFtZX0oKSBjYW4gb25seSBiZSBjYWxsZWQgb24gY29tcG9uZW50c2ApO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hpbGRPcHRpb25zID0gbWFrZUluaGVyaXRlZENoaWxkT3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLndyYXAoZWwsIG51bGwsIGNoaWxkT3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RyaXBzIG91dCBhbGwgdGhlIG5vdCBob3N0LW5vZGVzIGZyb20gdGhlIGxpc3Qgb2Ygbm9kZXNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgaG9zdCBub2Rlc1xuICAgKiAoYWN0dWFsbHkgcmVuZGVyZWQgSFRNTCBlbGVtZW50cykgaWdub3JpbmcgdGhlIFJlYWN0IG5vZGVzLlxuICAgKi9cbiAgaG9zdE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcldoZXJlKChuKSA9PiB0eXBlb2Ygbi50eXBlKCkgPT09ICdzdHJpbmcnKTtcbiAgfVxufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGNvbnRleHQgb2YgdGhlIHByaW1hcnkgd3JhcHBlciB3aGVuIHRoZVxuICogYHdyYXBwaW5nQ29tcG9uZW50YCByZS1yZW5kZXJzLlxuICovXG5mdW5jdGlvbiB1cGRhdGVQcmltYXJ5Um9vdENvbnRleHQod3JhcHBpbmdDb21wb25lbnQpIHtcbiAgY29uc3QgYWRhcHRlciA9IGdldEFkYXB0ZXIod3JhcHBpbmdDb21wb25lbnRbT1BUSU9OU10pO1xuICBjb25zdCBwcmltYXJ5V3JhcHBlciA9IHdyYXBwaW5nQ29tcG9uZW50W1BSSU1BUllfV1JBUFBFUl07XG4gIGNvbnN0IHByaW1hcnlSZW5kZXJlciA9IHByaW1hcnlXcmFwcGVyW1JFTkRFUkVSXTtcbiAgY29uc3QgcHJpbWFyeU5vZGUgPSBwcmltYXJ5UmVuZGVyZXIuZ2V0Tm9kZSgpO1xuICBjb25zdCB7XG4gICAgbGVnYWN5Q29udGV4dCxcbiAgICBwcm92aWRlclZhbHVlcyxcbiAgfSA9IGdldENvbnRleHRGcm9tV3JhcHBpbmdDb21wb25lbnQod3JhcHBpbmdDb21wb25lbnQsIGFkYXB0ZXIpO1xuICBjb25zdCBwcmV2UHJvdmlkZXJWYWx1ZXMgPSBwcmltYXJ5V3JhcHBlcltQUk9WSURFUl9WQUxVRVNdO1xuXG4gIHByaW1hcnlXcmFwcGVyLnNldENvbnRleHQoe1xuICAgIC4uLndyYXBwaW5nQ29tcG9uZW50W1BSSU1BUllfV1JBUFBFUl1bT1BUSU9OU10uY29udGV4dCxcbiAgICAuLi5sZWdhY3lDb250ZXh0LFxuICB9KTtcbiAgcHJpbWFyeVdyYXBwZXJbUFJPVklERVJfVkFMVUVTXSA9IG5ldyBNYXAoWy4uLnByZXZQcm92aWRlclZhbHVlcywgLi4ucHJvdmlkZXJWYWx1ZXNdKTtcblxuICBpZiAodHlwZW9mIGFkYXB0ZXIuaXNDb250ZXh0Q29uc3VtZXIgPT09ICdmdW5jdGlvbicgJiYgYWRhcHRlci5pc0NvbnRleHRDb25zdW1lcihwcmltYXJ5Tm9kZS50eXBlKSkge1xuICAgIGNvbnN0IENvbnN1bWVyID0gcHJpbWFyeU5vZGUudHlwZTtcbiAgICAvLyBBZGFwdGVycyB3aXRoIGFuIGBpc0NvbnRleHRDb25zdW1lcmAgbWV0aG9kIHdpbGwgZGVmaW5pdGVseSBoYXZlIGEgYGdldFByb3ZpZGVyRnJvbUNvbnN1bWVyYFxuICAgIC8vIG1ldGhvZC5cbiAgICBjb25zdCBQcm92aWRlciA9IGFkYXB0ZXIuZ2V0UHJvdmlkZXJGcm9tQ29uc3VtZXIoQ29uc3VtZXIpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gcHJvdmlkZXJWYWx1ZXMuZ2V0KFByb3ZpZGVyKTtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHByZXZQcm92aWRlclZhbHVlcy5nZXQoUHJvdmlkZXIpO1xuXG4gICAgLy8gVXNlIHJlZmVyZW50aWFsIGNvbXBhcmlzb24gbGlrZSBSZWFjdFxuICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHByaW1hcnlXcmFwcGVyLnJlcmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQSAqc3BlY2lhbCogXCJyb290XCIgd3JhcHBlciB0aGF0IHJlcHJlc2VudHMgdGhlIGNvbXBvbmVudCBwYXNzZWQgYXMgYHdyYXBwaW5nQ29tcG9uZW50YC5cbiAqIEl0IGlzIGxpbmtlZCB0byB0aGUgcHJpbWFyeSByb290IHN1Y2ggdGhhdCB1cGRhdGVzIHRvIGl0IHdpbGwgdXBkYXRlIHRoZSBwcmltYXJ5LlxuICpcbiAqIEBjbGFzcyBXcmFwcGluZ0NvbXBvbmVudFdyYXBwZXJcbiAqL1xuY2xhc3MgV3JhcHBpbmdDb21wb25lbnRXcmFwcGVyIGV4dGVuZHMgU2hhbGxvd1dyYXBwZXIge1xuICBjb25zdHJ1Y3Rvcihub2Rlcywgcm9vdCwgUm9vdEZpbmRlcikge1xuICAgIHN1cGVyKG5vZGVzKTtcbiAgICBwcml2YXRlU2V0KHRoaXMsIFBSSU1BUllfV1JBUFBFUiwgcm9vdCk7XG4gICAgcHJpdmF0ZVNldCh0aGlzLCBST09UX0ZJTkRFUiwgUm9vdEZpbmRlcik7XG4gIH1cblxuICAvKipcbiAgICogTGlrZSByZXJlbmRlcigpIG9uIFNoYWxsb3dXcmFwcGVyLCBleGNlcHQgaXQgYWxzbyBkb2VzIGEgXCJmdWxsIHJlbmRlclwiIG9mXG4gICAqIGl0c2VsZiBhbmQgdXBkYXRlcyB0aGUgcHJpbWFyeSBTaGFsbG93V3JhcHBlcidzIGNvbnRleHQuXG4gICAqL1xuICByZXJlbmRlciguLi5hcmdzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIucmVyZW5kZXIoLi4uYXJncyk7XG4gICAgdXBkYXRlUHJpbWFyeVJvb3RDb250ZXh0KHRoaXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogTGlrZSBzZXRTdGF0ZSgpIG9uIFNoYWxsb3dXcmFwcGVyLCBleGNlcHQgaXQgYWxzbyBkb2VzIGEgXCJmdWxsIHJlbmRlclwiIG9mXG4gICAqIGl0c2VsZiBhbmQgdXBkYXRlcyB0aGUgcHJpbWFyeSBTaGFsbG93V3JhcHBlcidzIGNvbnRleHQuXG4gICAqL1xuICBzZXRTdGF0ZSguLi5hcmdzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuc2V0U3RhdGUoLi4uYXJncyk7XG4gICAgdXBkYXRlUHJpbWFyeVJvb3RDb250ZXh0KHRoaXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBnZXRXcmFwcGluZ0NvbXBvbmVudCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYWxsb3dXcmFwcGVyOjpnZXRXcmFwcGluZ0NvbXBvbmVudCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGUgcm9vdCcpO1xuICB9XG59XG5cbmlmIChJVEVSQVRPUl9TWU1CT0wpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNoYWxsb3dXcmFwcGVyLnByb3RvdHlwZSwgSVRFUkFUT1JfU1lNQk9MLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICAgIGNvbnN0IGl0ZXIgPSB0aGlzLmdldE5vZGVzSW50ZXJuYWwoKVtJVEVSQVRPUl9TWU1CT0xdKCk7XG4gICAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtJVEVSQVRPUl9TWU1CT0xdKCkgeyByZXR1cm4gdGhpczsgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gaXRlci5uZXh0KCk7XG4gICAgICAgICAgaWYgKG5leHQuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogYWRhcHRlci5ub2RlVG9FbGVtZW50KG5leHQudmFsdWUpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcml2YXRlV2FybmluZyhwcm9wLCBleHRyYU1lc3NhZ2UpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNoYWxsb3dXcmFwcGVyLnByb3RvdHlwZSwgcHJvcCwge1xuICAgIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgIEF0dGVtcHRlZCB0byBhY2Nlc3MgU2hhbGxvd1dyYXBwZXI6OiR7cHJvcH0sIHdoaWNoIHdhcyBwcmV2aW91c2x5IGEgcHJpdmF0ZSBwcm9wZXJ0eSBvblxuICAgICAgICBFbnp5bWUgU2hhbGxvd1dyYXBwZXIgaW5zdGFuY2VzLCBidXQgaXMgbm8gbG9uZ2VyIGFuZCBzaG91bGQgbm90IGJlIHJlbGllZCB1cG9uLlxuICAgICAgICAke2V4dHJhTWVzc2FnZX1cbiAgICAgIGApO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgfSk7XG59XG5cbnByaXZhdGVXYXJuaW5nKCdub2RlJywgJ0NvbnNpZGVyIHVzaW5nIHRoZSBnZXRFbGVtZW50KCkgbWV0aG9kIGluc3RlYWQuJyk7XG5wcml2YXRlV2FybmluZygnbm9kZXMnLCAnQ29uc2lkZXIgdXNpbmcgdGhlIGdldEVsZW1lbnRzKCkgbWV0aG9kIGluc3RlYWQuJyk7XG5wcml2YXRlV2FybmluZygncmVuZGVyZXInLCAnJyk7XG5wcml2YXRlV2FybmluZygnb3B0aW9ucycsICcnKTtcbnByaXZhdGVXYXJuaW5nKCdjb21wbGV4U2VsZWN0b3InLCAnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFNoYWxsb3dXcmFwcGVyO1xuIl19
//# sourceMappingURL=ShallowWrapper.js.map