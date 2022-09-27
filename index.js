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

io.on("connection", (socket) => handleSocketEvents(socket, io));

// main game process
socketServer(io);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
