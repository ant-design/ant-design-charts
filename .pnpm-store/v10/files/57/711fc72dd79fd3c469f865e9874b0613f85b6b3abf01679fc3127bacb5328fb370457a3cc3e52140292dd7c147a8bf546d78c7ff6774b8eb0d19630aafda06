declare type FetchBase64 = (url: string) => Promise<string>;
interface Config {
    fetchBase64?: FetchBase64;
}
declare global {
    interface Window {
        HTML2SKETCH_FETCH_BASE64: (url: string) => Promise<string>;
    }
}
/**
 * 进行全局配置
 */
export declare const setConfig: (config: Config) => void;
export {};
