jest.spyOn(console, 'warn').mockReturnValue();
// jest.spyOn(console, 'log').mockReturnValue();
Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(global, 'IS_REACT_ACT_ENVIRONMENT', {
  value: true,
});

class Worker {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => {};
  }

  postMessage(msg) {
    this.onmessage(msg);
  }
}
window.Worker = Worker;
