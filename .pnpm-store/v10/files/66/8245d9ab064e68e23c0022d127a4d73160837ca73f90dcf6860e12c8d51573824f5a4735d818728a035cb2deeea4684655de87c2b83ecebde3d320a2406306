import { Camera } from './camera';
import type { LayoutRegistry } from './css';
import type { CSSProperty } from './css/CSSProperty';
import { DefaultStyleValueRegistry } from './css/StyleValueRegistry';
import { PropertySyntax } from './css/interfaces';
import type { GeometryAABBUpdater, SceneGraphSelector, SceneGraphService } from './services';
import { OffscreenCanvasCreator, TextService } from './services';
import { CanvasLike, Shape } from './types';
export declare const runtime: GlobalRuntime;
export interface GlobalRuntime {
    CameraContribution: new () => Camera;
    AnimationTimeline: any;
    EasingFunction: (...args: any[]) => (t: number) => number;
    offscreenCanvasCreator: OffscreenCanvasCreator;
    offscreenCanvas: CanvasLike;
    sceneGraphSelector: SceneGraphSelector;
    sceneGraphService: SceneGraphService;
    textService: TextService;
    geometryUpdaterFactory: Record<Shape, GeometryAABBUpdater<any>>;
    styleValueRegistry: DefaultStyleValueRegistry;
    layoutRegistry: LayoutRegistry;
    CSSPropertySyntaxFactory: Record<PropertySyntax, Partial<CSSProperty<any, any>>>;
    globalThis: any;
    /**
     * circle.style.r = 100;
     */
    enableStyleSyntax: boolean;
    enableSizeAttenuation: boolean;
}
//# sourceMappingURL=global-runtime.d.ts.map