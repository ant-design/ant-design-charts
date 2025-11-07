/**
 * UUID string.
 */
export declare type Uuid = string;
/**
 * Collection of global document objects
 */
export declare type AssetCollection = {
    _class: 'assetCollection';
    do_objectID: Uuid;
    imageCollection?: ImageCollection;
    colorAssets: ColorAsset[];
    gradientAssets: GradientAsset[];
    images: (FileRef | DataRef)[];
    colors: Color[];
    gradients: Gradient[];
    exportPresets: [];
};
/**
 * Legacy object only retained for migrating older documents.
 */
export declare type ImageCollection = {
    _class: 'imageCollection';
    images: any;
};
/**
 * Defines a reusable color asset
 */
export declare type ColorAsset = {
    _class: 'MSImmutableColorAsset';
    do_objectID: Uuid;
    name: string;
    color: Color;
};
/**
 * Defines a RGBA color value
 */
export declare type Color = {
    _class: 'color';
    alpha: UnitInterval;
    red: UnitInterval;
    green: UnitInterval;
    blue: UnitInterval;
    swatchID?: Uuid;
};
/**
 * The set of all real numbers that are greater than or equal to 0 and less than or equal to 1. Used within Sketch documents to encode normalised scalar values, for example RGB color components.
 */
export declare type UnitInterval = number;
/**
 * Defines a reusable gradient asset
 */
export declare type GradientAsset = {
    _class: 'MSImmutableGradientAsset';
    do_objectID: Uuid;
    name: string;
    gradient: Gradient;
};
/**
 * Defines a gradient
 */
export declare type Gradient = {
    _class: 'gradient';
    gradientType: GradientType;
    elipseLength: number;
    from: PointString;
    to: PointString;
    stops: GradientStop[];
};
/**
 * Enumeration of the gradient types
 */
export declare enum GradientType {
    Linear = 0,
    Radial = 1,
    Angular = 2
}
/**
 * A formatted string representation of a 2D point, e.g. {1, 1}.

 */
export declare type PointString = string;
/**
 * Defines a position on a gradient that marks the end of a transition to a new color
 */
export declare type GradientStop = {
    _class: 'gradientStop';
    color: Color;
    position: UnitInterval;
};
/**
 * Defines a reference to a file within the document bundle
 */
export declare type FileRef = {
    _class: 'MSJSONFileReference';
    _ref_class: 'MSImageData' | 'MSImmutablePage' | 'MSPatch';
    _ref: string;
};
/**
 * Defines inline base64 data
 */
export declare type DataRef = {
    _class: 'MSJSONOriginalDataReference';
    _ref_class: 'MSImageData' | 'MSFontData';
    _ref: string;
    data: {
        _data: string;
    };
    sha1: {
        _data: string;
    };
};
/**
 * Enumeration of the color profiles Sketch can use to render a document
 */
export declare enum ColorSpace {
    Unmanaged = 0,
    SRGB = 1,
    P3 = 2
}
/**
 * Defines a layer style that has been imported from a library
 */
export declare type ForeignLayerStyle = {
    _class: 'MSImmutableForeignLayerStyle';
    do_objectID: Uuid;
    libraryID: Uuid;
    sourceLibraryName: string;
    symbolPrivate: boolean;
    remoteStyleID: Uuid;
    localSharedStyle: SharedStyle;
};
/**
 * Defines a reusable style
 */
export declare type SharedStyle = {
    _class: 'sharedStyle';
    do_objectID: Uuid;
    name: string;
    value: Style;
};
/**
 * Defines a layer style
 */
export declare type Style = {
    _class: 'style';
    do_objectID: Uuid;
    borders?: Border[];
    borderOptions: BorderOptions;
    blur?: Blur;
    fills?: Fill[];
    startMarkerType: MarkerType;
    endMarkerType: MarkerType;
    miterLimit: number;
    windingRule: WindingRule;
    textStyle?: TextStyle;
    shadows?: Shadow[];
    innerShadows: InnerShadow[];
    contextSettings?: GraphicsContextSettings;
    colorControls: ColorControls;
};
/**
 * Defines a border style
 */
export declare type Border = {
    _class: 'border';
    isEnabled: boolean;
    color: Color;
    fillType: FillType;
    position: BorderPosition;
    thickness: number;
    contextSettings: GraphicsContextSettings;
    gradient: Gradient;
};
/**
 * Enumeration of the fill types
 */
export declare enum FillType {
    Color = 0,
    Gradient = 1,
    Pattern = 4
}
/**
 * Enumeration of border positions
 */
export declare enum BorderPosition {
    Center = 0,
    Inside = 1,
    Outside = 2
}
/**
 * Defines the opacity and blend mode of a style or shadow
 */
export declare type GraphicsContextSettings = {
    _class: 'graphicsContextSettings';
    blendMode: BlendMode;
    opacity: number;
};
/**
 * Enumeration of the blend modes that can be applied to fills
 */
