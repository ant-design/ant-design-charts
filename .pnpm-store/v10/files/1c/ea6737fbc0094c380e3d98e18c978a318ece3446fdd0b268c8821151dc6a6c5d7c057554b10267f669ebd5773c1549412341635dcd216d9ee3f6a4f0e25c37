const filterOutLinks = (k, v) => {
    if (k !== 'next' && k !== 'prev') {
        return v;
    }
};
const unlink = (entry) => {
    entry.prev.next = entry.next;
    entry.next.prev = entry.prev;
    delete entry.next;
    delete entry.prev;
};
export default class List {
    constructor() {
        const shortcut = {};
        shortcut.prev = shortcut;
        shortcut.next = shortcut.prev;
        this.shortcut = shortcut;
    }
    dequeue() {
        const shortcut = this.shortcut;
        const entry = shortcut.prev;
        if (entry && entry !== shortcut) {
            unlink(entry);
            return entry;
        }
    }
    enqueue(entry) {
        const shortcut = this.shortcut;
        if (entry.prev && entry.next) {
            unlink(entry);
        }
        entry.next = shortcut.next;
        shortcut.next.prev = entry;
        shortcut.next = entry;
        entry.prev = shortcut;
    }
    toString() {
        const strs = [];
        const sentinel = this.shortcut;
        let curr = sentinel.prev;
        while (curr !== sentinel) {
            strs.push(JSON.stringify(curr, filterOutLinks));
            curr = curr === null || curr === void 0 ? void 0 : curr.prev;
        }
        return `[${strs.join(', ')}]`;
    }
}
//# sourceMappingURL=list.js.map