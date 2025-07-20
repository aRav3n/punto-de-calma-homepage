import priceList from "./images/services.jpg";

export default function () {
  const parentContainer = document.querySelector("#content");
  const services = document.createElement("li");
  services.classList.add("activeMenu");
  const contactUs = document.createElement("li");
  const gallery = document.createElement("li");
  services.setAttribute("id", "services");
  contactUs.setAttribute("id", "contactUs");
  gallery.setAttribute("id", "gallery");
  services.innerHTML = "Nos Servicios";
  contactUs.innerHTML = "Contactarnos";
  gallery.innerHTML = "Galería";
  const ul = document.createElement("ul");
  ul.appendChild(services);
  ul.appendChild(contactUs);
  ul.appendChild(gallery);
  const topBar = document.createElement("div");
  topBar.setAttribute("id", "topBar");
  topBar.appendChild(ul);

  const headingName = document.createElement("h1");
  headingName.innerHTML = "Punto de Calma";

  const myPriceList = new Image();
  myPriceList.classList.add("imageLarge");
  myPriceList.src = priceList;

  parentContainer.innerHTML = "";
  parentContainer.appendChild(topBar);
  parentContainer.appendChild(headingName);
  parentContainer.appendChild(myPriceList);
}
