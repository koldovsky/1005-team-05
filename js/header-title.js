const navbarContent = document.querySelector('#navbarContent');
const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', () => {
    navbarContent.classList.toggle('show');
    document.body.classList.toggle('modal-open');
});