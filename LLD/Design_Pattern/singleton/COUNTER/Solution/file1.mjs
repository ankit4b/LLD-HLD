import singletonCounter from "./counter.mjs";
// import singletonCounter from "./counterObject.mjs";

export default function execeuteFile1() {
  console.log("=> ", singletonCounter.getCount());
  singletonCounter.increment();
  singletonCounter.increment();
  singletonCounter.increment();
  console.log("Count : ", singletonCounter.getCount());
  singletonCounter.decrement();
  console.log("Count : ", singletonCounter.getCount());
}
