export type TCoords = [number | null | undefined, number | null | undefined];
export interface IUserOptions {
    cancelOnUserAction?: boolean;
    easing?: (t: number) => number;
    elementToScroll?: Element | Window;
    horizontalOffset?: number;
    maxDuration?: number;
    minDuration?: number;
    speed?: number;
    verticalOffset?: number;
}
export interface IOptions {
    cancelOnUserAction: boolean;
    easing: (t: number) => number;
    elementToScroll: Element | Window | null;
    horizontalOffset: number;
    maxDuration: number;
    minDuration: number;
    speed: number;
    verticalOffset: number;
}
declare function animateScrollTo(y: number, userOptions?: IUserOptions): Promise<boolean>;
declare function animateScrollTo(coords: TCoords, userOptions?: IUserOptions): Promise<boolean>;
declare function animateScrollTo(scrollToElement: Element, userOptions?: IUserOptions): Promise<boolean>;
export default animateScrollTo;
