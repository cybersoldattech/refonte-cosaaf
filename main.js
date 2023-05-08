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

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }