let prodContainer = null;
let infoContainer = null;
const MAX_PRODUCTION_PER_PAGE = 8;
let productions = [
    {
        id: "prod1",
        createdAt: Date.now(),
        name: "Rising from Bukom",
        img: "productions/images/movie 1.jfif",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod2",
        createdAt: Date.now(),
        name: "Beyond the wound",
        img: "productions/images/movie 2.jfif",
        description: "Lorem"

    },
    {
        id: "prod3",
        createdAt: Date.now(),
        name: "Blood Web",
        img: "productions/images/movie 3.jfif",
        description: "Campus Fyle is a 30-minute entertainment program designed for the youth, especially students in the tertiary schools and students who are aspiring to be in the tertiary schools. It is all about collating entertainment happenings on campus and serving them to students. <br><br>It is a fun-filled youthful entertainment show targeting all youth across the country. Campus Fyle has interesting segments such as campus gist where we give hot fillas happening on campuses. Campus profile also educates viewers on how a specific tertiary institution came into existence. So if you want to know what is happening in your favorite tertiary institution and how they came about then get locked on Campus Fyle. Campus Fyle Live you just got served."
    },
    {
        id: "prod4",
        createdAt: Date.now(),
        name: "Gbelenfo (The cry of the innocent)",
        img: "productions/images/movie 4.jfif",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod5",
        createdAt: Date.now(),
        name: "Ntamkesee (secret unveiled, destiny defined)",
        img: "productions/images/movie 5.jfif",
        description: "Shishi 17 gets into an accident on her birthday with her father Mr. Brown as the result of her step mother planning of killing both of them fortunately, she was the only one who survives. Her stepmother Miss Miriam 31, claims the properties of her father after succeeded in killing her father Mr. Brown, Shishi runs out of the house as a result of maltreatment from her stepmother. <br><br>She manage to secure a job at a restaurant , and finally enroll into the university with the help of Miss Dufie 41 who adopted her after she was leaving her father’s house. <br><br> Kayson 19 the son of Lawyer Frank proposes to her due to the bet with friends during a tie of her working days at the restaurant. But it was after when Shishi found out that Kayson is related to lawyer Frank (the family’s lawyer) who happens to be the brain behind all her struggling. Kay sacrifices his life and help Shishi to get back her father’s property after recording a secret confession conversation between him and his father reports it to the police. Both Miriam and Lawyer Frank end up in prison and Shishi gain back her father’s properties"
    },
    {
        id: "prod6",
        createdAt: Date.now(),
        name: "Kiddie Tyme on GH One TV",
        img: "./images/Production1.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod7",
        createdAt: Date.now(),
        name: "Room 13 (R13) on GH on TV",
        img: "./images/Production2.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod8",
        createdAt: Date.now(),
        name: "7th January",
        img: "./images/7thJanuary.jpg",
        description: "Lorem"

    },
    {
        id: "prod9",
        createdAt: Date.now(),
        name: "Campuz Fyle on Metro TV",
        img: "./images/Production3.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod10",
        createdAt: Date.now(),
        name: "The Riddle ",
        img: "./images/The Riddle GH Media Production.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor error esse sit nemo veniam saepe cumque numquam dolorum eius eos voluptate ipsum aliquid maiores, architecto fugiat placeat alias. Nam, quod."
    },
    {
        id: "prod11",
        createdAt: Date.now(),
        name: "Shishi",
        img: "./images/Shishi.jpeg",
        description: "Shishi 17 gets into an accident on her birthday with her father Mr. Brown as the result of her step mother planning of killing both of them fortunately, she was the only one who survives. Her stepmother Miss Miriam 31, claims the properties of her father after succeeded in killing her father Mr. Brown, Shishi runs out of the house as a result of maltreatment from her stepmother. <br><br>She manage to secure a job at a restaurant , and finally enroll into the university with the help of Miss Dufie 41 who adopted her after she was leaving her father’s house. <br><br> Kayson 19 the son of Lawyer Frank proposes to her due to the bet with friends during a tie of her working days at the restaurant. But it was after when Shishi found out that Kayson is related to lawyer Frank (the family’s lawyer) who happens to be the brain behind all her struggling. Kay sacrifices his life and help Shishi to get back her father’s property after recording a secret confession conversation between him and his father reports it to the police. Both Miriam and Lawyer Frank end up in prison and Shishi gain back her father’s properties"
    },
    {
        id: "prod12",
        createdAt: Date.now(),
        name: "Tick-Tock",
        img: "./images/Production6.jpg",
        description: "Henry Koomson 20, is the legitimate son of the late Mr. James Koomson, a wealthy business man. In his father’s will, he is entitled to 80% of his properties when he turns 21. His step mum, Mr. Diana Koomson an evil greedy cougar schemes his death as a robbery attack.<br><br>Henry Koomson finds himself in a spirit world after he has been murdered, where he meets a pact maker (the custodian of souls) who gives him a second chance to return to earth for 14 days in the body of Lexi 23, a street boy struggling in life. He faces a lot of challenges assuming another man’s life and proving his mum murdered him. Henry (Lexi) goes to seek help from his girlfriend Lilian to expose his step mum as the killer."
    },
    {
        id: "prod13",
        createdAt: Date.now(),
        name: "Bloodstone ",
        img: "./images/Production7.jpg",
        description: "Shamsu (28) raids a peaceful village (Kuntunku) with his brother Zafar (26), as they seek a miral that possesses the power to attrack wealth and give protection. <br><br> Kyda (24) and Aziz (27) are inhabitants of the village of kuntunku and taken as captives by shamsu who puts them to work to get him the mineral their land possesses. The inhabitants however have other plans as they are determined to take back their village."
    },

    {
        id: "prod14",
        createdAt: Date.now(),
        name: "The lodge",
        img: "./images/The Lodge GH Media Production.jpg",
        description: "Melinda (20), and her boyfriend Anthony (24), along with 5 of their friends plan to go lodge at a remote area far from praying eyes. While lodging at the house, they are hunted by a psycho Mr. Smith (35) who happens to be the former one of the house. <br><br> The group of friends go through struggle and meets gruesome deaths while trying to escape Mr. Smith, only for one to survive. "
    },
]

