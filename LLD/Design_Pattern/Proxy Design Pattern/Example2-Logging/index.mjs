import logs from "./logs.mjs";

console.log("-------------------------------");
console.log(logs.history);
console.log("-------------------------------");

let newLog = { version: "1.0.0", app: "WhatsApp" };
logs.history = [...logs.history, newLog];

// newLog = { version: "2.1", app: "Facebook" };
// logs.history = [...logs.history, newLog];

/**
 * OUTPUT: as version is splited into 2 section only so it'll not add to the history
 */

newLog = { version: "1.1.0", app: "WhatsApp" };
logs.history = [...logs.history, newLog];

console.log("-------------------------------");
console.log(logs.history);
console.log("-------------------------------");

/* OUTPUT:-
-------------------------------
-> get : history
[]
-------------------------------
-> get : history
-> set : history
-> get : history
-> set : history
-------------------------------
-> get : history
[
  { version: '1.0.0', app: 'WhatsApp' },
  { version: '1.1.0', app: 'WhatsApp' }
]
*/
