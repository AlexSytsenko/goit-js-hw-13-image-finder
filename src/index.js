import './styles.scss';
import photoApi from './js/photo-api';
import templateImg from './templates/template-img.hbs';
import 'material-design-icons/iconfont/material-icons.css';



const refs = {
    searchForm: document.getElementById('search-form'),
    gallery: document.querySelector('.gallery'),
};




refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;

    photoApi.query = form.elements.query.value;

    photoApi.resetPage();
    clearMarkup();


    fetchPhotos();

    // console.log(event.currentTarget);
    // const form = event.currentTarget;
    // newsApi.query = form.elements.query.value;
}

function fetchPhotos() {
    
    photoApi
        .fetchPhotos()
        .then(hits => {
            createMarkup(hits);
        });
}





function createMarkup(array) {
    const markup = templateImg(array);

    refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
    refs.gallery.innerHTML = '';
}