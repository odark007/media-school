function formatName(str){
    return str.split(" ").map(word => {
        let formattedWord = (word.charAt(0)).toUpperCase()+(word.substring(1)).toLowerCase();
        return formattedWord;
    }).join(" ");
}

function createComponent(type, value, classList) {
    value = value || null;
    classList = classList || null;

    const component = document.createElement(type);
    if (value){
        text = document.createTextNode(value);
        component.appendChild(text);
    }

    if(classList){
        classList.forEach(className => {
            component.classList.add(className);
        });
    }
    return component;
}

function joinComponent(container, ...components) {
    for (let component of components){
        container.appendChild(component);
    }
    return container;
}

function getQuery() {
    const object = {};
    const queryList = window.location.search.substring(1).split('&');

    for (let index = 0; index < queryList.length; index++){
        object[queryList[index].split('=')[0]] = queryList[index].split('=')[1];
    }
    
    return object;
}

function getAllValuesInForm(formID) {
    const body = {};
    document.querySelectorAll(`#${formID} *[name]`).forEach(el => {
        const elementName = el.getAttribute('name');
        if (elementName !== '') {
            body[elementName] = el.value;
            el.value = '';
        }
    });

    return body;
}

function fetchCrossBrowser(url, options, successCallback, errorCallback){
    errorCallback = errorCallback || console.error;
    if(window.fetch){
        fetch(url, options).then(async response => {
            try {
                let result = await response.json();
                successCallback(result);
            } catch (error) {
                errorCallback(error);
            }
        })
    }else{
        var urlObjects = url.split('?');
        var baseUrl = urlObjects[0];
        var params = (urlObjects.length > 1)? urlObjects[1] : '';

        var xhr = new XMLHttpRequest();
        xhr.open(options.method, baseUrl, true);

        if (options.headers) {
            options.headers['Content-Type'] = (options.method === "POST")? "application/x-www-form-urlencoded" : options.headers['Content-Type'];
            xhr.setRequestHeader('Content-Type', options.headers['Content-Type']);
        }

        xhr.onreadystatechange = function(){
            if (this.readyState === 4) {
                this.status === 200 ? successCallback(xhr.response) : errorCallback("error");
            }
        }
        
        if (options.method === "POST" && params === '') {
            // Create a string of urlencoded parameters
            var requestBody = JSON.parse(options.body);
            var requestBodyKeyArray = Object.keys(requestBody);

            for (var i = 0; i < requestBodyKeyArray.length; i++){
                params = (params !== '')? params + '&' : params;
                params += requestBodyKeyArray[i] + "=" + requestBody[requestBodyKeyArray[i]];
            }
        }

        xhr.send(window.encodeURI(params));
    }
}

function crossBrowserEventListener (targetElement, eventType, callback) {
    if ('addEventListener' in targetElement) {
        targetElement.addEventListener(eventType, callback);
    } else {
        targetElement[`on${eventType}`] = callback;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#footyear").textContent = new Date().getFullYear();
    document.querySelector("#close-mobile-menu").onclick = function(ev){
        document.querySelector("nav.mobile-menu").classList.toggle("open");
    }

    document.querySelector("#open-mobile-menu").onclick = function(ev){
        document.querySelector("nav.mobile-menu").classList.toggle("open", true);
    }

    document.querySelectorAll("header nav.mobile-menu a").forEach(link => {
        link.onclick = function(e){
            document.querySelector("nav.mobile-menu").classList.toggle("open", false);
        }
    });

    if (window.ScrollReveal && appear) {
        const sr = ScrollReveal();
        sr.reveal(".page-section:not(aside)", {delay: 250});
        appear({
            init: function(){},
            elements: document.querySelectorAll(".page-section:not(aside)"),
            appear: el => { gsap.from(el, 0.7, {y: "80vh", ease: "Power1.easeOut", delay: 0.2}) }
        });
    }
});
