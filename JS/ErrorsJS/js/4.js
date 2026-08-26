const user = {
  name: "Abhishek",
};

function abhishek(name, country) {
  console.log(`hello my name is ${this.name} and I live in ${country}`);
}

// abhishek.call(user, "Abhishek", "India");
// abhishek.apply(user,["Abhishek", "India"]);
// const fn=abhishek.bind(user,1,2);
// fn();

