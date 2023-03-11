import { gsap } from "gsap";

const paths = document.querySelectorAll('.map-modal .svg-map path.active');

if(paths) {
  const tooltip  = document.querySelector('.map-modal-tooltip');
  let currentPath = null;

  const tl = gsap.timeline().pause();

  tl
  .to(tooltip, {
    visibility: 'visible',
    duration: .6,
    delay: .3,
    opacity: 1,
    ease: 'ease-in'
  });

  const setTooltipPos = evt => {
    gsap.to(tooltip, {
      x: evt.clientX,
      y: evt.clientY
    })
  };

  const onMouseOverShowTooltip = (evt) => {
    window.addEventListener('mousemove', setTooltipPos);
    evt.target.removeEventListener('mouseover', onMouseOverShowTooltip);

    const titleEN = evt.target.dataset.titleEn;
    const titleRU = evt.target.dataset.titleRu;

    currentPath = evt.target;

    tooltip.innerHTML = titleRU;

    tl.play();

    currentPath.addEventListener('mouseout', onMouseOutHideTooltip);
  }

  const onMouseOutHideTooltip = (evt) => {
    window.removeEventListener('mousemove', setTooltipPos);
    tl.reverse();

    currentPath.addEventListener('mouseover', onMouseOverShowTooltip);
  }



  paths.forEach(path => {
    path.addEventListener('mouseover', onMouseOverShowTooltip);
  });
};
