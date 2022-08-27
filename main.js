


var hamburger = document.querySelector('.HAMBURGER-MENU')
var mobilelinks =document.querySelector('.link-holder_mobile')
var backdrop =document.querySelector('.backdrop')

function Addclass() {
    hamburger.classList.toggle('gone')
    mobilelinks.classList.toggle('gonemobile')
    backdrop.classList.toggle('gonemobile')
}