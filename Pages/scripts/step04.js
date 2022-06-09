let interactButtons = document.querySelectorAll('.content_infomationButton--icon');
let interactTexts = document.querySelectorAll('.content_infomationButton--text');

for (let counter = 0; counter <= interactButtons.length-1 ; counter++) {

    interactButtons[counter].onclick = function () {

        if (counter > 0){
            
            interactButtons[counter].classList.add("content_interaction--buttonClick");
            interactTexts[counter].classList.remove("hidden");

        } else {
            interactButtons[0].classList.add("content_interaction--buttonClick");
            interactTexts[0].classList.remove("hidden");

        }

    }
}