import User from "./User.mjs";
import ChatRoom from "./ChatRoom.mjs";

// Create chat room (Subject)
const chatRoom = new ChatRoom();

// Create users (Observer)
const user1 = new User("Abhisekk");
const user2 = new User("Meena");
const user3 = new User("Charlie");

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

chatRoom.sendMessage("Hello Everyone!");

console.log("--------------");

chatRoom.removeUser(user2);
chatRoom.sendMessage("Good night");

/* OUTPUT:
Abhisekk received : Hello Everyone!
Meena received : Hello Everyone!
Charlie received : Hello Everyone!
--------------
Abhisekk received : Good night
Charlie received : Good night
 */
