function Employee(name, department, salary) {
  this.name = name;
  this.department = department;
  this.salary = salary;
}

const abhishek = new Employee("Abhishek", "AI", 20000);
console.log(abhishek);

Employee.prototype.login = function () {
  console.log(` ${this.name}.is logged in!`);
};

Employee.prototype.logout = function () {
  console.log(` ${this.name}.is logged out`);
};

Employee.prototype.work = function () {
  console.log(
    `Hi my name is ${this.name}.I am from department ${this.department}`,
  );
};

Employee.prototype.showDetails = function () {
  console.log(
    `Hi my name is ${this.name}.I am from department ${this.department} and my salary is ${this.salary}`,
  );
};

const emp1 = new Employee("Abhishek1", "Java", 20000);
const emp2 = new Employee("Abhishek2", "Python", 20000);
const emp3 = new Employee("Abhishek3", "Javascript", 20000);
const emp4 = new Employee("Abhishek4", "GoLang", 20000);
const emp5 = new Employee("Abhishek5", "Ruby", 20000);
emp1.login();
emp1.logout();
emp1.work();
emp1.showDetails();

//verifying the prototype
console.log(emp1.__proto__);
console.log(Employee.prototype);
console.log(emp1.__proto__ === Employee.prototype);

//Checking the prototype chain

console.log(emp1.__proto__);
console.log(emp1.__proto__.__proto__);
console.log(emp1.__proto__.__proto__.__proto__);

const emp = {
  login() {
    console.log(`${this.internName} || "Employee"} has logged in.`);
  },
  showDetails() {
    console.log(`Name: ${this.name},Duration : ${this.duration}`);
  },
};

const intern = Object.create(emp);
intern.internName = "Abhishek";
intern.duration = 3000;
intern.login();
intern.showDetails();
