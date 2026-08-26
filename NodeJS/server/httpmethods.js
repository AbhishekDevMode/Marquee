const fs = require("fs");
const http = require("http");

let homedata = fs.readFileSync("home.html", "utf-8");
let courseData = fs.readFileSync("course.html", "utf-8");
const server = http.createServer((req, res) => {
  // console.log("server created");
  if (req.method === "GET" && req.url === "/homes") {
    // res.write("This is home");
    res.end(homedata);
  }
  if (req.method === "GET" && req.url === "/courses") {
    // res.write("This is home");
    res.end(courseData);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
