const http = require("http");
const URL = require("url");
const fs = require("fs");
const path = require("path");

const data = require("./urls.json");

function writeFile(cb) {
  fs.writeFile(
    path.join(__dirname, "urls.json"),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;

      cb(JSON.stringify({ message: "Content deleted" }));
    }
  );
}

http
  .createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query;

    //all resources
    if (!name || !url) return res.end(JSON.stringify(data));

    //delete
    if (del) {
      data.urls = data.urls.filter((item) => String(item.url) != String(url));
      return writeFile((message) => res.end(message));
    }

    //create
    return res.end("create");
  })
  .listen(3000, () => console.log("Api is running"));
