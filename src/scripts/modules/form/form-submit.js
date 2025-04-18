import { formValidation } from "./form-validation";
const btns = document.querySelectorAll(
  '[type="submit"]:not(.quiz__btn--submit)'
);
console.log(btns);
if (btns) {
  btns.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
      evt.preventDefault();
      console.log(evt.target.closest("form"));
      formValidation(evt.target.closest("form"));
    });
  });
}
