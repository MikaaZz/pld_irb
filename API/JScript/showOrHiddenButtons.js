let previousButton = document.querySelector(".main_button-previous");
let nextButton = document.querySelector(".main_button-next");
let startedCourseButton = document.querySelector(".main_button-start");

function showOrHiddenButtons(currentPage) {

    if (currentPage == 0 || currentPage == null) {
        previousButton.classList.add("hidden");
        nextButton.classList.add("hidden");
        startedCourseButton.classList.remove("hidden");

    } else if (currentPage !== 0 || currentPage !== null && currentPage <= 10) {
        previousButton.classList.remove("hidden");
        nextButton.classList.remove("hidden");
        startedCourseButton.classList.add("hidden");

    }
}