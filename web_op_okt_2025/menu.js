const nav = document.querySelector('header nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  const open = burger.classList.toggle('active');
  nav.classList.toggle('active', open);
  burger.setAttribute('aria-expanded', open);
});
