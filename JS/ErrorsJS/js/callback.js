function processUser(name, callback) {
  console.log("Username", name);
  callback();
}

function showWelcome() {
  console.log("Welcome Rahul");
}

function showProfile() {
  console.log("Opening Profile");
}

function logOutUser() {
  console.log("Logging Out...");
}

processUser(Rahul, showWelcome);
processUser(Aman, showProfile);
processUser(Mohit, showProfile);

processUser("Harsh", function () {
  console.log("Have a Great Day!");
});


