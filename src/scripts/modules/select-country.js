// // Находим элементы
// Обновление скрытого инпута
const select = document.getElementById("country_type");
const hiddenInput = document.getElementById("country_name");
const displayInput = document.getElementById("country_name_display");
if (select && hiddenInput) {
  select.addEventListener("change", () => {
    hiddenInput.value = select.value;
    displayInput.value = select.value;
  });
  hiddenInput.value = select.value;
  displayInput.value = select.value;
}