export declare enum BlendMode {
    Normal = 0,
    Darken = 1,
    Multiply = 2,
    ColorBurn = 3,
    Lighten = 4,
    Screen = 5,
    ColorDodge = 6,
    Overlay = 7,
    SoftLight = 8,
    HardLight = 9,
    Difference = 10,
    Exclusion = 11,
    Hue = 12,
    Saturation = 13,
    Color = 14,
    Luminosity = 15,
    PlusDarker = 16,
    PlusLighter = 17
}
/**
 * Defines border options
 */
export declare type BorderOptions = {
    _class: 'borderOptions';
    isEnabled: boolean;
    dashPattern: number[];
    lineCapStyle: LineCapStyle;
    lineJoinStyle: LineJoinStyle;
};
/**
 * Enumeration of the line cap styles
 */
export declare enum LineCapStyle {
    Butt = 0,
    Round = 1,
    Projecting = 2
}
/**
 * Enumeration of the line join styles
 */
export declare enum LineJoinStyle {
    Miter = 0,
    Round = 1,
    Bevel = 2
}
/**
 * Defines a blur style
 */
export declare type Blur = {
    _class: 'blur';
    isEnabled: boolean;
    center: PointString;
    motionAngle?: number;
    radius?: number;
    saturation: number;
    type: BlurType;
};
/**
 * Enumeration of the various blur types
 */
export declare enum BlurType {
    Gaussian = 0,
    Motion = 1,
    Zoom = 2,
    Background = 3
}
/**
 * Defines a fill style
 */
export declare type Fill = {
    _class: 'fill';
    isEnabled: boolean;
    color: Color;
    fillType: FillType;
    noiseIndex: number;
    noiseIntensity: number;
    patternFillType: PatternFillType;
    patternTileScale: number;
    contextSettings: GraphicsContextSettings;
    gradient: Gradient;
    image?: FileRef | DataRef;
};
/**
 * Enumeration of pattern fill types
 */
export declare enum PatternFillType {
    Tile = 0,
    Fill = 1,
    Stretch = 2,
    Fit = 3
}
/**
 * Enumeration of the possible types of vector line endings
 */
export declare enum MarkerType {
    OpenArrow = 0,
    FilledArrow = 1,
    Line = 2,
    OpenCircle = 3,
    FilledCircle = 4,
    OpenSquare = 5,
    FilledSquare = 6
}
/**
 * Enumeration of the winding rule that controls how fills behave in shapes with complex paths
 */
export declare enum WindingRule {
    NonZero = 0,
    EvenOdd = 1
}
/**
 * Defines text style
 */
export declare type TextStyle = {
    _class: 'textStyle';
    verticalAlignment: TextVerticalAlignment;
    encodedAttributes: {
        paragraphStyle?: ParagraphStyle;
        MSAttributedStringTextTransformAttribute?: TextTransform;
        underlineStyle?: UnderlineStyle;
        strikethroughStyle?: StrikethroughStyle;
        kerning?: number;
        MSAttributedStringFontAttribute: FontDescriptor;
        textStyleVerticalAlignmentKey?: TextVerticalAlignment;
        MSAttributedStringColorAttribute?: Color;
    };
};
/**
 * Enumeration of the text style vertical alighment options
 */
export declare enum TextVerticalAlignment {
    Top = 0,
    Middle = 1,
    Bottom = 2
}
/**
 * Defines the paragraph style within a text style
 */
export declare type ParagraphStyle = {
    _class: 'paragraphStyle';
    alignment?: TextHorizontalAlignment;
    maximumLineHeight?: number;
    minimumLineHeight?: number;
    paragraphSpacing?: number;
    allowsDefaultTighteningForTruncation?: number;
};
/**
 * Enumeration of the horizontal alignment options for paragraphs
 */
export declare enum TextHorizontalAlignment {
    Left = 0,
    Right = 1,
    Centered = 2,
    Justified = 3,
    Natural = 4
}
/**
 * Enumeration of the text style transformations options
 */
export declare enum TextTransform {
    None = 0,
    Uppercase = 1,
    Lowercase = 2
}
/**
 * Enumeration of the text style underline options
 */
export declare enum UnderlineStyle {
    None = 0,
    Underlined = 1
}
/**
 * Enumeration of the text style strikethrough options
 */
export declare enum StrikethroughStyle {
    None = 0,
    Strikethrough = 1
}
/**
 * Defines a font selection
 */
export declare type FontDescriptor = {
    _class: 'fontDescriptor';
    attributes: {
        name: string;
        size: number;
        variation?: {
            [key: string]: number;
        };
    };
};
/**
 * Defines a shadow style
 */
export declare type Shadow = {
    _class: 'shadow';
    isEnabled: boolean;
    blurRadius: number;
    color: Color;
    contextSettings: GraphicsContextSettings;
    offsetX: number;
    offsetY: number;
    spread: number;
};
/**
 * Defines an inner shadow style
 */
export declare type InnerShadow = {
    _class: 'innerShadow';
    isEnabled: boolean;
    blurRadius: number;
    color: Color;
    contextSettings: GraphicsContextSettings;
    offsetX: number;
    offsetY: number;
    spread: number;
};
/**
 * Defines color adjust styles on images
 */
