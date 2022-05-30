let previousButton = document.querySelector(".main_button-previous");

let nextButton = document.querySelector(".main_button-next");

let startedCourseButton = document.querySelector(".main_button-start")  

function showOrHiddenButtons(currentPage) {

    if (currentPage == null || currentPage == 0) {
        nextButton.classList.add("hidden");
        previousButton.classList.add("hidden");

    } else if (currentPage !== 0 || currentPage !== null || currentPage !== (pageCounter.length-1)) {
        previousButton.classList.remove("hidden");
        nextButton.classList.remove("hidden");
        startedCourseButton.classList.add("hidden");

    } else {
        nextButton.classList.add("hidden");
        previousButton.classList.remove("hidden");
        startedCourseButton.classList.add("hidden");

        buttonFinishLMS(currentPage);
    }
}