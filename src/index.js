import './style.css';
import loadServices from './serviceLoad.js';
import loadContactInfo from './contactLoad.js';
import loadGallery from './galleryLoad.js';

const addListeners = function() {
    const serviceLoadButton = document.querySelector('#services');
    const contactLoadButton = document.querySelector('#contactUs');
    const galleryLoadButton = document.querySelector('#gallery');
    
    serviceLoadButton.addEventListener('click', () => {
        loadServices();
        addListeners();
    });

    contactLoadButton.addEventListener('click', () => {
        loadContactInfo();
        addListeners();
    });

    galleryLoadButton.addEventListener('click', () => {
        loadGallery();
        addListeners();
    });
};

window.addEventListener('DOMContentLoaded', () => {
    loadServices();
    addListeners();
});

