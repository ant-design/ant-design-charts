function internGet({ map, initKey }, value) {
  const key = initKey(value);
  return map.has(key) ? map.get(key) : value;
}

function internSet({ map, initKey }, value) {
  const key = initKey(value);
  if (map.has(key)) return map.get(key);
  map.set(key, value);
  return value;
}

function internDelete({ map, initKey }, value) {
  const key = initKey(value);
  if (map.has(key)) {
    value = map.get(key);
    map.delete(key);
  }
  return value;
}

function keyof(value) {
  return typeof value === 'object' ? value.valueOf() : value;
}

/**
 * @see 参考 https://github.com/mbostock/internmap/blob/main/src/index.js
 */
export class InternMap<K, V> extends Map {
  private map = new Map<K, V>();

  private initKey = keyof;

  constructor(entries) {
    super();
    if (entries !== null) {
      for (const [key, value] of entries) {
        this.set(key, value);
      }
    }
  }

  get(key: K) {
    return super.get(internGet({ map: this.map, initKey: this.initKey }, key));
  }

  has(key: K) {
    return super.has(internGet({ map: this.map, initKey: this.initKey }, key));
  }

  set(key: K, value: V) {
    return super.set(internSet({ map: this.map, initKey: this.initKey }, key), value);
  }

  delete(key: K) {
    return super.delete(internDelete({ map: this.map, initKey: this.initKey }, key));
  }
}
