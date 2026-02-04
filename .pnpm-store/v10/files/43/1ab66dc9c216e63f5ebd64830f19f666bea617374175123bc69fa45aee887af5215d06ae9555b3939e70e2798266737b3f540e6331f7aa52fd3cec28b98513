import type { DisplayObject } from '../display-objects/DisplayObject';
import { Point } from '../shapes/Point';
import { FederatedEvent } from './FederatedEvent';
export declare class FederatedMouseEvent extends FederatedEvent<MouseEvent | PointerEvent | TouchEvent> implements MouseEvent {
    /** Whether the "alt" key was pressed when this mouse event occurred. */
    altKey: boolean;
    /** The specific button that was pressed in this mouse event. */
    button: number;
    /** The button depressed when this event occurred. */
    buttons: number;
    /** Whether the "control" key was pressed when this mouse event occurred. */
    ctrlKey: boolean;
    /** Whether the "meta" key was pressed when this mouse event occurred. */
    metaKey: boolean;
    /** This is currently not implemented in the Federated Events API. */
    relatedTarget: DisplayObject | null;
    /** Whether the "shift" key was pressed when this mouse event occurred. */
    shiftKey: boolean;
    /**
     * The coordinates of the mouse event relative to the canvas.
     */
    client: Point;
    get clientX(): number;
    get clientY(): number;
    /**
     * The movement in this pointer relative to the last `mousemove` event.
     */
    movement: Point;
    get movementX(): number;
    get movementY(): number;
    /**
     * The offset of the pointer coordinates w.r.t. target DisplayObject in world space. This is
     * not supported at the moment.
     */
    offset: Point;
    get offsetX(): number;
    get offsetY(): number;
    /**
     * The pointer coordinates in world space.
     */
    global: Point;
    get globalX(): number;
    get globalY(): number;
    /**
     * The pointer coordinates in sceen space.
     */
    screen: Point;
    get screenX(): number;
    get screenY(): number;
    getModifierState(key: string): boolean;
    initMouseEvent(): void;
}
//# sourceMappingURL=FederatedMouseEvent.d.ts.map