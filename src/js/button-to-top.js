
const scrollToTopBtn = document.querySelector('.btn__to__top');

let rootElement = document.documentElement;


function handleScroll() {
    
    if ((rootElement.scrollTop - document.documentElement.clientHeight) > 0) {
        scrollToTopBtn.classList.remove('is-hidden');
      
  } else {
    scrollToTopBtn.classList.add('is-hidden');
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


document.addEventListener("scroll", handleScroll);
scrollToTopBtn.addEventListener("click", scrollToTop);




export { handleScroll, scrollToTop };