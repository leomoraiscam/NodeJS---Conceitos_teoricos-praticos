const EventEmitter = require("events");

const emmiter = new EventEmitter();

emmiter.on("log", (message) => {
  console.log(message);
});

function log(message) {
  emmiter.emit("log", message);
}

module.exports = log;
