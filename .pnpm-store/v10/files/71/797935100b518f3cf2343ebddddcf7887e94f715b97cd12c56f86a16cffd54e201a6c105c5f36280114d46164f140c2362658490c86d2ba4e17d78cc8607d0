/**
 * Create DOM from a html string.
 * @param str
 * @returns
 */
export function createDOM(str) {
    var container = document.createElement('div');
    container.innerHTML = str;
    var dom = container.childNodes[0];
    if (dom && container.contains(dom)) {
        container.removeChild(dom);
    }
    return dom;
}
//# sourceMappingURL=create-dom.js.map