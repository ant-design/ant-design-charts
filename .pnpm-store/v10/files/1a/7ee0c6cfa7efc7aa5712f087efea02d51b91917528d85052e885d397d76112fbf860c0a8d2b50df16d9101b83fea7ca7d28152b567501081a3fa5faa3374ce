import { useEffect } from 'react';
import useRafState from './useRafState';
import { isBrowser, off, on } from './misc/util';
var useWindowSize = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.initialWidth, initialWidth = _c === void 0 ? Infinity : _c, _d = _b.initialHeight, initialHeight = _d === void 0 ? Infinity : _d, onChange = _b.onChange;
    // Use the useRafState hook to maintain the current window size (width and height)
    var _e = useRafState({
        width: isBrowser ? window.innerWidth : initialWidth,
        height: isBrowser ? window.innerHeight : initialHeight,
    }), state = _e[0], setState = _e[1];
    useEffect(function () {
        // Only run the effect on the browser (to avoid issues with SSR)
        if (isBrowser) {
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
            on(window, 'resize', handler_1);
            // Cleanup function to remove the event listener when the component is unmounted (it's for performance optimization)
            return function () {
                off(window, 'resize', handler_1);
            };
        }
    }, []);
    // Return the current window size (width and height)
    return state;
};
export default useWindowSize;
