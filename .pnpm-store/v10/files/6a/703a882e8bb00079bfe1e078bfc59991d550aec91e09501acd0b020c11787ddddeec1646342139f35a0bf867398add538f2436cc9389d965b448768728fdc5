function chain(fn, path = []) {
  return new Proxy(() => {}, {
    get: (_, prop) => chain(fn, [...path, prop]),
    apply: (_, __, args) => fn(path, args),
  })
}

module.exports = chain
