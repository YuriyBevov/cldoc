export function setControlState(control, validState) {
  if(validState === 'valid') {
    control.classList.contains('invalid-control') ?
    control.classList.remove('invalid-control') : null;
  } else if (validState === 'invalid') {
    !control.classList.contains('invalid-control') ?
    control.classList.add('invalid-control') : null;
  }
}
