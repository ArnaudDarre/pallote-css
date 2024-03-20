const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const button_navbar = document.querySelector('.navbar__button');
const sidebar = document.querySelector('.sidebar');
const button_sidebar_open = document.querySelector('.sidebar__button');
const button_sidebar_close = document.querySelector('.sidebar__button--close');

button_navbar.addEventListener('click', function () {
  button_navbar.classList.toggle('js-opened');
  navbar.classList.toggle('js-opened');
  body.classList.toggle('js-navbar');
});

button_sidebar_open.addEventListener('click', function () {
  sidebar.classList.add('js-opened');
  body.classList.add('js-sidebar');
  button_navbar.classList.remove('js-opened');
  navbar.classList.remove('js-opened');
  body.classList.remove('js-navbar');
});
button_sidebar_close.addEventListener('click', function () {
  sidebar.classList.remove('js-opened');
  body.classList.remove('js-sidebar');
});
