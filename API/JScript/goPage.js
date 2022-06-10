let iframeCourse = document.querySelector("#iframe_course");

function goPage(currentPage) {
    
    if (currentPage >= 0) {
        window.scrollTo(0, 0);
        showOrHiddenButtons(currentPage);
        buttonFinishLMS(currentPage);
        iframeCourse.src = pageCounter[currentPage];
        setValueLMS("cmi.core.lesson_location", currentPage);
        
    } else {
        falseResult();
    }
}  