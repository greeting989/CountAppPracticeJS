import "./styles.css";
let countDiv = document.querySelector(".count").textContent;
let incBtn = document.querySelector(".incr_btn");
let decBtn = document.querySelector(".decr_btn");

console.log(countDiv);
incBtn.addEventListener("click", function (e) {
  countDiv++;
  document.querySelector(".count").textContent = countDiv;
});
decBtn.addEventListener("click", function (e) {
  countDiv--;
  document.querySelector(".count").textContent = countDiv;
});
