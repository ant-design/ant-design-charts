"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
exports.TreemapDrillDown = TreemapDrillDown;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const runtime_1 = require("../runtime");
const selection_1 = require("../utils/selection");
const treeDataTransform_1 = require("../utils/treeDataTransform");
const legendFilter_1 = require("./legendFilter");
const utils_1 = require("./utils");
function selectPlotArea(root) {
    return (0, selection_1.select)(root).select(`.${runtime_1.PLOT_CLASS_NAME}`).node();
}
// Default breadCrumb config.
const DEFAULT_BREADCRUMB_STYLE = {
    breadCrumbFill: 'rgba(0, 0, 0, 0.85)',
    breadCrumbFontSize: 12,
    breadCrumbY: 12,
    activeFill: 'rgba(0, 0, 0, 0.5)',
};
/**
 * TreemapDrillDown interaction.
 */
function TreemapDrillDown(drillDownOptions = {}) {
    const { originData = [], layout } = drillDownOptions, style = __rest(drillDownOptions, ["originData", "layout"]);
    const breadCrumb = (0, util_1.deepMix)({}, DEFAULT_BREADCRUMB_STYLE, style);
    const breadCrumbStyle = (0, helper_1.subObject)(breadCrumb, 'breadCrumb');
    const breadCrumbActiveStyle = (0, helper_1.subObject)(breadCrumb, 'active');
    return (context) => {
        const { update, setState, container, options } = context;
        const plotArea = selectPlotArea(container);
        const mark = options.marks[0];
        const { state } = mark;
        // Create breadCrumbTextsGroup,save textSeparator、drillTexts.
        const textGroup = new g_1.Group();
        plotArea.appendChild(textGroup);
        // Modify the data and scale according to the path and the level of the current click, so as to achieve the effect of drilling down and drilling up and initialization.
        const drillDownClick = (path, depth) => __awaiter(this, void 0, void 0, function* () {
            // Clear text.
            textGroup.removeChildren();
            // More path creation text.
            if (depth) {
                let name = '';
                let y = breadCrumbStyle.y;
                let x = 0;
                const textPath = [];
                const maxWidth = plotArea.getBBox().width;
                // Create path: 'type1 / type2 / type3' -> '/ type1 / type2 / type3'.
                const drillTexts = path.map((text, index) => {
                    name = `${name}${text}/`;
                    textPath.push(text);
                    const drillText = new g_1.Text({
                        name: name.replace(/\/$/, ''),
                        style: Object.assign(Object.assign({ text,
                            x, 
                            // @ts-ignore
                            path: [...textPath], depth: index }, breadCrumbStyle), { y }),
                    });
                    textGroup.appendChild(drillText);
                    x += drillText.getBBox().width;
                    const textSeparator = new g_1.Text({
                        style: Object.assign(Object.assign({ x, text: ' / ' }, breadCrumbStyle), { y }),
                    });
                    textGroup.appendChild(textSeparator);
                    x += textSeparator.getBBox().width;
                    /**
                     * Page width exceeds maximum, line feed.
                     * | ----maxWidth---- |
                     * | / tyep1 / tyep2 / type3 |
                     * ->
                     * | ----maxWidth---- |
                     * | / tyep1 / tyep2  |
                     * | / type3 |
                     */
                    if (x > maxWidth) {
                        y = textGroup.getBBox().height + breadCrumbStyle.y;
                        x = 0;
                        drillText.attr({
                            x,
                            y,
                        });
                        x += drillText.getBBox().width;
                        textSeparator.attr({
                            x,
                            y,
                        });
                        x += textSeparator.getBBox().width;
                    }
                    if (index === (0, util_1.size)(path) - 1) {
                        textSeparator.remove();
                    }
                    return drillText;
                });
                // Add Active, Add TreemapDrillDown
                drillTexts.forEach((item, index) => {
                    // Last drillText
                    if (index === (0, util_1.size)(drillTexts) - 1)
                        return;
                    const originalAttrs = Object.assign({}, item.attributes);
                    item.attr('cursor', 'pointer');
                    item.addEventListener('mouseenter', () => {
                        item.attr(breadCrumbActiveStyle);
                    });
                    item.addEventListener('mouseleave', () => {
                        item.attr(originalAttrs);
                    });
                    item.addEventListener('click', () => {
                        drillDownClick((0, util_1.get)(item, ['style', 'path']), (0, util_1.get)(item, ['style', 'depth']));
                    });
                });
            }
            // LegendFilter interaction and treemapDrillDown clash.
            (0, legendFilter_1.legendClearSetState)(container, setState);
            // Update marks.
            setState('treemapDrillDown', (viewOptions) => {
                const { marks } = viewOptions;
                // Add filter transform for every marks,
                // which will skip for mark without color channel.
                const strPath = path.join('/');
                const newMarks = marks.map((mark) => {
                    if (mark.type !== 'rect')
                        return mark;
                    let newData = originData;
                    if (depth) {
                        const filterData = originData
                            .filter((item) => {
                            const id = (0, util_1.get)(item, ['id']);
                            return id && (id.match(`${strPath}/`) || strPath.match(id));
                        })
                            .map((item) => ({
                            value: item.height === 0 ? (0, util_1.get)(item, ['value']) : undefined,
                            name: (0, util_1.get)(item, ['id']),
                        }));
                        const { paddingLeft, paddingBottom, paddingRight } = layout;
                        // New drill layout for calculation x y and filtration data.
                        const newLayout = Object.assign(Object.assign({}, layout), { paddingTop: (layout.paddingTop || textGroup.getBBox().height + 10) /
                                (depth + 1), paddingLeft: paddingLeft / (depth + 1), paddingBottom: paddingBottom / (depth + 1), paddingRight: paddingRight / (depth + 1), path: (d) => d.name, layer: (d) => d.depth === depth + 1 });
                        // Transform the new matrix tree data.
                        newData = (0, treeDataTransform_1.treeDataTransform)(filterData, newLayout, {
                            value: 'value',
                        })[0];
                    }
                    else {
                        newData = originData.filter((item) => {
                            return item.depth === 1;
                        });
                    }
                    const colorDomain = [];
                    newData.forEach(({ path }) => {
                        colorDomain.push((0, util_1.last)(path));
                    });
                    // TreemapDrillDown by filtering the data and scale.
                    return (0, util_1.deepMix)({}, mark, {
                        data: newData,
                        scale: {
                            color: { domain: colorDomain },
                        },
                    });
                });
                return Object.assign(Object.assign({}, viewOptions), { marks: newMarks });
            });
            // The second argument is to allow the legendFilter event to be re-added; the update method itself causes legend to lose the interaction event.
            yield update(undefined, ['legendFilter']);
        });
        //
        const keyofLabel = (d) => d.attributes.key.split('-')[0];
        const keyofRect = (d) => (0, util_1.get)(d, ['__data__', 'key']);
        // Elements and BreadCrumb click.
        const createDrillClick = (e) => {
            const item = e.target;
            const { markType, nodeName, attributes } = item || {};
            if (markType !== 'rect' && nodeName !== g_1.Shape.TEXT)
                return;
            const key = nodeName === g_1.Shape.TEXT && (0, util_1.get)(attributes, 'isTreemapLabel') === true
                ? keyofLabel(item)
                : keyofRect(item);
            const node = (0, util_1.find)(originData, (d) => d.id === key);
            // Node height = 0 no children
            if ((0, util_1.get)(node, 'height')) {
                drillDownClick((0, util_1.get)(node, 'path'), (0, util_1.get)(node, 'depth'));
            }
        };
        // Add click drill interaction.
        plotArea.addEventListener('click', createDrillClick);
        // Change attributes keys.
        const changeStyleKey = (0, util_1.keys)(Object.assign(Object.assign({}, state.active), state.inactive));
        const createActive = () => {
            const elements = (0, utils_1.getElements)(plotArea);
            elements.forEach((element) => {
                const cursor = (0, util_1.get)(element, ['style', 'cursor']);
                const node = (0, util_1.find)(originData, (d) => d.id === (0, util_1.get)(element, ['__data__', 'key']));
                if (cursor !== 'pointer' && (node === null || node === void 0 ? void 0 : node.height)) {
                    element.style.cursor = 'pointer';
                    const originalAttrs = (0, util_1.pick)(element.attributes, changeStyleKey);
                    element.addEventListener('mouseenter', () => {
                        element.attr(state.active);
                    });
                    element.addEventListener('mouseleave', () => {
                        element.attr((0, util_1.deepMix)(originalAttrs, state.inactive));
                    });
                }
            });
        };
        createActive();
        // Animate elements update, Add active.
        plotArea.addEventListener('mousemove', createActive);
        return () => {
            textGroup.remove();
            plotArea.removeEventListener('click', createDrillClick);
            plotArea.removeEventListener('mousemove', createActive);
        };
    };
}
//# sourceMappingURL=treemapDrillDown.js.map