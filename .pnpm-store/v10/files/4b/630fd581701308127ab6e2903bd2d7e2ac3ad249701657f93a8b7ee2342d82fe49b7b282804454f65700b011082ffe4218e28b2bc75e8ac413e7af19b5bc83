interface EventType {
    readonly callback: Function;
    readonly once: boolean;
}
export default class EventEmitter {
    private _events;
    /**
     * 监听一个事件
     * @param evt
     * @param callback
     * @param once
     */
    on(evt: string, callback: Function, once?: boolean): this;
    /**
     * 监听一个事件一次
     * @param evt
     * @param callback
     */
    once(evt: string, callback: Function): this;
    /**
     * 触发一个事件
     * @param evt
     * @param args
     */
    emit(evt: string, ...args: any[]): void;
    /**
     * 取消监听一个事件，或者一个channel
     * @param evt
     * @param callback
     */
    off(evt?: string, callback?: Function): this;
    getEvents(): Record<string, EventType[]>;
}
export {};
