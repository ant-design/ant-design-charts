import { flow } from '../../utils/flow';
import { columnWidthRatio } from './style';
import { axisBreaks } from './axis-breaks';
export function preprocessOption(options) {
    const convertedOptions = adapter(options);
    // If there are children, recursively convert each child node.
    if (convertedOptions.children && Array.isArray(convertedOptions.children)) {
        convertedOptions.children = convertedOptions.children.map((child) => preprocessOption(child));
    }
    return convertedOptions;
}
// Entry point for all syntactic sugar functions.
function adapter(options) {
    //@todo define a type for params of flow
    return flow(columnWidthRatio, axisBreaks)(options);
}
//# sourceMappingURL=index.js.map