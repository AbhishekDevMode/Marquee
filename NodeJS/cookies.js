const fs = require("fs");
let data = fs.readFileSync("test.json", "utf-8");
const http = require("http");
const server = http.createServer((req, res) => {
  let cookiesObj = {};

  let allCookiesarray = req.headers.cookie.split(";");
  allCookiesarray.forEach((coookiepair) => {
    cookiesObj[coookiepair.split("=")[0]] = coookiepair.split("=")[1];
  });
});
