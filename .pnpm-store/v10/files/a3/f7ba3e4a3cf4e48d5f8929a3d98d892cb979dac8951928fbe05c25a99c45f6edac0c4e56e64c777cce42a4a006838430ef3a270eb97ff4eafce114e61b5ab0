import { VM } from './vm';
export declare class Connection {
    element: HTMLIFrameElement;
    id: string;
    pending: Promise<VM>;
    vm?: VM;
    constructor(element: HTMLIFrameElement);
}
export declare const getConnection: (identifier: string | HTMLIFrameElement) => Connection | null;
