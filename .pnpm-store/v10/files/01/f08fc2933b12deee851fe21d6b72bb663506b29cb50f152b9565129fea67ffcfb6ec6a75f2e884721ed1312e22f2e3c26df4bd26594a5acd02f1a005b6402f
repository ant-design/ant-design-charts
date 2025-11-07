exports.type = 'perItem';

exports.active = true;

exports.description = 'removes non-inheritable group’s presentational attributes';

const { inheritableAttrs } = require('./_collections');
const { attrsGroups } = require('./_collections');
const applyGroups = require('./_collections').presentationNonInheritableGroupAttrs;

/**
 * Remove non-inheritable group's "presentation" attributes.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich
 */
exports.fn = function (item) {
  if (item.isElem('g')) {
    item.eachAttr((attr) => {
      if (
        ~attrsGroups.presentation.indexOf(attr.name)
        && !~inheritableAttrs.indexOf(attr.name)
        && !~applyGroups.indexOf(attr.name)
      ) {
        item.removeAttr(attr.name);
      }
    });
  }
};
