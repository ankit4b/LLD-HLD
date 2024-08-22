import logger from "./Logger.mjs";

export default function execeuteFile1() {
  console.log("Start Count : ", logger.logCount());
  logger.log("First message");
  logger.log("Second message");
  console.log("End Count : ", logger.logCount());
}
