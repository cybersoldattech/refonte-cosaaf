let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('menu-active');
}
window.onscroll= ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('menu-active')
}