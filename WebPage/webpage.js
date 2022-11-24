

let bar = document.getElementById("bar-menu");
bar.addEventListener("click", openSidebar);

function openSidebar() {
    let sidebar = document.getElementById("side-menu");
    if(sidebar.className === "sidebar"){
        sidebar.className += " responsive";
        
    } else {
        sidebar.className = "sidebar";
    }
}

// close sidebar
let times = document.getElementById("times");
times.addEventListener("click", closeSidebar);

function closeSidebar() {
    let sidebar = document.getElementById("side-menu");
    if(sidebar.className === "responsive"){
       sidebar.style.width = "0";
    } else {
        sidebar.className = "sidebar";
    }
}