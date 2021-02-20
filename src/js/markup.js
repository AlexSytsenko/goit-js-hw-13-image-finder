import refs from './refs';
import templateImg from '../templates/template-img.hbs';


function updatePhotosMarkup(array) {
    const markup = templateImg(array);

    refs.gallery.insertAdjacentHTML('beforeend', markup);    
}

function clearPhotosMarkup() {
    refs.gallery.innerHTML = '';
}

export { updatePhotosMarkup, clearPhotosMarkup };