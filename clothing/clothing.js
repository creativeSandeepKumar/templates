
let bars = document.getElementById("openbar");
bars.addEventListener('click', openNav);

  function openNav() {
    let x = document.getElementById("sideNav");
    if(x.className === "sidenav") {
        x.className += " responsive";
    } else {
        x.className = "sidenav";
    }
  }

  let closebtn = document.getElementById("closeNav");
  closebtn.addEventListener('click', closeNav);
  
    function closeNav() {
        let x = document.getElementById("sideNav");
        if(x.className === "sidenav") {
            x.className += " closeSide";
        } else {
            x.className = "sidenav";
        }
    }

let jeans = document.getElementById("jeans");
jeans.addEventListener('click', OpenJeans);

function OpenJeans() {
    let jeansMenu = document.getElementById("jeansMenu");
    if(jeansMenu.className === "dropdown-jeans") {
        jeansMenu.className += " openJeans";
    } else {
        jeansMenu.className = "dropdown-jeans";
    }
}