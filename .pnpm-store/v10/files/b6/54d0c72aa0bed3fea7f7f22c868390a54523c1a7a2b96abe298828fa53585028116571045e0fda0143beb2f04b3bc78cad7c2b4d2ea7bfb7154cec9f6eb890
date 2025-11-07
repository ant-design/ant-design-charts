exports.type = 'perItemReverse';

exports.active = true;

exports.description = 'removes empty container elements';

const { container } = require('./_collections').elemsGroups;

/**
 * Remove empty containers.
 *
 * @see http://www.w3.org/TR/SVG/intro.html#TermContainerElement
 *
 * @example
 * <defs/>
 *
 * @example
 * <g><marker><a/></marker></g>
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich
 */
exports.fn = function (item) {
  return !(
    item.isElem(container)
    && !item.isElem('svg')
    && item.isEmpty()
    && (!item.isElem('pattern') || !item.hasAttrLocal('href'))
  );
};
