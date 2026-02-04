const { runAsWorker } = require('synckit')

runAsWorker(async (id, path, args) => {
  const root = await import(id)
  const method = path.pop()
  const receiver = path.reduce((acc, cur) => acc[cur], root)
  return receiver[method](...args)
})
