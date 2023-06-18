import { Modal } from "../../classes/Modal";
import { gsap } from 'gsap';
import { loader } from "../../utils/nodesHelper";
import { refresh } from "../../utils/render";

export function sendForm(form) {

  const thanksModal = document.getElementById('thanks-modal');
  const errorModal = document.getElementById('error-modal');

  function loaderFadeOut() {
    const tl = gsap.timeline({onComplete: () => {
      loader.style.display = 'none';
    }})
    return tl
      .to('.loader svg', {
        opacity: 0,
        duration: 0.3
      });
  }

  function success() {
    loaderFadeOut();
    form.reset();

    refresh(form);
    new Modal(thanksModal).show();
  }

  function error() {
    loaderFadeOut();
    new Modal(errorModal).show();
  }

  // handle the form submission event

  grecaptcha.ready(function() {
    grecaptcha.execute('6LcN8QojAAAAAO1PL61cpNSsvIGf0HxUgbPazq5h', {action: 'submit'}).then(function(token) {
      form.querySelector('.g-recaptcha-response').value = token;

      const data = new FormData(form);
      ajax(form.method, form.action, data, success, error);

      function ajax(method, url, data, success, error) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            if(xhr.response.indexOf('SUCCESS') > -1) {
              success(xhr.response, xhr.responseType);
            } else {
              error(xhr.status, xhr.response, xhr.responseType);
            }
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      };

    });
  });
}


