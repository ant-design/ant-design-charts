exports.type = 'perItem';

exports.active = false;

exports.params = {
  delim: '__',
  prefixIds: true,
  prefixClassNames: true,
};

exports.description = 'prefix IDs';

const path = require('path');
const csstree = require('css-tree');
const unquote = require('unquote');
const collections = require('./_collections.js');

const { referencesProps } = collections;
const rxId = /^#(.*)$/; // regular expression for matching an ID + extracing its name
let addPrefix = null;

// Escapes a string for being used as ID
const escapeIdentifierName = function (str) {
  return str.replace(/[\. ]/g, '_');
};

// Matches an #ID value, captures the ID name
const matchId = function (urlVal) {
  const idUrlMatches = urlVal.match(rxId);
  if (idUrlMatches === null) {
    return false;
  }
  return idUrlMatches[1];
};

// Matches an url(...) value, captures the URL
const matchUrl = function (val) {
  const urlMatches = /url\((.*?)\)/gi.exec(val);
  if (urlMatches === null) {
    return false;
  }
  return urlMatches[1];
};

// Checks if attribute is empty
const attrNotEmpty = function (attr) {
  return attr && attr.value && attr.value.length > 0;
};

// prefixes an #ID
const prefixId = function (val) {
  const idName = matchId(val);
  if (!idName) {
    return false;
  }
  return `#${addPrefix(idName)}`;
};

// attr.value helper methods

// prefixes a class attribute value
const addPrefixToClassAttr = function (attr) {
  if (!attrNotEmpty(attr)) {
    return;
  }

  attr.value = attr.value
    .split(/\s+/)
    .map(addPrefix)
    .join(' ');
};

// prefixes an ID attribute value
const addPrefixToIdAttr = function (attr) {
  if (!attrNotEmpty(attr)) {
    return;
  }

  attr.value = addPrefix(attr.value);
};

// prefixes a href attribute value
const addPrefixToHrefAttr = function (attr) {
  if (!attrNotEmpty(attr)) {
    return;
  }

  const idPrefixed = prefixId(attr.value);
  if (!idPrefixed) {
    return;
  }
  attr.value = idPrefixed;
};

// prefixes an URL attribute value
const addPrefixToUrlAttr = function (attr) {
  if (!attrNotEmpty(attr)) {
    return;
  }

  // url(...) in value
  const urlVal = matchUrl(attr.value);
  if (!urlVal) {
    return;
  }

  const idPrefixed = prefixId(urlVal);
  if (!idPrefixed) {
    return;
  }

  attr.value = `url(${idPrefixed})`;
};

// prefixes begin/end attribute value
const addPrefixToBeginEndAttr = function (attr) {
  if (!attrNotEmpty(attr)) {
    return;
  }

  const parts = attr.value.split('; ').map((val) => {
    val = val.trim();

    if (val.endsWith('.end') || val.endsWith('.start')) {
      const idPostfix = val.split('.');
      const id = idPostfix[0];
      const postfix = idPostfix[1];

      let idPrefixed = prefixId(`#${id}`);

      if (!idPrefixed) {
        return val;
      }

      idPrefixed = idPrefixed.slice(1);
      return `${idPrefixed}.${postfix}`;
    }
    return val;
  });

  attr.value = parts.join('; ');
};

/**
 * Prefixes identifiers
 *
 * @param {Object} node node
 * @param {Object} opts plugin params
 * @param {Object} extra plugin extra information
 *
 * @author strarsis <strarsis@gmail.com>
 */
exports.fn = function (node, opts, extra) {
  // skip subsequent passes when multipass is used
  if (extra.multipassCount && extra.multipassCount > 0) {
    return node;
  }

  // prefix, from file name or option
  let prefix = 'prefix';
  if (opts.prefix) {
    if (typeof opts.prefix === 'function') {
      prefix = opts.prefix(node, extra);
    } else {
      prefix = opts.prefix;
    }
  } else if (opts.prefix === false) {
    prefix = false;
  } else if (extra && extra.path && extra.path.length > 0) {
    const filename = path.basename(extra.path);
    prefix = filename;
  }

  // prefixes a normal value
  addPrefix = function (name) {
    if (prefix === false) {
      return escapeIdentifierName(name);
    }
    return escapeIdentifierName(prefix + opts.delim + name);
  };

  // <style/> property values

  if (node.elem === 'style') {
    if (node.isEmpty()) {
      // skip empty <style/>s
      return node;
    }

    const cssStr = node.content[0].text || node.content[0].cdata || [];

    let cssAst = {};
    try {
      cssAst = csstree.parse(cssStr, {
        parseValue: true,
        parseCustomProperty: false,
      });
    } catch (parseError) {
      console.warn(
        `Warning: Parse error of styles of <style/> element, skipped. Error details: ${parseError}`,
      );
      return node;
    }

    let idPrefixed = '';
    csstree.walk(cssAst, (node) => {
      // #ID, .class
      if (
        ((opts.prefixIds && node.type === 'IdSelector')
          || (opts.prefixClassNames && node.type === 'ClassSelector'))
        && node.name
      ) {
        node.name = addPrefix(node.name);
        return;
      }

      // url(...) in value
      if (node.type === 'Url' && node.value.value && node.value.value.length > 0) {
        idPrefixed = prefixId(unquote(node.value.value));
        if (!idPrefixed) {
          return;
        }
        node.value.value = idPrefixed;
      }
    });

    // update <style>s
    node.content[0].text = csstree.generate(cssAst);
    return node;
  }

  // element attributes

  if (!node.attrs) {
    return node;
  }

  // Nodes

  if (opts.prefixIds) {
    // ID
    addPrefixToIdAttr(node.attrs.id);
  }

  if (opts.prefixClassNames) {
    // Class
    addPrefixToClassAttr(node.attrs.class);
  }

  // References

  // href
  addPrefixToHrefAttr(node.attrs.href);

  // (xlink:)href (deprecated, must be still supported)
  addPrefixToHrefAttr(node.attrs['xlink:href']);

  // (referenceable) properties
  for (const referencesProp of referencesProps) {
    addPrefixToUrlAttr(node.attrs[referencesProp]);
  }

  addPrefixToBeginEndAttr(node.attrs.begin);
  addPrefixToBeginEndAttr(node.attrs.end);

  return node;
};