export declare type ColorControls = {
    _class: 'colorControls';
    isEnabled: boolean;
    brightness: number;
    contrast: number;
    hue: number;
    saturation: number;
};
/**
 * Defines a symbol that has been imported from a library
 */
export declare type ForeignSymbol = {
    _class: 'MSImmutableForeignSymbol';
    do_objectID: Uuid;
    libraryID: Uuid;
    sourceLibraryName: string;
    symbolPrivate: boolean;
    originalMaster: SymbolMaster;
    symbolMaster: SymbolMaster;
    missingLibraryFontAcknowledged?: boolean;
};
/**
 * A symbol source layer represents a reusable group of layers
 */
export declare type SymbolMaster = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    hasClickThrough: boolean;
    horizontalRulerData: RulerData;
    verticalRulerData: RulerData;
    layout?: LayoutGrid;
    grid?: SimpleGrid;
    groupLayout?: FreeformGroupLayout | InferredGroupLayout;
    _class: 'symbolMaster';
    backgroundColor: Color;
    hasBackgroundColor: boolean;
    includeBackgroundColorInInstance: boolean;
    includeBackgroundColorInExport: boolean;
    isFlowHome: boolean;
    resizesContent: boolean;
    presetDictionary?: any;
    symbolID: Uuid;
    allowsOverrides: boolean;
    overrideProperties: OverrideProperty[];
    layers: (Group | Oval | Polygon | Rectangle | ShapePath | Star | Triangle | ShapeGroup | Text | SymbolInstance | Slice | Hotspot | Bitmap)[];
};
/**
 * Enumeration of the boolean operations that can be applied to combine shapes
 */
export declare enum BooleanOperation {
    None = -1,
    Union = 0,
    Subtract = 1,
    Intersection = 2,
    Difference = 3
}
/**
 * Defines a layer's export options
 */
export declare type ExportOptions = {
    _class: 'exportOptions';
    exportFormats: ExportFormat[];
    includedLayerIds: Uuid[];
    layerOptions: number;
    shouldTrim: boolean;
};
/**
 * Defines an export format, as listed in a layer's export options
 */
export declare type ExportFormat = {
    _class: 'exportFormat';
    absoluteSize: number;
    fileFormat: ExportFileFormat;
    name: string;
    namingScheme?: ExportFormatNamingScheme;
    scale: number;
    visibleScaleType: VisibleScaleType;
};
/**
 * Enumeration of the file formats that can be selected in the layer export options
 */
export declare enum ExportFileFormat {
    PNG = "png",
    JPG = "jpg",
    TIFF = "tiff",
    EPS = "eps",
    PDF = "pdf",
    WEBP = "webp",
    SVG = "svg"
}
/**
 * Enumeration of the possible types of export format naming schemes
 */
export declare enum ExportFormatNamingScheme {
    Suffix = 0,
    SecondaryPrefix = 1,
    PrimaryPrefix = 2
}
/**
 * Enumeration of the possible values to control how an exported layer will be scaled
 */
export declare enum VisibleScaleType {
    Scale = 0,
    Width = 1,
    Height = 2
}
/**
 * Defines an abstract rectangle
 */
export declare type Rect = {
    _class: 'rect';
    constrainProportions: boolean;
    height: number;
    width: number;
    x: number;
    y: number;
};
/**
 * Defines a connection between elements in a prototype
 */
export declare type FlowConnection = {
    _class: 'MSImmutableFlowConnection';
    destinationArtboardID: Uuid | 'back' | 'automatic';
    animationType: AnimationType;
    maintainScrollPosition?: boolean;
};
/**
 * Enumeration of the animation transition types between prototype screens
 */
export declare enum AnimationType {
    None = 0,
    SlideFromLeft = 1,
    SlideFromRight = 2,
    SlideFromBottom = 3,
    SlideFromTop = 4
}
/**
 * Enumeration of the expansion states in the layer list UI
 */
export declare enum LayerListExpanded {
    Undecided = 0,
    Collapsed = 1,
    Expanded = 2
}
/**
 * Enumeration of the possible resize types
 */
export declare enum ResizeType {
    Stretch = 0,
    PinToEdge = 1,
    Resize = 2,
    Float = 3
}
/**
 * Defines persisted ruler positions on artboards, pages and symbols
 */
export declare type RulerData = {
    _class: 'rulerData';
    base: number;
    guides: number[];
};
/**
 * Defines the layout settings for an artboard or page
 */
export declare type LayoutGrid = {
    _class: 'layoutGrid';
    isEnabled: boolean;
    columnWidth: number;
    gutterHeight: number;
    gutterWidth: number;
    horizontalOffset: number;
    numberOfColumns: number;
    rowHeightMultiplication: number;
    totalWidth: number;
    guttersOutside: boolean;
    drawHorizontal: boolean;
    drawHorizontalLines: boolean;
    drawVertical: boolean;
};
/**
 * Defines the grid settings for an artboard or page
 */
