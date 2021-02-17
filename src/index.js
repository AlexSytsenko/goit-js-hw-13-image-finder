import './styles.scss';
import photoApi from './js/photo-api';
import templateImg from './templates/template-img.hbs';
import 'material-design-icons/iconfont/material-icons.css';



const refs = {
    searchForm: document.getElementById('search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    spinner: document.querySelector('.spinner'),
};




refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);




function searchFormSubmitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;

    photoApi.query = form.elements.query.value;

    refs.loadMoreBtn.classList.add('is-hidden');//может перенести в  fetchPhotos???
    refs.spinner.classList.remove('is-hidden');

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
            updateMarkup(hits);
            refs.loadMoreBtn.classList.remove('is-hidden');

            window.scrollTo({
                top: 1000000000000,
                behavior: 'smooth'
            });
            
        })
        .finally(() => {
            refs.spinner.classList.add('is-hidden');
        });
    
    
}





function updateMarkup(array) {
    const markup = templateImg(array);

    refs.gallery.insertAdjacentHTML('beforeend', markup);
    
}

function clearMarkup() {
    refs.gallery.innerHTML = '';
}

function loadMoreBtnHandler() {

    refs.spinner.classList.remove('is-hidden');
    
    photoApi.incrementPage();
    fetchPhotos();

}