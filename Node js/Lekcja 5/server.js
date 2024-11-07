const http = require("http");
const PORT = 3000;
const router = require("./app/router")
http
    .createServer((req, res) => router(req, res))
    .listen(3000, () => console.log("listen on 3000"))