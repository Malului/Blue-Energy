document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.header__dropdown i');
    const nav = document.querySelector('.header__menu');
    
    // Create mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = nav.innerHTML;
    document.querySelector('.header__dropdown').appendChild(mobileMenu);
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header__dropdown')) {
            mobileMenu.classList.remove('show');
        }
    });
});


import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 100,
        easing: 'ease-in-out',
    });
});

console.log(AOS);