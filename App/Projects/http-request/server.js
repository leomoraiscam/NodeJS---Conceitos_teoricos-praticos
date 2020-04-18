const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    const file = req.url === "/" ? "index.html" : req.url;
    console.log(file);
    res.end("cheguei");
  })
  .listen(5000, () => console.log("Server is running"));