export declare type SimpleGrid = {
    _class: 'simpleGrid';
    isEnabled: boolean;
    gridSize: number;
    thickGridTimes: number;
};
/**
 * Normal group layout
 */
export declare type FreeformGroupLayout = {
    _class: 'MSImmutableFreeformGroupLayout';
};
/**
 * Inferred group layout defines smart layout options
 */
export declare type InferredGroupLayout = {
    _class: 'MSImmutableInferredGroupLayout';
    axis: InferredLayoutAxis;
    layoutAnchor: InferredLayoutAnchor;
    maxSize?: number;
    minSize?: number;
};
/**
 * Enumeration of the axis types for inferred (aka smart) layout
 */
export declare enum InferredLayoutAxis {
    Horizontal = 0,
    Vertical = 1
}
/**
 * Enumeration of the anchor types for inferred (aka smart) layout
 */
export declare enum InferredLayoutAnchor {
    Min = 0,
    Middle = 1,
    Max = 2
}
/**
 * Defines override properties on symbol sources
 */
export declare type OverrideProperty = {
    _class: 'MSImmutableOverrideProperty';
    overrideName: OverrideName;
    canOverride: boolean;
};
/**
 * Defines the valid string patterns for an override name
 */
export declare type OverrideName = string | string | string | string;
/**
 * Group layers are a document organisation aid
 */
export declare type Group = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    hasClickThrough: boolean;
    groupLayout?: FreeformGroupLayout | InferredGroupLayout;
    layers: (Group | Oval | Polygon | Rectangle | ShapePath | Star | Triangle | ShapeGroup | Text | SymbolInstance | Slice | Hotspot | Bitmap)[];
    _class: 'group';
};
/**
 * Oval layers are the result of adding an oval shape to the canvas
 */
export declare type Oval = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    edited: boolean;
    isClosed: boolean;
    pointRadiusBehaviour: PointsRadiusBehaviour;
    points: CurvePoint[];
    _class: 'oval';
};
/**
 * Enumeration of the possible values for corner rounding on shape points.
 */
export declare enum PointsRadiusBehaviour {
    Disabled = -1,
    Legacy = 0,
    Rounded = 1,
    Smooth = 2
}
/**
 * Defines a shape layer curve point
 */
export declare type CurvePoint = {
    _class: 'curvePoint';
    cornerRadius: number;
    cornerStyle: CornerStyle;
    curveFrom: PointString;
    curveTo: PointString;
    hasCurveFrom: boolean;
    hasCurveTo: boolean;
    curveMode: CurveMode;
    point: PointString;
};
/**
 * Enumeration of the corner styles that can be applied to vector points
 */
export declare enum CornerStyle {
    Rounded = 0,
    RoundedInverted = 1,
    Angled = 2,
    Squared = 3
}
/**
 * Enumeration of the curve modes that can be applied to vector points
 */
export declare enum CurveMode {
    None = 0,
    Straight = 1,
    Mirrored = 2,
    Asymmetric = 3,
    Disconnected = 4
}
/**
 * Polygon layers are the result of adding a polygon shape to the canvas
 */
export declare type Polygon = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    edited: boolean;
    isClosed: boolean;
    pointRadiusBehaviour: PointsRadiusBehaviour;
    points: CurvePoint[];
    _class: 'polygon';
    numberOfPoints: number;
};
/**
 * Rectangle layers are the result of adding a rectangle shape to the canvas
 */
export declare type Rectangle = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    edited: boolean;
    isClosed: boolean;
    pointRadiusBehaviour: PointsRadiusBehaviour;
    points: CurvePoint[];
    _class: 'rectangle';
    fixedRadius: number;
    hasConvertedToNewRoundCorners: boolean;
    needsConvertionToNewRoundCorners: boolean;
};
/**
 * Shape path layers are the result of adding a vector layer
 */
export declare type ShapePath = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    edited: boolean;
    isClosed: boolean;
    pointRadiusBehaviour: PointsRadiusBehaviour;
    points: CurvePoint[];
    _class: 'shapePath';
};
/**
 * Star layers are the result of adding a star shape to the canvas
 */
export declare type Star = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    edited: boolean;
    isClosed: boolean;
    pointRadiusBehaviour: PointsRadiusBehaviour;
    points: CurvePoint[];
    _class: 'star';
    numberOfPoints: number;
    radius: number;
};
/**
 * Triangle layers are the result of adding a triangle shape to the canvas
 */
export declare type Triangle = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    edited: boolean;
    isClosed: boolean;
    pointRadiusBehaviour: PointsRadiusBehaviour;
    points: CurvePoint[];
    _class: 'triangle';
    isEquilateral: boolean;
};
/**
 * Shape groups layers group together multiple shape layers
 */
export declare type ShapeGroup = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    hasClickThrough: boolean;
    groupLayout?: FreeformGroupLayout | InferredGroupLayout;
    layers: (Group | Oval | Polygon | Rectangle | ShapePath | Star | Triangle | ShapeGroup | Text | SymbolInstance | Slice | Hotspot | Bitmap)[];
    _class: 'shapeGroup';
    windingRule: WindingRule;
};
/**
 * A text layer represents a discrete block or line of text
 */
