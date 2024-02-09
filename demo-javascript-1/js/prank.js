let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let page = document.getElementById("page");

// noButton.style.backgroundColor = "blue";
// noButton.style.padding = "100px";

let currentPadding = 24;

function onNoButtonClick() {
    currentPadding += 12;
    yesButton.style.fontSize = currentPadding + "px";
    yesButton.style.padding =
        `${currentPadding}px ${currentPadding*2}px`;
}

// onNoButtonClick();

noButton.onclick = onNoButtonClick;
yesButton.onclick = () => {
    page.innerHTML =
        "<img src='images/valentines-day.gif'>";
}