let interactButtons = document.querySelectorAll('.content_interaction--button');
let interactTexts = document.querySelectorAll('.content_interactionButtonsAndText--text');

for (let counter = 0; counter <= interactButtons.length-1 ; counter++) {

    interactButtons[counter].onclick = function () {

        if (counter > 0){
            
            interactButtons[counter].classList.add("content_interaction--buttonClick");
            interactButtons[counter-1].classList.remove("content_interaction--buttonClick");

            interactTexts[counter].classList.remove("hidden");        
            interactTexts[counter-1].classList.add("hidden");

        } else {
            interactButtons[0].classList.add("content_interaction--buttonClick");
            interactButtons[1 , 2 , 3].classList.remove("content_interaction--buttonClick");

            interactTexts[1 , 2 , 3].classList.add("hidden");
            interactTexts[0].classList.remove("hidden");

        }

    }
}