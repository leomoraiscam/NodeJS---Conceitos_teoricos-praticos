const http = require("http");
const data = require("./urls.json");
const URL = require("url");

http
  .createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query;

    //all resources
    if (!name || !url) return res.end("show all");

    //delete
    if (del) return res.end("delete");

    //create
    return res.end("create");
  })
  .listen(3000, () => console.log("Api is running"));
