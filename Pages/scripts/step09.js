let interactButtons = document.querySelectorAll('.content_informationBlockOne--button');
let interactTexts = document.querySelectorAll('.content_informationBlockOne--text');

for (let counter = 0; counter <= interactButtons.length - 1; counter++) {

    interactButtons[counter].onclick = function () {

        if (counter > 0 || counter <= 8) {
            interactTexts[counter].classList.remove("hidden");
            interactTexts[counter - 1].classList.add("hidden");

        } else {
            interactTexts[1, 2, 3, 4, 5, 6, 7].classList.add("hidden");
            interactTexts[0].classList.remove("hidden");

        }
    }
}