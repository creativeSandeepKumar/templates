
let slideIndex = 1;
showSlides(slideIndex);


let nextBtn = document.getElementById("nextbtn");
nextBtn.addEventListener("click", nextSlide);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if( n > x.length) {
        slideIndex = 1;
    }
    if( n < 1) {
        slideIndex = x.length;
    }
    for ( i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}