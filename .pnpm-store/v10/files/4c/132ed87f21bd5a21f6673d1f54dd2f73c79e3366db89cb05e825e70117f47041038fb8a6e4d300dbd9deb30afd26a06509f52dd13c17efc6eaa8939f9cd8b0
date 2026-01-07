const { runAsWorker } = require('synckit')

runAsWorker(async (id, path, args) => {
  const { receiver, prop } = path.reduce(
    ({ receiver, prop }, cur) => ({
      receiver: receiver[prop],
      prop: cur,
    }),
    {
      receiver: await import(id),
      prop: path.shift(),
    },
  )
  return receiver[prop].apply(receiver, args)
})
