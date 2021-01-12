// Desktop Navigation
const navBar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        navBar.classList.add('scroll-nav')
    } else {
        navBar.classList.remove('scroll-nav')
    }
})

const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s forwards ${index / 7 + 0.6}s`
            }
        })
        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();