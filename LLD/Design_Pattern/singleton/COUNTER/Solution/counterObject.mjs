let counter = 0;

const counterObject = {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
};

const singletonCounter = Object.freeze(counterObject);

export default singletonCounter;
