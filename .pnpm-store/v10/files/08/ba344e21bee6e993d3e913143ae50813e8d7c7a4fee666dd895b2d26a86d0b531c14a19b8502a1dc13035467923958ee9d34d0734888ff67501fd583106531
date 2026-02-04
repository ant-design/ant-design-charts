import { distance } from './vector';
/**
 * Get WordWrapWidth for a text according the the length of the label and 'maxWidth'.
 * @param length  - length
 * @param maxWidth - maxWidth
 * @returns wordWrapWidth
 */
export function getWordWrapWidthWithBase(length, maxWidth) {
    let wordWrapWidth = 2 * length;
    if (typeof maxWidth === 'string') {
        wordWrapWidth = (length * Number(maxWidth.replace('%', ''))) / 100;
    }
    else if (typeof maxWidth === 'number') {
        wordWrapWidth = maxWidth;
    }
    if (isNaN(wordWrapWidth))
        wordWrapWidth = 2 * length;
    return wordWrapWidth;
}
/**
 * Get the proper wordWrapWidth for a labelShape according the the 'maxWidth' of keyShape.
 * @param keyShapeBox - keyShapeBox
 * @param maxWidth - maxWidth
 * @param zoom - zoom
 * @param enableBalanceShape - enableBalanceShape
 * @returns Get WordWrapWidth by bbox
 */
export function getWordWrapWidthByBox(keyShapeBox, maxWidth, zoom = 1, enableBalanceShape = false) {
    const balanceZoom = enableBalanceShape ? zoom : 1;
    const keyShapeWidth = (keyShapeBox.max[0] - keyShapeBox.min[0]) * balanceZoom;
    return getWordWrapWidthWithBase(keyShapeWidth, maxWidth);
}
/**
 * Get the proper wordWrapWidth for a labelShape according the the distance between two end points and 'maxWidth'.
 * @param points - points
 * @param maxWidth - maxWidth
 * @param zoom - zoom
 * @returns - wordWrapWidth for text
 */
export function getWordWrapWidthByEnds(points, maxWidth, zoom = 1) {
    const dist = distance(points[0], points[1]) * zoom;
    return getWordWrapWidthWithBase(dist, maxWidth);
}
//# sourceMappingURL=text.js.map