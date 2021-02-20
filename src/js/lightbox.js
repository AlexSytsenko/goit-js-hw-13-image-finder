import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';


function pictureHandler(event) {

    if (event.target.nodeName !== "IMG") {
    return;
  }
    const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  const alt = imageRef.alt;
    
    basicLightbox.create(`
		<img src="${largeImageURL}" alt="${alt}">
    `).show();

}

export default pictureHandler;