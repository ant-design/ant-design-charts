import { FederatedMouseEvent } from './FederatedMouseEvent';
export declare class FederatedPointerEvent extends FederatedMouseEvent implements PointerEvent {
    /**
     * The unique identifier of the pointer.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
     */
    pointerId: number;
    /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     */
    width: number;
    /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     */
    height: number;
    /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     */
    isPrimary: boolean;
    /**
     * The type of pointer that triggered the event.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
     */
    pointerType: string;
    /**
     * Pressure applied by the pointing device during the event.
     *s
     * A Touch's force property will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
     */
    pressure: number;
    /**
     * Barrel pressure on a stylus pointer.
     *
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     */
    tangentialPressure: number;
    /**
     * The angle, in degrees, between the pointer device and the screen.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
     */
    tiltX: number;
    /**
     * The angle, in degrees, between the pointer device and the screen.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
     */
    tiltY: number;
    /**
     * Twist of a stylus pointer.
     *
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     */
    twist: number;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents
     */
    getCoalescedEvents(): PointerEvent[];
    /**
     * @see https://chromestatus.com/feature/5765569655603200
     */
    getPredictedEvents(): PointerEvent[];
    /**
     * @see https://github.com/antvis/G/issues/1115
     * We currently reuses event objects in the event system,
     * avoiding the creation of a large number of event objects.
     * Reused objects are only used to carry different data,
     * such as coordinate information, native event objects,
     * and therefore the lifecycle is limited to the event handler,
     * which can lead to unintended consequences if an attempt is made to cache the entire event object.
     *
     * Therefore, while keeping the above performance considerations in mind, it is possible to provide a clone method that creates a new object when the user really wants to cache it, e.g.
     */
    clone(): FederatedPointerEvent;
}
//# sourceMappingURL=FederatedPointerEvent.d.ts.map