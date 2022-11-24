
// let eat = document.getElementById("eat-menu");
// eat.addEventListener("click", openEat);

// function openEat() {
//     let eatOpen = document.getElementById("eat-tab");
    
//     if(eatOpen.className === "eat-menu") {
//         eatOpen.className += "display-eat"
//     } else {
//         eatOpen.className = "eat-menu"
//     }

//    if(eat.className === "eat-tab") {
//        eat.className += " foodstyle";
//    } else {
//         eat.className = "eat-tab";
//    }
    
// }
// let drink = document.getElementById("drink-button");
// drink.addEventListener("click", openDrink);

// function openDrink() {
    
//     let drinkOpen = document.getElementById("drink-tab");
//     if(drinkOpen.className === "eat-menu") {
//         drinkOpen.className += "display-drink"
//     } else {
//         drinkOpen.className = "drink-menu"
//     }


//    if(drink.className === "drink-tab") {
//        drink.className += " foodstyle";
//    } else {
//         drink.className = "drink-tab";
//    }
//    let eatOpen = document.getElementById("eat-tab");
//    eatOpen.style.display = "none";
    
// }
// tabbed menu

function openMenu(evt, menuName) {
    let i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    } 
    tablinks =  document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( "dark-gray", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " dark-gray";
}
document.getElementById("myLink").click();
