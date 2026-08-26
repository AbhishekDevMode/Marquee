// console.log("Abhishek");
const user = { name: "abhishek", age: 24, role: "Asmine" };

// for (const key of user) {
//   console.log(`${key}:${user[key]}`);
// }

// console.log(user["age"]);
// const colors = ["red", "green", "pink"];
// for (let color of colors) {
//   console.log(color);
// }

// function name(name){
//     console.log(name);
// }
// name("ram");

// function rightTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//     console.log("*".repeat(i));
//   }
// }

// rightTriangle(5);
// function rightTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//     // Repeat the star character "i" times for each row
//     console.log("*".repeat(i));
//   }
// }

// rightTriangle(5);

// function printDiamond(rows) {
//   // --- TOP HALF OF THE DIAMOND (Including the center line) ---
//   for (let i = 1; i <= rows; i++) {
//     let rowOutput = "";

//     // Loop 1: Add the spaces before the stars
//     for (let j = 1; j <= rows - i; j++) {
//       rowOutput += " ";
//     }

//     // Loop 2: Add the stars (Odd numbers: 1, 3, 5, 7...)
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       rowOutput += "A";
//     }
//     console.log(rowOutput);
//   }

//   // --- BOTTOM HALF OF THE DIAMOND ---
//   for (let i = rows; i >= 1; i--) {
//     let rowOutput = "";

//     // Loop 1: Add the spaces before the stars
//     for (let j = 1; j <= rows - i; j++) {
//       rowOutput += " ";
//     }

//     // Loop 2: Add the stars
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       rowOutput += "V";
//     }

//     console.log(rowOutput);
//   }
// }

// // Pass the number of rows for the top half size
// printDiamond(5);

// let firstName = "   harshit  ";
// console.log(firstName.length);
//trim function removes white spaces from before and after
// firstName = firstName.trim(5);
// console.log(firstName);
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index
// end index

// let newString = firstName.slice(2); // hars
// console.log(newString);

// let firstName = "Abhishek";
// let newString = firstName.slice(4); // hars
// console.log(newString);

// typeof operator

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6
// booleans
// undefined
// null
// BigInt
// Symbolclear

// let age = 22;
// let firstName = "harshit";
// console.log(typeof age);

// // 22 -> "22"
// // convert number to string.
// age = age + "";
// console.log(typeof age);

// // convert string to number.

// let myStr = +"Abhishek";
// console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);

// let fruits = ["Apple", "Banana", "Cherry"];

// let firstFruit = fruits.shift();

// console.log(firstFruit); // Output: "Apple" (the removed element)
// console.log(fruits);     // Output: ["Banana", "Cherry"] (the modified array)

// let newlength=fruits.unshift('Apple');
// console.log(newlength);
// fruits.unshift('Apple')
// console.log(fruits);
//shift remove 1st element
//unshift add 1st element
// fruits.slice(1, 2);
// console.log(fruits.slice(1, 2));
// console.log(fruits.splice(1, 2, "abhishek"));
// console.log(fruits);

// let ar1 = [1, 2, 3, 4];
// ar1.push(1);
// ar1.pop();
// console.log(ar1);

// let ar1 = [1, 2, 10, 4, -1];
// let fruits = ["dpple", "Banana", "Cherry"];
// console.log(fruits.sort((a,b)=>b-a));

//descending order
// console.log(ar1.sort((a,b)=>b-a));
//ascending order
// console.log(ar1.sort((a,b)=>a-b));

//find methods

// const users = [
//   // { name: "Alex", age: 15 },
//   { name: "Blake", age: 22 },
//   { name: "Charlie", age: 30 }
// ];

// Find the first user who is an adult
// const adult = users.find((user) => user.age >= 18);
// console.log(adult); // Output: { name: 'Blake', age: 22 }

// console.log(users.findIndex(user =>user.age>=18));
// includes()  return true of false if element exists

// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits.includes("banana")); // Output: true
// console.log(fruits.includes("grape")); // Output: false

// console.log(fruits.indexOf("cherry"));
//concating the array
// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7, 8];
//concat inserts elements
// console.log(ar1.concat(ar2));
//push inserts whole array
// ar1.push(ar2);
// console.log(ar1);
//slicing
// let ar = [1, 2, 32, 3, 4, 7, 6, 8];
//removes first two elements before index 2
// console.log(ar.slice(2));
// keeps last 2 elements
// console.log(ar.slice(-2));

// let ar=[1,2,3,4,5];
// ar.forEach((v) => {
//   console.log(v*2);
// })

// const textcon=document.querySelector('.textcop');
// const abc=user.map((v,i)=>{
//   return .home
// })

// let temp=ar.filter((value,index)=>{
//   return value%2==0;
// })

// console.log(temp);

// let str="My name is Abhishek";
// let array1=["abhishek","Abhishek1","Abhishek2"];
// console.log(str.slice(-5,-1));
// console.log(str.substring(-5,-2));
// console.log(str.trim());
// console.log(str.split(","));
// console.log(array1.join('-'));

// let arrStr=["Abhishek","Arun","Ruchi"];
// console.log(arrStr.sort((a,b)=>{
//   return a.localeCompare(b,undefined,{sensitivity:'base'})
// }));

// let s="Abhishek";
// s.split('').forEach(c=>{
//   console.log(c);
// });

// let a=1;

// while(a<3){
//   a++;
//   console.log(a);
// }

// do{
//   console.log("Abhishek");
//   a++;
// }while(a<3);
//callback function
function neha(){
    console.log("Iam neha")
}
function rahul(callback){
    callback();
}
rahul(neha);