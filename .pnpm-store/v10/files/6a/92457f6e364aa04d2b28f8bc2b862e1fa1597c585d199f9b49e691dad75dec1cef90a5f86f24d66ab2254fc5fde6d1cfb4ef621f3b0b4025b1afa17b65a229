'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * @internal
 */
const SkeletonThemeContext = React.createContext({});

/* eslint-disable react/no-array-index-key */
const defaultEnableAnimation = true;
// For performance & cleanliness, don't add any inline styles unless we have to
function styleOptionsToCssProperties({ baseColor, highlightColor, width, height, borderRadius, circle, direction, duration, enableAnimation = defaultEnableAnimation, customHighlightBackground, }) {
    const style = {};
    if (direction === 'rtl')
        style['--animation-direction'] = 'reverse';
    if (typeof duration === 'number')
        style['--animation-duration'] = `${duration}s`;
    if (!enableAnimation)
        style['--pseudo-element-display'] = 'none';
    if (typeof width === 'string' || typeof width === 'number')
        style.width = width;
    if (typeof height === 'string' || typeof height === 'number')
        style.height = height;
    if (typeof borderRadius === 'string' || typeof borderRadius === 'number')
        style.borderRadius = borderRadius;
    if (circle)
        style.borderRadius = '50%';
    if (typeof baseColor !== 'undefined')
        style['--base-color'] = baseColor;
    if (typeof highlightColor !== 'undefined')
        style['--highlight-color'] = highlightColor;
    if (typeof customHighlightBackground === 'string')
        style['--custom-highlight-background'] = customHighlightBackground;
    return style;
}
function Skeleton({ count = 1, wrapper: Wrapper, className: customClassName, containerClassName, containerTestId, circle = false, style: styleProp, ...originalPropsStyleOptions }) {
    var _a, _b, _c;
    const contextStyleOptions = React.useContext(SkeletonThemeContext);
    const propsStyleOptions = { ...originalPropsStyleOptions };
    // DO NOT overwrite style options from the context if `propsStyleOptions`
    // has properties explicity set to undefined
    for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
        if (typeof value === 'undefined') {
            delete propsStyleOptions[key];
        }
    }
    // Props take priority over context
    const styleOptions = {
        ...contextStyleOptions,
        ...propsStyleOptions,
        circle,
    };
    // `styleProp` has the least priority out of everything
    const style = {
        ...styleProp,
        ...styleOptionsToCssProperties(styleOptions),
    };
    let className = 'react-loading-skeleton';
    if (customClassName)
        className += ` ${customClassName}`;
    const inline = (_a = styleOptions.inline) !== null && _a !== void 0 ? _a : false;
    const elements = [];
    const countCeil = Math.ceil(count);
    for (let i = 0; i < countCeil; i++) {
        let thisStyle = style;
        if (countCeil > count && i === countCeil - 1) {
            // count is not an integer and we've reached the last iteration of
            // the loop, so add a "fractional" skeleton.
            //
            // For example, if count is 3.5, we've already added 3 full
            // skeletons, so now we add one more skeleton that is 0.5 times the
            // original width.
            const width = (_b = thisStyle.width) !== null && _b !== void 0 ? _b : '100%'; // 100% is the default since that's what's in the CSS
            const fractionalPart = count % 1;
            const fractionalWidth = typeof width === 'number'
                ? width * fractionalPart
                : `calc(${width} * ${fractionalPart})`;
            thisStyle = { ...thisStyle, width: fractionalWidth };
        }
        const skeletonSpan = (React.createElement("span", { className: className, style: thisStyle, key: i }, "\u200C"));
        if (inline) {
            elements.push(skeletonSpan);
        }
        else {
            // Without the <br />, the skeleton lines will all run together if
            // `width` is specified
            elements.push(React.createElement(React.Fragment, { key: i },
                skeletonSpan,
                React.createElement("br", null)));
        }
    }
    return (React.createElement("span", { className: containerClassName, "data-testid": containerTestId, "aria-live": "polite", "aria-busy": (_c = styleOptions.enableAnimation) !== null && _c !== void 0 ? _c : defaultEnableAnimation }, Wrapper
        ? elements.map((el, i) => React.createElement(Wrapper, { key: i }, el))
        : elements));
}

function SkeletonTheme({ children, ...styleOptions }) {
    return (React.createElement(SkeletonThemeContext.Provider, { value: styleOptions }, children));
}

exports.SkeletonTheme = SkeletonTheme;
exports.default = Skeleton;
