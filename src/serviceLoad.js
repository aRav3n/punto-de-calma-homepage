import priceList from "./images/services.jpg";
import loadMenu from "./menuLoad.js";

export default function () {
  const parentContainer = document.querySelector("#content");

  const headingName = document.createElement("h1");
  headingName.innerHTML = "Punto de Calma";

  const myPriceList = new Image();
  myPriceList.classList.add("imageLarge");
  myPriceList.src = priceList;

  loadMenu(parentContainer);
  const serviceButton = document.querySelector("#services");
  serviceButton.classList.add("activeMenu");
  parentContainer.appendChild(headingName);
  parentContainer.appendChild(myPriceList);
}
