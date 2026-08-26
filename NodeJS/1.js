const http = require("http");

const server = http.createServer((req, res) => {
  
  if (req.method === "GET" && req.url === "/hello") {
    res.write("Hello abhishek");
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>This is learning</title>
      </head>
      <body>
        <h1>Hello this is abhishek</h1>
      </body>
    </html>
  `);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
