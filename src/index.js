import './styles.scss';
import templateImg from './templates/template-img.hbs';



const refs = {
    gallery: document.querySelector('.gallery'),
};

const apiKey = "20059079-3862fc9514b48e56c5e47271f";
const query = "cat";
const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=12&key=${apiKey}`;



fetch(url)
    .then(response => response.json())
    .then(hits => createMarkup(hits))
    .catch(error => console.log(error));




function createMarkup(arr) {
    const markup = templateImg(arr);

    refs.gallery.insertAdjacentHTML('beforeend', markup);
}