import { cats } from "./cats.js";

const cardTemplate = document.querySelector("#cats-card");
const catsContent = document.querySelector(".cats .content");

cats.forEach((cat) => {
  let copy = cardTemplate.content.cloneNode(true);
  let cardImage = copy.querySelector(".card_img");
  cardImage.src = cat.img_link;
  let catName = copy.querySelector(".card_title--name");
  catName.innerText = cat.name + ",";
  let catAge = copy.querySelector(".card_title--age");
  catAge.innerText = cat.age + "г.";
  let catRating = copy.querySelector(".card_rating--point");
  catRating.innerText = cat.rate;
  let catDescription = copy.querySelector(".card_description");
  catDescription.innerText = cat.description;
  let favoutite = copy.querySelector(".cats_btn-favourite--path");
  if (cat.favourite === true) {
    favoutite.setAttribute("style", "fill: #E72C55");
  } else {
    favoutite.setAttribute("style", "fill: #DAD1D3");
  }
  catsContent.appendChild(copy);
});

const favourites = document.querySelectorAll(".cats_btn-favourite");
console.log(favourites);

function toggleFavourite(event) {
  let currentState = event.currentTarget.querySelector("path").style.fill;
  if (currentState === "rgb(218, 209, 211)") {
    event.currentTarget
      .querySelector("path")
      .setAttribute("style", "fill: #E72C55");
  } else {
    event.currentTarget
      .querySelector("path")
      .setAttribute("style", "fill: #DAD1D3");
  }
}

favourites.forEach((button) => {
  button.addEventListener("click", (event) => {
    toggleFavourite(event);
  });
});
