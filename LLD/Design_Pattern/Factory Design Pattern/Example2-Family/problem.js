/**
 * Here we are repeating the same object creation code multiple times. So here it has code duplicasy.
 * If we have a requirement of creating 100 object, we have to repeat the same code for 100 times, which is not ideal.
 */

const me = {
  name: "Ankit",
  say() {
    return `Hi, I am ${this.name}`;
  },
};

const akankshya = {
  name: "Akankshya",
  say() {
    return `Hi, I am ${this.name}`;
  },
};

console.log(me.say());
// Hi, I am Ankit
console.log(akankshya.say());
// Hi, I am Akankshya

/**
 * Here the name property is exposed to public and available to override, which is completely incorrect. which tends to lots of bug.
 */
me.name = "Nipun";
console.log(me.say());
// Hi, I am Nipun
