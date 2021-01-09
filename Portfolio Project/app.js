const projectItem = document.querySelectorAll('.project-item');
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.my-logo', {y:'0%', duration: 1 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 1 });
tl.to('.preload', { y: '-100%', duration: 1 }, "-=1");
tl.fromTo('.intro', { opacity: 0 }, {opacity: 1, duratoion: 1.5})
tl.fromTo('.navbar-nav', { opacity: 0 }, {opacity: 1, duratoion: 1.5})

projectItem.forEach(item => {
    item.addEventListener('mouseover', () =>{
        item.childNodes[1].classList.add('img-darken');
    })

    item.addEventListener('mouseout', () =>{
        item.childNodes[1].classList.remove('img-darken');
    })
})

