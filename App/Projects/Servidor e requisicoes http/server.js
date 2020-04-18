const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") return res.end("<h1>Home page</h1>");
    if (req.url === "/contato") return res.end("<h1>Contato</h1>");
  })
  .listen(5000, () => console.log("Server is running"));
