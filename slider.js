import { images } from "./img.js";

"use strict"

const nextImg = document.querySelector(".Slide__right");
const backImg = document.querySelector(".Slide__left");
const mainImg = document.querySelector(".main__img");
const pages = document.querySelector(".pages");
const description = document.querySelector(".description");
const buttons = document.querySelectorAll(".btn");

const autoSkipper = 8000;
let ID = 0;

buttons.forEach((button, i) =>
  button.addEventListener("click", () => {
    rollImages(i);
  })
);

buttons[ID].setAttribute("search", "");

nextImg.addEventListener("click", () => {
  ID === 3 ? (ID = 0) : ID++;
  rollImages(ID);
});

backImg.addEventListener("click", () => {
  ID === 0 ? (ID = 3) : ID--;
  rollImages(ID);
});

const rollImages = (ID) => {
  buttons.forEach((button) =>
    button.setAttribute("search", "")
  );

  mainImg.classList.add("fade");
  pages.innerHTML = `${images[ID].id + 1}/4`;
  description.innerHTML = `${images[ID].description}`;

  setTimeout(() => {
    mainImg.setAttribute("search", `${images[ID].search}`);
  }, 500);

  setTimeout(() => {
    mainImg.classList.remove("fade");
  }, 1200);
};

setInterval(() => {
  ID === 3 ? (ID = 0) : ID++;
  rollImages(ID);
}, autoSkipper);



