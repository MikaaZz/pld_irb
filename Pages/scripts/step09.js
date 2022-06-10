let interactButtons = document.querySelectorAll('.content_informationBlockOne--button');
let interactTexts = document.querySelectorAll('.content_informationBlockOne--text');

for (let counter = 0; counter <= interactButtons.length - 1; counter++) {

    interactButtons[counter].onclick = function () {

        if (counter == 0) {

            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter + 1].classList.add("hidden");
            interactTexts[counter + 2].classList.add("hidden");
            interactTexts[counter + 3].classList.add("hidden");
            interactTexts[counter + 4].classList.add("hidden");
            interactTexts[counter + 5].classList.add("hidden");
            interactTexts[counter + 6].classList.add("hidden");
            interactTexts[counter + 7].classList.add("hidden");

        } else if (counter == 1) {
            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter - 1].classList.add("hidden");

            interactTexts[counter + 1].classList.add("hidden");
            interactTexts[counter + 2].classList.add("hidden");
            interactTexts[counter + 3].classList.add("hidden");
            interactTexts[counter + 4].classList.add("hidden");
            interactTexts[counter + 5].classList.add("hidden");
            interactTexts[counter + 6].classList.add("hidden");

        } else if (counter == 2) {
            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter - 1].classList.add("hidden");
            interactTexts[counter - 2].classList.add("hidden");

            interactTexts[counter + 1].classList.add("hidden");
            interactTexts[counter + 2].classList.add("hidden");
            interactTexts[counter + 3].classList.add("hidden");
            interactTexts[counter + 4].classList.add("hidden");
            interactTexts[counter + 5].classList.add("hidden");
            
        } else if (counter == 3) {
            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter - 1].classList.add("hidden");
            interactTexts[counter - 2].classList.add("hidden");
            interactTexts[counter - 3].classList.add("hidden");

            interactTexts[counter + 1].classList.add("hidden");
            interactTexts[counter + 2].classList.add("hidden");
            interactTexts[counter + 3].classList.add("hidden");
            interactTexts[counter + 4].classList.add("hidden");
        }else if (counter == 4) {
            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter - 1].classList.add("hidden");
            interactTexts[counter - 2].classList.add("hidden");
            interactTexts[counter - 3].classList.add("hidden");
            interactTexts[counter - 4].classList.add("hidden");

            interactTexts[counter + 1].classList.add("hidden");
            interactTexts[counter + 2].classList.add("hidden");
            interactTexts[counter + 3].classList.add("hidden");
        }else if (counter == 5) {
            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter - 1].classList.add("hidden");
            interactTexts[counter - 2].classList.add("hidden");
            interactTexts[counter - 3].classList.add("hidden");
            interactTexts[counter - 4].classList.add("hidden");
            interactTexts[counter - 5].classList.add("hidden");

            interactTexts[counter + 1].classList.add("hidden");
            interactTexts[counter + 2].classList.add("hidden");

        }else if (counter == 6) {
            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter - 1].classList.add("hidden");
            interactTexts[counter - 2].classList.add("hidden");
            interactTexts[counter - 3].classList.add("hidden");
            interactTexts[counter - 4].classList.add("hidden");
            interactTexts[counter - 5].classList.add("hidden");
            interactTexts[counter - 6].classList.add("hidden");

            interactTexts[counter + 1].classList.add("hidden");
        }else if (counter == 7) {
            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter - 1].classList.add("hidden");
            interactTexts[counter - 2].classList.add("hidden");
            interactTexts[counter - 3].classList.add("hidden");
            interactTexts[counter - 4].classList.add("hidden");
            interactTexts[counter - 5].classList.add("hidden");
            interactTexts[counter - 6].classList.add("hidden");
            interactTexts[counter - 7].classList.add("hidden");

        }
    }
}