const { randomNumber } = require("../utils/mathUtils");

const NUMBER_2_TIME = 2;

module.exports = {
  calcSecretNumber: function () {
    return randomNumber(1000) / 100;
  },

  secretNumber2time: function (secretNumber = 0) {
    return secretNumber * 1000 * NUMBER_2_TIME;
  },
};
