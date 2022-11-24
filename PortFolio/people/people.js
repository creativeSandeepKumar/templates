// close function
let closeBtn = document.getElementById("closenav");
    closeBtn.addEventListener('click', closeNavbar);
function closeNavbar() {
    if(closeBtn.className === "closebtn") {
        document.getElementById("nav-show").style.display = "none";
        preventDefault
} else {
    document.getElementById("nav-show").style.display = "block";
    preventDefault
}
}


let myBars = document.getElementById("my-bar");
    myBars.addEventListener('click', openNav);

function openNav() {
    
    document.getElementById("nav-show").style.display = "block";
    preventDefault;
    
}
