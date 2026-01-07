import { FederatedEvent } from './FederatedEvent';
/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
 * @link https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
 *
 * @example
  const event = new CustomEvent('build', { detail: { prop1: 'xx' } });
  circle.addEventListener('build', (e) => {
    e.target; // circle
    e.detail; // { prop1: 'xx' }
  });

  circle.dispatchEvent(event);
 */
export declare class CustomEvent<O extends {
    detail?: any;
    [key: string | number]: any;
} = any> extends FederatedEvent<Event, O['detail']> {
    constructor(eventName: string, options?: O);
}
//# sourceMappingURL=CustomEvent.d.ts.map