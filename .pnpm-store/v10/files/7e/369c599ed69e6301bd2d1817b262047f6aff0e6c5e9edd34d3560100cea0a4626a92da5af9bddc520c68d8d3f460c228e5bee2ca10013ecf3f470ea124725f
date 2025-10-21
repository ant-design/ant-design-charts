'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.buildPredicate = buildPredicate;
exports.reduceTreeBySelector = reduceTreeBySelector;
exports.reduceTreesBySelector = reduceTreesBySelector;

var _rstSelectorParser = require('rst-selector-parser');

var _object = require('object.values');

var _object2 = _interopRequireDefault(_object);

var _arrayPrototype = require('array.prototype.flat');

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _objectIs = require('object-is');

var _objectIs2 = _interopRequireDefault(_objectIs);

var _has = require('has');

var _has2 = _interopRequireDefault(_has);

var _byConstructor = require('html-element-map/byConstructor');

var _byConstructor2 = _interopRequireDefault(_byConstructor);

var _RSTTraversal = require('./RSTTraversal');

var _Utils = require('./Utils');

var _getAdapter = require('./getAdapter');

var _getAdapter2 = _interopRequireDefault(_getAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// our CSS selector parser instance
var parser = (0, _rstSelectorParser.createParser)();

// Combinators that allow you to chance selectors
var CHILD = 'childCombinator';
var ADJACENT_SIBLING = 'adjacentSiblingCombinator';
var GENERAL_SIBLING = 'generalSiblingCombinator';
var DESCENDANT = 'descendantCombinator';

// Selectors for targeting elements
var SELECTOR = 'selector';
var TYPE_SELECTOR = 'typeSelector';
var CLASS_SELECTOR = 'classSelector';
var ID_SELECTOR = 'idSelector';
var UNIVERSAL_SELECTOR = 'universalSelector';
var ATTRIBUTE_PRESENCE = 'attributePresenceSelector';
var ATTRIBUTE_VALUE = 'attributeValueSelector';
// @TODO we dont support these, throw if they are used
var PSEUDO_CLASS = 'pseudoClassSelector';
var PSEUDO_ELEMENT = 'pseudoElementSelector';

var EXACT_ATTRIBUTE_OPERATOR = '=';
var WHITELIST_ATTRIBUTE_OPERATOR = '~=';
var HYPHENATED_ATTRIBUTE_OPERATOR = '|=';
var PREFIX_ATTRIBUTE_OPERATOR = '^=';
var SUFFIX_ATTRIBUTE_OPERATOR = '$=';
var SUBSTRING_ATTRIBUTE_OPERATOR = '*=';

function unique(arr) {
  return [].concat(_toConsumableArray(new Set(arr)));
}

/**
 * Calls reduce on a array of nodes with the passed
 * function, returning only unique results.
 * @param {Function} fn
 * @param {Array<Node>} nodes
 */
function uniqueReduce(fn, nodes) {
  return unique(nodes.reduce(fn, []));
}

/**
 * Takes a CSS selector and returns a set of tokens parsed
 * by scalpel.
 * @param {String} selector
 */
function safelyGenerateTokens(selector) {
  try {
    return parser.parse(selector);
  } catch (err) {
    throw new Error('Failed to parse selector: ' + String(selector));
  }
}

function matchAttributeSelector(node, token) {
  var operator = token.operator,
      value = token.value,
      name = token.name;

  var nodeProps = (0, _Utils.propsOfNode)(node);
  var descriptor = Object.getOwnPropertyDescriptor(nodeProps, name);
  if (descriptor && descriptor.get) {
    return false;
  }
  var nodePropValue = nodeProps[name];
  if (typeof nodePropValue === 'undefined') {
    return false;
  }
  if (token.type === ATTRIBUTE_PRESENCE) {
    return (0, _has2['default'])(nodeProps, token.name);
  }
  // Only the exact value operator ("=") can match non-strings
  if (typeof nodePropValue !== 'string' || typeof value !== 'string') {
    if (operator !== EXACT_ATTRIBUTE_OPERATOR) {
      return false;
    }
  }
  switch (operator) {
    /**
     * Represents an element with the att attribute whose value is exactly "val".
     * @example
     * [attr="val"] matches attr="val"
     */
    case EXACT_ATTRIBUTE_OPERATOR:
      return (0, _objectIs2['default'])(nodePropValue, value);
    /**
     * Represents an element with the att attribute whose value is a whitespace-separated
     * list of words, one of which is exactly
     * @example
     *  [rel~="copyright"] matches rel="copyright other"
     */
    case WHITELIST_ATTRIBUTE_OPERATOR:
      return nodePropValue.split(' ').indexOf(value) !== -1;
    /**
     * Represents an element with the att attribute, its value either being exactly the
     * value or beginning with the value immediately followed by "-"
     * @example
     * [hreflang|="en"] matches hreflang="en-US"
     */
    case HYPHENATED_ATTRIBUTE_OPERATOR:
      return nodePropValue === value || nodePropValue.startsWith(String(value) + '-');
    /**
     * Represents an element with the att attribute whose value begins with the prefix value.
     * If the value is the empty string then the selector does not represent anything.
     * @example
     * [type^="image"] matches type="imageobject"
     */
    case PREFIX_ATTRIBUTE_OPERATOR:
      return value === '' ? false : nodePropValue.slice(0, value.length) === value;
    /**
     * Represents an element with the att attribute whose value ends with the suffix value.
     * If the value is the empty string then the selector does not represent anything.
     * @example
     * [type$="image"] matches type="imageobject"
     */
    case SUFFIX_ATTRIBUTE_OPERATOR:
      return value === '' ? false : nodePropValue.slice(-value.length) === value;
    /**
     * Represents an element with the att attribute whose value contains at least one
     * instance of the value. If value is the empty string then the
     * selector does not represent anything.
     * @example
     * [title*="hello"] matches title="well hello there"
     */
    case SUBSTRING_ATTRIBUTE_OPERATOR:
      return value === '' ? false : nodePropValue.indexOf(value) !== -1;
    default:
      throw new Error('Enzyme::Selector: Unknown attribute selector operator "' + String(operator) + '"');
  }
}

function matchPseudoSelector(node, token, root) {
  var name = token.name,
      parameters = token.parameters;

  if (name === 'not') {
    // eslint-disable-next-line no-use-before-define
    return parameters.every(function (selector) {
      return reduceTreeBySelector(selector, node).length === 0;
    });
  }
  if (name === 'empty') {
    return (0, _RSTTraversal.treeFilter)(node, function (n) {
      return n !== node;
    }).length === 0;
  }
  if (name === 'first-child') {
    var _findParentNode = (0, _RSTTraversal.findParentNode)(root, node),
        rendered = _findParentNode.rendered;

    var _rendered = _slicedToArray(rendered, 1),
        firstChild = _rendered[0];

    return firstChild === node;
  }
  if (name === 'last-child') {
    var _findParentNode2 = (0, _RSTTraversal.findParentNode)(root, node),
        _rendered2 = _findParentNode2.rendered;

    return _rendered2[_rendered2.length - 1] === node;
  }
  if (name === 'focus') {
    if (typeof document === 'undefined') {
      throw new Error('Enzyme::Selector does not support the ":focus" pseudo-element without a global `document`.');
    }
    var adapter = (0, _getAdapter2['default'])();
    /* eslint-env browser */
    return document.activeElement && adapter.nodeToHostNode(node) === document.activeElement;
  }

  throw new TypeError('Enzyme::Selector does not support the "' + String(token.name) + '" pseudo-element or pseudo-class selectors.');
}

/**
 * Takes a node and a token and determines if the node
 * matches the predicate defined by the token.
 * @param {Node} node
 * @param {Token} token
 */
function nodeMatchesToken(node, token, root) {
  if (node === null || typeof node === 'string') {
    return false;
  }
  switch (token.type) {
    /**
     * Match every node
     * @example '*' matches every node
     */
    case UNIVERSAL_SELECTOR:
      return true;
    /**
     * Match against the className prop
     * @example '.active' matches <div className='active' />
     */
    case CLASS_SELECTOR:
      return (0, _RSTTraversal.hasClassName)(node, token.name);
    /**
     * Simple type matching
     * @example 'div' matches <div />
     */
    case TYPE_SELECTOR:
      return (0, _Utils.nodeHasType)(node, token.name);
    /**
     * Match against the `id` prop
     * @example '#nav' matches <ul id="nav" />
     */
    case ID_SELECTOR:
      return (0, _RSTTraversal.nodeHasId)(node, token.name);
    /**
     * Matches if an attribute is present, regardless
     * of its value
     * @example '[disabled]' matches <a disabled />
     */
    case ATTRIBUTE_PRESENCE:
      return matchAttributeSelector(node, token);
    /**
     * Matches if an attribute is present with the
     * provided value
     * @example '[data-foo=foo]' matches <div data-foo="foo" />
     */
    case ATTRIBUTE_VALUE:
      return matchAttributeSelector(node, token);
    case PSEUDO_ELEMENT:
    case PSEUDO_CLASS:
      return matchPseudoSelector(node, token, root);
    default:
      throw new Error('Unknown token type: ' + String(token.type));
  }
}

/**
 * Returns a predicate function that checks if a
 * node matches every token in the body of a selector
 * token.
 * @param {Token} token
 */
function buildPredicateFromToken(token, root) {
  return function (node) {
    return token.body.every(function (bodyToken) {
      return nodeMatchesToken(node, bodyToken, root);
    });
  };
}

/**
 * Returns whether a parsed selector is a complex selector, which
 * is defined as a selector that contains combinators.
 * @param {Array<Token>} tokens
 */
function isComplexSelector(tokens) {
  return tokens.some(function (token) {
    return token.type !== SELECTOR;
  });
}

/**
 * Takes a component constructor, object, or string representing
 * a simple selector and returns a predicate function that can
 * be applied to a single node.
 * @param {EnzymeSelector} selector
 */
function buildPredicate(selector) {
  // If the selector is a string, parse it as a simple CSS selector
  if (typeof selector === 'string') {
    var tokens = safelyGenerateTokens(selector);
    if (isComplexSelector(tokens)) {
      throw new TypeError('This method does not support complex CSS selectors');
    }
    // Simple selectors only have a single selector token
    return buildPredicateFromToken(tokens[0]);
  }

  // If the selector is an element type, check if the node's type matches
  var adapter = (0, _getAdapter2['default'])();
  var isElementType = adapter.isValidElementType ? adapter.isValidElementType(selector) : typeof selector === 'function';
  if (isElementType) {
    return function (node) {
      return adapter.matchesElementType(node, selector);
    };
  }
  // If the selector is an non-empty object, treat the keys/values as props
  if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
    if (!Array.isArray(selector) && selector !== null && Object.keys(selector).length > 0) {
      var hasUndefinedValues = (0, _object2['default'])(selector).some(function (value) {
        return typeof value === 'undefined';
      });
      if (hasUndefinedValues) {
        throw new TypeError('Enzyme::Props can’t have `undefined` values. Try using ‘findWhere()’ instead.');
      }
      return function (node) {
        return (0, _RSTTraversal.nodeMatchesObjectProps)(node, selector);
      };
    }
    throw new TypeError('Enzyme::Selector does not support an array, null, or empty object as a selector');
  }

  throw new TypeError('Enzyme::Selector expects a string, object, or valid element type (Component Constructor)');
}

