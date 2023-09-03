"use strict";

const btn = document.querySelector(".btn");
const card = document.querySelector(".card");

btn.addEventListener("click", () => {
  btn.classList.add("inactive");
  setTimeout(() => {
    btn.classList.add("hidden");
  }, 500);

  setTimeout(() => {
    card.classList.remove("hidden");
    card.classList.add("flex");
  }, 510);

  setTimeout(() => {
    card.classList.remove("inactive");
  }, 550);
});
