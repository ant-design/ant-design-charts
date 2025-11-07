import { __read } from "tslib";
// Utility to parse height from an HTML string, limited: `box-sizing: border-box`
export var parseHeightFromHTML = function (html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var el = doc.body.firstElementChild;
    console.log(el === null || el === void 0 ? void 0 : el.getClientRects(), 11);
    if (!el)
        return 0;
    var style = el.getAttribute('style') || '';
    var rules = Object.fromEntries(style
        .split(';')
        .map(function (r) { return r.trim(); })
        .filter(function (r) { return r.includes(':'); })
        .map(function (r) {
        var _a = __read(r.split(':').map(function (s) { return s.trim(); }), 2), key = _a[0], value = _a[1];
        return [key.toLowerCase(), value];
    }));
    var parsePx = function (v) {
        if (!v)
            return 0;
        var match = v.match(/([\d.]+)px/);
        return match ? parseFloat(match[1]) : 0;
    };
    if (rules.height) {
        return parsePx(rules.height);
    }
    var fontSize = parsePx(rules['font-size']) || 16;
    // line-height
    var lineHeight = rules['line-height'];
    var baseHeight;
    if (!lineHeight || lineHeight === 'normal') {
        baseHeight = 1.2 * fontSize; // 默认 normal ≈ 1.2
    }
    else if (lineHeight.endsWith('px')) {
        baseHeight = parsePx(lineHeight);
    }
    else if (/^[\d.]+$/.test(lineHeight)) {
        baseHeight = parseFloat(lineHeight) * fontSize;
    }
    else {
        baseHeight = fontSize; // fallback
    }
    var paddingTop = parsePx(rules['padding-top']);
    var paddingBottom = parsePx(rules['padding-bottom']);
    if (rules.padding) {
        var parts = rules.padding.split(/\s+/).map(parsePx);
        if (parts.length === 1) {
            paddingTop = parts[0];
            paddingBottom = parts[0];
        }
        else if (parts.length === 2) {
            paddingTop = parts[0];
            paddingBottom = parts[0];
        }
        else if (parts.length === 3) {
            paddingTop = parts[0];
            paddingBottom = parts[2];
        }
        else if (parts.length === 4) {
            paddingTop = parts[0];
            paddingBottom = parts[2];
        }
    }
    var borderTop = parsePx(rules['border-top-width']);
    var borderBottom = parsePx(rules['border-bottom-width']);
    if (rules.border) {
        var match = rules.border.match(/([\d.]+)px/);
        if (match) {
            borderTop = parseFloat(match[1]);
            borderBottom = parseFloat(match[1]);
        }
    }
    if (rules['border-width']) {
        var parts = rules['border-width'].split(/\s+/).map(parsePx);
        if (parts.length === 1) {
            borderTop = parts[0];
            borderBottom = parts[0];
        }
        else if (parts.length === 2) {
            borderTop = parts[0];
            borderBottom = parts[0];
        }
        else if (parts.length === 3) {
            borderTop = parts[0];
            borderBottom = parts[2];
        }
        else if (parts.length === 4) {
            borderTop = parts[0];
            borderBottom = parts[2];
        }
    }
    return baseHeight + paddingTop + paddingBottom + borderTop + borderBottom;
};
//# sourceMappingURL=parse-height-from-html.js.map