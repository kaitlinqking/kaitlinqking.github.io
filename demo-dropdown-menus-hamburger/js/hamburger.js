let hamburger = document.getElementById("hamburger-icon");
let sidebar = document.getElementById("sidebar");
let closeButton = document.getElementById("close-button");

hamburger.onclick = () => {
    sidebar.classList.add("active");
};

closeButton.onclick = () => {
    sidebar.classList.remove("active");
};