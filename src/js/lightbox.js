import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';


function pictureHandler(event) {

    if (event.target.nodeName !== "IMG") {
    return;
  }
    const imageRef = event.target;
    const largeImageURL = imageRef.dataset.source;
    
    basicLightbox.create(`
		<img src=${largeImageURL}>
    `).show();

}

export default pictureHandler;