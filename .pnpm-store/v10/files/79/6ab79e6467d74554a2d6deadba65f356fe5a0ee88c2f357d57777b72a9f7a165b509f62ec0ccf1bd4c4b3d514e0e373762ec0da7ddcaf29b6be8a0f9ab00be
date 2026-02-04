"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixArc = fixArc;
function fixArc(pathArray, allPathCommands, i) {
    if (pathArray[i].length > 7) {
        pathArray[i].shift();
        var pi = pathArray[i];
        // const ni = i + 1;
        var ni = i;
        while (pi.length) {
            // if created multiple C:s, their original seg is saved
            allPathCommands[i] = 'A';
            // @ts-ignore
            pathArray.splice((ni += 1), 0, ['C'].concat(pi.splice(0, 6)));
        }
        pathArray.splice(i, 1);
    }
}
//# sourceMappingURL=fix-arc.js.map