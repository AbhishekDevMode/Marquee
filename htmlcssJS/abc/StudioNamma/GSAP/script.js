// document.addEventListener("DOMContentLoaded", () => {
//   gsap.from(".card", {
//     opacity: 0,
//     x: 100,
//     // y: 100,
//     duration: 3,
//     ease: "power3.out"
//   });

  // gsap.from(".card-title, .card-text, .card-btn", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 0.8,
  //   stagger: 0.2, // 0.2 seconds delay between each element's start
  //   ease: "power2.out",
  //   delay: 0.3 // Waits briefly for the main card animation to start
  // });

  // const boxTimeline = gsap.timeline({ paused: true });

  // boxTimeline
  //   .to(".box", { scale: 1.5, duration: 0.3, ease: "bounce.out" })
  //   .to(".box", {
  //     rotation: 360,
  //     x: 50,
  //     duration: 0.6,
  //     backgroundColor: "#00bfff"
  //   })
  //   .to(".box", { x: -50, duration: 0.6, rotation: -360 })
  //   .to(".box", {
  //     x: 0,
  //     scale: 1,
  //     duration: 0.4,
  //     backgroundColor: "#ff0055",
  //     ease: "power1.inOut"
  //   });

  // Hook the timeline to the button click event
//   const button = document.querySelector(".card-btn");
//   button.addEventListener("click", () => {
//     // If the timeline is already playing or finished, restart it; otherwise, play it.
//     if (boxTimeline.progress() > 0) {
//       boxTimeline.restart();
//     } else {
//       boxTimeline.play();
//     }
//   });
// });
// gsap.to(".box", {
//   x: 200,
//   duration: 1.5,
//   rotation: 360
// });
const button =document.querySelector(".btn");
const body=document.querySelector(".body")
button.addEventListener("mouseenter",()=>{
body.style.backgroundColor = "blue";  

// gsap.to(button,{scale:1.1,duration:0.2});
  // console.log("Hi this is abhishek");

  // alert("Hi you checked addevent")
});

button.addEventListener('mouseleave',()=>{
  gsap.to(button,{scale:1,duration:0.2})
});

const numberDisplay=document.querySelector(".num");

let count=0;

button.addEventListener('click',()=>{
  count++;

  numberDisplay.textContent=count;
})