/**
 * Matches only nodes which are adjacent siblings (direct next sibling)
 * against a predicate, returning those that match.
 * @param {Array<Node>} nodes
 * @param {Function} predicate
 * @param {Node} root
 */
function matchAdjacentSiblings(nodes, predicate, root) {
  return nodes.reduce(function (matches, node) {
    var parent = (0, _RSTTraversal.findParentNode)(root, node);
    // If there's no parent, there's no siblings
    if (!parent) {
      return matches;
    }
    var parentChildren = (0, _RSTTraversal.childrenOfNode)(parent);
    var nodeIndex = parentChildren.indexOf(node);
    var adjacentSibling = parentChildren[nodeIndex + 1];
    // No sibling
    if (!adjacentSibling) {
      return matches;
    }
    if (predicate(adjacentSibling)) {
      matches.push(adjacentSibling);
    }
    return matches;
  }, []);
}

/**
 * Matches only nodes which are general siblings (any sibling *after*)
 * against a predicate, returning those that match.
 * @param {Array<Node>} nodes
 * @param {Function} predicate
 * @param {Node} root
 */
function matchGeneralSibling(nodes, predicate, root) {
  return uniqueReduce(function (matches, node) {
    var parent = (0, _RSTTraversal.findParentNode)(root, node);
    if (!parent) {
      return matches;
    }
    var parentChildren = (0, _RSTTraversal.childrenOfNode)(parent);
    var nodeIndex = parentChildren.indexOf(node);
    var youngerSiblings = parentChildren.slice(nodeIndex + 1);
    return matches.concat(youngerSiblings.filter(predicate));
  }, nodes);
}

/**
 * Matches only nodes which are direct children (not grandchildren, etc.)
 * against a predicate, returning those that match.
 * @param {Array<Node>} nodes
 * @param {Function} predicate
 */
function matchDirectChild(nodes, predicate) {
  return uniqueReduce(function (matches, node) {
    return matches.concat((0, _RSTTraversal.childrenOfNode)(node).filter(predicate));
  }, nodes);
}

/**
 * Matches all descendant nodes against a predicate,
 * returning those that match.
 * @param {Array<Node>} nodes
 * @param {Function} predicate
 */
function matchDescendant(nodes, predicate) {
  return uniqueReduce(function (matches, node) {
    return matches.concat((0, _RSTTraversal.treeFilter)(node, predicate));
  }, (0, _arrayPrototype2['default'])(nodes.map(_RSTTraversal.childrenOfNode)));
}

/**
 * Takes an RST and reduces it to a set of nodes matching
 * the selector. The selector can be a simple selector, which
 * is handled by `buildPredicate`, or a complex CSS selector which
 * reduceTreeBySelector parses and reduces the tree based on the combinators.
 *
 * @param {EnzymeSelector} selector
 * @param {RSTNode} root
 */