export declare type Text = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    _class: 'text';
    attributedString: AttributedString;
    automaticallyDrawOnUnderlyingPath: boolean;
    dontSynchroniseWithSymbol: boolean;
    lineSpacingBehaviour: LineSpacingBehaviour;
    textBehaviour: TextBehaviour;
    glyphBounds: PointListString;
};
/**
 * Defines character strings and associated styling applied to character ranges
 */
export declare type AttributedString = {
    _class: 'attributedString';
    string: string;
    attributes: StringAttribute[];
};
/**
 * Defines an attribute assigned to a range of characters in an attributed string
 */
export declare type StringAttribute = {
    _class: 'stringAttribute';
    location: number;
    length: number;
    attributes: {
        kerning?: number;
        textStyleVerticalAlignmentKey?: TextVerticalAlignment;
        MSAttributedStringFontAttribute: FontDescriptor;
        MSAttributedStringColorAttribute?: Color;
        paragraphStyle?: ParagraphStyle;
    };
};
/**
 * Enumeration of line spacing behaviour for fixed line height text
 */
export declare enum LineSpacingBehaviour {
    None = 0,
    Legacy = 1,
    ConsistentBaseline = 2
}
/**
 * Enumeration of the behaviours for text layers
 */
export declare enum TextBehaviour {
    Flexible = 0,
    Fixed = 1,
    FixedWidthAndHeight = 2
}
/**
 * A string representation of a series of 2D points, in the format {{x, y}, {x,y}}.
 */
export declare type PointListString = string;
/**
 * Symbol instance layers represent an instance of a symbol source
 */
export declare type SymbolInstance = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    _class: 'symbolInstance';
    overrideValues: OverrideValue[];
    scale: number;
    symbolID: Uuid;
    verticalSpacing: number;
    horizontalSpacing: number;
    preservesSpaceWhenHidden?: boolean;
};
/**
 * Defines an individual symbol override
 */
export declare type OverrideValue = {
    _class: 'overrideValue';
    do_objectID?: Uuid;
    overrideName: OverrideName;
    value: string | Uuid | FileRef | DataRef;
};
/**
 * Slice layers allow the content beneath their frame to be exported
 */
export declare type Slice = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    _class: 'slice';
    hasBackgroundColor: boolean;
    backgroundColor: Color;
};
/**
 * Hotspot layers define clickable hotspots for use with prototypes
 */
export declare type Hotspot = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    _class: 'MSImmutableHotspotLayer';
};
/**
 * Bitmap layers house a single image
 */
export declare type Bitmap = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    _class: 'bitmap';
    fillReplacesImage: boolean;
    image: FileRef | DataRef;
    intendedDPI: number;
    clippingMask: PointListString;
};
/**
 * Defines a text style that has been imported from a library
 */
export declare type ForeignTextStyle = {
    _class: 'MSImmutableForeignTextStyle';
    libraryID: Uuid;
    sourceLibraryName: string;
    symbolPrivate: boolean;
    remoteStyleID: Uuid;
    localSharedStyle: SharedStyle;
    missingLibraryFontAcknowledged?: boolean;
};
/**
 * Defines a swatch that has been imported from a library
 */
export declare type ForeignSwatch = {
    _class: 'MSImmutableForeignSwatch';
    do_objectID: Uuid;
    libraryID: Uuid;
    sourceLibraryName: string;
    symbolPrivate: boolean;
    remoteSwatchID: Uuid;
    localSwatch: Swatch;
};
/**
 * Defines a swatch color variable.
 */
export declare type Swatch = {
    _class: 'swatch';
    do_objectID: Uuid;
    name: string;
    value: Color;
};
/**
 * Defines a document's list of reusable styles
 */
export declare type SharedStyleContainer = {
    do_objectID?: Uuid;
    _class: 'sharedStyleContainer';
    objects: SharedStyle[];
};
/**
 * Defines a document's list of reusable text styles
 */
export declare type SharedTextStyleContainer = {
    do_objectID?: Uuid;
    _class: 'sharedTextStyleContainer';
    objects: SharedStyle[];
};
/**
 * Legacy object only retained for migrating older documents.
 */
export declare type SymbolContainer = {
    do_objectID?: Uuid;
    _class: 'symbolContainer';
    objects: [];
};
/**
 * Defines a document's list of swatches
 */
export declare type SwatchContainer = {
    _class: 'swatchContainer';
    do_objectID?: Uuid;
    objects: Swatch[];
};
/**
 * Defines a reference to font data embedded in the document
 */
export declare type FontRef = {
    _class: 'fontReference';
    fontData: DataRef;
    fontFamilyName: string;
    fontFileName: string;
    options: number;
    postscriptNames: string[];
};
/**
 * Container for ephemeral document state. For now this is just a placeholder, and will see additions in future document versions.
 */
export declare type DocumentState = any;
/**
 * Defines ephemeral patch information related to the Cloud collaborative editing feature. This information will only be found behind-the-scenes in Cloud documents and won't be relevant or visible to users parsing or generating their own Sketch documents.
 */
