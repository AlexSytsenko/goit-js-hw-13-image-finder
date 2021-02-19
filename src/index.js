import './styles.scss';
import photoApi from './js/photo-api';
import refs from './js/refs';
import LoadMoreBtn from './js/components/load-more-btn';
import pictureHandler from './js/lightbox';

import templateImg from './templates/template-img.hbs';
import 'material-design-icons/iconfont/material-icons.css';




// const existingInstance = basicLightbox.create(document.querySelector('.picture'));

// document.querySelector('picture').onclick = existingInstance.show;




const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true
});


refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', loadMoreBtnHandler);
refs.gallery.addEventListener('click', pictureHandler);


function searchFormSubmitHandler(event) {
    event.preventDefault();

    const form = event.currentTarget;
    photoApi.query = form.elements.query.value;

    photoApi.resetPage();
    clearPhotosMarkup();
    fetchPhotos();



    // console.log(event.currentTarget);
    // const form = event.currentTarget;
    // newsApi.query = form.elements.query.value;
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



function updatePhotosMarkup(array) {
    const markup = templateImg(array);

    refs.gallery.insertAdjacentHTML('beforeend', markup);    
}

function clearPhotosMarkup() {
    refs.gallery.innerHTML = '';
}

function loadMoreBtnHandler() {
    
    photoApi.incrementPage();
    fetchPhotos();

}
