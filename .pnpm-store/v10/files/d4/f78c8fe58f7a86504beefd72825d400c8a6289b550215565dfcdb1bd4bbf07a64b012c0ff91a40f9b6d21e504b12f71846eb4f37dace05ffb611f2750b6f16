import type { IApi } from "../../types";
export declare const getLoadHook: (api: IApi) => (filePath: string) => Promise<{
    content: Buffer | null;
    type: "css" | "js" | "jsx";
} | {
    content: string;
    type: string;
} | undefined>;
