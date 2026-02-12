let slides = null;
let counter = 1;
const scrollSpeed = 2.5;
const pauseTime = 7;
const slideTexts = {

};

let setActiveImage = function(pos){
    counter = (counter < slides.length)?  counter + 1 : 1;
    // GET HEADER CONTENT
    let headerTextElement = document.querySelector(`header .header-slider .slide:nth-child(${pos}) h2`);
    // let headerSubElement = document.querySelector(`header .header-slider .slide:nth-child(${pos}) h2 + *`);
    
    if (!slideTexts[`slide${pos}`]){
        slideTexts[`slide${pos}`] = headerTextElement.textContent;
    }
    
    let text = slideTexts[`slide${pos}`];
    headerTextElement.textContent = "";
    // headerSubElement.style.opacity = 0;

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

    // START TYPING ANIMATION
    let textPos = 0;
    let typingInterval = setInterval(() => {
        if(textPos === text.length){
            clearInterval(typingInterval);
            return
        }
        headerTextElement.textContent += text.charAt(textPos);
        textPos++;
    }, 40);
}

document.addEventListener("DOMContentLoaded", function () {
    slides = document.querySelectorAll("header .header-slider .slide");
    setActiveImage(counter);
    setInterval(function(){
        setActiveImage(counter);
    }, pauseTime * 999);

    if(window.gsap) {
        gsap.from("main .page-section .awards-wrapper", 0.7, {opacity: 0, stagger: 0.4});
    }
});