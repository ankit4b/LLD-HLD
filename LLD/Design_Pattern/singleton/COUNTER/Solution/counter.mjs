let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can create only one instance!");
    }
    this.counter = 0;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

const singletonCounter = new Counter();

export default singletonCounter;
// module.exports = singletonCounter;
