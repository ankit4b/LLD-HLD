class Counter {
  constructor() {
    if (Counter.instance) {
      return Counter.instance;
    }
    this.counter = 0;
    Counter.instance = this;
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
