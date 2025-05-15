// toggle-mode.js
const root = document.documentElement;
const toggleBtn = document.getElementById("toggle-mode");

const savedMode = localStorage.getItem("mode");
if (savedMode === "light") {
    root.classList.add("light-mode");
}

toggleBtn.addEventListener("click", () => {
    root.classList.toggle("light-mode");
    const mode = root.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("mode", mode);
});
