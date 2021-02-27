import refs from './refs';

import { throttle } from 'throttle-debounce';



let rootElement = document.documentElement;

const handleScroll = throttle(350, () => {
  console.log('scroll');
    
  if ((rootElement.scrollTop - document.documentElement.clientHeight) > 0) {
    refs.scrollToTopBtn.classList.remove('is-hidden');
      
  } else {
    refs.scrollToTopBtn.classList.add('is-hidden');
  }
});

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


export { handleScroll, scrollToTop };