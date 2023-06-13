import { gsap } from "gsap";

const activePaths = document.querySelectorAll('.map-modal .svg-map path.active');

if(activePaths) {
  const paths = document.querySelectorAll('.map-modal .svg-map path');
  const tooltip  = document.querySelector('.map-modal-tooltip');
  const chooser  = document.querySelector('.map-modal-chooser');
  const chooserCloser = chooser.querySelector('.chooser-closer');
  let currentPath = null;
  let curPathId = null;
  let isChooserActive = false;
  const tooltipTl = gsap.timeline().pause();

  tooltipTl
    .to(tooltip, {
      visibility: 'visible',
      duration: .4,
      delay: .2,
      opacity: 1,
      ease: 'ease-in'
    });

  const chooserTl = gsap.timeline().pause();

  chooserTl
    .to(chooser, {
      visibility: 'visible',
      duration: .4,
      delay: .2,
      opacity: 1,
      ease: 'ease-in'
    });

  const setTooltipPos = evt => {
    gsap.to(tooltip, {
      x: evt.clientX,
      y: evt.clientY
    })
  };

  const showDesktopChooserHandler = (evt) => {
    initChooser(evt, 'desktop');
  }

  const showMobileChooserHandler = (evt) => {
    initChooser(evt, 'mobile');
  }



  const initChooser = (evt, device) => {
    if(!isChooserActive) {
      isChooserActive = true;

      if(device == 'desktop') {
        gsap.to(chooser, {
          x: evt.clientX,
          y: evt.clientY
        });
      } else {
        gsap.to(chooser, {
          x: evt.touches[0].clientX,
          y: evt.touches[0].clientY
        });
      }

      paths.forEach(item => {
        if(item.dataset.id === curPathId) {
          item.classList.add('clicked');
        } else {
          item.classList.add('transparented');
        }
      });

      tooltipTl.reverse();
      chooserTl.play();
      chooserCloser.addEventListener('click', hideChooserHandler);
    }
  }

  const hideChooserHandler = () => {
    isChooserActive = false;

    chooserTl.reverse();
    chooserCloser.removeEventListener('click', hideChooserHandler);

    paths.forEach(path => {
      path.classList.contains('transparented') ? path.classList.remove('transparented') : null;
      path.classList.contains('clicked') ? path.classList.remove('clicked') : null;
    });
  }

  const showTooltipHandler = (evt) => {
    if(!isChooserActive) {
      currentPath = evt.target;

      window.addEventListener('mousemove', setTooltipPos);
      currentPath.removeEventListener('mouseover', showTooltipHandler);

      const titleRU = currentPath.dataset.titleRu;
      tooltip.innerHTML = titleRU;

      curPathId = currentPath.dataset.id;

      const similarPaths = document.querySelectorAll(`[data-id='${curPathId}']`);
      similarPaths.forEach(item => {
        item.classList.add('infocus');
      });

      tooltipTl.play();
      currentPath.addEventListener('mouseout', hideTooltipHandler);
    } else {
      currentPath.removeEventListener('mouseover', showTooltipHandler);
    }
  }

  const hideTooltipHandler = () => {
    window.removeEventListener('mousemove', setTooltipPos);
    tooltipTl.reverse();

    const similarPaths = document.querySelectorAll(`[data-id='${curPathId}']`);

    similarPaths.forEach(item => {
      item.classList.remove('infocus');
    });

    curPathId = null;
    currentPath.addEventListener('mouseover', showTooltipHandler);
  }

  activePaths.forEach(path => {
    path.addEventListener('mouseover', showTooltipHandler);
    path.addEventListener('click', showDesktopChooserHandler);
    path.addEventListener('touchstart', showMobileChooserHandler);
  });
};
