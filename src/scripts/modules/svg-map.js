/*import svgPanZoom from "svg-pan-zoom";

const opener = document.querySelector('.svg-map-opener');

if(opener) {
  const map = document.querySelector('.map-modal');
  const closer = map.querySelector('.modal-closer');

  let zoomContainer = null;

  const zoomIn = document.querySelector('.map-modal-zoom--in');
  const zoomOut = document.querySelector('.map-modal-zoom--out');

  zoomIn.addEventListener('click', () => {
    zoomContainer.zoomIn();
  });

  zoomOut.addEventListener('click', () => {
    zoomContainer.zoomOut();
  });

  const onClickOpenMap = () => {
    map.parentNode.classList.add('active');

    opener.removeEventListener('click', onClickOpenMap);

    document.addEventListener('click', onOverlayClickCloseModal);
    document.addEventListener('keydown', onEscClickCloseModal);
    closer.addEventListener('click', modalCloseHandler);
    window.addEventListener('resize', modalCloseHandler);

    zoomContainer = svgPanZoom('.map-modal .svg-map');
  }

  opener.addEventListener('click', onClickOpenMap);

  const onEscClickCloseModal = (evt) => {
    if(evt.key === 'Esc' || evt.key === 'Escape') {
      closeFunc();
    }
  }

  const modalCloseHandler = () => {
    closeFunc();
  }

  const onOverlayClickCloseModal = (evt) => {
    if(evt.target === map.parentNode) {
      closeFunc();
    }
  }

  function closeFunc() {
    map.parentNode.classList.remove('active');

    document.removeEventListener('click', onOverlayClickCloseModal);
    document.removeEventListener('keydown', onEscClickCloseModal);
    closer.removeEventListener('click', modalCloseHandler);
    window.removeEventListener('resize', modalCloseHandler);

    opener.addEventListener('click', onClickOpenMap);

    zoomContainer.destroy();
  }
}*/
