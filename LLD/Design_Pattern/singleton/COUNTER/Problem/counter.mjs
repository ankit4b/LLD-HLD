export default class Counter {
  constructor() {
    console.log("inside problem constructor");
    this.counter = 0;
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
