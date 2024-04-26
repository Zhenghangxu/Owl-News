// const image = document.getElementsByClassName('parallax');
// new simpleParallax(image,{
//     scale: 1.2,
//     transition: 'cubic-bezier(0,0,0,1)',
//     maxTransition: 0.6,
// });

// add a class to nav when scrolled to 100vh

const nav = document.querySelector('#main-nav');

document.addEventListener('scroll', () => {
    if(window.scrollY >= document.documentElement.clientHeight) {
        nav.classList.add('shrink');
        nav.classList.remove('grow');
    } else {
        nav.classList.remove('shrink');
        nav.classList.add('grow');
    }
});