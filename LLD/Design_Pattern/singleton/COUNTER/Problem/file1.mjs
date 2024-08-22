import Counter from "./counter.mjs";

const singletonCounter = new Counter();

export default function execeuteFile1() {
  console.log("=> ", singletonCounter.getCount());
  singletonCounter.increment();
  singletonCounter.increment();
  singletonCounter.increment();
  console.log("Count : ", singletonCounter.getCount());
  singletonCounter.decrement();
  console.log("Count : ", singletonCounter.getCount());
}