export declare type PatchInfo = {
    _class: 'MSImmutablePatchInfo';
    baseVersionID: Uuid;
    lastIntegratedPatchID: Uuid;
    localPatches: FileRef[];
    receivedPatches: FileRef[];
};
/**
 * Represents a "reference" to the asset library, that is used in the document
 */
export declare type DocumentLibraryInfo = {
    _class: 'MSImmutableDocumentLibraryInfo';
    do_objectID?: Uuid;
    libraryType: DocumentLibraryType;
    name?: string;
    appcastURL?: string;
    documentID?: Uuid;
    shareID?: Uuid;
    workspaceName?: string;
};
/**
 * Enumeration of the asset library type. Roughly represents all library types from Preferences... > Libraries tab
 */
export declare enum DocumentLibraryType {
    Local = 0,
    Workspace = 1,
    ThirdParty = 2
}
/**
 * Page layers are the top level organisational abstraction within a document
 */
export declare type Page = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    hasClickThrough: boolean;
    horizontalRulerData: RulerData;
    verticalRulerData: RulerData;
    layout?: LayoutGrid;
    grid?: SimpleGrid;
    groupLayout?: FreeformGroupLayout | InferredGroupLayout;
    _class: 'page';
    layers: (Artboard | Group | Oval | Polygon | Rectangle | ShapePath | Star | Triangle | ShapeGroup | Text | SymbolMaster | SymbolInstance | Slice | Hotspot | Bitmap)[];
};
/**
 * Artboard layers are a document organisation aid. They have a fixed frame that usually map to variations of device dimensions or viewport sizes
 */
export declare type Artboard = {
    do_objectID: Uuid;
    booleanOperation: BooleanOperation;
    exportOptions: ExportOptions;
    frame: Rect;
    flow?: FlowConnection;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    layerListExpandedType: LayerListExpanded;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: ResizeType;
    rotation: number;
    sharedStyleID?: Uuid;
    shouldBreakMaskChain: boolean;
    hasClippingMask?: boolean;
    clippingMaskMode?: number;
    userInfo?: any;
    style?: Style;
    maintainScrollPosition?: boolean;
    hasClickThrough: boolean;
    horizontalRulerData: RulerData;
    verticalRulerData: RulerData;
    layout?: LayoutGrid;
    grid?: SimpleGrid;
    groupLayout?: FreeformGroupLayout | InferredGroupLayout;
    _class: 'artboard';
    backgroundColor: Color;
    hasBackgroundColor: boolean;
    includeBackgroundColorInExport: boolean;
    isFlowHome: boolean;
    resizesContent: boolean;
    prototypeViewport?: PrototypeViewport;
    layers: (Group | Oval | Polygon | Rectangle | ShapePath | Star | Triangle | ShapeGroup | Text | SymbolInstance | Slice | Hotspot | Bitmap)[];
};
/**
 * Defines a prototype viewport with a reference to the original template layer that was used defining it.
 */
export declare type PrototypeViewport = {
    _class: 'MSImmutablePrototypeViewport';
    name: string;
    size: SizeString;
    templateID?: Uuid;
    libraryID?: Uuid;
};
/**
 * A formatted string representation of a rectangle size, e.g. {10.5, 10}.

 */
export declare type SizeString = string;
/**
 * Contains metadata about the Sketch file - information about pages and artboards appearing in the file, fonts used, the version of Sketch used to save the file etc.
 */
export declare type Meta = {
    commit: string;
    pagesAndArtboards: {
        [key: string]: {
            name: string;
            artboards: {
                [key: string]: {
                    name: string;
                };
            };
        };
    };
    version: 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146;
    compatibilityVersion: 99;
    coeditCompatibilityVersion?: number;
    app: BundleId;
    autosaved: NumericalBool;
    variant: SketchVariant;
    created: {
        commit: string;
        appVersion: string;
        build: number;
        app: BundleId;
        compatibilityVersion: number;
        coeditCompatibilityVersion?: number;
        version: number;
        variant: SketchVariant;
    };
    saveHistory: string[];
    appVersion: string;
    build: number;
};
/**
 * Enumeration of the Apple bundle ids for the various variants of Sketch
 */
export declare enum BundleId {
    PublicRelease = "com.bohemiancoding.sketch3",
    Beta = "com.bohemiancoding.sketch3.beta",
    Private = "com.bohemiancoding.sketch3.private",
    FeaturePreview = "com.bohemiancoding.sketch3.feature-preview",
    Internal = "com.bohemiancoding.sketch3.internal",
    Experimental = "com.bohemiancoding.sketch3.experimental",
    Testing = "com.bohemiancoding.sketch3.testing"
}
/**
 * A numerical boolean where 0 is false, and 1 is true.
 */
export declare enum NumericalBool {
    True = 0,
    False = 1
}
/**
 * Enumeration of the Sketch variants
 */
