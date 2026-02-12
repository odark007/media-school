let scrollingElement = null;
document.addEventListener("DOMContentLoaded", function () {
    scrollingElement = document.scrollingElement || document.body;
    sideContent = document.querySelector("main aside.table-content.page-section");


    window.addEventListener("scroll", function(ev){
        if(scrollingElement.scrollTop >= 0 && scrollingElement.scrollTop < 1200){
            document.querySelector("main .float-button").classList.toggle("open", false);
            sideContent.classList.toggle("visible", false);
        }else if(scrollingElement.scrollTop >= 1200){
            document.querySelector("main .float-button").classList.toggle("open", true);
            sideContent.classList.toggle("visible", true);
        }
    });

    document.querySelector("main aside.table-content.page-section .container-controller").onclick = function(ev){
        sideContent.classList.toggle("open");
        if (sideContent.classList.contains("open") === true) {
            document.querySelector("main aside.table-content.page-section .container-controller span").textContent = "Hide"
            document.querySelector("main aside.table-content.page-section .container-controller i").classList.replace("icofont-caret-up", "icofont-close");
        }else{
            document.querySelector("main aside.table-content.page-section .container-controller span").textContent = "Table Of Content"
            document.querySelector("main aside.table-content.page-section .container-controller i").classList.replace("icofont-close", "icofont-caret-up")
        }
    }
});