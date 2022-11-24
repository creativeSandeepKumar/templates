
let Bars = document.getElementById("bars");
Bars.addEventListener("click", openNav);

function openNav() {
   
    let sideNav = document.getElementById("SideMain");
   
    if(sideNav.className === "sidenav-container") {
        sideNav.className += " opensideNav";
    } else {
        sideNav.className = "sidenav-container";
    }
    
}


let times = document.getElementById("closeMenu");
times.addEventListener("click", closeNav);
function closeNav() {
    let sideNav = document.getElementById("SideMain");
    if(sideNav.className === "sidenav-container") {
        sideNav.className += " closesideNav";
    } else {
        sideNav.className = "sidenav-container";
    }
    
}

