// The only JavaScript functionality needed:
// switch the website between dark mode and light mode.

const themeToggle = document.querySelector(".theme-switch__checkbox");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
});