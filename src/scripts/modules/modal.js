import { Modal } from "../classes/Modal";

const modals = document.querySelectorAll('.modal');

if(modals) {
  modals.forEach(modal => {
    if(!modal.classList.contains('map-modal')) {
      new Modal(modal, {isBodyLocked: true} );
    }
  });
};
