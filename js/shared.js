// Hamburger menu transformation and mobile menu
let hamburgerBtn = document.querySelector('.hamburger-menu');
let mobileNav = document.querySelector('.mobile-nav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('change');
    mobileNav.classList.toggle('mobile-nav--active');
});