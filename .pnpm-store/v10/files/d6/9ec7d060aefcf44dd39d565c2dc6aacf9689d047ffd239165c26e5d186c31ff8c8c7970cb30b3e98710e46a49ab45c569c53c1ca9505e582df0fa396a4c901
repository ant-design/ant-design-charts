"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCROLLBAR_CLASS_NAME = void 0;
exports.ScrollbarFilter = ScrollbarFilter;
const constant_1 = require("../component/constant");
const sliderFilter_1 = require("./sliderFilter");
exports.SCROLLBAR_CLASS_NAME = `${constant_1.G2_CLASS_PREFIX}scrollbar`;
function ScrollbarFilter(options = {}) {
    return (context, _, emitter) => {
        const { view, container } = context;
        const scrollbars = container.getElementsByClassName(exports.SCROLLBAR_CLASS_NAME);
        if (!scrollbars.length)
            return () => { };
        const { scale } = view;
        const { x: scaleX, y: scaleY } = scale;
        // The filtered domain, computed by the ratio attribute.
        const initDomain = {
            x: [...scaleX.getOptions().domain],
            y: [...scaleY.getOptions().domain],
        };
        // The ordinal domain for each channel.
        scaleX.update({ domain: scaleX.getOptions().expectedDomain });
        scaleY.update({ domain: scaleY.getOptions().expectedDomain });
        const interaction = (0, sliderFilter_1.SliderFilter)(Object.assign({ initDomain, className: exports.SCROLLBAR_CLASS_NAME, prefix: 'scrollbar', hasState: true, setValue: (component, values) => component.setValue(values[0]), getInitValues: (scrollbar) => {
                const values = scrollbar.slider.attributes.values;
                if (values[0] !== 0 || values[1] !== 1)
                    return values;
            }, 
            // Scrollbar should not have adaptive filtering by default
            // Only enable if explicitly set in options
            adaptiveMode: false }, options));
        return interaction(context, _, emitter);
    };
}
//# sourceMappingURL=scrollbarFilter.js.map