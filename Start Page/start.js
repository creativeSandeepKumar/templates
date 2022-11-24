

// let barIcon = document.getElementById("bar-icon");

// barIcon.addEventListener('click', openNav);

// function openNav() {
//     let x = document.getElementById("myNavbar");
//     if (x.className === "navbar") {
//         x.className += " responsive";
//     } else {
//         x.className = "navbar";
//     }
// }
let barIcon = document.getElementById("bar-icon");

barIcon.addEventListener('click', myFunction);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }