import { gsap } from "gsap";
/*import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);*/

const search = document.querySelector('.search');

if(search) {
  const opener = document.querySelector('.search-opener');
  const closer = search.querySelector('.search-closer');

  const onClickOpenSearchField = () => {

    gsap.to(search, {
      opacity: 1,
      top: 0,
      duration: .7,
      ease: 'ease-in',
      onComplete: () => {
        opener.removeEventListener('click', onClickOpenSearchField);
        closer.addEventListener('click', closeSearchHandler);
      }
    });
  }

  const closeSearchHandler = () => {

    gsap.to(search, {
      opacity: 0,
      top: '-110%',
      duration: .7,
      ease: 'ease-out',
      onComplete: () => {
        opener.addEventListener('click', onClickOpenSearchField);
        closer.removeEventListener('click', closeSearchHandler);
      }
    })
  }

  opener.addEventListener('click', onClickOpenSearchField);
}

/*if(search) {
  const btn = search.querySelector('.search-btn');
  const field = search.querySelector('.search-field');

  const tl = gsap.timeline().pause();

  tl
    .fromTo(field, {
      opacity: 0,
      width: 0,
      visibility: 'hidden',
    }, {
      opacity: 1,
      width: '446px',
      duration: .4,
      ease: 'ease-in',
      visibility: 'visible',
    });

  const onClickOpenSearchField = () => {
    search.classList.add('active');
    tl.play();
  }

  btn.addEventListener('click', onClickOpenSearchField)
}*/

