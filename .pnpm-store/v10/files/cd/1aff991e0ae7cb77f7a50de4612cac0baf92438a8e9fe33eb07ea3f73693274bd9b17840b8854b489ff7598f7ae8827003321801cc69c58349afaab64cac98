exports.type = 'perItem';

exports.active = true;

exports.description = 'merges multiple paths in one if possible';

exports.params = {
  collapseRepeated: true,
  force: false,
  leadingZero: true,
  negativeExtraSpace: true,
  noSpaceAfterFlags: true,
};

const { path2js } = require('./_path.js');
const { js2path } = require('./_path.js');
const { intersects } = require('./_path.js');

/**
 * Merge multiple Paths into one.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich, Lev Solntsev
 */
exports.fn = function (item, params) {
  if (!item.isElem() || item.isEmpty()) return;

  let prevContentItem = null;
  let prevContentItemKeys = null;

  item.content = item.content.filter((contentItem) => {
    if (
      prevContentItem
      && prevContentItem.isElem('path')
      && prevContentItem.isEmpty()
      && prevContentItem.hasAttr('d')
      && contentItem.isElem('path')
      && contentItem.isEmpty()
      && contentItem.hasAttr('d')
    ) {
      if (!prevContentItemKeys) {
        prevContentItemKeys = Object.keys(prevContentItem.attrs);
      }

      const contentItemAttrs = Object.keys(contentItem.attrs);
      const equalData = prevContentItemKeys.length == contentItemAttrs.length
          && contentItemAttrs.every((key) => (
            key == 'd'
              || (prevContentItem.hasAttr(key)
                && prevContentItem.attr(key).value == contentItem.attr(key).value)
          ));
      const prevPathJS = path2js(prevContentItem);
      const curPathJS = path2js(contentItem);

      if (equalData && (params.force || !intersects(prevPathJS, curPathJS))) {
        js2path(prevContentItem, prevPathJS.concat(curPathJS), params);
        return false;
      }
    }

    prevContentItem = contentItem;
    prevContentItemKeys = null;
    return true;
  });
};
