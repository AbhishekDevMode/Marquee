let abhishek = {
  age: 3,
  name: "Abhishek",
  funct: function () {
    console.log("Hi abhishek");
  },
  address: {
    city: "Varnai",
    pincode: 4,
  },
};

// Convert object to string (functions are removed during JSON serialization)
// let abhishek_string = JSON.stringify(abhishek);
// console.log(abhishek_string, typeof abhishek_string);

// Shallow copy: copies top-level properties, but nested objects are still shared
// let abhishek_shallowcopy = { ...abhishek };

// Deep copy using JSON.parse(JSON.stringify(obj))
// let abhishek_deepcopy = JSON.parse(abhishek_string);

// console.log("Shallow copy:", abhishek_shallowcopy);
// console.log("Deep copy:", abhishek_deepcopy);

// Demonstrate the difference
// abhishek.address.city = "Delhi";
// console.log("Original city:", abhishek.address.city);
// console.log("Shallow copy city:", abhishek_shallowcopy.address.city);
// console.log("Deep copy city:", abhishek_deepcopy.address.city);


let employees = [
  { name: "Abhishek", age: 24, city: "Bhadohi", department: "Developer" ,salary:200000},
  {
    name: "Aman",
    age: 34,
    city: "Bhadohi",
    department: "Artificial Intelligence",salary:20000
  },
  { name: "Amanjeet", age: 40, city: "Prayagraj", department: "HR",salary:2000},
];

// let temp = employees.filter((emp) => (emp.name = "Abhishek"));
employees.forEach((e)=>{
    console.log(e.salary/2);  
})

let s="";
employees.forEach((e)=>{
    s+=s.name;
})
console.log(s.length)
// console.log(temp);
