"use strict";

/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// const navLinks = document.querySelectorAll(".navbar-link");

// navLinks.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent default anchor behavior

//     const targetId = link.getAttribute("href").substring(1); // Remove #
//     const targetSection = document.getElementById(targetId);

//     if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   });
// });
