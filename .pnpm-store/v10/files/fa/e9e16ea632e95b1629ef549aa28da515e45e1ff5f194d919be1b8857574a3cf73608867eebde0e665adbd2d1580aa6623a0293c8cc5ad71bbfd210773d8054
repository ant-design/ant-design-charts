var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { get, deepMix, pick, keys } from "@antv/util";
import { select, PLOT_CLASS_NAME } from "@antv/g2";
import { CHILD_NODE_COUNT } from "../utils/hierarchy/partition";
import { SUNBURST_TYPE, SUNBURST_TYPE_FIELD, SUNBURST_ANCESTOR_FIELD } from "../mark/sunburst";
// Get sunburst element.
const getElementsSunburst = (plot) => {
    return plot
        .querySelectorAll(".element")
        .filter((item) => get(item, ["style", SUNBURST_TYPE_FIELD]) === SUNBURST_TYPE);
};
function selectPlotArea(root) {
    return select(root).select(`.${PLOT_CLASS_NAME}`).node();
}
// Default breadCrumb config.
const DEFAULT_BREADCRUMB = {
    rootText: "root",
    style: {
        fill: "rgba(0, 0, 0, 0.85)",
        fontSize: 12,
        y: 1,
    },
    active: {
        fill: "rgba(0, 0, 0, 0.5)",
    },
};
/**
 * @todo DrillDown interaction
 */
export function DrillDown(drillDownOptions = {}) {
    const { breadCrumb: textConfig = {}, isFixedColor = false } = drillDownOptions;
    const breadCrumb = deepMix({}, DEFAULT_BREADCRUMB, textConfig);
    return (context) => {
        const { update, setState, container, view, options } = context;
        const document = container.ownerDocument;
        const plotArea = selectPlotArea(container);
        const sunburstMark = options.marks.find(({ id }) => id === SUNBURST_TYPE);
        const { state } = sunburstMark;
        // Create breadCrumbTextsGroup,save textSeparator、drillTexts.
        const textGroup = document.createElement("g");
        plotArea.appendChild(textGroup);
        // Modify the data and scale according to the path and the level of the current click, so as to achieve the effect of drilling down and drilling up and initialization.
        const drillDownClick = (path, depth) => __awaiter(this, void 0, void 0, function* () {
            // Clear text.
            textGroup.removeChildren();
            // More path creation text.
            if (path) {
                // Create root text.
                const rootText = document.createElement("text", {
                    style: Object.assign({ x: 0, text: breadCrumb.rootText, 
                        // @ts-ignore
                        depth: 0 }, breadCrumb.style),
                });
                textGroup.appendChild(rootText);
                let name = "";
                const pathArray = path === null || path === void 0 ? void 0 : path.split(" / ");
                let y = breadCrumb.style.y;
                let x = textGroup.getBBox().width;
                const maxWidth = plotArea.getBBox().width;
                // Create path: 'type1 / type2 / type3' -> '/ type1 / type2 / type3'.
                const drillTexts = pathArray.map((text, index) => {
                    const textSeparator = document.createElement("text", {
                        style: Object.assign(Object.assign({ x, text: " / " }, breadCrumb.style), { y }),
                    });
                    textGroup.appendChild(textSeparator);
                    x += textSeparator.getBBox().width;
                    name = `${name}${text} / `;
                    const drillText = document.createElement("text", {
                        name: name.replace(/\s\/\s$/, ""),
                        style: Object.assign(Object.assign({ text,
                            x, 
                            // @ts-ignore
                            depth: index + 1 }, breadCrumb.style), { y }),
                    });
                    textGroup.appendChild(drillText);
                    x += drillText.getBBox().width;
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
                        y = textGroup.getBBox().height;
                        x = 0;
                        textSeparator.attr({
                            x,
                            y,
                        });
                        x += textSeparator.getBBox().width;
                        drillText.attr({
                            x,
                            y,
                        });
                        x += drillText.getBBox().width;
                    }
                    return drillText;
                });
                // Add Active, Add DrillDown
                [rootText, ...drillTexts].forEach((item, index) => {
                    // Last drillText
                    if (index === drillTexts.length)
                        return;
                    const originalAttrs = Object.assign({}, item.attributes);
                    item.attr("cursor", "pointer");
                    item.addEventListener("mouseenter", () => {
                        item.attr(breadCrumb.active);
                    });
                    item.addEventListener("mouseleave", () => {
                        item.attr(originalAttrs);
                    });
                    item.addEventListener("click", () => {
                        drillDownClick(item.name, get(item, ["style", "depth"]));
                    });
                });
            }
            // Update marks.
            setState("drillDown", (viewOptions) => {
                const { marks } = viewOptions;
                // Add filter transform for every marks,
                // which will skip for mark without color channel.
                const newMarks = marks.map((mark) => {
                    if (mark.id !== SUNBURST_TYPE && mark.type !== "rect")
                        return mark;
                    // Inset after aggregate transform, such as group, and bin.
                    const { data } = mark;
                    const newScale = Object.fromEntries(["color"].map((channel) => [channel, { domain: view.scale[channel].getOptions().domain }]));
                    const newData = data.filter((item) => {
                        const key = item.path;
                        // isFixedColor true change drillDown color.
                        if (!isFixedColor) {
                            item[SUNBURST_ANCESTOR_FIELD] = key.split(" / ")[depth];
                        }
                        if (!path)
                            return true;
                        const reg = new RegExp(`^${path}.+`);
                        return reg.test(key);
                    });
                    // DrillDown by filtering the data and scale.
                    return deepMix({}, mark, isFixedColor
                        ? {
                            data: newData,
                            scale: newScale,
                        }
                        : {
                            data: newData,
                        });
                });
                return Object.assign(Object.assign({}, viewOptions), { marks: newMarks });
            });
            yield update();
        });
        const createDrillClick = (e) => {
            const item = e.target;
            // Element need style.markType === 'sunburst', markType === 'rect', have children.
            if (get(item, ["style", SUNBURST_TYPE_FIELD]) !== SUNBURST_TYPE ||
                get(item, ["markType"]) !== "rect" ||
                !get(item, ["style", CHILD_NODE_COUNT]))
                return;
            const path = get(item, ["__data__", "key"]);
            const depth = get(item, ["style", "depth"]);
            item.style.cursor = "pointer";
            drillDownClick(path, depth);
        };
        // Add click drill interaction.
        plotArea.addEventListener("click", createDrillClick);
        // Change attributes keys.
        const changeStyleKey = keys(Object.assign(Object.assign({}, state.active), state.inactive));
        const createActive = () => {
            const elements = getElementsSunburst(plotArea);
            elements.forEach((element) => {
                const childNodeCount = get(element, ["style", CHILD_NODE_COUNT]);
                const cursor = get(element, ["style", "cursor"]);
                if (cursor !== "pointer" && childNodeCount) {
                    element.style.cursor = "pointer";
                    const originalAttrs = pick(element.attributes, changeStyleKey);
                    element.addEventListener("mouseenter", () => {
                        element.attr(state.active);
                    });
                    element.addEventListener("mouseleave", () => {
                        element.attr(deepMix(originalAttrs, state.inactive));
                    });
                }
            });
        };
        // Animate elements update, Add active.
        plotArea.addEventListener("mousemove", createActive);
        return () => {
            textGroup.remove();
            plotArea.removeEventListener("click", createDrillClick);
            plotArea.removeEventListener("mousemove", createActive);
        };
    };
}
//# sourceMappingURL=drillDown.js.map