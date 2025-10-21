/**
 * Plugins engine.
 *
 * @module plugins
 *
 * @param {Object} data input data
 * @param {Object} info extra information
 * @param {Object} plugins plugins object from config
 * @return {Object} output data
 */
module.exports = function (data, info, plugins) {
  plugins.forEach((group) => {
    switch (group[0].type) {
      case 'perItem':
        data = perItem(data, info, group);
        break;
      case 'perItemReverse':
        data = perItem(data, info, group, true);
        break;
      case 'full':
        data = full(data, info, group);
        break;

      default:
        break;
    }
  });

  return data;
};

/**
 * Direct or reverse per-item loop.
 *
 * @param {Object} data input data
 * @param {Object} info extra information
 * @param {Array} plugins plugins list to process
 * @param {Boolean} [reverse] reverse pass?
 * @return {Object} output data
 */
function perItem(data, info, plugins, reverse) {
  function monkeys(items) {
    items.content = items.content.filter((item) => {
      // reverse pass
      if (reverse && item.content) {
        monkeys(item);
      }

      // main filter
      let filter = true;

      for (let i = 0; filter && i < plugins.length; i++) {
        const plugin = plugins[i];

        if (plugin.active && plugin.fn(item, plugin.params, info) === false) {
          filter = false;
        }
      }

      // direct pass
      if (!reverse && item.content) {
        monkeys(item);
      }

      return filter;
    });

    return items;
  }

  return monkeys(data);
}

/**
 * "Full" plugins.
 *
 * @param {Object} data input data
 * @param {Object} info extra information
 * @param {Array} plugins plugins list to process
 * @return {Object} output data
 */
function full(data, info, plugins) {
  plugins.forEach((plugin) => {
    if (plugin.active) {
      data = plugin.fn(data, plugin.params, info);
    }
  });

  return data;
}
