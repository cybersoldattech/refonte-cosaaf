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

function openNav() {
    document.getElementById("mySidebar").style.width = "40%";
}
  
function closeNav() {
 document.getElementById("mySidebar").style.width = "0";
}

$('.categories-container').on( 'click','div', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    console.log("filterValue",filterValue);
  }); 

//   var $grid =  $('.products-container').isotope({
    // itemSelector: '.box',
//     percentPosition: true,
//     transitionDuration: '0.7s',
//   });