export default function(parentContainer) {
    const services = document.createElement('li');
    services.classList.add('activeMenu');
    const contactUs = document.createElement('li');
    const gallery = document.createElement('li');
    services.setAttribute('id', 'services');
    contactUs.setAttribute('id', 'contactUs');
    gallery.setAttribute('id', 'gallery');
    services.innerHTML = 'Nos Servicios';
    contactUs.innerHTML = 'Contactarnos';
    gallery.innerHTML = 'Galería';
    const ul = document.createElement('ul');
    ul.appendChild(services);
    ul.appendChild(contactUs);
    ul.appendChild(gallery);
    const topBar = document.createElement('div');
    topBar.setAttribute('id', 'topBar');
    topBar.appendChild(ul);
    
    parentContainer.innerHTML = '';
    parentContainer.appendChild(topBar);
};