document.addEventListener("DOMContentLoaded", function () {
    prodContainer = document.querySelector("main .page-section .production-container");
    infoContainer = document.querySelector("main .page-section .production-info-container");

    document.querySelector("main .production-info-container #close-pic").addEventListener("click", ev => {
        infoContainer.style.right = "-100%";
        infoContainer.style.marginRight = "-30vw";
    });

    document.querySelector("main .production-info-container img").addEventListener("click", function (ev) {
        ev.currentTarget.classList.toggle("active");
    });

    document.querySelector("main .production-info-container button").addEventListener("click", function (ev) {
        if (window.gsap) {
            gsap.to("body", 1, { backgroundColor: "#111", ease: "Power0.easeNone" });
            gsap.to("body > * ", 1, {
                opacity: "0", stagger: 0.2, ease: "Power0.easeNone", onComplete: function () {
                    document.querySelectorAll("body > *").forEach(element => {
                        element.style.display = "none";
                    });
                    window.location.href = "https://youtube.com";
                }
            });
        } else {
            window.location.href = "https://youtube.com";
        }

    });

    setTimeout(() => {
        getProductionsFromDB(prodContainer);
    }, 500);
});

function displayProductionInfo(productionUID) {
    let productionElement = document.querySelector(`#${productionUID}`);
    let productionInfo = productions.find(productionData => {
        return productionData.id === productionUID;
    });

    // If production exists
    if (productionInfo === undefined && productionElement) {
        // productionElement.getAttribute("data-created-at")
        let infoFromElement = {
            id: productionUID,
            createdAt: Date.now(),
            name: document.querySelector(`#${productionUID} .caption`).textContent,
            img: document.querySelector(`#${productionUID} img`).src,
            description: document.querySelector(`#${productionUID}`).getAttribute("data-description")
        };
        productions.push(infoFromElement);
        productionInfo = infoFromElement;
    }

    // FILL IN DATA TO DISPLAY
    if (productionInfo !== undefined) {
        document.querySelector("main .production-info-container img").src = productionInfo.img;
        document.querySelector("main .production-info-container img").style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.88), rgba(10, 10, 10, 0.88)), url(${productionInfo.img})`;
        document.querySelector("main .production-info-container img").alt = productionInfo.name;
        document.querySelector("main .production-info-container h3").textContent = productionInfo.name;
        document.querySelector("main .production-info-container #production-desc").innerHTML = productionInfo.description;
    }

    infoContainer.style.right = "0%";
    infoContainer.style.marginRight = "0";
}

let getProductionsFromDB = function (HTMLcontainer) {
    let pageno = parseInt(getQuery()[`p`] || 1);
    let successCallback = function (result) {
        HTMLcontainer.innerHTML = "";
        result.forEach(prodItem => {
            createHTMLProduction(prodItem);
        });
    }

    let result = productions.slice((pageno - 1) * (MAX_PRODUCTION_PER_PAGE - 1), (pageno * MAX_PRODUCTION_PER_PAGE));
    createPagination(productions.length, pageno);
    successCallback(result);
    // fetchCrossBrowser(`/api/media/productions?pagination=${pageno}`, { method: "GET"}, successCallback)
}

let createHTMLProduction = function (data) {
    let prodWrapper = createComponent("FIGURE", null, ["cols", "prod-wrapper"]);
    let img = createComponent("IMG", null, ["prod-img"]);
    let caption = createComponent("FIGCAPTION", `${data.name.toLowerCase()}`);

    img.src = `${data.img}`;
    img.alt = `${data.name.toLowerCase()}`;
    prodWrapper.id = `${data.id}`;
    prodWrapper.title = "Click to view details";
    prodWrapper = joinComponent(prodWrapper, img, caption);
    prodWrapper.addEventListener("click", function (ev) {
        let ID = ev.currentTarget.id;
        displayProductionInfo(ID);
    });

    prodContainer.appendChild(prodWrapper);
}

let createPagination = function (noOfProduction, activePage) {
    let noOfPages = noOfProduction / MAX_PRODUCTION_PER_PAGE;
    noOfPages = (Math.round(noOfPages) < noOfPages) ? Math.round(noOfPages) + 1 : Math.round(noOfPages);
    console.log(noOfPages);

    let paginationContainer = document.querySelector(".pagination #pagination-buttons");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= noOfPages; i++) {
        let paginationElement = createComponent("SPAN", i, (i === parseInt(activePage)) ? ["rows", "active"] : ["rows"]);
        paginationElement.setAttribute("data-page", i);
        paginationElement.addEventListener("click", function (ev) {
            window.location.href = `/productions?p=${ev.currentTarget.getAttribute("data-page")}`;
        });
        paginationContainer.appendChild(paginationElement);
    }
}