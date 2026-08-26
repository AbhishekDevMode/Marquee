// In JavaScript, a prototype is an inherent mechanism that 
// allows objects to inherit features (properties and methods) from one another.

// Unlike class-based languages (like Java or C++), JavaScript is a
//  prototype-based language. Every object in JavaScript has a built-in 
//  property that points to another object, which is called its prototype.
// function Employee(name) {
//   this.name = name;
// }
// Employee.prototype.login = function (parms) {
//   console.log(`${this.name} is logged in`);
// };

// const empl = new Employee("Abhishek");
// const empl1 = new Employee("Abhishek1");
// const empl2 = new Employee("Abhishek2");
// const empl3 = new Employee("Abhishek3");

// empl.login();
// empl1.login();
// empl2.login();

// function Employee(name) {
//   this.name = name;
// }

// Employee.prototype.login = function () {
//   console.log(`${this.name} is login`);
// };

// const emp1 = new Employee("Abhishek");
// const emp2 = new Employee("Animal");

// emp1.login();
// emp2.login();

// console.log(emp1.__proto_===emp2.__proto_);


// const employee={
//   login(){
//     console.log("employee is logged in");
//   }
// }

// let emp1=O;bject.create(employee)
// emp1.login()

