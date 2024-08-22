let instance;

class Logger {
  constructor() {
    console.log("====>>> ", Logger.instance);
    if (instance) {
      throw new Error("You are not allowed to new more than one instance");
    }
    this.logs = [];
    instance = this;
  }

  log(message) {
    this.logs.push(message);
  }

  logCount() {
    return this.logs.length;
  }
}

const logger = new Logger();

export default logger;
