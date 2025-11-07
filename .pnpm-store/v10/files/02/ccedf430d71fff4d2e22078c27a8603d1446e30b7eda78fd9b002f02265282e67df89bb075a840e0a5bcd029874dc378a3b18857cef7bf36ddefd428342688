"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerBuiltInExtensions = registerBuiltInExtensions;
const g_1 = require("@antv/g");
const animations_1 = require("../animations");
const behaviors_1 = require("../behaviors");
const elements_1 = require("../elements");
const shapes_1 = require("../elements/shapes");
const layouts_1 = require("../layouts");
const palettes_1 = require("../palettes");
const plugins_1 = require("../plugins");
const themes_1 = require("../themes");
const transforms_1 = require("../transforms");
/**
 * <zh/> 内置插件统一在这里注册。
 * <en/> Built-in extensions are registered here.
 */
const BUILT_IN_EXTENSIONS = {
    animation: {
        'combo-collapse': animations_1.ComboCollapse,
        'combo-expand': animations_1.ComboExpand,
        'node-collapse': animations_1.NodeCollapse,
        'node-expand': animations_1.NodeExpand,
        'path-in': animations_1.PathIn,
        'path-out': animations_1.PathOut,
        fade: animations_1.Fade,
        translate: animations_1.Translate,
    },
    behavior: {
        'brush-select': behaviors_1.BrushSelect,
        'click-select': behaviors_1.ClickSelect,
        'collapse-expand': behaviors_1.CollapseExpand,
        'create-edge': behaviors_1.CreateEdge,
        'drag-canvas': behaviors_1.DragCanvas,
        'drag-element-force': behaviors_1.DragElementForce,
        'drag-element': behaviors_1.DragElement,
        'fix-element-size': behaviors_1.FixElementSize,
        'focus-element': behaviors_1.FocusElement,
        'hover-activate': behaviors_1.HoverActivate,
        'lasso-select': behaviors_1.LassoSelect,
        'auto-adapt-label': behaviors_1.AutoAdaptLabel,
        'optimize-viewport-transform': behaviors_1.OptimizeViewportTransform,
        'scroll-canvas': behaviors_1.ScrollCanvas,
        'zoom-canvas': behaviors_1.ZoomCanvas,
    },
    combo: {
        circle: elements_1.CircleCombo,
        rect: elements_1.RectCombo,
    },
    edge: {
        cubic: elements_1.Cubic,
        line: elements_1.Line,
        polyline: elements_1.Polyline,
        quadratic: elements_1.Quadratic,
        'cubic-horizontal': elements_1.CubicHorizontal,
        'cubic-radial': elements_1.CubicRadial,
        'cubic-vertical': elements_1.CubicVertical,
    },
    layout: {
        'antv-dagre': layouts_1.AntVDagreLayout,
        'combo-combined': layouts_1.ComboCombinedLayout,
        'compact-box': layouts_1.compactBox,
        'd3-force': layouts_1.D3ForceLayout,
        'force-atlas2': layouts_1.ForceAtlas2Layout,
        circular: layouts_1.CircularLayout,
        concentric: layouts_1.ConcentricLayout,
        dagre: layouts_1.DagreLayout,
        dendrogram: layouts_1.dendrogram,
        fishbone: layouts_1.FishboneLayout,
        force: layouts_1.ForceLayout,
        fruchterman: layouts_1.FruchtermanLayout,
        grid: layouts_1.GridLayout,
        indented: layouts_1.indented,
        mds: layouts_1.MDSLayout,
        mindmap: layouts_1.mindmap,
        radial: layouts_1.RadialLayout,
        random: layouts_1.RandomLayout,
        snake: layouts_1.SnakeLayout,
    },
    node: {
        circle: elements_1.Circle,
        diamond: elements_1.Diamond,
        ellipse: elements_1.Ellipse,
        hexagon: elements_1.Hexagon,
        html: elements_1.HTML,
        image: elements_1.Image,
        rect: elements_1.Rect,
        star: elements_1.Star,
        donut: elements_1.Donut,
        triangle: elements_1.Triangle,
    },
    palette: {
        spectral: palettes_1.spectral,
        tableau: palettes_1.tableau,
        oranges: palettes_1.oranges,
        greens: palettes_1.greens,
        blues: palettes_1.blues,
    },
    theme: {
        dark: themes_1.dark,
        light: themes_1.light,
    },
    plugin: {
        'bubble-sets': plugins_1.BubbleSets,
        'edge-bundling': plugins_1.EdgeBundling,
        'edge-filter-lens': plugins_1.EdgeFilterLens,
        'grid-line': plugins_1.GridLine,
        background: plugins_1.Background,
        contextmenu: plugins_1.Contextmenu,
        fisheye: plugins_1.Fisheye,
        fullscreen: plugins_1.Fullscreen,
        history: plugins_1.History,
        hull: plugins_1.Hull,
        legend: plugins_1.Legend,
        minimap: plugins_1.Minimap,
        snapline: plugins_1.Snapline,
        timebar: plugins_1.Timebar,
        title: plugins_1.Title,
        toolbar: plugins_1.Toolbar,
        tooltip: plugins_1.Tooltip,
        watermark: plugins_1.Watermark,
    },
    transform: {
        'arrange-draw-order': transforms_1.ArrangeDrawOrder,
        'collapse-expand-combo': transforms_1.CollapseExpandCombo,
        'collapse-expand-node': transforms_1.CollapseExpandNode,
        'get-edge-actual-ends': transforms_1.GetEdgeActualEnds,
        'map-node-size': transforms_1.MapNodeSize,
        'place-radial-labels': transforms_1.PlaceRadialLabels,
        'process-parallel-edges': transforms_1.ProcessParallelEdges,
        'update-related-edges': transforms_1.UpdateRelatedEdge,
    },
    shape: {
        circle: g_1.Circle,
        ellipse: g_1.Ellipse,
        group: g_1.Group,
        html: g_1.HTML,
        image: shapes_1.Image,
        line: g_1.Line,
        path: g_1.Path,
        polygon: g_1.Polygon,
        polyline: g_1.Polyline,
        rect: g_1.Rect,
        text: g_1.Text,
        label: shapes_1.Label,
        badge: shapes_1.Badge,
    },
};
const register_1 = require("./register");
/**
 * <zh/> 注册内置扩展
 *
 * <en/> Register built-in extensions
 */
function registerBuiltInExtensions() {
    Object.entries(BUILT_IN_EXTENSIONS).forEach(([category, extensions]) => {
        Object.entries(extensions).forEach(([type, extension]) => {
            (0, register_1.register)(category, type, extension);
        });
    });
}
//# sourceMappingURL=build-in.js.map