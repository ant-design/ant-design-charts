const baseCssAdapter = require('css-select-base-adapter');

/**
 * DOMUtils API for SVGO AST (used by css-select)
 */
const svgoCssSelectAdapterMin = {
  // is the node a tag?
  // isTag: ( node:Node ) => isTag:Boolean
  isTag(node) {
    return node.isElem();
  },

  // get the parent of the node
  // getParent: ( node:Node ) => parentNode:Node
  // returns null when no parent exists
  getParent(node) {
    return node.parentNode || null;
  },

  // get the node's children
  // getChildren: ( node:Node ) => children:[Node]
  getChildren(node) {
    return node.content || [];
  },

  // get the name of the tag
  // getName: ( elem:ElementNode ) => tagName:String
  getName(elemAst) {
    return elemAst.elem;
  },

  // get the text content of the node, and its children if it has any
  // getText: ( node:Node ) => text:String
  // returns empty string when there is no text
  getText(node) {
    return node.content[0].text || node.content[0].cdata || '';
  },

  // get the attribute value
  // getAttributeValue: ( elem:ElementNode, name:String ) => value:String
  // returns null when attribute doesn't exist
  getAttributeValue(elem, name) {
    return elem.hasAttr(name) ? elem.attr(name).value : null;
  },
};

// use base adapter for default implementation
const svgoCssSelectAdapter = baseCssAdapter(svgoCssSelectAdapterMin);

module.exports = svgoCssSelectAdapter;
