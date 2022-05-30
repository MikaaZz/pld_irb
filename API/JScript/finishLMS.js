let finishButton = document.querySelector(".main_button-finish");

function buttonFinishLMS(currentPage) {

    if (currentPage == (pageCounter.length - 1)) {
        arrivedAtTheEnd = true;
        settingClassState();
        finishButton.classList.remove("hidden");
    }

    finishButton.addEventListener("click", function () {
        finishLMS();
    });
}