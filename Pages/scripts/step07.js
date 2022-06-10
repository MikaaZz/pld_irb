let interactButtons = document.querySelectorAll('.content_buttonsLaw--button');
let interactTexts = document.querySelectorAll('.container_buttonsLaw--text');

for (let counter = 0; counter <= interactButtons.length; counter++) {

    interactButtons[counter].onclick = function () {
    
        if (counter > 0 && counter <= 7) {
            interactTexts[counter].classList.remove("hidden");

            interactTexts[counter - 1].classList.add("hidden");
            interactTexts[counter + 1].classList.add("hidden");

            interactTexts[counter - 2].classList.add("hidden");
            interactTexts[counter + 2].classList.add("hidden");

            interactTexts[counter - 3].classList.add("hidden");
            interactTexts[counter + 3].classList.add("hidden");

            interactTexts[counter - 4].classList.add("hidden");
            interactTexts[counter + 4].classList.add("hidden");

            interactTexts[counter - 5].classList.add("hidden");
            interactTexts[counter + 5].classList.add("hidden");

            interactTexts[counter - 6].classList.add("hidden");
            interactTexts[counter + 6].classList.add("hidden");

        } else {
            interactTexts[counter].classList.remove("hidden");
            interactTexts[counter + 1].classList.add("hidden");
            interactTexts[counter + 2].classList.add("hidden");
            interactTexts[counter + 3].classList.add("hidden");
            interactTexts[counter + 4].classList.add("hidden");
            interactTexts[counter + 5].classList.add("hidden");
            interactTexts[counter + 6].classList.add("hidden");
        }
    }
}

