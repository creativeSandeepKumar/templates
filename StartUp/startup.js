let Bar = document.getElementById("bar-icon");
Bar.addEventListener("click", openMenu);

function openMenu() {
    let sideBar = document.getElementById("sideMenu");
    if(sideBar.className === "sidebar") {
        sideBar.className += " responsive";
    } else {
        sideBar.className = "sidebar"
    }
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
}

let closeBtn = document.getElementById("closebtn");
closeBtn.addEventListener("click", closeMenu);

function closeMenu() {
    let sideBar = document.getElementById("sideMenu");
    if(sideBar.className === "responsive") {
        sideBar.style.display = "none";
    } else {
        sideBar.className = "sidebar"
    }
    document.body.style.backgroundColor = "white";
}