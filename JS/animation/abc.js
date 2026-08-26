// Runs a function once after a delay.
const timeoutId=setTimeout(() => {
  console.log("This runs once after 2 seconds");
  console.log("Used to set a timeout");
}, 2000);

//cancels a timeout
console.log("Going to cancel the timeout")
clearTimeout(timeoutId);

// Useful for:

// Delaying an action
// Showing a message temporarily
// Debouncing search input
// Resetting animations
// Running code after a loading period

// Runs a function repeatedly at an approximate interval.

// const intervalId=setInterval(() => {
//   console.log("this runs repeatedly,after a fixed interval;");
//   console.log("this will run in every 2 seconds");
// }, 2000);
// clearInterval(intervalId);

// Timer delays are not exact
// A delay means “run no earlier than this delay when JavaScript is available.”
// setTimeout(() => {
//   console.log("At least 1000 ms later");
// }, 1000);
// If the browser is busy, the callback may run later. 
// JavaScript also cannot execute two callbacks at the exact same time.
// Both return an ID:
// const timeoutId = setTimeout(...);
// const intervalId = setInterval(...);