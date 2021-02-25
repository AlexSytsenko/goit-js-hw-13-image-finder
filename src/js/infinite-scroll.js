




function infiniteScroll(fetchPhotos) {

const lastListChild = document.querySelector('.gallery').lastElementChild;

    const options = {
        rootMargin: '200px',
        
    };
    
    const onEntry = (entries, observer) => {

      entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                fetchPhotos();


                observer.disconnect(lastListChild);
            }
        });
    };
   

    const io = new IntersectionObserver(onEntry, options);

    io.observe(lastListChild);
}

// infiniteScroll(infiniteScroll);

export default infiniteScroll;