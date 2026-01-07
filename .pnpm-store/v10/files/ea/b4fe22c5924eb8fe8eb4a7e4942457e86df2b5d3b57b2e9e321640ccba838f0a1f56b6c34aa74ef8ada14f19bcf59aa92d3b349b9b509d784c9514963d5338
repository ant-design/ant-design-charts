/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export class HoverRangeAnchor {
    constructor(priority, range) {
        this.priority = priority;
        this.range = range;
        this.type = 1 /* Range */;
    }
    equals(other) {
        return (other.type === 1 /* Range */ && this.range.equalsRange(other.range));
    }
    canAdoptVisibleHover(lastAnchor, showAtPosition) {
        return (lastAnchor.type === 1 /* Range */ && showAtPosition.lineNumber === this.range.startLineNumber);
    }
}
export class HoverForeignElementAnchor {
    constructor(priority, owner, range) {
        this.priority = priority;
        this.owner = owner;
        this.range = range;
        this.type = 2 /* ForeignElement */;
    }
    equals(other) {
        return (other.type === 2 /* ForeignElement */ && this.owner === other.owner);
    }
    canAdoptVisibleHover(lastAnchor, showAtPosition) {
        return (lastAnchor.type === 2 /* ForeignElement */ && this.owner === lastAnchor.owner);
    }
}
