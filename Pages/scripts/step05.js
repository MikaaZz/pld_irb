let interactButtons = document.querySelectorAll('.content_buttonsInteraction--button');
let interactTexts = document.querySelectorAll('.content_buttonsInteraction--text');
let playAudioButton = document.querySelector('.content_audioInfomation--button');

for (let counter = 0; counter <= interactButtons.length - 1; counter++) {

    interactButtons[counter].onclick = function () {

        if (counter > 0) {

            //interactButtons[counter].classList.add("content_interaction--buttonClick");
            interactTexts[counter].classList.remove("hidden");

        } else {
            //interactButtons[0].classList.add("content_interaction--buttonClick");
            interactTexts[0].classList.remove("hidden");

        }

    }
}

let audioPlay = false;

playAudioButton.onclick = function () {
    
    let audio = document.querySelector(".content_audioInformation--audio");
    
    if (audioPlay == false) {
        
        audio.play();
        return audioPlay=true;

    } else {

        audio.pause();
        return audioPlay=false;
    }

};