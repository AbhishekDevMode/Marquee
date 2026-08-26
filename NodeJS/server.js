// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(`Request received: ${req.method} ${req.url}`);

//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Hello from GET /" }));
//     return;
//   }

//   if (req.method === "GET" && req.url === "/data") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({ data: [1, 2, 3], note: "Sample GET /data response" }),
//     );
//     return;
//   }

//   if (req.method === "POST" && req.url === "/submit") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ received: body, status: "OK" }));
//     });
//     return;
//   }

//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ error: "Not Found" }));
// });

// server.listen(3000, () => {
//   console.log(`app is running on http://localhost:3000`);
// });

// const { log } = require('console');


const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Abhishek");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("App is listening on http://localhost:3000");
});

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Abhishek");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("App is listening on http://localhost:3000");
});