export declare type SketchVariant = 'NONAPPSTORE' | 'APPSTORE' | 'BETA' | 'PRIVATE' | 'FEATURE_PREVIEW' | 'INTERNAL' | 'EXPERIMENTAL' | 'TESTING' | 'UNITTEST';
export declare type User = {
    document: {
        pageListHeight: number;
        pageListCollapsed: NumericalBool;
        expandedSymbolPathsInSidebar?: [];
        expandedTextStylePathsInPopover?: [];
        libraryListCollapsed?: NumericalBool;
    };
    [key: string]: any;
};
/**
 * The workspace is a folder in the Sketch file archive that can contain arbitrary JSON files, allowing Sketch and 3rd party products and tools to store settings that should travel with the Sketch document. To avoid clashes or settings being overridden, select a unique name for your workspace file.
 */
export declare type Workspace = any;
/**
 * This schema describes a representation of an expanded Sketch file, that is, a Sketch file that has been unzipped, all of its entries parsed to JSON and merged into a single object. A concrete example of an expanded sketch file is the return value of the `fromFile` function in `@sketch-hq/sketch-file`
 */
export declare type Contents = {
    document: {
        _class: 'document';
        do_objectID: Uuid;
        assets: AssetCollection;
        colorSpace: ColorSpace;
        currentPageIndex: number;
        foreignLayerStyles: ForeignLayerStyle[];
        foreignSymbols: ForeignSymbol[];
        foreignTextStyles: ForeignTextStyle[];
        foreignSwatches?: ForeignSwatch[];
        layerStyles: SharedStyleContainer;
        layerTextStyles: SharedTextStyleContainer;
        layerSymbols?: SymbolContainer;
        sharedSwatches?: SwatchContainer;
        fontReferences?: FontRef[];
        documentState?: DocumentState;
        patchInfo?: PatchInfo;
        perDocumentLibraries: DocumentLibraryInfo[];
        pages: Page[];
    };
    meta: Meta;
    user: User;
    workspace?: Workspace;
};
/**
 * The document entry in a Sketch file.
 */
export declare type Document = {
    _class: 'document';
    do_objectID: Uuid;
    assets: AssetCollection;
    colorSpace: ColorSpace;
    currentPageIndex: number;
    foreignLayerStyles: ForeignLayerStyle[];
    foreignSymbols: ForeignSymbol[];
    foreignTextStyles: ForeignTextStyle[];
    foreignSwatches?: ForeignSwatch[];
    layerStyles: SharedStyleContainer;
    layerTextStyles: SharedTextStyleContainer;
    layerSymbols?: SymbolContainer;
    sharedSwatches?: SwatchContainer;
    fontReferences?: FontRef[];
    documentState?: DocumentState;
    patchInfo?: PatchInfo;
    perDocumentLibraries: DocumentLibraryInfo[];
    pages: FileRef[];
};
/**
 * Union of all layers
 */
export declare type AnyLayer = SymbolMaster | Group | Oval | Polygon | Rectangle | ShapePath | Star | Triangle | ShapeGroup | Text | SymbolInstance | Slice | Hotspot | Bitmap | Page | Artboard;
/**
 * Union of all group layers
 */
export declare type AnyGroup = SymbolMaster | Group | ShapeGroup | Page | Artboard;
/**
 * Union of all objects, i.e. objects with a _class property
 */
export declare type AnyObject = AssetCollection | ImageCollection | ColorAsset | Color | GradientAsset | Gradient | GradientStop | FileRef | DataRef | ForeignLayerStyle | SharedStyle | Style | Border | GraphicsContextSettings | BorderOptions | Blur | Fill | TextStyle | ParagraphStyle | FontDescriptor | Shadow | InnerShadow | ColorControls | ForeignSymbol | SymbolMaster | ExportOptions | ExportFormat | Rect | FlowConnection | RulerData | LayoutGrid | SimpleGrid | FreeformGroupLayout | InferredGroupLayout | OverrideProperty | Group | Oval | CurvePoint | Polygon | Rectangle | ShapePath | Star | Triangle | ShapeGroup | Text | AttributedString | StringAttribute | SymbolInstance | OverrideValue | Slice | Hotspot | Bitmap | ForeignTextStyle | ForeignSwatch | Swatch | SharedStyleContainer | SharedTextStyleContainer | SymbolContainer | SwatchContainer | FontRef | PatchInfo | DocumentLibraryInfo | Page | Artboard | PrototypeViewport;
/**
 * Enum of all possible _class property values
 */
