const fs = require("fs");
// fs.writeFile("a.txt", "Hello new file created", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// const fs = require("fs");
// fs.readFile("employee.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log("err");
//     return;
//   } else {
//     const jsonData = JSON.parse(data);
//     console.log(jsonData.filter((emp) => emp.salary > 500));
//     console.log(jsonData.filter((emp)=>))
//   }
// });

// const ar = [100, 200, 300, 400];
// const newAr = ar.map((a) => a * 400);

// console.log(newAr);

fs.readFile("employee.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
    const jsonData = JSON.parse(data);
    jsonData.unshift(
      { name: "Abhishek", department: "IT" },
      { name: "abhishek1", department: "AI" },
      { name: "abhishek1", department: "DEV" },
    );
    fs.writeFile(
      "employee.json",
      JSON.stringify(jsonData, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.log(writeErr);
        } else {
          console.log("employee.json updated successfully");
          console.log(jsonData);
        }
      },
    );
  }   
);
