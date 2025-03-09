import { Modal } from "../classes/Modal";
import { limitStr } from "../utils/limitStr";

const collapsedItems = document.querySelectorAll("[data-collapsed-text]");

if (collapsedItems.length) {
  const reviewModal = document.querySelector(".expanded-text-modal");

  collapsedItems.forEach((item) => {
    const originalText = item.innerHTML;
    item.innerHTML = limitStr(originalText, item.dataset.collapsedText);

    const length = originalText.length;

    if (length > item.dataset.collapsedText) {
      const showBtn = document.createElement("button");
      showBtn.innerHTML = item.dataset.collapsedBtnText;
      item.append(showBtn);

      showBtn.addEventListener("click", () => {
        reviewModal.querySelector(".modal-text").innerHTML =
          item.dataset.expandedText;
        new Modal(reviewModal).show();
      });
    }
  });
}
