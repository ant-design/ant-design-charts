module.exports = function postcssPrefixSelector(options) {
  const prefix = options.prefix;
  const prefixWithSpace = /\s+$/.test(prefix) ? prefix : `${prefix} `;
  const ignoreFiles = options.ignoreFiles ? [].concat(options.ignoreFiles) : [];
  const includeFiles = options.includeFiles
    ? [].concat(options.includeFiles)
    : [];

  return function (root) {
    if (
      ignoreFiles.length &&
      root.source.input.file &&
      isFileInArray(root.source.input.file, ignoreFiles)
    ) {
      return;
    }
    if (
      includeFiles.length &&
      root.source.input.file &&
      !isFileInArray(root.source.input.file, includeFiles)
    ) {
      return;
    }

    root.walkRules((rule) => {
      const keyframeRules = [
        'keyframes',
        '-webkit-keyframes',
        '-moz-keyframes',
        '-o-keyframes',
      ];

      if (rule.parent && keyframeRules.includes(rule.parent.name)) {
        return;
      }

      rule.selectors = rule.selectors.map((selector) => {
        if (options.exclude && excludeSelector(selector, options.exclude)) {
          return selector;
        }

        if (options.transform) {
          return options.transform(
            prefix,
            selector,
            prefixWithSpace + selector,
            root.source.input.file,
            rule
          );
        }

        return prefixWithSpace + selector;
      });
    });
  };
};

function isFileInArray(file, arr) {
  return arr.some((ruleOrString) => {
    if (ruleOrString instanceof RegExp) {
      return ruleOrString.test(file);
    }

    return file.includes(ruleOrString);
  });
}

function excludeSelector(selector, excludeArr) {
  return excludeArr.some((excludeRule) => {
    if (excludeRule instanceof RegExp) {
      return excludeRule.test(selector);
    }

    return selector === excludeRule;
  });
}
