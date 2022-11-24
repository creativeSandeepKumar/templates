
let bars = document.getElementById("bars");
bars.addEventListener("click", openNav);

function openNav() {
    let navId = document.getElementById("nav-id");
    if(navId.className === "js-nav") {
        navId.className += " responsive";
    } else {
        navId.className = "js-nav";
    }

}

// model
let modal = document.getElementById("myModal");

let btn = document.getElementById("modelBtn");

let span = document.getElementsByClassName("closemodel") [0];

btn.onclick = function() {
    modal.style.display = "block";
}

// close modal
span.onclick = function() {
    modal.style.display = "none";
}

// click anywhere outside the modal close the modal

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}


// open sidebar when cliked btn

let sidebarBtn = document.getElementById("sidebarBtn");
sidebarBtn.addEventListener("click", opensidebar);

function opensidebar() {
    let sidebar = document.getElementById("sidebar-id");
    sidebar.style.width = "300px";
}

// close sidebar

let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", closesidebar);

function closesidebar() {
    let sidebar = document.getElementById("sidebar-id");
    sidebar.style.width = "0";
}
