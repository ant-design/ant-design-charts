import { isObject } from '@antv/util';
import { inferDefaultValue } from '../../utils/animation';
import { groupByChangeType, reduceDataChanges } from '../../utils/change';
import { idOf } from '../../utils/id';
/**
 * <zh/> 对齐两个对象的字段。若目标对象缺少字段，则会添加默认值。
 *
 * <en/> Align the fields of two objects. If the target object lacks fields, default values will be added.
 * @param refObject - <zh/> 参考对象 ｜ <en/> Reference object
 * @param targetObject - <zh/> 目标对象 ｜ <en/> Target object
 */
export function alignFields(refObject, targetObject) {
    for (const key in refObject) {
        if (isObject(refObject[key]) && !Array.isArray(refObject[key]) && refObject[key] !== null) {
            if (!targetObject[key])
                targetObject[key] = {};
            alignFields(refObject[key], targetObject[key]);
        }
        else if (targetObject[key] === undefined) {
            targetObject[key] = inferDefaultValue(key);
        }
    }
}
/**
 * <zh/> 解析数据变更为历史记录命令
 *
 * <en/> Parse data changes into history commands
 * @param changes - <zh/> 数据变更 ｜ <en/> Data changes
 * @param animation - <zh/> 是否开启动画 ｜ <en/> Whether to enable animation
 * @param context - <zh/> 运行时上下文 ｜ <en/> Runtime context
 * @returns <zh/> 历史记录命令 ｜ <en/> History command
 */
export function parseCommand(changes, animation = false, context) {
    const cmd = {
        animation,
        current: { add: {}, update: {}, remove: {} },
        original: { add: {}, update: {}, remove: {} },
    };
    const { add, update, remove } = groupByChangeType(reduceDataChanges(changes));
    ['nodes', 'edges', 'combos'].forEach((category) => {
        if (update[category]) {
            update[category].forEach((item) => {
                var _a, _b;
                const newValue = Object.assign({}, item.value);
                let newOriginal = Object.assign({}, item.original);
                if (context) {
                    // 特殊处理：获取元素原始 color
                    const itemType = context.graph.getElementType(idOf(item.original));
                    const colorKey = itemType === 'edge' ? 'stroke' : 'fill';
                    const style = context.element.getElementComputedStyle(itemType, item.original);
                    newOriginal = Object.assign(Object.assign({}, item.original), { style: Object.assign({ [colorKey]: style[colorKey] }, item.original.style) });
                }
                alignFields(newValue, newOriginal);
                (_a = cmd.current.update)[category] || (_a[category] = []);
                cmd.current.update[category].push(newValue);
                (_b = cmd.original.update)[category] || (_b[category] = []);
                cmd.original.update[category].push(newOriginal);
            });
        }
        if (add[category]) {
            add[category].forEach((item) => {
                var _a, _b;
                const newValue = Object.assign({}, item.value);
                (_a = cmd.current.add)[category] || (_a[category] = []);
                cmd.current.add[category].push(newValue);
                (_b = cmd.original.remove)[category] || (_b[category] = []);
                cmd.original.remove[category].push(newValue);
            });
        }
        if (remove[category]) {
            remove[category].forEach((item) => {
                var _a, _b;
                const newValue = Object.assign({}, item.value);
                (_a = cmd.current.remove)[category] || (_a[category] = []);
                cmd.current.remove[category].push(newValue);
                (_b = cmd.original.add)[category] || (_b[category] = []);
                cmd.original.add[category].push(newValue);
            });
        }
    });
    return cmd;
}
//# sourceMappingURL=util.js.map