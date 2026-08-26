const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
//middlewares
//express has inbuilt middleware 
app.use(express.json)
app.use(express.urlencoded({extended:true}));

//curstom middleware
//common custiome middlweare

// app.use((req,res,next)=>{
//   req.headers.nayikey="nayivalue";
//   next();
// })
// app.use((req,res,next)=>{
//   console.log(req.headers.nayikey);
//   console.log("middleware chal gya2");
// next();
// })

// app.use((req,res,next)=>{
// console.log("middleware chal gya3");
// next();
// })
//admin middleware
app.use("/admin",(req,res,next)=>{
  console.log("Admin middleware");
  next();

})
//check
app.use("/email",(req,res,next)=>{

})

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/aboutUs.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/contactUs.html"));
});

app.get("/particularCourse", (req, res) => {
  res.sendFile(path.join(__dirname + "/particularCourse.html"));
});

app.get("/getallcourses", (req, res) => {
  res.setHeader("Access-Control-Allow_Origin", "*");
  let coursedata = fs.readFileSync("courses.json", "utf-8");
  console.log(coursedata);
  res.send(coursedata);
});

app.get("/courses/:id", (req, res) => {
  console.log(req.params.id);
  let allCourses = fs.readFileSync("courses.json", "utf-8");
  allCourses = JSON.parse(allCourses);
  let thatCourse = allCourses.find(
    (course) => course.course_id == req.params.id,
  );
  res.send(thatCourse);
});

app.get("/particularCourse/:id", (req, res) => {
  res.sendFile("particularCourse.html");
});

app.get("/courses", (req, res) => {
  res.sendFile(__dirname + "/courses.html");
});

app.post("registerUser", (req, res) => {
  console.log(message);
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
  console.log(req.headers.cookie)
  res.send('kuch bhi')
})

app.get('register',(req,res)=>{
  res.sendFile(__dirname+"/regsiterScreen.html");
})

app.get("login", (req, res) => {
  res.sendFile(__dirname + "/loginScreen.html");
});

app.post('/registerNewUser',(req,res)=>{
  console.log(req.body.name);
  let allCurrentUsers=fs.readFileSync('users.json)')
  allCurrentUsers=JSON.parse(allCurrentUsers);
  allCurrentUsers.push({id:allCurrentUsers[allCurrentUsers.length-1].id+1,name:})
  allCurrentUsers=JSON.stringify(allCurrentUsers);
  fs.writeFileSync('users.json',allCurrentUsers)
  console.log(req.header.cookie)
  res.send('user registered');
})

app.post("/userlogin", (req, res) => {
  let allCurrentUsers = fs.readFile("users.json", "utf-8");
  allCurrentUsers = JSON.parse(allCurrentUsers);
  let user = user.find((user) => user.email == req.body.loginemail);

  if (user == undefined) {
    res.send("user not found please register yourself first");
  } else {
    if (user.pasword === req.body.loginpassword) {
      res.cookie("name","abhishek")
      res.send("login successfull");
    } else {
      res.send("please enter correct password");
    }
  }
});

app.listen(3000, (r) => {
  console.log("listening");
});
