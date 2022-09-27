const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const handleSocketEvents = require("./socket");
const socketServer = require("./socket/socketServer");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", handleSocketEvents);

// main game process
socketServer();

server.listen(3000, () => {
  console.log("listening on *:3000");
});
