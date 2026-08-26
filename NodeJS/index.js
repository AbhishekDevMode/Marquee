// console.log(global);
// console.log(process.exit());
// process.version();

// fs.writeFile("demo.txt", "Hello from Node.js!", "utf8", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File written successfully");
// });

// fs.readFile("dem.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File content");
//   console.log(data);
// });

// const data = fs.readFileSync("demo.txt", "utf-8");
// console.log(data);

const fs = require("fs");
fs.appendFile("demo.txt", "\nthis line was updated", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Content appended");
});

console.log("Abhishek");
