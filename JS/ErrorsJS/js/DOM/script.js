console.log(document.body.children[1]);
let img = document.body.children[1];
let myBtn = document.querySelector("#myBtn");
let myreBtn = document.querySelector("#myreBtn");

myBtn.addEventListener("click", () => {
  img.src =
    "https://images.unsplash.com/photo-1519114056088-b877fe073a5e?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});

myreBtn.addEventListener("click", () => {
  img.src =
    "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});

// const parentDiv = document.querySelector(".parent");
// console.log(
//   (parentDiv.children[0].nextElementSibling.nextElementSibling.textContent =
//     "Abhishek")
// );

// document.getElementById
// let myHeading=document.getElementById('myHeading');
// myHeading.textContent=myHeading.textContent.toUpperCase();
// let myDiv1=document.getElementsByClassName('parent');
// let myTag=document.getElementsByTagName('div');
// console.log(myDiv);
// console.log(myHeading);
// let myelem=document.querySelector('.parent');

mydiv.addEventListener('click',()=>{
  mydiv.textContent='AbhisheK';
  mydiv.style.backgroundColor='green';
  mydiv.style.position=
  e.style.color='red';
})