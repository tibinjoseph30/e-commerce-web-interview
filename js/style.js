let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.header-nav .nav-menu');
let headerNav = document.querySelector('.header-nav');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

function toggleHeaderNavClass() {
    const screenWidth = window.innerWidth;
    if(screenWidth >= 1200) {
        if(window.scrollY > 80) {
            headerNav.classList.add('sticky');
        } else {
            headerNav.classList.remove('sticky');
        }
    } else {
        headerNav.classList.remove('sticky');
    }
}

window.addEventListener('scroll', toggleHeaderNavClass);
window.addEventListener('resize', toggleHeaderNavClass);

toggleHeaderNavClass();