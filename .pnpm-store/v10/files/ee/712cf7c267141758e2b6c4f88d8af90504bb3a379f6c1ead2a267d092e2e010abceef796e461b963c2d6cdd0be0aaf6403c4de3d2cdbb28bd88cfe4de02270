import { IApi } from '../../types';
export interface IOnDemandInstallDep {
    name: string;
    version: string;
    reason?: string;
    /**
     * install dev dep by default
     * @default true
     */
    dev?: boolean;
}
declare const _default: (api: IApi) => void;
export default _default;
export declare function addDeps(opts: {
    pkgPath: string;
    deps: IOnDemandInstallDep[];
}): void;
