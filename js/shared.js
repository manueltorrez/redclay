let hamburgerBtn = document.querySelector('.hamburger-menu');
let mobileNav = document.querySelector('.mobile-nav');

let transformToX = button => {
    button.classList.toggle('change');
}

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('change');
    mobileNav.classList.toggle('mobile-nav--active');
});