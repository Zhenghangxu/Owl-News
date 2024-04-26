const image = document.getElementsByClassName('parallax');
new simpleParallax(image,{
    scale: 1.2,
    transition: 'cubic-bezier(0,0,0,1)'
});