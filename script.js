"use strict";

function burgerOpenClose() {
  var x = document.getElementById("nav-menu-link");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
