const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server create");

  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "POST request received", body }));
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ServerCreated");
  }
});

server.listen(3000, () => {
  console.log("Server created");
});