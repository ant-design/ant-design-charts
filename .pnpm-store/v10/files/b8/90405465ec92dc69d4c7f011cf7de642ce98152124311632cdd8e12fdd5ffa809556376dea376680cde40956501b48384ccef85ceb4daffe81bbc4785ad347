/**
 * Rule: no-callback-in-promise
 * Avoid calling back inside of a promise
 */

'use strict'

const { getAncestors } = require('./lib/eslint-compat')
const getDocsUrl = require('./lib/get-docs-url')
const hasPromiseCallback = require('./lib/has-promise-callback')
const isInsidePromise = require('./lib/is-inside-promise')
const isCallback = require('./lib/is-callback')

const CB_BLACKLIST = ['callback', 'cb', 'next', 'done']

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Disallow calling `cb()` inside of a `then()` (use [nodeify][] instead).',
      url: getDocsUrl('no-callback-in-promise'),
    },
    messages: {
      callback: 'Avoid calling back inside of a promise.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          exceptions: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    return {
      CallExpression(node) {
        const options = context.options[0] || {}
        const exceptions = options.exceptions || []
        if (!isCallback(node, exceptions)) {
          // in general we send you packing if you're not a callback
          // but we also need to watch out for whatever.then(cb)
          if (hasPromiseCallback(node)) {
            const name =
              node.arguments && node.arguments[0] && node.arguments[0].name
            if (!exceptions.includes(name) && CB_BLACKLIST.includes(name)) {
              context.report({
                node: node.arguments[0],
                messageId: 'callback',
              })
            }
          }
          return
        }
        if (getAncestors(context, node).some(isInsidePromise)) {
          context.report({
            node,
            messageId: 'callback',
          })
        }
      },
    }
  },
}
