# Proxy Pattern - [ Structural design pattern ]

- is a structural design pattern that provides a substitute or placeholder for another object. A proxy controls access to the original object, allowing specific actions to be performed before or after a request reaches the original object.

- A proxy acts as an intermediary for another object, adding a layer of control over its access. It intercepts and controls interactions with the target object, providing greater control over operations such as getting or setting values.

- (Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you’ll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we’ll interact with the Proxy object.)

## Use-cases :

1. **Logging:** involves tracking and recording interactions with an object, such as when properties are accessed or modified. -For debugging, monitoring

2. **Access Control:** to restrict or grant access to specific properties or methods of an object. -Enhances the security and encapsulation of your code.

3. **Lazy Loading:** can defer the loading of expensive resources (like images or data) until they are actually needed. -Improve application performance by reducing initial load times.

4. **Caching:** involves storing computed results so that redundant calculations or expensive operations can be avoided. - enhances perfermance

5. **Validation:** can be used to validate input data, ensuring that only valid data is stored in an object. -maintain data integrity and prevent incorrect or malicious data from being introduced.

## Basic structure

```
let target = {};
let proxy = new Proxy(target, {
  // handler methods
});
```

## Sample example:

```
const person = {
  name: "John",
  age: 30
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  },
});


personProxy.name;
// Outputs: "The value of name is John"
```
