// console.log(this)

// let user={
//     name:"Abhishek",
//     human(){
//         let harsh=()=>{
//             console.log(this.name);
//         }
//         harsh();
//     }
// }

//task1

// let student={
//     name:"Ashman",
//     age:24,
//     course:"CSE",

//     introduce(){
//      console.log(`Hi,I am ${this.name}.`);
//      console.log(`I am ${this.age} years old.`);
//      console.log(`I am learning ${this.course}.`);
//     }
// }

// student.introduce();
//task2

// let employee={
//     name:"Aaman",
//     age:23,
//     designation:"Java",
//     showDetails(){
//     const print=()=>{
//         console.log(`Employee: $ {this.name}`);
//         console.log(`Employee: $ {this.designation}`);
//     }
//     print();
//     }
// }
//task 3

// const counter = {
//   count: 0,
//   increment() {
//     this.count += 1
//     console.log(this.count)
//   }
// }

// counter.increment()
// counter.increment()
// counter.increment()
// task4

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi , I am ${this.name}`);
    console.log(`Hi , I am ${this.age} years old`);
  }
}
const abhishek = new Student("Harshit", 25);
abhishek.introduce();
