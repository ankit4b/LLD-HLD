import Logger from "./Logger.mjs";

const logger = new Logger();

export default function execeuteFile2() {
  console.log("Start Count : ", logger.logCount());
  logger.log("First message");
  logger.log("Second message");
  console.log("End Count : ", logger.logCount());
}