function reduceTreeBySelector(selector, root) {
  if (typeof selector !== 'string') {
    var elements = (0, _byConstructor2['default'])(selector);
    if (elements.length > 0) {
      return (0, _arrayPrototype2['default'])(elements.map(function (x) {
        return reduceTreeBySelector(x.tag, root);
      }));

      // when https://github.com/aweary/rst-selector-parser/issues/15 is resolved
      // const htmlTagNames = elements.map(x => x.tag).join(', ');
      // return reduceTreeBySelector(htmlTagNames, root);
    }
  }

  if (typeof selector === 'function' || (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
    return (0, _RSTTraversal.treeFilter)(root, buildPredicate(selector));
  }

  var results = [];
  if (typeof selector === 'string') {
    var tokens = safelyGenerateTokens(selector);
    var index = 0;
    while (index < tokens.length) {
      var token = tokens[index];
      /**
       * There are two types of tokens in a CSS selector:
       *
       * 1. Selector tokens. These target nodes directly, like
       *    type or attribute selectors. These are easy to apply
       *    because we can traverse the tree and return only
       *    the nodes that match the predicate.
       *
       * 2. Combinator tokens. These tokens chain together
       *    selector nodes. For example > for children, or +
       *    for adjacent siblings. These are harder to match
       *    as we have to track where in the tree we are
       *    to determine if a selector node applies or not.
       */
      if (token.type === SELECTOR) {
        var predicate = buildPredicateFromToken(token, root);
        results = results.concat((0, _RSTTraversal.treeFilter)(root, predicate));
      } else {
        // We can assume there always all previously matched tokens since selectors
        // cannot start with combinators.
        var type = token.type;
        // We assume the next token is a selector, so move the index
        // forward and build the predicate.

        index += 1;
        var _predicate = buildPredicateFromToken(tokens[index], root);
        // We match against only the nodes which have already been matched,
        // since a combinator is meant to refine a previous selector.
        switch (type) {
          // The + combinator
          case ADJACENT_SIBLING:
            results = matchAdjacentSiblings(results, _predicate, root);
            break;
          // The ~ combinator
          case GENERAL_SIBLING:
            results = matchGeneralSibling(results, _predicate, root);
            break;
          // The > combinator
          case CHILD:
            results = matchDirectChild(results, _predicate);
            break;
          // The ' ' (whitespace) combinator
          case DESCENDANT:
            {
              results = matchDescendant(results, _predicate);
              break;
            }
          default:
            throw new Error('Unknown combinator selector: ' + String(type));
        }
      }
      index += 1;
    }
  } else {
    throw new TypeError('Enzyme::Selector expects a string, object, or Component Constructor');
  }
  return results;
}

function reduceTreesBySelector(selector, roots) {
  var results = roots.map(function (n) {
    return reduceTreeBySelector(selector, n);
  });
  return unique((0, _arrayPrototype2['default'])(results, 1));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwibmFtZXMiOlsiYnVpbGRQcmVkaWNhdGUiLCJyZWR1Y2VUcmVlQnlTZWxlY3RvciIsInJlZHVjZVRyZWVzQnlTZWxlY3RvciIsInBhcnNlciIsIkNISUxEIiwiQURKQUNFTlRfU0lCTElORyIsIkdFTkVSQUxfU0lCTElORyIsIkRFU0NFTkRBTlQiLCJTRUxFQ1RPUiIsIlRZUEVfU0VMRUNUT1IiLCJDTEFTU19TRUxFQ1RPUiIsIklEX1NFTEVDVE9SIiwiVU5JVkVSU0FMX1NFTEVDVE9SIiwiQVRUUklCVVRFX1BSRVNFTkNFIiwiQVRUUklCVVRFX1ZBTFVFIiwiUFNFVURPX0NMQVNTIiwiUFNFVURPX0VMRU1FTlQiLCJFWEFDVF9BVFRSSUJVVEVfT1BFUkFUT1IiLCJXSElURUxJU1RfQVRUUklCVVRFX09QRVJBVE9SIiwiSFlQSEVOQVRFRF9BVFRSSUJVVEVfT1BFUkFUT1IiLCJQUkVGSVhfQVRUUklCVVRFX09QRVJBVE9SIiwiU1VGRklYX0FUVFJJQlVURV9PUEVSQVRPUiIsIlNVQlNUUklOR19BVFRSSUJVVEVfT1BFUkFUT1IiLCJ1bmlxdWUiLCJhcnIiLCJTZXQiLCJ1bmlxdWVSZWR1Y2UiLCJmbiIsIm5vZGVzIiwicmVkdWNlIiwic2FmZWx5R2VuZXJhdGVUb2tlbnMiLCJzZWxlY3RvciIsInBhcnNlIiwiZXJyIiwiRXJyb3IiLCJtYXRjaEF0dHJpYnV0ZVNlbGVjdG9yIiwibm9kZSIsInRva2VuIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIm5hbWUiLCJub2RlUHJvcHMiLCJkZXNjcmlwdG9yIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0Iiwibm9kZVByb3BWYWx1ZSIsInR5cGUiLCJzcGxpdCIsImluZGV4T2YiLCJzdGFydHNXaXRoIiwic2xpY2UiLCJsZW5ndGgiLCJtYXRjaFBzZXVkb1NlbGVjdG9yIiwicm9vdCIsInBhcmFtZXRlcnMiLCJldmVyeSIsIm4iLCJyZW5kZXJlZCIsImZpcnN0Q2hpbGQiLCJkb2N1bWVudCIsImFkYXB0ZXIiLCJhY3RpdmVFbGVtZW50Iiwibm9kZVRvSG9zdE5vZGUiLCJUeXBlRXJyb3IiLCJub2RlTWF0Y2hlc1Rva2VuIiwiYnVpbGRQcmVkaWNhdGVGcm9tVG9rZW4iLCJib2R5IiwiYm9keVRva2VuIiwiaXNDb21wbGV4U2VsZWN0b3IiLCJ0b2tlbnMiLCJzb21lIiwiaXNFbGVtZW50VHlwZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsIm1hdGNoZXNFbGVtZW50VHlwZSIsIkFycmF5IiwiaXNBcnJheSIsImtleXMiLCJoYXNVbmRlZmluZWRWYWx1ZXMiLCJtYXRjaEFkamFjZW50U2libGluZ3MiLCJwcmVkaWNhdGUiLCJtYXRjaGVzIiwicGFyZW50IiwicGFyZW50Q2hpbGRyZW4iLCJub2RlSW5kZXgiLCJhZGphY2VudFNpYmxpbmciLCJwdXNoIiwibWF0Y2hHZW5lcmFsU2libGluZyIsInlvdW5nZXJTaWJsaW5ncyIsImNvbmNhdCIsImZpbHRlciIsIm1hdGNoRGlyZWN0Q2hpbGQiLCJtYXRjaERlc2NlbmRhbnQiLCJtYXAiLCJjaGlsZHJlbk9mTm9kZSIsImVsZW1lbnRzIiwieCIsInRhZyIsInJlc3VsdHMiLCJpbmRleCIsInJvb3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBbVFnQkEsYyxHQUFBQSxjO1FBcUhBQyxvQixHQUFBQSxvQjtRQStFQUMscUIsR0FBQUEscUI7O0FBdmNoQjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBUUE7O0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQSxJQUFNQyxTQUFTLHNDQUFmOztBQUVBO0FBQ0EsSUFBTUMsUUFBUSxpQkFBZDtBQUNBLElBQU1DLG1CQUFtQiwyQkFBekI7QUFDQSxJQUFNQyxrQkFBa0IsMEJBQXhCO0FBQ0EsSUFBTUMsYUFBYSxzQkFBbkI7O0FBRUE7QUFDQSxJQUFNQyxXQUFXLFVBQWpCO0FBQ0EsSUFBTUMsZ0JBQWdCLGNBQXRCO0FBQ0EsSUFBTUMsaUJB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QUNEb0QsZUFBUyxDQUFUO0FBQ0Q7QUFDRixHQXhERCxNQXdETztBQUNMLFVBQU0sSUFBSW5DLFNBQUosQ0FBYyxxRUFBZCxDQUFOO0FBQ0Q7QUFDRCxTQUFPa0MsT0FBUDtBQUNEOztBQUVNLFNBQVNoRyxxQkFBVCxDQUErQjZCLFFBQS9CLEVBQXlDcUUsS0FBekMsRUFBZ0Q7QUFDckQsTUFBTUYsVUFBVUUsTUFBTVAsR0FBTixDQUFVLFVBQUNwQyxDQUFEO0FBQUEsV0FBT3hELHFCQUFxQjhCLFFBQXJCLEVBQStCMEIsQ0FBL0IsQ0FBUDtBQUFBLEdBQVYsQ0FBaEI7QUFDQSxTQUFPbEMsT0FBTyxpQ0FBSzJFLE9BQUwsRUFBYyxDQUFkLENBQVAsQ0FBUDtBQUNEIiwiZmlsZSI6InNlbGVjdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBhcnNlciB9IGZyb20gJ3JzdC1zZWxlY3Rvci1wYXJzZXInO1xuaW1wb3J0IHZhbHVlcyBmcm9tICdvYmplY3QudmFsdWVzJztcbmltcG9ydCBmbGF0IGZyb20gJ2FycmF5LnByb3RvdHlwZS5mbGF0JztcbmltcG9ydCBpcyBmcm9tICdvYmplY3QtaXMnO1xuaW1wb3J0IGhhcyBmcm9tICdoYXMnO1xuaW1wb3J0IGVsZW1lbnRzQnlDb25zdHJ1Y3RvciBmcm9tICdodG1sLWVsZW1lbnQtbWFwL2J5Q29uc3RydWN0b3InO1xuaW1wb3J0IHtcbiAgdHJlZUZpbHRlcixcbiAgbm9kZUhhc0lkLFxuICBmaW5kUGFyZW50Tm9kZSxcbiAgbm9kZU1hdGNoZXNPYmplY3RQcm9wcyxcbiAgY2hpbGRyZW5PZk5vZGUsXG4gIGhhc0NsYXNzTmFtZSxcbn0gZnJvbSAnLi9SU1RUcmF2ZXJzYWwnO1xuaW1wb3J0IHsgbm9kZUhhc1R5cGUsIHByb3BzT2ZOb2RlIH0gZnJvbSAnLi9VdGlscyc7XG5pbXBvcnQgZ2V0QWRhcHRlciBmcm9tICcuL2dldEFkYXB0ZXInO1xuLy8gb3VyIENTUyBzZWxlY3RvciBwYXJzZXIgaW5zdGFuY2VcbmNvbnN0IHBhcnNlciA9IGNyZWF0ZVBhcnNlcigpO1xuXG4vLyBDb21iaW5hdG9ycyB0aGF0IGFsbG93IHlvdSB0byBjaGFuY2Ugc2VsZWN0b3JzXG5jb25zdCBDSElMRCA9ICdjaGlsZENvbWJpbmF0b3InO1xuY29uc3QgQURKQUNFTlRfU0lCTElORyA9ICdhZGphY2VudFNpYmxpbmdDb21iaW5hdG9yJztcbmNvbnN0IEdFTkVSQUxfU0lCTElORyA9ICdnZW5lcmFsU2libGluZ0NvbWJpbmF0b3InO1xuY29uc3QgREVTQ0VOREFOVCA9ICdkZXNjZW5kYW50Q29tYmluYXRvcic7XG5cbi8vIFNlbGVjdG9ycyBmb3IgdGFyZ2V0aW5nIGVsZW1lbnRzXG5jb25zdCBTRUxFQ1RPUiA9ICdzZWxlY3Rvcic7XG5jb25zdCBUWVBFX1NFTEVDVE9SID0gJ3R5cGVTZWxlY3Rvcic7XG5jb25zdCBDTEFTU19TRUxFQ1RPUiA9ICdjbGFzc1NlbGVjdG9yJztcbmNvbnN0IElEX1NFTEVDVE9SID0gJ2lkU2VsZWN0b3InO1xuY29uc3QgVU5JVkVSU0FMX1NFTEVDVE9SID0gJ3VuaXZlcnNhbFNlbGVjdG9yJztcbmNvbnN0IEFUVFJJQlVURV9QUkVTRU5DRSA9ICdhdHRyaWJ1dGVQcmVzZW5jZVNlbGVjdG9yJztcbmNvbnN0IEFUVFJJQlVURV9WQUxVRSA9ICdhdHRyaWJ1dGVWYWx1ZVNlbGVjdG9yJztcbi8vIEBUT0RPIHdlIGRvbnQgc3VwcG9ydCB0aGVzZSwgdGhyb3cgaWYgdGhleSBhcmUgdXNlZFxuY29uc3QgUFNFVURPX0NMQVNTID0gJ3BzZXVkb0NsYXNzU2VsZWN0b3InO1xuY29uc3QgUFNFVURPX0VMRU1FTlQgPSAncHNldWRvRWxlbWVudFNlbGVjdG9yJztcblxuY29uc3QgRVhBQ1RfQVRUUklCVVRFX09QRVJBVE9SID0gJz0nO1xuY29uc3QgV0hJVEVMSVNUX0FUVFJJQlVURV9PUEVSQVRPUiA9ICd+PSc7XG5jb25zdCBIWVBIRU5BVEVEX0FUVFJJQlVURV9PUEVSQVRPUiA9ICd8PSc7XG5jb25zdCBQUkVGSVhfQVRUUklCVVRFX09QRVJBVE9SID0gJ149JztcbmNvbnN0IFNVRkZJWF9BVFRSSUJVVEVfT1BFUkFUT1IgPSAnJD0nO1xuY29uc3QgU1VCU1RSSU5HX0FUVFJJQlVURV9PUEVSQVRPUiA9ICcqPSc7XG5cbmZ1bmN0aW9uIHVuaXF1ZShhcnIpIHtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KGFycildO1xufVxuXG4vKipcbiAqIENhbGxzIHJlZHVjZSBvbiBhIGFycmF5IG9mIG5vZGVzIHdpdGggdGhlIHBhc3NlZFxuICogZnVuY3Rpb24sIHJldHVybmluZyBvbmx5IHVuaXF1ZSByZXN1bHRzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7QXJyYXk8Tm9kZT59IG5vZGVzXG4gKi9cbmZ1bmN0aW9uIHVuaXF1ZVJlZHVjZShmbiwgbm9kZXMpIHtcbiAgcmV0dXJuIHVuaXF1ZShub2Rlcy5yZWR1Y2UoZm4sIFtdKSk7XG59XG5cbi8qKlxuICogVGFrZXMgYSBDU1Mgc2VsZWN0b3IgYW5kIHJldHVybnMgYSBzZXQgb2YgdG9rZW5zIHBhcnNlZFxuICogYnkgc2NhbHBlbC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICovXG5mdW5jdGlvbiBzYWZlbHlHZW5lcmF0ZVRva2VucyhzZWxlY3Rvcikge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZXIucGFyc2Uoc2VsZWN0b3IpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzZWxlY3RvcjogJHtzZWxlY3Rvcn1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaEF0dHJpYnV0ZVNlbGVjdG9yKG5vZGUsIHRva2VuKSB7XG4gIGNvbnN0IHsgb3BlcmF0b3IsIHZhbHVlLCBuYW1lIH0gPSB0b2tlbjtcbiAgY29uc3Qgbm9kZVByb3BzID0gcHJvcHNPZk5vZGUobm9kZSk7XG4gIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5vZGVQcm9wcywgbmFtZSk7XG4gIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5vZGVQcm9wVmFsdWUgPSBub2RlUHJvcHNbbmFtZV07XG4gIGlmICh0eXBlb2Ygbm9kZVByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRva2VuLnR5cGUgPT09IEFUVFJJQlVURV9QUkVTRU5DRSkge1xuICAgIHJldHVybiBoYXMobm9kZVByb3BzLCB0b2tlbi5uYW1lKTtcbiAgfVxuICAvLyBPbmx5IHRoZSBleGFjdCB2YWx1ZSBvcGVyYXRvciAoXCI9XCIpIGNhbiBtYXRjaCBub24tc3RyaW5nc1xuICBpZiAodHlwZW9mIG5vZGVQcm9wVmFsdWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICBpZiAob3BlcmF0b3IgIT09IEVYQUNUX0FUVFJJQlVURV9PUEVSQVRPUikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBhbiBlbGVtZW50IHdpdGggdGhlIGF0dCBhdHRyaWJ1dGUgd2hvc2UgdmFsdWUgaXMgZXhhY3RseSBcInZhbFwiLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogW2F0dHI9XCJ2YWxcIl0gbWF0Y2hlcyBhdHRyPVwidmFsXCJcbiAgICAgKi9cbiAgICBjYXNlIEVYQUNUX0FUVFJJQlVURV9PUEVSQVRPUjpcbiAgICAgIHJldHVybiBpcyhub2RlUHJvcFZhbHVlLCB2YWx1ZSk7XG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBhbiBlbGVtZW50IHdpdGggdGhlIGF0dCBhdHRyaWJ1dGUgd2hvc2UgdmFsdWUgaXMgYSB3aGl0ZXNwYWNlLXNlcGFyYXRlZFxuICAgICAqIGxpc3Qgb2Ygd29yZHMsIG9uZSBvZiB3aGljaCBpcyBleGFjdGx5XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgW3JlbH49XCJjb3B5cmlnaHRcIl0gbWF0Y2hlcyByZWw9XCJjb3B5cmlnaHQgb3RoZXJcIlxuICAgICAqL1xuICAgIGNhc2UgV0hJVEVMSVNUX0FUVFJJQlVURV9PUEVSQVRPUjpcbiAgICAgIHJldHVybiBub2RlUHJvcFZhbHVlLnNwbGl0KCcgJykuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgIC8qKlxuICAgICAqIFJlcHJlc2VudHMgYW4gZWxlbWVudCB3aXRoIHRoZSBhdHQgYXR0cmlidXRlLCBpdHMgdmFsdWUgZWl0aGVyIGJlaW5nIGV4YWN0bHkgdGhlXG4gICAgICogdmFsdWUgb3IgYmVnaW5uaW5nIHdpdGggdGhlIHZhbHVlIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBbaHJlZmxhbmd8PVwiZW5cIl0gbWF0Y2hlcyBocmVmbGFuZz1cImVuLVVTXCJcbiAgICAgKi9cbiAgICBjYXNlIEhZUEhFTkFURURfQVRUUklCVVRFX09QRVJBVE9SOlxuICAgICAgcmV0dXJuIG5vZGVQcm9wVmFsdWUgPT09IHZhbHVlIHx8IG5vZGVQcm9wVmFsdWUuc3RhcnRzV2l0aChgJHt2YWx1ZX0tYCk7XG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBhbiBlbGVtZW50IHdpdGggdGhlIGF0dCBhdHRyaWJ1dGUgd2hvc2UgdmFsdWUgYmVnaW5zIHdpdGggdGhlIHByZWZpeCB2YWx1ZS5cbiAgICAgKiBJZiB0aGUgdmFsdWUgaXMgdGhlIGVtcHR5IHN0cmluZyB0aGVuIHRoZSBzZWxlY3RvciBkb2VzIG5vdCByZXByZXNlbnQgYW55dGhpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBbdHlwZV49XCJpbWFnZVwiXSBtYXRjaGVzIHR5cGU9XCJpbWFnZW9iamVjdFwiXG4gICAgICovXG4gICAgY2FzZSBQUkVGSVhfQVRUUklCVVRFX09QRVJBVE9SOlxuICAgICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IGZhbHNlIDogbm9kZVByb3BWYWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGgpID09PSB2YWx1ZTtcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIGFuIGVsZW1lbnQgd2l0aCB0aGUgYXR0IGF0dHJpYnV0ZSB3aG9zZSB2YWx1ZSBlbmRzIHdpdGggdGhlIHN1ZmZpeCB2YWx1ZS5cbiAgICAgKiBJZiB0aGUgdmFsdWUgaXMgdGhlIGVtcHR5IHN0cmluZyB0aGVuIHRoZSBzZWxlY3RvciBkb2VzIG5vdCByZXByZXNlbnQgYW55dGhpbmcuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBbdHlwZSQ9XCJpbWFnZVwiXSBtYXRjaGVzIHR5cGU9XCJpbWFnZW9iamVjdFwiXG4gICAgICovXG4gICAgY2FzZSBTVUZGSVhfQVRUUklCVVRFX09QRVJBVE9SOlxuICAgICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IGZhbHNlIDogbm9kZVByb3BWYWx1ZS5zbGljZSgtdmFsdWUubGVuZ3RoKSA9PT0gdmFsdWU7XG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBhbiBlbGVtZW50IHdpdGggdGhlIGF0dCBhdHRyaWJ1dGUgd2hvc2UgdmFsdWUgY29udGFpbnMgYXQgbGVhc3Qgb25lXG4gICAgICogaW5zdGFuY2Ugb2YgdGhlIHZhbHVlLiBJZiB2YWx1ZSBpcyB0aGUgZW1wdHkgc3RyaW5nIHRoZW4gdGhlXG4gICAgICogc2VsZWN0b3IgZG9lcyBub3QgcmVwcmVzZW50IGFueXRoaW5nLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogW3RpdGxlKj1cImhlbGxvXCJdIG1hdGNoZXMgdGl0bGU9XCJ3ZWxsIGhlbGxvIHRoZXJlXCJcbiAgICAgKi9cbiAgICBjYXNlIFNVQlNUUklOR19BVFRSSUJVVEVfT1BFUkFUT1I6XG4gICAgICByZXR1cm4gdmFsdWUgPT09ICcnID8gZmFsc2UgOiBub2RlUHJvcFZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbnp5bWU6OlNlbGVjdG9yOiBVbmtub3duIGF0dHJpYnV0ZSBzZWxlY3RvciBvcGVyYXRvciBcIiR7b3BlcmF0b3J9XCJgKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG1hdGNoUHNldWRvU2VsZWN0b3Iobm9kZSwgdG9rZW4sIHJvb3QpIHtcbiAgY29uc3QgeyBuYW1lLCBwYXJhbWV0ZXJzIH0gPSB0b2tlbjtcbiAgaWYgKG5hbWUgPT09ICdub3QnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgcmV0dXJuIHBhcmFtZXRlcnMuZXZlcnkoKHNlbGVjdG9yKSA9PiByZWR1Y2VUcmVlQnlTZWxlY3RvcihzZWxlY3Rvciwgbm9kZSkubGVuZ3RoID09PSAwKTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ2VtcHR5Jykge1xuICAgIHJldHVybiB0cmVlRmlsdGVyKG5vZGUsIChuKSA9PiBuICE9PSBub2RlKS5sZW5ndGggPT09IDA7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdmaXJzdC1jaGlsZCcpIHtcbiAgICBjb25zdCB7IHJlbmRlcmVkIH0gPSBmaW5kUGFyZW50Tm9kZShyb290LCBub2RlKTtcbiAgICBjb25zdCBbZmlyc3RDaGlsZF0gPSByZW5kZXJlZDtcbiAgICByZXR1cm4gZmlyc3RDaGlsZCA9PT0gbm9kZTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ2xhc3QtY2hpbGQnKSB7XG4gICAgY29uc3QgeyByZW5kZXJlZCB9ID0gZmluZFBhcmVudE5vZGUocm9vdCwgbm9kZSk7XG4gICAgcmV0dXJuIHJlbmRlcmVkW3JlbmRlcmVkLmxlbmd0aCAtIDFdID09PSBub2RlO1xuICB9XG4gIGlmIChuYW1lID09PSAnZm9jdXMnKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRW56eW1lOjpTZWxlY3RvciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBcIjpmb2N1c1wiIHBzZXVkby1lbGVtZW50IHdpdGhvdXQgYSBnbG9iYWwgYGRvY3VtZW50YC4nKTtcbiAgICB9XG4gICAgY29uc3QgYWRhcHRlciA9IGdldEFkYXB0ZXIoKTtcbiAgICAvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbiAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBhZGFwdGVyLm5vZGVUb0hvc3ROb2RlKG5vZGUpID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRW56eW1lOjpTZWxlY3RvciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBcIiR7dG9rZW4ubmFtZX1cIiBwc2V1ZG8tZWxlbWVudCBvciBwc2V1ZG8tY2xhc3Mgc2VsZWN0b3JzLmApO1xufVxuXG4vKipcbiAqIFRha2VzIGEgbm9kZSBhbmQgYSB0b2tlbiBhbmQgZGV0ZXJtaW5lcyBpZiB0aGUgbm9kZVxuICogbWF0Y2hlcyB0aGUgcHJlZGljYXRlIGRlZmluZWQgYnkgdGhlIHRva2VuLlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge1Rva2VufSB0b2tlblxuICovXG5mdW5jdGlvbiBub2RlTWF0Y2hlc1Rva2VuKG5vZGUsIHRva2VuLCByb290KSB7XG4gIGlmIChub2RlID09PSBudWxsIHx8IHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBNYXRjaCBldmVyeSBub2RlXG4gICAgICogQGV4YW1wbGUgJyonIG1hdGNoZXMgZXZlcnkgbm9kZVxuICAgICAqL1xuICAgIGNhc2UgVU5JVkVSU0FMX1NFTEVDVE9SOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgLyoqXG4gICAgICogTWF0Y2ggYWdhaW5zdCB0aGUgY2xhc3NOYW1lIHByb3BcbiAgICAgKiBAZXhhbXBsZSAnLmFjdGl2ZScgbWF0Y2hlcyA8ZGl2IGNsYXNzTmFtZT0nYWN0aXZlJyAvPlxuICAgICAqL1xuICAgIGNhc2UgQ0xBU1NfU0VMRUNUT1I6XG4gICAgICByZXR1cm4gaGFzQ2xhc3NOYW1lKG5vZGUsIHRva2VuLm5hbWUpO1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSB0eXBlIG1hdGNoaW5nXG4gICAgICogQGV4YW1wbGUgJ2RpdicgbWF0Y2hlcyA8ZGl2IC8+XG4gICAgICovXG4gICAgY2FzZSBUWVBFX1NFTEVDVE9SOlxuICAgICAgcmV0dXJuIG5vZGVIYXNUeXBlKG5vZGUsIHRva2VuLm5hbWUpO1xuICAgIC8qKlxuICAgICAqIE1hdGNoIGFnYWluc3QgdGhlIGBpZGAgcHJvcFxuICAgICAqIEBleGFtcGxlICcjbmF2JyBtYXRjaGVzIDx1bCBpZD1cIm5hdlwiIC8+XG4gICAgICovXG4gICAgY2FzZSBJRF9TRUxFQ1RPUjpcbiAgICAgIHJldHVybiBub2RlSGFzSWQobm9kZSwgdG9rZW4ubmFtZSk7XG4gICAgLyoqXG4gICAgICogTWF0Y2hlcyBpZiBhbiBhdHRyaWJ1dGUgaXMgcHJlc2VudCwgcmVnYXJkbGVzc1xuICAgICAqIG9mIGl0cyB2YWx1ZVxuICAgICAqIEBleGFtcGxlICdbZGlzYWJsZWRdJyBtYXRjaGVzIDxhIGRpc2FibGVkIC8+XG4gICAgICovXG4gICAgY2FzZSBBVFRSSUJVVEVfUFJFU0VOQ0U6XG4gICAgICByZXR1cm4gbWF0Y2hBdHRyaWJ1dGVTZWxlY3Rvcihub2RlLCB0b2tlbik7XG4gICAgLyoqXG4gICAgICogTWF0Y2hlcyBpZiBhbiBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIHRoZVxuICAgICAqIHByb3ZpZGVkIHZhbHVlXG4gICAgICogQGV4YW1wbGUgJ1tkYXRhLWZvbz1mb29dJyBtYXRjaGVzIDxkaXYgZGF0YS1mb289XCJmb29cIiAvPlxuICAgICAqL1xuICAgIGNhc2UgQVRUUklCVVRFX1ZBTFVFOlxuICAgICAgcmV0dXJuIG1hdGNoQXR0cmlidXRlU2VsZWN0b3Iobm9kZSwgdG9rZW4pO1xuICAgIGNhc2UgUFNFVURPX0VMRU1FTlQ6XG4gICAgY2FzZSBQU0VVRE9fQ0xBU1M6XG4gICAgICByZXR1cm4gbWF0Y2hQc2V1ZG9TZWxlY3Rvcihub2RlLCB0b2tlbiwgcm9vdCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0b2tlbiB0eXBlOiAke3Rva2VuLnR5cGV9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIGFcbiAqIG5vZGUgbWF0Y2hlcyBldmVyeSB0b2tlbiBpbiB0aGUgYm9keSBvZiBhIHNlbGVjdG9yXG4gKiB0b2tlbi5cbiAqIEBwYXJhbSB7VG9rZW59IHRva2VuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUHJlZGljYXRlRnJvbVRva2VuKHRva2VuLCByb290KSB7XG4gIHJldHVybiAobm9kZSkgPT4gdG9rZW4uYm9keS5ldmVyeSgoYm9keVRva2VuKSA9PiBub2RlTWF0Y2hlc1Rva2VuKG5vZGUsIGJvZHlUb2tlbiwgcm9vdCkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBhIHBhcnNlZCBzZWxlY3RvciBpcyBhIGNvbXBsZXggc2VsZWN0b3IsIHdoaWNoXG4gKiBpcyBkZWZpbmVkIGFzIGEgc2VsZWN0b3IgdGhhdCBjb250YWlucyBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7QXJyYXk8VG9rZW4+fSB0b2tlbnNcbiAqL1xuZnVuY3Rpb24gaXNDb21wbGV4U2VsZWN0b3IodG9rZW5zKSB7XG4gIHJldHVybiB0b2tlbnMuc29tZSgodG9rZW4pID0+IHRva2VuLnR5cGUgIT09IFNFTEVDVE9SKTtcbn1cblxuXG4vKipcbiAqIFRha2VzIGEgY29tcG9uZW50IGNvbnN0cnVjdG9yLCBvYmplY3QsIG9yIHN0cmluZyByZXByZXNlbnRpbmdcbiAqIGEgc2ltcGxlIHNlbGVjdG9yIGFuZCByZXR1cm5zIGEgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgY2FuXG4gKiBiZSBhcHBsaWVkIHRvIGEgc2luZ2xlIG5vZGUuXG4gKiBAcGFyYW0ge0VuenltZVNlbGVjdG9yfSBzZWxlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQcmVkaWNhdGUoc2VsZWN0b3IpIHtcbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGlzIGEgc3RyaW5nLCBwYXJzZSBpdCBhcyBhIHNpbXBsZSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBzYWZlbHlHZW5lcmF0ZVRva2VucyhzZWxlY3Rvcik7XG4gICAgaWYgKGlzQ29tcGxleFNlbGVjdG9yKHRva2VucykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXMgbWV0aG9kIGRvZXMgbm90IHN1cHBvcnQgY29tcGxleCBDU1Mgc2VsZWN0b3JzJyk7XG4gICAgfVxuICAgIC8vIFNpbXBsZSBzZWxlY3RvcnMgb25seSBoYXZlIGEgc2luZ2xlIHNlbGVjdG9yIHRva2VuXG4gICAgcmV0dXJuIGJ1aWxkUHJlZGljYXRlRnJvbVRva2VuKHRva2Vuc1swXSk7XG4gIH1cblxuICAvLyBJZiB0aGUgc2VsZWN0b3IgaXMgYW4gZWxlbWVudCB0eXBlLCBjaGVjayBpZiB0aGUgbm9kZSdzIHR5cGUgbWF0Y2hlc1xuICBjb25zdCBhZGFwdGVyID0gZ2V0QWRhcHRlcigpO1xuICBjb25zdCBpc0VsZW1lbnRUeXBlID0gYWRhcHRlci5pc1ZhbGlkRWxlbWVudFR5cGVcbiAgICA/IGFkYXB0ZXIuaXNWYWxpZEVsZW1lbnRUeXBlKHNlbGVjdG9yKVxuICAgIDogdHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNFbGVtZW50VHlwZSkge1xuICAgIHJldHVybiAobm9kZSkgPT4gYWRhcHRlci5tYXRjaGVzRWxlbWVudFR5cGUobm9kZSwgc2VsZWN0b3IpO1xuICB9XG4gIC8vIElmIHRoZSBzZWxlY3RvciBpcyBhbiBub24tZW1wdHkgb2JqZWN0LCB0cmVhdCB0aGUga2V5cy92YWx1ZXMgYXMgcHJvcHNcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2VsZWN0b3IpICYmIHNlbGVjdG9yICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHNlbGVjdG9yKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBoYXNVbmRlZmluZWRWYWx1ZXMgPSB2YWx1ZXMoc2VsZWN0b3IpLnNvbWUoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKTtcbiAgICAgIGlmIChoYXNVbmRlZmluZWRWYWx1ZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRW56eW1lOjpQcm9wcyBjYW7igJl0IGhhdmUgYHVuZGVmaW5lZGAgdmFsdWVzLiBUcnkgdXNpbmcg4oCYZmluZFdoZXJlKCnigJkgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAobm9kZSkgPT4gbm9kZU1hdGNoZXNPYmplY3RQcm9wcyhub2RlLCBzZWxlY3Rvcik7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuenltZTo6U2VsZWN0b3IgZG9lcyBub3Qgc3VwcG9ydCBhbiBhcnJheSwgbnVsbCwgb3IgZW1wdHkgb2JqZWN0IGFzIGEgc2VsZWN0b3InKTtcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuenltZTo6U2VsZWN0b3IgZXhwZWN0cyBhIHN0cmluZywgb2JqZWN0LCBvciB2YWxpZCBlbGVtZW50IHR5cGUgKENvbXBvbmVudCBDb25zdHJ1Y3RvciknKTtcbn1cblxuLyoqXG4gKiBNYXRjaGVzIG9ubHkgbm9kZXMgd2hpY2ggYXJlIGFkamFjZW50IHNpYmxpbmdzIChkaXJlY3QgbmV4dCBzaWJsaW5nKVxuICogYWdhaW5zdCBhIHByZWRpY2F0ZSwgcmV0dXJuaW5nIHRob3NlIHRoYXQgbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5PE5vZGU+fSBub2Rlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlXG4gKiBAcGFyYW0ge05vZGV9IHJvb3RcbiAqL1xuZnVuY3Rpb24gbWF0Y2hBZGphY2VudFNpYmxpbmdzKG5vZGVzLCBwcmVkaWNhdGUsIHJvb3QpIHtcbiAgcmV0dXJuIG5vZGVzLnJlZHVjZSgobWF0Y2hlcywgbm9kZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGZpbmRQYXJlbnROb2RlKHJvb3QsIG5vZGUpO1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGFyZW50LCB0aGVyZSdzIG5vIHNpYmxpbmdzXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRDaGlsZHJlbiA9IGNoaWxkcmVuT2ZOb2RlKHBhcmVudCk7XG4gICAgY29uc3Qgbm9kZUluZGV4ID0gcGFyZW50Q2hpbGRyZW4uaW5kZXhPZihub2RlKTtcbiAgICBjb25zdCBhZGphY2VudFNpYmxpbmcgPSBwYXJlbnRDaGlsZHJlbltub2RlSW5kZXggKyAxXTtcbiAgICAvLyBObyBzaWJsaW5nXG4gICAgaWYgKCFhZGphY2VudFNpYmxpbmcpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH1cbiAgICBpZiAocHJlZGljYXRlKGFkamFjZW50U2libGluZykpIHtcbiAgICAgIG1hdGNoZXMucHVzaChhZGphY2VudFNpYmxpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfSwgW10pO1xufVxuXG4vKipcbiAqIE1hdGNoZXMgb25seSBub2RlcyB3aGljaCBhcmUgZ2VuZXJhbCBzaWJsaW5ncyAoYW55IHNpYmxpbmcgKmFmdGVyKilcbiAqIGFnYWluc3QgYSBwcmVkaWNhdGUsIHJldHVybmluZyB0aG9zZSB0aGF0IG1hdGNoLlxuICogQHBhcmFtIHtBcnJheTxOb2RlPn0gbm9kZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZVxuICogQHBhcmFtIHtOb2RlfSByb290XG4gKi9cbmZ1bmN0aW9uIG1hdGNoR2VuZXJhbFNpYmxpbmcobm9kZXMsIHByZWRpY2F0ZSwgcm9vdCkge1xuICByZXR1cm4gdW5pcXVlUmVkdWNlKChtYXRjaGVzLCBub2RlKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZmluZFBhcmVudE5vZGUocm9vdCwgbm9kZSk7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRDaGlsZHJlbiA9IGNoaWxkcmVuT2ZOb2RlKHBhcmVudCk7XG4gICAgY29uc3Qgbm9kZUluZGV4ID0gcGFyZW50Q2hpbGRyZW4uaW5kZXhPZihub2RlKTtcbiAgICBjb25zdCB5b3VuZ2VyU2libGluZ3MgPSBwYXJlbnRDaGlsZHJlbi5zbGljZShub2RlSW5kZXggKyAxKTtcbiAgICByZXR1cm4gbWF0Y2hlcy5jb25jYXQoeW91bmdlclNpYmxpbmdzLmZpbHRlcihwcmVkaWNhdGUpKTtcbiAgfSwgbm9kZXMpO1xufVxuXG4vKipcbiAqIE1hdGNoZXMgb25seSBub2RlcyB3aGljaCBhcmUgZGlyZWN0IGNoaWxkcmVuIChub3QgZ3JhbmRjaGlsZHJlbiwgZXRjLilcbiAqIGFnYWluc3QgYSBwcmVkaWNhdGUsIHJldHVybmluZyB0aG9zZSB0aGF0IG1hdGNoLlxuICogQHBhcmFtIHtBcnJheTxOb2RlPn0gbm9kZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZVxuICovXG5mdW5jdGlvbiBtYXRjaERpcmVjdENoaWxkKG5vZGVzLCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIHVuaXF1ZVJlZHVjZShcbiAgICAobWF0Y2hlcywgbm9kZSkgPT4gbWF0Y2hlcy5jb25jYXQoY2hpbGRyZW5PZk5vZGUobm9kZSkuZmlsdGVyKHByZWRpY2F0ZSkpLFxuICAgIG5vZGVzLFxuICApO1xufVxuXG4vKipcbiAqIE1hdGNoZXMgYWxsIGRlc2NlbmRhbnQgbm9kZXMgYWdhaW5zdCBhIHByZWRpY2F0ZSxcbiAqIHJldHVybmluZyB0aG9zZSB0aGF0IG1hdGNoLlxuICogQHBhcmFtIHtBcnJheTxOb2RlPn0gbm9kZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZVxuICovXG5mdW5jdGlvbiBtYXRjaERlc2NlbmRhbnQobm9kZXMsIHByZWRpY2F0ZSkge1xuICByZXR1cm4gdW5pcXVlUmVkdWNlKFxuICAgIChtYXRjaGVzLCBub2RlKSA9PiBtYXRjaGVzLmNvbmNhdCh0cmVlRmlsdGVyKG5vZGUsIHByZWRpY2F0ZSkpLFxuICAgIGZsYXQobm9kZXMubWFwKGNoaWxkcmVuT2ZOb2RlKSksXG4gICk7XG59XG5cbi8qKlxuICogVGFrZXMgYW4gUlNUIGFuZCByZWR1Y2VzIGl0IHRvIGEgc2V0IG9mIG5vZGVzIG1hdGNoaW5nXG4gKiB0aGUgc2VsZWN0b3IuIFRoZSBzZWxlY3RvciBjYW4gYmUgYSBzaW1wbGUgc2VsZWN0b3IsIHdoaWNoXG4gKiBpcyBoYW5kbGVkIGJ5IGBidWlsZFByZWRpY2F0ZWAsIG9yIGEgY29tcGxleCBDU1Mgc2VsZWN0b3Igd2hpY2hcbiAqIHJlZHVjZVRyZWVCeVNlbGVjdG9yIHBhcnNlcyBhbmQgcmVkdWNlcyB0aGUgdHJlZSBiYXNlZCBvbiB0aGUgY29tYmluYXRvcnMuXG4gKlxuICogQHBhcmFtIHtFbnp5bWVTZWxlY3Rvcn0gc2VsZWN0b3JcbiAqIEBwYXJhbSB7UlNUTm9kZX0gcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlVHJlZUJ5U2VsZWN0b3Ioc2VsZWN0b3IsIHJvb3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGVsZW1lbnRzQnlDb25zdHJ1Y3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmbGF0KGVsZW1lbnRzLm1hcCgoeCkgPT4gcmVkdWNlVHJlZUJ5U2VsZWN0b3IoeC50YWcsIHJvb3QpKSk7XG5cbiAgICAgIC8vIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2F3ZWFyeS9yc3Qtc2VsZWN0b3ItcGFyc2VyL2lzc3Vlcy8xNSBpcyByZXNvbHZlZFxuICAgICAgLy8gY29uc3QgaHRtbFRhZ05hbWVzID0gZWxlbWVudHMubWFwKHggPT4geC50YWcpLmpvaW4oJywgJyk7XG4gICAgICAvLyByZXR1cm4gcmVkdWNlVHJlZUJ5U2VsZWN0b3IoaHRtbFRhZ05hbWVzLCByb290KTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBzZWxlY3RvciA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdHJlZUZpbHRlcihyb290LCBidWlsZFByZWRpY2F0ZShzZWxlY3RvcikpO1xuICB9XG5cbiAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBzYWZlbHlHZW5lcmF0ZVRva2VucyhzZWxlY3Rvcik7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpbmRleF07XG4gICAgICAvKipcbiAgICAgICAqIFRoZXJlIGFyZSB0d28gdHlwZXMgb2YgdG9rZW5zIGluIGEgQ1NTIHNlbGVjdG9yOlxuICAgICAgICpcbiAgICAgICAqIDEuIFNlbGVjdG9yIHRva2Vucy4gVGhlc2UgdGFyZ2V0IG5vZGVzIGRpcmVjdGx5LCBsaWtlXG4gICAgICAgKiAgICB0eXBlIG9yIGF0dHJpYnV0ZSBzZWxlY3RvcnMuIFRoZXNlIGFyZSBlYXN5IHRvIGFwcGx5XG4gICAgICAgKiAgICBiZWNhdXNlIHdlIGNhbiB0cmF2ZXJzZSB0aGUgdHJlZSBhbmQgcmV0dXJuIG9ubHlcbiAgICAgICAqICAgIHRoZSBub2RlcyB0aGF0IG1hdGNoIHRoZSBwcmVkaWNhdGUuXG4gICAgICAgKlxuICAgICAgICogMi4gQ29tYmluYXRvciB0b2tlbnMuIFRoZXNlIHRva2VucyBjaGFpbiB0b2dldGhlclxuICAgICAgICogICAgc2VsZWN0b3Igbm9kZXMuIEZvciBleGFtcGxlID4gZm9yIGNoaWxkcmVuLCBvciArXG4gICAgICAgKiAgICBmb3IgYWRqYWNlbnQgc2libGluZ3MuIFRoZXNlIGFyZSBoYXJkZXIgdG8gbWF0Y2hcbiAgICAgICAqICAgIGFzIHdlIGhhdmUgdG8gdHJhY2sgd2hlcmUgaW4gdGhlIHRyZWUgd2UgYXJlXG4gICAgICAgKiAgICB0byBkZXRlcm1pbmUgaWYgYSBzZWxlY3RvciBub2RlIGFwcGxpZXMgb3Igbm90LlxuICAgICAgICovXG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gU0VMRUNUT1IpIHtcbiAgICAgICAgY29uc3QgcHJlZGljYXRlID0gYnVpbGRQcmVkaWNhdGVGcm9tVG9rZW4odG9rZW4sIHJvb3QpO1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQodHJlZUZpbHRlcihyb290LCBwcmVkaWNhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlIGNhbiBhc3N1bWUgdGhlcmUgYWx3YXlzIGFsbCBwcmV2aW91c2x5IG1hdGNoZWQgdG9rZW5zIHNpbmNlIHNlbGVjdG9yc1xuICAgICAgICAvLyBjYW5ub3Qgc3RhcnQgd2l0aCBjb21iaW5hdG9ycy5cbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0b2tlbjtcbiAgICAgICAgLy8gV2UgYXNzdW1lIHRoZSBuZXh0IHRva2VuIGlzIGEgc2VsZWN0b3IsIHNvIG1vdmUgdGhlIGluZGV4XG4gICAgICAgIC8vIGZvcndhcmQgYW5kIGJ1aWxkIHRoZSBwcmVkaWNhdGUuXG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGNvbnN0IHByZWRpY2F0ZSA9IGJ1aWxkUHJlZGljYXRlRnJvbVRva2VuKHRva2Vuc1tpbmRleF0sIHJvb3QpO1xuICAgICAgICAvLyBXZSBtYXRjaCBhZ2FpbnN0IG9ubHkgdGhlIG5vZGVzIHdoaWNoIGhhdmUgYWxyZWFkeSBiZWVuIG1hdGNoZWQsXG4gICAgICAgIC8vIHNpbmNlIGEgY29tYmluYXRvciBpcyBtZWFudCB0byByZWZpbmUgYSBwcmV2aW91cyBzZWxlY3Rvci5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgLy8gVGhlICsgY29tYmluYXRvclxuICAgICAgICAgIGNhc2UgQURKQUNFTlRfU0lCTElORzpcbiAgICAgICAgICAgIHJlc3VsdHMgPSBtYXRjaEFkamFjZW50U2libGluZ3MocmVzdWx0cywgcHJlZGljYXRlLCByb290KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIFRoZSB+IGNvbWJpbmF0b3JcbiAgICAgICAgICBjYXNlIEdFTkVSQUxfU0lCTElORzpcbiAgICAgICAgICAgIHJlc3VsdHMgPSBtYXRjaEdlbmVyYWxTaWJsaW5nKHJlc3VsdHMsIHByZWRpY2F0ZSwgcm9vdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBUaGUgPiBjb21iaW5hdG9yXG4gICAgICAgICAgY2FzZSBDSElMRDpcbiAgICAgICAgICAgIHJlc3VsdHMgPSBtYXRjaERpcmVjdENoaWxkKHJlc3VsdHMsIHByZWRpY2F0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBUaGUgJyAnICh3aGl0ZXNwYWNlKSBjb21iaW5hdG9yXG4gICAgICAgICAgY2FzZSBERVNDRU5EQU5UOiB7XG4gICAgICAgICAgICByZXN1bHRzID0gbWF0Y2hEZXNjZW5kYW50KHJlc3VsdHMsIHByZWRpY2F0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21iaW5hdG9yIHNlbGVjdG9yOiAke3R5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuenltZTo6U2VsZWN0b3IgZXhwZWN0cyBhIHN0cmluZywgb2JqZWN0LCBvciBDb21wb25lbnQgQ29uc3RydWN0b3InKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVRyZWVzQnlTZWxlY3RvcihzZWxlY3Rvciwgcm9vdHMpIHtcbiAgY29uc3QgcmVzdWx0cyA9IHJvb3RzLm1hcCgobikgPT4gcmVkdWNlVHJlZUJ5U2VsZWN0b3Ioc2VsZWN0b3IsIG4pKTtcbiAgcmV0dXJuIHVuaXF1ZShmbGF0KHJlc3VsdHMsIDEpKTtcbn1cbiJdfQ==
//# sourceMappingURL=selectors.js.map