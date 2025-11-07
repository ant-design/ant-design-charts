'use strict'

const getDocsUrl = require('./lib/get-docs-url')
const {
  isPromiseConstructorWithInlineExecutor,
} = require('./lib/is-promise-constructor')

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Enforce consistent param names and ordering when creating new promises.',
      url: getDocsUrl('param-names'),
    },
    schema: [
      {
        type: 'object',
        properties: {
          resolvePattern: { type: 'string' },
          rejectPattern: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      resolveParamNames:
        'Promise constructor parameters must be named to match "{{ resolvePattern }}"',
      rejectParamNames:
        'Promise constructor parameters must be named to match "{{ rejectPattern }}"',
    },
  },
  create(context) {
    const options = context.options[0] || {}
    const resolvePattern = new RegExp(
      options.resolvePattern || '^_?resolve$',
      'u'
    )
    const rejectPattern = new RegExp(options.rejectPattern || '^_?reject$', 'u')

    return {
      NewExpression(node) {
        if (isPromiseConstructorWithInlineExecutor(node)) {
          const params = node.arguments[0].params

          if (!params || !params.length) {
            return
          }

          const resolveParamName = params[0] && params[0].name
          if (resolveParamName && !resolvePattern.test(resolveParamName)) {
            context.report({
              node: params[0],
              messageId: 'resolveParamNames',
              data: {
                resolvePattern: resolvePattern.source,
              },
            })
          }
          const rejectParamName = params[1] && params[1].name
          if (rejectParamName && !rejectPattern.test(rejectParamName)) {
            context.report({
              node: params[1],
              messageId: 'rejectParamNames',
              data: {
                rejectPattern: rejectPattern.source,
              },
            })
          }
        }
      },
    }
  },
}
