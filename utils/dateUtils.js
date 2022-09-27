const moment = require("moment/moment");

module.exports = {
  nowDateTimeString: function () {
    return moment().format("YYYY-MM-DD HH:mm:ss");
  },
};