export declare enum ClassValue {
    MSImmutableColorAsset = "MSImmutableColorAsset",
    MSImmutableDocumentLibraryInfo = "MSImmutableDocumentLibraryInfo",
    MSImmutableFlowConnection = "MSImmutableFlowConnection",
    MSImmutableForeignLayerStyle = "MSImmutableForeignLayerStyle",
    MSImmutableForeignSwatch = "MSImmutableForeignSwatch",
    MSImmutableForeignSymbol = "MSImmutableForeignSymbol",
    MSImmutableForeignTextStyle = "MSImmutableForeignTextStyle",
    MSImmutableFreeformGroupLayout = "MSImmutableFreeformGroupLayout",
    MSImmutableGradientAsset = "MSImmutableGradientAsset",
    MSImmutableHotspotLayer = "MSImmutableHotspotLayer",
    MSImmutableInferredGroupLayout = "MSImmutableInferredGroupLayout",
    MSImmutableOverrideProperty = "MSImmutableOverrideProperty",
    MSImmutablePatchInfo = "MSImmutablePatchInfo",
    MSImmutablePrototypeViewport = "MSImmutablePrototypeViewport",
    MSJSONFileReference = "MSJSONFileReference",
    MSJSONOriginalDataReference = "MSJSONOriginalDataReference",
    Artboard = "artboard",
    AssetCollection = "assetCollection",
    AttributedString = "attributedString",
    Bitmap = "bitmap",
    Blur = "blur",
    Border = "border",
    BorderOptions = "borderOptions",
    Color = "color",
    ColorControls = "colorControls",
    CurvePoint = "curvePoint",
    ExportFormat = "exportFormat",
    ExportOptions = "exportOptions",
    Fill = "fill",
    FontDescriptor = "fontDescriptor",
    FontReference = "fontReference",
    Gradient = "gradient",
    GradientStop = "gradientStop",
    GraphicsContextSettings = "graphicsContextSettings",
    Group = "group",
    ImageCollection = "imageCollection",
    InnerShadow = "innerShadow",
    LayoutGrid = "layoutGrid",
    Oval = "oval",
    OverrideValue = "overrideValue",
    Page = "page",
    ParagraphStyle = "paragraphStyle",
    Polygon = "polygon",
    Rect = "rect",
    Rectangle = "rectangle",
    RulerData = "rulerData",
    Shadow = "shadow",
    ShapeGroup = "shapeGroup",
    ShapePath = "shapePath",
    SharedStyle = "sharedStyle",
    SharedStyleContainer = "sharedStyleContainer",
    SharedTextStyleContainer = "sharedTextStyleContainer",
    SimpleGrid = "simpleGrid",
    Slice = "slice",
    Star = "star",
    StringAttribute = "stringAttribute",
    Style = "style",
    Swatch = "swatch",
    SwatchContainer = "swatchContainer",
    SymbolContainer = "symbolContainer",
    SymbolInstance = "symbolInstance",
    SymbolMaster = "symbolMaster",
    Text = "text",
    TextStyle = "textStyle",
    Triangle = "triangle"
}
/**
 * A mapping of class values to object types
 */
export declare type ClassMap = {
    triangle: Triangle;
    textStyle: TextStyle;
    text: Text;
    symbolMaster: SymbolMaster;
    symbolInstance: SymbolInstance;
    symbolContainer: SymbolContainer;
    swatchContainer: SwatchContainer;
    swatch: Swatch;
    style: Style;
    stringAttribute: StringAttribute;
    star: Star;
    slice: Slice;
    simpleGrid: SimpleGrid;
    sharedTextStyleContainer: SharedTextStyleContainer;
    sharedStyleContainer: SharedStyleContainer;
    sharedStyle: SharedStyle;
    shapePath: ShapePath;
    shapeGroup: ShapeGroup;
    shadow: Shadow;
    rulerData: RulerData;
    rectangle: Rectangle;
    rect: Rect;
    polygon: Polygon;
    paragraphStyle: ParagraphStyle;
    page: Page;
    overrideValue: OverrideValue;
    oval: Oval;
    layoutGrid: LayoutGrid;
    innerShadow: InnerShadow;
    imageCollection: ImageCollection;
    group: Group;
    graphicsContextSettings: GraphicsContextSettings;
    gradientStop: GradientStop;
    gradient: Gradient;
    fontReference: FontRef;
    fontDescriptor: FontDescriptor;
    fill: Fill;
    exportOptions: ExportOptions;
    exportFormat: ExportFormat;
    curvePoint: CurvePoint;
    colorControls: ColorControls;
    color: Color;
    borderOptions: BorderOptions;
    border: Border;
    blur: Blur;
    bitmap: Bitmap;
    attributedString: AttributedString;
    assetCollection: AssetCollection;
    artboard: Artboard;
    MSJSONOriginalDataReference: DataRef;
    MSJSONFileReference: FileRef;
    MSImmutablePrototypeViewport: PrototypeViewport;
    MSImmutablePatchInfo: PatchInfo;
    MSImmutableOverrideProperty: OverrideProperty;
    MSImmutableInferredGroupLayout: InferredGroupLayout;
    MSImmutableHotspotLayer: Hotspot;
    MSImmutableGradientAsset: GradientAsset;
    MSImmutableFreeformGroupLayout: FreeformGroupLayout;
    MSImmutableForeignTextStyle: ForeignTextStyle;
    MSImmutableForeignSymbol: ForeignSymbol;
    MSImmutableForeignSwatch: ForeignSwatch;
    MSImmutableForeignLayerStyle: ForeignLayerStyle;
    MSImmutableFlowConnection: FlowConnection;
    MSImmutableDocumentLibraryInfo: DocumentLibraryInfo;
    MSImmutableColorAsset: ColorAsset;
};
