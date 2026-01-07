import { dependency } from "./dependency";
import { divider } from "./divider";
import { field } from "./field";
import { formList } from "./formList";
import { formSet } from "./formSet";
import { group } from "./group";
import { ignore } from "./ignore";

// 按照数组顺序执行
var tasks = [ignore, group, formList, formSet, divider, dependency];
export var renderValueType = function renderValueType(item, helpers) {
  for (var cur = 0; cur < tasks.length; cur++) {
    var task = tasks[cur];
    var dom = task(item, helpers);

    // False 不再遍历
    // if (dom === false) {
    //   return false;
    if (dom === true) {
      // True 继续下一次
      continue;
    } else {
      // Other Is Dom
      return dom;
    }
  }

  // 最后执行
  return field(item, helpers);
};