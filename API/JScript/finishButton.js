let finishButton = document.querySelector(".main_button-finish");

function buttonFinishLMS(currentPage) {
    
    // allways altere to number of last page
    if (currentPage == 11) {
        arrivedAtTheEnd = true;
        nextButton.classList.add("hidden");
        setValueLMS("cmi.core.lesson_status", "completed");
        finishLMS();
    } 
}