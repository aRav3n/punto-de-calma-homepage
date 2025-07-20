import loadMenu from "./menuLoad.js";
import bannerImg from "./images/banner.png";
import img1 from "./images/gallery/pic1.jpg";
import img2 from "./images/gallery/pic2.jpg";
import img3 from "./images/gallery/pic3.jpg";
import img4 from "./images/gallery/pic4.jpg";
import img5 from "./images/gallery/pic5.jpg";
import img6 from "./images/gallery/pic6.jpg";
import img7 from "./images/gallery/pic7.jpg";
import img8 from "./images/gallery/pic8.jpg";
import img9 from "./images/gallery/pic9.jpg";
import img10 from "./images/gallery/pic10.jpg";
import img11 from "./images/gallery/pic11.jpg";
import img12 from "./images/gallery/pic12.jpg";
import img13 from "./images/gallery/pic13.jpg";
import img14 from "./images/gallery/pic14.jpg";
import img15 from "./images/gallery/pic15.jpg";

export default function () {
  const bannerImage = new Image();
  bannerImage.src = bannerImg;
  bannerImage.classList.add("imageLarge");

  const galleryGrid = document.createElement("div");
  galleryGrid.setAttribute("id", "galleryGrid");

  const addImage = function (imageSourceName) {
    const photo = new Image();
    photo.src = imageSourceName;
    galleryGrid.appendChild(photo);
  };

  addImage(img1);
  addImage(img2);
  addImage(img3);
  addImage(img4);
  addImage(img5);
  addImage(img6);
  addImage(img7);
  addImage(img8);
  addImage(img9);
  addImage(img10);
  addImage(img11);
  addImage(img12);
  addImage(img13);
  addImage(img14);
  addImage(img15);

  const parentContainer = document.querySelector("#content");
  loadMenu(parentContainer);
  parentContainer.appendChild(bannerImage);
  const galleryButton = document.querySelector("#gallery");
  galleryButton.classList.add("activeMenu");
  parentContainer.appendChild(galleryGrid);
}
