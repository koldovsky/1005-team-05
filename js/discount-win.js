const invisibleText = document.querySelector(".invisible-text");
const logoIcon = document.querySelector(".header__logo");
const winbtn = document.querySelector(".win-discount-btn");
const submitbtn = document.querySelector(".submit-discount-btn");
logoIcon.addEventListener("click", function () {
  invisibleText.style.display = "block";
  setTimeout(() => {
    invisibleText.style.display = "none";
  }, 15000);
});
submitbtn.addEventListener("click", stopInterval);
function Random() {
  const max = 30;
  winbtn.innerText = Math.round(Math.random() * max);
}
let discountRandomizer = setInterval(Random, 100);
let count;
let jsonStr;
function stopInterval() {
  clearInterval(discountRandomizer);
  const unicNumber = Date.now();
  console.log(unicNumber);
  jsonStr = {
    identuficator: unicNumber,
    discount: document.querySelector(".win-discount-btn").innerText,
  };
  console.log(JSON.stringify(jsonStr));
  submitbtn.removeEventListener("click", stopInterval);
}
submitbtn.addEventListener("click", stopInterval);
console.log(discountRandomizer);
setTimeout(console.log(count), 5000);
