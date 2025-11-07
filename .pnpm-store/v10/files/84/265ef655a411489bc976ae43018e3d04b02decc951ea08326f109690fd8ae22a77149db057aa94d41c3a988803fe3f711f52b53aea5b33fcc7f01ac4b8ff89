"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));
var React = _interopRequireWildcard(require("react"));
function isString(str) {
  return typeof str === 'string';
}

/**
 * Find the longest common prefix between two strings
 */
function findCommonPrefix(str1, str2) {
  let i = 0;
  const minLength = Math.min(str1.length, str2.length);
  while (i < minLength && str1[i] === str2[i]) {
    i++;
  }
  return i;
}

/**
 * Return typed content and typing status when typing is enabled.
 * Or return content directly.
 */
const useTypedEffect = (content, typingEnabled, typingStep, typingInterval) => {
  const prevContentRef = React.useRef('');
  const [typingIndex, setTypingIndex] = React.useState(1);
  const mergedTypingEnabled = typingEnabled && isString(content);

  // Reset typing index when content changed
  (0, _useLayoutEffect.default)(() => {
    if (!mergedTypingEnabled && isString(content)) {
      setTypingIndex(content.length);
    } else if (isString(content) && isString(prevContentRef.current) && content.indexOf(prevContentRef.current) !== 0) {
      // Handle empty strings
      if (!content || !prevContentRef.current) {
        setTypingIndex(1);
        return;
      }

      // Find the longest common prefix between new and old content
      const commonPrefixLength = findCommonPrefix(content, prevContentRef.current);

      // If there's no common prefix, start from beginning
      // If there's a common prefix, start from the point where they differ
      if (commonPrefixLength === 0) {
        // Scenario 1: No common prefix, start from the beginning (AI completely changes the thinking process of the answer).
        setTypingIndex(1);
      } else {
        // Scenario 2: There is a common prefix, start from the point where they differ (common streaming output scenario)
        setTypingIndex(commonPrefixLength + 1);
      }
    }
    prevContentRef.current = content;
  }, [content]);

  // Start typing
  React.useEffect(() => {
    if (mergedTypingEnabled && typingIndex < content.length) {
      const id = setTimeout(() => {
        setTypingIndex(prev => prev + typingStep);
      }, typingInterval);
      return () => {
        clearTimeout(id);
      };
    }
  }, [typingIndex, typingEnabled, content]);
  const mergedTypingContent = mergedTypingEnabled ? content.slice(0, typingIndex) : content;
  return [mergedTypingContent, mergedTypingEnabled && typingIndex < content.length];
};
var _default = exports.default = useTypedEffect;