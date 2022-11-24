
let iconBar = document.getElementById("bar-icon");

iconBar.addEventListener('click', openNav);

function openNav() {
    let x = document.getElementById("topNav");
    if(x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

