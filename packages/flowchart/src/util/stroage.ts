export class Storage {
  private container: Map<string, any>;
  constructor() {
    this.container = new Map();
  }
  setItem(name: string, value) {
    this.container.set(name, value);
    window.localStorage.setItem(name, JSON.stringify(value));
  }

  hasItem(name: string): boolean {
    return this.container.has(name) || !!window.localStorage.getItem(name);
  }

  removeItem(name: string) {
    this.container.delete(name);
    window.localStorage.removeItem(name);
  }

  getItem(name: string) {
    if (this.container.has(name)) return this.container.get(name);
    if (window.localStorage.getItem(name)) {
      const value = JSON.parse(window.localStorage.getItem(name));
      this.container.set(name, value);
      return value;
    }
  }
}

const storage = new Storage();
export default storage;
