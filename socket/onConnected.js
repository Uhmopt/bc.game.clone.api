const log = require("../utils/log");

module.exports = function onConnected(socket) {
  log("a user connected");
};
