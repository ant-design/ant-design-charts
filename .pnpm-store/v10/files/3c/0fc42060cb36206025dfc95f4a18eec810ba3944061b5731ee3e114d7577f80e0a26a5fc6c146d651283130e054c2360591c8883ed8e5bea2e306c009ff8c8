"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venn = void 0;
const venn_1 = require("./utils/venn");
/**
 * Layout venn data, get the path string for each set.
 */
const Venn = (options) => {
    const { sets = 'sets', size = 'size', as = ['key', 'path'], padding = 0, } = options;
    const [key, path] = as;
    return (data) => {
        // Transform the data, venn layout use `sets` and `size` field.
        const vennData = data.map((d) => (Object.assign(Object.assign({}, d), { sets: d[sets], size: d[size], [key]: d.sets.join('&') })));
        // Sort data, avoid data occlusion.
        vennData.sort((a, b) => a.sets.length - b.sets.length);
        // Layout venn data.
        const solution = (0, venn_1.venn)(vennData);
        let circles;
        return vennData.map((datum) => {
            const setsValue = datum[sets];
            const pathFunc = ({ width, height }) => {
                circles = circles
                    ? circles
                    : (0, venn_1.scaleSolution)(solution, width, height, padding);
                const setCircles = setsValue.map((set) => circles[set]);
                let p = (0, venn_1.intersectionAreaPath)(setCircles);
                // Close the path for event picker.
                if (!/[zZ]$/.test(p))
                    p += ' Z';
                return p;
            };
            return Object.assign(Object.assign({}, datum), { [path]: pathFunc });
        });
    };
};
exports.Venn = Venn;
exports.Venn.props = {};
//# sourceMappingURL=venn.js.map