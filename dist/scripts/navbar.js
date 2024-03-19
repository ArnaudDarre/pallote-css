const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const button = document.querySelector('.button--menu');

button.addEventListener('click', function () {
  button.classList.toggle('button--menu--open');
  navbar.classList.toggle('js-opened');
  body.classList.toggle('js-freeze');
});
