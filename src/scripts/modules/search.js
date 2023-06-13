import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const search = document.querySelector('.search');

if(search) {
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

  /*Слева добавить кнопку закрытия, кнопка с иконкой должна искать*/

  btn.addEventListener('click', onClickOpenSearchField)
}


/*let tl1 = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".about",
    //pin: true,   // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    //end: "+=500", // end after scrolling 500px beyond the start
    //scrub: 0.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});

tl1.to('.header', {
  padding: '5px',
})

let tl2 = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".about",
    //pin: true,   // pin the trigger element while active
    start: "bottom bottom", // when the top of the trigger hits the top of the viewport
    //end: "+=500", // end after scrolling 500px beyond the start
    //scrub: 0.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});

tl2.to('.header', {
  padding: '15px',
})*/
