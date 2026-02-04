import type { IDumiTechStack } from "../types";
export default class ReactTechStack implements IDumiTechStack {
    name: string;
    runtimeOpts?: IDumiTechStack['runtimeOpts'];
    isSupported(...[, lang]: Parameters<IDumiTechStack['isSupported']>): boolean;
    transformCode(...[raw, opts]: Parameters<IDumiTechStack['transformCode']>): string;
}
