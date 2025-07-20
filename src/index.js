import "./style.css";
import loadServices from "./serviceLoad.js";
import loadContactInfo from "./contactLoad.js";
import loadGallery from "./galleryLoad.js";
import loadFooter from "./footerLoad.js";

const addListeners = function () {
  const buttonListener = function (button, action) {
    button.addEventListener("click", () => {
      action();
      addListeners();
    });
  };
  const serviceLoadButton = document.querySelector("#services");
  const contactLoadButton = document.querySelector("#contactUs");
  const galleryLoadButton = document.querySelector("#gallery");

  buttonListener(serviceLoadButton, loadServices);
  buttonListener(contactLoadButton, loadContactInfo);
  buttonListener(galleryLoadButton, loadGallery);
  const parentContainer = document.querySelector("#content");
  loadFooter(parentContainer);
};

window.addEventListener("DOMContentLoaded", () => {
  loadServices();
  addListeners();
});
