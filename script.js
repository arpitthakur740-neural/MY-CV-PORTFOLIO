// Tell the CSS that JavaScript is running
document.documentElement.classList.add("js");

// Find the elements we need
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#main-nav");

// Open or close the menu
function setMenu(isOpen) {
    nav.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "Close" : "Menu";
}

// Run when the Menu button is clicked
menuButton.addEventListener("click", function () {
    setMenu(!nav.classList.contains("open"));
});

// Close the menu after a link is chosen
nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        setMenu(false);
    });
});

// Keep the copyright year current
document.querySelector("#year").textContent = new Date().getFullYear();
