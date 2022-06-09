let interactButtons = document.querySelectorAll('.content_buttonsLaw--button');
let interactTexts = document.querySelectorAll('.container_buttonsLaw--text');

let interactButtonsTwo = document.querySelectorAll('.content_informationBlockTree--buttons');
let interactTextsTwo = document.querySelectorAll('.container_informationBlockTree--texts');

for (let counter = 0; counter <= interactButtons.length - 1; counter++) {

    interactButtons[counter].onclick = function () {

        if (counter > 0 || counter <= 7) {
            interactTexts[counter].classList.remove("hidden");
            interactTexts[counter - 1].classList.add("hidden");

        } else {
            interactTexts[1, 2, 3, 4, 5, 6].classList.add("hidden");
            interactTexts[0].classList.remove("hidden");

        }
    }
}

for (let counter = 0; counter <= interactButtonsTwo.length - 1; counter++) {

    interactButtonsTwo[counter].onclick = function () {

        if (counter > 0 || counter <= 4) {
            interactTextsTwo[counter].classList.remove("hidden");
            interactTextsTwo[counter - 1].classList.add("hidden");

        } else {
            interactTextsTwo[1, 2, 3].classList.add("hidden");
            interactTextsTwo[0].classList.remove("hidden");

        }
    }
}