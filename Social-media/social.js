
let bar = document.getElementById("barMenu");

bar.addEventListener("click", openNav);

function openNav() {
    let x = document.getElementById("Nav-menu");
    if(x.className === "nav-res"){
        x.className += " responsive";
    } else {
        x.className =  "nav-res";
    }
}