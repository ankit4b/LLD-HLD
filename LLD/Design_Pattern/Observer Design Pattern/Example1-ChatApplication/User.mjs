export default class User {
  constructor(name) {
    this.name = name;
  }

  receivedMessage(message) {
    console.log(`${this.name} received : ${message}`);
  }
}
