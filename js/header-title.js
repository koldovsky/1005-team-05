const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarTogler = document.querySelector('navbar-colapse');
const body = document.querySelector('body');

navbarCollapse.addEventListener('show.bs.collapse', function () {
  body.classList.add('overflow-hidden');
});

navbarCollapse.addEventListener('hide.bs.collapse', function () {
    body.classList.remove('overflow-hidden');
    body.classList.add('auto');
});
navbarCollapse.addEventListener('click', () => {
    if (navbarContent.classList.contains('show')) {
        body.classList.remove('overflow-hidden');
        body.classList.add('auto');
        
    }
});
