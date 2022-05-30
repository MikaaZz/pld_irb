let iframeCourse = document.querySelector("#iframe_course");

function goPage(currentPage) {
    
    if (currentPage >= 0) {
        iframeCourse.src = pageCounter[currentPage];
        setValueLMS("cmi.core.lesson_location", currentPage);
        showOrHiddenButtons(currentPage);
        
    } else {
        falseResult();
    }
}