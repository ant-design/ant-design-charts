import SourceCode from 'dumi/theme/builtins/SourceCode';
import { type ComponentProps, type FC } from 'react';
import './index.less';
interface ISourceCodeEditorProps extends Omit<ComponentProps<typeof SourceCode>, 'children'> {
    initialValue: string;
    onTranspile?: (args: {
        err: Error;
        code?: null;
    } | {
        err?: null;
        code: string;
    }) => void;
    onChange?: (code: string) => void;
}
/**
 * simple source code editor based on textarea
 */
declare const SourceCodeEditor: FC<ISourceCodeEditorProps>;
export default SourceCodeEditor;
