class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  trigger(eventName, ...args) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach((cb) => {
        cb(...args);
      });
    }
  }
}

const ee = new EventEmitter();

ee.on("change", () => {
  console.log(change);
});

ee.trigger("change");
