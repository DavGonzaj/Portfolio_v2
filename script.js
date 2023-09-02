const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

("use strict");

//navbar toggle

// const overlay = document.querySelector("[data-overlay]");
// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");
// const navLinks = document.querySelectorAll("[data-nav-link]");

// const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// const navToggleEvent = function (elem) {
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].addEventListener("click", function () {
//       navbar.classList.toggle("active");
//       overlay.classList.toggle("active");
//     });
//   }
// };

// navToggleEvent(navElemArr);
// navToggleEvent(navLinks);

const menuToggle = document.getElementById("menuToggle");
const menuItems = document.getElementById("menuItems");

menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

// Close the mobile menu when a menu item is clicked
const menuLinks = document.querySelectorAll("#menuItems a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuItems.classList.remove("active");
  });
});

// Close the mobile menu when the user clicks outside the menu
document.addEventListener("click", (e) => {
  if (!menuItems.contains(e.target) && !menuToggle.contains(e.target)) {
    menuItems.classList.remove("active");
  }
});

// Toggle the mobile menu when the window is resized
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuItems.classList.remove("active");
  }
});
