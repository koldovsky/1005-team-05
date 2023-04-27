const invisibleText = document.querySelector(".invisible-text");



const winbtn = document.querySelector(".win-discount-btn");
const submitbtn = document.querySelector(".submit-discount-btn");
submitbtn.addEventListener("click", stop);
function Random() {
  const max = 30;
  winbtn.innerText = Math.round(Math.random() * max);
}
let discountRandomizer = setInterval(Random, 100);
let count;
let jsonStr;
function stop() {
  clearInterval(discountRandomizer);
  const ident = Date.now();
  console.log(ident);
  jsonStr = {
    identuficator: ident,
    discount: document.querySelector(".win-discount-btn").innerText,
  };
  console.log(JSON.stringify(jsonStr));
  submitbtn.removeEventListener("click", stop);
}
submitbtn.addEventListener("click", stop);
console.log(discountRandomizer);
setTimeout(console.log(count), 5000);
