//Preloader
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.my-logo', {y:'0%', duration: 1 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 1 });
tl.to('.preload', { y: '-100%', duration: 1 }, "-=1");
tl.fromTo('.banner-text', { opacity: 0 }, {opacity: 1, duratoion: 1.5})
tl.fromTo('#navbar', { opacity: 0 }, {opacity: 1, duratoion: 1.5})
tl.fromTo('.download-btn', { opacity: 0 }, {opacity: 1, duratoion: 1.5})



// Desktop Navigation
const navBar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        navBar.classList.add('scroll-nav')
    } else {
        navBar.classList.remove('scroll-nav')
    }
})

// Project Page Display
const projectItem = document.querySelectorAll('.project-item');

projectItem.forEach(item => {
    item.addEventListener('mouseover', () =>{
        item.childNodes[1].classList.add('img-darken');
    })

    item.addEventListener('mouseout', () =>{
        item.childNodes[1].classList.remove('img-darken');
    })
})

// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const chevron = document.querySelector('.fa-chevron-down');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        chevron.classList.toggle('avi-gone');

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