// Start
// send-message-form
const displayServerResponse = (params) => {
    const { iconName, type, message, parentFormID } = params;
    let statusColor = "#fff";

    switch (type) {
        case "success":
            statusColor = "#49d449";
            break;
        case "error":
            statusColor = "rgba(243, 10, 10, 0.65)";
            break;
        default:
            break;
    }

    document.querySelector(`#${parentFormID} .status-box`).style.backgroundColor = statusColor;
    document.querySelector(`#${parentFormID} .status-box i`).setAttribute("class", iconName);
    document.querySelector(`#${parentFormID} .status-box span`).textContent = message;
    document.querySelector(`#${parentFormID} .status-box`).classList.toggle("hide", false);
    console.log(params);
};

const sendMessageFormHandler = (ev) => {
    ev.preventDefault();
    const formID = ev.target.id;
    const statusBox = document.querySelector(`#${formID} .status-box`);
    const formSubmitButton = document.querySelector(`#${formID} .submit-btn`);

    const baseUrl = 'https://admissions.ghschools.online';
    const iconNames = {
        'error': 'icofont-close-circled',
        'success': 'icofont-check-circled'
    };

    const onSuccess = (response) => {
        console.log(response);
        formSubmitButton.classList.toggle('loading', false);
        displayServerResponse({
            iconName: iconNames[response.status] || iconNames['success'],
            type: response.status.toLowerCase(),
            message: (typeof response.responsemessage === 'string')
                ? response.responsemessage : response.status,
            parentFormID: formID
        });
    };

    const onError = (response) => {
        formSubmitButton.classList.toggle('loading', false);
        console.log(JSON.stringify(response));
        const type = (response.status) ? response.status.toLowerCase() : 'error';
        const message = (response.responsemessage) 
            ? (
                (typeof response.responsemessage === 'string')
                    ? response.responsemessage : type
            ) : "An error occured!"; 

        displayServerResponse({
            iconName: iconNames[response.status] || iconNames['error'],
            type,
            message,
            parentFormID: formID
        });
    };

    const formBody = getAllValuesInForm(formID);
    console.log(formBody);

    statusBox.classList.toggle("hide", true);
    formSubmitButton.classList.toggle('loading', true);
    fetchCrossBrowser(`${baseUrl}/api/send-message`, {
        method: 'POST',
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify(formBody)
    }, onSuccess, onError);
};

document.addEventListener("DOMContentLoaded", function () {
    const sendMessageForm = document.querySelector("#send-message-form");
    sendMessageForm.addEventListener('submit', sendMessageFormHandler);

    if ("sessionStorage" in window && sessionStorage.getItem("contactPageVisited") !== null) return

    let animationTimeline = gsap.timeline();
    animationTimeline.add(gsap.from("main .page-section .container-element .intro > *", 1.3, {x: "-100vw", opacity: 0, stagger: 0.3}))
                        .add(gsap.from("main .page-section #form-wrapper", 1.5, {skewX: "25deg", x: "140vw", ease: "elastic.out(0.3, 0.3)"}));

    try {
        sessionStorage.setItem("contactPageVisited", true);
    } catch (error) {
        console.log(error);
    }
});