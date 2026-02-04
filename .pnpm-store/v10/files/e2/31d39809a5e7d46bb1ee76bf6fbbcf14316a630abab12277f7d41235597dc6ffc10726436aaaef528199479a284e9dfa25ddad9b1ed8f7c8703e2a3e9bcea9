const { createSyncFn } = require('synckit')
const chain = require('./chain')

const exec = createSyncFn(require.resolve('./worker'))

function esmProxy(id) {
  return chain(exec.bind(null, id))
}

module.exports = esmProxy
