let slides = null;
let counter = 1;
const scrollSpeed = 2.5;
const pauseTime = 7;

let setActiveImage = function(pos){
    counter = (counter < slides.length)?  counter + 1 : 1;
    // Set active image
    document.querySelectorAll("header .header-slider .slide").forEach(img => {
        img.classList.toggle("active", false);
    });
    document.querySelector(`header .header-slider .slide:nth-child(${pos})`).classList.toggle("active", true);

    // Set active indicator
    document.querySelectorAll("header .slider-control .slider-nav.active").forEach(img => {
        img.classList.toggle("active", false);
    });
    document.querySelector(`header .slider-control .slider-nav:nth-child(${pos})`).classList.toggle("active", true);
}

document.addEventListener("DOMContentLoaded", function () {
    slides = document.querySelectorAll("header .header-slider .slide");
    setInterval(function(){
        setActiveImage(counter);
    }, pauseTime * 999);
});