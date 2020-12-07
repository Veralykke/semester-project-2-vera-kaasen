export default function displayMessage(messageType, message, targetElement) {

    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}


//WARNING ETC MESSAGES

function createMessage(type = "success", message ="No message") {

    const html = `<div class = message ${type}">${message}</div`;

    return html;
}

/* 
const containerMessage = document.querySelector(".container-message");

const message = createMessage("warning", "Something went wrong");

containerMessage.innerHTML = message; */