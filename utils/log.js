const { nowDateTimeString } = require("./dateUtils");

module.exports = function log(...params) {
  console.log(`[${nowDateTimeString()}] `, ...params);
};
