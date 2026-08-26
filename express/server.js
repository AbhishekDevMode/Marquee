//server create on epxress
const fs= require('fs');
const express = require("express");
const app = express();

// app.use((req,res,next)=>{
//     console.log("Request url:",req.url,"Method:",req.method);
//     next();
// })

let fileContent = fs.readFileSync("employee.json", "utf-8");

app.get("/home", (req, res) => {
  res.send("this is home");
});

app.get("/employees", (req, res) => {
  res.setHeader("Access control Allow origins", "*");
  res.send(fileContent);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is runing on port:${PORT}`);
});
