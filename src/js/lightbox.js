import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';



function pictureHandler(event) {

    // basicLightbox.create(`
	// 	<img width="1400" height="900" src="https://placehold.it/1400x900">
    // `).show();
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