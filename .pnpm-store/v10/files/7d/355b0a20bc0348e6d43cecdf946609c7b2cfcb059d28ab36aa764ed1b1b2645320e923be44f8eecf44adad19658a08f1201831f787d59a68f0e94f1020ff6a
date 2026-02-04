"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var KEYCODE_ENTER = 13;
var KEYCODE_TAB = 9;
var KEYCODE_BACKSPACE = 8;
var KEYCODE_Y = 89;
var KEYCODE_Z = 90;
var KEYCODE_M = 77;
var KEYCODE_PARENS = 57;
var KEYCODE_BRACKETS = 219;
var KEYCODE_QUOTE = 222;
var KEYCODE_BACK_QUOTE = 192;
var KEYCODE_ESCAPE = 27;
var HISTORY_LIMIT = 100;
var HISTORY_TIME_GAP = 3000;
var isWindows = typeof window !== 'undefined' &&
    'navigator' in window &&
    /Win/i.test(navigator.platform);
var isMacLike = typeof window !== 'undefined' &&
    'navigator' in window &&
    /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var className = 'npm__react-simple-code-editor__textarea';
var cssText = /* CSS */ "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(className, ":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(className, " {\n    color: transparent !important;\n  }\n\n  .").concat(className, "::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n");
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            capture: true,
        };
        _this._recordCurrentState = function () {
            var input = _this._input;
            if (!input)
                return;
            // Save current state of the input
            var value = input.value, selectionStart = input.selectionStart, selectionEnd = input.selectionEnd;
            _this._recordChange({
                value: value,
                selectionStart: selectionStart,
                selectionEnd: selectionEnd,
            });
        };
        _this._getLines = function (text, position) {
            return text.substring(0, position).split('\n');
        };
        _this._recordChange = function (record, overwrite) {
            var _a, _b, _c;
            if (overwrite === void 0) { overwrite = false; }
            var _d = _this._history, stack = _d.stack, offset = _d.offset;
            if (stack.length && offset > -1) {
                // When something updates, drop the redo operations
                _this._history.stack = stack.slice(0, offset + 1);
                // Limit the number of operations to 100
                var count = _this._history.stack.length;
                if (count > HISTORY_LIMIT) {
                    var extras = count - HISTORY_LIMIT;
                    _this._history.stack = stack.slice(extras, count);
                    _this._history.offset = Math.max(_this._history.offset - extras, 0);
                }
            }
            var timestamp = Date.now();
            if (overwrite) {
                var last = _this._history.stack[_this._history.offset];
                if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
                    // A previous entry exists and was in short interval
                    // Match the last word in the line
                    var re = /[^a-z0-9]([a-z0-9]+)$/i;
                    // Get the previous line
                    var previous = (_a = _this._getLines(last.value, last.selectionStart)
                        .pop()) === null || _a === void 0 ? void 0 : _a.match(re);
                    // Get the current line
                    var current = (_b = _this._getLines(record.value, record.selectionStart)
                        .pop()) === null || _b === void 0 ? void 0 : _b.match(re);
                    if ((previous === null || previous === void 0 ? void 0 : previous[1]) && ((_c = current === null || current === void 0 ? void 0 : current[1]) === null || _c === void 0 ? void 0 : _c.startsWith(previous[1]))) {
                        // The last word of the previous line and current line match
                        // Overwrite previous entry so that undo will remove whole word
                        _this._history.stack[_this._history.offset] = __assign(__assign({}, record), { timestamp: timestamp });
                        return;
                    }
                }
            }
            // Add the new operation to the stack
            _this._history.stack.push(__assign(__assign({}, record), { timestamp: timestamp }));
            _this._history.offset++;
        };
        _this._updateInput = function (record) {
            var input = _this._input;
            if (!input)
                return;
            // Update values and selection state
            input.value = record.value;
            input.selectionStart = record.selectionStart;
            input.selectionEnd = record.selectionEnd;
            _this.props.onValueChange(record.value);
        };
        _this._applyEdits = function (record) {
            // Save last selection state
            var input = _this._input;
            var last = _this._history.stack[_this._history.offset];
            if (last && input) {
                _this._history.stack[_this._history.offset] = __assign(__assign({}, last), { selectionStart: input.selectionStart, selectionEnd: input.selectionEnd });
            }
            // Save the changes
            _this._recordChange(record);
            _this._updateInput(record);
        };
        _this._undoEdit = function () {
            var _a = _this._history, stack = _a.stack, offset = _a.offset;
            // Get the previous edit
            var record = stack[offset - 1];
            if (record) {
                // Apply the changes and update the offset
                _this._updateInput(record);
                _this._history.offset = Math.max(offset - 1, 0);
            }
        };
        _this._redoEdit = function () {
            var _a = _this._history, stack = _a.stack, offset = _a.offset;
            // Get the next edit
            var record = stack[offset + 1];
            if (record) {
                // Apply the changes and update the offset
                _this._updateInput(record);
                _this._history.offset = Math.min(offset + 1, stack.length - 1);
            }
        };
        _this._handleKeyDown = function (e) {
            var _a = _this.props, tabSize = _a.tabSize, insertSpaces = _a.insertSpaces, ignoreTabKey = _a.ignoreTabKey, onKeyDown = _a.onKeyDown;
            if (onKeyDown) {
                onKeyDown(e);
                if (e.defaultPrevented) {
                    return;
                }
            }
            if (e.keyCode === KEYCODE_ESCAPE) {
                e.currentTarget.blur();
            }
            var _b = e.currentTarget, value = _b.value, selectionStart = _b.selectionStart, selectionEnd = _b.selectionEnd;
            var tabCharacter = (insertSpaces ? ' ' : '\t').repeat(tabSize);
            if (e.keyCode === KEYCODE_TAB && !ignoreTabKey && _this.state.capture) {
                // Prevent focus change
                e.preventDefault();
                if (e.shiftKey) {
                    // Unindent selected lines
                    var linesBeforeCaret = _this._getLines(value, selectionStart);
                    var startLine_1 = linesBeforeCaret.length - 1;
                    var endLine_1 = _this._getLines(value, selectionEnd).length - 1;
                    var nextValue = value
                        .split('\n')
                        .map(function (line, i) {
                        if (i >= startLine_1 &&
                            i <= endLine_1 &&
                            line.startsWith(tabCharacter)) {
                            return line.substring(tabCharacter.length);
                        }
                        return line;
                    })
                        .join('\n');
                    if (value !== nextValue) {
                        var startLineText = linesBeforeCaret[startLine_1];
                        _this._applyEdits({
                            value: nextValue,
                            // Move the start cursor if first line in selection was modified
                            // It was modified only if it started with a tab
                            selectionStart: (startLineText === null || startLineText === void 0 ? void 0 : startLineText.startsWith(tabCharacter))
                                ? selectionStart - tabCharacter.length
                                : selectionStart,
                            // Move the end cursor by total number of characters removed
                            selectionEnd: selectionEnd - (value.length - nextValue.length),
                        });
                    }
                }
                else if (selectionStart !== selectionEnd) {
                    // Indent selected lines
                    var linesBeforeCaret = _this._getLines(value, selectionStart);
                    var startLine_2 = linesBeforeCaret.length - 1;
                    var endLine_2 = _this._getLines(value, selectionEnd).length - 1;
                    var startLineText = linesBeforeCaret[startLine_2];
                    _this._applyEdits({
                        value: value
                            .split('\n')
                            .map(function (line, i) {
                            if (i >= startLine_2 && i <= endLine_2) {
                                return tabCharacter + line;
                            }
                            return line;
                        })
                            .join('\n'),
                        // Move the start cursor by number of characters added in first line of selection
                        // Don't move it if it there was no text before cursor
                        selectionStart: startLineText && /\S/.test(startLineText)
                            ? selectionStart + tabCharacter.length
                            : selectionStart,
                        // Move the end cursor by total number of characters added
                        selectionEnd: selectionEnd + tabCharacter.length * (endLine_2 - startLine_2 + 1),
                    });
                }
                else {
                    var updatedSelection = selectionStart + tabCharacter.length;
                    _this._applyEdits({
                        // Insert tab character at caret
                        value: value.substring(0, selectionStart) +
                            tabCharacter +
                            value.substring(selectionEnd),
                        // Update caret position
                        selectionStart: updatedSelection,
                        selectionEnd: updatedSelection,
                    });
                }
            }
            else if (e.keyCode === KEYCODE_BACKSPACE) {
                var hasSelection = selectionStart !== selectionEnd;
                var textBeforeCaret = value.substring(0, selectionStart);
                if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
                    // Prevent default delete behaviour
                    e.preventDefault();
                    var updatedSelection = selectionStart - tabCharacter.length;
                    _this._applyEdits({
                        // Remove tab character at caret
                        value: value.substring(0, selectionStart - tabCharacter.length) +
                            value.substring(selectionEnd),
                        // Update caret position
                        selectionStart: updatedSelection,
                        selectionEnd: updatedSelection,
                    });
                }
            }
            else if (e.keyCode === KEYCODE_ENTER) {
                // Ignore selections
                if (selectionStart === selectionEnd) {
                    // Get the current line
                    var line = _this._getLines(value, selectionStart).pop();
                    var matches = line === null || line === void 0 ? void 0 : line.match(/^\s+/);
                    if (matches === null || matches === void 0 ? void 0 : matches[0]) {
                        e.preventDefault();
                        // Preserve indentation on inserting a new line
                        var indent = '\n' + matches[0];
                        var updatedSelection = selectionStart + indent.length;
                        _this._applyEdits({
                            // Insert indentation character at caret
                            value: value.substring(0, selectionStart) +
                                indent +
                                value.substring(selectionEnd),
                            // Update caret position
                            selectionStart: updatedSelection,
                            selectionEnd: updatedSelection,
                        });
                    }
                }
            }
            else if (e.keyCode === KEYCODE_PARENS ||
                e.keyCode === KEYCODE_BRACKETS ||
                e.keyCode === KEYCODE_QUOTE ||
                e.keyCode === KEYCODE_BACK_QUOTE) {
                var chars = void 0;
                if (e.keyCode === KEYCODE_PARENS && e.shiftKey) {
                    chars = ['(', ')'];
                }
                else if (e.keyCode === KEYCODE_BRACKETS) {
                    if (e.shiftKey) {
                        chars = ['{', '}'];
                    }
                    else {
                        chars = ['[', ']'];
                    }
                }
                else if (e.keyCode === KEYCODE_QUOTE) {
                    if (e.shiftKey) {
                        chars = ['"', '"'];
                    }
                    else {
                        chars = ["'", "'"];
                    }
                }
                else if (e.keyCode === KEYCODE_BACK_QUOTE && !e.shiftKey) {
                    chars = ['`', '`'];
                }
                // If text is selected, wrap them in the characters
                if (selectionStart !== selectionEnd && chars) {
                    e.preventDefault();
                    _this._applyEdits({
                        value: value.substring(0, selectionStart) +
                            chars[0] +
                            value.substring(selectionStart, selectionEnd) +
                            chars[1] +
                            value.substring(selectionEnd),
                        // Update caret position
                        selectionStart: selectionStart,
                        selectionEnd: selectionEnd + 2,
                    });
                }
            }
            else if ((isMacLike
                ? // Trigger undo with ⌘+Z on Mac
                    e.metaKey && e.keyCode === KEYCODE_Z
                : // Trigger undo with Ctrl+Z on other platforms
                    e.ctrlKey && e.keyCode === KEYCODE_Z) &&
                !e.shiftKey &&
                !e.altKey) {
                e.preventDefault();
                _this._undoEdit();
            }
            else if ((isMacLike
                ? // Trigger redo with ⌘+Shift+Z on Mac
                    e.metaKey && e.keyCode === KEYCODE_Z && e.shiftKey
                : isWindows
                    ? // Trigger redo with Ctrl+Y on Windows
                        e.ctrlKey && e.keyCode === KEYCODE_Y
                    : // Trigger redo with Ctrl+Shift+Z on other platforms
                        e.ctrlKey && e.keyCode === KEYCODE_Z && e.shiftKey) &&
                !e.altKey) {
                e.preventDefault();
                _this._redoEdit();
            }
            else if (e.keyCode === KEYCODE_M &&
                e.ctrlKey &&
                (isMacLike ? e.shiftKey : true)) {
                e.preventDefault();
                // Toggle capturing tab key so users can focus away
                _this.setState(function (state) { return ({
                    capture: !state.capture,
                }); });
            }
        };
        _this._handleChange = function (e) {
            var _a = e.currentTarget, value = _a.value, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
            _this._recordChange({
                value: value,
                selectionStart: selectionStart,
                selectionEnd: selectionEnd,
            }, true);
            _this.props.onValueChange(value);
        };
        _this._history = {
            stack: [],
            offset: -1,
        };
        _this._input = null;
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        this._recordCurrentState();
    };
    Object.defineProperty(Editor.prototype, "session", {
        get: function () {
            return {
                history: this._history,
            };
        },
        set: function (session) {
            this._history = session.history;
        },
        enumerable: false,
        configurable: true
    });
    Editor.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, style = _a.style, padding = _a.padding, highlight = _a.highlight, textareaId = _a.textareaId, textareaClassName = _a.textareaClassName, autoFocus = _a.autoFocus, disabled = _a.disabled, form = _a.form, maxLength = _a.maxLength, minLength = _a.minLength, name = _a.name, placeholder = _a.placeholder, readOnly = _a.readOnly, required = _a.required, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyUp = _a.onKeyUp, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onKeyDown = _a.onKeyDown, onValueChange = _a.onValueChange, tabSize = _a.tabSize, insertSpaces = _a.insertSpaces, ignoreTabKey = _a.ignoreTabKey, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        preClassName = _a.preClassName, rest = __rest(_a, ["value", "style", "padding", "highlight", "textareaId", "textareaClassName", "autoFocus", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "onClick", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onValueChange", "tabSize", "insertSpaces", "ignoreTabKey", "preClassName"]);
        var contentStyle = {
            paddingTop: typeof padding === 'object' ? padding.top : padding,
            paddingRight: typeof padding === 'object' ? padding.right : padding,
            paddingBottom: typeof padding === 'object' ? padding.bottom : padding,
            paddingLeft: typeof padding === 'object' ? padding.left : padding,
        };
        var highlighted = highlight(value);
        return (React.createElement("div", __assign({}, rest, { style: __assign(__assign({}, styles.container), style) }),
            React.createElement("pre", __assign({ className: preClassName, "aria-hidden": "true", style: __assign(__assign(__assign({}, styles.editor), styles.highlight), contentStyle) }, (typeof highlighted === 'string'
                ? { dangerouslySetInnerHTML: { __html: highlighted + '<br />' } }
                : { children: highlighted }))),
            React.createElement("textarea", { ref: function (c) { return (_this._input = c); }, style: __assign(__assign(__assign({}, styles.editor), styles.textarea), contentStyle), className: className + (textareaClassName ? " ".concat(textareaClassName) : ''), id: textareaId, value: value, onChange: this._handleChange, onKeyDown: this._handleKeyDown, onClick: onClick, onKeyUp: onKeyUp, onFocus: onFocus, onBlur: onBlur, disabled: disabled, form: form, maxLength: maxLength, minLength: minLength, name: name, placeholder: placeholder, readOnly: readOnly, required: required, autoFocus: autoFocus, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: false, "data-gramm": false }),
            React.createElement("style", { dangerouslySetInnerHTML: { __html: cssText } })));
    };
    Editor.defaultProps = {
        tabSize: 2,
        insertSpaces: true,
        ignoreTabKey: false,
        padding: 0,
    };
    return Editor;
}(React.Component));
exports.default = Editor;
var styles = {
    container: {
        position: 'relative',
        textAlign: 'left',
        boxSizing: 'border-box',
        padding: 0,
        overflow: 'hidden',
    },
    textarea: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        resize: 'none',
        color: 'inherit',
        overflow: 'hidden',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        WebkitTextFillColor: 'transparent',
    },
    highlight: {
        position: 'relative',
        pointerEvents: 'none',
    },
    editor: {
        margin: 0,
        border: 0,
        background: 'none',
        boxSizing: 'inherit',
        display: 'inherit',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontStyle: 'inherit',
        fontVariantLigatures: 'inherit',
        fontWeight: 'inherit',
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
        tabSize: 'inherit',
        textIndent: 'inherit',
        textRendering: 'inherit',
        textTransform: 'inherit',
        whiteSpace: 'pre-wrap',
        wordBreak: 'keep-all',
        overflowWrap: 'break-word',
    },
};
//# sourceMappingURL=index.js.map