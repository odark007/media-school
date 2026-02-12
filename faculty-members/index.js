let prodContainer = null;
let infoContainer = null;
let boardMembers = [
    {
        id: "prod1",
        title: Date.now(),
        name: "Kiddie Tyme on GH One TV",
        img: "./images/Production1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod.",
        email: "tehmi2000@gmail.com"
    },
    {
        id: "prod2",
        title: Date.now(),
        name: "Room 13 (R13) on GH on TV",
        img: "./images/Production2.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod3",
        title: Date.now(),
        name: "Campuz Fyle on Metro TV",
        img: "./images/Production3.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod4",
        title: Date.now(),
        name: "Maniac Town II",
        img: "./images/Production4.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod5",
        title: Date.now(),
        name: "The Definition Of A Woman",
        img: "./images/Production1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
]

document.addEventListener("DOMContentLoaded", function () {
    prodContainer = document.querySelector("main .page-section .production-container");
    infoContainer = document.querySelector("main .page-section .production-info-container");

    document.querySelector("main .production-info-container #close-pic").addEventListener("click", ev => {
        infoContainer.style.right = "-100%";
        infoContainer.style.marginRight = "-30vw";
    });

    setTimeout(() => {
        getBoardMembersFromDB(prodContainer);
    }, 3000);
});

function displayProductionInfo(productionUID) {
    let productionInfo = boardMembers.find(productionData => {
        return productionData.id === productionUID;
    });

    // FILL IN DATA TO DISPLAY
    if (productionInfo !== undefined) {
        document.querySelector("main .production-info-container img").src = productionInfo.img;
        document.querySelector("main .production-info-container img").alt = productionInfo.name;
        document.querySelector("main .production-info-container h3").textContent = productionInfo.name;
    }

    infoContainer.style.right = "0%";
    infoContainer.style.marginRight = "0";
}

let getBoardMembersFromDB = function(HTMLcontainer){
    let successCallback = function(result){
        HTMLcontainer.innerHTML = "";
        result.forEach(prodItem => {
            createHTMLProduction(prodItem);
        });
    }
    let result = boardMembers;
    successCallback(result);
    // fetchCrossBrowser("/api/media/productions", { method: "GET"}, successCallback)
}

let createHTMLProduction = function(data){
    let prodWrapper = createComponent("FIGURE", null, ["cols", "prod-wrapper"]);
        let img = createComponent("IMG", null, ["prod-img"]);
        let caption = createComponent("FIGCAPTION", `${data.name.toLowerCase()}`);

    img.src = `${data.img}`;
    img.alt = `${data.name.toLowerCase()}`;
    prodWrapper.id = `${data.id}`;
    prodWrapper.title = "Click to view details";
    prodWrapper = joinComponent(prodWrapper, img, caption);
    prodWrapper.addEventListener("click", function(ev){
        let ID = ev.currentTarget.id;
        displayProductionInfo(ID);
    });

    prodContainer.appendChild(prodWrapper);
}