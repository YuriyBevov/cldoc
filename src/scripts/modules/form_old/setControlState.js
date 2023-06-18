export function setControlState(control, validState) {
  if(validState === 'valid') {
    control.classList.contains('js-invalid-control') ?
    control.classList.remove('js-invalid-control') : null;
  } else if (validState === 'invalid') {
    !control.classList.contains('js-invalid-control') ?
    control.classList.add('js-invalid-control') : null;
  }
}
