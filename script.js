"use strict";
////////////////W3 example///////////////////////
// function burgerOpenClose() {
//   var x = document.getElementById("nav-menu-link");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

////////////////OmniFood example///////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
