"use strict";
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
exports.elementSelect = elementSelect;
exports.ElementSelect = ElementSelect;
const d3_array_1 = require("@antv/vendor/d3-array");
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const traverse_elements_1 = require("../utils/traverse-elements");
const utils_1 = require("./utils");
/**
 * Active a group of elements.
 */
function elementSelect(root, { elements: elementsof, // given the root of chart returns elements to be manipulated
datum, // given each element returns the datum of it
groupKey = (d) => d, // group elements by specified key
regionGroupKey = (d) => d, // how to group elements when click region
link = false, // draw link or not
single = false, // single select or not
multipleSelectHotkey, // hotkey for multi-select mode
coordinate, background = false, scale, emitter, state = {}, region = false, regionEleFilter = (el) => utils_1.VALID_FIND_BY_X_MARKS.includes(el.markType), }) {
    var _a;
    const elements = elementsof(root);
    const elementSet = new Set(elements);
    const findElement = (0, utils_1.createFindElementByEvent)({
        elementsof,
        root,
        coordinate,
        scale,
    });
    const keyGroup = (0, d3_array_1.group)(elements, groupKey);
    const regionGroup = (0, d3_array_1.group)(elements, regionGroupKey);
    const valueof = (0, utils_1.createValueof)(elements, datum);
    const [appendLink, removeLink] = (0, utils_1.renderLink)(Object.assign({ link,
        elements,
        valueof,
        coordinate }, (0, helper_1.subObject)(state.selected, 'link')));
    const [appendBackground, removeBackground] = (0, utils_1.renderBackground)(Object.assign({ document: root.ownerDocument, background,
        coordinate,
        scale,
        valueof }, (0, helper_1.subObject)(state.selected, 'background')));
    const elementStyle = (0, util_1.deepMix)(state, {
        selected: Object.assign({}, (((_a = state.selected) === null || _a === void 0 ? void 0 : _a.offset) && {
            // Apply translate to mock slice out.
            transform: (...params) => {
                const value = state.selected.offset(...params);
                const [, i] = params;
                return (0, utils_1.offsetTransform)(elements[i], value, coordinate);
            },
        })),
    });
    const useState = (0, utils_1.createUseState)(elementStyle, elements);
    const { updateState, removeState, hasState } = useState(valueof);
    let isMultiSelectMode = !single; // "single" determines whether to multi-select by default
    let activeHotkey = null; // Track the currently active hotkey
    const clear = (nativeEvent = true) => {
        for (const e of elements) {
            removeState(e, 'selected', 'unselected');
            removeLink(e);
            removeBackground(e);
        }
        if (nativeEvent)
            emitter.emit('element:unselect', { nativeEvent: true });
        return;
    };
    const singleSelect = ({ event, element, nativeEvent = true, filter = (el) => true, groupBy = groupKey, groupMap = keyGroup, }) => {
        const filteredElements = elements.filter(filter);
        // Clear states if clicked selected element.
        if (hasState(element, 'selected'))
            clear();
        else {
            const k = groupBy(element);
            const group = groupMap.get(k);
            const groupSet = new Set(group);
            for (const e of filteredElements) {
                if (groupSet.has(e))
                    updateState(e, 'selected');
                else {
                    updateState(e, 'unselected');
                    removeLink(e);
                }
                if (e !== element)
                    removeBackground(e);
            }
            appendLink(group);
            appendBackground(element);
            if (!nativeEvent)
                return;
            emitter.emit('element:select', Object.assign(Object.assign({}, event), { nativeEvent, data: {
                    data: [datum(element), ...group.map(datum)],
                } }));
        }
    };
    const multipleSelect = ({ event, element, nativeEvent = true, filter = (el) => true, groupBy = groupKey, groupMap = keyGroup, }) => {
        const k = groupBy(element);
        const group = groupMap.get(k);
        const groupSet = new Set(group);
        const filteredElements = elements.filter(filter);
        if (!hasState(element, 'selected')) {
            const hasSelectedGroup = group.some((e) => hasState(e, 'selected'));
            for (const e of filteredElements) {
                if (groupSet.has(e))
                    updateState(e, 'selected');
                else if (!hasState(e, 'selected'))
                    updateState(e, 'unselected');
            }
            // Append link for each group only once.
            if (!hasSelectedGroup && link)
                appendLink(group);
            appendBackground(element);
        }
        else {
            // If there is no selected elements after resetting this group,
            // clear the states.
            const hasSelected = elements.some((e) => !groupSet.has(e) && hasState(e, 'selected'));
            if (!hasSelected)
                return clear();
            // If there are still some selected elements after resetting this group,
            // only remove the link.
            for (const e of group) {
                updateState(e, 'unselected');
                removeLink(e);
                removeBackground(e);
            }
        }
        if (!nativeEvent)
            return;
        emitter.emit('element:select', Object.assign(Object.assign({}, event), { nativeEvent, data: {
                data: elements.filter((e) => hasState(e, 'selected')).map(datum),
            } }));
    };
    const isClickElementOrGroup = (element) => {
        if (elementSet.has(element))
            return true;
        for (const group of elementSet) {
            const found = (0, traverse_elements_1.traverseElements)(group, (el) => el === element);
            if (found)
                return true;
        }
        return false;
    };
    const getRealElement = (element) => {
        if (elementSet.has(element))
            return element;
        for (const group of elementSet) {
            let match = null;
            (0, traverse_elements_1.traverseElements)(group, (el) => {
                if (el === element)
                    match = group;
            });
            if (match)
                return match;
        }
        return element;
    };
    const click = (event) => {
        const { target: element, nativeEvent = true } = event;
        const select = !isMultiSelectMode ? singleSelect : multipleSelect;
        let el = element;
        const isClickElement = isClickElementOrGroup(element);
        if (!region || isClickElement) {
            // Click non-element shape, reset.
            // Such as the rest of content area(background).
            if (!isClickElement)
                return clear();
            return select({
                event,
                element: getRealElement(el),
                nativeEvent,
                groupBy: groupKey,
            });
        }
        else {
            // Click background region area, select elements in the region.
            // Get element at cursor.x position.
            el = findElement(event);
            if (!elementSet.has(el))
                return clear();
            return select({
                event,
                element: el,
                nativeEvent,
                filter: regionEleFilter,
                groupBy: regionGroupKey,
                groupMap: regionGroup,
            });
        }
    };
    // Handle keyboard events for multi-select mode
    const hotkeys = Array.isArray(multipleSelectHotkey)
        ? multipleSelectHotkey
        : [multipleSelectHotkey];
    const handleKeyDown = (event) => {
        if (hotkeys.includes(event.code) && !activeHotkey) {
            activeHotkey = event.code;
            isMultiSelectMode = true;
        }
    };
    const handleKeyUp = (event) => {
        if (event.code === activeHotkey) {
            activeHotkey = null;
            isMultiSelectMode = false;
        }
    };
    root.addEventListener('click', click);
    if (multipleSelectHotkey) {
        // If a hotkey is set, the initial state should be single mode
        isMultiSelectMode = false;
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    }
    const onSelect = (e) => {
        const { nativeEvent, data } = e;
        if (nativeEvent)
            return;
        const selectedData = !isMultiSelectMode ? data.data.slice(0, 1) : data.data;
        for (const d of selectedData) {
            const element = (0, utils_1.selectElementByData)(elements, d, datum);
            click({ target: element, nativeEvent: false });
        }
    };
    const onUnSelect = () => {
        clear(false);
    };
    emitter.on('element:select', onSelect);
    emitter.on('element:unselect', onUnSelect);
    return () => {
        for (const e of elements)
            removeLink(e);
        root.removeEventListener('click', click);
        if (multipleSelectHotkey) {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
        emitter.off('element:select', onSelect);
        emitter.off('element:unselect', onUnSelect);
    };
}
function ElementSelect(_a) {
    var { createGroup, createRegionGroup, background = false, link = false } = _a, rest = __rest(_a, ["createGroup", "createRegionGroup", "background", "link"]);
    return (context, _, emitter) => {
        const { container, view, options } = context;
        const { coordinate, scale } = view;
        const plotArea = (0, utils_1.selectPlotArea)(container);
        return elementSelect(plotArea, Object.assign({ elements: utils_1.selectG2Elements, datum: (0, utils_1.createDatumof)(view), groupKey: createGroup ? createGroup(view) : undefined, regionGroupKey: createRegionGroup
                ? createRegionGroup(view)
                : (0, utils_1.createXKey)(view), coordinate,
            scale, state: (0, utils_1.mergeState)(options, [
                ['selected', background ? {} : { lineWidth: '1', stroke: '#000' }],
                'unselected',
            ]), background,
            link,
            emitter }, rest));
    };
}
ElementSelect.props = {
    reapplyWhenUpdate: true,
};
//# sourceMappingURL=elementSelect.js.map