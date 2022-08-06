const body = document.querySelector('body');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-navigation');


navToggle.addEventListener('click', () => {
    mainNav.toggleAttribute('data-visible');
    navToggle.firstElementChild.classList.toggle('hidden');
    navToggle.firstElementChild.nextElementSibling.classList.toggle('hidden');
    mainNav.hasAttribute('data-visible') ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';

});