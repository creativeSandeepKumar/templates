
let myIcon = document.getElementById("my-bar");
    myIcon.addEventListener('click', navbar);

function navbar() {
  let navShow = document.getElementById("nav-show");
//   if(navShow.className === "navbar-hidden") {
//       navShow.id += " responsive";
//       document.id("responsive").style.width = "250px";
//   } else {
//       navShow.className = "navbar-hidden";
//   }
// document.getElementsByClassName("responsive").style.display = "block";

document.getElementById("nav-show").style.width = "300px";

document.getElementById("nav-show").style.paddingLeft = "5rem";

// myIcon.classList.toggle('nav-active');


}

let closenav = document.getElementById("closenav");
    closenav.addEventListener('click', navClose);

    
function navClose() {
    document.getElementById("nav-show").style.width = "0"
    document.getElementById("nav-show").style.paddingLeft = "0";
}
