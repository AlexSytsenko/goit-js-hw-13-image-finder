import './styles.scss';
import photoApi from './js/photo-api';
import refs from './js/refs';
import { updatePhotosMarkup, clearPhotosMarkup } from './js/markup';
import LoadMoreBtn from './js/components/load-more-btn';
import pictureHandler from './js/lightbox';
import 'material-design-icons/iconfont/material-icons.css';

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true
});

function searchFormSubmitHandler(event) {
    event.preventDefault();

    const form = event.currentTarget;
    photoApi.query = form.elements.query.value;

    photoApi.resetPage();
    clearPhotosMarkup();
    fetchPhotos();
}

function fetchPhotos() {
    loadMoreBtn.disable();
    photoApi
        .fetchPhotos()
        .then(hits => {
            updatePhotosMarkup(hits);

            if (refs.gallery.innerHTML === '') {
                loadMoreBtn.hide();
            } else {
                loadMoreBtn.show();
                loadMoreBtn.enable();
            }
        
            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth'
            });
        });
}

function loadMoreBtnHandler() {
    
    photoApi.incrementPage();
    fetchPhotos();
}

// Listeners
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', loadMoreBtnHandler);
refs.gallery.addEventListener('click', pictureHandler);