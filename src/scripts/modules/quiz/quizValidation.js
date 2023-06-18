import { setControlState } from "../../utils/setControlState";

/*import { sendForm } from "./sendForm";
import { loader } from "../../utils/nodesHelper";
import { modalOverlay } from "../../utils/nodesHelper";
import { bodyLocker } from "../../utils/functions";
import { gsap } from 'gsap';*/

export function quizValidation(controlField) {

  console.log(controlField);

  let invalidControls = [];
  let controls = controlField.querySelectorAll('[data-required]');

  controls.forEach(control => {
    setControlState(control, 'valid');
  })

  controls.forEach(control => {

    if(control.value.trim() === '') {
      invalidControls.push(control)
    }

    /*if(control.type === 'tel') {
      if(control.value.length !== 18) {
        invalidControls.push(control)
      }
    }*/

    if(control.type === 'checkbox') {
      if(!control.checked) {
        invalidControls.push(control)
      }
    }
  })

  if(!invalidControls.length) {
    /*loader.style.display = 'block';
    modalOverlay.style.display = 'block';

    gsap.to('.loader svg', {
      opacity: 1,
      duration: .6
    });

    gsap.to('.modal-overlay', {
      opacity: 1,
      duration: 1,
      ease: 'ease-in'
    });

    bodyLocker(true);
    sendForm(form);*/
    console.log('controls VALID');
    return true;
  } else {
    invalidControls.forEach(control => {
      setControlState(control, 'invalid');
    });
  }
}
