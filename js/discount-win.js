const invisibleText = document.querySelector(".invisible-text");
const logoIcon = document.querySelector(".header__logo");
const winBtn = document.querySelector(".win-discount-btn");
const submitBtn = document.querySelector(".submit-discount-btn");
logoIcon.addEventListener("click", function () {
  invisibleText.style.display = "block";
  setTimeout(() => {
    invisibleText.style.display = "none";
  }, 7000);
});
submitBtn.addEventListener("click", stopInterval);
function Random() {
  const max = 30;
  winBtn.innerText = Math.round(Math.random() * max);
}
let discountRandomizer = setInterval(Random, 100);
let count;
let jsonStr;
function stopInterval() {
  clearInterval(discountRandomizer);
  const unicNumber = Date.now();
  jsonStr = {
    uniqueNumber: unicNumber,
    discount: document.querySelector(".win-discount-btn").innerText,
  };
  console.log(JSON.stringify(jsonStr));
  submitBtn.removeEventListener("click", stopInterval);
}
submitBtn.addEventListener("click", stopInterval);
