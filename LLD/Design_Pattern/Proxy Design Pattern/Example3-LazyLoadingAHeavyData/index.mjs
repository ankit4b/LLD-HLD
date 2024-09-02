let heavyDataSet = new Proxy(
  {},
  {
    get(target, property) {
      if (!target[property]) {
        console.log(`Loading ${property}`);
        target[property] = loadHeavyData(property); // Assume loadHeavyData is a heavy operation
      }
      return target[property];
    },
  }
);

function loadHeavyData(key) {
  // Load data logic
  return `Data for ${key}`;
}

console.log(heavyDataSet.user);
// Logs: Loading user
// Logs: Data for user

console.log(heavyDataSet.cart);
// Logs: Loading cart
// Logs: Data for cart

console.log(heavyDataSet.purchaseHistory);
// Logs: Loading purchaseHistory
// Logs: Data for purchaseHistory
