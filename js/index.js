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
    letsGo.style.color = 'pink';
    letsGo.style.fontWeight = 'bold';
})

navi.addEventListener('scroll', e => {
    console.log('the user scrolled')
    navi.style.color= 'blue';
})

window.addEventListener('resize', e => {
    funBusLogo.style.color = 'blue';
})

document.addEventListener('copy', e => {
    e.target.style.color = 'green';
})

footerBar.addEventListener('click', e => {
    e.target.style['background-color'] = 'lightblue'
})

document.addEventListener('keyup', e => {
    console.log('key')
    letsGo.style.color = 'red';
})

document.addEventListener('keydown', e => {
    console.log(e.key)
    e.target.style['background-color'] = 'hotpink';
})

document.addEventListener('wheel', e => {
    console.log('wheel rotated')
    e.target.style.color = 'orange';
})