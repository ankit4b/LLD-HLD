export default class ChatRoom {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    this.users = this.users.filter((usr) => usr !== user);
  }

  sendMessage(message) {
    this.users.forEach((user) => user.receivedMessage(message));
  }
}
