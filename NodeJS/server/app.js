const http = require("http");
const fs=require('fs');

let data=fs.readFileSync('courses.html','utf-8');

const server=http.createServer((req,res)=>{
    res.end(data);
})

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/abhishek") {
//     res.write("Hello abhishek");
//   }
//   res.end("Hello");
// });

const PORT = 4000;
server.listen(PORT, (req, res) => {
  console.log(`App is running on ${PORT}`);
});

