import { traverse } from './traverse';
export function show(element) {
    visibility(element, true);
}
export function hide(element) {
    visibility(element, false);
}
export function visibility(element, visible) {
    var value = visible ? 'visible' : 'hidden';
    traverse(element, function (node) {
        node.attr('visibility', value);
    });
}
//# sourceMappingURL=visibility.js.map