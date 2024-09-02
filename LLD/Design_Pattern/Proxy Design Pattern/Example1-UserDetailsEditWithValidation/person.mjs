const person = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "India",
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`The value of ${prop} is ${target[prop]}`);
    return target[prop];
  },
  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);

    if (prop === "name") {
      if (value.length < 3) {
        throw new Error("Please use a longer username.");
      }
    }
    if (prop === "age") {
      if (typeof value !== "number") {
        throw new Error("Please provide a valid age.");
      }

      if (value < 18) {
        throw "User cannot be younger than 18.";
      }
    }
    if (prop === "country" && value !== "India") {
      throw new Error("Person outside India is restricted for this access");
    }
    if (prop === "email" && !validateEmail(value)) {
      throw new Error("Please enter a valid email");
    }
    target[prop] = value;
    return true;
  },
});

export default personProxy;

function validateEmail(email) {
  // Define a regular expression for validating email addresses
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the regular expression
  return emailPattern.test(email);
}
