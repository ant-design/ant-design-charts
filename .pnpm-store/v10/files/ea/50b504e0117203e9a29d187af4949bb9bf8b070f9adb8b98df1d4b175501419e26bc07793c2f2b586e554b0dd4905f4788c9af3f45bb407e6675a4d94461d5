/**
 * Rule: no-promise-in-callback
 * Discourage using promises inside of callbacks.
 */

'use strict'

const { getAncestors } = require('./lib/eslint-compat')
const getDocsUrl = require('./lib/get-docs-url')
const isPromise = require('./lib/is-promise')
const isInsideCallback = require('./lib/is-inside-callback')

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow using promises inside of callbacks.',
      url: getDocsUrl('no-promise-in-callback'),
    },
    schema: [],
    messages: {
      avoidPromiseInCallback: 'Avoid using promises inside of callbacks.',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (!isPromise(node)) return

        // if i'm returning the promise, it's probably not really a callback
        // function, and I should be okay....
        if (node.parent.type === 'ReturnStatement') return

        // what about if the parent is an ArrowFunctionExpression
        // would that imply an implicit return?

        if (getAncestors(context, node).some(isInsideCallback)) {
          context.report({
            node: node.callee,
            messageId: 'avoidPromiseInCallback',
          })
        }
      },
    }
  },
}
