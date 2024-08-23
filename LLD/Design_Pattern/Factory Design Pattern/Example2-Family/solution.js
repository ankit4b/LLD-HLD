/**
 * Here we create a personFactory function which is responsible to create object. So whether we need to creat 10 or 100s number of object we can directly create the object without repeating the code.
 */

function personFactory(name) {
  return {
    say() {
      return `Hi, I am ${name}`;
    },
  };
}

const me = personFactory("Ankit");
const akankshya = personFactory("Akankshya");

console.log(me.say());
// Hi, I am Ankit
console.log(akankshya.say());
// Hi, I am Akankshya

/**
 * Now we name change "name" property as it is not exposed to public now. Here it's using laxical scope for "name" property.
 */
me.name = "Nipun";
console.log(me.say());
// Hi, I am Ankit
