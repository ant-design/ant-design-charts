// src/resolver.js
module.exports = (path, options) => {
  return options.defaultResolver(path, {
    ...options,
    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)
    packageFilter: (pkg) => {
      return {
        ...pkg,
        main: pkg.main || pkg.module
      };
    }
  });
};
