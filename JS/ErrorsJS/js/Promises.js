// const myPromise = new Promise((resolve, reject) => {
//    const success = true;
//    if (success) {
//        resolve("Task completed successfully!");
//    } else {
//        reject("Task failed!");
//    }
// });
// myPromise
//    .then((message) => console.log(message))
//    .catch((error) => console.error(error));

// let examp = new Promise((resolve, reject) => {
//   const marks = 40;
//   if (marks > 40) {
//     resolve("Passed");
//   } else {
//     reject("Failed");
//   }
// });

// console.log(examp);

let transaction = new Promise((resolve, reject) => {
  let amount = 1000;
  let balance = 200;
  if (amount <= balance) {
    resolve(`Transaction successful! Remaining balance: ${balance - amount}`);
  } else {
    reject(
      `Transaction failed! Insufficient balance. Current balance: ${balance}`,
    );
  }
});

// console.log(transaction)
transaction.then((abhishek) => {
  console.log(abhishek);
});
