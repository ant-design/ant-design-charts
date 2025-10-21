'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _arrayPrototype = require('array.prototype.flat');

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _has = require('has');

var _has2 = _interopRequireDefault(_has);

var _Utils = require('./Utils');

var _getAdapter = require('./getAdapter');

var _getAdapter2 = _interopRequireDefault(_getAdapter);

var _Debug = require('./Debug');

var _RSTTraversal = require('./RSTTraversal');

var _selectors = require('./selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NODE = (0, _Utils.sym)('__node__');
var NODES = (0, _Utils.sym)('__nodes__');
var RENDERER = (0, _Utils.sym)('__renderer__');
var UNRENDERED = (0, _Utils.sym)('__unrendered__');
var ROOT = (0, _Utils.sym)('__root__');
var OPTIONS = (0, _Utils.sym)('__options__');
var ROOT_NODES = (0, _Utils.sym)('__rootNodes__');
var WRAPPING_COMPONENT = (0, _Utils.sym)('__wrappingComponent__');
var LINKED_ROOTS = (0, _Utils.sym)('__linkedRoots__');
var UPDATED_BY = (0, _Utils.sym)('__updatedBy__');

/**
 * Finds all nodes in the current wrapper nodes' render trees that match the provided predicate
 * function.
 *
 * @param {ReactWrapper} wrapper
 * @param {Function} predicate
 * @param {Function} filter
 * @returns {ReactWrapper}
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
 * @param {ReactWrapper} wrapper
 * @param {Function} predicate
 * @returns {ReactWrapper}
 */
function filterWhereUnwrapped(wrapper, predicate) {
  return wrapper.wrap(wrapper.getNodesInternal().filter(predicate).filter(Boolean));
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
  if (!nodes) {
    (0, _Utils.privateSet)(wrapper, NODE, null);
    (0, _Utils.privateSet)(wrapper, NODES, []);
  } else if (!Array.isArray(nodes)) {
    (0, _Utils.privateSet)(wrapper, NODE, nodes);
    (0, _Utils.privateSet)(wrapper, NODES, [nodes]);
  } else {
    (0, _Utils.privateSet)(wrapper, NODE, nodes[0]);
    (0, _Utils.privateSet)(wrapper, NODES, nodes);
  }
  (0, _Utils.privateSet)(wrapper, 'length', wrapper[NODES].length);
}

/**
 * @class ReactWrapper
 */

var ReactWrapper = function () {
  function ReactWrapper(nodes, root) {
    var passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ReactWrapper);

    if (!global.window && !global.document) {
      throw new Error('It looks like you called `mount()` without a global document being loaded.');
    }
    var options = (0, _Utils.makeOptions)(passedOptions);

    if (!root) {
      var adapter = (0, _getAdapter2['default'])(options);
      if (!adapter.isValidElement(nodes)) {
        throw new TypeError('ReactWrapper can only wrap valid elements');
      }

      var renderer = adapter.createRenderer((0, _object2['default'])({ mode: 'mount' }, options));
      (0, _Utils.privateSet)(this, RENDERER, renderer);
      renderer.render(nodes, options.context);
      (0, _Utils.privateSet)(this, ROOT, this);
      privateSetNodes(this, this[RENDERER].getNode());
      (0, _Utils.privateSet)(this, OPTIONS, options);
      (0, _Utils.privateSet)(this, LINKED_ROOTS, []);

      if ((0, _Utils.isCustomComponent)(options.wrappingComponent, adapter)) {
        if (typeof this[RENDERER].getWrappingComponentRenderer !== 'function') {
          throw new TypeError('your adapter does not support `wrappingComponent`. Try upgrading it!');
        }

        // eslint-disable-next-line no-use-before-define
        (0, _Utils.privateSet)(this, WRAPPING_COMPONENT, new WrappingComponentWrapper(this, this[RENDERER].getWrappingComponentRenderer()));
        this[LINKED_ROOTS].push(this[WRAPPING_COMPONENT]);
      }
    } else {
      (0, _Utils.privateSet)(this, RENDERER, root[RENDERER]);
      (0, _Utils.privateSet)(this, ROOT, root);
      privateSetNodes(this, nodes);
      (0, _Utils.privateSet)(this, ROOT_NODES, root[NODES]);
      (0, _Utils.privateSet)(this, OPTIONS, root[OPTIONS]);
      (0, _Utils.privateSet)(this, LINKED_ROOTS, []);
    }
    (0, _Utils.privateSet)(this, UNRENDERED, nodes);
    (0, _Utils.privateSet)(this, UPDATED_BY, null);
  }

  /**
   * Returns the root wrapper
   *
   * @return {ReactWrapper}
   */


  _createClass(ReactWrapper, [{
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
          throw new Error('ReactWrapper::getNode() can only be called when wrapping one node');
        }
        return this[NODES][0];
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
        var _this = this;

        return this.single('getElement', function () {
          return (0, _getAdapter2['default'])(_this[OPTIONS]).nodeToElement(_this[NODE]);
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
        var _this2 = this;

        return this[NODES].map(function (n) {
          return (0, _getAdapter2['default'])(_this2[OPTIONS]).nodeToElement(n);
        });
      }

      return getElements;
    }()

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'getNode',
    value: function () {
      function getNode() {
        throw new Error('ReactWrapper::getNode() is no longer supported. Use ReactWrapper::instance() instead');
      }

      return getNode;
    }()

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'getNodes',
    value: function () {
      function getNodes() {
        throw new Error('ReactWrapper::getNodes() is no longer supported.');
      }

      return getNodes;
    }()

    /**
     * Returns the outer most DOMComponent of the current wrapper.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @returns {DOMComponent}
     */

  }, {
    key: 'getDOMNode',
    value: function () {
      function getDOMNode() {
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        return this.single('getDOMNode', function (n) {
          return adapter.nodeToHostNode(n, true);
        });
      }

      return getDOMNode;
    }()

    /**
     * If the root component contained a ref, you can access it here and get the relevant
     * react component instance or HTML element instance.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     *
     * @param {String} refname
     * @returns {ReactComponent | HTMLElement}
     */

  }, {
    key: 'ref',
    value: function () {
      function ref(refname) {
        if (this[ROOT] !== this) {
          throw new Error('ReactWrapper::ref(refname) can only be called on the root');
        }
        return this.instance().refs[refname];
      }

      return ref;
    }()

    /**
     * Returns the wrapper's underlying instance.
     *
     * Example:
     * ```
     * const wrapper = mount(<MyComponent />);
     * const inst = wrapper.instance();
     * expect(inst).to.be.instanceOf(MyComponent);
     * ```
     * @returns {ReactComponent|DOMComponent}
     */

  }, {
    key: 'instance',
    value: function () {
      function instance() {
        var _this3 = this;

        return this.single('instance', function () {
          return _this3[NODE].instance;
        });
      }

      return instance;
    }()

    /**
     * If a `wrappingComponent` was passed in `options`, this methods returns a `ReactWrapper` around
     * the rendered `wrappingComponent`. This `ReactWrapper` can be used to update the
     * `wrappingComponent`'s props, state, etc.
     *
     * @returns ReactWrapper
     */

  }, {
    key: 'getWrappingComponent',
    value: function () {
      function getWrappingComponent() {
        if (this[ROOT] !== this) {
          throw new Error('ReactWrapper::getWrappingComponent() can only be called on the root');
        }
        if (!this[OPTIONS].wrappingComponent) {
          throw new Error('ReactWrapper::getWrappingComponent() can only be called on a wrapper that was originally passed a `wrappingComponent` option');
        }
        return this[WRAPPING_COMPONENT];
      }

      return getWrappingComponent;
    }()

    /**
     * Forces a re-render. Useful to run before checking the render output if something external
     * may be updating the state of the component somewhere.
     *
     * NOTE: no matter what instance this is called on, it will always update the root.
     *
     * @returns {ReactWrapper}
     */

  }, {
    key: 'update',
    value: function () {
      function update() {
        var _this4 = this;

        var root = this[ROOT];
        if (this !== root) {
          return root.update();
        }
        privateSetNodes(this, this[RENDERER].getNode());
        this[LINKED_ROOTS].forEach(function (linkedRoot) {
          if (linkedRoot !== _this4[UPDATED_BY]) {
            /* eslint-disable no-param-reassign */
            // Only update a linked it root if it is not the originator of our update().
            // This is needed to prevent infinite recursion when there is a bi-directional
            // link between two roots.
            linkedRoot[UPDATED_BY] = _this4;
            try {
              linkedRoot.update();
            } finally {
              linkedRoot[UPDATED_BY] = null;
            }
          }
        });
        return this;
      }

      return update;
    }()

    /**
     * A method that unmounts the component. This can be used to simulate a component going through
     * and unmount/mount lifecycle.
     *
     * @returns {ReactWrapper}
     */

  }, {
    key: 'unmount',
    value: function () {
      function unmount() {
        var _this5 = this;

        if (this[ROOT] !== this) {
          throw new Error('ReactWrapper::unmount() can only be called on the root');
        }
        this.single('unmount', function () {
          _this5[RENDERER].unmount();
          _this5.update();
        });
        return this;
      }

      return unmount;
    }()

    /**
     * A method that re-mounts the component, if it is not currently mounted.
     * This can be used to simulate a component going through
     * an unmount/mount lifecycle.
     *
     * @returns {ReactWrapper}
     */

  }, {
    key: 'mount',
    value: function () {
      function mount() {
        var _this6 = this;

        if (this[ROOT] !== this) {
          throw new Error('ReactWrapper::mount() can only be called on the root');
        }
        this[RENDERER].render(this[UNRENDERED], this[OPTIONS].context, function () {
          return _this6.update();
        });
        return this;
      }

      return mount;
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
     * @returns {ReactWrapper}
     */

  }, {
    key: 'setProps',
    value: function () {
      function setProps(props) {
        var _this7 = this;

        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (this[ROOT] !== this) {
          throw new Error('ReactWrapper::setProps() can only be called on the root');
        }
        if (arguments.length > 1 && typeof callback !== 'function') {
          throw new TypeError('ReactWrapper::setProps() expects a function as its second argument');
        }
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        this[UNRENDERED] = (0, _Utils.cloneElement)(adapter, this[UNRENDERED], props);
        this[RENDERER].render(this[UNRENDERED], null, function () {
          _this7.update();
          if (callback) {
            callback();
          }
        });
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
     * @returns {ReactWrapper}
     */

  }, {
    key: 'setState',
    value: function () {
      function setState(state) {
        var _this8 = this;

        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (this.instance() === null || this.getNodeInternal().nodeType !== 'class') {
          throw new Error('ReactWrapper::setState() can only be called on class components');
        }
        if (arguments.length > 1 && typeof callback !== 'function') {
          throw new TypeError('ReactWrapper::setState() expects a function as its second argument');
        }
        this.instance().setState(state, function () {
          _this8.update();
          if (callback) {
            var adapter = (0, _getAdapter2['default'])(_this8[OPTIONS]);
            var instance = _this8.instance();
            if (adapter.invokeSetStateCallback) {
              adapter.invokeSetStateCallback(instance, callback);
            } else {
              callback.call(instance);
            }
          }
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
     * @returns {ReactWrapper}
     */

  }, {
    key: 'setContext',
    value: function () {
      function setContext(context) {
        var _this9 = this;

        if (this[ROOT] !== this) {
          throw new Error('ReactWrapper::setContext() can only be called on the root');
        }
        if (!this[OPTIONS].context) {
          throw new Error('ReactWrapper::setContext() can only be called on a wrapper that was originally passed a context option');
        }
        this[RENDERER].render(this[UNRENDERED], context, function () {
          return _this9.update();
        });
        return this;
      }

      return setContext;
    }()

    /**
     * Whether or not a given react element exists in the mount render tree.
     *
     * Example:
     * ```
     * const wrapper = mount(<MyComponent />);
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
     * Whether or not a given react element exists in the current render tree.
     * It will determine if one of the wrappers element "looks like" the expected
     * element by checking if all props of the expected element are present
     * on the wrappers element and equals to each other.
     *
     * Example:
     * ```
     * // MyComponent outputs <div><div class="foo">Hello</div></div>
     * const wrapper = mount(<MyComponent />);
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
        var rstNode = (0, _getAdapter2['default'])(this[OPTIONS]).elementToNode(node);
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
     * Whether or not all the given react elements exist in the current render tree.
     * It will determine if one of the wrappers element "looks like" the expected
     * element by checking if all props of the expected element are present
     * on the wrappers element and equals to each other.
     *
     * Example:
     * ```
     * const wrapper = mount(<MyComponent />);
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
        var _this10 = this;

        if (!Array.isArray(nodes)) {
          throw new TypeError('nodes should be an Array');
        }

        return nodes.every(function (node) {
          return _this10.containsMatchingElement(node);
        });
      }

      return containsAllMatchingElements;
    }()

    /**
     * Whether or not one of the given react elements exists in the current render tree.
     * It will determine if one of the wrappers element "looks like" the expected
     * element by checking if all props of the expected element are present
     * on the wrappers element and equals to each other.
     *
     * Example:
     * ```
     * const wrapper = mount(<MyComponent />);
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
        var _this11 = this;

        return Array.isArray(nodes) && nodes.some(function (node) {
          return _this11.containsMatchingElement(node);
        });
      }

      return containsAnyMatchingElements;
    }()

    /**
     * Whether or not a given react element exists in the render tree.
     *
     * Example:
     * ```
     * const wrapper = mount(<MyComponent />);
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
        var _this12 = this;

        return this.single('equals', function () {
          return (0, _Utils.nodeEqual)(_this12.getNodeInternal(), node);
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
     * const wrapper = mount(<MyComponent />);
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
        var _this13 = this;

        return this.single('matchesElement', function () {
          var adapter = (0, _getAdapter2['default'])(_this13[OPTIONS]);
          var rstNode = adapter.elementToNode(node);
          return (0, _Utils.nodeMatches)(rstNode, _this13.getNodeInternal(), function (a, b) {
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
     * @returns {ReactWrapper}
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
        var nodes = this.getNodeInternal();

        return (0, _Utils.renderedDive)(nodes);
      }

      return isEmptyRender;
    }()

    /**
     * Returns a new wrapper instance with only the nodes of the current wrapper instance that match
     * the provided predicate function.
     *
     * @param {Function} predicate
     * @returns {ReactWrapper}
     */

  }, {
    key: 'filterWhere',
    value: function () {
      function filterWhere(predicate) {
        var _this14 = this;

        return filterWhereUnwrapped(this, function (n) {
          return predicate(_this14.wrap(n));
        });
      }

      return filterWhere;
    }()

    /**
     * Returns a new wrapper instance with only the nodes of the current wrapper instance that match
     * the provided selector.
     *
     * @param {EnzymeSelector} selector
     * @returns {ReactWrapper}
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
     * @returns {ReactWrapper}
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
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        return this.single('text', function (n) {
          return (0, _RSTTraversal.getTextFromHostNodes)(n, adapter);
        });
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
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        return this.single('html', function (n) {
          return (0, _RSTTraversal.getHTMLFromHostNodes)(n, adapter);
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
     * @param {Object} mock (optional)
     * @returns {ReactWrapper}
     */

  }, {
    key: 'simulate',
    value: function () {
      function simulate(event) {
        var _this15 = this;

        var mock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.single('simulate', function (n) {
          _this15[RENDERER].simulateEvent(n, event, mock);
          _this15[ROOT].update();
          return _this15;
        });
      }

      return simulate;
    }()

    /**
     * Used to simulate throwing a rendering error. Pass an error to throw.
     *
     * @param {String} error
     * @returns {ReactWrapper}
     */

  }, {
    key: 'simulateError',
    value: function () {
      function simulateError(error) {
        var _this16 = this;

        if (this[ROOT] === this) {
          throw new Error('ReactWrapper::simulateError() may not be called on the root');
        }

        return this.single('simulateError', function (thisNode) {
          if (thisNode.nodeType === 'host') {
            throw new Error('ReactWrapper::simulateError() can only be called on custom components');
          }

          var renderer = _this16[RENDERER];
          if (typeof renderer.simulateError !== 'function') {
            throw new TypeError('your adapter does not support `simulateError`. Try upgrading it!');
          }

          var rootNode = getRootNodeInternal(_this16);
          var nodeHierarchy = [thisNode].concat(nodeParents(_this16, thisNode));
          renderer.simulateError(nodeHierarchy, rootNode, error);

          _this16[ROOT].update();
          return _this16;
        });
      }

      return simulateError;
    }()

    /**
     * Returns the props hash for the root node of the wrapper.
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
        var _this17 = this;

        var thisNode = this[ROOT] === this ? this[RENDERER].getNode() : this.getNodeInternal();
        if (this.instance() === null || thisNode.nodeType !== 'class') {
          throw new Error('ReactWrapper::state() can only be called on class components');
        }
        var _state = this.single('state', function () {
          return _this17.instance().state;
        });
        if (typeof name !== 'undefined') {
          if (_state == null) {
            throw new TypeError('ReactWrapper::state("' + String(name) + '") requires that `state` not be `null` or `undefined`');
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
        var _this18 = this;

        if (this[ROOT] !== this) {
          throw new Error('ReactWrapper::context() can only be called on the root');
        }
        var instance = this.single('context', function () {
          return _this18.instance();
        });
        if (instance === null) {
          throw new Error('ReactWrapper::context() can only be called on components with instances');
        }
        var _context = instance.context;
        if (typeof name !== 'undefined') {
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
     * @returns {ReactWrapper}
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
     * @returns {ReactWrapper}
     */

  }, {
    key: 'childAt',
    value: function () {
      function childAt(index) {
        var _this19 = this;

        return this.single('childAt', function () {
          return _this19.children().at(index);
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
     * @returns {ReactWrapper}
     */

  }, {
    key: 'parents',
    value: function () {
      function parents(selector) {
        var _this20 = this;

        return this.single('parents', function (n) {
          var allParents = _this20.wrap(nodeParents(_this20, n));
          return selector ? allParents.filter(selector) : allParents;
        });
      }

      return parents;
    }()

    /**
     * Returns a wrapper around the immediate parent of the current node.
     *
     * @returns {ReactWrapper}
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
     * @returns {ReactWrapper}
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
     * Returns the value of  prop with the given name of the root node.
     *
     * @param {String} propName
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
        var _this21 = this;

        return this.single('invoke', function () {
          var handler = _this21.prop(propName);
          if (typeof handler !== 'function') {
            throw new TypeError('ReactWrapper::invoke() requires the name of a prop whose value is a function');
          }
          return function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var response = typeof _this21[RENDERER].wrapInvoke === 'function' ? _this21[RENDERER].wrapInvoke(function () {
              return handler.apply(undefined, args);
            }) : handler.apply(undefined, args);
            _this21[ROOT].update();
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
        var _this22 = this;

        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        if (typeof adapter.wrap !== 'function') {
          throw new RangeError('your adapter does not support `wrap`. Try upgrading it!');
        }

        return this.single('renderProp', function (n) {
          if (n.nodeType === 'host') {
            throw new TypeError('ReactWrapper::renderProp() can only be called on custom components');
          }
          if (typeof propName !== 'string') {
            throw new TypeError('ReactWrapper::renderProp(): `propName` must be a string');
          }
          var props = _this22.props();
          if (!(0, _has2['default'])(props, propName)) {
            throw new Error('ReactWrapper::renderProp(): no prop called \u201C' + String(propName) + '\u201C found');
          }
          var propValue = props[propName];
          if (typeof propValue !== 'function') {
            throw new TypeError('ReactWrapper::renderProp(): expected prop \u201C' + String(propName) + '\u201C to contain a function, but it holds \u201C' + (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) + '\u201C');
          }

          return function () {
            var element = propValue.apply(undefined, arguments);
            var wrapped = adapter.wrap(element);
            return _this22.wrap(wrapped, null, _this22[OPTIONS]);
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
     * Returns the type of the root node of this wrapper. If it's a composite component, this will be
     * the component constructor. If it's native DOM node, it will be a string.
     *
     * @returns {String|Function}
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
     * Returns the name of the root node of this wrapper.
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
     * Returns whether or not the current root node has the given class name or not.
     *
     * NOTE: can only be called on a wrapper of a single node.
     *
     * @param {String} className
     * @returns {Boolean}
     */

  }, {
    key: 'hasClass',
    value: function () {
      function hasClass(className) {
        if (typeof className === 'string' && className.indexOf('.') !== -1) {
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'re calling `ReactWrapper::hasClass()` with a CSS selector. hasClass() expects a class name, not a CSS selector.');
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
     * @returns {ReactWrapper}
     */

  }, {
    key: 'forEach',
    value: function () {
      function forEach(fn) {
        var _this23 = this;

        this.getNodesInternal().forEach(function (n, i) {
          return fn.call(_this23, _this23.wrap(n), i);
        });
        return this;
      }

      return forEach;
    }()

    /**
     * Maps the current array of nodes to another array. Each node is passed in as a `ReactWrapper`
     * to the map function.
     *
     * @param {Function} fn
     * @returns {Array}
     */

  }, {
    key: 'map',
    value: function () {
      function map(fn) {
        var _this24 = this;

        return this.getNodesInternal().map(function (n, i) {
          return fn.call(_this24, _this24.wrap(n), i);
        });
      }

      return map;
    }()

    /**
     * Reduces the current array of nodes to another array.
     * Each node is passed in as a `ShallowWrapper` to the reducer function.
     *
     * @param {Function} fn - the reducer function
     * @param {*} initialValue - the initial value
     * @returns {*}
     */

  }, {
    key: 'reduce',
    value: function () {
      function reduce(fn) {
        var _this25 = this;

        var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (arguments.length > 1) {
          return this.getNodesInternal().reduce(function (accum, n, i) {
            return fn.call(_this25, accum, _this25.wrap(n), i);
          }, initialValue);
        }
        return this.getNodesInternal().reduce(function (accum, n, i) {
          return fn.call(_this25, i === 1 ? _this25.wrap(accum) : accum, _this25.wrap(n), i);
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
        var _this26 = this;

        var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (arguments.length > 1) {
          return this.getNodesInternal().reduceRight(function (accum, n, i) {
            return fn.call(_this26, accum, _this26.wrap(n), i);
          }, initialValue);
        }
        return this.getNodesInternal().reduceRight(function (accum, n, i) {
          return fn.call(_this26, i === 1 ? _this26.wrap(accum) : accum, _this26.wrap(n), i);
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
          throw new Error('ReactWrapper::some() can not be called on the root');
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
        var _this27 = this;

        return this.getNodesInternal().some(function (n, i) {
          return predicate.call(_this27, _this27.wrap(n), i);
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
        var _this28 = this;

        return this.getNodesInternal().every(function (n, i) {
          return predicate.call(_this28, _this28.wrap(n), i);
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
     * @returns {ReactWrapper}
     */

  }, {
    key: 'flatMap',
    value: function () {
      function flatMap(fn) {
        var _this29 = this;

        var nodes = this.getNodesInternal().map(function (n, i) {
          return fn.call(_this29, _this29.wrap(n), i);
        });
        var flattened = (0, _arrayPrototype2['default'])(nodes, 1);
        return this.wrap(flattened.filter(Boolean));
      }

      return flatMap;
    }()

    /**
     * Finds all nodes in the current wrapper nodes' render trees that match the provided predicate
     * function.
     *
     * @param {Function} predicate
     * @returns {ReactWrapper}
     */

  }, {
    key: 'findWhere',
    value: function () {
      function findWhere(predicate) {
        var _this30 = this;

        return findWhereUnwrapped(this, function (n) {
          var node = _this30.wrap(n);
          return node.length > 0 && predicate(node);
        });
      }

      return findWhere;
    }()

    /**
     * Returns the node at a given index of the current wrapper.
     *
     * @param {Number} index
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
     * @param {Number} index
     * @returns {ReactWrapper}
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
     * @returns {ReactWrapper}
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
     * @returns {ReactWrapper}
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
     * @param {Function} fn
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
     * @param {ReactWrapper|ReactElement|Array<ReactElement>} node
     * @returns {ReactWrapper}
     */

  }, {
    key: 'wrap',
    value: function () {
      function wrap(node) {
        var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this[ROOT];

        if (node instanceof ReactWrapper) {
          return node;
        }

        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(ReactWrapper, [null].concat([node, root], args)))();
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
     * @returns {ReactWrapper}
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
     * Detaches the react tree from the DOM. Runs `ReactDOM.unmountComponentAtNode()` under the hood.
     *
     * This method will most commonly be used as a "cleanup" method if you decide to use the
     * `attachTo` option in `mount(node, options)`.
     *
     * The method is intentionally not "fluent" (in that it doesn't return `this`) because you should
     * not be doing anything with this wrapper after this method is called.
     */

  }, {
    key: 'detach',
    value: function () {
      function detach() {
        if (this[ROOT] !== this) {
          throw new Error('ReactWrapper::detach() can only be called on the root');
        }
        if (!this[OPTIONS].attachTo) {
          throw new Error('ReactWrapper::detach() can only be called on when the `attachTo` option was passed into `mount()`.');
        }
        this[RENDERER].unmount();
      }

      return detach;
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

  return ReactWrapper;
}();

/**
 * A *special* "root" wrapper that represents the component passed as `wrappingComponent`.
 * It is linked to the primary root such that updates to it will update the primary,
 * and vice versa.
 *
 * @class WrappingComponentWrapper
 */


var WrappingComponentWrapper = function (_ReactWrapper) {
  _inherits(WrappingComponentWrapper, _ReactWrapper);

  /* eslint-disable class-methods-use-this */
  function WrappingComponentWrapper(root, renderer) {
    _classCallCheck(this, WrappingComponentWrapper);

    var _this31 = _possibleConstructorReturn(this, (WrappingComponentWrapper.__proto__ || Object.getPrototypeOf(WrappingComponentWrapper)).call(this, renderer.getNode(), root));

    (0, _Utils.privateSet)(_this31, ROOT, _this31);
    (0, _Utils.privateSet)(_this31, RENDERER, renderer);
    _this31[LINKED_ROOTS].push(root);
    return _this31;
  }

  _createClass(WrappingComponentWrapper, [{
    key: 'getWrappingComponent',
    value: function () {
      function getWrappingComponent() {
        throw new TypeError('ReactWrapper::getWrappingComponent() can only be called on the root');
      }

      return getWrappingComponent;
    }()
  }]);

  return WrappingComponentWrapper;
}(ReactWrapper);

if (_Utils.ITERATOR_SYMBOL) {
  Object.defineProperty(ReactWrapper.prototype, _Utils.ITERATOR_SYMBOL, {
    configurable: true,
    value: function () {
      function iterator() {
        var _ref;

        var iter = this[NODES][_Utils.ITERATOR_SYMBOL]();
        var adapter = (0, _getAdapter2['default'])(this[OPTIONS]);
        return _ref = {}, _defineProperty(_ref, _Utils.ITERATOR_SYMBOL, function () {
          return this;
        }), _defineProperty(_ref, 'next', function () {
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
        }()), _ref;
      }

      return iterator;
    }()
  });
}

function privateWarning(prop, extraMessage) {
  Object.defineProperty(ReactWrapper.prototype, prop, {
    get: function () {
      function get() {
        throw new Error('\n        Attempted to access ReactWrapper::' + String(prop) + ', which was previously a private property on\n        Enzyme ReactWrapper instances, but is no longer and should not be relied upon.\n        ' + String(extraMessage) + '\n      ');
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

exports['default'] = ReactWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWFjdFdyYXBwZXIuanMiXSwibmFtZXMiOlsiTk9ERSIsIk5PREVTIiwiUkVOREVSRVIiLCJVTlJFTkRFUkVEIiwiUk9PVCIsIk9QVElPTlMiLCJST09UX05PREVTIiwiV1JBUFBJTkdfQ09NUE9ORU5UIiwiTElOS0VEX1JPT1RTIiwiVVBEQVRFRF9CWSIsImZpbmRXaGVyZVVud3JhcHBlZCIsIndyYXBwZXIiLCJwcmVkaWNhdGUiLCJmaWx0ZXIiLCJ0cmVlRmlsdGVyIiwiZmxhdE1hcCIsIm4iLCJnZXROb2RlSW50ZXJuYWwiLCJmaWx0ZXJXaGVyZVVud3JhcHBlZCIsIndyYXAiLCJnZXROb2Rlc0ludGVybmFsIiwiQm9vbGVhbiIsImdldFJvb3ROb2RlSW50ZXJuYWwiLCJsZW5ndGgiLCJFcnJvciIsIm5vZGVQYXJlbnRzIiwibm9kZSIsInByaXZhdGVTZXROb2RlcyIsIm5vZGVzIiwiQXJyYXkiLCJpc0FycmF5IiwiUmVhY3RXcmFwcGVyIiwicm9vdCIsInBhc3NlZE9wdGlvbnMiLCJnbG9iYWwiLCJ3aW5kb3ciLCJkb2N1bWVudCIsIm9wdGlvbnMiLCJhZGFwdGVyIiwiaXNWYWxpZEVsZW1lbnQiLCJUeXBlRXJyb3IiLCJyZW5kZXJlciIsImNyZWF0ZVJlbmRlcmVyIiwibW9kZSIsInJlbmRlciIsImNvbnRleHQiLCJnZXROb2RlIiwid3JhcHBpbmdDb21wb25lbnQiLCJnZXRXcmFwcGluZ0NvbXBvbmVudFJlbmRlcmVyIiwiV3JhcHBpbmdDb21wb25lbnRXcmFwcGVyIiwicHVzaCIsInNpbmdsZSIsIm5vZGVUb0VsZW1lbnQiLCJtYXAiLCJub2RlVG9Ib3N0Tm9kZSIsInJlZm5hbWUiLCJpbnN0YW5jZSIsInJlZnMiLCJ1cGRhdGUiLCJmb3JFYWNoIiwibGlua2VkUm9vdCIsInVubW91bnQiLCJwcm9wcyIsImNhbGxiYWNrIiwidW5kZWZpbmVkIiwiYXJndW1lbnRzIiwic3RhdGUiLCJub2RlVHlwZSIsInNldFN0YXRlIiwiaW52b2tlU2V0U3RhdGVDYWxsYmFjayIsImNhbGwiLCJub2RlT3JOb2RlcyIsIm90aGVyIiwibm9kZUVxdWFsIiwiZWxlbWVudFRvTm9kZSIsInJzdE5vZGUiLCJhIiwiYiIsImV2ZXJ5IiwiY29udGFpbnNNYXRjaGluZ0VsZW1lbnQiLCJzb21lIiwic2VsZWN0b3IiLCJodG1sIiwiZXZlbnQiLCJtb2NrIiwic2ltdWxhdGVFdmVudCIsImVycm9yIiwidGhpc05vZGUiLCJzaW11bGF0ZUVycm9yIiwicm9vdE5vZGUiLCJub2RlSGllcmFyY2h5IiwiY29uY2F0IiwicHJvcHNPZk5vZGUiLCJuYW1lIiwiX3N0YXRlIiwiX2NvbnRleHQiLCJhbGxDaGlsZHJlbiIsImluZGV4IiwiY2hpbGRyZW4iLCJhdCIsImFsbFBhcmVudHMiLCJwYXJlbnRzIiwiZ2V0IiwiaXMiLCJtYXRjaGluZ0FuY2VzdG9ycyIsImZpcnN0IiwiZmluZFdoZXJlIiwicHJvcE5hbWUiLCJoYW5kbGVyIiwicHJvcCIsImFyZ3MiLCJyZXNwb25zZSIsIndyYXBJbnZva2UiLCJSYW5nZUVycm9yIiwicHJvcFZhbHVlIiwiZWxlbWVudCIsIndyYXBwZWQiLCJrZXkiLCJkaXNwbGF5TmFtZU9mTm9kZSIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJjb25zb2xlIiwid2FybiIsImZuIiwiaSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImFjY3VtIiwicmVkdWNlUmlnaHQiLCJiZWdpbiIsImVuZCIsInNsaWNlIiwiZmxhdHRlbmVkIiwiZ2V0RWxlbWVudHMiLCJleGlzdHMiLCJmaW5kIiwiZm5OYW1lIiwiaW50ZXJjZXB0ZXIiLCJhdHRhY2hUbyIsImZpbHRlcldoZXJlIiwidHlwZSIsIklURVJBVE9SX1NZTUJPTCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwicHJvdG90eXBlIiwiY29uZmlndXJhYmxlIiwidmFsdWUiLCJpdGVyYXRvciIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInByaXZhdGVXYXJuaW5nIiwiZXh0cmFNZXNzYWdlIiwiZW51bWVy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QUFVLDZCQUFXLEtBQUtqQyxPQUFMLENBQVgsQ0FBaEI7QUFDQSxnREFDR3dJLHNCQURILGNBQ3NCO0FBQUUsaUJBQU8sSUFBUDtBQUFjLFNBRHRDO0FBQUEsMEJBRVM7QUFDTCxnQkFBTVEsT0FBT0QsS0FBS0MsSUFBTCxFQUFiO0FBQ0EsZ0JBQUlBLEtBQUtDLElBQVQsRUFBZTtBQUNiLHFCQUFPLEVBQUVBLE1BQU0sSUFBUixFQUFQO0FBQ0Q7QUFDRCxtQkFBTztBQUNMQSxvQkFBTSxLQUREO0FBRUxKLHFCQUFPNUcsUUFBUWMsYUFBUixDQUFzQmlHLEtBQUtILEtBQTNCO0FBRkYsYUFBUDtBQUlEOztBQVhIO0FBQUE7QUFhRDs7QUFoQkQsYUFBZ0JDLFFBQWhCO0FBQUE7QUFGNkQsR0FBL0Q7QUFvQkQ7O0FBRUQsU0FBU0ksY0FBVCxDQUF3QjFDLElBQXhCLEVBQThCMkMsWUFBOUIsRUFBNEM7QUFDMUNWLFNBQU9DLGNBQVAsQ0FBc0JoSCxhQUFhaUgsU0FBbkMsRUFBOENuQyxJQUE5QyxFQUFvRDtBQUNsRFAsT0FEa0Q7QUFBQSxxQkFDNUM7QUFDSixjQUFNLElBQUk5RSxLQUFKLHlEQUNnQ3FGLElBRGhDLDhKQUdGMkMsWUFIRSxlQUFOO0FBS0Q7O0FBUGlEO0FBQUE7O0FBUWxEQyxnQkFBWSxLQVJzQztBQVNsRFIsa0JBQWM7QUFUb0MsR0FBcEQ7QUFXRDs7QUFFRE0sZUFBZSxNQUFmLEVBQXVCLGlEQUF2QjtBQUNBQSxlQUFlLE9BQWYsRUFBd0Isa0RBQXhCO0FBQ0FBLGVBQWUsVUFBZixFQUEyQixFQUEzQjtBQUNBQSxlQUFlLFNBQWYsRUFBMEIsRUFBMUI7QUFDQUEsZUFBZSxpQkFBZixFQUFrQyxFQUFsQzs7cUJBRWV4SCxZIiwiZmlsZSI6IlJlYWN0V3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmbGF0IGZyb20gJ2FycmF5LnByb3RvdHlwZS5mbGF0JztcbmltcG9ydCBoYXMgZnJvbSAnaGFzJztcblxuaW1wb3J0IHtcbiAgY29udGFpbnNDaGlsZHJlblN1YkFycmF5LFxuICB0eXBlT2ZOb2RlLFxuICBkaXNwbGF5TmFtZU9mTm9kZSxcbiAgSVRFUkFUT1JfU1lNQk9MLFxuICBub2RlRXF1YWwsXG4gIG5vZGVNYXRjaGVzLFxuICBtYWtlT3B0aW9ucyxcbiAgc3ltLFxuICBwcml2YXRlU2V0LFxuICBjbG9uZUVsZW1lbnQsXG4gIHJlbmRlcmVkRGl2ZSxcbiAgaXNDdXN0b21Db21wb25lbnQsXG4gIGxvYWRDaGVlcmlvUm9vdCxcbn0gZnJvbSAnLi9VdGlscyc7XG5pbXBvcnQgZ2V0QWRhcHRlciBmcm9tICcuL2dldEFkYXB0ZXInO1xuaW1wb3J0IHsgZGVidWdOb2RlcyB9IGZyb20gJy4vRGVidWcnO1xuaW1wb3J0IHtcbiAgcHJvcHNPZk5vZGUsXG4gIGhhc0NsYXNzTmFtZSxcbiAgY2hpbGRyZW5PZk5vZGUsXG4gIHBhcmVudHNPZk5vZGUsXG4gIHRyZWVGaWx0ZXIsXG4gIGdldFRleHRGcm9tSG9zdE5vZGVzLFxuICBnZXRIVE1MRnJvbUhvc3ROb2Rlcyxcbn0gZnJvbSAnLi9SU1RUcmF2ZXJzYWwnO1xuXG5pbXBvcnQgeyBidWlsZFByZWRpY2F0ZSwgcmVkdWNlVHJlZXNCeVNlbGVjdG9yIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5jb25zdCBOT0RFID0gc3ltKCdfX25vZGVfXycpO1xuY29uc3QgTk9ERVMgPSBzeW0oJ19fbm9kZXNfXycpO1xuY29uc3QgUkVOREVSRVIgPSBzeW0oJ19fcmVuZGVyZXJfXycpO1xuY29uc3QgVU5SRU5ERVJFRCA9IHN5bSgnX191bnJlbmRlcmVkX18nKTtcbmNvbnN0IFJPT1QgPSBzeW0oJ19fcm9vdF9fJyk7XG5jb25zdCBPUFRJT05TID0gc3ltKCdfX29wdGlvbnNfXycpO1xuY29uc3QgUk9PVF9OT0RFUyA9IHN5bSgnX19yb290Tm9kZXNfXycpO1xuY29uc3QgV1JBUFBJTkdfQ09NUE9ORU5UID0gc3ltKCdfX3dyYXBwaW5nQ29tcG9uZW50X18nKTtcbmNvbnN0IExJTktFRF9ST09UUyA9IHN5bSgnX19saW5rZWRSb290c19fJyk7XG5jb25zdCBVUERBVEVEX0JZID0gc3ltKCdfX3VwZGF0ZWRCeV9fJyk7XG5cbi8qKlxuICogRmluZHMgYWxsIG5vZGVzIGluIHRoZSBjdXJyZW50IHdyYXBwZXIgbm9kZXMnIHJlbmRlciB0cmVlcyB0aGF0IG1hdGNoIHRoZSBwcm92aWRlZCBwcmVkaWNhdGVcbiAqIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RXcmFwcGVyfSB3cmFwcGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZpbHRlclxuICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAqL1xuZnVuY3Rpb24gZmluZFdoZXJlVW53cmFwcGVkKHdyYXBwZXIsIHByZWRpY2F0ZSwgZmlsdGVyID0gdHJlZUZpbHRlcikge1xuICByZXR1cm4gd3JhcHBlci5mbGF0TWFwKChuKSA9PiBmaWx0ZXIobi5nZXROb2RlSW50ZXJuYWwoKSwgcHJlZGljYXRlKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyB3cmFwcGVyIGluc3RhbmNlIHdpdGggb25seSB0aGUgbm9kZXMgb2YgdGhlIGN1cnJlbnQgd3JhcHBlciBpbnN0YW5jZSB0aGF0IG1hdGNoXG4gKiB0aGUgcHJvdmlkZWQgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RXcmFwcGVyfSB3cmFwcGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGVcbiAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlcldoZXJlVW53cmFwcGVkKHdyYXBwZXIsIHByZWRpY2F0ZSkge1xuICByZXR1cm4gd3JhcHBlci53cmFwKHdyYXBwZXIuZ2V0Tm9kZXNJbnRlcm5hbCgpLmZpbHRlcihwcmVkaWNhdGUpLmZpbHRlcihCb29sZWFuKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJvb3ROb2RlSW50ZXJuYWwod3JhcHBlcikge1xuICBpZiAod3JhcHBlcltST09UXS5sZW5ndGggIT09IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFJvb3ROb2RlSW50ZXJuYWwod3JhcHBlcikgY2FuIG9ubHkgYmUgY2FsbGVkIHdoZW4gd3JhcHBlciB3cmFwcyBvbmUgbm9kZScpO1xuICB9XG4gIGlmICh3cmFwcGVyW1JPT1RdICE9PSB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIHdyYXBwZXJbUk9PVF9OT0RFU11bMF07XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXJbUk9PVF1bTk9ERV07XG59XG5cbmZ1bmN0aW9uIG5vZGVQYXJlbnRzKHdyYXBwZXIsIG5vZGUpIHtcbiAgcmV0dXJuIHBhcmVudHNPZk5vZGUobm9kZSwgZ2V0Um9vdE5vZGVJbnRlcm5hbCh3cmFwcGVyKSk7XG59XG5cbmZ1bmN0aW9uIHByaXZhdGVTZXROb2Rlcyh3cmFwcGVyLCBub2Rlcykge1xuICBpZiAoIW5vZGVzKSB7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFLCBudWxsKTtcbiAgICBwcml2YXRlU2V0KHdyYXBwZXIsIE5PREVTLCBbXSk7XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFLCBub2Rlcyk7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFUywgW25vZGVzXSk7XG4gIH0gZWxzZSB7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFLCBub2Rlc1swXSk7XG4gICAgcHJpdmF0ZVNldCh3cmFwcGVyLCBOT0RFUywgbm9kZXMpO1xuICB9XG4gIHByaXZhdGVTZXQod3JhcHBlciwgJ2xlbmd0aCcsIHdyYXBwZXJbTk9ERVNdLmxlbmd0aCk7XG59XG5cbi8qKlxuICogQGNsYXNzIFJlYWN0V3JhcHBlclxuICovXG5jbGFzcyBSZWFjdFdyYXBwZXIge1xuICBjb25zdHJ1Y3Rvcihub2Rlcywgcm9vdCwgcGFzc2VkT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFnbG9iYWwud2luZG93ICYmICFnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgY2FsbGVkIGBtb3VudCgpYCB3aXRob3V0IGEgZ2xvYmFsIGRvY3VtZW50IGJlaW5nIGxvYWRlZC4nKTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IG1ha2VPcHRpb25zKHBhc3NlZE9wdGlvbnMpO1xuXG4gICAgaWYgKCFyb290KSB7XG4gICAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcihvcHRpb25zKTtcbiAgICAgIGlmICghYWRhcHRlci5pc1ZhbGlkRWxlbWVudChub2RlcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVhY3RXcmFwcGVyIGNhbiBvbmx5IHdyYXAgdmFsaWQgZWxlbWVudHMnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBhZGFwdGVyLmNyZWF0ZVJlbmRlcmVyKHsgbW9kZTogJ21vdW50JywgLi4ub3B0aW9ucyB9KTtcbiAgICAgIHByaXZhdGVTZXQodGhpcywgUkVOREVSRVIsIHJlbmRlcmVyKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihub2Rlcywgb3B0aW9ucy5jb250ZXh0KTtcbiAgICAgIHByaXZhdGVTZXQodGhpcywgUk9PVCwgdGhpcyk7XG4gICAgICBwcml2YXRlU2V0Tm9kZXModGhpcywgdGhpc1tSRU5ERVJFUl0uZ2V0Tm9kZSgpKTtcbiAgICAgIHByaXZhdGVTZXQodGhpcywgT1BUSU9OUywgb3B0aW9ucyk7XG4gICAgICBwcml2YXRlU2V0KHRoaXMsIExJTktFRF9ST09UUywgW10pO1xuXG4gICAgICBpZiAoaXNDdXN0b21Db21wb25lbnQob3B0aW9ucy53cmFwcGluZ0NvbXBvbmVudCwgYWRhcHRlcikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW1JFTkRFUkVSXS5nZXRXcmFwcGluZ0NvbXBvbmVudFJlbmRlcmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigneW91ciBhZGFwdGVyIGRvZXMgbm90IHN1cHBvcnQgYHdyYXBwaW5nQ29tcG9uZW50YC4gVHJ5IHVwZ3JhZGluZyBpdCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICBwcml2YXRlU2V0KHRoaXMsIFdSQVBQSU5HX0NPTVBPTkVOVCwgbmV3IFdyYXBwaW5nQ29tcG9uZW50V3JhcHBlcihcbiAgICAgICAgICB0aGlzLCB0aGlzW1JFTkRFUkVSXS5nZXRXcmFwcGluZ0NvbXBvbmVudFJlbmRlcmVyKCksXG4gICAgICAgICkpO1xuICAgICAgICB0aGlzW0xJTktFRF9ST09UU10ucHVzaCh0aGlzW1dSQVBQSU5HX0NPTVBPTkVOVF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcml2YXRlU2V0KHRoaXMsIFJFTkRFUkVSLCByb290W1JFTkRFUkVSXSk7XG4gICAgICBwcml2YXRlU2V0KHRoaXMsIFJPT1QsIHJvb3QpO1xuICAgICAgcHJpdmF0ZVNldE5vZGVzKHRoaXMsIG5vZGVzKTtcbiAgICAgIHByaXZhdGVTZXQodGhpcywgUk9PVF9OT0RFUywgcm9vdFtOT0RFU10pO1xuICAgICAgcHJpdmF0ZVNldCh0aGlzLCBPUFRJT05TLCByb290W09QVElPTlNdKTtcbiAgICAgIHByaXZhdGVTZXQodGhpcywgTElOS0VEX1JPT1RTLCBbXSk7XG4gICAgfVxuICAgIHByaXZhdGVTZXQodGhpcywgVU5SRU5ERVJFRCwgbm9kZXMpO1xuICAgIHByaXZhdGVTZXQodGhpcywgVVBEQVRFRF9CWSwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCB3cmFwcGVyXG4gICAqXG4gICAqIEByZXR1cm4ge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXNbUk9PVF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd3JhcHBlZCBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgZ2V0Tm9kZUludGVybmFsKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdFdyYXBwZXI6OmdldE5vZGUoKSBjYW4gb25seSBiZSBjYWxsZWQgd2hlbiB3cmFwcGluZyBvbmUgbm9kZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tOT0RFU11bMF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGhlIHdyYXBwZWQgY29tcG9uZW50cy5cbiAgICpcbiAgICogQHJldHVybiB7QXJyYXk8UmVhY3RDb21wb25lbnQ+fVxuICAgKi9cbiAgZ2V0Tm9kZXNJbnRlcm5hbCgpIHtcbiAgICByZXR1cm4gdGhpc1tOT0RFU107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd3JhcHBlZCBSZWFjdEVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH1cbiAgICovXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdnZXRFbGVtZW50JywgKCkgPT4gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKS5ub2RlVG9FbGVtZW50KHRoaXNbTk9ERV0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3cmFwcGVkIFJlYWN0RWxlbWVudHMuXG4gICAqXG4gICAqIEByZXR1cm4ge0FycmF5PFJlYWN0RWxlbWVudD59XG4gICAqL1xuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpc1tOT0RFU10ubWFwKChuKSA9PiBnZXRBZGFwdGVyKHRoaXNbT1BUSU9OU10pLm5vZGVUb0VsZW1lbnQobikpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgZ2V0Tm9kZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0V3JhcHBlcjo6Z2V0Tm9kZSgpIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFVzZSBSZWFjdFdyYXBwZXI6Omluc3RhbmNlKCkgaW5zdGVhZCcpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgZ2V0Tm9kZXMoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdFdyYXBwZXI6OmdldE5vZGVzKCkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvdXRlciBtb3N0IERPTUNvbXBvbmVudCBvZiB0aGUgY3VycmVudCB3cmFwcGVyLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtET01Db21wb25lbnR9XG4gICAqL1xuICBnZXRET01Ob2RlKCkge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBnZXRBZGFwdGVyKHRoaXNbT1BUSU9OU10pO1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnZ2V0RE9NTm9kZScsIChuKSA9PiBhZGFwdGVyLm5vZGVUb0hvc3ROb2RlKG4sIHRydWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgcm9vdCBjb21wb25lbnQgY29udGFpbmVkIGEgcmVmLCB5b3UgY2FuIGFjY2VzcyBpdCBoZXJlIGFuZCBnZXQgdGhlIHJlbGV2YW50XG4gICAqIHJlYWN0IGNvbXBvbmVudCBpbnN0YW5jZSBvciBIVE1MIGVsZW1lbnQgaW5zdGFuY2UuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBpcyBhbHNvIHRoZSByb290IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcmVmbmFtZVxuICAgKiBAcmV0dXJucyB7UmVhY3RDb21wb25lbnQgfCBIVE1MRWxlbWVudH1cbiAgICovXG4gIHJlZihyZWZuYW1lKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjpyZWYocmVmbmFtZSkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlKCkucmVmc1tyZWZuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3cmFwcGVyJ3MgdW5kZXJseWluZyBpbnN0YW5jZS5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8TXlDb21wb25lbnQgLz4pO1xuICAgKiBjb25zdCBpbnN0ID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuICAgKiBleHBlY3QoaW5zdCkudG8uYmUuaW5zdGFuY2VPZihNeUNvbXBvbmVudCk7XG4gICAqIGBgYFxuICAgKiBAcmV0dXJucyB7UmVhY3RDb21wb25lbnR8RE9NQ29tcG9uZW50fVxuICAgKi9cbiAgaW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdpbnN0YW5jZScsICgpID0+IHRoaXNbTk9ERV0uaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgYHdyYXBwaW5nQ29tcG9uZW50YCB3YXMgcGFzc2VkIGluIGBvcHRpb25zYCwgdGhpcyBtZXRob2RzIHJldHVybnMgYSBgUmVhY3RXcmFwcGVyYCBhcm91bmRcbiAgICogdGhlIHJlbmRlcmVkIGB3cmFwcGluZ0NvbXBvbmVudGAuIFRoaXMgYFJlYWN0V3JhcHBlcmAgY2FuIGJlIHVzZWQgdG8gdXBkYXRlIHRoZVxuICAgKiBgd3JhcHBpbmdDb21wb25lbnRgJ3MgcHJvcHMsIHN0YXRlLCBldGMuXG4gICAqXG4gICAqIEByZXR1cm5zIFJlYWN0V3JhcHBlclxuICAgKi9cbiAgZ2V0V3JhcHBpbmdDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjpnZXRXcmFwcGluZ0NvbXBvbmVudCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGUgcm9vdCcpO1xuICAgIH1cbiAgICBpZiAoIXRoaXNbT1BUSU9OU10ud3JhcHBpbmdDb21wb25lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjpnZXRXcmFwcGluZ0NvbXBvbmVudCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgdGhhdCB3YXMgb3JpZ2luYWxseSBwYXNzZWQgYSBgd3JhcHBpbmdDb21wb25lbnRgIG9wdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1tXUkFQUElOR19DT01QT05FTlRdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhIHJlLXJlbmRlci4gVXNlZnVsIHRvIHJ1biBiZWZvcmUgY2hlY2tpbmcgdGhlIHJlbmRlciBvdXRwdXQgaWYgc29tZXRoaW5nIGV4dGVybmFsXG4gICAqIG1heSBiZSB1cGRhdGluZyB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBzb21ld2hlcmUuXG4gICAqXG4gICAqIE5PVEU6IG5vIG1hdHRlciB3aGF0IGluc3RhbmNlIHRoaXMgaXMgY2FsbGVkIG9uLCBpdCB3aWxsIGFsd2F5cyB1cGRhdGUgdGhlIHJvb3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXNbUk9PVF07XG4gICAgaWYgKHRoaXMgIT09IHJvb3QpIHtcbiAgICAgIHJldHVybiByb290LnVwZGF0ZSgpO1xuICAgIH1cbiAgICBwcml2YXRlU2V0Tm9kZXModGhpcywgdGhpc1tSRU5ERVJFUl0uZ2V0Tm9kZSgpKTtcbiAgICB0aGlzW0xJTktFRF9ST09UU10uZm9yRWFjaCgobGlua2VkUm9vdCkgPT4ge1xuICAgICAgaWYgKGxpbmtlZFJvb3QgIT09IHRoaXNbVVBEQVRFRF9CWV0pIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICAgICAgLy8gT25seSB1cGRhdGUgYSBsaW5rZWQgaXQgcm9vdCBpZiBpdCBpcyBub3QgdGhlIG9yaWdpbmF0b3Igb2Ygb3VyIHVwZGF0ZSgpLlxuICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCB0byBwcmV2ZW50IGluZmluaXRlIHJlY3Vyc2lvbiB3aGVuIHRoZXJlIGlzIGEgYmktZGlyZWN0aW9uYWxcbiAgICAgICAgLy8gbGluayBiZXR3ZWVuIHR3byByb290cy5cbiAgICAgICAgbGlua2VkUm9vdFtVUERBVEVEX0JZXSA9IHRoaXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGlua2VkUm9vdC51cGRhdGUoKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBsaW5rZWRSb290W1VQREFURURfQlldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRoYXQgdW5tb3VudHMgdGhlIGNvbXBvbmVudC4gVGhpcyBjYW4gYmUgdXNlZCB0byBzaW11bGF0ZSBhIGNvbXBvbmVudCBnb2luZyB0aHJvdWdoXG4gICAqIGFuZCB1bm1vdW50L21vdW50IGxpZmVjeWNsZS5cbiAgICpcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIHVubW91bnQoKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjp1bm1vdW50KCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIHRoaXMuc2luZ2xlKCd1bm1vdW50JywgKCkgPT4ge1xuICAgICAgdGhpc1tSRU5ERVJFUl0udW5tb3VudCgpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IHJlLW1vdW50cyB0aGUgY29tcG9uZW50LCBpZiBpdCBpcyBub3QgY3VycmVudGx5IG1vdW50ZWQuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gc2ltdWxhdGUgYSBjb21wb25lbnQgZ29pbmcgdGhyb3VnaFxuICAgKiBhbiB1bm1vdW50L21vdW50IGxpZmVjeWNsZS5cbiAgICpcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIG1vdW50KCkge1xuICAgIGlmICh0aGlzW1JPT1RdICE9PSB0aGlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0V3JhcHBlcjo6bW91bnQoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhlIHJvb3QnKTtcbiAgICB9XG4gICAgdGhpc1tSRU5ERVJFUl0ucmVuZGVyKHRoaXNbVU5SRU5ERVJFRF0sIHRoaXNbT1BUSU9OU10uY29udGV4dCwgKCkgPT4gdGhpcy51cGRhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQSBtZXRob2QgdGhhdCBzZXRzIHRoZSBwcm9wcyBvZiB0aGUgcm9vdCBjb21wb25lbnQsIGFuZCByZS1yZW5kZXJzLiBVc2VmdWwgZm9yIHdoZW4geW91IGFyZVxuICAgKiB3YW50aW5nIHRvIHRlc3QgaG93IHRoZSBjb21wb25lbnQgYmVoYXZlcyBvdmVyIHRpbWUgd2l0aCBjaGFuZ2luZyBwcm9wcy4gQ2FsbGluZyB0aGlzLCBmb3JcbiAgICogaW5zdGFuY2UsIHdpbGwgY2FsbCB0aGUgYGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNgIGxpZmVjeWNsZSBtZXRob2QuXG4gICAqXG4gICAqIFNpbWlsYXIgdG8gYHNldFN0YXRlYCwgdGhpcyBtZXRob2QgYWNjZXB0cyBhIHByb3BzIG9iamVjdCBhbmQgd2lsbCBtZXJnZSBpdCBpbiB3aXRoIHRoZSBhbHJlYWR5XG4gICAqIGV4aXN0aW5nIHByb3BzLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIGluc3RhbmNlIHRoYXQgaXMgYWxzbyB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIG9iamVjdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gICAqL1xuICBzZXRQcm9wcyhwcm9wcywgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpc1tST09UXSAhPT0gdGhpcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdFdyYXBwZXI6OnNldFByb3BzKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWN0V3JhcHBlcjo6c2V0UHJvcHMoKSBleHBlY3RzIGEgZnVuY3Rpb24gYXMgaXRzIHNlY29uZCBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICB0aGlzW1VOUkVOREVSRURdID0gY2xvbmVFbGVtZW50KGFkYXB0ZXIsIHRoaXNbVU5SRU5ERVJFRF0sIHByb3BzKTtcbiAgICB0aGlzW1JFTkRFUkVSXS5yZW5kZXIodGhpc1tVTlJFTkRFUkVEXSwgbnVsbCwgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRvIGludm9rZSBgc2V0U3RhdGVgIG9uIHRoZSByb290IGNvbXBvbmVudCBpbnN0YW5jZSBzaW1pbGFyIHRvIGhvdyB5b3UgbWlnaHQgaW4gdGhlXG4gICAqIGRlZmluaXRpb24gb2YgdGhlIGNvbXBvbmVudCwgYW5kIHJlLXJlbmRlcnMuICBUaGlzIG1ldGhvZCBpcyB1c2VmdWwgZm9yIHRlc3RpbmcgeW91ciBjb21wb25lbnRcbiAgICogaW4gaGFyZCB0byBhY2hpZXZlIHN0YXRlcywgaG93ZXZlciBzaG91bGQgYmUgdXNlZCBzcGFyaW5nbHkuIElmIHBvc3NpYmxlLCB5b3Ugc2hvdWxkIHV0aWxpemVcbiAgICogeW91ciBjb21wb25lbnQncyBleHRlcm5hbCBBUEkgaW4gb3JkZXIgdG8gZ2V0IGl0IGludG8gd2hhdGV2ZXIgc3RhdGUgeW91IHdhbnQgdG8gdGVzdCwgaW4gb3JkZXJcbiAgICogdG8gYmUgYXMgYWNjdXJhdGUgb2YgYSB0ZXN0IGFzIHBvc3NpYmxlLiBUaGlzIGlzIG5vdCBhbHdheXMgcHJhY3RpY2FsLCBob3dldmVyLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIGluc3RhbmNlIHRoYXQgaXMgYWxzbyB0aGUgcm9vdCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIHRvIG1lcmdlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIHNldFN0YXRlKHN0YXRlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKCkgPT09IG51bGwgfHwgdGhpcy5nZXROb2RlSW50ZXJuYWwoKS5ub2RlVHlwZSAhPT0gJ2NsYXNzJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdFdyYXBwZXI6OnNldFN0YXRlKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVhY3RXcmFwcGVyOjpzZXRTdGF0ZSgpIGV4cGVjdHMgYSBmdW5jdGlvbiBhcyBpdHMgc2Vjb25kIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UoKS5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlKCk7XG4gICAgICAgIGlmIChhZGFwdGVyLmludm9rZVNldFN0YXRlQ2FsbGJhY2spIHtcbiAgICAgICAgICBhZGFwdGVyLmludm9rZVNldFN0YXRlQ2FsbGJhY2soaW5zdGFuY2UsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRoYXQgc2V0cyB0aGUgY29udGV4dCBvZiB0aGUgcm9vdCBjb21wb25lbnQsIGFuZCByZS1yZW5kZXJzLiBVc2VmdWwgZm9yIHdoZW4geW91IGFyZVxuICAgKiB3YW50aW5nIHRvIHRlc3QgaG93IHRoZSBjb21wb25lbnQgYmVoYXZlcyBvdmVyIHRpbWUgd2l0aCBjaGFuZ2luZyBjb250ZXh0cy5cbiAgICpcbiAgICogTk9URTogY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgd3JhcHBlciBpbnN0YW5jZSB0aGF0IGlzIGFsc28gdGhlIHJvb3QgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IG9iamVjdFxuICAgKiBAcmV0dXJucyB7UmVhY3RXcmFwcGVyfVxuICAgKi9cbiAgc2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gIT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjpzZXRDb250ZXh0KCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIGlmICghdGhpc1tPUFRJT05TXS5jb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0V3JhcHBlcjo6c2V0Q29udGV4dCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgdGhhdCB3YXMgb3JpZ2luYWxseSBwYXNzZWQgYSBjb250ZXh0IG9wdGlvbicpO1xuICAgIH1cbiAgICB0aGlzW1JFTkRFUkVSXS5yZW5kZXIodGhpc1tVTlJFTkRFUkVEXSwgY29udGV4dCwgKCkgPT4gdGhpcy51cGRhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgYSBnaXZlbiByZWFjdCBlbGVtZW50IGV4aXN0cyBpbiB0aGUgbW91bnQgcmVuZGVyIHRyZWUuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiBjb25zdCB3cmFwcGVyID0gbW91bnQoPE15Q29tcG9uZW50IC8+KTtcbiAgICogZXhwZWN0KHdyYXBwZXIuY29udGFpbnMoPGRpdiBjbGFzc05hbWU9XCJmb28gYmFyXCIgLz4pKS50by5lcXVhbCh0cnVlKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fEFycmF5PFJlYWN0RWxlbWVudD59IG5vZGVPck5vZGVzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgY29udGFpbnMobm9kZU9yTm9kZXMpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcblxuICAgIGNvbnN0IHByZWRpY2F0ZSA9IEFycmF5LmlzQXJyYXkobm9kZU9yTm9kZXMpXG4gICAgICA/IChvdGhlcikgPT4gY29udGFpbnNDaGlsZHJlblN1YkFycmF5KFxuICAgICAgICBub2RlRXF1YWwsXG4gICAgICAgIG90aGVyLFxuICAgICAgICBub2RlT3JOb2Rlcy5tYXAoKG5vZGUpID0+IGFkYXB0ZXIuZWxlbWVudFRvTm9kZShub2RlKSksXG4gICAgICApXG4gICAgICA6IChvdGhlcikgPT4gbm9kZUVxdWFsKGFkYXB0ZXIuZWxlbWVudFRvTm9kZShub2RlT3JOb2RlcyksIG90aGVyKTtcblxuICAgIHJldHVybiBmaW5kV2hlcmVVbndyYXBwZWQodGhpcywgcHJlZGljYXRlKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gcmVhY3QgZWxlbWVudCBleGlzdHMgaW4gdGhlIGN1cnJlbnQgcmVuZGVyIHRyZWUuXG4gICAqIEl0IHdpbGwgZGV0ZXJtaW5lIGlmIG9uZSBvZiB0aGUgd3JhcHBlcnMgZWxlbWVudCBcImxvb2tzIGxpa2VcIiB0aGUgZXhwZWN0ZWRcbiAgICogZWxlbWVudCBieSBjaGVja2luZyBpZiBhbGwgcHJvcHMgb2YgdGhlIGV4cGVjdGVkIGVsZW1lbnQgYXJlIHByZXNlbnRcbiAgICogb24gdGhlIHdyYXBwZXJzIGVsZW1lbnQgYW5kIGVxdWFscyB0byBlYWNoIG90aGVyLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogLy8gTXlDb21wb25lbnQgb3V0cHV0cyA8ZGl2PjxkaXYgY2xhc3M9XCJmb29cIj5IZWxsbzwvZGl2PjwvZGl2PlxuICAgKiBjb25zdCB3cmFwcGVyID0gbW91bnQoPE15Q29tcG9uZW50IC8+KTtcbiAgICogZXhwZWN0KHdyYXBwZXIuY29udGFpbnNNYXRjaGluZ0VsZW1lbnQoPGRpdj5IZWxsbzwvZGl2PikpLnRvLmVxdWFsKHRydWUpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBjb250YWluc01hdGNoaW5nRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgcnN0Tm9kZSA9IGdldEFkYXB0ZXIodGhpc1tPUFRJT05TXSkuZWxlbWVudFRvTm9kZShub2RlKTtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSAob3RoZXIpID0+IG5vZGVNYXRjaGVzKHJzdE5vZGUsIG90aGVyLCAoYSwgYikgPT4gYSA8PSBiKTtcbiAgICByZXR1cm4gZmluZFdoZXJlVW53cmFwcGVkKHRoaXMsIHByZWRpY2F0ZSkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBhbGwgdGhlIGdpdmVuIHJlYWN0IGVsZW1lbnRzIGV4aXN0IGluIHRoZSBjdXJyZW50IHJlbmRlciB0cmVlLlxuICAgKiBJdCB3aWxsIGRldGVybWluZSBpZiBvbmUgb2YgdGhlIHdyYXBwZXJzIGVsZW1lbnQgXCJsb29rcyBsaWtlXCIgdGhlIGV4cGVjdGVkXG4gICAqIGVsZW1lbnQgYnkgY2hlY2tpbmcgaWYgYWxsIHByb3BzIG9mIHRoZSBleHBlY3RlZCBlbGVtZW50IGFyZSBwcmVzZW50XG4gICAqIG9uIHRoZSB3cmFwcGVycyBlbGVtZW50IGFuZCBlcXVhbHMgdG8gZWFjaCBvdGhlci5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8TXlDb21wb25lbnQgLz4pO1xuICAgKiBleHBlY3Qod3JhcHBlci5jb250YWluc0FsbE1hdGNoaW5nRWxlbWVudHMoW1xuICAgKiAgIDxkaXY+SGVsbG88L2Rpdj4sXG4gICAqICAgPGRpdj5Hb29kYnllPC9kaXY+LFxuICAgKiBdKSkudG8uZXF1YWwodHJ1ZSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PFJlYWN0RWxlbWVudD59IG5vZGVzXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgY29udGFpbnNBbGxNYXRjaGluZ0VsZW1lbnRzKG5vZGVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm9kZXMgc2hvdWxkIGJlIGFuIEFycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzLmV2ZXJ5KChub2RlKSA9PiB0aGlzLmNvbnRhaW5zTWF0Y2hpbmdFbGVtZW50KG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBvbmUgb2YgdGhlIGdpdmVuIHJlYWN0IGVsZW1lbnRzIGV4aXN0cyBpbiB0aGUgY3VycmVudCByZW5kZXIgdHJlZS5cbiAgICogSXQgd2lsbCBkZXRlcm1pbmUgaWYgb25lIG9mIHRoZSB3cmFwcGVycyBlbGVtZW50IFwibG9va3MgbGlrZVwiIHRoZSBleHBlY3RlZFxuICAgKiBlbGVtZW50IGJ5IGNoZWNraW5nIGlmIGFsbCBwcm9wcyBvZiB0aGUgZXhwZWN0ZWQgZWxlbWVudCBhcmUgcHJlc2VudFxuICAgKiBvbiB0aGUgd3JhcHBlcnMgZWxlbWVudCBhbmQgZXF1YWxzIHRvIGVhY2ggb3RoZXIuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiBjb25zdCB3cmFwcGVyID0gbW91bnQoPE15Q29tcG9uZW50IC8+KTtcbiAgICogZXhwZWN0KHdyYXBwZXIuY29udGFpbnNBbnlNYXRjaGluZ0VsZW1lbnRzKFtcbiAgICogICA8ZGl2PkhlbGxvPC9kaXY+LFxuICAgKiAgIDxkaXY+R29vZGJ5ZTwvZGl2PixcbiAgICogXSkpLnRvLmVxdWFsKHRydWUpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxSZWFjdEVsZW1lbnQ+fSBub2Rlc1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGNvbnRhaW5zQW55TWF0Y2hpbmdFbGVtZW50cyhub2Rlcykge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG5vZGVzKSAmJiBub2Rlcy5zb21lKChub2RlKSA9PiB0aGlzLmNvbnRhaW5zTWF0Y2hpbmdFbGVtZW50KG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBhIGdpdmVuIHJlYWN0IGVsZW1lbnQgZXhpc3RzIGluIHRoZSByZW5kZXIgdHJlZS5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8TXlDb21wb25lbnQgLz4pO1xuICAgKiBleHBlY3Qod3JhcHBlci5jb250YWlucyg8ZGl2IGNsYXNzTmFtZT1cImZvbyBiYXJcIiAvPikpLnRvLmVxdWFsKHRydWUpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMobm9kZSkge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnZXF1YWxzJywgKCkgPT4gbm9kZUVxdWFsKHRoaXMuZ2V0Tm9kZUludGVybmFsKCksIG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBhIGdpdmVuIHJlYWN0IGVsZW1lbnQgbWF0Y2hlcyB0aGUgcmVuZGVyIHRyZWUuXG4gICAqIE1hdGNoIGlzIGJhc2VkIG9uIHRoZSBleHBlY3RlZCBlbGVtZW50IGFuZCBub3Qgb24gd3JhcHBlciByb290IG5vZGUuXG4gICAqIEl0IHdpbGwgZGV0ZXJtaW5lIGlmIHRoZSB3cmFwcGVyIHJvb3Qgbm9kZSBcImxvb2tzIGxpa2VcIiB0aGUgZXhwZWN0ZWRcbiAgICogZWxlbWVudCBieSBjaGVja2luZyBpZiBhbGwgcHJvcHMgb2YgdGhlIGV4cGVjdGVkIGVsZW1lbnQgYXJlIHByZXNlbnRcbiAgICogb24gdGhlIHdyYXBwZXIgcm9vdCBub2RlIGFuZCBlcXVhbHMgdG8gZWFjaCBvdGhlci5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqIC8vIE15Q29tcG9uZW50IG91dHB1dHMgPGRpdiBjbGFzcz1cImZvb1wiPkhlbGxvPC9kaXY+XG4gICAqIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8TXlDb21wb25lbnQgLz4pO1xuICAgKiBleHBlY3Qod3JhcHBlci5tYXRjaGVzRWxlbWVudCg8ZGl2PkhlbGxvPC9kaXY+KSkudG8uZXF1YWwodHJ1ZSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXNFbGVtZW50KG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ21hdGNoZXNFbGVtZW50JywgKCkgPT4ge1xuICAgICAgY29uc3QgYWRhcHRlciA9IGdldEFkYXB0ZXIodGhpc1tPUFRJT05TXSk7XG4gICAgICBjb25zdCByc3ROb2RlID0gYWRhcHRlci5lbGVtZW50VG9Ob2RlKG5vZGUpO1xuICAgICAgcmV0dXJuIG5vZGVNYXRjaGVzKHJzdE5vZGUsIHRoaXMuZ2V0Tm9kZUludGVybmFsKCksIChhLCBiKSA9PiBhIDw9IGIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGV2ZXJ5IG5vZGUgaW4gdGhlIHJlbmRlciB0cmVlIG9mIHRoZSBjdXJyZW50IHdyYXBwZXIgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBzZWxlY3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIGZpbmQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy53cmFwKHJlZHVjZVRyZWVzQnlTZWxlY3RvcihzZWxlY3RvciwgdGhpcy5nZXROb2Rlc0ludGVybmFsKCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGN1cnJlbnQgbm9kZSBtYXRjaGVzIGEgcHJvdmlkZWQgc2VsZWN0b3IuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpcyhzZWxlY3Rvcikge1xuICAgIGNvbnN0IHByZWRpY2F0ZSA9IGJ1aWxkUHJlZGljYXRlKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ2lzJywgKG4pID0+IHByZWRpY2F0ZShuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjb21wb25lbnQgcmVuZGVyZWQgbm90aGluZywgaS5lLiwgbnVsbCBvciBmYWxzZS5cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0VtcHR5UmVuZGVyKCkge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5nZXROb2RlSW50ZXJuYWwoKTtcblxuICAgIHJldHVybiByZW5kZXJlZERpdmUobm9kZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgd3JhcHBlciBpbnN0YW5jZSB3aXRoIG9ubHkgdGhlIG5vZGVzIG9mIHRoZSBjdXJyZW50IHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBtYXRjaFxuICAgKiB0aGUgcHJvdmlkZWQgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGVcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIGZpbHRlcldoZXJlKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmaWx0ZXJXaGVyZVVud3JhcHBlZCh0aGlzLCAobikgPT4gcHJlZGljYXRlKHRoaXMud3JhcChuKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgd3JhcHBlciBpbnN0YW5jZSB3aXRoIG9ubHkgdGhlIG5vZGVzIG9mIHRoZSBjdXJyZW50IHdyYXBwZXIgaW5zdGFuY2UgdGhhdCBtYXRjaFxuICAgKiB0aGUgcHJvdmlkZWQgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RW56eW1lU2VsZWN0b3J9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gICAqL1xuICBmaWx0ZXIoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSBidWlsZFByZWRpY2F0ZShzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGZpbHRlcldoZXJlVW53cmFwcGVkKHRoaXMsIHByZWRpY2F0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyB3cmFwcGVyIGluc3RhbmNlIHdpdGggb25seSB0aGUgbm9kZXMgb2YgdGhlIGN1cnJlbnQgd3JhcHBlciB0aGF0IGRpZCBub3QgbWF0Y2hcbiAgICogdGhlIHByb3ZpZGVkIHNlbGVjdG9yLiBFc3NlbnRpYWxseSB0aGUgaW52ZXJzZSBvZiBgZmlsdGVyYC5cbiAgICpcbiAgICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIG5vdChzZWxlY3Rvcikge1xuICAgIGNvbnN0IHByZWRpY2F0ZSA9IGJ1aWxkUHJlZGljYXRlKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZmlsdGVyV2hlcmVVbndyYXBwZWQodGhpcywgKG4pID0+ICFwcmVkaWNhdGUobikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgdGhlIHJlbmRlcmVkIHRleHQgb2YgdGhlIGN1cnJlbnQgcmVuZGVyIHRyZWUuICBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZVxuICAgKiBsb29rZWQgYXQgd2l0aCBza2VwdGljaXNtIGlmIGJlaW5nIHVzZWQgdG8gdGVzdCB3aGF0IHRoZSBhY3R1YWwgSFRNTCBvdXRwdXQgb2YgdGhlIGNvbXBvbmVudFxuICAgKiB3aWxsIGJlLiBJZiB0aGF0IGlzIHdoYXQgeW91IHdvdWxkIGxpa2UgdG8gdGVzdCwgdXNlIGVuenltZSdzIGByZW5kZXJgIGZ1bmN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIHRleHQoKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IGdldEFkYXB0ZXIodGhpc1tPUFRJT05TXSk7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCd0ZXh0JywgKG4pID0+IGdldFRleHRGcm9tSG9zdE5vZGVzKG4sIGFkYXB0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBIVE1MIG9mIHRoZSBub2RlLlxuICAgKlxuICAgKiBOT1RFOiBjYW4gb25seSBiZSBjYWxsZWQgb24gYSB3cmFwcGVyIG9mIGEgc2luZ2xlIG5vZGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBodG1sKCkge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBnZXRBZGFwdGVyKHRoaXNbT1BUSU9OU10pO1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnaHRtbCcsIChuKSA9PiBnZXRIVE1MRnJvbUhvc3ROb2RlcyhuLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBub2RlIHJlbmRlcmVkIHRvIEhUTUwgYW5kIHdyYXBwZWQgaW4gYSBDaGVlcmlvV3JhcHBlci5cbiAgICpcbiAgICogTk9URTogY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgd3JhcHBlciBvZiBhIHNpbmdsZSBub2RlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7Q2hlZXJpb1dyYXBwZXJ9XG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaHRtbCgpO1xuICAgIHJldHVybiBsb2FkQ2hlZXJpb1Jvb3QoaHRtbCk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBzaW11bGF0ZSBldmVudHMuIFBhc3MgYW4gZXZlbnRuYW1lIGFuZCAob3B0aW9uYWxseSkgZXZlbnQgYXJndW1lbnRzLiBUaGlzIG1ldGhvZCBvZlxuICAgKiB0ZXN0aW5nIGV2ZW50cyBzaG91bGQgYmUgbWV0IHdpdGggc29tZSBza2VwdGljaXNtLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG1vY2sgKG9wdGlvbmFsKVxuICAgKiBAcmV0dXJucyB7UmVhY3RXcmFwcGVyfVxuICAgKi9cbiAgc2ltdWxhdGUoZXZlbnQsIG1vY2sgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgnc2ltdWxhdGUnLCAobikgPT4ge1xuICAgICAgdGhpc1tSRU5ERVJFUl0uc2ltdWxhdGVFdmVudChuLCBldmVudCwgbW9jayk7XG4gICAgICB0aGlzW1JPT1RdLnVwZGF0ZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBzaW11bGF0ZSB0aHJvd2luZyBhIHJlbmRlcmluZyBlcnJvci4gUGFzcyBhbiBlcnJvciB0byB0aHJvdy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVycm9yXG4gICAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gICAqL1xuICBzaW11bGF0ZUVycm9yKGVycm9yKSB7XG4gICAgaWYgKHRoaXNbUk9PVF0gPT09IHRoaXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjpzaW11bGF0ZUVycm9yKCkgbWF5IG5vdCBiZSBjYWxsZWQgb24gdGhlIHJvb3QnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ3NpbXVsYXRlRXJyb3InLCAodGhpc05vZGUpID0+IHtcbiAgICAgIGlmICh0aGlzTm9kZS5ub2RlVHlwZSA9PT0gJ2hvc3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjpzaW11bGF0ZUVycm9yKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGN1c3RvbSBjb21wb25lbnRzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpc1tSRU5ERVJFUl07XG4gICAgICBpZiAodHlwZW9mIHJlbmRlcmVyLnNpbXVsYXRlRXJyb3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigneW91ciBhZGFwdGVyIGRvZXMgbm90IHN1cHBvcnQgYHNpbXVsYXRlRXJyb3JgLiBUcnkgdXBncmFkaW5nIGl0IScpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb290Tm9kZSA9IGdldFJvb3ROb2RlSW50ZXJuYWwodGhpcyk7XG4gICAgICBjb25zdCBub2RlSGllcmFyY2h5ID0gW3RoaXNOb2RlXS5jb25jYXQobm9kZVBhcmVudHModGhpcywgdGhpc05vZGUpKTtcbiAgICAgIHJlbmRlcmVyLnNpbXVsYXRlRXJyb3Iobm9kZUhpZXJhcmNoeSwgcm9vdE5vZGUsIGVycm9yKTtcblxuICAgICAgdGhpc1tST09UXS51cGRhdGUoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb3BzIGhhc2ggZm9yIHRoZSByb290IG5vZGUgb2YgdGhlIHdyYXBwZXIuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHByb3BzKCkge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZSgncHJvcHMnLCBwcm9wc09mTm9kZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhdGUgaGFzaCBmb3IgdGhlIHJvb3Qgbm9kZSBvZiB0aGUgd3JhcHBlci4gT3B0aW9uYWxseSBwYXNzIGluIGEgcHJvcCBuYW1lIGFuZCBpdFxuICAgKiB3aWxsIHJldHVybiBqdXN0IHRoYXQgdmFsdWUuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgKG9wdGlvbmFsKVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHN0YXRlKG5hbWUpIHtcbiAgICBjb25zdCB0aGlzTm9kZSA9IHRoaXNbUk9PVF0gPT09IHRoaXMgPyB0aGlzW1JFTkRFUkVSXS5nZXROb2RlKCkgOiB0aGlzLmdldE5vZGVJbnRlcm5hbCgpO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKCkgPT09IG51bGwgfHwgdGhpc05vZGUubm9kZVR5cGUgIT09ICdjbGFzcycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjpzdGF0ZSgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBjbGFzcyBjb21wb25lbnRzJyk7XG4gICAgfVxuICAgIGNvbnN0IF9zdGF0ZSA9IHRoaXMuc2luZ2xlKCdzdGF0ZScsICgpID0+IHRoaXMuaW5zdGFuY2UoKS5zdGF0ZSk7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKF9zdGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFJlYWN0V3JhcHBlcjo6c3RhdGUoXCIke25hbWV9XCIpIHJlcXVpcmVzIHRoYXQgXFxgc3RhdGVcXGAgbm90IGJlIFxcYG51bGxcXGAgb3IgXFxgdW5kZWZpbmVkXFxgYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3N0YXRlW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gX3N0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnRleHQgaGFzaCBmb3IgdGhlIHJvb3Qgbm9kZSBvZiB0aGUgd3JhcHBlci5cbiAgICogT3B0aW9uYWxseSBwYXNzIGluIGEgcHJvcCBuYW1lIGFuZCBpdCB3aWxsIHJldHVybiBqdXN0IHRoYXQgdmFsdWUuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgKG9wdGlvbmFsKVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGNvbnRleHQobmFtZSkge1xuICAgIGlmICh0aGlzW1JPT1RdICE9PSB0aGlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0V3JhcHBlcjo6Y29udGV4dCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGUgcm9vdCcpO1xuICAgIH1cbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuc2luZ2xlKCdjb250ZXh0JywgKCkgPT4gdGhpcy5pbnN0YW5jZSgpKTtcbiAgICBpZiAoaW5zdGFuY2UgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3RXcmFwcGVyOjpjb250ZXh0KCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGNvbXBvbmVudHMgd2l0aCBpbnN0YW5jZXMnKTtcbiAgICB9XG4gICAgY29uc3QgX2NvbnRleHQgPSBpbnN0YW5jZS5jb250ZXh0O1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBfY29udGV4dFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIF9jb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgd3JhcHBlciB3aXRoIGFsbCBvZiB0aGUgY2hpbGRyZW4gb2YgdGhlIGN1cnJlbnQgd3JhcHBlci5cbiAgICpcbiAgICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gW3NlbGVjdG9yXVxuICAgKiBAcmV0dXJucyB7UmVhY3RXcmFwcGVyfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICBjb25zdCBhbGxDaGlsZHJlbiA9IHRoaXMuZmxhdE1hcCgobikgPT4gY2hpbGRyZW5PZk5vZGUobi5nZXROb2RlSW50ZXJuYWwoKSkpO1xuICAgIHJldHVybiBzZWxlY3RvciA/IGFsbENoaWxkcmVuLmZpbHRlcihzZWxlY3RvcikgOiBhbGxDaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmV3IHdyYXBwZXIgd2l0aCBhIHNwZWNpZmljIGNoaWxkXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdXG4gICAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gICAqL1xuICBjaGlsZEF0KGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdjaGlsZEF0JywgKCkgPT4gdGhpcy5jaGlsZHJlbigpLmF0KGluZGV4KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHdyYXBwZXIgYXJvdW5kIGFsbCBvZiB0aGUgcGFyZW50cy9hbmNlc3RvcnMgb2YgdGhlIHdyYXBwZXIuIERvZXMgbm90IGluY2x1ZGUgdGhlIG5vZGVcbiAgICogaW4gdGhlIGN1cnJlbnQgd3JhcHBlci5cbiAgICpcbiAgICogTk9URTogY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgd3JhcHBlciBvZiBhIHNpbmdsZSBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge0VuenltZVNlbGVjdG9yfSBbc2VsZWN0b3JdXG4gICAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdwYXJlbnRzJywgKG4pID0+IHtcbiAgICAgIGNvbnN0IGFsbFBhcmVudHMgPSB0aGlzLndyYXAobm9kZVBhcmVudHModGhpcywgbikpO1xuICAgICAgcmV0dXJuIHNlbGVjdG9yID8gYWxsUGFyZW50cy5maWx0ZXIoc2VsZWN0b3IpIDogYWxsUGFyZW50cztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgd3JhcHBlciBhcm91bmQgdGhlIGltbWVkaWF0ZSBwYXJlbnQgb2YgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICpcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIHBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5mbGF0TWFwKChuKSA9PiBbbi5wYXJlbnRzKCkuZ2V0KDApXSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5pcyhzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGluZ0FuY2VzdG9ycyA9IHRoaXMucGFyZW50cygpLmZpbHRlcihzZWxlY3Rvcik7XG4gICAgcmV0dXJuIG1hdGNoaW5nQW5jZXN0b3JzLmxlbmd0aCA+IDAgPyBtYXRjaGluZ0FuY2VzdG9ycy5maXJzdCgpIDogdGhpcy5maW5kV2hlcmUoKCkgPT4gZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mICBwcm9wIHdpdGggdGhlIGdpdmVuIG5hbWUgb2YgdGhlIHJvb3Qgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcHJvcChwcm9wTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzKClbcHJvcE5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gaW52b2tlIGEgZnVuY3Rpb24gcHJvcC5cbiAgICogV2lsbCBpbnZva2UgYW4gZnVuY3Rpb24gcHJvcCBhbmQgcmV0dXJuIGl0cyB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gICAqIEByZXR1cm5zIHtBbnl9XG4gICAqL1xuICBpbnZva2UocHJvcE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ2ludm9rZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnByb3AocHJvcE5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWN0V3JhcHBlcjo6aW52b2tlKCkgcmVxdWlyZXMgdGhlIG5hbWUgb2YgYSBwcm9wIHdob3NlIHZhbHVlIGlzIGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHR5cGVvZiB0aGlzW1JFTkRFUkVSXS53cmFwSW52b2tlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyB0aGlzW1JFTkRFUkVSXS53cmFwSW52b2tlKCgpID0+IGhhbmRsZXIoLi4uYXJncykpXG4gICAgICAgICAgOiBoYW5kbGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzW1JPT1RdLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB3cmFwcGVyIG9mIHRoZSBub2RlIHJlbmRlcmVkIGJ5IHRoZSBwcm92aWRlZCByZW5kZXIgcHJvcC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICovXG4gIHJlbmRlclByb3AocHJvcE5hbWUpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICBpZiAodHlwZW9mIGFkYXB0ZXIud3JhcCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3lvdXIgYWRhcHRlciBkb2VzIG5vdCBzdXBwb3J0IGB3cmFwYC4gVHJ5IHVwZ3JhZGluZyBpdCEnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ3JlbmRlclByb3AnLCAobikgPT4ge1xuICAgICAgaWYgKG4ubm9kZVR5cGUgPT09ICdob3N0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWFjdFdyYXBwZXI6OnJlbmRlclByb3AoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gY3VzdG9tIGNvbXBvbmVudHMnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcHJvcE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWN0V3JhcHBlcjo6cmVuZGVyUHJvcCgpOiBgcHJvcE5hbWVgIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgICAgaWYgKCFoYXMocHJvcHMsIHByb3BOYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlYWN0V3JhcHBlcjo6cmVuZGVyUHJvcCgpOiBubyBwcm9wIGNhbGxlZCDigJwke3Byb3BOYW1lfeKAnCBmb3VuZGApO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgUmVhY3RXcmFwcGVyOjpyZW5kZXJQcm9wKCk6IGV4cGVjdGVkIHByb3Ag4oCcJHtwcm9wTmFtZX3igJwgdG8gY29udGFpbiBhIGZ1bmN0aW9uLCBidXQgaXQgaG9sZHMg4oCcJHt0eXBlb2YgcHJvcFZhbHVlfeKAnGApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHByb3BWYWx1ZSguLi5hcmdzKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlZCA9IGFkYXB0ZXIud3JhcChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcCh3cmFwcGVkLCBudWxsLCB0aGlzW09QVElPTlNdKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUga2V5IGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50IG5vZGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdrZXknLCAobikgPT4gKG4ua2V5ID09PSB1bmRlZmluZWQgPyBudWxsIDogbi5rZXkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSByb290IG5vZGUgb2YgdGhpcyB3cmFwcGVyLiBJZiBpdCdzIGEgY29tcG9zaXRlIGNvbXBvbmVudCwgdGhpcyB3aWxsIGJlXG4gICAqIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IuIElmIGl0J3MgbmF0aXZlIERPTSBub2RlLCBpdCB3aWxsIGJlIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfEZ1bmN0aW9ufVxuICAgKi9cbiAgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ3R5cGUnLCAobikgPT4gdHlwZU9mTm9kZShuKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcm9vdCBub2RlIG9mIHRoaXMgd3JhcHBlci5cbiAgICpcbiAgICogSW4gb3JkZXIgb2YgcHJlY2VkZW5jZSA9PiB0eXBlLmRpc3BsYXlOYW1lIC0+IHR5cGUubmFtZSAtPiB0eXBlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgbmFtZSgpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcih0aGlzW09QVElPTlNdKTtcbiAgICByZXR1cm4gdGhpcy5zaW5nbGUoJ25hbWUnLCAobikgPT4gKFxuICAgICAgYWRhcHRlci5kaXNwbGF5TmFtZU9mTm9kZSA/IGFkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUobikgOiBkaXNwbGF5TmFtZU9mTm9kZShuKVxuICAgICkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGN1cnJlbnQgcm9vdCBub2RlIGhhcyB0aGUgZ2l2ZW4gY2xhc3MgbmFtZSBvciBub3QuXG4gICAqXG4gICAqIE5PVEU6IGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBhIHdyYXBwZXIgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnc3RyaW5nJyAmJiBjbGFzc05hbWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybignSXQgbG9va3MgbGlrZSB5b3VcXCdyZSBjYWxsaW5nIGBSZWFjdFdyYXBwZXI6Omhhc0NsYXNzKClgIHdpdGggYSBDU1Mgc2VsZWN0b3IuIGhhc0NsYXNzKCkgZXhwZWN0cyBhIGNsYXNzIG5hbWUsIG5vdCBhIENTUyBzZWxlY3Rvci4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xlKCdoYXNDbGFzcycsIChuKSA9PiBoYXNDbGFzc05hbWUobiwgY2xhc3NOYW1lKSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIG5vZGUgb2YgdGhlIGN1cnJlbnQgd3JhcHBlciBhbmQgZXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIHdpdGggYVxuICAgKiB3cmFwcGVyIGFyb3VuZCB0aGUgY29ycmVzcG9uZGluZyBub2RlIHBhc3NlZCBpbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gICAqL1xuICBmb3JFYWNoKGZuKSB7XG4gICAgdGhpcy5nZXROb2Rlc0ludGVybmFsKCkuZm9yRWFjaCgobiwgaSkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLndyYXAobiksIGkpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIHRoZSBjdXJyZW50IGFycmF5IG9mIG5vZGVzIHRvIGFub3RoZXIgYXJyYXkuIEVhY2ggbm9kZSBpcyBwYXNzZWQgaW4gYXMgYSBgUmVhY3RXcmFwcGVyYFxuICAgKiB0byB0aGUgbWFwIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBtYXAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXROb2Rlc0ludGVybmFsKCkubWFwKChuLCBpKSA9PiBmbi5jYWxsKHRoaXMsIHRoaXMud3JhcChuKSwgaSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHVjZXMgdGhlIGN1cnJlbnQgYXJyYXkgb2Ygbm9kZXMgdG8gYW5vdGhlciBhcnJheS5cbiAgICogRWFjaCBub2RlIGlzIHBhc3NlZCBpbiBhcyBhIGBTaGFsbG93V3JhcHBlcmAgdG8gdGhlIHJlZHVjZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdGhlIHJlZHVjZXIgZnVuY3Rpb25cbiAgICogQHBhcmFtIHsqfSBpbml0aWFsVmFsdWUgLSB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlZHVjZShmbiwgaW5pdGlhbFZhbHVlID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXROb2Rlc0ludGVybmFsKCkucmVkdWNlKFxuICAgICAgICAoYWNjdW0sIG4sIGkpID0+IGZuLmNhbGwodGhpcywgYWNjdW0sIHRoaXMud3JhcChuKSwgaSksXG4gICAgICAgIGluaXRpYWxWYWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldE5vZGVzSW50ZXJuYWwoKS5yZWR1Y2UoKGFjY3VtLCBuLCBpKSA9PiBmbi5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgIGkgPT09IDEgPyB0aGlzLndyYXAoYWNjdW0pIDogYWNjdW0sXG4gICAgICB0aGlzLndyYXAobiksXG4gICAgICBpLFxuICAgICkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHVjZXMgdGhlIGN1cnJlbnQgYXJyYXkgb2Ygbm9kZXMgdG8gYW5vdGhlciBhcnJheSwgZnJvbSByaWdodCB0byBsZWZ0LiBFYWNoIG5vZGUgaXMgcGFzc2VkXG4gICAqIGluIGFzIGEgYFNoYWxsb3dXcmFwcGVyYCB0byB0aGUgcmVkdWNlciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0aGUgcmVkdWNlciBmdW5jdGlvblxuICAgKiBAcGFyYW0geyp9IGluaXRpYWxWYWx1ZSAtIHRoZSBpbml0aWFsIHZhbHVlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVkdWNlUmlnaHQoZm4sIGluaXRpYWxWYWx1ZSA9IHVuZGVmaW5lZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLnJlZHVjZVJpZ2h0KFxuICAgICAgICAoYWNjdW0sIG4sIGkpID0+IGZuLmNhbGwodGhpcywgYWNjdW0sIHRoaXMud3JhcChuKSwgaSksXG4gICAgICAgIGluaXRpYWxWYWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldE5vZGVzSW50ZXJuYWwoKS5yZWR1Y2VSaWdodCgoYWNjdW0sIG4sIGkpID0+IGZuLmNhbGwoXG4gICAgICB0aGlzLFxuICAgICAgaSA9PT0gMSA/IHRoaXMud3JhcChhY2N1bSkgOiBhY2N1bSxcbiAgICAgIHRoaXMud3JhcChuKSxcbiAgICAgIGksXG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyB3cmFwcGVyIHdpdGggYSBzdWJzZXQgb2YgdGhlIG5vZGVzIG9mIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBhY2NvcmRpbmcgdG8gdGhlXG4gICAqIHJ1bGVzIG9mIGBBcnJheSNzbGljZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBiZWdpblxuICAgKiBAcGFyYW0ge051bWJlcn0gZW5kXG4gICAqIEByZXR1cm5zIHtTaGFsbG93V3JhcHBlcn1cbiAgICovXG4gIHNsaWNlKGJlZ2luLCBlbmQpIHtcbiAgICByZXR1cm4gdGhpcy53cmFwKHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLnNsaWNlKGJlZ2luLCBlbmQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGFueSBvZiB0aGUgbm9kZXMgaW4gdGhlIHdyYXBwZXIgbWF0Y2ggdGhlIHByb3ZpZGVkIHNlbGVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge0VuenltZVNlbGVjdG9yfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIHNvbWUoc2VsZWN0b3IpIHtcbiAgICBpZiAodGhpc1tST09UXSA9PT0gdGhpcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdFdyYXBwZXI6OnNvbWUoKSBjYW4gbm90IGJlIGNhbGxlZCBvbiB0aGUgcm9vdCcpO1xuICAgIH1cbiAgICBjb25zdCBwcmVkaWNhdGUgPSBidWlsZFByZWRpY2F0ZShzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLnNvbWUocHJlZGljYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGFueSBvZiB0aGUgbm9kZXMgaW4gdGhlIHdyYXBwZXIgcGFzcyB0aGUgcHJvdmlkZWQgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBzb21lV2hlcmUocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLnNvbWUoKG4sIGkpID0+IHByZWRpY2F0ZS5jYWxsKHRoaXMsIHRoaXMud3JhcChuKSwgaSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZSBub2RlcyBpbiB0aGUgd3JhcHBlciBtYXRjaCB0aGUgcHJvdmlkZWQgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RW56eW1lU2VsZWN0b3J9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZXZlcnkoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwcmVkaWNhdGUgPSBidWlsZFByZWRpY2F0ZShzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLmV2ZXJ5KHByZWRpY2F0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBhbnkgb2YgdGhlIG5vZGVzIGluIHRoZSB3cmFwcGVyIHBhc3MgdGhlIHByb3ZpZGVkIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZXZlcnlXaGVyZShwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROb2Rlc0ludGVybmFsKCkuZXZlcnkoKG4sIGkpID0+IHByZWRpY2F0ZS5jYWxsKHRoaXMsIHRoaXMud3JhcChuKSwgaSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIG5ldyB3cmFwcGVycyB3aXRoIGEgbWFwcGluZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2ZcbiAgICogbm9kZXMgaW4gcmVzcG9uc2UgdG8gYSBzaW5nbGUgbm9kZSB3cmFwcGVyLiBUaGUgcmV0dXJuZWQgd3JhcHBlciBpcyBhIHNpbmdsZSB3cmFwcGVyIGFyb3VuZFxuICAgKiBhbGwgb2YgdGhlIG1hcHBlZCBub2RlcyBmbGF0dGVuZWQgKGFuZCBkZS1kdXBsaWNhdGVkKS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIGZsYXRNYXAoZm4pIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0Tm9kZXNJbnRlcm5hbCgpLm1hcCgobiwgaSkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLndyYXAobiksIGkpKTtcbiAgICBjb25zdCBmbGF0dGVuZWQgPSBmbGF0KG5vZGVzLCAxKTtcbiAgICByZXR1cm4gdGhpcy53cmFwKGZsYXR0ZW5lZC5maWx0ZXIoQm9vbGVhbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGFsbCBub2RlcyBpbiB0aGUgY3VycmVudCB3cmFwcGVyIG5vZGVzJyByZW5kZXIgdHJlZXMgdGhhdCBtYXRjaCB0aGUgcHJvdmlkZWQgcHJlZGljYXRlXG4gICAqIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGVcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIGZpbmRXaGVyZShwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZmluZFdoZXJlVW53cmFwcGVkKHRoaXMsIChuKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy53cmFwKG4pO1xuICAgICAgcmV0dXJuIG5vZGUubGVuZ3RoID4gMCAmJiBwcmVkaWNhdGUobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbm9kZSBhdCBhIGdpdmVuIGluZGV4IG9mIHRoZSBjdXJyZW50IHdyYXBwZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICAgKi9cbiAgZ2V0KGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoKVtpbmRleF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBub2RlIGF0IGEgZ2l2ZW4gaW5kZXggb2YgdGhlIGN1cnJlbnQgd3JhcHBlci5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm5zIHtSZWFjdFdyYXBwZXJ9XG4gICAqL1xuICBhdChpbmRleCkge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5nZXROb2Rlc0ludGVybmFsKCk7XG4gICAgaWYgKGluZGV4IDwgbm9kZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy53cmFwKG5vZGVzW2luZGV4XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLndyYXAoW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZmlyc3Qgbm9kZSBvZiB0aGUgY3VycmVudCB3cmFwcGVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UmVhY3RXcmFwcGVyfVxuICAgKi9cbiAgZmlyc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXQoMCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBsYXN0IG5vZGUgb2YgdGhlIGN1cnJlbnQgd3JhcHBlci5cbiAgICpcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIGxhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXQodGhpcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxlZ2F0ZXMgdG8gZXhpc3RzKClcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0VtcHR5KCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKCdFbnp5bWU6OkRlcHJlY2F0ZWQgbWV0aG9kIGlzRW1wdHkoKSBjYWxsZWQsIHVzZSBleGlzdHMoKSBpbnN0ZWFkLicpO1xuICAgIHJldHVybiAhdGhpcy5leGlzdHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgd3JhcHBlciBoYXMgbm9kZXMuIEZhbHNlIG90aGVyd2lzZS5cbiAgICogSWYgY2FsbGVkIHdpdGggYSBzZWxlY3RvciBpdCByZXR1cm5zIGAuZmluZChzZWxlY3RvcikuZXhpc3RzKClgIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RW56eW1lU2VsZWN0b3J9IHNlbGVjdG9yIChvcHRpb25hbClcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBleGlzdHMoc2VsZWN0b3IgPSBudWxsKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gdGhpcy5maW5kKHNlbGVjdG9yKS5leGlzdHMoKSA6IHRoaXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0aGF0IHRocm93cyBhbiBlcnJvciBpZiB0aGUgY3VycmVudCBpbnN0YW5jZSBoYXMgYSBsZW5ndGggb3RoZXIgdGhhbiBvbmUuXG4gICAqIFRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gZW5mb3JjZSB0aGF0IGNlcnRhaW4gbWV0aG9kcyBhcmUgb25seSBydW4gb24gYSB3cmFwcGVyIHdoZW4gaXQgaXNcbiAgICogd3JhcHBpbmcgYSBzaW5nbGUgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBzaW5nbGUobmFtZSwgZm4pIHtcbiAgICBjb25zdCBmbk5hbWUgPSB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgPyBuYW1lIDogJ3Vua25vd24nO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gZm4gOiBuYW1lO1xuICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2Qg4oCcJHtmbk5hbWV94oCdIGlzIG1lYW50IHRvIGJlIHJ1biBvbiAxIG5vZGUuICR7dGhpcy5sZW5ndGh9IGZvdW5kIGluc3RlYWQuYCk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIHRoaXMuZ2V0Tm9kZUludGVybmFsKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBmdWwgdXRpbGl0eSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IHdyYXBwZXIgd2l0aCB0aGUgc2FtZSByb290IGFzIHRoZSBjdXJyZW50IHdyYXBwZXIsIHdpdGhcbiAgICogYW55IG5vZGVzIHBhc3NlZCBpbiBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyIGF1dG9tYXRpY2FsbHkgd3JhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdFdyYXBwZXJ8UmVhY3RFbGVtZW50fEFycmF5PFJlYWN0RWxlbWVudD59IG5vZGVcbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIHdyYXAobm9kZSwgcm9vdCA9IHRoaXNbUk9PVF0sIC4uLmFyZ3MpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFJlYWN0V3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVhY3RXcmFwcGVyKG5vZGUsIHJvb3QsIC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSFRNTC1saWtlIHN0cmluZyBvZiB0aGUgc2hhbGxvdyByZW5kZXIgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFByb3BlcnR5IGJhZyBvZiBhZGRpdGlvbmFsIG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaWdub3JlUHJvcHNdIC0gaWYgdHJ1ZSwgcHJvcHMgYXJlIG9taXR0ZWQgZnJvbSB0aGUgc3RyaW5nLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnZlcmJvc2VdIC0gaWYgdHJ1ZSwgYXJyYXlzIGFuZCBvYmplY3RzIHRvIGJlIHZlcmJvc2VseSBwcmludGVkLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZGVidWcob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIGRlYnVnTm9kZXModGhpcy5nZXROb2Rlc0ludGVybmFsKCksIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgaW50ZXJjZXB0ZXIgYW5kIHJldHVybnMgaXRzZWxmLiBpbnRlcmNlcHRlciBpcyBjYWxsZWQgd2l0aCBpdHNlbGYuXG4gICAqIFRoaXMgaXMgaGVscGZ1bCB3aGVuIGRlYnVnZ2luZyBub2RlcyBpbiBtZXRob2QgY2hhaW5zLlxuICAgKiBAcGFyYW0gZm5cbiAgICogQHJldHVybnMge1JlYWN0V3JhcHBlcn1cbiAgICovXG4gIHRhcChpbnRlcmNlcHRlcikge1xuICAgIGludGVyY2VwdGVyKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHRoZSByZWFjdCB0cmVlIGZyb20gdGhlIERPTS4gUnVucyBgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSgpYCB1bmRlciB0aGUgaG9vZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBtb3N0IGNvbW1vbmx5IGJlIHVzZWQgYXMgYSBcImNsZWFudXBcIiBtZXRob2QgaWYgeW91IGRlY2lkZSB0byB1c2UgdGhlXG4gICAqIGBhdHRhY2hUb2Agb3B0aW9uIGluIGBtb3VudChub2RlLCBvcHRpb25zKWAuXG4gICAqXG4gICAqIFRoZSBtZXRob2QgaXMgaW50ZW50aW9uYWxseSBub3QgXCJmbHVlbnRcIiAoaW4gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBgdGhpc2ApIGJlY2F1c2UgeW91IHNob3VsZFxuICAgKiBub3QgYmUgZG9pbmcgYW55dGhpbmcgd2l0aCB0aGlzIHdyYXBwZXIgYWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkLlxuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzW1JPT1RdICE9PSB0aGlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0V3JhcHBlcjo6ZGV0YWNoKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoZSByb290Jyk7XG4gICAgfVxuICAgIGlmICghdGhpc1tPUFRJT05TXS5hdHRhY2hUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdFdyYXBwZXI6OmRldGFjaCgpIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB3aGVuIHRoZSBgYXR0YWNoVG9gIG9wdGlvbiB3YXMgcGFzc2VkIGludG8gYG1vdW50KClgLicpO1xuICAgIH1cbiAgICB0aGlzW1JFTkRFUkVSXS51bm1vdW50KCk7XG4gIH1cblxuICAvKipcbiAgICogU3RyaXBzIG91dCBhbGwgdGhlIG5vdCBob3N0LW5vZGVzIGZyb20gdGhlIGxpc3Qgb2Ygbm9kZXNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgaG9zdCBub2Rlc1xuICAgKiAoYWN0dWFsbHkgcmVuZGVyZWQgSFRNTCBlbGVtZW50cykgaWdub3JpbmcgdGhlIFJlYWN0IG5vZGVzLlxuICAgKi9cbiAgaG9zdE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcldoZXJlKChuKSA9PiB0eXBlb2Ygbi50eXBlKCkgPT09ICdzdHJpbmcnKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgKnNwZWNpYWwqIFwicm9vdFwiIHdyYXBwZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjb21wb25lbnQgcGFzc2VkIGFzIGB3cmFwcGluZ0NvbXBvbmVudGAuXG4gKiBJdCBpcyBsaW5rZWQgdG8gdGhlIHByaW1hcnkgcm9vdCBzdWNoIHRoYXQgdXBkYXRlcyB0byBpdCB3aWxsIHVwZGF0ZSB0aGUgcHJpbWFyeSxcbiAqIGFuZCB2aWNlIHZlcnNhLlxuICpcbiAqIEBjbGFzcyBXcmFwcGluZ0NvbXBvbmVudFdyYXBwZXJcbiAqL1xuY2xhc3MgV3JhcHBpbmdDb21wb25lbnRXcmFwcGVyIGV4dGVuZHMgUmVhY3RXcmFwcGVyIHtcbiAgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCByZW5kZXJlcikge1xuICAgIHN1cGVyKHJlbmRlcmVyLmdldE5vZGUoKSwgcm9vdCk7XG5cbiAgICBwcml2YXRlU2V0KHRoaXMsIFJPT1QsIHRoaXMpO1xuICAgIHByaXZhdGVTZXQodGhpcywgUkVOREVSRVIsIHJlbmRlcmVyKTtcbiAgICB0aGlzW0xJTktFRF9ST09UU10ucHVzaChyb290KTtcbiAgfVxuXG4gIGdldFdyYXBwaW5nQ29tcG9uZW50KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWN0V3JhcHBlcjo6Z2V0V3JhcHBpbmdDb21wb25lbnQoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhlIHJvb3QnKTtcbiAgfVxufVxuXG5pZiAoSVRFUkFUT1JfU1lNQk9MKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdFdyYXBwZXIucHJvdG90eXBlLCBJVEVSQVRPUl9TWU1CT0wsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGl0ZXJhdG9yKCkge1xuICAgICAgY29uc3QgaXRlciA9IHRoaXNbTk9ERVNdW0lURVJBVE9SX1NZTUJPTF0oKTtcbiAgICAgIGNvbnN0IGFkYXB0ZXIgPSBnZXRBZGFwdGVyKHRoaXNbT1BUSU9OU10pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW0lURVJBVE9SX1NZTUJPTF0oKSB7IHJldHVybiB0aGlzOyB9LFxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBpdGVyLm5leHQoKTtcbiAgICAgICAgICBpZiAobmV4dC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBhZGFwdGVyLm5vZGVUb0VsZW1lbnQobmV4dC52YWx1ZSksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByaXZhdGVXYXJuaW5nKHByb3AsIGV4dHJhTWVzc2FnZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhY3RXcmFwcGVyLnByb3RvdHlwZSwgcHJvcCwge1xuICAgIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgIEF0dGVtcHRlZCB0byBhY2Nlc3MgUmVhY3RXcmFwcGVyOjoke3Byb3B9LCB3aGljaCB3YXMgcHJldmlvdXNseSBhIHByaXZhdGUgcHJvcGVydHkgb25cbiAgICAgICAgRW56eW1lIFJlYWN0V3JhcHBlciBpbnN0YW5jZXMsIGJ1dCBpcyBubyBsb25nZXIgYW5kIHNob3VsZCBub3QgYmUgcmVsaWVkIHVwb24uXG4gICAgICAgICR7ZXh0cmFNZXNzYWdlfVxuICAgICAgYCk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB9KTtcbn1cblxucHJpdmF0ZVdhcm5pbmcoJ25vZGUnLCAnQ29uc2lkZXIgdXNpbmcgdGhlIGdldEVsZW1lbnQoKSBtZXRob2QgaW5zdGVhZC4nKTtcbnByaXZhdGVXYXJuaW5nKCdub2RlcycsICdDb25zaWRlciB1c2luZyB0aGUgZ2V0RWxlbWVudHMoKSBtZXRob2QgaW5zdGVhZC4nKTtcbnByaXZhdGVXYXJuaW5nKCdyZW5kZXJlcicsICcnKTtcbnByaXZhdGVXYXJuaW5nKCdvcHRpb25zJywgJycpO1xucHJpdmF0ZVdhcm5pbmcoJ2NvbXBsZXhTZWxlY3RvcicsICcnKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RXcmFwcGVyO1xuIl19
//# sourceMappingURL=ReactWrapper.js.map