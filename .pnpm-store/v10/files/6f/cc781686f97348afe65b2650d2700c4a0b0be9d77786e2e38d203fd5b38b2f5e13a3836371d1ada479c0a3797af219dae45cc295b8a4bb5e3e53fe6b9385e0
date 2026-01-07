import type { UserOptions } from '@module-federation/runtime/types';
interface ExtendedOptions extends UserOptions {
    exposes: {
        [key: string]: () => Promise<() => any>;
    };
}
export declare const createContainer: (federationOptions: ExtendedOptions) => any;
export declare const createContainerAsync: (federationOptions: ExtendedOptions) => Promise<any>;
export {};
