const { DELAY_BETWEEN_ROUND } = require("../config/appConfig");
const { delayMs } = require("../utils/asyncUtils");
const log = require("../utils/log");
const { NEW_ROUND, FINISH_ROUND } = require("./events");
const {
  calcSecretNumber,
  secretNumber2time,
} = require("./socketServerHelpers");

module.exports = async function socketServer(io) {
  const secretNumber = calcSecretNumber();
  const timeToFinish = secretNumber2time(secretNumber);
  log("secret number => ", secretNumber);

  //   emit new round
  io.emit(NEW_ROUND);

  //   delay for
  await delayMs(timeToFinish);

  //   emit new round
  io.emit(FINISH_ROUND, { secretNumber: secretNumber });

  setTimeout(() => socketServer(io), DELAY_BETWEEN_ROUND);
};
