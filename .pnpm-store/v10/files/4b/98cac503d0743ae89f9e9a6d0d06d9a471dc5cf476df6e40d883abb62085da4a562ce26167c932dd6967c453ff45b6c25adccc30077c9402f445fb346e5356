"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fisheye = void 0;
const util_1 = require("@antv/util");
const utils_1 = require("./utils");
function maybeCoordinate(options) {
    const { coordinate = {} } = options;
    const { transform = [] } = coordinate;
    const fisheye = transform.find((d) => d.type === 'fisheye');
    if (fisheye)
        return fisheye;
    const newFisheye = { type: 'fisheye' };
    transform.push(newFisheye);
    coordinate.transform = transform;
    options.coordinate = coordinate;
    return newFisheye;
}
/**
 * @todo Bind abstract data or data index.
 */
function Fisheye({ wait = 30, leading, trailing = false, }) {
    return (context) => {
        const { options, update, setState, container } = context;
        const plotArea = (0, utils_1.selectPlotArea)(container);
        const updateFocus = (0, util_1.throttle)((event) => {
            const focus = (0, utils_1.mousePosition)(plotArea, event);
            if (!focus) {
                setState('fisheye');
                update();
                return;
            }
            setState('fisheye', (options) => {
                // Clone options and mutate it.
                // Disable animation.
                const clonedOptions = (0, util_1.deepMix)({}, options, {
                    interaction: { tooltip: { preserve: true } },
                });
                for (const mark of clonedOptions.marks)
                    mark.animate = false;
                const [x, y] = focus;
                const fisheye = maybeCoordinate(clonedOptions);
                fisheye.focusX = x;
                fisheye.focusY = y;
                fisheye.visual = true;
                return clonedOptions;
            });
            update();
        }, wait, { leading, trailing });
        // Bind events.
        plotArea.addEventListener('pointerenter', updateFocus);
        plotArea.addEventListener('pointermove', updateFocus);
        plotArea.addEventListener('pointerleave', updateFocus);
        return () => {
            plotArea.removeEventListener('pointerenter', updateFocus);
            plotArea.removeEventListener('pointermove', updateFocus);
            plotArea.removeEventListener('pointerleave', updateFocus);
        };
    };
}
exports.Fisheye = Fisheye;
//# sourceMappingURL=fisheye.js.map