class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
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
