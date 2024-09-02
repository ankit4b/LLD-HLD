import personProxy from "./person.mjs";

// GET
personProxy.name; // The value of name is John Doe
personProxy.email; // The value of email is john@doe.com

// SET
personProxy.name = "Ankit";
personProxy.email = "ankit4b@gmail.com";

// GET
personProxy.name; // The value of name is Ankit
personProxy.email; // The value of email is ankit4b@gmail.com

// VALIDATION CHECK

personProxy.country = "USA";
// Error: Person outside India is restricted for this access

personProxy.email = "ankit.gamil";
// Error: Please enter a valid email

personProxy.name = "AS";
// Error: Please use a longer username.

personProxy.age = "Fifteen";
// Error: Please provide a valid age.

personProxy.age = 15;
// User cannot be younger than 18.
