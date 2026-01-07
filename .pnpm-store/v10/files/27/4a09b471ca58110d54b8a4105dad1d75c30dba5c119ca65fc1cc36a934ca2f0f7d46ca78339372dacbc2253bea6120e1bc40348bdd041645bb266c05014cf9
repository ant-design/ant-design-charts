const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

export default function sortObjectByKeyNameList(object, sortWith) {
  let keys, sortFn, key;

  if (typeof sortWith === 'function') {
    sortFn = sortWith;
  } else {
    keys = sortWith;
  }

  const total = {};
  const objectKeys = [...(keys ?? []), ...Object.keys(object).sort(sortFn)];

  for (key of objectKeys) {
    if (has(object, key)) {
      total[key] = object[key];
    }
  }

  return total;
}
