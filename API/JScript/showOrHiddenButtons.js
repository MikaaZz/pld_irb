let previousButton = document.querySelector(".main_button-previous");  

let nextButton = document.querySelector(".main_button-next");

let startedCourseButton = document.querySelector(".main_button-start");  

function showOrHiddenButtons(currentPage) {

    if (currentPage == 0 || currentPage == null) {
        

    } else if (currentPage !== 0 || currentPage !== null ) {
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

showOrHiddenButtons(currentPage);