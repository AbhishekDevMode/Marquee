const btn = document.querySelector(".btn");
let val = 0;

function count() {
  val++;
  btn.textContent = val;
}

btn.addEventListener("click", count);
