import loadMenu from './menuLoad.js'
import bannerImg from './images/banner.png';
import emailIcon from './images/email.svg';
import phoneIcon from './images/phone.svg';

export default function() {
    const parentContainer = document.querySelector('#content');

    const bannerImage = new Image();
    bannerImage.src = bannerImg;
    bannerImage.classList.add('imageLarge');

    const whatsappButton = document.createElement('button');
    whatsappButton.setAttribute('type', 'button');
    whatsappButton.innerHTML = 'Nos WhatsApp';
    whatsappButton.setAttribute('id', 'whatsappButton');
    const waLink = document.createElement('a');
    waLink.setAttribute('href', 'https://wa.me/5215519360044');
    waLink.setAttribute('rel', 'noreferrer noopener');
    waLink.setAttribute('target', '_blank');
    waLink.appendChild(whatsappButton);

    const emailButton = document.createElement('button');
    const emailIco = new Image();
    emailIco.src = emailIcon;
    emailButton.setAttribute('type', 'button');
    emailButton.appendChild(emailIco);
    emailButton.innerHTML += ' masajes.puntodecalma@gmail.com';
    emailButton.setAttribute('id', 'emailButton');
    const emailLink = document.createElement('a');
    emailLink.setAttribute('href', 'mailto:masajes.puntodecalma@gmail.com');
    emailLink.setAttribute('rel', 'noreferrer noopener');
    emailLink.setAttribute('target', '_blank');
    emailLink.appendChild(emailButton);

    const phoneButton = document.createElement('button');
    const phoneIco = new Image();
    phoneIco.src = phoneIcon;
    phoneButton.setAttribute('type', 'button');
    phoneButton.appendChild(phoneIco);
    phoneButton.innerHTML += ' Llamar Ahora';
    phoneButton.setAttribute('id', 'phoneButton');
    const phoneLink = document.createElement('a');
    phoneLink.setAttribute('href', 'tel:+52-55-1936-0044');
    phoneLink.setAttribute('rel', 'noreferrer noopener');
    phoneLink.setAttribute('target', '_blank');
    phoneLink.appendChild(phoneButton);

    const addressDiv = document.createElement('div');
    addressDiv.setAttribute('id', "addressDiv");
    addressDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.415995426221!2d-99.16565900000002!3d19.407912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd99bdbd54b%3A0x120c7f5cac1a26a1!2sPunto%20de%20Calma!5e0!3m2!1sen!2smx!4v1696628761494!5m2!1sen!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'


    const contactDiv = document.createElement('div');
    contactDiv.appendChild(waLink);
    contactDiv.appendChild(phoneLink);
    contactDiv.appendChild(emailLink);

    const contactGrid = document.createElement('div');
    contactGrid.setAttribute('id', 'contactGrid');
    contactGrid.appendChild(contactDiv);
    contactGrid.appendChild(addressDiv);

    loadMenu(parentContainer);
    const contactButton = document.querySelector('#contactUs');
    contactButton.classList.add('activeMenu');
    parentContainer.appendChild(bannerImage);
    parentContainer.appendChild(contactGrid);
};