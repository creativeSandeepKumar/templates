// 1 as pmr in function
let slideIndex = 1;
showSlides (slideIndex);

// move to next images with pmr n
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// default images as 1
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    // images display none other than 1 
    if (n > slides.length) {slideIndex = 1};
    // images equals to starts(3), when slides ends
    if( n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    // display when not any images indexing
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides(slideIndex), 2000);
}