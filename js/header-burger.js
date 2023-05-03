const navbarCollapse = document.querySelector(".navbar-collapse");
const body = document.querySelector("body");
const folding = document.querySelector(".navbar-toggler");

navbarCollapse.addEventListener("show.bs.collapse", function () {
  body.classList.add("overflow-hidden");
});

navbarCollapse.addEventListener("hide.bs.collapse", function () {
  body.classList.remove("overflow-hidden");
});
navbarCollapse.addEventListener("click", () => {
  if (navbarCollapse.classList.contains("show")) {
    body.classList.remove("overflow-hidden");
    folding.classList.add("collapsed");
    navbarCollapse.classList.remove("show");
    folding.setAttribute("aria-expanded", false);
  }
});
