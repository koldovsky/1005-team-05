const burgerMenuButton = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.collapse');

burgerMenuButton.addEventListener('click', function() {
  menu.classList.toggle('open');
});