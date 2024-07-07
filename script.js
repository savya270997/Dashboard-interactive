document.addEventListener("DOMContentLoaded", function () {
  const submenuItems = document.querySelectorAll(".nav-item.has-submenu > a");

  submenuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const parentItem = this.parentElement;
      parentItem.classList.toggle("active");
    });
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  const darkModeEnabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", darkModeEnabled);
});

// On page load, check the local storage for dark mode preference
window.addEventListener("load", () => {
  const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }
});

// Mobile sidebar toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
