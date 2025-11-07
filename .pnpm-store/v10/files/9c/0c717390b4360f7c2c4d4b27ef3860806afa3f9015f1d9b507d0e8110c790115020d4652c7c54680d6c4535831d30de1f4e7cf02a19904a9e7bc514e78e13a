import { CustomElement, Group } from '@antv/g';
import { Layout } from '@antv/component';
import { FlexLayout, GuideComponentComponent, GuideComponentOrientation, GuideComponentPosition, Scale } from '../runtime';
import { G2Element, Selection } from '../utils/selection';
type Descriptor<T> = {
    render?: (attributes: T, container: CustomElement<T>) => void;
};
export declare function createComponent<T>(descriptor: Descriptor<T>): any;
export declare function maybeAppend<T>(parent: Group, selector: string, node: string | ((data: T, i: number) => G2Element)): Selection<T>;
export declare function titleContent(field: string | string[]): string;
export declare function inferComponentLayout(position: GuideComponentPosition, userDefinitions?: FlexLayout): {
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    display: string;
};
export declare class G2Layout extends Layout {
    get child(): any;
    update(options: any): void;
}
export declare class LegendCategoryLayout extends G2Layout {
    update(options: any): void;
}
export declare function scaleOf(scales: Scale[], type: string): Scale | undefined;
export declare function isHorizontal(orientation: GuideComponentOrientation): boolean;
export declare function isVertical(orientation: GuideComponentOrientation): boolean;
export declare function inferComponentShape(value: Record<string, any>, options: Record<string, any>, component: GuideComponentComponent): {
    readonly orientation: "horizontal" | "vertical";
    readonly width: any;
    readonly height: any;
    readonly size: any;
    readonly length: any;
};
export declare function domainOf(scales: Scale[]): any[];
export declare function adaptor<T>(style: T): any;
export {};
