let interactButtons = document.querySelectorAll('.content_interaction--button');
let interactTexts = document.querySelectorAll('.content_interactionButtonsAndText--text');

for (let counter = 0; counter <= interactButtons.length; counter++) {

    interactButtons[counter].onclick = function () {

        if (counter == 0) {

            interactButtons[counter].classList.add("content_interaction--buttonClick");
            interactTexts[counter].classList.remove("hidden");

            interactButtons[counter + 1].classList.remove("content_interaction--buttonClick");
            interactTexts[counter + 1].classList.add("hidden");
            interactButtons[counter + 2].classList.remove("content_interaction--buttonClick");
            interactTexts[counter + 2].classList.add("hidden");
            interactButtons[counter + 3].classList.remove("content_interaction--buttonClick");
            interactTexts[counter + 3].classList.add("hidden");

        } else if (counter == 1) {
            interactButtons[counter].classList.add("content_interaction--buttonClick");
            interactTexts[counter].classList.remove("hidden");

            interactButtons[counter - 1].classList.remove("content_interaction--buttonClick");
            interactTexts[counter - 1].classList.add("hidden");

            interactButtons[counter + 1].classList.remove("content_interaction--buttonClick");
            interactTexts[counter + 1].classList.add("hidden");
            interactButtons[counter + 2].classList.remove("content_interaction--buttonClick");
            interactTexts[counter + 2].classList.add("hidden");

        } else if (counter == 2) {
            interactButtons[counter].classList.add("content_interaction--buttonClick");
            interactTexts[counter].classList.remove("hidden");

            interactButtons[counter - 1].classList.remove("content_interaction--buttonClick");
            interactTexts[counter - 1].classList.add("hidden");
            interactButtons[counter - 2].classList.remove("content_interaction--buttonClick");
            interactTexts[counter - 2].classList.add("hidden");

            interactButtons[counter + 1].classList.remove("content_interaction--buttonClick");
            interactTexts[counter + 1].classList.add("hidden");
            
        } else if (counter == 3) {
            interactButtons[counter].classList.add("content_interaction--buttonClick");
            interactTexts[counter].classList.remove("hidden");

            interactButtons[counter - 1].classList.remove("content_interaction--buttonClick");
            interactTexts[counter - 1].classList.add("hidden");
            interactButtons[counter - 2].classList.remove("content_interaction--buttonClick");
            interactTexts[counter - 2].classList.add("hidden");
            interactButtons[counter - 3].classList.remove("content_interaction--buttonClick");
            interactTexts[counter - 3].classList.add("hidden");
        }

    }
}