/**
 * k-v 存储
 */
export default class <T> {
  map: { [key: string]: T } = {};

  has(key: string): boolean {
    return this.map[key] !== undefined;
  }

  get(key: string, def?: T): T | undefined {
    const v = this.map[key];
    return v === undefined ? def : v;
  }

  set(key: string, value: T): void {
    this.map[key] = value;
  }

  clear() {
    this.map = {};
  }

  delete(key: string) {
    delete this.map[key];
  }

  size(): number {
    return Object.keys(this.map).length;
  }
}
