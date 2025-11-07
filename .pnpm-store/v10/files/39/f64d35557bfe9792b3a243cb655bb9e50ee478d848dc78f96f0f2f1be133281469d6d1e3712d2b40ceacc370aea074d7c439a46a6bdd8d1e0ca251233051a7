import { BaseAtomAssetsParser, IAtomAssetsParserResult, ILanguageMetaParser, IPatchFile } from './BaseParser';
interface ParserParams {
    entryFile: string;
    resolveDir: string;
    resolveFilter?: ReactMetaParser['resolveFilter'];
    unpkgHost?: string;
    parseOptions?: object;
}
declare class ReactMetaParser implements ILanguageMetaParser {
    private parser;
    private resolveFilter;
    private unresolvedFiles;
    constructor(opts: ParserParams);
    parse(): Promise<IAtomAssetsParserResult>;
    destroy(): Promise<void>;
    patch(file: IPatchFile): void;
}
declare class ReactAtomAssetsParser extends BaseAtomAssetsParser<ReactMetaParser> {
    constructor(opts: ParserParams);
}
export default ReactAtomAssetsParser;
