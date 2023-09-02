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
