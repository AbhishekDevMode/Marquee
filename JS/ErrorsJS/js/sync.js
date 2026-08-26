const fs = require("fs");
fs.writeFileSync(
  "test.json",
  "Hello i am learning the synchronization",
  (err) => {
    if (err) {
      console.log(err);
    }
  },
);

let data = fs.readFile("test.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("operation performed");
