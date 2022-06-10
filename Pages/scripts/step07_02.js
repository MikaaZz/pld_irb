let interactButtonsTwo = document.querySelectorAll('.content_informationBlockTree--buttons');
let interactTextsTwo = document.querySelectorAll('.container_informationBlockTree--texts');

for (let counter = 0; counter <= interactButtonsTwo.length; counter++) {

    interactButtonsTwo[counter].onclick = function () {

        if (counter == 0) {

            interactTextsTwo[counter].classList.remove("hidden");

            interactTextsTwo[counter + 1].classList.add("hidden");
            interactTextsTwo[counter + 2].classList.add("hidden");
            interactTextsTwo[counter + 3].classList.add("hidden");

        } else if (counter == 1) {
            interactTextsTwo[counter].classList.remove("hidden");

            interactTextsTwo[counter - 1].classList.add("hidden");

            interactTextsTwo[counter + 1].classList.add("hidden");
            interactTextsTwo[counter + 2].classList.add("hidden");

        } else if (counter == 2) {
            interactTextsTwo[counter].classList.remove("hidden");

            interactTextsTwo[counter - 1].classList.add("hidden");
            interactTextsTwo[counter - 2].classList.add("hidden");

            interactTextsTwo[counter + 1].classList.add("hidden");
            
        } else if (counter == 3) {
            interactTextsTwo[counter].classList.remove("hidden");

            interactTextsTwo[counter - 1].classList.add("hidden");
            interactTextsTwo[counter - 2].classList.add("hidden");
            interactTextsTwo[counter - 3].classList.add("hidden");
        }
    }
}