"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var useRafState_1 = tslib_1.__importDefault(require("./useRafState"));
var util_1 = require("./misc/util");
var useWindowSize = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.initialWidth, initialWidth = _c === void 0 ? Infinity : _c, _d = _b.initialHeight, initialHeight = _d === void 0 ? Infinity : _d, onChange = _b.onChange;
    // Use the useRafState hook to maintain the current window size (width and height)
    var _e = useRafState_1.default({
        width: util_1.isBrowser ? window.innerWidth : initialWidth,
        height: util_1.isBrowser ? window.innerHeight : initialHeight,
    }), state = _e[0], setState = _e[1];
    react_1.useEffect(function () {
        // Only run the effect on the browser (to avoid issues with SSR)
        if (util_1.isBrowser) {
            var handler_1 = function () {
                var width = window.innerWidth;
                var height = window.innerHeight;
                // Update the state with the new window size
                setState({
                    width: width,
                    height: height,
                });
                // If an onChange callback is provided, call it with the new dimensions
                if (onChange)
                    onChange(width, height);
            };
            // Add event listener for the resize event
            util_1.on(window, 'resize', handler_1);
            // Cleanup function to remove the event listener when the component is unmounted (it's for performance optimization)
            return function () {
                util_1.off(window, 'resize', handler_1);
            };
        }
    }, []);
    // Return the current window size (width and height)
    return state;
};
exports.default = useWindowSize;
