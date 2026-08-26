let users = [];

async function fetchUsers() {
  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error("unable to fetch users");
    }
    const data = await response.json();
    users = data.users;
    console.log(users);
  } catch (error) {}
}

function userPromise(data) {
  const userFetch = new Promise((resolve, reject) => {
    if (data.length < 0) {
      resolve("users fetched successfully");
    } else {
      reject("users not found");
    }
  });
  
  userFetch.then((data)=>{
    console.log(data);
  })
  userPromise();
}

const promise = new Promise((resolve, reject) => {
  let su = true;
  if (su) {
    resolve("Operation successfull");
  } else {
    reject("Something wrong");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done!"));

doSomething().then((value) => {
  
})