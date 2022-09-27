const log = require("./log");

module.exports = {
  delayMs: async function (delay = 1000) {
    log("Delay for(ms): ", delay);
    return await new Promise((resolve, reject) => {
      setTimeout(resolve, delay);
    });
  },
};
