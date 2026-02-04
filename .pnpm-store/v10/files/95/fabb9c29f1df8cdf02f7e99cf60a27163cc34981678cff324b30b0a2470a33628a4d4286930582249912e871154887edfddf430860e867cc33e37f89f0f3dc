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
import { deepMix } from '@antv/util';
import { subObject } from '../utils/helper';
import { selectionOf } from '../utils/scale';
import { brush as createBrush } from './brushHighlight';
import { selectPlotArea } from './utils';
// Mock dblclick events.
function dblclick(interval = 300) {
    let preTimeStamp = null;
    return (e) => {
        const { timeStamp } = e;
        if (preTimeStamp !== null && timeStamp - preTimeStamp < interval) {
            preTimeStamp = timeStamp;
            return true;
        }
        preTimeStamp = timeStamp;
        return false;
    };
}
export function brushFilter(root, _a) {
    var { filter, reset, brushRegion, extent: optionalExtent, reverse, emitter, scale, coordinate, selection, series = false } = _a, rest = __rest(_a, ["filter", "reset", "brushRegion", "extent", "reverse", "emitter", "scale", "coordinate", "selection", "series"]);
    const brushStyle = subObject(rest, 'mask');
    const { width: rootWidth, height: rootHeight } = root.getBBox();
    const extent = optionalExtent
        ? optionalExtent
        : [0, 0, rootWidth, rootHeight];
    const isDblclick = dblclick();
    const brush = createBrush(root, Object.assign(Object.assign({}, brushStyle), { extent,
        brushRegion,
        reverse,
        brushcreated }));
    root.addEventListener('click', click);
    // Filter when brush created.
    function brushcreated(x, y, x1, y1, event) {
        if (x === x1 && y === y1)
            return;
        event.nativeEvent = true;
        filter(selection(x, y, x1, y1), event);
        brush.remove();
    }
    // Reset when dblclick.
    function click(e) {
        if (isDblclick(e)) {
            e.nativeEvent = true;
            reset(e);
        }
    }
    const onFilter = ({ nativeEvent, data }) => {
        if (nativeEvent)
            return;
        const { selection } = data;
        filter(selection, { nativeEvent: false });
    };
    emitter.on('brush:filter', onFilter);
    return () => {
        brush.destroy();
        emitter.off('brush:filter', onFilter);
        root.removeEventListener('click', click);
    };
}
export function BrushFilter(_a) {
    var { hideX = true, hideY = true } = _a, rest = __rest(_a, ["hideX", "hideY"]);
    return (target, viewInstances, emitter) => {
        const { container, view, options: viewOptions, update, setState } = target;
        const plotArea = selectPlotArea(container);
        const defaultOptions = {
            maskFill: '#777',
            maskFillOpacity: '0.3',
            maskStroke: '#fff',
            unhighlightedOpacity: 0.5,
            reverse: false,
        };
        let filtered = false;
        let filtering = false;
        let newView = view;
        const { scale, coordinate } = view;
        return brushFilter(plotArea, Object.assign(Object.assign({ brushRegion: (x, y, x1, y1) => [x, y, x1, y1], selection: (x, y, x1, y1) => {
                const { scale, coordinate } = newView;
                return selectionOf(x, y, x1, y1, scale, coordinate);
            }, filter: (selection, event) => __awaiter(this, void 0, void 0, function* () {
                // Avoid redundant filter.
                if (filtering)
                    return;
                filtering = true;
                // Update the domain of x and y scale to filter data.
                const [domainX, domainY] = selection;
                setState('brushFilter', (options) => {
                    const { marks } = options;
                    const newMarks = marks.map((mark) => deepMix({
                        // Hide label to keep smooth transition.
                        axis: Object.assign(Object.assign({}, (hideX && { x: { transform: [{ type: 'hide' }] } })), (hideY && { y: { transform: [{ type: 'hide' }] } })),
                    }, mark, {
                        // Set nice to false to avoid modify domain.
                        scale: {
                            x: { domain: domainX, nice: false },
                            y: { domain: domainY, nice: false },
                        },
                    }));
                    return Object.assign(Object.assign({}, viewOptions), { marks: newMarks, clip: true });
                });
                // Emit event.
                emitter.emit('brush:filter', Object.assign(Object.assign({}, event), { data: { selection: [domainX, domainY] } }));
                const newState = yield update();
                newView = newState.view;
                filtering = false;
                filtered = true;
            }), reset: (event) => {
                if (filtering || !filtered)
                    return;
                // Emit event.
                const { scale } = view;
                const { x: scaleX, y: scaleY } = scale;
                const domainX = scaleX.getOptions().domain;
                const domainY = scaleY.getOptions().domain;
                emitter.emit('brush:filter', Object.assign(Object.assign({}, event), { data: { selection: [domainX, domainY] } }));
                filtered = false;
                newView = view;
                setState('brushFilter');
                update();
            }, extent: undefined, emitter,
            scale,
            coordinate }, defaultOptions), rest));
    };
}
//# sourceMappingURL=brushFilter.js.map