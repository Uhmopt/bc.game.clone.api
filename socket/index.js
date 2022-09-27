const onConnected = require("./onConnected");

module.exports = function handleSocketEvents(socket) {
  onConnected(socket);

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
};
