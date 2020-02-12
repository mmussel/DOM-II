const homeBanner = document.querySelector('.container.home .intro img');

const letsGo = document.querySelector('.container.home .content-section .text-content h2');

const funBusLogo = document.querySelector('.logo-heading')

const footerBar = document.querySelector('footer')

const navi = document.querySelector('.nav')


// prevent default
navi.addEventListener("click",e => {
    if(e.target,e.target.tagName.toLowerCase()==="a"){
        e.preventDefault();
    }
    });


// event listeners

homeBanner.addEventListener(('mouseover'), e => {
    e.stopPropagation();
    homeBanner.style.transition = '0.2s, ease in'
    homeBanner.style.transform = 'scale(1.06)';
});

homeBanner.addEventListener(('mouseout'), e => {
    e.stopPropagation();
    homeBanner.style.transition = '0.2s, ease in'
    homeBanner.style.transform = 'scale(1)';
})

letsGo.addEventListener(('dblclick'), e => {
    letsGo.style.color = 'palevioletred';
    letsGo.style.fontWeight = 'bold';
})

document.addEventListener('scroll', e => {
    console.log('the user scrolled')
})

window.addEventListener('resize', e => {
    funBusLogo.style.color = 'blue';
})

document.addEventListener('copy', e => {
    e.target.style.color = 'gray';
})

footerBar.addEventListener('click', e => {
    e.target.style['background-color'] = 'lightblue'
})

document.addEventListener('drag', e => {
    console.log('dragged')
})

document.addEventListener('keydown', e => {
    console.log(e.key)
})

document.addEventListener('wheel', e => {
    console.log('wheel rotated')
})