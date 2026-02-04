'use strict'

function getSourceCode(context) {
  if (context.sourceCode != null) {
    return context.sourceCode
  }

  return context.getSourceCode()
}

function getAncestors(context, node) {
  const sourceCode = getSourceCode(context)
  if (typeof sourceCode.getAncestors === 'function') {
    return sourceCode.getAncestors(node)
  }

  return context.getAncestors(node)
}

function getScope(context, node) {
  const sourceCode = getSourceCode(context)
  if (typeof sourceCode.getScope === 'function') {
    return sourceCode.getScope(node)
  }

  return context.getScope(node)
}

module.exports = {
  getSourceCode,
  getAncestors,
  getScope,
}
