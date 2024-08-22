export default class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
  }

  logCount() {
    return this.logs.length;
  }
}
