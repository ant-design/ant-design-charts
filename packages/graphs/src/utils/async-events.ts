const EventMap = new Map();

export const pushAsyncEvent = (eventId: string, event: Function) => {
  let events = EventMap.get(eventId);
  if (!events) {
    events = [event];
  } else {
    events.push(event);
  }
  EventMap.set(eventId, events);
};

export const runAsyncEvent = (eventId: string) => {
  let events = EventMap.get(eventId) || [];
  events.forEach(function (event) {
    if (typeof event === 'function') event.apply(null, arguments);
  });
  EventMap.set(eventId, []);
};
