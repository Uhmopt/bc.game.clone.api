const { DELAY_BETWEEN_ROUND } = require("../config/appConfig");
const log = require("../utils/log");

module.exports = function socketServer() {

    log('new round')

  setTimeout(socketServer, DELAY_BETWEEN_ROUND);
};
