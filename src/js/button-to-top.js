import refs from './refs';



let rootElement = document.documentElement;

function handleScroll() {
    
    if ((rootElement.scrollTop - document.documentElement.clientHeight) > 0) {
        refs.scrollToTopBtn.classList.remove('is-hidden');
      
  } else {
    refs.scrollToTopBtn.classList.add('is-hidden');
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


export { handleScroll, scrollToTop };