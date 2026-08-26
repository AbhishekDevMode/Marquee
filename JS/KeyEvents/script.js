let page = document.querySelector(".page");
let h1 = document.querySelector(".page h1");
let text="";

document.addEventListener("keydown", (e) => {
  text += e.key;
  h1.textContent = text;
});
